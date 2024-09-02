import "@testing-library/jest-dom";
import "@testing-library/jest-dom/extend-expect";
import { fireEvent, render, screen } from "@testing-library/react";
import Login from "app/testing/Login";
import axios from "axios";

jest.mock("axios");
const mockedAxios = axios as jest.Mocked<typeof axios>;

describe("Login Component", () => {
  afterEach(() => {
    jest.clearAllMocks(); // 각 테스트 후 mock을 초기화합니다.
    window.localStorage.clear(); // localStorage를 초기화합니다.
  });

  test("로그인 폼이 랜더링 되어야 한다.", () => {
    render(<Login />);
    const userInput = screen.getByLabelText(/username/i);
    const passwordInput = screen.getByLabelText(/password/i);

    expect(userInput).toBeInTheDocument();
    expect(passwordInput).toBeInTheDocument();
  });

  test("로그인 성공 시 localStorage에 토큰이 저장된다.", async () => {
    const token = "fake-token";
    mockedAxios.post.mockResolvedValueOnce({
      data: { token },
    });

    render(<Login />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "password" },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    const successMessage = await screen.findByRole("alert", {
      name: /Congrats! You're signed in!/i,
    });

    expect(successMessage).toBeInTheDocument();
    expect(window.localStorage.getItem("token")).toBe(token);
  });

  test("로그인 실패 시 에러 메시지가 표시된다.", async () => {
    const errorMessage = "Invalid credentials";
    mockedAxios.post.mockRejectedValueOnce(new Error(errorMessage));

    render(<Login />);
    fireEvent.change(screen.getByLabelText(/username/i), {
      target: { value: "testuser" },
    });
    fireEvent.change(screen.getByLabelText(/password/i), {
      target: { value: "wrongpassword" },
    });
    fireEvent.click(screen.getByText(/Submit/i));

    const errorAlert = await screen.findByRole("alert", {
      name: /Invalid credentials/i,
    });

    expect(errorAlert).toBeInTheDocument();
    expect(window.localStorage.getItem("token")).toBeNull();
  });
});
