import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import Header from "../Header";
import { Provider } from "react-redux";
import appStore from "../../utils/AppStore";
import { BrowserRouter } from "react-router-dom";
import "@testing-library/jest-dom";
describe("Header component", () => {
  test("Should render header with login button", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    expect(loginButton).toBeInTheDocument();
  });
  test("Should change login to logout on click", () => {
    render(
      <BrowserRouter>
        <Provider store={appStore}>
          <Header />
        </Provider>
      </BrowserRouter>
    );
    const loginButton = screen.getByText("Login");
    fireEvent.click(loginButton);
    const logoutButton = screen.getByRole("button", { name: "Logout" });
    expect(logoutButton).toBeInTheDocument();
  });
});
