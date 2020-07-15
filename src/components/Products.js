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
// import Loader from "react-loader-spinner";
import Loading from "./Loading";

class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      posts: "",
      currentPage: 1,
      postsPerPage: 6
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

/**
 * By sorting by rating
 * @param {val} val 
 */
  sortByRating(val) {
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          sortBy: val.sortBy,
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
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const temPosts = this.state.posts;
    const currentPosts = temPosts.slice(indexOfFirstPost, indexOfLastPost);
    const paginate = (pageNumber) => {
      return this.setState({ currentPage: pageNumber });
    };
    let x = "";
    if (currentPosts === undefined || currentPosts === "") {
      x = <Loading />;
    } else {
      x = (
        <React.Fragment className="popularProduct">
          <React.Fragment className="container mt-5">
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
          {(currentPosts === undefined || currentPosts === "")?<Loading/>:(<Container fluid={false}>
            <Row>
              <Col xs={2}>
                <SideMenu
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
          </Container>)}
        </React.Fragment>
          

        <hr></hr>
        <Footer />
      </React.Fragment>
    );
  }
}
const mapStateToProps = (state) => {
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
