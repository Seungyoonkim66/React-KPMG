import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./styles/App.css";
import Main from "./components/main/main";
import Detail from "./components/detail/detail";
import { deepPurple } from '@material-ui/core/colors';


function App() {
  const font = "'Open Sans Condensed', 'sans-serif'";
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#3b3b58',
        main: '#33334c',
      },
      secondary: {
        main: '#483698'
      }
    },
    typography: {
      fontFamily: font,
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          backgroundColor: 'rgba(255,255,255,0)',
          color: deepPurple[50],
          '&:hover fieldset': {
            // backgroundColor: '#33334c',
            // borderColor: deepPurple[300]
          },
          '&.Mui-focused feldset': {
            // backgroundColor: '#33334c',
            // borderColor: deepPurple[300]
          }
        }
      }
    }
  });

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/' exact component={Main}></Route>
            <Route path='/detail' exact component={Detail}></Route>
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
