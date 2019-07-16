import React, { useState } from 'react';
import classNames from 'classnames';
import { Drawer } from '@material-ui/core';
import { useTheme, makeStyles } from '@material-ui/core/styles';
import useMediaQuery from '@material-ui/core/useMediaQuery';

import Routes from '../Routes';
import Topbar from './Topbar';
import Sidebar from './Sidebar';
import Footer from './Footer';

const useStyles = makeStyles(theme => ({
  topbar: {
    position: 'fixed',
    width: '100%',
    top: 0,
    left: 0,
    right: 'auto',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  topbarShift: {
    marginLeft: '271px',
    width: 'calc(-271px + 100vw)'
  },
  drawerPaper: {
    zIndex: 1200,
    width: '271px'
  },
  sidebar: {
    width: '270px'
  },
  content: {
    marginTop: '64px',
    backgroundColor: theme.palette.background.default,
    transition: theme.transitions.create('margin', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  contentShift: {
    marginLeft: '270px'
  }
}));

const Layouts = ({ title, ...props }) => {
  const classes = useStyles();
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down('md'));

  const [isOpen, setIsOpen] = useState(!isMobile);
  function handleClose() {
    setIsOpen(false);
  }
  function handleToggleOpen() {
    setIsOpen(prevIsOpen => !prevIsOpen)
  }
  const shiftTopbar = isOpen && !isMobile;
  const shiftContent = isOpen && !isMobile;
  return (
    <React.Fragment>
      <Topbar
        className={classNames(classes.topbar, {
          [classes.topbarShift]: shiftTopbar
        })}
        isSidebarOpen={isOpen}
        onToggleSidebar={handleToggleOpen}
        // title={title}
        title='Layout'
      />
      <Drawer
        anchor="left"
        classes={{ paper: classes.drawerPaper }}
        onClose={handleClose}
        open={isOpen}
        variant={isMobile ? 'temporary' : 'persistent'}
      >
        <Sidebar className={classes.sidebar} />
      </Drawer>
      <main
        className={classNames(classes.content, {
          [classes.contentShift]: shiftContent
        })}
      >
        <Routes {...props} />
        <Footer />
      </main>
    </React.Fragment>
  )
}

export default Layouts;
