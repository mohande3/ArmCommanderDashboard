import axios from "axios";
import AuthService from "../AuthService";
import AddressApiService from "./AddressApiService";

const TrackingTripApiService = {
  AddOrUpdateAsync: async (trip) => {
    try {
      console.log("data to send : ", trip);
      let dataForSend = {
        name: trip.name,
        dateTimeOfStart: trip.dateTimeOfStart.toString(),
        code: trip.code,
        serviceCode: trip.serviceCode,
        deviceSerialNumber:trip.deviceSerialNumber
      };
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingTripAddOrUpdate,
        dataForSend
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingTripApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  GetTableAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Tracking.TrackingTripGetTable,
        {},AuthService.GetHeaderAuth()
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("TrackingTripApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};
export default TrackingTripApiService;
