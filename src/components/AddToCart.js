import React from 'react'

export default class AddToCart extends React.Component{
    constructor(){
        super();
        this.state = {
           
           cartProduct:0
         };
    }
    componentDidMount(){
        const productData = this.props;
        const productDetail=productData.ProductData;

        // console.log("id==",productDetail);
        console.log("id==",productDetail);
        
        // localStorage.clear();
    }
    handleCart=async (e)=>
    {
        const productData = this.props;
        const productDetail=productData.ProductData;
        
        console.log("id==",productDetail);
        const productDetails=[
            {
                productDetail:productDetail,
            quantity:1
            }
        ]
            
        console.log("productdetails====");
			const myArray = await localStorage.getItem('cartProducts');
			// console.log("myArray: ",JSON.parse(myArray));
			let productsInLocalStorage, flag=false;

			if(myArray !== null){ 
					
					productsInLocalStorage =  JSON.parse(myArray);
                console.log("productsInLocalStorage",productsInLocalStorage);

					productsInLocalStorage.map( (val,i)=>{
                        let x=val;
                        // console.log("x==",x.productDetail.id)
                        
                        if(i===0){
                            console.log("x");
                            console.log("x==",x[0].productDetail.id)
                            let z=x[0].productDetail.id;
                            console.log("productDetails",productDetails);
                            if(z===productDetails[i].productDetail.id)
                            flag = true;
                        }
                        else{
                            console.log("x in else==",x[0].productDetail.id);
                            let a=x[0].productDetail.id;
                            console.log("in else productDetails",productDetails[0].productDetail.id);
                            if(a===productDetails[0].productDetail.id){
                                flag = true;
                            }
                        }
							// if(x === productDetails.productDetail.id){
                            //         flag = true;
                                   
                            // }
                            
					});

					
							if(flag === false){
							productsInLocalStorage.push(productDetails);
							alert("Added to cart");
							// console.log("Modified myArray productsInLocalStorage: ",productsInLocalStorage);
							}
							else{
							alert('Already in cart');
							}
							await localStorage.setItem('cartProducts', JSON.stringify(productsInLocalStorage));
					
			}
			else{
                console.log("productDetails",productDetails);
					 await localStorage.setItem('cartProducts', JSON.stringify(productDetails));
			}
    
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