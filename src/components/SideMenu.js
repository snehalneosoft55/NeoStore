import React,{useEffect} from "react";
import { makeStyles } from "@material-ui/core/styles";
import ExpansionPanel from "@material-ui/core/ExpansionPanel";
import ExpansionPanelSummary from "@material-ui/core/ExpansionPanelSummary";
import ExpansionPanelDetails from "@material-ui/core/ExpansionPanelDetails";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import Button from "@material-ui/core/Button";
import "../assets/css/sideMenu.css";
import ListOfSideMenu from "./ListOfSideMenu";
import ListOfColors from "./ListOfColors";

const useStyles = makeStyles(theme => ({
  root: {
    width: "100%"
  },
  heading: {
    fontSize: theme.typography.pxToRem(15),
    fontWeight: theme.typography.fontWeightRegular
  }
}));
const fetchedData='';
export default function SimpleExpansionPanel(props) {
  const classes = useStyles();
  // useEffect(
  //   ()=>{
  //     //console.log("in useEffect of sidemenu",fetchedData);
  //     props.callbackFromParent(fetchedData);
  //   }
  // );
  function myCallback(fetchedData) {
    //console.log("^^^^^^^^^in sidemenu..", fetchedData);
    // props.callbackFromParentInProduct(fetchedData);
  }
  return (
    <div className={classes.root} style={{ paddingTop: "40px" }}>
      <Button
        className="btn"
        variant="contained"
        style={{
          width: "200px",
          backgroundColor: "white",
          marginBottom: "20px"
        }}
        onClick={props.allProductsHandler}
      >
        <Typography>All Products</Typography>
      </Button>

      <ExpansionPanel style={{ marginBottom: "20px", width: "200px" }}>
        <ExpansionPanelSummary
          style={{ marginLeft: "40px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Categories</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ListOfSideMenu
            categoryHandler={(val)=>props.categoryHandler(val)}
              // callbackFromParent={categories => {
              //   //console.log("in callbackfromparent");
              //   return myCallback(categories);
              // }}
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
      <ExpansionPanel style={{ width: "200px" }}>
        <ExpansionPanelSummary
          style={{ marginLeft: "40px" }}
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography className={classes.heading}>Color</Typography>
        </ExpansionPanelSummary>
        <ExpansionPanelDetails>
          <Typography>
            <ListOfColors 
              colorHandler={(val)=>props.colorHandler(val)}
            />
          </Typography>
        </ExpansionPanelDetails>
      </ExpansionPanel>
    </div>
  );
}
