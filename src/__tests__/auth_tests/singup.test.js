import { render } from "@testing-library/react";
import SignInForm from "../../components/authentication/signInForm";

test("renders SignInForm component", () => {
  const { getByText } = render(<SignInForm />);

  // Assert that a text element within the component is rendered
  const signInText = getByText(/Sign In to Advert/i);
  expect(signInText).toBeInTheDocument();

  // You can add more assertions for other elements within the component if needed
});
