import React from "react";
import BoxList from "./BoxList";
import { render, fireEvent } from "@testing-library/react";

it("renders without crashing", () => {
  render(<BoxList />);
});

it("matches snapshot", () => {
  const { asFragment } = render(<BoxList />);
  expect(asFragment()).toMatchSnapshot();
});

it("updates form when user types in width field", () => {
  const { getByLabelText, queryByDisplayValue } = render(<BoxList />);
  const input = getByLabelText("Width:");

  fireEvent.change(input, { target: { name: "width", value: "200" } });

  expect(queryByDisplayValue("200")).toBeInTheDocument();
});

it("updates form when user types in height field", () => {
  const { getByLabelText, queryByDisplayValue } = render(<BoxList />);
  const input = getByLabelText("Height:");

  fireEvent.change(input, { target: { name: "height", value: "200" } });

  expect(queryByDisplayValue("200")).toBeInTheDocument();
});

it("updates form when user types in height field", () => {
  const { getByLabelText, queryByDisplayValue } = render(<BoxList />);
  const input = getByLabelText("Color:");

  fireEvent.change(input, { target: { name: "color", value: "green" } });

  expect(queryByDisplayValue("green")).toBeInTheDocument();
});

it("can add a new box", () => {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const submitButton = queryByText("Add Box");

  fireEvent.change(widthInput, { target: { name: "width", value: "200" } });
  fireEvent.change(heightInput, { target: { name: "height", value: "250" } });
  fireEvent.change(colorInput, { target: { name: "color", value: "green" } });
  fireEvent.click(submitButton);

  // verify box has been added
  expect(queryByTestId("200-250-green")).toBeInTheDocument();
});

it("can delete a box", () => {
  const { getByLabelText, queryByText, queryByTestId } = render(<BoxList />);
  const widthInput = getByLabelText("Width:");
  const heightInput = getByLabelText("Height:");
  const colorInput = getByLabelText("Color:");
  const submitButton = queryByText("Add Box");

  fireEvent.change(widthInput, { target: { name: "width", value: "200" } });
  fireEvent.change(heightInput, { target: { name: "height", value: "250" } });
  fireEvent.change(colorInput, { target: { name: "color", value: "green" } });
  fireEvent.click(submitButton);

  // verify delete button added
  expect(queryByText("X")).toBeInTheDocument();

  const deleteButton = queryByText("X");

  fireEvent.click(deleteButton);

  // verify box has been deleted
  expect(queryByTestId("200-250-green")).not.toBeInTheDocument();
});