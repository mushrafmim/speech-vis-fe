import { useEffect, useState } from "react"
import CardLayout from "../layouts/CardLayout"
import { predictAccent } from "../services/accentService"

// Flag Icons
import cn from "./../assets/lang-acc/cn.svg"
import fr from "./../assets/lang-acc/fr.svg"
import es from "./../assets/lang-acc/es.svg"
import gb from "./../assets/lang-acc/gb.svg"
import sa from "./../assets/lang-acc/sa.svg"

const accentMapping = {
    "english": {
        image: gb,
        text: "English"
    },
    "mandarin": {
        image: cn,
        text: "Mandarin"
    },
    "spanish": {
        image: es,
        text: "Spanish"
    },
    "french": {
        image: fr,
        text: "French"
    },
    "arabic": {
        image: sa,
        text: "Arabic"
    },
}

interface LanguageAndAccentProp {
    file: Blob | null,
    isSubmitted: boolean
}

const LanguageAndAccent: React.FC<LanguageAndAccentProp> = ({ file, isSubmitted }) => {
    const [accent, setAccent] = useState()
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const makePrediction = () => {
        setIsLoading(true)

        const formData = new FormData()
        formData.append("file", file)

        predictAccent(formData)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setAccent(res.data[0].label)
            })
            .catch(e => {
                console.log(e)
                setIsLoading(false)
            })
    }

    useEffect(() => {
        if (isSubmitted) {
            makePrediction()
        }
    }, [isSubmitted])


    return (
        <CardLayout
            title="Language and Accent"
            isLoading={isLoading}
        >
            <div className="flex items-center justify-center mb-4">
                <img src={accentMapping[accent]?.image} className="w-48 rounded-full" alt="" />
            </div>
            <div
                className="text-xl text-center"
            >
                {accent && `English - ${accent}`}
            </div>
        </CardLayout>
    )
}

export default LanguageAndAccent