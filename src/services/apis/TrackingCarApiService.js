import axios from "axios";
import AddressApiService from "./AddressApiService";

const TrackingCarApiService = {
  GetTableAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingCarGetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingCarApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default TrackingCarApiService;
