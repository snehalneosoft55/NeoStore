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
    
    localStorage.removeItem("token");
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
                          <Link style={{ textDecoration: "none" }} to="/" >
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

