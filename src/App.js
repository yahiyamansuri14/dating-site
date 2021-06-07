import './App.css';
import LandingPage from './Components/LandingPage/LandingPage';
import {BrowserRouter as Router, Route} from 'react-router-dom'
import PhoneOtp from './Components/LandingPage/PhoneOtp'
import CountryCode from './Components/LandingPage/CountryCode'
import { useHistory } from 'react-router-dom'
import Introduction from './Components/AboutSection/Introduction';
import ImageUpload from './Components/AboutSection/ImageUpload';
import Height from './Components/AboutSection/Height';
function App() {
  let history = useHistory()
  return (
    <Router>
      
      <Route path="/" exact><LandingPage></LandingPage></Route>
      <Route path="/otp" component={PhoneOtp}></Route>
      <Route path="/code" component={CountryCode}></Route>
      <Route path="/intro" component={Introduction}></Route>
      <Route path="/intro-image" component={ImageUpload}></Route>
      <Route path="/intro-height" component={Height}></Route>
    </Router>
    
  );
}

export default App;
