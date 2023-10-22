import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react-dom/test-utils";
// import MOCK_DATA from "./mocks/ResList.json";
import { BrowserRouter } from "react-router-dom";
// fetch is browser's power browser like env will not be able to run this
// global.fetch = jest.fn(() => {
//   return Promise.resolve({
//     json: () => {
//       return Promise.resolve(MOCK_DATA);
//     },
//   });
// });
describe("Search flow e2e test", () => {
  test("Should show search result", async () => {
    await act(async () =>
      render(
        <BrowserRouter>
          <Body />
        </BrowserRouter>
      )
    );
    const searchBtn = screen.getByRole("button", { name: "Search" });

    const searchInput = screen.getByTestId("search-input");
    fireEvent.change(searchInput, { target: { value: "Hotel" } });
    fireEvent.click(searchBtn);
    // assert screen loads 3 cards
    const cards = screen.getAllByTestId("restaurantcard");
    expect(cards.length).toBe(3);
  });
});
