import Header from "./component/header";
import { BrowserRouter as Router } from 'react-router-dom';
import HeroSection from "./component/heroSction";
import BodySection from "./component/body";
import Footer from "./component/footer";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <HeroSection/>
        <div className="mt-20">
            <BodySection/>
        </div>
        <Footer/>
      </div>
    </Router>
  );
}

export default App;
