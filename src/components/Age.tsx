import CardLayout from "../layouts/CardLayout";
import male from "./../assets/male.svg"
import teenager from "./../assets/teenager.svg"
import worker from "./../assets/worker.svg";
import female from "./../assets/female.svg";

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

const Age: React.FC<age_props> = ({ category }) => {

    const cat = age_category[category];

    console.log(cat)

    return (
        <CardLayout
            title={"AGE CATEGORY"}
        >
            <div
                className="flex items-center justify-center mb-4"
            >
                <img src={cat.image} className="w-52" alt="" />
            </div>
            <div
                className="flex items-center justify-center"
            >
                <div
                    className="text-xl"
                >
                    {cat.text}
                </div>
            </div>
        </CardLayout >
    )
};

export default Age
