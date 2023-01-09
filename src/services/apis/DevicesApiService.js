import axios from "axios";
import AddressApiService from "./AddressApiService";

const DeviceApiService = {
  GetTableAsync: async () => {
    try {
      console.warn("ADDRESS : ", AddressApiService.Device.GetTable);
      let resultFromServer = await axios.post(
        AddressApiService.Device.GetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("DeviceApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  GetsAsync: async () => {
    try {
      let resultFromServer = await axios.post(AddressApiService.Device.Gets);
      return resultFromServer.data;
    } catch (error) {
      console.error("DeviceApiService->GetsAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },

  AddOrUpdateAsync: async (device) => {
    try {
      console.log(device);
      return axios.post(AddressApiService.Device.AddOrUpdate, {
        serialNumber: device.serialNumber,
        ipAddress: device.ipAddress,
        portNumber: device.portNumber,
        name: device.name,
        description: device.description,
        version: device.version,
        location: device.location,
        macAddress: device.macAddress,
        typeOfDevice: device.typeOfDevice,
        gateId: device.gateId,
        carId: device.carId,
      });
    } catch (error) {
      console.error("DeviceApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default DeviceApiService;
