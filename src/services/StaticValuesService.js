class StaticValuesService {
  Sex = [
    { name: "مرد", value: "0" },
    { name: "زن", value: "1" },
  ];
  Educations = [
    { name: "بی سواد", value: "0" },
    { name: "سیکل", value: "1" },
    { name: "دیپلم", value: "2" },
    { name: "فوق دیپلم", value: "3" },
    { name: "لیسانس", value: "4" },
    { name: "فوق لیسانس", value: "5" },
    { name: "دکتری", value: "6" },
  ];
  TypeOfDevices = [
    { name: "نامشخص", value: "0" },
    { name: "دبلیو سون پلاس", value: "1" },
  ];
  TypeOfTimeLog = [
    { name: "نامشخص", value: "-1" },
    { name: "معمولی", value: "0" },
    { name: "مرخصی", value: "1" },
    { name: "ماموریت", value: "2" },
    { name: "تاخیر سرویس", value: "3" },
  ];
  GetTagTypeOfTimeLog = (typeOfTimeLog) => {
    if (typeOfTimeLog==-1)
      return <span className="badge bg-danger">نامشخص</span>;
    if (typeOfTimeLog == 0)
      return <span className="badge bg-info">معمولی</span>;
    if (typeOfTimeLog == 1)
      return <span className="badge bg-primary">مرخصی</span>;
    if (typeOfTimeLog == 2)
      return <span className="badge bg-warning">ماموریت</span>;
    if (typeOfTimeLog == 3)
      return <span className="badge bg-success">تاخیر سرویس</span>;
  };
  TypeOfVerifyTimeLog = [
    { name: "نامشخص", value: "-1" },
    { name: "اثرانگشت", value: "0" },
    { name: "فیس", value: "1" },
    { name: "کارت", value: "2" },
    { name: "پسورد", value: "3" },
  ];
  GetTagTypeOfVerifyTimeLog = (typeOfVeridyTimeLog) => {
    let find = this.TypeOfVerifyTimeLog.find((x) => x.value == typeOfVeridyTimeLog);
    if (find === undefined)
      return <span className="badge bg-danger">نامشخص</span>;
    if (typeOfVeridyTimeLog == 0)
      return <span className="badge bg-info">اثرانگشت</span>;
    if (typeOfVeridyTimeLog == 1)
      return <span className="badge bg-primary">فیس</span>;
    if (typeOfVeridyTimeLog == 2)
      return <span className="badge bg-warning">کارت</span>;
    if (typeOfVeridyTimeLog == 3)
      return <span className="badge bg-success">پسورد</span>;
  };
}

export default new StaticValuesService();
