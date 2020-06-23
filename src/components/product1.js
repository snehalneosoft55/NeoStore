import React from 'react';
import { connect } from 'react-redux';
import ReactPaginate from 'react-paginate';

import {Container , Row, Col} from 'react-bootstrap'
import { Button } from 'react-bootstrap'

import Footer from './footer'
import HomeNavBar from './navbar'
import SideMenu from './SideMenu';
import ProductCard from './ProductCard';
import {getProducts}  from '../actions/displayProductAction'
import StarIcon from '@material-ui/icons/Star';
import ArrowUpwardIcon from '@material-ui/icons/ArrowUpward';
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';

let fetcheddata=null;
class Products extends React.Component{
     constructor(){
         super();
         this.state={
            offset: 0,
            data: [],
            perPage: 6,
            currentPage: 0
         }
     }

    componentWillMount(){
        this.props.getProducts().then(() => {
            const { productData } = this.props;
            const y=productData.productData;
            fetcheddata=y;
      })
    }

    receivedData()
    {
        const slice = fetcheddata.slice(this.state.offset,this.state.offset + this.state.perPage)
                const postData = slice.map(pd => 
                                    <React.Fragment>
                                        <ProductCard 
                                            id={pd.product_id}
                                            image={pd.product_image} 
                                            title={pd.product_name} 
                                            price={pd.product_cost} 
                                            rating={pd.product_rating}
                                        />
                                    </React.Fragment>)
                this.setState
                ({
                    pageCount: Math.ceil(fetcheddata.length / this.state.perPage),
                    postData
                })
    }
    handlePageClick = (e) => {
        const selectedPage = e.selected;
        const offset = selectedPage * this.state.perPage;
        this.setState({
            currentPage: selectedPage,
            offset: offset
        }, () => {
            this.receivedData()
        });
    };
    render()
    {
        const { productData } = this.props;
        const y=productData.productData;
        fetcheddata=y;
        return(
            <div>
                <HomeNavBar/>

                <hr style={{marginTop:"40px"}}></hr>
                   <div>
                       <Container>
                           <Row>
                               <Col xs={2}><SideMenu/></Col>
                               <Col style={{marginLeft:"78px"}}>
                               <Row>
                               <p className="header1" ><span style={{fontSize:"25px"}}>All Categories</span>
                               <span style={{paddingLeft:"370px",fontSize:"16px"}}>
                               Sort By:
                                        <Button className="sort"><StarIcon/></Button>
                                        <Button className="sort">₹<ArrowUpwardIcon></ArrowUpwardIcon></Button>
                                        <Button className="sort">₹<ArrowDownwardIcon/></Button>
                               </span>
                               </p>
                               
                                   <Col>
                                   </Col>
                                   <Col style={{paddingLeft:"168px"}}>
                                        
                                   </Col>
                               </Row>
                               <Row>
                               <div className="popularProduct" >
                                    <div>
                                        {this.state.postData}
                                        <ReactPaginate
                                            previousLabel={"prev"}
                                            nextLabel={"next"}
                                            breakLabel={"..."}
                                            breakClassName={"break-me"}
                                            pageCount={this.state.pageCount}
                                            marginPagesDisplayed={2}
                                            pageRangeDisplayed={5}
                                            onPageChange={this.handlePageClick}
                                            containerClassName={"pagination"}
                                            subContainerClassName={"pages pagination"}
                                            activeClassName={"active"}/>
                                    </div>
                                </div>
                               </Row>
                               </Col>
                           </Row>
                       </Container>
                   </div>
                   <hr></hr>
                <Footer/>
            </div>
        );
    }
}

const mapStateToProps = state => ({
    productData: state.productData
  });

  const mapDispatchToProps = {
  getProducts
};

export default connect(
    mapStateToProps,
    mapDispatchToProps
  )(Products);