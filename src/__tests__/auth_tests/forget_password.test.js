import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { forgetPassword } from "../../services/auth/forget_password_api";
import { axiosInstance } from "../../utils/axiosInstance";

jest.mock("../../utils/axiosInstance");

describe("forgetPassword", () => {
  test("should make a POST request with the provided body and return the response data", async () => {
    const mockResponseData = { message: "Password reset successful" };
    axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

    const testEmail = "test@example.com";
    const requestBody = {
      email: testEmail,
    };

    const response = await forgetPassword(requestBody);

    expect(axiosInstance.post).toHaveBeenCalledWith(
      "/auth/forgot-password",
      requestBody
    );
    expect(response).toEqual(mockResponseData);
  });

  test("should handle errors and return the error", async () => {
    const mockError = new Error("Request failed");
    axiosInstance.post.mockRejectedValueOnce(mockError);

    const testEmail = "test@example.com";
    const requestBody = {
      email: testEmail,
    };
    const consoleErrorMock = jest.spyOn(console, "error").mockImplementation();

    const response = await forgetPassword(requestBody);

    expect(axiosInstance.post).toHaveBeenCalledWith(
      "/auth/forgot-password",
      requestBody
    );
    expect(response).toEqual(mockError);

    // Verify that console.error was called with the expected error
    expect(consoleErrorMock).toHaveBeenCalledWith(mockError);

    // Restore the original console.error implementation
    consoleErrorMock.mockRestore();
  });
});
