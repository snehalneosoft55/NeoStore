import React, { Component } from 'react'

import { connect } from 'react-redux';

import '../assets/css/ListOfColor.css'
import {getColors} from '../actions/ListOfColorsAction';
import Button from '@material-ui/core/Button'
import { Tooltip } from '@material-ui/core';

export class ListOfColors extends Component {
    constructor(){
        super();
        this.state={
            colors:""
        }
    }
    componentWillMount(){
        this.props.getColors().then(() => 
        {
            const { colors } = this.props;
            //console.log("colors--",this.props.colors);
      })
      
    }
    colorHandler(colorId){
        //console.log("in colorHandler and get color id==",colorId);
    }
    render() {
        const { colors } = this.props;
        //console.log("colors",colors);
        const allColors= colors.color_details;
        let colorDiv="";
        if(allColors!= undefined){

            colorDiv=(
                <div class="d-flex flex-wrap">{
                    allColors.map((val,i)=>{
                        let divColor=val.color_code;
                        const divStyle={
                            background:divColor,
                            width:"40px",
                            height:"20px",
                            margin:"1px 6px",
                            border:"1px solid black",
                            borderRadis:"40%"

                        }
                        //console.log("divcolor",divColor);
                        return(
                            <div >
                                <Tooltip title={val.color_name}>
                                <button  style={divStyle} onClick={()=>this.colorHandler(val.color_id)}>
                                </button>
                                </Tooltip>
                                
                            </div>
    
                        )
                    }
    
                    )
                }
                
                </div>
            )
        }
        else{
            colorDiv=null;
        }
        

        return (
            <div >

                {colorDiv}
            </div>
        )
    }
}
const mapStateToProps = state => 
{
    //console.log("state.colors",state.colors);

//     return({
//     colors: state.colors
//   });
const {colors } = state.getColorsReducer
    return {colors};
}

  const mapDispatchToProps = {
    getColors
};
export default connect(mapStateToProps,mapDispatchToProps)(ListOfColors);
