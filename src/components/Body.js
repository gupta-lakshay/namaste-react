import RestaurantCard, { withPromotedLabel } from "./RestaurantCard";
import resList from "../utils/mockData";
import { useEffect, useState, useContext } from "react";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import UserContext from "../utils/UserContext";
const Body = () => {
  //state variable - super powerful variable
  const [listOfRestaurants, setListOfRestaurants] = useState([]);
  const [searchText, setSearchText] = useState("");
  const { loggedInUser, setUserInfo } = useContext(UserContext);
  useEffect(() => {
    console.log("useEffect called");
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch();
    // const json = await data.json();
    // console.log(json);
    setListOfRestaurants(resList);
    //setListOfRestaurants(json.data?.cards[2]?.data?.data?.cards);
  };

  const RestaurantCardPromoted = withPromotedLabel(RestaurantCard);
  const onlineStatus = useOnlineStatus();
  if (onlineStatus === false) {
    return <h1> You are offline. Please check your internet. </h1>;
  }
  // Conditional Rendering

  return listOfRestaurants.length === 0 ? (
    <Shimmer />
  ) : (
    <div className="body">
      <div className="filter flex">
        <div className="search m-4 p-4">
          <input
            type="text"
            data-testid="search-input"
            className="border border-solid border-black"
            value={searchText}
            onChange={(e) => {
              setSearchText(e.target.value);
            }}
          />
          <button
            className="px-4 py-2 bg-green-100 m-4 rounded-lg"
            onClick={() => {
              console.log("search button clicked");
              console.log(searchText);
              // filter based in searchText and update list
              const filRes = listOfRestaurants.filter((res) =>
                res.data.name.includes(searchText)
              );
              setListOfRestaurants(filRes);
            }}
          >
            Search
          </button>
        </div>
        <div className="search m-4 p-4 flex items-center">
          <button
            className="px-4 py-2 bg-gray-100 rounded-lg"
            onClick={() => {
              const filteredList = listOfRestaurants.filter(
                (res) => res.data.avgRating > 4
              );
              console.log(filteredList);
              setListOfRestaurants(filteredList);
            }}
          >
            Top Rated Restaurants
          </button>
        </div>
        <div className=" m-4 p-4 flex items-center">
          <label>UserName</label>
          <input
            className="ml-4 p-2 border border-black"
            value={loggedInUser}
            onChange={(e) => setUserInfo(e.target.value)}
          ></input>
        </div>
      </div>
      <div className="flex flex-wrap">
        {listOfRestaurants.map((restaurant) => (
          <Link
            key={restaurant.data.id}
            to={"/restaurant/" + restaurant.data.id}
          >
            {
              /** if restaurant is promoted then add promoted label to it */
              restaurant.data.promoted ? (
                <RestaurantCardPromoted resData={restaurant} />
              ) : (
                <RestaurantCard resData={restaurant} />
              )
            }
          </Link>
        ))}
      </div>
    </div>
  );
};

//   return listOfRestaurants.length == 0 ? (
//     <Shimmer />
//   ) : (
//     <div className="body">
//       {/* <div className = "search"> Search </div> */}
//       <div className="filter flex">
//         <div className="search m-4 p-4 ">
//           <input
//             type="text"
//             className="border border-solid border-black"
//             placeholder="Search"
//             value={searchText}
//             onChange={(e) => {
//               setSearchText(e.target.value);
//             }}
//           />
//           <div className="search m-4 p-4 flex items-center">
//             <button
//               className="searchBtn px-4 py-2 bg-green-100 "
//               onClick={() => {
//                 console.log("search button clicked");
//                 console.log(searchText);
//                 // filter based in searchText and update list
//                 const filRes = listOfRestaurants.filter((res) =>
//                   res.data.name.includes(searchText)
//                 );
//                 setListOfRestaurants(filRes);
//               }}
//             >
//               Search
//             </button>
//           </div>
//         </div>
//         <div className="filter-btn p-4 m-4 bg-gray-100">
//           <button
//             onClick={() => {
//               const filteredList = listOfRestaurants.filter(
//                 (res) => res.data.avgRating > 4
//               );
//               console.log(filteredList);
//               setListOfRestaurants(filteredList);
//             }}
//           >
//             Top Rated restaurant
//           </button>
//         </div>
//       </div>
//       <div className="resContainer">
//         {listOfRestaurants.map((restaurant) => (
//           <Link
//             key={restaurant.data.id}
//             to={"/restaurant/" + restaurant.data.id}
//           >
//             <RestaurantCard resData={restaurant} />
//           </Link>
//         ))}
//       </div>
//     </div>
//   );
// };

export default Body;
