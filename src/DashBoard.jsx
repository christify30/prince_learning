import './App.css';
import Header from './components/Header'
import Card from './components/Card'
import SideBard from './components/SideBar'
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from 'chart.js';
import { Pie } from 'react-chartjs-2';import {pieData} from './utils'
import { Link } from 'react-router-dom';
ChartJS.register(ArcElement, Tooltip, Legend);

function App() {
  return (
    <div className= {"App"} >
      <Header/>
      <SideBard/>
      <section style={{marginTop: 100, marginLeft: '22vw'}}>
       <Card text = "lets see what happens"/>
       <div style={{width: '30%', }}>
        <Pie  data={pieData} />;
       </div>
       <Link to='/'>Go to Home page</Link>
      </section>
    </div>
  );
}

export default App;
