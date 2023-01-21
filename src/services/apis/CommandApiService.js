import axios from "axios";
import AuthService from "../AuthService";
import AddressApiService from "./AddressApiService";

const CommandApiService = {
  GetTableAsync: async (filter = {}) => {
    try {
      console.log("DATA FOR SEND : ", filter);
      let resultFromServer = await axios.post(
        AddressApiService.CommandAddress.GetTable,
        filter,
        AuthService.GetHeaderAuth()
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("CommandApiService->CommandApiService", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  CreateCommandSetTimeWithServerTimeAsync: async (serialNumbers = []) => {
    try {
      let dataForSend = {};
      if (serialNumbers) dataForSend.SerialNumbers = serialNumbers;
      console.log("DATA FOR SEND : ", dataForSend);
      let resultFromServer = await axios.post(
        AddressApiService.CommandAddress.CreateCommandSetTimeWithServerTime,
        dataForSend,
        AuthService.GetHeaderAuth()
      );
      return resultFromServer.data;
    } catch (error) {
      console.error(
        "CommandApiService->CreateCommandSetTimeWithServerTimeAsync",
        error
      );
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  CreateCommandUpdatePersonnelAsync: async (data) => {
    try {
      console.log("DATA FOR SEND : ", data);
      let resultFromServer = await axios.post(
        AddressApiService.CommandAddress.CreateCommandUpdatePersonnel,
        data,
        AuthService.GetHeaderAuth()
      );
      return resultFromServer.data;
    } catch (error) {
      console.error(
        "CommandApiService->CreateCommandUpdatePersonnelAsync",
        error
      );
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  //
};

export default CommandApiService;
