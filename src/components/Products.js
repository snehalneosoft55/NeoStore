import React from "react";
import { connect } from "react-redux";
import ReactPaginate from "react-paginate";

import { Container, Row, Col } from "react-bootstrap";
import { Button } from "react-bootstrap";

import Footer from "./footer";
import HomeNavBar from "./navbar";
import SideMenu from "./SideMenu";
import ProductCard from "./ProductCard";
import { getProducts } from "../actions/displayProductAction";
import StarIcon from "@material-ui/icons/Star";
import ArrowUpwardIcon from "@material-ui/icons/ArrowUpward";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { getCategories } from "../actions/ListOfSideMenuAction";
import Posts from "./Posts";
import Pagination from "./Paginations";
import axios from "axios";
import { BASE_URL } from "../constants/BaseURL";
// const products1 = null;
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",

      currentPage: 1,

      postsPerPage: 10,
      offset: 0,
      data: [],
      perPage: 6,
      currentPage: 0,
      products: "",
      callbackData: ""
    };
  }

  componentDidMount() {
    //console.log("in componentwillmount of product page");
    this.props.getProducts().then(() => {
      const { productData } = this.props;
      console.log("productdata in didmount", productData);
      const y = productData.productData;
      this.setState({ posts: y });

      ////console.log("fetched data :::::",products);
    });
  }

  receivedData() {
    //console.log("in receivedData");
    if (this.state.products != undefined) {
      const slice = this.state.products.slice(
        this.state.offset,
        this.state.offset + this.state.perPage
      );
      const postData = slice.map(pd => (
        <React.Fragment>
          <ProductCard
            id={pd.product_id}
            image={pd.product_image}
            title={pd.product_name}
            price={pd.product_cost}
            rating={pd.product_rating}
          />
        </React.Fragment>
      ));
      this.setState({
        pageCount: Math.ceil(this.state.products.length / this.state.perPage),
        postData
      });
    }
  }
  handlePageClick = e => {
    //console.log("in handlePageClick");
    const selectedPage = e.selected;
    const offset = selectedPage * this.state.perPage;
    this.setState(
      {
        currentPage: selectedPage,
        offset: offset
      },
      () => {
        this.receivedData();
      }
    );
  };
  // myCallback(products1) {
  //   //console.log("^^^^^^^^^in myCall of product page..", products1);
  //   this.setState({callbackData:products1});
  //   //console.log("callbackData",this.state.callbackData);

  // }
  categoryHandler(val) {
    //console.log("in handlecategory[][][[[][]",val);

    axios

      .get(BASE_URL + "commonProducts", {
        params: { category_id: val }
      })

      .then(({ data }) => {
        //console.log("data of category####", data.product_details);

        let catProducts = data.product_details;

        this.setState({ posts: catProducts });

        // setPosts(catProducts);

        // this.setState({products:catProducts});
      });

    //   this.setState({products:products1});
  }
  render() {
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;

    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;

    console.log("posts before current p", this.state.posts);
    const temPosts = this.state.posts;
    console.log("both", indexOfFirstPost, indexOfLastPost);
    const currentPosts = temPosts.slice(0, 10);
    console.log("in return current p==", currentPosts);

    // Change page

    const paginate = pageNumber => this.setState({ CurrentPage: pageNumber });

    return (
      <div>
        <HomeNavBar />

        <hr style={{ marginTop: "40px" }}></hr>

        <div>
          <Container>
            <Row>
              <Col xs={2}>
                <SideMenu
                  // //   callbackFromParentInProduct={products1 => {

                  // //     this.myCallback(products1)

                  //   }}

                  categoryHandler={val => this.categoryHandler(val)}
                />
              </Col>

              <Col style={{ marginLeft: "78px" }}>
                <Row>
                  <p className="header1">
                    <span style={{ fontSize: "25px" }}>All Categories</span>

                    <span style={{ paddingLeft: "370px", fontSize: "16px" }}>
                      Sort By:
                      <Button className="sort">
                        <StarIcon />
                      </Button>
                      <Button className="sort">
                        ₹<ArrowUpwardIcon></ArrowUpwardIcon>
                      </Button>
                      <Button className="sort">
                        ₹<ArrowDownwardIcon />
                      </Button>
                    </span>
                  </p>

                  <Col></Col>

                  <Col style={{ paddingLeft: "168px" }}></Col>
                </Row>

                <Row>
                  <div className="popularProduct">
                    <div className="container mt-5">
                      {/* <h1 className='text-primary mb-3'>My Blog</h1> */}
                      {console.log("in redner posts===",currentPosts)}
                      <Posts posts={currentPosts}  {...this.props}/>

                      <Pagination
                        postsPerPage={this.state.postsPerPage}
                        totalPosts={this.state.posts.length}
                        paginate={paginate}
                      />
                    </div>
                  </div>
                </Row>
              </Col>
            </Row>
          </Container>
        </div>

        <hr></hr>

        <Footer />
      </div>
    );
  }
}

const mapStateToProps = state => {
  if (state.categories != undefined) {
    //console.log("%%%%%%%%%%  categories==", state.categories);
  }

  return {
    productData: state.productData,
    categories: state.categories
  };
};

const mapDispatchToProps = {
  getProducts,
  getCategories
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
