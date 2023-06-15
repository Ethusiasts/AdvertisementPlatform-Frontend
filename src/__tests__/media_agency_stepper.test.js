import {
  mediaAgencyStepper,
  editMediaAgencyStepper,
} from "../services/media_agency_stepper_api";
import { axiosInstance } from "../utils/axiosInstance";

jest.mock("../utils/axiosInstance");

describe("Media Agency Service Functions", () => {
  describe("mediaAgencyStepper", () => {
    test("should make a POST request and return the response data", async () => {
      const mockAgency = {
        /* Mock agency data */
      };
      const mockResponseData = {
        /* Mock response data */
      };

      axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

      const response = await mediaAgencyStepper(mockAgency);

      expect(response).toEqual(mockResponseData);
      expect(axiosInstance.post).toHaveBeenCalledWith(
        "/media_agencies/",
        mockAgency
      );
    });

    test("should handle errors and return the error", async () => {
      const mockAgency = {
        /* Mock agency data */
      };
      const mockError = new Error("Request failed");

      axiosInstance.post.mockRejectedValueOnce(mockError);

      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await mediaAgencyStepper(mockAgency);
      } catch (error) {
        expect(error).toEqual(mockError);
        expect(axiosInstance.post).toHaveBeenCalledWith(
          "/media_agencies/",
          mockAgency
        );
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("editMediaAgencyStepper", () => {
    test("should make a PUT request and return the response data", async () => {
      const mockAgency = {
        /* Mock agency data */
      };
      const mockResponseData = {
        /* Mock response data */
      };

      axiosInstance.put.mockResolvedValueOnce({ data: mockResponseData });

      const response = await editMediaAgencyStepper(mockAgency);

      expect(response).toEqual(mockResponseData);
      expect(axiosInstance.put).toHaveBeenCalledWith(
        `/media_agencies/${mockAgency.user}`,
        mockAgency
      );
    });

    test("should handle errors and return the error", async () => {
      const mockAgency = {
        /* Mock agency data */
      };
      const mockError = new Error("Request failed");

      axiosInstance.put.mockRejectedValueOnce(mockError);

      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await editMediaAgencyStepper(mockAgency);
      } catch (error) {
        expect(error).toEqual(mockError);
        expect(axiosInstance.put).toHaveBeenCalledWith(
          `/media_agencies/${mockAgency.user}`,
          mockAgency
        );
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  // ... other tests for media agency service functions
});
