import {
  createContract,
  approveContract,
  getUserContracts,
  getBillboardContracts,
  getContract,
} from "../services/contract";

import { axiosInstance } from "../utils/axiosInstance";
import { getUser } from "../utils/utils";

jest.mock("../utils/axiosInstance");

describe("Contract Service Functions", () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  describe("createContract", () => {
    test("should make a POST request with the provided contract data and return the response data", async () => {
      const mockContract = {
        /* contract data */
      };
      const mockResponseData = {
        id: 1,
        contractName: "Sample Contract",
        startDate: "2023-06-01",
        endDate: "2023-06-30",
        // ... other properties
      };
      axiosInstance.post.mockResolvedValueOnce({ data: mockResponseData });

      const response = await createContract(mockContract);

      expect(axiosInstance.post).toHaveBeenCalledWith(
        `/contracts/`,
        mockContract
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockContract = {
        /* contract data */
      };
      const mockError = new Error("Request failed");
      axiosInstance.post.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await createContract(mockContract);
      } catch (error) {
        expect(axiosInstance.post).toHaveBeenCalledWith(
          `/contracts/`,
          mockContract
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("approveContract", () => {
    test("should make a PUT request with the provided contract_id and contract data and return the response data", async () => {
      const mockContractId = 123;
      const mockContract = {
        /* contract data */
      };
      const mockResponseData = {
        id: 1,
        contractName: "Sample Contract",
        startDate: "2023-06-01",
        endDate: "2023-06-30",
        // ... other properties
      };
      axiosInstance.put.mockResolvedValueOnce({ data: mockResponseData });

      const response = await approveContract(mockContractId, mockContract);

      expect(axiosInstance.put).toHaveBeenCalledWith(
        `/contracts/${mockContractId}`,
        mockContract
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockContractId = 123;
      const mockContract = {
        /* contract data */
      };
      const mockError = new Error("Request failed");
      axiosInstance.put.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await approveContract(mockContractId, mockContract);
      } catch (error) {
        expect(axiosInstance.put).toHaveBeenCalledWith(
          `/contracts/${mockContractId}`,
          mockContract
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  describe("getContract", () => {
    test("should make a GET request with the provided contractId and return the response data", async () => {
      const mockContractId = 123;
      const mockResponseData = {
        id: 1,
        contractName: "Sample Contract",
        startDate: "2023-06-01",
        endDate: "2023-06-30",
        // ... other properties
      };
      axiosInstance.get.mockResolvedValueOnce({ data: mockResponseData });

      const response = await getContract(mockContractId);

      expect(axiosInstance.get).toHaveBeenCalledWith(
        `/contracts/${mockContractId}`
      );
      expect(response).toEqual(mockResponseData);
    });

    test("should handle errors and return the error", async () => {
      const mockContractId = 123;
      const mockError = new Error("Request failed");
      axiosInstance.get.mockRejectedValueOnce(mockError);
      const consoleErrorSpy = jest.spyOn(console, "error").mockImplementation();

      try {
        await getContract(mockContractId);
      } catch (error) {
        expect(axiosInstance.get).toHaveBeenCalledWith(
          `/contracts/${mockContractId}`
        );
        expect(error).toEqual(mockError);
        expect(consoleErrorSpy).toHaveBeenCalledWith(mockError);
      }

      consoleErrorSpy.mockRestore();
    });
  });

  // other tests...
});
