import React from "react";
import Box from "./Box";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<Box id={ 1 } width={ 200 } height={ 200 } color="green" />);
});

it("matches snapshot", () => {
  const { asFragment } =
    render(<Box id={ 1 } width={ 200 } height={ 200 } color="green" />);
  expect(asFragment()).toMatchSnapshot();
});