import './App.css';
import TopWrapperContainer from './components/TopWrapper/TopWrapperContainer';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ContentMain from './components/ContentMain/ContentMain';
import ContentCardContainer from './components/ContentCard/ContentCardContainer';


function App(props) {
  return (
    <BrowserRouter>
      <div className="App">
        <TopWrapperContainer />
        <div className='wrapperMain'>
          <Navbar nameNavbar={props.state.mainPage.nameNavbar} />
          <Routes>
            <Route exact path="/" element={<ContentMain />} />
            <Route path='/card/:cardId' element={<ContentCardContainer />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </BrowserRouter>
  );
}

export default App;
