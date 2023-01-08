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
  AddOrUpdateAsync: async (personnel) => {
    try {

      console.log('SEND DATA : ', personnel);
      var bodyFormData = new FormData();
      bodyFormData.append('personnelNumber', personnel.personnelNumber);
      bodyFormData.append('personnelImage', personnel.personnelImage); 
      bodyFormData.append('name', personnel.name); 
      bodyFormData.append('family', personnel.family); 
      bodyFormData.append('dateTimeOfStartWork', personnel.dateTimeOfStartWork); 
      bodyFormData.append('dateTimeOfEndWork', personnel.dateTimeOfEndWork); 
      bodyFormData.append('serviceLocationPhone', personnel.serviceLocationPhone); 
      bodyFormData.append('nameFather', personnel.nameFather); 

      let resultFromServer = await axios.post(
        AddressApiService.Personnel.AddOrUpdate,
        bodyFormData,
        { "Content-Type": "multipart/form-data" }
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
