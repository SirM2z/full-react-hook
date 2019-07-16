import React from 'react';
import { Link, NavLink } from 'react-router-dom';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import {
  Avatar,
  Divider,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Typography
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import {
  PeopleOutlined as PeopleIcon,
  AccountBoxOutlined as AccountBoxIcon,
  Note as NoteIcon,
  SettingsOutlined as SettingsIcon
} from '@material-ui/icons';

const ListItemLink = React.forwardRef((props, ref) => (
  <NavLink innerRef={ref} {...props} />
));

const Sidebar = ({ className }) => {
  const classes = useStyles();
  const rootClassName = classNames(classes.root, className);

  return (
    <nav className={rootClassName}>
      <div className={classes.logoWrapper}>
        <Link
          className={classes.logoLink}
          to="/app"
        >
          <Typography
            className={classes.nameText}
            variant="h3"
          >
            Ryan's Admin
          </Typography>
          {/* <img
            alt="Brainalytica logo"
            className={classes.logoImage}
            src="/images/logos/brainalytica_logo.svg"
          /> */}
        </Link>
      </div>
      <Divider className={classes.logoDivider} />
      <div className={classes.profile}>
        <Link to="/account">
          <Avatar
            alt="Roman Kutepov"
            className={classes.avatar}
            src="/images/avatars/avatar_6.png"
          />
        </Link>
        <Typography
          className={classes.nameText}
          variant="h6"
        >
          Ryan
        </Typography>
        <Typography
          className={classes.bioText}
          variant="caption"
        >
          Front-end Engineer
        </Typography>
      </div>
      <Divider className={classes.profileDivider} />
      <List component="div" disablePadding>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={ListItemLink}
          to="/app/users"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <PeopleIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="用户管理"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={ListItemLink}
          to="/products"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <NoteIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="文章管理"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={ListItemLink}
          to="/app/account"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <AccountBoxIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="账号信息"
          />
        </ListItem>
        <ListItem
          activeClassName={classes.activeListItem}
          className={classes.listItem}
          component={ListItemLink}
          to="/settings"
        >
          <ListItemIcon className={classes.listItemIcon}>
            <SettingsIcon />
          </ListItemIcon>
          <ListItemText
            classes={{ primary: classes.listItemText }}
            primary="系统管理"
          />
        </ListItem>
      </List>
    </nav>
  );
}

Sidebar.propTypes = {
  className: PropTypes.string
};

const useStyles = makeStyles(theme => ({
  root: {
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    paddingLeft: theme.spacing(1),
    paddingRight: theme.spacing(1)
  },
  logoWrapper: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '63px',
    flexShrink: 0
  },
  logoLink: {
    fontSize: 0
  },
  logoImage: {
    cursor: 'pointer'
  },
  logoDivider: {
    marginBottom: theme.spacing(2)
  },
  profile: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    minHeight: 'fit-content'
  },
  avatar: {
    width: '100px',
    height: '100px'
  },
  nameText: {
    marginTop: theme.spacing(2)
  },
  bioText: {},
  profileDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  },
  listSubheader: {
    color: theme.palette.text.secondary
  },
  listItem: {
    cursor: 'pointer',
    '&:hover': {
      backgroundColor: theme.palette.primary.light,
      borderLeft: `4px solid ${theme.palette.primary.main}`,
      borderRadius: '4px',
      '& $listItemIcon': {
        color: theme.palette.primary.main,
        marginLeft: '-4px'
      }
    },
    '& + &': {
      marginTop: theme.spacing(1)
    }
  },
  activeListItem: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    '& $listItemText': {
      color: theme.palette.text.primary
    },
    '& $listItemIcon': {
      color: theme.palette.primary.main,
      marginLeft: '-4px'
    }
  },
  listItemIcon: {
    marginRight: 0
  },
  listItemText: {
    fontWeight: 500,
    color: theme.palette.text.secondary
  },
  listDivider: {
    marginBottom: theme.spacing(2),
    marginTop: theme.spacing(2)
  }
}));

export default Sidebar;
