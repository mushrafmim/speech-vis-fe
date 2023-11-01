import React, { useEffect, useState } from "react";
import CardLayout from "../layouts/CardLayout";
import { predictGender } from "../services/genderService";
import female from "./../assets/female.svg"
import male from "./../assets/male.svg"

const gender = {
    "male": male,
    "female": female
}

interface GenderCompProp {
    file: Blob | null,
    isSubmitted: boolean
}

const Gender: React.FC<GenderCompProp> = ({ file, isSubmitted }) => {
    const [currentGender, setCurrentGender] = useState("")
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [seeMore, isSeeMore] = useState<boolean>(false)
    const [data, setData] = useState<any>(null)


    const makePrediction = () => {
        setIsLoading(true)
        console.log("Predicting")

        const formdata = new FormData()
        formdata.append("file", file)

        predictGender(formdata)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setData(res.data)
                setCurrentGender(res.data[0].label)
            })
            .catch(e => {
                setIsLoading(false)
                console.log(e)
            })
    }


    useEffect(() => {
        if (isSubmitted) {
            makePrediction()
        }
    }, [isSubmitted])


    return (
        <CardLayout
            title="GENDER"
            isLoading={isLoading}
        >
            {seeMore ? <table className="table-auto w-full">
                <thead>
                    <tr>
                        <th className="px-4 py-2">Label</th>
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
                        <img src={gender[currentGender]} className="w-48" alt="" />
                    </div>
                    <div
                        className="flex items-center justify-center"
                    >
                        <div
                            className="text-xl"
                        >
                            {currentGender}
                        </div>
                    </div>
                </>
            }
            <div
                className="flex justify-end absolute end-0 bottom-0"
            >
                <button
                    className="text-buttonBackground font-bold text-center p-2 mt-4 rounded-lg"
                    onClick={() => isSeeMore(!seeMore)}
                >
                    SEE MORE
                </button>
            </div>
        </CardLayout >
    )
};


export default Gender