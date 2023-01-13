import React, { useEffect, useState } from "react";
import {
  InputCheckBox,
  InputListCheckGroup,
} from "../../Basic/formControlls/FormControlls";
import TrackingServiceApiService from "../../../services/apis/TrackingServiceApiService";
import { toast } from "react-hot-toast";

function TrackingServiceListGroupCom({
  className = "",
  servicesSelected = [],
  onHandleChangeValue,
}) {
  const [services, setservices] = useState(null);
  const HandleChangeValue = (code, isSelected) => {
    if (!onHandleChangeValue) {
      console.warn(`onHandleChangeValue is not exist in DeviceListGroupCom`);
      return;
    }
    onHandleChangeValue(code, isSelected);
  };
  const LoadData = async () => {
    setservices(null);
    let resultFromServer = await TrackingServiceApiService.GetsAsync();
    console.log('RESULT FROM SERVICE',resultFromServer)
    if (resultFromServer.isSuccess) {
      let data = resultFromServer.result.map((dev, index) => {
        let findResult = servicesSelected.find((sr) => sr === dev.code);
        return {
          name: dev.name,
          value: dev.code,
        };
      });
      setservices([...data]);
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  };
  const ChangeDataSelected = () => {
    // if (services === null) return;
    // let data = [...services];
    // setservices(null);
    // .map((dev, index) => {
    //    let findResult = deviceCheckeds.find((sr) => sr === dev.serialNumber);
    //    return {
    //      name: dev.name,
    //      value: dev.value,
    //      isChecked: findResult === undefined ? 0 : 1,
    //    };
    //  });
    //  setservices([...data]);
  };
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    ChangeDataSelected();
  }, [servicesSelected]);
  return (
    <div className={className}>
      <InputListCheckGroup
        rows={services}
        valueSelected={servicesSelected}
        onHandleChangeValue={HandleChangeValue}
      />
    </div>
  );
}
export default TrackingServiceListGroupCom;
