import CardLayout from "../layouts/CardLayout";
import female from "./../assets/female.svg"


export default function Gender() {
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
