import {
  getBillboardDetail,
  deleteBillboard,
  getBillboards,
  createBillboard,
  searchBillboardsWithQueryOnly,
  searchBillboards,
  addReview,
  getBillboardReviews,
} from "../services/billboard_api";

import { axiosInstance } from "../utils/axiosInstance";

jest.mock("../utils/axiosInstance");

describe("Billboard Service Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("getBillboardDetail", () => {
    test("should make a GET request with the provided billboardId and return the response data", async () => {
      const mockBillboardId = 123;
      const mockResponseData = {
        billboardId: mockBillboardId,
        title: "Billboard Title",
      };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await getBillboardDetail({
        billboardId: mockBillboardId,
      });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/billboards/${mockBillboardId}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockBillboardId = 123;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await getBillboardDetail({ billboardId: mockBillboardId });
      } catch (error) {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `/billboards/${mockBillboardId}`
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });
  describe("deleteBillboard", () => {
    test("should make a DELETE request with the provided billboardId and return the response data", async () => {
      const mockBillboardId = 123;
      const mockResponseData = { billboardId: mockBillboardId, success: true };
      axiosInstance.delete.mockResolvedValueOnce({ data: mockResponseData });

      const response = await deleteBillboard({ billboardId: mockBillboardId });

      expect(axiosInstance.delete).toHaveBeenCalledWith(
        `/billboards/${mockBillboardId}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockBillboardId = 123;
      const mockError = new Error("Request failed");
      axiosInstance.delete.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await deleteBillboard({ billboardId: mockBillboardId });
      } catch (error) {
        expect(axiosInstance.delete).toHaveBeenCalledWith(
          `/billboards/${mockBillboardId}`
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("getBillboards", () => {
    test("should make a GET request with the provided currentPage and return the response data", async () => {
      const mockCurrentPage = 1;
      const mockResponseData = { currentPage: mockCurrentPage, billboards: [] };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await getBillboards({ currentPage: mockCurrentPage });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/billboards/?page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockCurrentPage = 1;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await getBillboards({ currentPage: mockCurrentPage });
      } catch (error) {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `/billboards/?page=${mockCurrentPage}`
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });
  describe("createBillboard", () => {
    test("should make a POST request with the provided billboard data and return success response", async () => {
      const mockBillboard = { title: "Test Billboard" };
      const mockResponseData = {
        success: true,
        data: { id: 123, ...mockBillboard },
      };
      axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

      const response = await createBillboard(mockBillboard);

      expect(axiosInstance.post).toHaveBeenCalledWith(
        "/billboards/",
        mockBillboard
      );
      expect(response).toEqual({ success: true, data: mockResponseData });
    });

    test("should handle errors and return the error", async () => {
      const mockBillboard = { title: "Test Billboard" };
      const mockError = new Error("Request failed");
      axiosInstance.post.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await createBillboard(mockBillboard);
      } catch (error) {
        expect(axiosInstance.post).toHaveBeenCalledWith(
          "/billboards/",
          mockBillboard
        );
        expect(error).toEqual({ success: false, data: mockError });
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("searchBillboardsWithQueryOnly", () => {
    test("should make a GET request with the provided query and currentPage and return the response data", async () => {
      const mockQuery = "test";
      const mockCurrentPage = 1;
      const mockResponseData = {
        query: mockQuery,
        currentPage: mockCurrentPage,
        results: [],
      };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await searchBillboardsWithQueryOnly({
        query: mockQuery,
        currentPage: mockCurrentPage,
      });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/billboards/search?q=${mockQuery}&page=${mockCurrentPage}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockQuery = "test";
      const mockCurrentPage = 1;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await searchBillboardsWithQueryOnly({
          query: mockQuery,
          currentPage: mockCurrentPage,
        });
      } catch (error) {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `/billboards/search?q=${mockQuery}&page=${mockCurrentPage}`
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });
  describe("searchBillboards", () => {
    test("should make a GET request with the provided parameters and return the response data", async () => {
      const mockParams = {
        currentPage: 1,
        query: "test",
        latitude: 123,
        longitude: 456,
        type: "Production",
        size: "Large",
        min_price: 100,
        max_price: 200,
        searchDistanceValue: 1000,
      };
      const mockResponseData = {
        currentPage: mockParams.currentPage,
        billboards: [],
      };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await searchBillboards(mockParams);

      let expectedUrl =
        `/billboards/search?q=${mockParams.query}` +
        `&radius=${mockParams.searchDistanceValue}` +
        `&latitude=${mockParams.latitude}` +
        `&longitude=${mockParams.longitude}` +
        `&has_production=true` +
        `&size=${mockParams.size}` +
        `&min_price=${mockParams.min_price}&max_price=${mockParams.max_price}` +
        `&page=${mockParams.currentPage}`;

      if (!mockParams.query) {
        expectedUrl = expectedUrl.replace("&", "?");
      }

      expect(axiosInstance.get).toHaveBeenCalledWith(expectedUrl);
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockParams = {
        currentPage: 1,
        query: "test",
        latitude: 123,
        longitude: 456,
        type: "Production",
        size: "Large",
        min_price: 100,
        max_price: 200,
        searchDistanceValue: 1000,
      };
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await searchBillboards(mockParams);
      } catch (error) {
        let expectedUrl =
          `/billboards/search?q=${mockParams.query}` +
          `&radius=${mockParams.searchDistanceValue}` +
          `&latitude=${mockParams.latitude}` +
          `&longitude=${mockParams.longitude}` +
          `&has_production=true` +
          `&size=${mockParams.size}` +
          `&min_price=${mockParams.min_price}&max_price=${mockParams.max_price}` +
          `&page=${mockParams.currentPage}`;

        if (!mockParams.query) {
          expectedUrl = expectedUrl.replace("&", "?");
        }

        expect(axiosInstance.get).toHaveBeenCalledWith(expectedUrl);
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("addReview", () => {
    test("should make a POST request with the provided review data and return the response data", async () => {
      const mockReviewData = { rating: 4, comment: "Great billboard!" };
      const mockResponseData = { success: true, data: { reviewId: 123 } };
      axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

      const response = await addReview(mockReviewData);

      expect(axiosInstance.post).toHaveBeenCalledWith(
        "/ratings/",
        mockReviewData
      );
      expect(response).toEqual({
        success: true,
        data: { data: { reviewId: 123 }, success: true },
      });
    });

    test("should handle errors and return the error", async () => {
      const mockReviewData = { rating: 4, comment: "Great billboard!" };
      const mockError = new Error("Request failed");
      axiosInstance.post.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await addReview(mockReviewData);
      } catch (error) {
        expect(axiosInstance.post).toHaveBeenCalledWith(
          "/ratings/",
          mockReviewData
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("getBillboardReviews", () => {
    test("should make a GET request with the provided billboardId and return the response data", async () => {
      const mockBillboardId = 123;
      const mockResponseData = {
        reviews: [
          { id: 1, rating: 4 },
          { id: 2, rating: 5 },
        ],
      };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await getBillboardReviews({
        billboardId: mockBillboardId,
      });

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/billboards/${mockBillboardId}/ratings/`
      );
      expect(response).toEqual({ success: true, data: mockResponseData });
    });

    test("should handle errors and return the error", async () => {
      const mockBillboardId = 123;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await getBillboardReviews({ billboardId: mockBillboardId });
      } catch (error) {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `/billboards/${mockBillboardId}/ratings/`
        );
        expect(error).toEqual({ success: false, data: mockError });
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  // Add similar tests for other service functions (createBillboard, searchBillboardsWithQueryOnly, searchBillboards, addReview, getBillboardReviews)
});
