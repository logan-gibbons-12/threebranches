import './App.css';
import Collumns from './components/Collumns';
import Header from './components/Header';
import Theses from './components/Theses';

function App() {
  return (
    <div className="App">
      <Header />
      <Theses />
      <Collumns />
    </div>
  );
}

export default App;
