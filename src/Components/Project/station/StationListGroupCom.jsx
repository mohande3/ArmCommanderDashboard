import React, { useEffect, useState } from "react";
import {
  InputCheckBox,
  InputListCheckGroup,
} from "../../Basic/formControlls/FormControlls";
import StationApiService from "../../../services/apis/StationApiService";
import { toast } from "react-hot-toast";

function StationListGroupCom({
  className = "",
  stationCheckeds = [],
  onHandleChangeValue,
}) {
  const [stations, setstations] = useState(null);
  const HandleChangeValue = (stationCode, isChecked) => {
    if (!onHandleChangeValue) {
      console.warn(`onHandleChangeValue is not exist in StationListGroupCom`);
      return;
    }
    onHandleChangeValue(stationCode, isChecked);
  };
  const LoadData = async () => {
    setstations(null);
      let resultFromServer = await StationApiService.GetsAsync();
      console.log('STATION : ',resultFromServer);
    if (resultFromServer.isSuccess) {
      let data = resultFromServer.result.map((dev, index) => {
        let findResult = stationCheckeds.find((sr) => sr === dev.code);
        return {
          name: dev.name,
          value: dev.code,
        };
      });
        console.log(data);
      setstations([...data]);
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  };
  const ChangeDataSelected = () => {
    // if (stations === null) return;
    // let data = [...stations];
    // setstations(null);
    // .map((dev, index) => {
    //    let findResult = stationCheckeds.find((sr) => sr === dev.serialNumber);
    //    return {
    //      name: dev.name,
    //      value: dev.value,
    //      isChecked: findResult === undefined ? 0 : 1,
    //    };
    //  });
    //  setstations([...data]);
  };
  useEffect(() => {
    LoadData();
  }, []);
  useEffect(() => {
    ChangeDataSelected();
  }, [stationCheckeds]);
  return (
    <div className={className}>
      <InputListCheckGroup
        rows={stations}
        valueSelected={stationCheckeds}
        onHandleChangeValue={HandleChangeValue}
      />
    </div>
  );
}

export default StationListGroupCom;
