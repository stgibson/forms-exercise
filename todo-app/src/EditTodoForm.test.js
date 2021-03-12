import React from "react";
import EditTodoForm from "./EditTodoForm";
import { render } from "@testing-library/react";

it("renders without crashing", () => {
  render(<EditTodoForm todo={ { task: "Test Task" } } />);
});

it("matches snapshot", () => {
  const { asFragment } =
    render(<EditTodoForm todo={ { task: "Test Task" } } />);
  expect(asFragment()).toMatchSnapshot();
});