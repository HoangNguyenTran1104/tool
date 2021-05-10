import React, { Component } from 'react'

 class Tool extends Component {
    constructor(props){
        super(props)
        this.state={
            textareaVal: ""
        }
    }

    handleOnchange = e =>{
        const {name,value} = e.target
        this.setState({
            [name]: value
        })
        console.log(name,value)
    }

    getSelectedText = () =>{
        let selectedText = '';
        selectedText = window.getSelection();
        let viTriDauChuoi= this.state.textareaVal.indexOf(selectedText)
        console.log("viTriChuoiDau",viTriDauChuoi)
        console.log("selectedText.length",selectedText.getRangeAt(0))
        let viTriCuoiCung = this.state.textareaVal.length - selectedText.getRangeAt(0) - parseInt(viTriDauChuoi) 
        console.log("viTriCuoiCung",viTriCuoiCung)
        let chuoiDau = this.state.textareaVal.slice(0,parseInt(viTriDauChuoi))
        let chuoiCuoi = this.state.textareaVal.slice(parseInt(viTriCuoiCung,this.state.textareaVal.length))
        console.log("chuoiCuoi",chuoiCuoi)
        console.log("chuoiDau",chuoiDau)
        this.setState({
            textareaVal: `${chuoiDau}\n ${selectedText}\n${chuoiCuoi}`
        })
        
    }

    handleKeyDown = e =>{
        console.log("e.keyCode",e.keyCode)
        if(e.keyCode === 113){
            {this.getSelectedText()}
        }
        
    }
    


    render() {
        return (
            <div>
                <form name="testform">
                    <textarea type="text" id="textareaValId" rows="40" cols="40" name="textareaVal" id="matKhau" value={this.state.textareaVal} className="form-control" onChange={this.handleOnchange} onKeyDown={this.handleKeyDown}  />
                </form>

            </div>
        )
    }
}



export default Tool