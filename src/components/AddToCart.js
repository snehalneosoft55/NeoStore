import React from 'react'

export default class AddToCart extends React.Component{
    constructor(){
        super();
        this.state = {
           
           cartProduct:0
         };
    }
    handleCart=(e)=>
    {
        const productData = this.props;
        const productDetail=productData.ProductData;
        const data={
            productDetail:productDetail,
            quantity:1
        }
        // console.log("datadata",data);
        localStorage.setItem('data',JSON.stringify(data));
        // const y=JSON.parse(localStorage.getItem("data"));
        // const y=localStorage.getItem("data")
        // console.log("y.quantity",y);
        // const z=JSON.parse(y);
        // console.log("z.quantity",z.quantity);

        // const { cartProduct } = this.state;
        // localStorage.setItem('cartProduct', cartProduct);
        ////console.log("cartProduct:::",this.state.cartProduct,"----and the cartProduct=",cartProduct);
        // this.state.cartProduct=cartProduct+1;
        ////console.log("cartProduct=====",this.state.cartProduct);
        // this.setState({cartProduct:this.cartProduct+1});
        // ////console.log("cart value===",this.cartProduct);
    }
    render(){
        return(
            
                <button 
                    className="ProductCardwrapperButton" 
                    style={{
                            marginLeft:this.props.m,
                            backgroundColor:this.props.color,
                            width:this.props.width,
                            height:this.props.height                          
                            }}
                    onClick={this.handleCart}>
                    Add To Cart
                </button>
            
        );
    }
}