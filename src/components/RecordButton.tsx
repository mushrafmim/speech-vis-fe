import { BsFillMicFill } from "react-icons/bs"

export default function RecordButton({ setFile, setAudioURL, setOnPredict, isRecording, setIsRecording }) {

    const recordAudio = () => {
        setIsRecording(true)
        setOnPredict(false)

        navigator.mediaDevices.getUserMedia({ audio: true })
            .then(stream => {
                const mediaRecorder = new MediaRecorder(stream)
                mediaRecorder.start()
                const audioChunks: any[] = []

                mediaRecorder.addEventListener("dataavailable", (event: any) => {
                    audioChunks.push(event.data)
                })

                mediaRecorder.addEventListener("stop", () => {
                    const audioBlob = new Blob(audioChunks)
                    const audioURL = URL.createObjectURL(audioBlob)
                    setAudioURL(audioURL)
                    setFile(audioBlob as File)
                })

                setTimeout(() => {
                    setIsRecording(false)
                    mediaRecorder.stop()
                }, 3000)
            })
    }

    return (
        <button
            className="rounded-full border-4 w-16 h-16 flex justify-center items-center text-white"
            onClick={() => recordAudio()}
            disabled={isRecording ? true : false}
        >
            <BsFillMicFill
                size={35}
                className={isRecording ? `animate-pulse text-red-500` : `text-gray-500`}
            />
        </button>
    )
};
