import axios from "axios";
import AuthService from "../AuthService";
import AddressApiService from "./AddressApiService";

const StationApiService = {
  AddOrUpdateAsync: async (station) => {
    try {
      console.log("data to send : ", station);
      let dataForSend = {
        name: station.name,
        description: station.description,
        isActive: station.isActive === "1",
        latitude: station.latitude,
        longitude: station.longitude,
        code: station.code,
      };
      if (station.carPathId) dataForSend.carPathId = station.carPathId;
      console.log(
        "ADDRESS : ",
        AddressApiService.Tracking.TrackingStationAddOrUpdate
      );
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingStationAddOrUpdate,
        dataForSend
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("StationApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  GetTableAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingStationGetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("StationApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  GetsAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingStationGets,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("StationApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  DeleteByCode: async (code) => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingStationDeleteByCode + code, {},AuthService.GetHeaderAuth()
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("StationApiService->DeleteByCode", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};
export default StationApiService;
