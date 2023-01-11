const baseAddress = process.env.REACT_APP_API_ADDRESS;
const AddressApiService = {
  TimeLog: {
    GetTable: baseAddress + "Kara2000api/v1/TimeLogApi/GetTable",
  },
  Device: {
    GetTable: baseAddress + "Kara2000api/v1/DeviceApi/GetsTable",
    Gets: baseAddress + "Kara2000api/v1/DeviceApi/Gets",
    AddOrUpdate: baseAddress + "Kara2000api/v1/DeviceApi/AddOrUpdate",
    DeleteBySerialNumber:
      baseAddress +
      "Kara2000api/v1/DeviceApi/DeleteBySerialNumber?serialNumber=",
  },
  Tracking: {
    TrackingStationAdd:
      baseAddress + "Kara2000api/v1/TrackingApi/TrackingStationAdd",
    TrackingStationGetTable:
      baseAddress + "Kara2000api/v1/TrackingApi/TrackingStationGetTable",
  },
  Personnel: {
    GetTable: baseAddress + "Kara2000api/v1/PersonnelApi/GetTable",
    AddOrUpdate: baseAddress + "Kara2000api/v1/PersonnelApi/AddOrUpdateFromUI",
    Delete: baseAddress + "Kara2000api/v1/PersonnelApi/Delete?personnelId=",
    GetByPersonnelNumber:
      baseAddress +
      "Kara2000api/v1/PersonnelApi/GetByPersonnelNumber?personnelNumber=",
  },
};
export default AddressApiService;
