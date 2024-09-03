import { fireEvent, render, screen } from "@testing-library/react";
import Footer from "./Footer";

describe("Footer", () => {
  test("renders copyright text", () => {
    render(<Footer />);
    const copyrightText = screen.getByText(
      /© Copyright 2024. All rights reserved./i
    );
    expect(copyrightText).toBeInTheDocument();
  });

  test("renders email input and join button", () => {
    render(<Footer />);

    const emailInput = screen.getByPlaceholderText(/Email address/i);
    const joinButton = screen.getByText(/Join our newsletter/i);

    expect(emailInput).toBeInTheDocument();
    expect(joinButton).toBeInTheDocument();
  });

  test("allows text input in email field", () => {
    render(<Footer />);

    const emailInput = screen.getByPlaceholderText(/Email address/i);

    fireEvent.change(emailInput, { target: { value: "test@example.com" } });
    expect(emailInput.value).toBe("test@example.com");
  });

  test("button click does not cause error", () => {
    render(<Footer />);

    const joinButton = screen.getByText(/Join our newsletter/i);

    fireEvent.click(joinButton);
    expect(joinButton).toBeInTheDocument();
  });
});
