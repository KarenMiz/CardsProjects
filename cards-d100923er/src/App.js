import './App.css';
import Layout from './layout/Layout';
import { BrowserRouter } from "react-router-dom";
import Router from "./routes/Router";
import UserProvider from './users/providers/UserProvider';

function App() {
  return (
    <BrowserRouter>
      <UserProvider>
        <Layout>
          <Router />
        </Layout>
      </UserProvider>
    </BrowserRouter>
  );
}

export default App;
