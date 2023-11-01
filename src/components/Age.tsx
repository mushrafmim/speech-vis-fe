import CardLayout from "../layouts/CardLayout";

// Age data images.
import zero_20 from "./../assets/age_category/zero_20.svg"
import twenty_40 from "./../assets/age_category/twenty_40.svg"
import forty_60 from "./../assets/age_category/forty_60.svg"
import sixty_80 from "./../assets/age_category/sixty_80.svg"

import { useEffect, useState } from "react";
import { predictAgeCategory } from "../services/ageService";


const age_category = {
    "<20": {
        image: zero_20,
        text: "0 - 20"
    },
    "20": {
        image: twenty_40,
        text: "20 - 30"
    },
    "30": {
        image: twenty_40,
        text: "30 - 40"
    },
    "40": {
        image: forty_60,
        text: "40 - 50"
    },
    "50": {
        image: forty_60,
        text: "50 - 60"
    },
    "60": {
        image: sixty_80,
        text: "60 - 70"
    },
    ">70": {
        image: sixty_80,
        text: "70+"
    }
}

interface AgeCompProp {
    file: Blob | null,
    isSubmitted: boolean
}

const Age: React.FC<AgeCompProp> = ({ file, isSubmitted }) => {

    const [currentCategory, setCurrentCategory] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [seeMore, setSeeMore] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)

    const makePrediction = () => {
        setIsLoading(true)

        const formData = new FormData()

        formData.append("file", file)

        predictAgeCategory(formData)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setData(res.data)
                setCurrentCategory(res.data.label)
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
            title={"AGE CATEGORY"}
            isLoading={isLoading}
        >
            {seeMore ? <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Age Category</th>
                        <th className="px-4 py-2">Score</th>
                    </tr>
                </thead>
                <tbody>
                    {data &&
                        <tr>
                            <td className="border px-4 py-2">{data.label}</td>
                            <td className="border px-4 py-2">{data.score.toFixed(4)}</td>
                        </tr>
                    }
                </tbody>
            </table>
                :
                <>
                    <div
                        className="flex items-center justify-center mb-4"
                    >
                        <img src={age_category[currentCategory]?.image} className="h-48" alt="" />
                    </div>
                    <div
                        className="flex items-center justify-center"
                    >
                        <div
                            className="text-xl"
                        >
                            {age_category[currentCategory]?.text}
                        </div>
                    </div>
                </>}
            <div
                className="flex justify-end absolute end-0 bottom-0"
            >
                <button
                    className="text-buttonBackground font-bold text-center p-2 mt-4 rounded-lg"
                    onClick={() => setSeeMore(!seeMore)}
                >
                    SEE MORE
                </button>
            </div>
        </CardLayout >
    )
};

export default Age
