import React from "react";
import NewTodoForm from "./NewTodoForm";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<NewTodoForm />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<NewTodoForm />);
  expect(asFragment()).toMatchSnapshot();
});