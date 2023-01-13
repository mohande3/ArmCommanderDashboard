import axios from "axios";
import AuthService from "../AuthService";
import AddressApiService from "./AddressApiService";

const TimeLogApiService = {
  GetTableAsync: async (timeLogSearch) => {
    try {
      let dataForSend = {};
      if (timeLogSearch)
        dataForSend = { ...timeLogSearch };
      let resultFromServer = await axios.post(
        AddressApiService.TimeLog.GetTable,
        dataForSend,AuthService.GetHeaderAuth()
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TimeLogApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default TimeLogApiService;
