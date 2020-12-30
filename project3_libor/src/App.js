import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./styles/App.css";
import Main from "./components/main/main";
import Main2 from "./components/main_ver2/main_ver2";
import Files from './static/samplefile.json';
import Detail from "./components/detail_ver2/detail_ver2";

function App() {
  const font = "'Open Sans Condensed', 'sans-serif'";
  const theme = createMuiTheme({
    palette: {
      primary: {
        light: '#3b3b58',
        main: '#33334c',
      },
      secondary: {
        main: '#f5f5f5',
        light: '#fba100',
      },
    },
    typography: {
      fontFamily: font,
    },
    overrides: {
      MuiOutlinedInput: {
        root: {
          backgroundColor: 'rgba(255,255,255,0.5)',
          '& fieldset': {
            borderColor: "",
          },
          '&:hover fieldset': {
            borderColor: '',
          },
          '&.Mui-focused fieldset': {
            borderColor: '',
          },
        }
      }
    },
  });
  
  const getFiles = Files.files;

  const renderDetail = getFiles.map((file) => 
   <Route 
      key={file.id} 
      path={`/${parseInt(file.id)}`} 
      exact
      render={() => <Detail fileId={parseInt(file.id)} />}
    >
   </Route>
  );

  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
          <Switch>
            <Route path='/' exact component={Main2}></Route>
            <Route path='/ver1' exact component={Main}></Route>
            {renderDetail}
            {/* <Route path='/detail' exact component={Detail}></Route> */}
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
