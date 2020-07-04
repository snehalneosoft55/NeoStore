import React from 'react'
import Button from '@material-ui/core/Button'
import FacebookIcon from '@material-ui/icons/Facebook';

class ButtnfromReg extends React.Component{
    render(){
        return(
            <div>
                <Button variant="contained" color="primary"><span style={{marginRight:"30px",fontSize:"20px"}}><FacebookIcon></FacebookIcon></span>Login with Facebook</Button>
                <Button variant="contained" color="red"><span style={{marginRight:"30px",fontSize:"20px"}}>G</span>Login with Google</Button>
            </div>
        )
    }
}
export default ButtnfromReg