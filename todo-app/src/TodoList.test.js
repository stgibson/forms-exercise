import React from "react";
import TodoList from "./TodoList";
import { render, fireEvent, queryByDisplayValue } from "@testing-library/react";

it("renders without crashing", () => {
  render(<TodoList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<TodoList />);
  expect(asFragment()).toMatchSnapshot();
});

it("loads without showing edit form", () => {
  const { queryByText } = render(<TodoList />);

  // first, verify edit form not on document
  expect(queryByText("Edit Todo")).not.toBeInTheDocument();
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

it("shows edit form when edit button clicked", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const input = getByLabelText("Task:");
  const submitButton = queryByText("Add Todo");

  // first add a todo
  fireEvent.change(input, { target: { name: "task", value: "Test Task" } });
  fireEvent.click(submitButton);

  const editButton = queryByText("edit");

  fireEvent.click(editButton);

  expect(queryByText("Edit Todo")).toBeInTheDocument();
});

it("updates edit form when user types in edit task field", () => {
  const { getByLabelText, queryByText, queryByDisplayValue } = render(<TodoList />);

  const addInput = getByLabelText("Task:");
  const addSubmitButton = queryByText("Add Todo");

  // first add a todo
  fireEvent.change(addInput, { target: { name: "task", value: "Test Task" } });
  fireEvent.click(addSubmitButton);

  const editButton = queryByText("edit");

  fireEvent.click(editButton);

  const editInput = getByLabelText("Edit Task:");

  fireEvent.change(editInput, { target: { name: "task", value: "New Test Task" } });

  expect(queryByDisplayValue("New Test Task")).toBeInTheDocument();
});

it("can edit a todo", () => {
  const { getByLabelText, queryByText } = render(<TodoList />);

  const addInput = getByLabelText("Task:");
  const addSubmitButton = queryByText("Add Todo");

  // first add a todo
  fireEvent.change(addInput, { target: { name: "task", value: "Test Task" } });
  fireEvent.click(addSubmitButton);

  const editButton = queryByText("edit");

  fireEvent.click(editButton);

  // now edit the todo, and verify edit
  const editInput = getByLabelText("Edit Task:");
  const editSubmitButton = queryByText("Edit Todo");

  fireEvent.change(editInput, { target: { name: "task", value: "New Test Task" } });
  fireEvent.click(editSubmitButton);

  expect(queryByText("New Test Task")).toBeInTheDocument();
  // also verify form is now hidden
  expect(editInput).not.toBeInTheDocument();
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