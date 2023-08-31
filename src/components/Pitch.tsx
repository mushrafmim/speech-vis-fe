import GaugeComponent from "react-gauge-component"
import CardLayout from "../layouts/CardLayout"
import { useEffect, useState } from "react"
import { getPitch } from "../services/pitchService"

const Pitch: React.FC = ({ file, isSubmitted }) => {
    const [pitch, setPitch] = useState<number | undefined>(0)

    const makePrediction = () => {

        const formdata = new FormData()
        formdata.append("file", file)

        getPitch(formdata)
            .then((res) => {
                setPitch(res.data.pitch)
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
            title="Pitch"
        >
            <div className="flex items-center justify-center mb-4">
                {/* <img src={genVoice} className="w-48 rounded-full" alt="" /> */}
                <GaugeComponent
                    value={pitch}
                    maxValue={300}
                    labels={{
                        valueLabel: {
                            formatTextValue: (value) => `${value} Hz`,
                            style: {
                                fontSize: '40px',
                                color: 'black',
                                backgroundClip: 'black'
                            }
                        },
                        tickLabels: {
                            type: 'outer',
                            ticks: [
                                { value: 40 },
                                { value: 80 },
                                { value: 120 },
                                { value: 160 },
                                { value: 200 },
                            ]
                        }
                    }}
                />
            </div>
            <div
                className="text-xl text-center"
            >
            </div>
        </CardLayout>
    )
}

export default Pitch