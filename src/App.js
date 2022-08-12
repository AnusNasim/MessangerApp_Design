import logo from "./logo.svg";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Navbar from "./components/Navbar";
import PersonName from "./components/chatbox/PersonName";
import Chating from "./components/chatbox/Chating";
import Agent from "./components/Agent";
import Agentnav from "./components/agentpage/Agentnav";
import Agentprofile from "./components/agentpage/Agentprofile";
import Agentinfo from "./components/agentpage/Agentinfo";



function App() {
  return (
  
    <>

            <Agentnav/>
     <div className="agentsomeup">
     <Agentprofile/>
      <Agentinfo/>
     </div> 
 
<div>

<div className="appp">
        <Navbar />
      </div>
      <div className="chatapp">
        <PersonName />

        <Chating />
        <Agent />
      </div> 
</div>

      </>
  );
}

export default App;
