import React from "react";
import TodoList from "./TodoList";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("updates form when user types in task field", () => {
  const { getByLabelText, queryByDisplayValue } = render(<TodoList />);

  const input = getByLabelText("Task:");

  fireEvent.change(input, { target: { name: "task", value: "Test Task" } });

  expect(queryByDisplayValue("Test Task")).toBeInTheDocument();
});

it("can add a new todo", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const input = getByLabelText("Task:");
  const submitButton = queryByText("Add Todo");

  fireEvent.change(input, { target: { name: "task", value: "Test Task" } });
  fireEvent.click(submitButton);

  expect(queryByText("Test Task")).toBeInTheDocument();
});

it("can delete a todo", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const input = getByLabelText("Task:");
  const submitButton = queryByText("Add Todo");

  // first add a todo
  fireEvent.change(input, { target: { name: "task", value: "Test Task" } });
  fireEvent.click(submitButton);

  // since only 1 todo, find button with X and click to delele
  const deleteButton = queryByText("X");
  fireEvent.click(deleteButton);

  expect(queryByText("Test Task")).not.toBeInTheDocument();
});