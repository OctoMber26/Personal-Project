import React from 'react';
import Home from './components/Home/Home';
import { Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import SpeechToText from './components/SpeechToText/SpeechToText';
import Speech from './components/TextToSpeech/TextToSpeech';

const App=()=>{
  return(
   <Switch>
     <Route path="/text" exact>
      <Speech/>
    </Route>
     <Route path="/speech" exact>
      <SpeechToText/>
    </Route>
    <Route path="/">
      <Home/>
    </Route>
   </Switch>
  )
}

export default App;
