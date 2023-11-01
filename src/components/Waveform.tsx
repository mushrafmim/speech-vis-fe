import { useEffect, useRef } from 'react'
import WaveSurfer from 'wavesurfer.js'
import TimelinePlugin from 'wavesurfer.js/dist/plugins/timeline.js'

const Waveform = ({ audio }) => {
    const containerRef = useRef()

    useEffect(() => {
        // Create a second timeline
        const bottomTimline = TimelinePlugin.create({
            height: 10,
            timeInterval: 0.1,
            primaryLabelInterval: 3,
            style: {
                fontSize: '10px',
                color: '#ffffff',
            },
        })

        const waveSurfer = WaveSurfer.create({
            container: containerRef.current,
            barWidth: 3,
            waveColor: "#C69749",
            barHeight: 1,
            height: 200,
            cursorWidth: 0,
            // plugins: [
            //     bottomTimline,
            // ]
        })

        waveSurfer.load(audio)

        return () => {
            waveSurfer.destroy()
        }
    }, [audio])

    return <div ref={containerRef} />
}
export default Waveform