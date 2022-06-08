import logo from './logo.svg';
import './App.css';
import Home from './components/Home/Home';
import io from "socket.io-client"
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Header from './components/Header/Header';


const socket = io.connect("https://simple-socket-crud5.herokuapp.com");
function App() {
  return (
    <div>
      <Header />
      <Home socket={socket} />
      <ToastContainer />
    </div>
  );
}

export default App;
