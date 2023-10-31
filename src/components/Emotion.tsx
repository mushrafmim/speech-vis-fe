import { useEffect, useState } from "react"
import CardLayout from "../layouts/CardLayout"
import { predictEmotion } from "../services/emotionService"
import Waveform from "./Waveform"

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

const data = ["sad", "happy", "angry", "calm", "disgust", "fearful", "neutral", "surprised"]

interface EmotionCompProp {
    file: Blob | null,
    audioURL: string | undefined,
    isSubmitted: boolean
}

const Emotion: React.FC<EmotionCompProp> = ({ file, isSubmitted, audioURL }) => {
    const [emotions, setEmotions] = useState([])
    const [isLoading, setIsLoading] = useState<boolean>(false)


    const makePrediction = () => {
        setIsLoading(true)

        const formData = new FormData()

        formData.append("file", file)


        predictEmotion(formData)
            .then((res) => {
                console.log(res)
                setIsLoading(false)
                setEmotions(res.data)
                console.log(emotions)
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
            isLoading={isLoading}
        >
            <div className="flex align-center">
                <div className='flex-grow-[2] h-[100%]'>
                    <Waveform audio={audioURL} />
                    <div className="flex">
                        {emotions.map((emotion, index) => (
                            <div
                                key={index}
                                className="text-center border"
                                style={{ width: `${100 / emotions.length}%` }}
                            >{emotion[0].label}</div>
                        )
                        )}
                    </div>
                </div>
            </div>
            {/* <div className="flex align-center justify-evenly">
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
                ))} */}
            {/* </div> */}
        </CardLayout >
    )
}

export default Emotion