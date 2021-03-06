import React, { Component } from "react";
import { connect } from "react-redux";
import axios from "axios";

import "../assets/css/categoryList.css";

import { getCategories } from "../actions/ListOfSideMenuAction";

class ListOfSideMenu extends Component {
  constructor(props) {
    super(props);
    this.state = {
      categories: ""
    };
  }
  componentWillMount() {
    this.props.getCategories().then(() => {
      const { categories } = this.props;
      //console.log("in list of side menu...comonentwillmount", this.props);
      // this.props.callbackFromParent(categories);
    });
  }
  // // categoryHandler(categoryId){
  // //     //console.log("in category handler,,and category id ==",categoryId);
  // //     axios.get(" https://27fc8643f73c.ngrok.io/commonProducts", { params: { "category_id":categoryId}})
  // //     .then(({ data }) => {
  // //       //console.log("data of category####",data);
  // //       this.props.callbackFromParent(data);
  // //   });

  // }
  render() {
    const { categories } = this.props;
    //console.log("categories-------", categories);
    const allCtegories = categories.category_details;
    let ListDisplay = "";

    if (allCtegories != undefined) {
      ListDisplay = (
        <div>
          <ul>
            {allCtegories.map((val, i) => {
              // console.log(
              //   `category id of ${val.category_name}==${val.category_id}`
              // );
              return (
                <div>
                  <li className="categoryListItem">
                    <button
                      className="listItem"
                      onClick={ ()=>this.props.categoryHandler(val.category_id)}
                    >
                      {val.category_name}
                    </button>
                  </li>
                  <hr></hr>
                </div>
              );
            })}
          </ul>
        </div>
      );
    }
    return <div>{ListDisplay}</div>;
  }
}

const mapStateToProps = state => {
  //console.log("in map state to props,,,,categories==", state.categories);
  const { categories } = state.getCategoriesReducer;
  return { categories };
};

const mapDispatchToProps = {
  getCategories
};
export default connect(mapStateToProps, mapDispatchToProps)(ListOfSideMenu);
