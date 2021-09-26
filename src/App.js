import './App.css';
import Footer from './components/Footer/Footer';
import Header from './components/Header/Header';
import Programmers from './components/Programmers/Programmers';

function App() {
  return (
    <div className="App bg-dark">
      <Header />
      <Programmers />
      <Footer />
    </div>
  );
}

export default App;
