import './App.css';
import { Brand, Features, Navbar, Cta } from "./components";
import { Footer, Possibility, Header, Blog, Whatgpt3 } from "./container";

function App() {
  return (

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
