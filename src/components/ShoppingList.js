import React, { useState } from "react";
import ItemForm from "./ItemForm";
import Filter from "./Filter";
import Item from "./Item";

function ShoppingList({ items, onItemFormSubmit }) {

  const [selectedCategory, setSelectedCategory] = useState("All");

  function handleCategoryChange(event) {
    setSelectedCategory(event.target.value);
  }

  const [searchItem, setSearchItem] = useState("All");

  function handleSearchChange(event) {
    setSearchItem(event.target.value); 
  }

  const itemsToDisplay = items.filter((item) => {
    if (searchItem === "All" && selectedCategory === "All") {return true}
    else if (searchItem !== "All" && selectedCategory === "All") {return item.name.includes(searchItem)}
    else if (searchItem === "All" && selectedCategory !== "All") {return item.category === selectedCategory}
    else {return item.category === selectedCategory && item.name.includes(searchItem)}
  });

 

  return (
    <div className="ShoppingList">
      <ItemForm onItemFormSubmit={onItemFormSubmit} />
      <Filter search={searchItem} onCategoryChange={handleCategoryChange} onSearchChange={handleSearchChange} />
      <ul className="Items">
        {itemsToDisplay.map((item) => (
          <Item key={item.id} name={item.name} category={item.category} />
        ))}
      </ul>
    </div>
  );
}

export default ShoppingList;
