import { useEffect, useState } from "react";
import menuMockData from "./menuMockData";
const useRestaurantMenu = (resId) => {
  const [resInfo, setResInfo] = useState(null);
  //fetch Data using API
  useEffect(() => {
    fetchData();
  }, []);

  const fetchData = async () => {
    // const data = await fetch("MENU_API" + resId);
    // const json = await data.json();
    setResInfo(menuMockData.data);
  };
  return resInfo;
};
export default useRestaurantMenu;
