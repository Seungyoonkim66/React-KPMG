import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./styles/App.css";
import Main from "./components/main/main";
import Detail from "./components/detail/tempdetail";
import { deepPurple } from '@material-ui/core/colors';
import Files from './static/samplefile.json';

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
      },
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
          },
          '&.Mui-focused feldset': {
          }
        }
      }
    }
  });
  
  const getFiles = Files.files;

  const renderDetail = getFiles.map((file) => 
   <Route 
      key={file.id} 
      path={file.id} 
      exact 
      render={() => <Detail fileId={file.id}/>}>
   </Route>
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/' exact component={Main}></Route>
            {renderDetail}
            {/* <Route path='/detail' exact component={Detail}></Route> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
