import data from "./data/data.json";
import "./App.css";

function App() {
  // Try to fetch the data via the browser. 👇
  // const foo = await fetch("/data/data.json");
  return (
    <div>
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
