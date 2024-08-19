import "./App.css";
import { puppyList } from "./data.js";
import { useState } from "react";


function App() {
  const [puppies, setPuppies] = useState(puppyList);
  console.log(puppies);
  const [featPupId, setFeatPupId] = useState(null);
  
  const featuredPup = puppies.find((pup)=> pup.id === featPupId)
  console.log("featured pup: ", featuredPup);

  return (
    <>
    <h1>Puppy Pals!</h1>
      <div className="container">
        {puppies.map((puppy) => {
          return <p className="names" onClick={()=>{setFeatPupId(puppy.id)}} key={puppy.id}>{puppy.name}</p>;
        })}
        {featPupId && (
        <div className="featured">
          <h2>{featuredPup.name}</h2>
          
            <p>{featuredPup.name} is {featuredPup.age} year(s) old!</p>
            <p>You can contact {featuredPup.name} at {featuredPup.email}.</p>
          
        </div>
      )}
      </div>
    </>
  );
}

export default App;
