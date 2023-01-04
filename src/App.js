
import './App.css';

import Page from './components/page.js'
import {
  BrowserRouter as Router,
  Routes,
  Route
} from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';


function App() {
  return (
    <>
      <Router>
          <Routes>
            <Route 
              exact path="/"
              element={<Page />}
            >
            </Route>
          </Routes>
        </Router>
    </>
  );
}

export default App;