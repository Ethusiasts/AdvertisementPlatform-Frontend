import { render, screen, fireEvent } from "@testing-library/react";
import { BrowserRouter as Router } from "react-router-dom";

import SignInForm from "../../components/authentication/signInForm";

test("renders sign in form", () => {
  render(
    <Router>
      <SignInForm />
    </Router>
  );
  const emailInput = screen.getByPlaceholderText("Enter your email");
  const passwordInput = screen.getByPlaceholderText(
    "6+ Characters, 1 Capital letter"
  );
  const signInButton = screen.getByRole("button", { name: "Sign In" });

  expect(emailInput).toBeInTheDocument();
  expect(passwordInput).toBeInTheDocument();
  expect(signInButton).toBeInTheDocument();
});

test("submits the form with user credentials", () => {
  render(<SignInForm />);

  const emailInput = screen.getByPlaceholderText("Enter your email");
  const passwordInput = screen.getByPlaceholderText(
    "6+ Characters, 1 Capital letter"
  );
  const signInButton = screen.getByRole("button", { name: "Sign In" });

  fireEvent.change(emailInput, { target: { value: "test@example.com" } });
  fireEvent.change(passwordInput, { target: { value: "Password123" } });

  fireEvent.click(signInButton);

  // Add your assertions for the expected behavior after form submission
});
