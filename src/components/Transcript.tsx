import { useEffect, useState } from "react";
import CardLayout from "../layouts/CardLayout";
import { generateTranscript } from "../services/transcriptService";

export default function Transcript({ file, isSubmitted }) {
    const [transcript, setTranscript] = useState("")

    const makePrediction = () => {
        generateTranscript(file)
            .then((res) => {
                setTranscript(res.data.text)
                console.log(res)
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
            title="TRANSCRIPT"
        >
            <p className="text-2xl">
                {transcript}
            </p>
        </CardLayout>
    )
};
