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
    this.myRef = React.createRef()
    this.state = {
      posts: "",
      currentPage: 1,
      postsPerPage: 6,
      checkLoader: false,
      heading:'All categories'
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
    this.setState({ checkLoader: true });
    this.props.getProductByColorId(val).then(() => {
      const { getProductBYColorId } = this.props;
      console.log(
        "getProductBYColorId==",
        getProductBYColorId.getProductBYColorId
      );
      let catProducts = getProductBYColorId.getProductBYColorId;
      this.setState({
        posts: catProducts,
        color_id: val,
        category_id: "",
        checkLoader: false,
      });
    });
  }

  categoryHandler(val) {
    this.setState({ checkLoader: true });
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          category_id: val,
          // color_id: this.state.color_id,
        },
      })
      .then(({ data }) => {
        let catProducts = data.product_details;

        console.log("in console of category",catProducts);
        console.log("categ name====",catProducts[0].category_id.category_name);
        let heading=catProducts[0].category_id.category_name;
        this.setState({heading:heading});
        this.setState({
          posts: catProducts,
          category_id: val,
          color_id: "",
          checkLoader: false,
        });
      });
  }

  sortByAscending = () => {
    this.setState({checkLoader:true});

    // console.log("in sort by acs====");
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
        this.setState({ posts: catProducts,checkLoader:false });
      });
  };

  sortByDesc = () => {
    this.setState({checkLoader:true});

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
        this.setState({ posts: catProducts , checkLoader:false});
      });
  };

  /**
   * By sorting by rating
   * @param {val} val
   */
  sortByRating(val) {
    this.setState({checkLoader:true});
    axios
      .get(BASE_URL + "commonProducts", {
        params: {
          sortBy: val.sortBy,
        },
      })
      .then(({ data }) => {
        let catProducts = data.product_details;
        this.setState({ posts: catProducts,checkLoader:false});
      });
      // this.setState({})
  }

  allProductsHandler = () => {
    this.setState({ posts: this.state.allProducts,heading:"All Categories" });
  };
  paginate = (pageNumber) => {
    console.log("in paginate");
    setTimeout(() => {
      this.setState({ checkLoader: false });
      
    }, 2000);
    
    return this.setState({ currentPage: pageNumber, checkLoader: true });
  };
  render() {
    
    let x = "";
    const indexOfLastPost = this.state.currentPage * this.state.postsPerPage;
    const indexOfFirstPost = indexOfLastPost - this.state.postsPerPage;
    const temPosts = this.state.posts;
    const currentPosts = temPosts.slice(indexOfFirstPost, indexOfLastPost);
    if (
      this.state.checkLoader === true ||
      currentPosts === undefined ||
      currentPosts === ""
    ) {
      x = <Loading></Loading>;
    } else {
      x = (
        <React.Fragment className="popularProduct">
          <React.Fragment className="container mt-5">
            {currentPosts !== "No details" ? (
              <React.Fragment>
                <Posts
                  posts={currentPosts}
                  loading={this.state.checkLoader}
                  {...this.props}
                />
                <Pagination
                  postsPerPage={this.state.postsPerPage}
                  totalPosts={this.state.posts.length}
                  paginate={this.paginate}
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
          {currentPosts === undefined || currentPosts === "" ? (
            <Loading />
          ) : (
            <Container fluid={false}>
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
          <span style={{ fontSize: "25px" }}>{this.state.heading}</span>
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

                  <Row>
                    <div ref={this.myRef}>{x}</div>
                    </Row>
                </Col>
              </Row>
            </Container>
          )}
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
