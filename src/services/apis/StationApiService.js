import axios from "axios";
import AddressApiService from "./AddressApiService";

const StationApiService = {
  AddAsync: async (station) => {
    try {
      console.log("data to send : ", station);
      let dataForSend = {
        name: station.name,
        description: station.description,
        isActive: station.isActive === "1",
        latitude: station.latitude,
        longitude: station.longitude,
      };
      if (station.carPathId) dataForSend.carPathId = station.carPathId;
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingStationAdd,
        dataForSend
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("StationApiService->GetsAsync", error);
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
};
export default StationApiService;
