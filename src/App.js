import './App.css';
import Header from './components/Header/Header';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Banner />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
