import React from "react";

import "../assets/css/navbarstyle.css";
import { Navbar, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";
import { InputGroup, FormControl } from "react-bootstrap";
import { Button } from "react-bootstrap";
import { Dropdown } from "react-bootstrap";
import Assets from "../constants/Image";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import LoginReg from "./LoginReg";
import LogProfile from "./LogProfile";
import { withRouter } from "react-router-dom";
import { getProducts } from "../actions/displayProductAction";
import { connect } from "react-redux";
import TextField from "@material-ui/core/TextField";
import Autocomplete from "@material-ui/lab/Autocomplete";

const top100Films = [
  { title: "The Shawshank Redemption", year: 1994 },
  { title: "The Godfather", year: 1972 },
  { title: "The Godfather: Part II", year: 1974 },
  { title: "The Dark Knight", year: 2008 },
  { title: "12 Angry Men", year: 1957 },
  { title: "Schindler's List", year: 1993 },
  { title: "Pulp Fiction", year: 1994 },
  { title: "The Lord of the Rings: The Return of the King", year: 2003 },
  { title: "The Good, the Bad and the Ugly", year: 1966 },
  { title: "Fight Club", year: 1999 },
  { title: "The Lord of the Rings: The Fellowship of the Ring", year: 2001 },
  { title: "Star Wars: Episode V - The Empire Strikes Back", year: 1980 },
  { title: "Forrest Gump", year: 1994 },
  { title: "Inception", year: 2010 },
  { title: "The Lord of the Rings: The Two Towers", year: 2002 },
  { title: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { title: "Goodfellas", year: 1990 },
  { title: "The Matrix", year: 1999 },
  { title: "Seven Samurai", year: 1954 },
  { title: "Star Wars: Episode IV - A New Hope", year: 1977 },
  { title: "City of God", year: 2002 },
  { title: "Se7en", year: 1995 },
  { title: "The Silence of the Lambs", year: 1991 },
  { title: "It's a Wonderful Life", year: 1946 },
  { title: "Life Is Beautiful", year: 1997 },
  { title: "The Usual Suspects", year: 1995 },
  { title: "Léon: The Professional", year: 1994 },
  { title: "Spirited Away", year: 2001 },
  { title: "Saving Private Ryan", year: 1998 },
  { title: "Once Upon a Time in the West", year: 1968 },
  { title: "American History X", year: 1998 },
  { title: "Interstellar", year: 2014 },
  { title: "Casablanca", year: 1942 },
  { title: "City Lights", year: 1931 },
  { title: "Psycho", year: 1960 },
  { title: "The Green Mile", year: 1999 },
  { title: "The Intouchables", year: 2011 },
  { title: "Modern Times", year: 1936 },
  { title: "Raiders of the Lost Ark", year: 1981 },
  { title: "Rear Window", year: 1954 },
  { title: "The Pianist", year: 2002 },
  { title: "The Departed", year: 2006 },
  { title: "Terminator 2: Judgment Day", year: 1991 },
  { title: "Back to the Future", year: 1985 },
  { title: "Whiplash", year: 2014 },
  { title: "Gladiator", year: 2000 },
  { title: "Memento", year: 2000 },
  { title: "The Prestige", year: 2006 },
  { title: "The Lion King", year: 1994 },
  { title: "Apocalypse Now", year: 1979 },
  { title: "Alien", year: 1979 },
  { title: "Sunset Boulevard", year: 1950 },
  {
    title:
      "Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb",
    year: 1964,
  },
  { title: "The Great Dictator", year: 1940 },
  { title: "Cinema Paradiso", year: 1988 },
  { title: "The Lives of Others", year: 2006 },
  { title: "Grave of the Fireflies", year: 1988 },
  { title: "Paths of Glory", year: 1957 },
  { title: "Django Unchained", year: 2012 },
  { title: "The Shining", year: 1980 },
  { title: "WALL·E", year: 2008 },
  { title: "American Beauty", year: 1999 },
  { title: "The Dark Knight Rises", year: 2012 },
  { title: "Princess Mononoke", year: 1997 },
  { title: "Aliens", year: 1986 },
  { title: "Oldboy", year: 2003 },
  { title: "Once Upon a Time in America", year: 1984 },
  { title: "Witness for the Prosecution", year: 1957 },
  { title: "Das Boot", year: 1981 },
  { title: "Citizen Kane", year: 1941 },
  { title: "North by Northwest", year: 1959 },
  { title: "Vertigo", year: 1958 },
  { title: "Star Wars: Episode VI - Return of the Jedi", year: 1983 },
  { title: "Reservoir Dogs", year: 1992 },
  { title: "Braveheart", year: 1995 },
  { title: "M", year: 1931 },
  { title: "Requiem for a Dream", year: 2000 },
  { title: "Amélie", year: 2001 },
  { title: "A Clockwork Orange", year: 1971 },
  { title: "Like Stars on Earth", year: 2007 },
  { title: "Taxi Driver", year: 1976 },
  { title: "Lawrence of Arabia", year: 1962 },
  { title: "Double Indemnity", year: 1944 },
  { title: "Eternal Sunshine of the Spotless Mind", year: 2004 },
  { title: "Amadeus", year: 1984 },
  { title: "To Kill a Mockingbird", year: 1962 },
  { title: "Toy Story 3", year: 2010 },
  { title: "Logan", year: 2017 },
  { title: "Full Metal Jacket", year: 1987 },
  { title: "Dangal", year: 2016 },
  { title: "The Sting", year: 1973 },
  { title: "2001: A Space Odyssey", year: 1968 },
  { title: "Singin' in the Rain", year: 1952 },
  { title: "Toy Story", year: 1995 },
  { title: "Bicycle Thieves", year: 1948 },
  { title: "The Kid", year: 1921 },
  { title: "Inglourious Basterds", year: 2009 },
  { title: "Snatch", year: 2000 },
  { title: "3 Idiots", year: 2009 },
  { title: "Monty Python and the Holy Grail", year: 1975 },
];
let x = "";
class HomeNavbar extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: null,
      Information: "",
    };
  }
  async componentDidMount() {
    await this.props.getProducts().then(() => {
      const { productData } = this.props;
      console.log("productdata in didmount in nav", productData.productData);
      const x = productData.productData;
      console.log("Information", x);
      this.setState({ Information: x });
    });
  }
  searchSpace = (event) => {
    console.log("keyword==");
    let keyword = event.target.value;
    console.log("keyword==", keyword);
    this.setState({ search: keyword });
  };

  checkForLogIn = () => {
    const token = localStorage.getItem("token");
    if (token === null) {
      alert("Please lLogin first");
      this.props.history.push("/signIn");
    } else {
      this.props.history.push({
        pathname: "Order",
        state: {
          show: 0,
        },
      });
    }
  };
  onChangeHandle = (e, itemname) => {
    e.preventDefault();
    console.log("in on change handle");
    let data=this.props.productData.productData
    // let index = "";
    
       const index = data.findIndex((res) => {
        return res.product_name === itemname;
      });
    
      console.log("index==",index);
    if (index >= 0) {
      this.props.history.push({
        pathname: "/ProductDetails",
        state: {
          productId: data[index].product_id,
        },
      });
    } else if (itemname !== null && index < 0) {
      this.props.history.push("/PageNotFound");
    }
  };
  render() {
    const l = this.props.productData;
    console.log("l==", l);
    const allProducts = l.productData;
    console.log("allProducts", allProducts);
    let listItems = "";
    if (allProducts !== undefined) {
      listItems = allProducts.map((val) => {
        return val.product_name;
      });
    }
    console.log("listItems", listItems);

    // const Informations =this.state.Information;
    // console.log("Informations-----",Informations);
    // let allProductslist = Informations.map(
    //   val=>{
    //     return console.log("in map",val);
    //   }
    // );
    // console.log("allProductslist==",allProductslist);
    let items;
    // let productList;
    // if(Informations ===undefined || Informations === '' ){
    //   items='';
    // }
    // else{

    //   items = Informations.filter((data)=>{
    //     console.log("data==and==data.product_name",data,data.product_name);
    //     console.log("data.product_name",data.product_name);
    //     console.log("this.state.search",this.state.search);
    //     if(this.state.search == '' || this.state.search == null)
    //         return data.product_name
    //     else if(data.product_name.toLowerCase().includes(this.state.search.toLowerCase())){
    //       console.log("data in else if==",data);
    //         return data.product_name
    //     }
    //   }).map((data,i)=>{
    //     console.log("data in map==",data);
    //     console.log("data in map name ==",data.product_name);
    //     // productList=data.product_name;
    //     return(
    //     <div>
    //       <ul>
    //         <li style={{position:'relative',left:'10vh'}}>
    //           <span >{data.product_name}</span>
    //         </li>
    //       </ul>
    //     </div>
    //     )
    //   })
    // }
    // console.log("items=======",items);

    // if(Informations !== undefined && this.state.search !== ''){
    //   console.log("in==",Informations);
    //   let items;
    //   items = Informations.filter((data)=>{
    //     console.log("data=== in filter",data);
    //     if(this.state.search == null)
    //         return data
    //     else if(data.color_id.product_name.toLowerCase().includes(this.state.search.toLowerCase())){
    //         return data
    //     }
    //   }).map(data=>{
    //     return(
    //     <div>
    //       <ul>
    //         <li style={{position:'relative',left:'10vh'}}>
    //           <span >{data.color_id.product_name}</span>
    //         </li>
    //       </ul>
    //     </div>
    //     )
    //   })
    // }

    return (
      <div>
        <Navbar bg="dark" className="homeNav" expand="lg" variant="dark">
          <Navbar.Brand className="font-weight-bold navbarBrand">
            <span className="navbarBrandNeo">Neo</span>
            <span className="navbarBrandStore">STORE</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="mr-auto homeNav_items">
              <Nav.Link className="navbarBrand_home" href="#home">
                <Link
                  to="/"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Home
                </Link>
              </Nav.Link>
              <Nav.Link className="navbarBrand_product" href="#product">
                <Link
                  to="/Products"
                  style={{
                    color: "white",
                    textDecoration: "none",
                    fontSize: "20px",
                  }}
                >
                  Products
                </Link>
              </Nav.Link>
              <Nav.Link
                className="navbarBrand_order"
                href="#order"
                onClick={this.checkForLogIn}
              >
                {x}
                Order
              </Nav.Link>
              <div style={{width:"450px"}}>
                <Autocomplete
                  id="free-solo-demo"
                  options={listItems}
                  freeSolo
                  onChange={(event, value) => this.onChangeHandle(event, value)}
                  renderInput={(params) => (
                    <TextField
                      {...params}
                      margin="normal"
                      placeholder="Search..."
                      variant="outlined"
                      style={{ backgroundColor: "white" }}
                    />
                  )}
                />
              </div>
              {/* <div class="form-group has-search" style={{zIndex:"0"}}>
                <span class="fa fa-search form-control-feedback"></span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Search"
                  onChange={(e) => this.searchSpace(e)}
                />
                <div style={{zIndex:"1"}}> </div>
                {/* */}
              {/* </div> */}

              <Link className="cartlink" to="/Cart">
                <Button className="cartButton" variant="Link">
                  <ShoppingCartIcon
                    className="x"
                    style={{ marginLeft: "-7px" }}
                  ></ShoppingCartIcon>
                  <span className="circle">0</span>
                  <span style={{ marginLeft: "14px" }}>Cart</span>
                </Button>
              </Link>
              <LoginReg></LoginReg>
            </Nav>
          </Navbar.Collapse>
        </Navbar>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return {
    productData: state.productData,
  };
};

const mapDispatchToProps = {
  getProducts,
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(withRouter(HomeNavbar));
