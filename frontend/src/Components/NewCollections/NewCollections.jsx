import React, { useEffect, useState } from "react";
import "./NewCollections.css";
// import new_collections from '../Assets/new_collections';
import Item from "../Item/Item";

const API_BASE_URL = process.env.REACT_APP_API_URL;

const NewCollections = () => {
  //remove new collection import
  // now fetching data from db using usestate

  const [new_collections, setNew_collections] = useState([]);

  useEffect(() => {
    // fetch('http://localhost:4001/newcollections')
    fetch(`${API_BASE_URL}/newcollections`)
      .then((response) => response.json())
      .then((data) => setNew_collections(data));
  }, []);

  return (
    <div className="new-collections">
      <h1>NEW COLLECTIONS</h1>
      <hr />
      {/* div.collections */}
      <div className="collections">
        {new_collections.map((item, i) => {
          return (
            <Item
              key={i}
              id={item.id}
              name={item.name}
              image={item.image}
              new_price={item.new_price}
              old_price={item.old_price}
            />
          );
        })}
      </div>
    </div>
  );
};

export default NewCollections;
