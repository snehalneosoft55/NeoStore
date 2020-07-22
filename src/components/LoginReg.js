import React from "react";
import Button from "@material-ui/core/Button";
import ClickAwayListener from "@material-ui/core/ClickAwayListener";
import Grow from "@material-ui/core/Grow";
import Paper from "@material-ui/core/Paper";
import Popper from "@material-ui/core/Popper";
import MenuItem from "@material-ui/core/MenuItem";
import MenuList from "@material-ui/core/MenuList";
import { makeStyles } from "@material-ui/core/styles";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import AccountBoxIcon from "@material-ui/icons/AccountBox";
import { Link } from "react-router-dom";
import Logout from "./Logout";
import swal from "sweetalert";
import axios from "axios";
import { BASE_URL } from "../constants/BaseURL";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
  },
  paper: {
    marginRight: theme.spacing(2),
  },
}));

export default function MenuListComposition() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(false);
  const anchorRef = React.useRef(null);

  const handleToggle = () => {
    setOpen((prevOpen) => !prevOpen);
  };

  const handleClose = (event) => {
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  const handleLogOut1 = (event) => {
    // console.log("in handle logout1");
    const token = localStorage.getItem('token');
    // console.log("token::",token);
    const cartData = JSON.parse(localStorage.getItem("cartProducts"));

    // console.log("cartData==", cartData);
    let cartdataafterMap=[];
    console.log("cartData",cartData);
    if(cartData!==null&& cartData!==undefined&& cartData!==''){
      cartData.map(val=>{
        let Data1={
          "_id":"",
          "product_id":"",
          "quantity":""
        };
        if(val[0]){
          Data1["_id"]=val[0].productDetail.id
          Data1["quantity"]=val[0].quantity;
          Data1["product_id"]=val[0].productDetail.id
          console.log("val[0].quantity Data1",Data1);
          cartdataafterMap.push(Data1)
        }
        else{
          Data1["_id"]=val.productDetail.id
          Data1["quantity"]=val.quantity;
          Data1["product_id"]=val.productDetail.id
          console.log("val.quantity Data1",Data1);
          cartdataafterMap.push(Data1)
        }
       
      })
    }
    
    console.log("afetr map cartdataafterMap",cartdataafterMap);
    const data = cartdataafterMap ? cartdataafterMap : [];
    data.push({ flag:"logout" });
    console.log("data afetr push logout flag", data);
    // axios.post(BASE_URL + 'addProductToCartCheckout', data, { headers: { "Authorization": "Brearer " + token } })
    // .then(res=>{
    //     console.log("res====",res.data.message);
    //     swal(`${res.data.message}`)
    // })
    // axios.get(BASE_URL+"commonProducts").then(res=>{
    //   console.log("response",res.data);
    //   const allProducts = res.data;
    //   if(allProducts!==null&& allProducts!==''&&allProducts!==undefined)
    //   {
    //     allProducts.find((allProducts)=>{
    //       return 
    //     })
    //   }
      
    // })
    // axios({
    //   mathod: `POST`,
    //   url : `${BASE_URL}addProductToCartCheckout`,
    //   headers : {'Authorization': `Bearer ${token}`},
    //   data
    // })
  //   axios.post(BASE_URL + "addProductToCartCheckout", data,{
  //     headers : {'Authorization':`Bearer ${token}`} 
  // })
  // axios ({
  //           method : 'POST',
  //           url : `${BASE_URL}addProductToCartCheckout`,
  //           headers : {'Authorization': `Bearer ${token}`},
  //           data
  //       })
  axios.post(BASE_URL + 'addProductToCartCheckout', data, { headers: { "Authorization": "Brearer " + token } })
  .then(res=>{
      console.log("res====",res.data.message);
      swal(`${res.data.message}`)
  })

    localStorage.clear();
    if (anchorRef.current && anchorRef.current.contains(event.target)) {
      return;
    }

    setOpen(false);
  };
  function handleListKeyDown(event) {
    if (event.key === "Tab") {
      event.preventDefault();
      setOpen(false);
    }
  }

  // return focus to the button when we transitioned from !open -> open
  const prevOpen = React.useRef(open);
  React.useEffect(() => {
    if (prevOpen.current === true && open === false) {
      anchorRef.current.focus();
    }

    prevOpen.current = open;
  }, [open]);
  const token = localStorage.getItem("token");
  console.log("token in login", token);
  // let displayUserActivity = '';

  return (
    <div className={classes.root}>
      <div>
        <Button
          style={{
            color: "black",
            background: "white",
            outline: "none",
            margin: "10px",
            width: "90px",
            height: "45px",
          }}
          ref={anchorRef}
          aria-controls={open ? "menu-list-grow" : undefined}
          aria-haspopup="true"
          onClick={handleToggle}
        >
          <AccountBoxIcon />
          <ExpandMoreIcon />
        </Button>
        <Popper
          open={open}
          anchorEl={anchorRef.current}
          role={undefined}
          transition
          disablePortal
        >
          {({ TransitionProps, placement }) => (
            <Grow
              {...TransitionProps}
              style={{
                transformOrigin:
                  placement === "bottom" ? "center top" : "center bottom",
              }}
            >
              <Paper>
                <ClickAwayListener onClickAway={handleClose}>
                  <MenuList
                    autoFocusItem={open}
                    style={{ width: "110px" }}
                    id="menu-list-grow"
                    onKeyDown={handleListKeyDown}
                  >
                    {token ? (
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link
                            style={{ textDecoration: "none" }}
                            to={{
                              pathname: "/Order",
                              state: {
                                show: 1,
                              },
                            }}
                          >
                            Profile
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleLogOut1}>
                          <Link style={{ textDecoration: "none" }} to="/">
                            Log Out
                          </Link>
                        </MenuItem>
                      </div>
                    ) : (
                      <div>
                        <MenuItem onClick={handleClose}>
                          <Link style={{ textDecoration: "none" }} to="/signIn">
                            Log In
                          </Link>
                        </MenuItem>
                        <MenuItem onClick={handleClose}>
                          <Link
                            style={{ textDecoration: "none" }}
                            to="/Registration"
                          >
                            Register
                          </Link>
                        </MenuItem>
                      </div>
                    )}

                    {/* <MenuItem onClick={handleClose}>Logout</MenuItem> */}
                  </MenuList>
                </ClickAwayListener>
              </Paper>
            </Grow>
          )}
        </Popper>
      </div>
    </div>
  );
}
