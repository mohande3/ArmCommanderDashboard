import axios from "axios";
import AddressApiService from "./AddressApiService";

const PersonnelApiService = {
  GetTableAsync: async () => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Personnel.GetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("PersonnelApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default PersonnelApiService;
