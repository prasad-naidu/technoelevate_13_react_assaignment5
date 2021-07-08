import React, { Component } from 'react'

export default class Color extends Component {
    constructor(props){
        super(props)
        this.state={
            color:""
        }
    }

change=(e)=>{
    console.log(e.target.value)
    this.setState({
        color:e.target.value
    })

}

    render() {
        return (
            <div className="maindiv" >
            <div className="insidediv" >
                <h2 className="heading" > choose color:{this.state.color}</h2>
                <div className="selection" style={{backgroundColor:this.state.color}} >
                <select    onChange={this.change}>
                <optgroup label="select color">  
                
                    <option  value="blue">blue</option>
                    <option value="black">black</option>
                    <option value="red">red</option>
                    <option value="yellow">yellow</option>
                    <option value="green">green</option>
                    </optgroup>
                </select>
                </div>
            </div>
            </div>
        )
    }
}
