import './App.module.css';
import Userprofile from './Userprofile';
import TopNav from './topNav';
import SideNav from './SideNav';
import Result from './Result'
import SimpleAccordion from './Accordion';

function App() {
 return (
  <div className="App">
   <div className="top">
    <Userprofile />
    <TopNav />
   </div>
   <div className="bottom">
    <SideNav />
    <div className="rightdash">
     <Result />
     <div className="accordion">
      <SimpleAccordion />
      <SimpleAccordion />
      <SimpleAccordion />
      <SimpleAccordion />
     </div>
    </div>
   </div>
  </div>
 );
}

export default App;
