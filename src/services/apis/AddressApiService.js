const baseAddress = process.env.REACT_APP_API_ADDRESS;
const AddressApiService = {
  CommandAddress: {
    GetTable: baseAddress + "v1/CommandApi/CommandLogGetTable",
    CreateCommandSetTimeWithServerTime:
      baseAddress + "v1/CommandApi/CreateCommandSetTimeWithServerTime",
    CreateCommandUpdatePersonnel:
      baseAddress + "v1/CommandApi/CreateCommandUpdatePersonnel",
    //
  },
  TimeLog: {
    GetTable: baseAddress + "Kara2000api/v1/TimeLogApi/GetTable",
    HubTimeLogAddress: baseAddress + "hubtimelogservice",
    HubTimeLogAddress_Event: "ReceiveNewTimeLog",
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
    // ========= CAR STATION API ADDRESS
    TrackingStationAddOrUpdate:
      baseAddress + "v1/TrackingApi/TrackingStationAddOrUpdate",
    TrackingStationGetTable:
      baseAddress + "v1/TrackingApi/TrackingStationGetTable",
    TrackingStationGets: baseAddress + "v1/TrackingApi/TrackingStationGets",
    TrackingStationDeleteByCode:
      baseAddress + "v1/TrackingApi/TrackingStationDeleteByCode?code=",
    // =========== CAR SERVICE API ADDRESS
    TrackingServiceGetTable:
      baseAddress + "v1/TrackingApi/TrackingServiceGetTable",
    TrackingServiceGets: baseAddress + "v1/TrackingApi/TrackingServiceGets",
    TrackingServieAdd:
      baseAddress + "v1/TrackingApi/TrackingServiceAddOrUpdate",
    // ============= CAR TRACKING API ADDRESS
    TrackingCarGetTable: baseAddress + "v1/TrackingApi/TrackingCarGetTable",
    // =========== Trip Service API Address
    TrackingTripGetTable: baseAddress + "v1/TrackingApi/TrackingTripGetTable",
    TrackingTripAddOrUpdate:
      baseAddress + "v1/TrackingApi/TrackingTripAddOrUpdate",
  },
  Personnel: {
    GetTable: baseAddress + "Kara2000api/v1/PersonnelApi/GetTable",
    AddOrUpdate: baseAddress + "Kara2000api/v1/PersonnelApi/AddOrUpdateFromUI",
    Delete: baseAddress + "Kara2000api/v1/PersonnelApi/Delete?personnelId=",
    GetByPersonnelNumber:
      baseAddress +
      "Kara2000api/v1/PersonnelApi/GetByPersonnelNumber?personnelNumber=",
  },
  User: {
    GetTable: baseAddress + "v1/UsersApi/GetTable",
    Add: baseAddress + "v1/UsersApi/AddAsync",
  },
  Auth: {
    Login: baseAddress + "v1/AuthApi/LoginAsync",
  },
};
export default AddressApiService;
