import { useEffect, useState } from "react";
import CardLayout from "../layouts/CardLayout";
import { predictGender } from "../services/genderService";
import female from "./../assets/female.svg"
import male from "./../assets/male.svg"

const gender = {
    "male": male,
    "female": female
}


export default function Gender({ file, isSubmitted }) {
    const [currentGender, setCurrentGender] = useState()

    const makePrediction = () => {

        predictGender(file)
            .then((res) => {
                console.log(res)
                setCurrentGender(res.data[0].label)
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
            title="GENDER"
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
