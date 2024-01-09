import './App.css';
import { Hello } from './components/Hello';

function App() {
  return (
    <div className="App">
      <Hello name={"öznur"} desc={"desc"} label={"label"} onSmtHappen={(name) => {console.log(name)}}></Hello>
    </div>
  );
}

export default App;
