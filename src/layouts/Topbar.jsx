import React, { useEffect, useState } from 'react';
import { withRouter } from 'react-router-dom';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import {
  Badge,
  IconButton,
  Popover,
  Toolbar,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  Menu as MenuIcon,
  Close as CloseIcon,
  NotificationsOutlined as NotificationsIcon,
  Input as InputIcon
} from '@material-ui/icons';

import NotificationList from './NotificationList'
import { getNotifications } from 'services/notification';

const Topbar = ({
  className,
  onToggleSidebar,
  isSidebarOpen,
  title,
  history
}) => {
  const classes = useStyles();
  const notificationsLimit = 4;
  const rootClassName = classNames(classes.root, className);
  function handleSignOut() {
    history.push('/login');
  }

  const [notifications, setNotifications] = useState([]);
  const [notificationsCount, setNotificationsCount] = useState(0);
  const [notificationsEl, setNotificationsEl] = useState(null);
  useEffect(() => {
    let ignore = false;
    async function fetchData() {
      const { notifications, notificationsCount } = await getNotifications(
        notificationsLimit
      );
      if (!ignore) {
        setNotifications(notifications);
        setNotificationsCount(notificationsCount);
      }
    }
    fetchData();
    return () => { ignore = true; };
  }, [notificationsLimit]);

  function handleShowNotifications(e) {
    setNotificationsEl(e.currentTarget);
  }

  function handleCloseNotifications() {
    setNotificationsEl(null);
  }

  return (
    <React.Fragment>
      <div className={rootClassName}>
        <Toolbar className={classes.toolbar}>
          <IconButton
            className={classes.menuButton}
            onClick={onToggleSidebar}
            variant="text"
          >
            {isSidebarOpen ? <CloseIcon /> : <MenuIcon />}
          </IconButton>
          <Typography
            className={classes.title}
            variant="h4"
          >
            {title}
          </Typography>
          <IconButton
            className={classes.notificationsButton}
            onClick={handleShowNotifications}
          >
            <Badge
              badgeContent={notificationsCount}
              color="primary"
              variant="dot"
            >
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <IconButton
            className={classes.signOutButton}
            onClick={handleSignOut}
          >
            <InputIcon />
          </IconButton>
        </Toolbar>
      </div>
      <Popover
        anchorEl={notificationsEl}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'center'
        }}
        onClose={handleCloseNotifications}
        open={Boolean(notificationsEl)}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'center'
        }}
      >
        <NotificationList
          notifications={notifications}
          onSelect={handleCloseNotifications}
        />
      </Popover>
    </React.Fragment>
  )
}

Topbar.propTypes = {
  className: PropTypes.string,
  history: PropTypes.object.isRequired,
  isSidebarOpen: PropTypes.bool,
  onToggleSidebar: PropTypes.func,
  title: PropTypes.string
};

Topbar.defaultProps = {
  onToggleSidebar: () => {}
};

const useStyles = makeStyles(theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing(1)
  },
  menuButton: {
    marginLeft: '-4px'
  },
  notificationsButton: {
    marginLeft: 'auto'
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
}));

export default withRouter(Topbar);
