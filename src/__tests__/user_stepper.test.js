import {
  userStepper,
  editUserStepper,
  getUserStepper,
} from "../services/user_stepper_api";
import { axiosInstance } from "../utils/axiosInstance";
import { setCookie } from "../utils";

jest.mock("../utils/axiosInstance");
jest.mock("../utils", () => ({
  setCookie: jest.fn(),
}));

describe("User Service Functions", () => {
  describe("userStepper", () => {
    test("should make a POST request and return the response data", async () => {
      const mockUser = {
        data: { id: 123, username: "John" },
      };
      const mockResponseData = {
        data: {
          id: 123,
          username: "John",
          // Include other properties of the response data
        },
      };

      axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

      const response = await userStepper(mockUser);

      expect(response).toEqual(mockResponseData);
      expect(axiosInstance.post).toHaveBeenCalledWith(
        "/auth/profiles",
        mockUser
      );
    });

    test("should handle errors and return the error", async () => {
      const mockUser = {
        data: { id: 123, username: "John" },
      };
      const mockError = new Error("Request failed");

      axiosInstance.post.mockRejectedValueOnce(mockError);

      const response = await userStepper(mockUser);

      expect(response).toEqual(mockError);
      expect(axiosInstance.post).toHaveBeenCalledWith(
        "/auth/profiles",
        mockUser
      );
    });
  });

  describe("editUserStepper", () => {
    test("should make a PUT request and return the response data", async () => {
      const mockUser = {
        data: { id: 123, username: "John" },
      };
      const mockResponseData = {
        data: {
          id: 123,
          username: "John",
          // Include other properties of the response data
        },
      };
      axiosInstance.put.mockResolvedValueOnce({ data: mockResponseData });

      const response = await editUserStepper(mockUser);

      expect(response).toEqual(mockResponseData);
      expect(axiosInstance.put).toHaveBeenCalledWith(
        `/auth/profiles/${mockUser.user}`,
        mockUser
      );
    });

    test("should handle errors and return the error", async () => {
      const mockUser = {
        data: { id: 123, username: "John" },
      };
      const mockError = new Error("Request failed");

      axiosInstance.put.mockRejectedValueOnce(mockError);

      const response = await editUserStepper(mockUser);

      expect(response).toEqual(mockError);
      expect(axiosInstance.put).toHaveBeenCalledWith(
        `/auth/profiles/${mockUser.user}`,
        mockUser
      );
    });
  });

  describe("getUserStepper", () => {
    test("should make a GET request, set cookie, and return the response data", async () => {
      const mockUserId = "123";
      const mockResponseData = {
        data: {
          id: 123,
          username: "John",
          // Include other properties of the response data
        },
      };
      axiosInstance.get.mockResolvedValueOnce({
        data: { data: mockResponseData },
      });

      const response = await getUserStepper(mockUserId);

      expect(setCookie).toHaveBeenCalledWith(
        "user_profile",
        JSON.stringify(mockResponseData)
      );
      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/auth/profiles/${mockUserId}`
      );
    });

    test("should handle errors, log error, and return the error", async () => {
      const mockUserId = "123";
      const mockError = new Error("Request failed");

      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      const response = await getUserStepper(mockUserId);

      expect(response).toEqual(mockError);
      expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/auth/profiles/${mockUserId}`
      );

      consoleErrorSpy.mockRestore();
    });
  });

  // ... other tests for user service functions
});
