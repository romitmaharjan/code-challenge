import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Game from './Game'
import Notifications from 'react-notify-toast'
function App() {
  return (
    <div className="App">
      <Notifications />
      <Game />
    </div>
  );
}

export default App;
