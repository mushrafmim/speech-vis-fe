import CardLayout from "../layouts/CardLayout";
import male from "./../assets/male.svg"

export default function Age() {
    return (
        <CardLayout
            title={"AGE CATEGORY"}
        >
            <div
                className="flex items-center justify-center"
            >
                <img src={male} className="w-52 mb-4" alt="" />
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
        </CardLayout>
    )
};
