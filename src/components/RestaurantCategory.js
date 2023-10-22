import { useState } from "react";
import ItemList from "./ItemList";

const RestaurantCategory = ({ data, showItems, setShowIndex }) => {
  // console.log(data);
  // const [showItems, setShowItems] = useState(false);
  const handleClick = () => {
    //setShowItems(!showItems);
    setShowIndex();
  };
  return (
    <div>
      <div className="w-6/12 m-auto bg-gray-50 shadow-md p-2 my-2">
        <div
          className=" flex justify-between cursor-pointer"
          onClick={handleClick}
        >
          <span className="font-extrabold">
            {data.title} ({data.itemCards.length})
          </span>
          <span>🔽</span>
        </div>
        {showItems && <ItemList items={data.itemCards}></ItemList>}
      </div>
    </div>
  );
};

export default RestaurantCategory;
