import data from "./data/data.json";
import "./App.css";
import logo from "./images/LOGIN_MONITOR_LOGO.png"
import game1 from './images/game_1.png';
import game2 from './images/game_2.png';
import game3 from './images/game_3.png';


//to fetch the server/urls - check header status code that checks the header status
//code when it comes back. Between 200 -299 is a success. Above 300 is not there. Path
//changed?? Above 400 is problematic.- user error that server does not support.
//500 means problem with the server

//store this information in a database or local storage

//stage 1 -frontend - storing locally in browser
//write small function fetch function that gets from url a function that check the
//status that checks the header response site - atomic function that takes input and gives back based
//on what's given - previous and current state - compate the change - stable or flip
//flopping parameter input

//stage 2 - backend server/api do polls everything minute and stores information in
//some form - historical data would be accessible

//stage 3 - node functionality / express with end point in mongodb

//start with fetch in axios

//database would be document store - mongo db for the status info -(header info)
//url query list of websites can be stored in mongo db

//use state to store header response or use effect hook to do the traffic light option

function App() {
  // Try to fetch the data via the browser. 👇
  // const foo = await fetch("/data/data.json");
  return (
    <div>
       <div style={{backgroundColor:'#43882E', height: '270px', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
      <img src={logo} alt='Logo' style={{height: '250px', marginRight: '40px', marginTop:'40px' }} />
      {/* <h1 style={{color: 'white'}}>My App</h1> */}
      <div style={{display: 'flex', alignItems: 'center', backgroundColor: "#2FCE38", padding: '10px', marginRight:'7px'}}>
        <img src={game1} alt='game 1' style={{height: '160px', marginRight: '10px'}} />
        <img src={game2} alt='game 2' style={{height: '160px', marginRight: '10px'}} />
        <img src={game3} alt='game 3' style={{height: '160px'}} />
      </div>
      <div style={{width: '180px', height: '180px', backgroundColor: '#2FCE38', marginLeft: '10px'}}></div>
     
    </div>
      <h1>bespoke</h1>
      {/* create js array with objects with key url and key status */}
      <ul>
        {data.map((el) => {
          return <li className={`dot ${el.status}`}>{el.url}</li>;
        })}
        {/* <li className="dot green">https://www.amazon.co.uk/</li>
        <li className="dot orange">https://www.google.co.uk/</li>
        <li className="dot red">https://www.twitter.com/</li> */}
      </ul>
    </div>
  );
}

export default App;
