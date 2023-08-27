import CardLayout from "../layouts/CardLayout"
import us from "./../assets/lang-acc/us.svg"

const LanguageAndAccent: React.FC = () => {
    return (
        <CardLayout
            title="Language and Accent"
        >
            <div className="flex items-center justify-center mb-4">
                <img src={us} className="w-48 rounded-full" alt="" />
            </div>
            <div
                className="text-xl text-center"
            >
                English - American
            </div>
        </CardLayout>
    )
}

export default LanguageAndAccent