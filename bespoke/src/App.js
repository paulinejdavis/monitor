import React, { useEffect, useState } from 'react';
import axios from 'axios';
import Papa from 'papaparse'; 
import "./App.css";
// import React from 'react';
// import data from "./data/data.json";
//import data from "./data/webAddresses.csv";
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

function Header() {
  // Try to fetch the data via the browser. 👇
  // const foo = await fetch("/data/data.json");
  return (
       <div style={{backgroundColor:'#43882E', height: '270px', display: 'flex', alignItems: 'center', paddingLeft: '20px'}}>
      <img src={logo} alt='Logo' style={{height: '125px', marginRight: '40px', marginTop:'25px' }} />
      {/* <h1 style={{color: 'white'}}>My App</h1> */}
      <div style={{display: 'flex', alignItems: 'center', backgroundColor: "#2FCE38", padding: '10px', marginRight:'7px'}}>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
          <img src={game1} alt='Game 1' style={{ height: '80px', marginRight: '10px' }} />
          <p style = {{margin: '1px 0', fontSize: '25px', color: '#43882E'}}>Down</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={game2} alt='game 2' style={{height: '80px', marginRight: '10px'}} />
        <p style = {{margin: '1px 0', fontSize: '25px', color: '#43882E'}}>Up</p>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <img src={game3} alt='game 3' style={{height: '80px'}} />
        <p style = {{margin: '1px 0', fontSize: '25px', color: '#43882E'}}>Unstable</p>
        </div>
      </div>
      <div style={{width: '130px', height: '130px', backgroundColor: '#2FCE38', marginLeft: '10px'}}></div>
      <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left', marginLeft: '10px' }}>
        <p style={{ fontSize: '24px', color: '#2FCE38', marginBottom: '2px', marginLeft:'0' }}>Monitor</p>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'left' }}>
          <div style={{ width: '218px', height: '10px', backgroundColor: '#2FCE38', marginRight: '5px' }}></div>
          <p style={{ fontSize: '24px', color: '#2FCE38',alignItems: 'left', margin: '0' }}>458/1000</p>
        </div>
        
        </div>
        </div>
  );

}

function App() {
  const [webAddresses, setWebAddresses] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get('/data/webAddresses.csv');
        console.log('Response:', response.data); // Log the response data

        Papa.parse(response.data, {
          header: true,
          complete: function (results) {
            console.log('Parsed Data:', results.data); // Log the parsed data
            setWebAddresses(results.data);
          }
        });
      } catch (error) {
        console.log('Error:', error);
      }
    };

    console.log('Fetching data...');
    fetchData();
  }, []);

  const checkStatus = (url) => {
    // Implement your logic to check the status of the URL
    // and return 'Up', 'Down', or 'Unstable' accordingly
    return 'Up'; // Placeholder logic, replace with your implementation
  };
  return (
  <div>
      <Header />
      <div className="body-container">
      
       <h1 style={{fontSize: '25px', color: '#2FCE38'}} >  &nbsp; Website  &nbsp;&nbsp; Today</h1>
      {/* create js array with objects with key url and key status */}
      {/* <ul>
        {data.map((el) => {
          return <li className={`dot ${el.status}`}>{el.url}</li>;
        })} */}
        {/* <li className="dot green">https://www.amazon.co.uk/</li>
        <li className="dot orange">https://www.google.co.uk/</li>
        <li className="dot red">https://www.twitter.com/</li> */}
      {/* </ul> */}
      <ul>
  {webAddresses.map((address, index) => {
    const { website_address, country, referrer } = address; // Destructure the address object
    console.log('Address object:', address); // Optional: Add this line for debugging
    return (
      <li className={`dot ${checkStatus(website_address)}`} key={index} style={{ color: '#2FCE38',fontSize: '14px', }}>
        {website_address.replace(/(^\w+:|^)\/\//, '')} {/* Remove http:// or https:// from the URL */}
      </li>
    );
  })}
</ul>

      </div>
      </div>
      
  );
}

export default App;
