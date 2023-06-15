import { render, fireEvent, waitFor, screen } from "@testing-library/react";
import {
  getMediaDetail,
  getAgencies,
  searchAgenciesWithQueryOnly,
  searchAgencies,
  getMedias,
  addMedias,
  updateMedias,
} from "../services/agency_api";
import { axiosInstance } from "../utils/axiosInstance";

jest.mock("../utils/axiosInstance");

describe("Service Functions", () => {
  describe("getMediaDetail", () => {
    test("should make a GET request with the provided mediaId and return the response data", async () => {
      const mockMediaId = 123;
      const mockResponseData = { mediaId: mockMediaId, title: "Media Title" };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

      const response = await getMediaDetail({ mediaId: mockMediaId });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/agencies/${mockMediaId}`
      );
      expect(response).toEqual(mockResponseData);
      consoleLogSpy.mockRestore();
    });

    test("should handle errors and return the error", async () => {
      const mockMediaId = 123;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      const response = await getMediaDetail({ mediaId: mockMediaId });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/agencies/${mockMediaId}`
      );
      expect(response).toEqual(mockError);
      consoleErrorSpy.mockRestore();
    });
  });

  describe("getAgencies", () => {
    test("should make a GET request with the provided currentPage and return the response data", async () => {
      const mockCurrentPage = 1;
      const mockResponseData = { currentPage: mockCurrentPage, agencies: [] };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });
      const consoleLogSpy = jest.spyOn(console, "log").mockImplementation();

      const response = await getAgencies({ currentPage: mockCurrentPage });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/agencies/?page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockResponseData);
      consoleLogSpy.mockRestore();
    });

    test("should handle errors and return the error", async () => {
      const mockCurrentPage = 1;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      const response = await getAgencies({ currentPage: mockCurrentPage });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/agencies/?page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockError);
      consoleErrorSpy.mockRestore();
    });
  });

  describe("searchAgenciesWithQueryOnly", () => {
    test("should make a GET request with the provided query and currentPage, and return the response data", async () => {
      const mockQuery = "test";
      const mockCurrentPage = 1;
      const mockResponseData = {
        query: mockQuery,
        currentPage: mockCurrentPage,
        results: [],
      };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await searchAgenciesWithQueryOnly({
        query: mockQuery,
        currentPage: mockCurrentPage,
      });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/agencies/search?q=${mockQuery}&page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockQuery = "test";
      const mockCurrentPage = 1;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error");

      const response = await searchAgenciesWithQueryOnly({
        query: mockQuery,
        currentPage: mockCurrentPage,
      });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/agencies/search?q=${mockQuery}&page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockError);
      expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
    });
  });

  describe("searchAgencies", () => {
    test("should make a GET request with the provided parameters and return the response data", async () => {
      const mockCurrentPage = 1;
      const mockQuery = "test";
      const mockChannelType = "someChannel";
      const mockType = "Production";
      const mockPromotionTime = "Peak Hour";
      const mockMinPrice = 100;
      const mockMaxPrice = 200;
      const mockResponseData = { currentPage: mockCurrentPage, agencies: [] };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await searchAgencies({
        currentPage: mockCurrentPage,
        query: mockQuery,
        channelType: mockChannelType,
        type: mockType,
        promotionTime: mockPromotionTime,
        min_price: mockMinPrice,
        max_price: mockMaxPrice,
      });

      let expectedUrl = `/agencies/search?q=${mockQuery}&channel_name=${mockChannelType}`;
      expectedUrl += `&production=true&peak_hour=true&min_price=${mockMinPrice}&max_price=${mockMaxPrice}`;
      expectedUrl += `&page=${mockCurrentPage}`;

      expect(axiosInstance.get).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockCurrentPage = 1;
      const mockQuery = "test";
      const mockChannelType = "someChannel";
      const mockType = "Production";
      const mockPromotionTime = "Peak Hour";
      const mockMinPrice = 100;
      const mockMaxPrice = 200;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error");

      const response = await searchAgencies({
        currentPage: mockCurrentPage,
        query: mockQuery,
        channelType: mockChannelType,
        type: mockType,
        promotionTime: mockPromotionTime,
        min_price: mockMinPrice,
        max_price: mockMaxPrice,
      });

      let expectedUrl = `/agencies/search?q=${mockQuery}&channel_name=${mockChannelType}`;
      expectedUrl += `&production=true&peak_hour=true&min_price=${mockMinPrice}&max_price=${mockMaxPrice}`;
      expectedUrl += `&page=${mockCurrentPage}`;

      expect(axiosInstance.get).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockError);
      expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
    });
  });

  describe("getMedias", () => {
    test("should make a GET request with the provided currentPage and return the response data", async () => {
      const mockCurrentPage = 1;
      const mockResponseData = { currentPage: mockCurrentPage, medias: [] };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await getMedias({ currentPage: mockCurrentPage });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/medias/?page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockCurrentPage = 1;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error");

      const response = await getMedias({ currentPage: mockCurrentPage });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/medias/?page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockError);
      expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
    });
  });

  describe("addMedias", () => {
    test("should ...", async () => {
      // Test your addMedias function here
    });
  });

  describe("updateMedias", () => {
    test("should ...", async () => {
      // Test your updateMedias function here
    });
  });
});
