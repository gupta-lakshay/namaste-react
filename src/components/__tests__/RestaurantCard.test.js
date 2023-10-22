import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import RestaurantCard from "../RestaurantCard";
import MOCK_DATA from "./mocks/ResCardMock.json";
describe("Restaurant card component", () => {
  test("Should render header with props data", () => {
    render(<RestaurantCard resData={MOCK_DATA} />);
    const hotelName = screen.getByText("Hotel Empire");
    expect(hotelName).toBeInTheDocument();
  });
});
