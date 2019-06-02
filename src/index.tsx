import * as React from 'react'
import { render } from 'react-dom'
import clsx from 'clsx'

import { makeStyles, useTheme } from '@material-ui/core/styles'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import Paper from '@material-ui/core/Paper'
import Grid from '@material-ui/core/Grid'
import Box from '@material-ui/core/Box'
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import { Toolbar } from '@material-ui/core'
import CssBaseline from '@material-ui/core/CssBaseline'
import Drawer from '@material-ui/core/Drawer'
import Divider from '@material-ui/core/Divider'

import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'

import MenuIcon from '@material-ui/icons/Menu'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import InboxIcon from '@material-ui/icons/MoveToInbox'
import MailIcon from '@material-ui/icons/Mail'

const drawerWidth = 240

const useStyles = makeStyles(theme => ({
  title: { flexGrow: 1 },
  root: {
    display: 'flex',
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
  },
  appBarShift: {
    marginLeft: drawerWidth,
    width: `calc(100% - ${drawerWidth}px)`,
    transition: theme.transitions.create(['width', 'margin'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  menuButton: {
    marginRight: 36,
  },
  hide: {
    display: 'none',
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
  },
  drawerOpen: {
    width: drawerWidth,
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.enteringScreen,
    }),
  },
  drawerClose: {
    transition: theme.transitions.create('width', {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen,
    }),
    overflowX: 'hidden',
    [theme.breakpoints.up('sm')]: {
      width: theme.spacing(7) + 1,
    },
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
    marginTop: theme.spacing(2),
  },
  paper: {
    width: '150px',
    height: '50px',
    margin: '2px',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: '0 8px',
    ...theme.mixins.toolbar,
  },
}))

function App() {
  const style = useStyles()
  const theme = useTheme()
  const [open, setOpen] = React.useState(false)
  const openDrawer = React.useCallback(() => setOpen(true), [])
  const closeDrawer = React.useCallback(() => setOpen(false), [])

  return (
    <div className={style.root}>
      <CssBaseline />
      <AppBar
        position="fixed"
        className={clsx(style.appBar, {
          [style.appBarShift]: open,
        })}
      >
        <Toolbar>
          <IconButton
            edge="start"
            onClick={openDrawer}
            className={style.menuButton}
            color="inherit"
            aria-label="Menu"
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" className={style.title}>
            News
          </Typography>
          <Button color="inherit">Login</Button>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        className={clsx(style.drawer, {
          [style.drawerOpen]: open,
          [style.drawerClose]: !open,
        })}
        classes={{
          paper: clsx({
            [style.drawerOpen]: open,
            [style.drawerClose]: !open,
          }),
        }}
        open={open}
      >
        <div className={style.toolbar}>
          <IconButton onClick={closeDrawer}>
            {theme.direction === 'rtl' ? (
              <ChevronRightIcon />
            ) : (
              <ChevronLeftIcon />
            )}
          </IconButton>
        </div>
        <Divider />
        <List>
          {['Inbox', 'Starred', 'Send email', 'Drafts'].map((text, index) => (
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
          {['All mail', 'Trash', 'Spam'].map((text, index) => (
            <ListItem button key={text}>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItem>
          ))}
        </List>
      </Drawer>
      <main className={style.content}>
        <div className={style.toolbar} />
        <Grid container direction="column">
          <Box className={style.box}>
            <Typography variant="h2" align="center" gutterBottom>
              Welcome to Sung's demo
            </Typography>
          </Box>
          <Grid container item justify="center">
            <Box className={style.box}>
              <Button
                disabled={!open}
                onClick={closeDrawer}
                variant="contained"
                color="primary"
              >
                <Typography>Close Left Drawer</Typography>
              </Button>
            </Box>
          </Grid>
          <Box className={style.box} my={3}>
            <Grid container justify="space-evenly" wrap="wrap">
              {Array.from({ length: 25 }, (v, i) => i).map(id => (
                <Paper key={id} className={style.paper} elevation={id}>
                  <Typography>item{id}</Typography>
                </Paper>
              ))}
            </Grid>
          </Box>
        </Grid>
      </main>
    </div>
  )
}

// const theme = {
//   background: "linear-gradient(45deg, #FE6B8B 30%, #FF8E53 90%)"
// };

// function Theming() {
//   return (
//     <ThemeProvider theme={theme}>
//       <App />
//     </ThemeProvider>
//   );
// }

const rootElement = document.getElementById('root')
render(<App />, rootElement)
// render(
//   <ThemeProvider theme={theme}>
//     <App />
//   </ThemeProvider>,
//   rootElement
// );
