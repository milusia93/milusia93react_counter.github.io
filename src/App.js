import './App.css';
import Heading from './components/Heading';
import Counter from './Counter';


const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <Heading text='React counter' classValue='white'/>
      </header>
      <Counter counterInitValue={15} />
      <Counter counterInitValue={17} />
    </div>
  );
};

export default App;
