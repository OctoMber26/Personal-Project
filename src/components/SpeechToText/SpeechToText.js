import React, { useState, useEffect, Fragment } from 'react';
import "./Speech.css";

const SpeechRecognition =
  window.SpeechRecognition || window.webkitSpeechRecognition
const mic = new SpeechRecognition()

mic.continuous = true
mic.interimResults = true
mic.lang = 'en-US'

function SpeechToText() {
  const [isListening, setIsListening] = useState(false)
  const [note, setNote] = useState(null)
  const [savedNotes, setSavedNotes] = useState([])

  useEffect(() => {
    handleListen()
  }, [isListening])

  const handleListen = () => {
    if (isListening) {
      mic.start()
      mic.onend = () => {
        console.log('continue..')
        mic.start()
      }
    } else {
      mic.stop()
      mic.onend = () => {
        console.log('Stopped Mic on Click')
      }
    }
    mic.onstart = () => {
      console.log('Mics on')
    }

    mic.onresult = event => {
      const transcript = Array.from(event.results)
        .map(result => result[0])
        .map(result => result.transcript)
        .join('')
      console.log(transcript)
      setNote(transcript)
      mic.onerror = event => {
        console.log(event.error)
      }
    }
  }

  const handleDeleteNotes = () => {
    setNote('')
  }

  return (
    <Fragment>
        <div className='container text-center mt-5'>
      <h1 className='speech_title'>Speech To Text</h1>
      <div className="container mt-5 ">
        <div className="box col-lg-5 mx-auto">
          <h2 className='subtitle'>Current Note</h2>
          {isListening ? <span>🎙️</span> : <span>🛑🎙️</span>}
          <button onClick={handleDeleteNotes} disabled={!note}>
            Delete Note
          </button>
          <button className='start_stop' onClick={() => setIsListening(prevState => !prevState)}>
            Start/Stop
          </button>
          <p className='note'>{note}</p>
        </div>
      </div>
      </div>
      </Fragment>
  )
}

export default SpeechToText;