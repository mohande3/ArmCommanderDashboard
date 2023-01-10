import axios from "axios";
import AddressApiService from "./AddressApiService";

const PersonnelApiService = {
  GetTableAsync: async () => {
    try {
      console.warn("ADDRESS : ", AddressApiService.Personnel.GetTable);
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
  GetAsync: async (personnelNumber) => {
    try {
      console.warn(
        "ADDRESS : ",
        AddressApiService.Personnel.GetByPersonnelNumber
      );
      let resultFromServer = await axios.get(
        AddressApiService.Personnel.GetByPersonnelNumber + personnelNumber
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("PersonnelApiService->GetAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },

  AddOrUpdateAsync: async (personnel) => {
    try {
      console.log("SEND DATA TO SERVER : ", personnel);
      var bodyFormData = new FormData();
      bodyFormData.append("personnelNumber", personnel.personnelNumber);
      if (personnel.personnelImage != null)
        bodyFormData.append("personnelImage", personnel.personnelImage);
      if (personnel.name != null) bodyFormData.append("name", personnel.name);
      if (personnel.family != null)
        bodyFormData.append("family", personnel.family);
      if (personnel.dateTimeOfStartWork != null)
        bodyFormData.append(
          "dateTimeOfStartWork",
          personnel.dateTimeOfStartWork
        );
      if (personnel.dateTimeOfEndWork != null)
        bodyFormData.append("dateTimeOfEndWork", personnel.dateTimeOfEndWork);
      if (personnel.isActive != null)
        bodyFormData.append("isActive", personnel.isActive === "1");
      if (personnel.isSpecial != null)
        bodyFormData.append("isSpecial", personnel.isSpecial === "1");
      if (personnel.dateTimeOfBirthDay != null)
        bodyFormData.append("dateTimeOfBirthDay", personnel.dateTimeOfBirthDay);
      if (personnel.locationOfBirth != null)
        bodyFormData.append("locationOfBirth", personnel.locationOfBirth);
      if (personnel.nameFather != null)
        bodyFormData.append("nameFather", personnel.nameFather);
      if (personnel.nationalId != null)
        bodyFormData.append("nationalId", personnel.nationalId);
      if (personnel.sex != null) bodyFormData.append("sex", personnel.sex);
      if (personnel.locationOfBirth != null)
        bodyFormData.append("locationOfBirth", personnel.locationOfBirth);
      if (personnel.serviceLocationPhone != null)
        bodyFormData.append(
          "serviceLocationPhone",
          personnel.serviceLocationPhone
        );
      if (personnel.PersonnelAssignToDevices != null)
        personnel.PersonnelAssignToDevices.forEach(function (value) {
          bodyFormData.append("PersonnelAssignToDevices[]", value); // you have to add array symbol after the key name
        });
      if (personnel.PersonnelUnAssignFromDevices != null)
        personnel.PersonnelUnAssignFromDevices.forEach(function (value) {
          bodyFormData.append("PersonnelUnAssignFromDevices[]", value); // you have to add array symbol after the key name
        });

      let resultFromServer = await axios.post(
        AddressApiService.Personnel.AddOrUpdate,
        bodyFormData,
        { "Content-Type": "multipart/form-data" }
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("PersonnelApiService->AddOrUpdateAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
  DeleteByIdAsync: async (personnelId) => {
    try {
      console.log(AddressApiService.Personnel.Delete + personnelId);
      let resultFromServer = await axios.post(
        AddressApiService.Personnel.Delete + personnelId
      );
      return resultFromServer.data;
    } catch (error) {
      console.error("PersonnelApiService->DeleteByIdAsync", error);
      return {
        isSuccess: false,
        messages: ["خطای اتصال به سرور"],
      };
    }
  },
};

export default PersonnelApiService;
