import axios from "axios";
import AddressApiService from "./AddressApiService";

const TrackingServiceApiService = {
  AddOrUpdateAsync: async (service) => {
    try {
      console.log("data to send : ", service);
      let dataForSend = {
        name: service.name,
        description: service.description,
        isActive: service.isActive === "1",
        code: service.code,
        stationAssignt: service.stationAssignt,
        stationUnAssignt: service.stationUnAssignt,
      };
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingServieAdd,
        dataForSend
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingServiceApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  GetTableAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingServiceGetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingServiceApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  GetsAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingServiceGets,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingServiceApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  DeleteByCodeAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingServiceGetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingServiceApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};
export default TrackingServiceApiService;
