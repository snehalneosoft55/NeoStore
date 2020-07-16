import React from 'react';
import HomeNavbar from './navbar';
import Slideimages from './slideimages'
import Footer from './footer'
import PopularProduct from './PopularProduct'
import Loading from './Loading';

export default class HomePage extends React.Component{
    constructor(){
        super();
        this.state={
            checkLoader:false
        }
    }
    
     /**
      * myCallback function
      * param{data from child}val
      * 
      */
    myCallback=(val)=>{
        console.log("val==in mycallback in homepage",val);
        if(val!==undefined){
            this.setState({checkLoader:false})
        }
        else{
            this.setState({checkLoader:true})
        }
    }
    render(){
        if(this.state.checkLoader){
            return(
                <Loading></Loading>
            )
        }
        return(
            <div>
                <HomeNavbar/>
                <Slideimages/>
                <PopularProduct callbackFromParent = {this.myCallback}/>
                <Footer/>
            </div>
        );
    }
}