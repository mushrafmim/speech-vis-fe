import React, { useState } from 'react'
import './App.css'
import Age from './components/Age'
import Gender from './components/Gender'
import Pitch from './components/Pitch'
import LanguageAndAccent from './components/LanguageAndAccent'

import { BsFillCloudUploadFill, BsFillMicFill } from 'react-icons/bs'
import Button from './components/Button'
import Emotion from './components/Emotion'
import Transcript from './components/Transcript'

function App() {

  const [file, setFile] = useState<File | null>(null)
  const [audioURL, setAudioURL] = useState<string | undefined>()

  const [onPredict, setOnPredict] = useState<boolean>(false)


  const handleFileChange = (e) => {
    setOnPredict(false)

    console.log("OnPredict Status, ", onPredict)

    if (e.target.files && e.target.files[0].size <= 1 * 1024 * 1024) {
      setFile(e.target.files[0])
      const audioURL = URL.createObjectURL(e.target.files[0])
      setAudioURL(audioURL)


    }

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
          <Button text="PREDICT" onClick={() => setOnPredict(true)} disabled={audioURL || onPredict ? false : true} />
        </div>
        <div>
        </div>
      </div>
      <div className="flex justify-between">
        <Age file={file} isSubmitted={onPredict} />
        <Gender file={file} isSubmitted={onPredict} />
        <LanguageAndAccent file={file} isSubmitted={onPredict} />
        <Pitch file={file} isSubmitted={onPredict} />
      </div>
      <div className="flex justify-between">
        <Emotion file={file} isSubmitted={onPredict} />
        <Transcript file={file} isSubmitted={onPredict} />
      </div>
    </div>
  )
}

export default App;

