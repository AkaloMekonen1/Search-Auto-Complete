import React from 'react'
import ReactDOM from 'react-dom'
import AutoCompletedText from './components/AutoCompletedText'

const App = ()=>{
    return(
        <div>
         <AutoCompletedText />
        </div>
    )
}


ReactDOM.render(<App /> ,document.getElementById('app'))