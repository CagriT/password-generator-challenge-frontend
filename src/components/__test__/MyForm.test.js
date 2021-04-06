import { render, screen } from "@testing-library/react";
import { expect, test } from "@jest/globals";
import userEvent from "@testing-library/user-event";
import MyForm from "../MyForm";

beforeEach(() => {
   render(<MyForm />);
});

test("value of input is initially empty", () => {
   const minLength = screen.getByLabelText(/min length/i);
   expect(minLength).toHaveValue(0);
});
test("value of input is initially empty", () => {
   const number = screen.getByLabelText(/number/i);
   expect(number).toHaveValue(0);
});
test("value of input is initially empty", () => {
   const symbols = screen.getByLabelText(/symbols/i);
   expect(symbols).toHaveValue(0);
});
test("value of input is initially empty", () => {
   const total = screen.getByLabelText(/total/i);
   expect(total).toHaveValue(0);
});

test("input value change", () => {
   const minLength = screen.getByLabelText(/min length/i);
   expect(minLength).toHaveValue(0);
   const newvalue = Math.floor(Math.random() * 10);

   userEvent.type(minLength, `${newvalue}`);
   expect(minLength).toHaveValue(newvalue);
});
