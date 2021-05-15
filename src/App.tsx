import './App.scss';
import Calculator from './components/calculator/Calculator';
import Header from './components/header/Header';
import Screen from './components/screen/Screen';

const App = (): JSX.Element => {
  return (
    <>
      <Header />
      <Screen />
      <Calculator />
    </>
  );
};

export default App;
