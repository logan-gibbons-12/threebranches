import './App.css';
import Collumns from './components/Collumns';
import Comparosin from './components/Comparosin';
import Header from './components/Header';
import Theses from './components/Theses';
import Powers from './components/Powers';

function App() {
  return (
    <div className="App">
      <Header />
      <Theses />
      <Collumns />
      <Comparosin />
      <Powers />
    </div>
  );
}

export default App;
