import React, { Component } from 'react'
import {connect} from 'react-redux'
import axios from 'axios';
import BASE_URL from '../constants/BaseURL'

import '../assets/css/categoryList.css'

import {getCategories} from '../actions/ListOfSideMenuAction';


class ListOfSideMenu extends Component {
  constructor(){
    super();
    this.state={
      categories:''
    }
  }
  componentWillMount(){
    this.props.getCategories().then(() => 
        {
            const { categories } = this.props;
        })
  }
  categoryHandler(categoryId){
      //console.log("in category handler,,and category id ==",categoryId);
      axios.get(" https://5e94f67d50bd.ngrok.io/commonProducts", { params: { "category_id":categoryId}})
      .then(({ data }) => {
        //console.log("data of category####",data);
    });
    
  }
  render() {
    const { categories } = this.props;
    //console.log("categories-------",categories);
    const allCtegories = categories.category_details;
    let ListDisplay=""

    if(allCtegories != undefined){
        ListDisplay=(
          <div>
            <ul>
            {
              allCtegories.map(
                (val,i)=>{
                  //console.log(`category id of ${val.category_name}==${val.category_id}`);
                  return(
                    <div>
                      <li className="categoryListItem" ><button  className="listItem" onClick={()=>this.categoryHandler(val.category_id)}>{val.category_name}</button></li>
                    <hr></hr>
                    </div>
                    
                  )
                }
              )
            }
            </ul>
            
          </div>
        )
    }
    return (
      <div>
        {ListDisplay}
      </div>
    )
  }
}

const mapStateToProps = state => {
  //console.log("in map state to props,,,,categories==",state.categories);
  const {categories } = state.getCategoriesReducer
    return {categories};

}
    

const mapDispatchToProps = {
    getCategories
};
export default connect(mapStateToProps,mapDispatchToProps)(ListOfSideMenu);
