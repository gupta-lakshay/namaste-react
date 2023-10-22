import { addItem } from "../utils/CartSlice";
import { CDN_URL } from "../utils/constants";
import { useDispatch } from "react-redux";

const ItemList = ({ items }) => {
  // console.log(items);
  const dispatch = useDispatch();
  const handleClick = (item) => {
    // dispatch action
    dispatch(addItem(item));
  };
  return (
    <div>
      {items.map((item) => (
        <div
          key={item?.card?.info?.id}
          className="p-2 m-2 border-gray-200 border-b-2 text-left flex justify-between"
        >
          <div className="w-9/12">
            <div className="py-2">
              <span className="font-medium ">{item?.card?.info?.name} </span>
              <span>
                ₹{" "}
                {item?.card?.info?.price
                  ? item?.card?.info?.price / 100
                  : item?.card?.info?.defaultPrice / 100}
              </span>
            </div>
            <div>
              <p className="font-light text-xs">
                {item?.card?.info?.description}
              </p>
            </div>
          </div>
          {item?.card?.info?.imageId ? (
            <div className="w-3/12">
              <div className="absolute">
                <button
                  onClick={() => handleClick(item)}
                  className="bg-black p-2 rounded-md text-white shadow-md mx-18"
                >
                  Add+
                </button>
              </div>
              <img
                src={CDN_URL + item?.card?.info?.imageId}
                className="rounded-md"
              ></img>
            </div>
          ) : (
            <></>
          )}
        </div>
      ))}
    </div>
  );
};
export default ItemList;
