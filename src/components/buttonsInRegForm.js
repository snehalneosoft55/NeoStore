import React from 'react'
import {Button} from 'react-bootstrap'
import FacebookIcon from '@material-ui/icons/Facebook';
import '../assets/css/ButtnfromReg.css'

class ButtnfromReg extends React.Component{
    render(){
        return(
            <div className="ButtnfromRegWrapper">
                <Button  className="ButtnfromRegWrapperfacebook">
                    <span 
                        style={{
                            // marginRight:"30px",
                            fontSize:"40px",
                            marginRight:"20px"
                            }}
                    >
                       <i class="fa fa-facebook-f"></i>
                    </span>
                    <span style={{
                        paddingTop:10
                    }}>
                    Login with Facebook
                    </span>
                        
                </Button>
                <Button className="ButtnfromRegWrapperGoogle">
                    <span 
                        style={{
                            marginRight:"30px",
                            fontSize:"40px"
                            }}
                    >
                    <i class="fa fa-google"></i>
                    </span>
                        Login with Google
                </Button>
            </div>
        )
    }
}
export default ButtnfromReg