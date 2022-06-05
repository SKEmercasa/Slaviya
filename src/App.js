import './App.css';
import TopWrapperContainer from './components/TopWrapper/TopWrapperContainer';
import Navbar from './components/Navbar/Navbar';
import Banner from './components/Banner/Banner';
import Footer from './components/Footer/Footer';
import { BrowserRouter } from 'react-router-dom';
import ContentContainer from './components/Content/ContentContainer';

function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <TopWrapperContainer />
        <div className='wrapperMain'>
          <Navbar nameNavbar={props.state.mainPage.nameNavbar} />
          <Banner />
          <ContentContainer />
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
