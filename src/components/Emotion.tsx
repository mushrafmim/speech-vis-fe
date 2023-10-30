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

interface EmotionCompProp {
    file: Blob | null,
    isSubmitted: boolean
}

const Emotion: React.FC<EmotionCompProp> = ({ file, isSubmitted }) => {
    const [emotions, setEmotions] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const makePrediction = () => {
        setIsLoading(true)
        predictEmotion(file)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setEmotions(res.data.slice(0, 3))
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
            title="EMOTION"
            width_factor={2}
            isLoading={isLoading}
        >
            <div className="flex align-center justify-evenly">
                {emotions.map((emotion, index) => (
                    <div key={index} className="flex-1">
                        <div className="text-[9.5rem]">
                            {emotionMapping[emotion?.label]?.image}
                        </div>
                        <div
                            className="flex items-center justify-between px-4"
                        >
                            <div
                                className="text-xl"
                            >
                                {emotionMapping[emotion?.label]?.text}
                            </div>
                            <div>
                                {`${(emotion.score * 100).toFixed(2)} %`}
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </CardLayout>
    )
}

export default Emotion