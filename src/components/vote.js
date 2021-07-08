import React, { Component } from 'react'

export default class Vote extends Component {
    constructor(props){
        super(props)
        this.state={
            num1:0,
            num2:0,
            num3:0,
            num4:0
            


        }
    }

    inc=()=>{
        this.setState({
            num1:this.state.num1+1
        })
    }

    inc2=()=>{
        this.setState({
            num2:this.state.num2+1
        })
    }

    inc3=()=>{
        this.setState({
            num3:this.state.num3+1
        })
    }
    inc4=()=>{
        this.setState({
            num4:this.state.num4+1
        })
    }
    render() {
        return (
            <div>
                <h2>vote for your language!</h2>
                <div style={{display:"flex",width:"300px",backgroundColor:"#7f9a6b",marginLeft:"20PX"}}>
                    <h2 style={{ marginLeft: "20px",marginRight: "66px", marginTop: "22px",fontSize: "21px"}}> {this.state.num1}</h2>
                    <p style={{ marginTop: "22px",fontSize: "21px"}}>yava</p>
                    <button style={{width: "63px",height: "72px",marginLeft: "109px",fontSize: "40px",border:"none",backgroundColor:"#7f9a6b"}} onClick={this.inc}>+</button>
                </div>
                <div style={{display:"flex",width:"300px",backgroundColor:"#7f9a6b",marginLeft:"20PX",marginTop:"10px"}}>
                    <h2 style={{ marginLeft: "20px",marginRight: "66px", marginTop: "22px",fontSize: "21px"}}> {this.state.num2}</h2>
                    <p style={{ marginTop: "22px",fontSize: "21px"}}>python</p>
                    <button style={{width: "63px",height: "72px",marginLeft: "84px",fontSize: "40px",border:"none",backgroundColor:"#7f9a6b"}} onClick={this.inc2}>+</button>
                </div>

                <div style={{display:"flex",width:"300px",backgroundColor:"#7f9a6b",marginLeft:"20PX",marginTop:"10px"}}>
                    <h2 style={{ marginLeft: "20px",marginRight: "66px", marginTop: "22px",fontSize: "21px"}}> {this.state.num3}</h2>
                    <p style={{ marginTop: "22px",fontSize: "21px"}}>Go</p>
                    <button style={{width: "63px",height: "72px",marginLeft: "119px",fontSize: "40px",border:"none",backgroundColor:"#7f9a6b"}} onClick={this.inc3}>+</button>
                </div>
                <div style={{display:"flex",width:"300px",backgroundColor:"#7f9a6b",marginLeft:"20PX",marginTop:"10px"}}>
                    <h2 style={{ marginLeft: "20px",marginRight: "66px", marginTop: "22px",fontSize: "21px"}}> {this.state.num4}</h2>
                    <p style={{ marginTop: "22px",fontSize: "21px"}}>Node</p>
                    <button style={{width: "63px",height: "72px",marginLeft: "99px",fontSize: "40px",border:"none",backgroundColor:"#7f9a6b"}} onClick={this.inc4}>+</button>
                </div>
            </div>
        )
    }
}
