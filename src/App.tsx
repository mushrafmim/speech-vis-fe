import React, { useState } from 'react'
import './App.css'
import Age from './components/Age'
import Gender from './components/Gender'
import GeneratedVoice from './components/GeneratedVoice'
import LanguageAndAccent from './components/LanguageAndAccent'

import { BsFillCloudUploadFill, BsFillMicFill } from 'react-icons/bs'
import { predictAgeCategory } from './services/ageService'
import Button from './components/Button'
import { predictGender } from './services/genderService'
import Emotion from './components/Emotion'

function App(): React.ReactElement {

  const [file, setFile] = useState<File | null>(null)
  const [audioURL, setAudioURL] = useState<string | undefined>()


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {

    if (e.target.files && e.target.files[0].size <= 1 * 1024 * 1024) {
      setFile(e.target.files[0])
      const audioURL = URL.createObjectURL(e.target.files[0])
      setAudioURL(audioURL)

    }

  }

  const makePrediction = () => {
    predictAgeCategory(file)
      .then((res) => {
        console.log(res.data)
      })
      .catch(e => console.log(e))

    predictGender(file)
      .then((res) => {
        console.log(res.data)
      })
      .catch(e => console.log(e))
  }

  return (
    <div
      className="mx-16 mt-5"
    >
      <div>
        <div
          className="flex gap-4 bg-white p-2 rounded-lg items-center shadow-sm"
        >
          <div
            className="rounded-full border-4 w-16 h-16 flex justify-center items-center bg-primary text-white"
          >
            <BsFillMicFill size={35} />
          </div>
          <div className="relative rounded-full border-4 w-16 h-16 flex justify-center items-center bg-white text-primary">
            <input
              type="file"
              accept="audio/*"
              onChange={handleFileChange}
              title=""
              className="opacity-0 absolute"
            />
            <BsFillCloudUploadFill
              size={35}
            />
          </div>
          <audio controls={true} src={audioURL}>
          </audio>
          <Button text="PREDICT" onClick={makePrediction} disabled={audioURL ? false : true} />
        </div>
        <div>
        </div>
      </div>
      <div className="flex">
        <Age category="[20, 40)" />
        <Gender onPredict={makePrediction} />
        <LanguageAndAccent />
        <GeneratedVoice />
        <Emotion />
      </div>
    </div>
  )
}

export default App;

