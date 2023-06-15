import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import { signIn } from "../../services/auth/signin_api";
import { axiosInstance } from "../../utils/axiosInstance";

jest.mock("../../utils/axiosInstance");

describe("signIn", () => {
  test("should make a POST request with the provided body and return the response data", async () => {
    const mockResponseData = { message: "User logged in successfully" };
    axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

    const testEmail = "test@example.com";
    const testPassword = "test123";
    const requestBody = {
      email: testEmail,
      password: testPassword,
    };

    const response = await signIn(requestBody);

    expect(axiosInstance.post).toHaveBeenCalledWith("/auth/login", requestBody);
    expect(response).toEqual(mockResponseData);
  });

  test("should handle errors and return the error", async () => {
    const mockError = new Error("Request failed");
    axiosInstance.post.mockRejectedValueOnce(mockError);

    const testEmail = "test@example.com";
    const testPassword = "test123";
    const requestBody = {
      email: testEmail,
      password: testPassword,
    };

    const response = await signIn(requestBody);

    expect(axiosInstance.post).toHaveBeenCalledWith("/auth/login", requestBody);
    expect(response).toEqual(mockError);
  });
});
