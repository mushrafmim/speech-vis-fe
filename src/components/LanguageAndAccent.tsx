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
    const [seeMore, setSeeMore] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)

    const makePrediction = () => {
        setIsLoading(true)

        const formData = new FormData()
        formData.append("file", file)

        predictAccent(formData)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setData(res.data)
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
            {seeMore ? <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Accent</th>
                        <th className="px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data && data.map((item: any) => (
                        <tr key={item.label}>
                            <td className="border px-4 py-2">{item.label}</td>
                            <td className="border px-4 py-2">{item.score.toFixed(4)}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
                :
                <>
                    <div className="flex items-center justify-center mb-4">
                        <img src={accentMapping[accent]?.image} className="w-48 rounded-full" alt="" />
                    </div>
                    <div
                        className="text-xl text-center"
                    >
                        {accent && `English - ${accent}`}
                    </div>
                </>
            }
            <div
                className="flex justify-end absolute end-0 bottom-0"
            >
                <button
                    className="text-buttonBackground font-bold text-center p-2 mt-4 rounded-lg"
                    onClick={() => setSeeMore(!seeMore)}
                >
                    SEE {seeMore ? `LESS` : `MORE`}
                </button>
            </div>
        </CardLayout>
    )
}

export default LanguageAndAccent