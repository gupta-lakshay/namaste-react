import { useParams } from "react-router-dom";
import { useState } from "react";
import menuMockData from "../utils/menuMockData";
import useRestaurantMenu from "../utils/useRestaurantMenu";
import Shimmer from "./Shimmer";
import RestaurantCategory from "./RestaurantCategory";
const RestaurantMenu = () => {
  // api call
  const { resId } = useParams();
  //const resInfo = useRestaurantMenu(resId);
  const resInfo = menuMockData.data;
  console.log(resInfo);
  if (resInfo === null) return <Shimmer />;
  const [showIndex, setShowIndex] = useState(null);
  const { name, cuisines, costForTwoMessage } =
    resInfo?.cards[0]?.card?.card?.info;

  const { itemCards } =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards[1]?.card?.card;

  const categories =
    resInfo?.cards[2]?.groupedCard?.cardGroupMap?.REGULAR?.cards.filter(
      (c) =>
        c.card?.card?.["@type"] ===
        "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory"
    );

  return (
    <div className="text-center">
      <h1 className="font-bold my-10 text-2xl">{name}</h1>
      <p className="font-bold text-lg">
        {cuisines.join(", ")} - {costForTwoMessage}
      </p>
      {/** categories */}
      {categories.map((category, index) => (
        // controlled component
        <RestaurantCategory
          key={category?.card?.card?.title}
          data={category?.card?.card}
          showItems={index === showIndex ? true : false}
          setShowIndex={() => setShowIndex(index)}
        />
      ))}
    </div>
  );
  // return (
  //   <div className="menu">
  //     <h1> Name of restaurant</h1>
  //     <h2> Menu</h2>
  //     <ul>
  //       <li>Biryani</li>
  //       <li>Burger</li>
  //       <li>Pizza</li>
  //     </ul>
  //   </div>
  // );
};
export default RestaurantMenu;
