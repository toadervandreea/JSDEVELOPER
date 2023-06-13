import logo from './logo.svg';
import './App.css';
import Salut from './components/Salut';
import Masina from './components/Masina';
import Form from './components/Form';
import MyForm from './components/MyForm';
function App() {
  const carInfo={name:"ford", model:"mustang"}

  const obj = { name: 'Alice', email: 'demo@demo.com', password: '123456', car: 'BMW', message: 'Salut' };
  return (
    <>
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Salut nume="dan" curs="react"/>
        <Salut nume="ion"/>
        <Masina car={carInfo}/>
      </header>
      <Form/>
      <MyForm {...obj}/>
    </div>
    <h1>formular de inregistrare</h1>
    </>
  );
}

export default App;
