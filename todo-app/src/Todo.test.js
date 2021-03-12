import React from "react";
import Todo from "./Todo";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<Todo task="Test Task" />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<Todo task="Test Task" />);
  expect(asFragment()).toMatchSnapshot();
});