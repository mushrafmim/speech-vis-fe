import { useEffect, useState } from "react"
import CardLayout from "../layouts/CardLayout"
import { predictEmotion } from "../services/emotionService"

const emotionMapping = {
    "angry": {
        image: "😡",
        text: "Angry"
    },
    "calm": {
        image: "😌",
        text: "Calm"
    },
    "disgust": {
        image: "🤢",
        text: "Disgust"
    },
    "fearful": {
        image: "😨",
        text: "Fearful"
    },
    "happy": {
        image: "😄",
        text: "Happy"
    },
    "neutral": {
        image: "😐",
        text: "Neutral"
    },
    "sad": {
        image: "😢",
        text: "Sad"
    },
    "surprised": {
        image: "😮",
        text: "Surprised"
    }
}

const Emotion: React.FC = ({ file, isSubmitted }) => {
    const [emotions, setEmotions] = useState([])

    const makePrediction = () => {
        predictEmotion(file)
            .then((res) => {
                console.log(res)
                setEmotions(res.data.slice(0, 3).map((emotion: any) => (emotion.label)))
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
            title="EMOTION"
            width_factor={2}
        >
            <div className="flex align-center justify-evenly">
                {emotions.map((emotion, index) => (
                    <div key={index}>
                        <div className="text-[9.5rem]">
                            {emotionMapping[emotion]?.image}
                        </div>
                        <div
                            className="flex items-center justify-center"
                        >
                            <div
                                className="text-xl"
                            >
                                {emotionMapping[emotion]?.text}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </CardLayout>
    )
}

export default Emotion