import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import Body from "../Body";
import { act } from "react-dom/test-utils";
import { BrowserRouter } from "react-router-dom";

describe("Top rated res button test", () => {
  beforeAll(() => {
    console.log("before all called");
  });
  beforeEach(() => {
    console.log("before each called");
  });
  afterAll(() => {
    console.log("after all called");
  });
  afterEach(() => {
    console.log("after each called");
  });
  test("should return top rated res", () => {
    render(
      <BrowserRouter>
        <Body />
      </BrowserRouter>
    );

    const btn = screen.getByRole("button", { name: "Top Rated Restaurants" });
    fireEvent.click(btn);
    // assert screen loads 3 cards
    const cards = screen.getAllByTestId("restaurantcard");
    expect(cards.length).toBe(10);
  });
});
