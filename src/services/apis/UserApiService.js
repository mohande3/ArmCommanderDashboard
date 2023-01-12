import axios from "axios";
import AddressApiService from "./AddressApiService";

const UserApiService = {
  GetTableAsync: async () => {
    try {
      console.warn("ADDRESS : ", AddressApiService.User.GetTable);
      let resultFromServer = await axios.post(
        AddressApiService.User.GetTable,
        {}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("UserApiService->GetTableAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  AddOrUpdate: async (user) => {
    try {
      let dataForSend = { ...user };
      let result = await axios.post(
        AddressApiService.User.Add,
        dataForSend
      );
      return result.data;
    } catch (error) {
      console.error("UserApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default UserApiService;
