import CardLayout from "../layouts/CardLayout";
import male from "./../assets/male.svg"
import teenager from "./../assets/teenager.svg"
import worker from "./../assets/worker.svg";
import female from "./../assets/female.svg";
import { useEffect, useState } from "react";
import { predictAgeCategory } from "../services/ageService";

interface age_props {
    category: string
}

const age_category = {
    "[0, 20)": {
        image: teenager,
        text: "0 - 20"
    },
    "[20, 40)": {
        image: worker,
        text: "20 - 40"
    },
    "[40, 60)": {
        image: male,
        text: "40 - 60"
    },
    "[60, 80)": {
        image: female,
        text: "60 - 80"
    }
}

const Age: React.FC<age_props> = ({ file, isSubmitted }) => {

    const [currentCategory, setCurrentCategory] = useState("[40, 60)")

    const makePrediction = () => {
        predictAgeCategory(file)
            .then((res) => {
                console.log(res)
                setCurrentCategory(res.data[0].label)
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
            title={"AGE CATEGORY"}
        >
            <div
                className="flex items-center justify-center mb-4"
            >
                <img src={age_category[currentCategory].image} className="h-48" alt="" />
            </div>
            <div
                className="flex items-center justify-center"
            >
                <div
                    className="text-xl"
                >
                    {age_category[currentCategory].text}
                </div>
            </div>
        </CardLayout >
    )
};

export default Age
