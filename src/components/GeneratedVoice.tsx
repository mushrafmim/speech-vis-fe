import GaugeComponent from "react-gauge-component"
import CardLayout from "../layouts/CardLayout"
import genVoice from "./../assets/gen-voice.png"


const GeneratedVoice: React.FC = () => {
    return (
        <CardLayout
            title="Pitch"
        >
            <div className="flex items-center justify-center mb-4">
                {/* <img src={genVoice} className="w-48 rounded-full" alt="" /> */}
                <GaugeComponent
                    value={50}
                    maxValue={200}
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
                English - American
            </div>
        </CardLayout>
    )
}

export default GeneratedVoice