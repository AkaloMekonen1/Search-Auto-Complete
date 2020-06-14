import React from 'react';
// import Countries from './Countries'

    export default class AutoCompletedText extends React.Component{
        constructor(){
            super()
        }
        square = (x) =>{return x*x}
        render(){
            console.log(this.square(4))
            return (
                <div>
                   <p>Yes</p>
                </div>
            )
        }
    }