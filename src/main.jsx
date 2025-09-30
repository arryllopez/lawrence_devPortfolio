//starting point of the react website
import ReactDOM from 'react-dom/client';
import App from './App';


ReactDOM.createRoot(document.getElementById('root')).render(<App />); //react is going to hook into a single div on our html file with the id of root and render our app component inside of it
