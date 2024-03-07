import { BrowserRouter as Router } from "react-router-dom";
import './App.css';
import Home from "./components/Home/Home";
import { Toaster } from 'react-hot-toast';

function App() {
  return (
    <div className='App'>
      <Router>
        <Toaster
          position="bottom-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                // background: '#0F172A',
                // color: 'white',
                // // border: '1px solid black',
                borderRadius: '10px',
              },
            },
          }}

        />
        <Home />
      </Router>
    </div>
  );
}

export default App;
