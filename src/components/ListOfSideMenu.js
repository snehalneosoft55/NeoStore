import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Divider from '@material-ui/core/Divider';

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    maxWidth: 360,
    marginLeft:30,
    backgroundColor: theme.palette.background.paper,
  },
}));

function ListItemLink(props) {
  return <ListItem button component="a" {...props} />;
}

export default function SimpleList() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <List component="nav" aria-label="main mailbox folders">
        <ListItem button>
          <ListItemText primary="Sofa" style={{marginLeft:"20px"}} />
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Bed"style={{marginLeft:"21px"}}  />
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Chair" style={{marginLeft:"18px"}} />
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Table" style={{marginLeft:"17px"}} />
        </ListItem>
        <Divider/>
        <ListItem button>
          <ListItemText primary="Almirah" style={{marginLeft:"14px"}} />
        </ListItem>
      </List>
    </div>
  );
}
