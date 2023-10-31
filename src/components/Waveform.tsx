import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'

const Waveform = ({ audio }) => {
    const containerRef = useRef()

    useEffect(() => {
        const waveSurfer = WaveSurfer.create({
            container: containerRef.current,
            barWidth: 3,
            waveColor: "#C69749",
            barHeight: 3,
            height: 200,
            cursorWidth: 0,
        })
        waveSurfer.load(audio)

        return () => {
            waveSurfer.destroy()
        }
    }, [audio])

    return <div ref={containerRef} />
}
export default Waveform