import AuthApiService from "./apis/AuthApiService";

class AuthService {
  LoginAsync = async (user) => {
    let resultFromServer = await AuthApiService.LoginAsync(user);
    if (resultFromServer.isSuccess) {
      localStorage.setItem("tokenAccess", resultFromServer.result);
    }
    return resultFromServer;
  };
  LogOut = () => {
    localStorage.removeItem("tokenAccess");
  };
  GetHeaderAuth = () => {
    return {
      headers: { user: localStorage.getItem("tokenAccess") },
    };
  };
  IsAuthenticated = () => {
    if (localStorage.getItem("tokenAccess")) return true;
    return false;
  };
  IsEndTokenAccess = (resultFromServer) => {
    if (
      resultFromServer.isSuccess === false &&
      resultFromServer.statusCode === 3
    )
      return true;
    return false;
  };
}

export default new AuthService();
