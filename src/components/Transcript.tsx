import { useEffect, useState } from "react";
import CardLayout from "../layouts/CardLayout";
import { generateTranscript } from "../services/transcriptService";

export default function Transcript({ file, isSubmitted }) {
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [transcript, setTranscript] = useState("")

    const makePrediction = () => {
        setIsLoading(true)

        const formData = new FormData()
        formData.append("file", file)

        generateTranscript(formData)
            .then((res) => {
                setIsLoading(false)
                setTranscript(res.data.text)
                console.log(res)
            })
            .catch(e => {
                setIsLoading(false)
                console.log(e)
            })
    }

    useEffect(() => {
        if (isSubmitted) {
            makePrediction()
        }
    }, [isSubmitted])


    return (
        <CardLayout
            title="TRANSCRIPT"
            isLoading={isLoading}
        >
            <p className="text-xl">
                {transcript}
            </p>
        </CardLayout>
    )
};
