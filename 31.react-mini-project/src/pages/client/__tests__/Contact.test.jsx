import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import { vi } from "vitest";
import Contact from "../Contact";

describe("Contact page", () => {
  test("renders contact info blocks", () => {
    render(<Contact />);

    expect(screen.getByText(/^Address$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Phone$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Email$/i)).toBeInTheDocument();
    expect(screen.getByText(/^Website$/i)).toBeInTheDocument();
  });

  test("shows validation errors on empty submit", async () => {
    const user = userEvent.setup();
    render(<Contact />);

    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(screen.getByText("Tam ad boş ola bilməz")).toBeInTheDocument();
    expect(screen.getByText("Email boş ola bilməz")).toBeInTheDocument();
    expect(screen.getByText("Mesaj boş ola bilməz")).toBeInTheDocument();
  });

  test("submits when required fields are filled", async () => {
    const user = userEvent.setup();
    const logSpy = vi.spyOn(console, "log").mockImplementation(() => {});

    render(<Contact />);

    await user.type(screen.getByLabelText(/your name/i), "Test User");
    await user.type(screen.getByLabelText(/your email/i), "test@example.com");
    await user.type(screen.getByLabelText(/message/i), "Hello");
    await user.click(screen.getByRole("button", { name: /send message/i }));

    expect(logSpy).toHaveBeenCalledWith(
      expect.objectContaining({
        fullName: "Test User",
        email: "test@example.com",
        message: "Hello"
      })
    );

    logSpy.mockRestore();
  });
});
