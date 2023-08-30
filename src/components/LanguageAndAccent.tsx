import { useEffect, useState } from "react"
import CardLayout from "../layouts/CardLayout"
import { predictAccent } from "../services/accentService"

// Flag Icons
import us from "./../assets/lang-acc/us.svg"
import cn from "./../assets/lang-acc/cn.svg"
import fr from "./../assets/lang-acc/fr.svg"
import es from "./../assets/lang-acc/es.svg"
import gb from "./../assets/lang-acc/gb.svg"

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
}

const LanguageAndAccent: React.FC = ({ file, isSubmitted }) => {
    const [accent, setAccent] = useState()

    const makePrediction = () => {
        predictAccent(file)
            .then((res) => {
                console.log(res)
                setAccent(res.data[0].label)
            })
            .catch(e => console.log(e))
    }

    useEffect(() => {
        if (isSubmitted) {
            makePrediction()
        }
    }, [isSubmitted])


    return (
        <CardLayout
            title="Language and Accent"
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