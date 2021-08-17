import React from "react";

function List({ groceries }) {
  return (
    <div>
      <ul className="list-group">
        {/* TODO: Use the `map` method to iterate over each grocery and return a `li` element that contains the item's name and has a unique key attribute */}
        {groceries.map((item) => {
          return (
            // TODO: Your code here
            <li className="list-group-item" key={item.id}>
              {item.name}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default List;
