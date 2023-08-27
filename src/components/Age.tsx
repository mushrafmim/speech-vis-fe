import CardLayout from "../layouts/CardLayout";
import male from "./../assets/male.svg"
import teenager from "./../assets/teenager.svg"

const age_category = {
    "[0, 20)": teenager,
    "[20, 40)": 
}

const Age: React.FC = (category: string,) => {
    return (
        <CardLayout
            title={"AGE CATEGORY"}
        >
            <div
                className="flex items-center justify-center mb-4"
            >
                <img src={male} className="w-52" alt="" />
            </div>
            <div
                className="flex items-center justify-center"
            >
                <div
                    className="text-xl"
                >
                    30 - 35
                </div>
            </div>
        </CardLayout >
    )
};

export default Age
