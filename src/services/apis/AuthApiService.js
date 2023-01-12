import axios from "axios";
import AddressApiService from "./AddressApiService";

const AuthApiService = {
  LoginAsync: async (user) => {
    try {
      let resultFromServer = await axios.post(
        AddressApiService.Auth.Login,
        {...user}
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("AuthApiService->LoginAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default AuthApiService;
