import './App.css';
import Collumns from './components/Collumns';
import Transition from './components/Transition';
import Header from './components/Header';
import Theses from './components/Theses';
import Powers from './components/Powers';
import Checksnbalances from './components/Checksnbalances';
// import Comparing from './components/Comparing';

function App() {
  return (
    <div className="App">
      <Header />
      <Theses />
      <Collumns />
      <Transition />
      <Powers />
      <Checksnbalances />
      {/* <Comparing /> */}
    </div>
  );
}

export default App;
