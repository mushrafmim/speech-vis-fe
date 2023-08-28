import CardLayout from "../layouts/CardLayout"
import genVoice from "./../assets/gen-voice.png"


const GeneratedVoice: React.FC = () => {
    return (
        <CardLayout
            title="Generated Voice?"
        >
            <div className="flex items-center justify-center mb-4">
                <img src={genVoice} className="w-48 rounded-full" alt="" />
            </div>
            <div
                className="text-xl text-center"
            >
                English - American
            </div>
        </CardLayout>
    )
}

export default GeneratedVoice