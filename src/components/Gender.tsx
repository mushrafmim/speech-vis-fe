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


    const makePrediction = () => {
        setIsLoading(true)

        predictGender(file)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
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
            <div className="flex items-center justify-center mb-4">
                <img src={gender[currentGender]} className="w-52" alt="" />
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
        </CardLayout>
    )
};


export default Gender