import './App.css';
import Header from './components/header/Header.jsx';
import Home from './components/home/Home.jsx';
import Journal from './components/journal/Journal.jsx';
import Main from './components/main/Main.jsx';
import Rest from './components/rest/Rest.jsx';
import Process from './components/process/Process.jsx';
import Collection from './components/collection/Collection.jsx';
import Footer from './components/footer/Footer.jsx';

function App() {
  return (
    <div className="App">
      <Header />
      <Main />
      <Home />
      <Collection />
      <Rest />
      <Journal />
      <Process />
      <Footer />
    </div>
  );
}

export default App;
