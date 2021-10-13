import React from "react";
import Home from "../Home";
import { render, fireEvent } from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";

describe("tests for home page", () => {
  let getByTestId;
  beforeEach(() => {
    const component = render(<Home />);
    getByTestId = component.getByTestId;
  });
  it("should render correct header text", () => {
    const header = getByTestId("header");

    expect(header.textContent).toBe("FindMeFoodRecipes");
  });

  it("should render correct paragraph description text", () => {
    const description = getByTestId("page-description");

    expect(description.textContent).toBe(
      "Hello, welcome to FindMeFoodRecipes. The purpose of this website is to find recipes based on the ingredients you input"
    );
  });
});
