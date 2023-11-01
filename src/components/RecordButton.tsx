import { useState } from "react"
import { BsFillMicFill } from "react-icons/bs"

export default function RecordButton({ setFile, setAudioURL, setOnPredict, isRecording, setIsRecording }) {
    const [mediaRecorder, setMediaRecorder] = useState < MediaRecorder > (null)

    const recordAudio = () => {
        setIsRecording(true)
        setOnPredict(false)

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' })
                mediaRecorder.start()
                const audioChunks: any[] = []

                mediaRecorder.addEventListener("dataavailable", (event: any) => {
                    audioChunks.push(event.data)
                })

                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks, { type: "audio/wav" })
                    console.log(audioBlob)
                    const audioURL = URL.createObjectURL(audioBlob)
                    setFile(audioBlob as File)
                    setAudioURL(audioURL)
                })

                setMediaRecorder(mediaRecorder)
            })
    }

    const stopRecording = () => {
        setIsRecording(false)
        mediaRecorder.stop()
    }

    return (
        <button
            className="rounded-full bg-buttonBackground w-16 h-16 flex justify-center items-center text-black"
            onClick={() => isRecording ? stopRecording() : recordAudio()}
        // disabled={isRecording ? true : false}
        >
            <BsFillMicFill
                size={35}
                className={isRecording ? `animate-pulse text-red` : `text-black`}
            />
        </button>
    )
};
