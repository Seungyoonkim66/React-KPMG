import { Route, BrowserRouter as Router, Switch } from "react-router-dom";
import React from 'react';
import { createMuiTheme, ThemeProvider } from '@material-ui/core/styles';
import "./styles/App.css";
import Main from "./components/main/main";
import Main2 from "./components/main_ver2/main_ver2";
import Files from './static/samplefile.json';
import Detail from "./components/detail_ver2/detail_ver2";
import Login from "./components/login/login";
import LogoutButton from './components/login/logout';
import { SignIn } from './Auth';
import AuthRoute from './AuthRoute';


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
  const [user, setUser] = React.useState(null);
  const authenticated = user != null;

  const login = ({ email, password }) => setUser(SignIn({ email, password }));
  const logout = () => setUser(null);

  const renderDetail = getFiles.map((file) =>
    <AuthRoute
      key={file.id}
      authenticated={authenticated}
      path={`/${parseInt(file.id)}`}
      exact
      render={() => <Detail fileId={parseInt(file.id)} />}
    >
    </AuthRoute>
  );


  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <Router>
           {authenticated ? ( <LogoutButton logout={logout} />) : (null)}
          <Switch>
            <Route path='/' exact render={(props) => <Login authenticated={authenticated} login={login} />} ></Route>
            <AuthRoute authenticated={authenticated} path='/main' Component={Main2} />
            {renderDetail}

            {/* ver 1 - temp */}
            <Route path='/ver1' exact component={Main} />
          </Switch>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
