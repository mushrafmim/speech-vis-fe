import CardLayout from "../layouts/CardLayout";
import { predictGender } from "../services/genderService";
import female from "./../assets/female.svg"


export default function Gender({ file, onPredict }) {

    const makePrediction = () => {

        predictGender(file)
            .then((res) => {
                console.log(res.data)
            })
            .catch(e => console.log(e))
    }

    onPredict(makePrediction)


    return (
        <CardLayout
            title="GENDER"
        >
            <div className="flex items-center justify-center mb-4">
                <img src={female} className="w-52" alt="" />
            </div>
            <div
                className="flex items-center justify-center"
            >
                <div
                    className="text-xl"
                >
                    FEMALE
                </div>
            </div>
        </CardLayout>
    )
};
