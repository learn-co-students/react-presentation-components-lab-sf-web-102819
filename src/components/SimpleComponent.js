// Code SimpleComponent Here
import React, { Component } from 'react'

export class SimpleComponent extends Component {
    constructor(){
        super()
        this.state = {
            mood: 'happy'
        }
    }

    moodChange = () => {
        this.setState({
            mood: 'sad'
        })
    }
    render() {
        return (
            <div onClick = {this.moodChange}>
                {this.state.mood}
            </div>
        )
    }
}

export default SimpleComponent
