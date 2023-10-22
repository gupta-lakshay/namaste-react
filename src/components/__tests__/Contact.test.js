// test if contact page loads on click

import { render, screen } from "@testing-library/react";
import Contact from "../Contact";
import "@testing-library/jest-dom";

describe("contact us testcases", () => {
  test("should load contact us component", () => {
    render(<Contact />);
    const heading = screen.getByRole("heading");
    //Assertion
    expect(heading).toBeInTheDocument();
  });
  test("should load input name on contact us component", () => {
    render(<Contact />);
    const input = screen.getByPlaceholderText("Name");
    //Assertion
    expect(input).toBeInTheDocument();
  });
  test("should load 2 input boxes in contact us component", () => {
    render(<Contact />);
    const inputBoxes = screen.getAllByRole("textbox");
    //Assertion
    expect(inputBoxes.length).toBe(2);
  });
});
