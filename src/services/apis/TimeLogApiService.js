import axios from "axios";
import AddressApiService from "./AddressApiService";

const TimeLogApiService = {
  GetTableAsync: async () => {
    try {
      console.log(AddressApiService.TimeLog.GetTable);
      let resultFromServer = await axios.post(
        AddressApiService.TimeLog.GetTable,
        {}
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
