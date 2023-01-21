import React, { useEffect, useState } from "react";
import {
  InputCheckBox,
  InputListCheckGroup,
} from "../../Basic/formControlls/FormControlls";
import DeviceApiService from "../../../services/apis/DevicesApiService";
import { toast } from "react-hot-toast";

function DeviceListGroupCom({
  className = "",
  deviceCheckeds = [],
  onHandleChangeValue,
}) {
  const [devices, setDevices] = useState(null);
  const HandleChangeValue = (serialNumber, isChecked) => {
    if (!onHandleChangeValue) {
      console.warn(`onHandleChangeValue is not exist in DeviceListGroupCom`);
      return;
    }
    onHandleChangeValue(serialNumber, isChecked);
  };
  const LoadData = async () => {
    setDevices(null);
    let resultFromServer = await DeviceApiService.GetsAsync();
    if (resultFromServer.isSuccess) {
      let data = resultFromServer.result.map((dev, index) => {
        let findResult = deviceCheckeds.find((sr) => sr === dev.serialNumber);
        return {
          name: dev.name,
          value: dev.serialNumber,
        };
      });
      setDevices([...data]);
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  };
  const ChangeDataSelected = () => {
    // if (devices === null) return;
    // let data = [...devices];
    // setDevices(null);
    // .map((dev, index) => {
    //    let findResult = deviceCheckeds.find((sr) => sr === dev.serialNumber);
    //    return {
    //      name: dev.name,
    //      value: dev.value,
    //      isChecked: findResult === undefined ? 0 : 1,
    //    };
    //  });
    //  setDevices([...data]);
  };
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    ChangeDataSelected();
  }, [deviceCheckeds]);
  return (
    <div className={className}>
      <InputListCheckGroup
        rows={devices}
        valueSelected={deviceCheckeds}
        onHandleChangeValue={HandleChangeValue}
      />
    </div>
  );
}

export default DeviceListGroupCom;
