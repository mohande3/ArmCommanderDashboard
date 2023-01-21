import CommandApiService from "./apis/CommandApiService";

class Command {
  GetTableAsync = async () => {
    return await CommandApiService.GetTableAsync();
  };
  CreateCommandSetTimeWithServerTimeAsync = async (serialNumbers = []) => {
    return await CommandApiService.CreateCommandSetTimeWithServerTimeAsync(
      serialNumbers
    );
  };
  CreateCommandUpdatePersonnelAsync = async (serialNumbers = [], data) => {
    data.serialNumbers = serialNumbers;
    return await CommandApiService.CreateCommandUpdatePersonnelAsync(data);
  };
}

export default new Command();
