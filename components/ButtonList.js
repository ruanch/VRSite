import React,{Components, Component} from 'react'
import {View} from 'react-vr'
import Button from './Button'


class ButtonList extends Component{
    constructor(props){
        super(props)
        this.state = {
            buttons:[
                {key:0,imageSrc:'02.jpg',buttonSrc:'b02.jpg'},
                {key:1,imageSrc:'03.jpg',buttonSrc:'b02.jpg'},
                {key:2,imageSrc:'02.jpg',buttonSrc:'b02.jpg'}
            ]
        }
    }
    render(){
      return   <View style={
            {
                flexDirection:'row',
                flexWrap:'wrap',
                transform:[{rotateX:-12},{translate:[-1.5,0,-3]}],
                width:3,
            }
        }>
            {
                this.state.buttons.map(v =>{
                    return <Button src={v.buttonSrc} key={v.key} onClick={()=>{
                        this.props.onClick(v.imageSrc);
                       // console.log(v.imageSrc)
                    }}/>
                })
            }
        </View>
    }
}

export default ButtonList