import Supervisor from "./icon-supervisor.svg";
import TeamBuilder from "./icon-team-builder.svg";
import Karma from "./icon-karma.svg";
import Calculator from "./icon-calculator.svg";
import "./App.css";

export default function App() {
  return (
  <div className="container">
    <header className="header">
      <h1>Reliable, efficient delivery<span>Powered by Technology</span></h1>
      <p>Our Artificial Intelligence powered tools use millions of project data points to ensure that your project is successful</p>
    </header>
    <main className="cards">
      <div className="card card-supervisor">
        <h2>Supervisor</h2>
        <p>Monitors activity to identify project roadblocks</p>
        <img src={Supervisor} alt="Supervisor icon"/>
      </div>
      <div className="card card-team">
        <h2>Team Builder</h2>
        <p>Scans our talent network to create the optimal team for your project</p>
        <img src={TeamBuilder} alt="Team Builder icon"/>
      </div>
      <div className="card card-calculator">
        <h2>Calculator</h2>
        <p>Uses data from past projects to provide better delivery estimates</p>
        <img src={Calculator} alt="Calculator icon"/>
      </div>
      <div className="card card-karma">
        <h2>Karma</h2>
        <p>Regularly evaluates our talent to ensure quality</p>
        <img src={Karma} alt="Karma icon"/>
      </div>
    </main>
  </div>
  );
}
