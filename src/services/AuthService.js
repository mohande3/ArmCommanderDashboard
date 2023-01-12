import AuthApiService from "./apis/AuthApiService";

class AuthService {
  LoginAsync = async (user) => {
    let resultFromServer = await AuthApiService.LoginAsync(user);
    if (resultFromServer.isSuccess) {
      localStorage.setItem(
        "tokenAccess",
        JSON.stringify(resultFromServer.result)
      );
    }
    return resultFromServer;
  };
  LogOut = () => {
    localStorage.removeItem("tokenAccess");
  };
  GetHeaderAuth = () => {
    return {
      headers: { Authorization: localStorage.getItem("tokenAccess") }
    };
  };
}

export default new AuthService();