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
import { getProductByColorId } from "../actions/getproductByColorIdAction";
import Posts from "./Posts";
import Pagination from "./Paginations";
import axios from "axios";
import { BASE_URL } from "../constants/BaseURL";
import Example from "./Loader";
import Loader from "react-loader-spinner";

// const products1 = null;
class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",

      currentPage: 1,

      postsPerPage: 6,
      // offset: 0,
      // data: [],
      // perPage: 6,
      // currentPage: 0,
      // products: "",
      // callbackData: "",
      // category_id: "",
      // color_id: "",
      // allProducts: "",
    };
  }

  componentDidMount() {
    if (this.props.location.state) {
      const datafromSlideImage = this.props.location.state
        .category_id_fromslide_images;
      axios
        .get(BASE_URL + "commonProducts", {
          params: {
            category_id: datafromSlideImage,
          },
        })
        .then(({ data }) => {
          let catProducts = data.product_details;
          // console.log("in console---data----",data);

          this.setState({
            posts: catProducts,
            category_id: datafromSlideImage,
            color_id: "",
          });
        });
    }
    this.props.getProducts().then(() => {
      const { productData } = this.props;
      console.log("productdata in didmount", productData);
      const y = productData.productData;
      this.setState({ posts: y, allProducts: y });
    });
  }
  colorHandler(val) {
    this.props.getProductByColorId(val).then(() => {
      const { getProductBYColorId } = this.props;
      console.log(
        "getProductBYColorId==",
        getProductBYColorId.getProductBYColorId
      );
      let catProducts = getProductBYColorId.getProductBYColorId;
      this.setState({ posts: catProducts, color_id: val, category_id: "" });
    });
  }
  categoryHandler(val) {
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          category_id: val,
          // color_id: this.state.color_id,
        },
      })
      .then(({ data }) => {
        let catProducts = data.product_details;
        console.log("in console");
        this.setState({ posts: catProducts, category_id: val, color_id: "" });
      });
  }
  sortByAscending = () => {
    console.log("in sort by acs====");
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          // category_id: val.category_id,
          // color_id: val.color_id,
          // sortBy: val.sortBy,
          sortBy: "product_cost",
          sortIn: false,
        },
      })

      .then(({ data }) => {
        console.log("data", data);
        let catProducts = data.product_details;
        console.log("catPro---", catProducts);
        this.setState({ posts: catProducts });
      });
  };
  sortByDesc = () => {
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          // category_id: val.category_id,
          // color_id: val.color_id,
          // sortBy: val.sortBy,
          sortBy: "product_cost",
          sortIn: true,
        },
      })

      .then(({ data }) => {
        console.log("data", data);
        let catProducts = data.product_details;
        console.log("catPro---", catProducts);
        this.setState({ posts: catProducts });
      });
  };
  sortByRating(val) {
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          // category_id: val.category_id,
          // color_id: val.color_id,
          sortBy: val.sortBy,
          // sortIn: val.sortIn
        },
      })

      .then(({ data }) => {
        let catProducts = data.product_details;
        this.setState({ posts: catProducts });
      });
  }

  allProductsHandler = () => {
    this.setState({ posts: this.state.allProducts });
  };
  render() {
    // used 3 files (paginations.js, posts.js, productCard.js)
    //  in this product pageXOffset, issue with indexOfFirstPost and indexOfLastPost
    console.log("in render of product");
    console.log(
      "currentPage==anddd,post per page==",
      this.state.currentPage,
      this.state.postsPerPage
    );

    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;

    console.log("index of last post ==", indexOfLastPost);

    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;

    // console.log("indexOfFirstPost", this.state.posts);
    const temPosts = this.state.posts;
    console.log("both", indexOfFirstPost, indexOfLastPost);

    const currentPosts = temPosts.slice(indexOfFirstPost, indexOfLastPost);
    console.log("in return current p==", currentPosts);

    // Change page
    const paginate = (pageNumber) => {
      console.log("page no. in product page",pageNumber);
      return this.setState({ currentPage: pageNumber });
    };
    console.log("consolebefore paginate,,,,pageNumber", this.state.currentPage);

    let x = "";
    if (currentPosts === undefined || currentPosts === "") {
      x = (
        <Loader
          type="Oval"
          color="#00BFFF"
          height={100}
          width={100}
          //  style={
          //    {marginLeft:"1000px",marginTop:"100px"}
          //  }
        />
      );
    } else {
      x = (
        <React.Fragment className="popularProduct">
          <React.Fragment className="container mt-5">
            {/* <h1 className='text-primary mb-3'>My Blog</h1> */}
            {console.log("in redner posts===", currentPosts)}
            {currentPosts !== "No details" ? (
              <React.Fragment>
                <Posts posts={currentPosts} {...this.props} />
                <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={this.state.posts.length}
                  paginate={paginate}
                />
              </React.Fragment>
            ) : (
              <h1 style={{ marginLeft: "230px" }}>No products Available</h1>
            )}
          </React.Fragment>
        </React.Fragment>
      );
    }
    return (
      <React.Fragment>
        <HomeNavBar />

        <hr
          style={{ marginTop: "30px", width: "1300px", marginBottom: "16px" }}
        ></hr>

        <React.Fragment>
          <Container fluid={false}>
            <Row>
              <Col xs={2}>
                <SideMenu
                  // //   callbackFromParentInProduct={products1 => {

                  // //     this.myCallback(products1)

                  //   }}
                  allProductsHandler={this.allProductsHandler}
                  categoryHandler={(val) => this.categoryHandler(val)}
                  colorHandler={(val) => this.colorHandler(val)}
                />
              </Col>

              <Col style={{ marginLeft: "78px", maxWidth: "74%" }}>
                <Row>
                  <div className="header1">
                    <span style={{ fontSize: "25px" }}>All Categories</span>

                    <span style={{ paddingLeft: "370px", fontSize: "16px" }}>
                      Sort By:
                      <Button
                        className="sort"
                        onClick={() =>
                          this.sortByRating({
                            category_id: this.state.category_id,
                            color_id: this.state.color_id,
                            sortBy: "product_rating",
                            sortIn: true,
                          })
                        }
                      >
                        <StarIcon />
                      </Button>
                      <Button className="sort" onClick={this.sortByAscending}>
                        ₹<ArrowUpwardIcon></ArrowUpwardIcon>
                      </Button>
                      <Button className="sort" onClick={this.sortByDesc}>
                        ₹<ArrowDownwardIcon />
                      </Button>
                    </span>
                  </div>

                  <Col></Col>

                  <Col style={{ paddingLeft: "168px" }}></Col>
                </Row>

                <Row>{x}</Row>
              </Col>
            </Row>
          </Container>
        </React.Fragment>

        <hr></hr>

        <Footer />
      </React.Fragment>
    );
  }
}

const mapStateToProps = (state) => {
  if (state.getProductBYColorId != undefined) {
    console.log("%%%%%%%%%%  categories==", state.getProductBYColorId);
  }
  console.log("%%%%%%%%%%  categories==", state.getProductBYColorId);

  return {
    productData: state.productData,
    categories: state.categories,
    getProductBYColorId: state.getProductByColorIdReducer,
  };
};

const mapDispatchToProps = {
  getProducts,
  getProductByColorId,
  getCategories,
};

export default connect(mapStateToProps, mapDispatchToProps)(Products);
