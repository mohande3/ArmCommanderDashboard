const baseAddress = process.env.REACT_APP_API_ADDRESS;
const AddressApiService = {
  TimeLog: {
    GetTable: baseAddress + "Kara2000api/v1/TimeLogApi/GetTable",
  },
  Personnel: {
    GetTable: baseAddress + "Kara2000api/v1/PersonnelApi/GetTable",
  },
};
export default AddressApiService;