import React,{Component} from 'react'
import {Animated,asset,Image,View,VrButton} from 'react-vr'
// const Easing = require('easing')
//import Easing  from 'Easing' 

class Button extends Component{
    constructor(props){
        super(props)
        this.state = {
            src : this.props.src,
           // animatedTranslation:new Animated.Value(0)
        }
    }

    // animateIn = ()=>{
    //     Animated.timing(
    //         this.state.animatedTranslation,
    //         {
    //             toValue:0.125,
    //             duration:100,
    //             easing:Easing.in
    //         }
    //     ).start()
    // }
    // animateOut = ()=>{
    //     Animated.timing(
    //         this.state.animatedTranslation,
    //         {
    //             toValue:0,
    //             duration:100,
    //             easing:Easing.in
    //         }
    //     ).start()
    // }


    render(){
        return(
             <Animated.View style={{
                 alignItems:'center',
                 flexDirection:'row',
                 margin:0.0125,
                 padding:0.0125,
                 width:0.7,
                  
                 backgroundColor:'red'
             }}>
                 <VrButton onClick={()=>
                 {
                     this.props.onClick();
                 }}
                 //onEnter={this.animateIn}
                 //onExit={this.animateOut}
                 >
                     <Image 
                      style={{
                          width:0.7,
                          height:0.7
                      }}
                     source={asset(this.props.src)}>
                     </Image>
                 </VrButton>
             </Animated.View>
        )
    }
}
export default Button