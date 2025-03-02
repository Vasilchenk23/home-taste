import './App.css';
import Table from './components/Table';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <img src="./img/logo.jpg" alt="logo" className="full-width-image"/>
    <h1 className="menu-title">Меню</h1>
    <Table/>
    <Footer/>
    </>
  );
}

export default App;
