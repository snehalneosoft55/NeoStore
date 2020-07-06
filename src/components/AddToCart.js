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
			let newProduct, flag=false;

			if(myArray !== null){ 
					
					newProduct =  JSON.parse(myArray);
                console.log("newProduct",newProduct);

					newProduct.map( (val,i)=>{
                        let x=val;
                        // console.log("x==",x.productDetail.id)
                        
                        if(i===0){
                            console.log("x");
                            console.log("x==",x.productDetail.id)
                            let z=x.productDetail.id;
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
							newProduct.push(productDetails);
							alert("Added to cart");
							// console.log("Modified myArray newProduct: ",newProduct);
							}
							else{
							alert('Already in cart');
							}
							await localStorage.setItem('cartProducts', JSON.stringify(newProduct));
					
			}
			else{
                console.log("productDetails",productDetails);
					 await localStorage.setItem('cartProducts', JSON.stringify(productDetails));
			}
    //     // const data1=[
    //     //     {
    //     //         productDetail:productDetail,
    //     //         quantity:1
    //     //     }
    //     // ];
    //     const myArray= localStorage.getItem('cartProducts');

    //     let newProduct;
    //     let flag=false;
    //     if(myArray !== null){
    //         newProduct=JSON.parse(myArray)
    //         data1.map(val=>{
    //             if(val.productDetail.id==productDetail.id){
    //                 flag=true;
    //                 console.log("");
    //                 alert('Already in cart');
    //             }
    //             else{
    //                 data1.push(productDetail);
    //             }
    //         }
                
    //         )
            
    //             localStorage.setItem('cartProducts', JSON.stringify(newProduct));
    //             console.log("localstorage length==",localStorage.length);
    //     }
    //     else{
    //         const data1=[
    //             {
    //                 productDetail:productDetail,
    //                 quantity:1
    //             }
    //         ];
    //         localStorage.setItem('cartProducts', JSON.stringify(data1));
    // }
    // const c= JSON.parse(localStorage.getItem('cartProducts'));
    // console.log("c==",c);
    //     // localStorage.setItem('data1',JSON.stringify(data1));

    //     // const p=JSON.parse(localStorage.getItem('data1'));
    //     // console.log("JSON.stringify(data1)",JSON.stringify(data1))

    //     // console.log("p",p);

    //     // const data={
    //     //     productDetail:productDetail,
    //     //     quantity:1
    //     // }
    //     // // console.log("datadata",data);
    //     // localStorage.setItem('data',JSON.stringify(data));
    //     // const y=JSON.parse(localStorage.getItem("data"));
    //     // const y=localStorage.getItem("data")
    //     // console.log("y.quantity",y);
    //     // const z=JSON.parse(y);
    //     // console.log("z.quantity",z.quantity);

    //     // const { cartProduct } = this.state;
    //     // localStorage.setItem('cartProduct', cartProduct);
    //     ////console.log("cartProduct:::",this.state.cartProduct,"----and the cartProduct=",cartProduct);
    //     // this.state.cartProduct=cartProduct+1;
    //     ////console.log("cartProduct=====",this.state.cartProduct);
    //     // this.setState({cartProduct:this.cartProduct+1});
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