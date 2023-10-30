import CardLayout from "../layouts/CardLayout";

// Age data images.
import zero_20 from "./../assets/age_category/zero_20.svg"
import twenty_40 from "./../assets/age_category/twenty_40.svg"
import forty_60 from "./../assets/age_category/forty_60.svg"
import sixty_80 from "./../assets/age_category/sixty_80.svg"

import { useEffect, useState } from "react";
import { predictAgeCategory } from "../services/ageService";


const age_category = {
    "[0, 20)": {
        image: zero_20,
        text: "0 - 20"
    },
    "[20, 40)": {
        image: twenty_40,
        text: "20 - 40"
    },
    "[40, 60)": {
        image: forty_60,
        text: "40 - 60"
    },
    "[60, 80)": {
        image: sixty_80,
        text: "60 - 80"
    }
}

interface AgeCompProp {
    file: Blob | null,
    isSubmitted: boolean
}

const Age: React.FC<AgeCompProp> = ({ file, isSubmitted }) => {

    const [currentCategory, setCurrentCategory] = useState<string>("")
    const [isLoading, setIsLoading] = useState<boolean>(false)

    const makePrediction = () => {
        setIsLoading(true)

        predictAgeCategory(file)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setCurrentCategory(res.data[0].label)
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
            <div
                className="flex items-center justify-center mb-4"
            >
                <img src={age_category[currentCategory]?.image} className="h-48" alt="" />
            </div>
            <div
                className="flex items-center justify-center"
            >
                <div
                    className="text-xl text-buttonBackground"
                >
                    {age_category[currentCategory]?.text}
                </div>
            </div>
        </CardLayout >
    )
};

export default Age
