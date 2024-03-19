import './App.css';
import Layout from './Layout/Layout';
import Router from "./Routes/Router";
import {BrowserRouter} from "react-router-dom";

function App() {
  return <BrowserRouter>
  <Layout>
  <Router/>
  </Layout>
  </BrowserRouter>
}

export default App;
