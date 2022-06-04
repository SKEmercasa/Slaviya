import './App.css';
import TopWrapperContainer from './components/TopWrapper/TopWrapperContainer';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Content from './components/Content/Content';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <TopWrapperContainer />
        <div className='wrapperMain'>
          <Navbar nameNavbar={props.state.mainPage.nameNavbar} />
          <Banner />
          <Content cardData={props.state.mainPage.cardData} />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
