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
      let dataForSend = {};
      if (device.serialNumber) dataForSend.serialNumber = device.serialNumber;
      if (device.ipAddress) dataForSend.ipAddress = device.ipAddress;
      if (device.name) dataForSend.name = device.name;
      if (device.portNumber) dataForSend.portNumber = device.portNumber;
      if (device.description) dataForSend.description = device.description;
      if (device.version) dataForSend.version = device.version;
      if (device.location) dataForSend.location = device.location;
      if (device.macAddress) dataForSend.macAddress = device.macAddress;
      if (device.typeOfDevice) dataForSend.typeOfDevice = device.typeOfDevice;
      if (device.gateId) dataForSend.gateId = device.gateId;
      if (device.carId) dataForSend.carId = device.carId;
      let result = await axios.post(
        AddressApiService.Device.AddOrUpdate,
        dataForSend
      );
      return result.data;
    } catch (error) {
      console.error("DeviceApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  DeleteBySerialNumber: async (serialNumber) => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Device.DeleteBySerialNumber + serialNumber
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("DeviceApiService->DeleteBySerialNumber", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default DeviceApiService;
