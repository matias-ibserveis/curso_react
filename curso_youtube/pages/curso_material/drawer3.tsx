// Example responsive: https://morioh.com/p/16da0f5432c9


import React from "react";
import clsx from "clsx";
import { Theme,makeStyles, createStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Button from "@material-ui/core/Button";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import InboxIcon from "@material-ui/icons/MoveToInbox";
import MailIcon from "@material-ui/icons/Mail";
//import Grid from '@material-ui/core/Grid';
//import useResizeAware from 'react-resize-aware';

// no: npm install --save react-pixel-size
// no: npm install --save react-resize-aware
  

const drawerwidth = 500

const useStyles = makeStyles((theme: Theme) =>
  createStyles({

  divlist: {
    //width: `calc(100% - 50px)`,
    //width: window.screen.width ,
    [theme.breakpoints.down('sm')]: {
      backgroundColor: theme.palette.secondary.main,
      width: '80%'
    },
    [theme.breakpoints.up('md')]: {
      backgroundColor: theme.palette.primary.main,
      width: 760
    },
    [theme.breakpoints.up('lg')]: {
      backgroundColor: 'blue',
      width: 1280
    },
    //width:  drawerwidth,
    //display: "flex",
    //flexWrap: "wrap",
    flexGrow: 1,
    backgroundColor: "green"
  },

  list_detalle: {
    width: "100%",
    backgroundColor: "yellow"
  },

  fullList: {
    //width: 500,
    //width: '100%',
    backgroundColor: "red"
  }
  })
)

type Anchor = "top" | "left" | "bottom" | "right";

export default function TemporaryDrawer() {

  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false
  });

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor) => (
    <div
      className={clsx(classes.divlist, {
        [classes.fullList]: anchor === "top" || anchor === "bottom"
      })}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List className={classes.list_detalle}>
        {["Inbox", "Starred", "Send email", "Drafts"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
      <Divider />
      <List>
        {["All mail", "Trash", "Spam"].map((text, index) => (
          <ListItem button key={text}>
            <ListItemIcon>
              {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
            </ListItemIcon>
            <ListItemText primary={text} />
          </ListItem>
        ))}
      </List>
    </div>
  );

  return (
    <div>
      {(["left", "right", "top", "bottom"] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <Button onClick={toggleDrawer(anchor, true)}>{anchor}</Button>
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            onClose={toggleDrawer(anchor, false)}
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
