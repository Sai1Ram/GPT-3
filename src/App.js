import './App.css';
// import Nav from './components/Nav';
// import {BrowserRouter, Route, Routes} from 'react-router-dom';
// import Footer from './components/Footer';
// import NavBar from './components/Nav';
// import Product from './components/Product';
// import Sign from './components/Sign-Up';
import { Brand, Features, Navbar, Cta } from "./components";
import { Footer, Possibility, Header, Blog, Whatgpt3 } from "./container";

function App() {
  return (
    // <BrowserRouter>
    // <div className="App">
    //   <NavBar/>
    //   <Routes>
    //     <Route path='/' element={<h1>HOME</h1>}/>
    //     <Route path='/product' element={ <Product/>}/>
    //     <Route path='/add' element={<h1>add</h1>}/>
    //     <Route path='/update' element={<h1>update</h1>}/>
    //     <Route path='/logout' element={<h1>logout</h1>}/>
    //     <Route path='/profile' element={<h1>profile</h1>}/>
    //     <Route path='/signup' element={<Sign/>}/>
    //   </Routes>
    //   <Footer/>
    // </div>
    // </BrowserRouter>
    <div className="app gradient_bg" id="page">
        <Navbar />
        <Header />
      <Brand />
      <Whatgpt3 />
      <Features />
      <Possibility />
      <Cta />
      <Blog />
      <Footer />
    </div>
  );
}

export default App;
