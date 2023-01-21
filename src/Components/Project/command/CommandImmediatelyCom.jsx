import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import { Col, InlineDisplay, Row } from "../../Basic/containers/Containers";
import Divider, {
  DividerDanger,
  DividerInfo,
  DividerPrimary,
} from "../../Basic/divider/Divider";
import Table from "../../Basic/table/Table";
import {
  InputCheckBox,
  InputRadioBox,
  InputSelecte,
  Label,
} from "../../Basic/formControlls/FormControlls";
import DeviceListGroupCom from "../device/DeviceListGroupCom";
import Modal, { ModalShowBtn } from "../../Basic/modal/Modal";
import PersonnelTableCom from "../personnel/PersonnelTableCom";
import CommandInputSelected from "./CommandInputSelected";
import CommandService from "../../../services/CommandService";
import { toast } from "react-hot-toast";
import CommandLogTableCom from "./private/CommandLogTableCom";

function CommandImmediatelyCom() {
  const [personnelSelectedForCommand, setPersonnelSelectedForCommand] =
    useState([]);
  const [commandUpdatePersonnelRequier, setCommandUpdatePersonnelRequier] =
    useState({
      typeOfUpdate: 0,
      isUpdateInfo: false,
      isUpdateImage: false,
      isUpdateFingerprint: false,
    });
  const [reloadCommandLogTable, setReloadCommandLogTable] = useState(false);
  const [commandSelected, setCommandSelected] = useState(1);
  const [deviceSelected, setDeviceSelected] = useState([]);

  const GetRequierDataForCommand = () => {
    if (commandSelected == 1) {
      return (
        <div className="alert alert-info">
          <strong>این دستور داده ای مورد نیاز ندارد</strong>
        </div>
      );
    }
    if (commandSelected == 17) {
      return (
        <div>
          <strong className="text-danger">
            لطفا مشخصات بروزرسانی رو مشخص کنید
          </strong>
          <br />
          <InputRadioBox
            text="بروزرسانی تمام پرسنل"
            id="allPersonnel"
            group="chooseGroupPersonnel"
            value={commandUpdatePersonnelRequier.typeOfUpdate == 0}
            onHandleChangeValue={(val) =>
              setCommandUpdatePersonnelRequier({
                ...commandUpdatePersonnelRequier,
                typeOfUpdate: 0,
              })
            }
          />
          <InputRadioBox
            text="بروزرسانی پرسنلی که تغییرات داشته اند"
            id="changedPersonnel"
            group="chooseGroupPersonnel"
            value={commandUpdatePersonnelRequier.typeOfUpdate == 1}
            onHandleChangeValue={(val) =>
              setCommandUpdatePersonnelRequier({
                ...commandUpdatePersonnelRequier,
                typeOfUpdate: 1,
              })
            }
          />
          <br />
          {/* <InputCheckBox
            className="text-black"
            text="بروز رسانی مشخصات پرسنلی"
            id="isUpdateInfo"
            value={commandUpdatePersonnelRequier.isUpdateInfo}
            onHandleChangeValue={(val) => {
              setCommandUpdatePersonnelRequier({
                ...commandUpdatePersonnelRequier,
                isUpdateInfo: val==1,
              });
            }}
          /> */}
          <InputCheckBox
            className="text-black"
            id="isUpdateImage"
            text="بروز رسانی تصاویر پرسنلی"
            value={commandUpdatePersonnelRequier.isUpdateImage}
            onHandleChangeValue={(val) =>
              setCommandUpdatePersonnelRequier({
                ...commandUpdatePersonnelRequier,
                isUpdateImage: val == 1,
              })
            }
          />
          <InputCheckBox
            className="text-black"
            id="isUpdateFingerprint"
            text="بروز رسانی اثرانگشت های پرسنلی"
            value={commandUpdatePersonnelRequier.isUpdateFingerprint}
            onHandleChangeValue={(val) =>
              setCommandUpdatePersonnelRequier({
                ...commandUpdatePersonnelRequier,
                isUpdateFingerprint: val == 1,
              })
            }
          />
          {/* <InputCheckBox
            className="text-black"
            text="بروز رسانی چهره های پرسنلی"
          /> */}
        </div>
      );
    } else {
      return (
        <>
          <div className="alert alert-danger">
            <strong>این دستور هنوز پیاده سازی نشده است . </strong>
          </div>
        </>
        // <>
        //   <ModalShowBtn
        //     className="btn btn-info"
        //     content={"انتخاب پرسنل"}
        //     id="btnShowPersonnelForSelect"
        //     modalId="showPersonnelForSelect"
        //   />
        //   <Modal id="showPersonnelForSelect" size="lg" modalFooter={<></>}>
        //     <PersonnelTableCom
        //       isShowFullDara={false}
        //       classNameTable=""
        //       Header=""
        //       isCheckable={true}
        //       isCheckAll={false}
        //       personnelNumbersSelected={personnelSelectedForCommand}
        //       onHandleCheckedOne={(type, value) => {
        //         let personnel = personnelSelectedForCommand;
        //         personnel = personnel.filter((x) => x !== value);
        //         if (type === "check") {
        //           personnel.push(value);
        //           setPersonnelSelectedForCommand([...personnel]);
        //         } else {
        //           setPersonnelSelectedForCommand([...personnel]);
        //         }
        //       }}
        //     />
        //   </Modal>
        // </>
      );
    }
  };
  const HandleAddNewCommand = async () => {
    let resultFromServer = undefined;
    if (commandSelected == 1) {
      resultFromServer =
        await CommandService.CreateCommandSetTimeWithServerTimeAsync(
          deviceSelected
        );
    }
    if (commandSelected == 17) {
      resultFromServer = await CommandService.CreateCommandUpdatePersonnelAsync(
        deviceSelected,
        commandUpdatePersonnelRequier
      );
    }

    if (resultFromServer.isSuccess) {
      toast.success("دستور با موفقیت در سیستم قرار گرفت");
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  return (
    <>
      <Row>
        <Col col="12">
          <Card title="مشخصات دستور">
            <Row>
              <Col col="6">
                <DividerInfo text={"انتخاب دستگاه"} />
                <DeviceListGroupCom
                  deviceCheckeds={deviceSelected}
                  onHandleChangeValue={(e, val) => {
                    console.log(e, val);
                    let devices = deviceSelected.filter((x) => x !== e);
                    if (val == 1) {
                      devices.push(e);
                      setDeviceSelected([...devices]);
                    } else {
                      setDeviceSelected([...devices]);
                    }
                  }}
                />
              </Col>
              <Col col="6">
                <DividerInfo text={"انتخاب دستور"} />
                <InlineDisplay>
                  <Label text="انتخاب دستور : " htmlFor="chooseCommand" />
                  <CommandInputSelected
                    onHandleSelectedACommand={(val) => setCommandSelected(val)}
                  />
                </InlineDisplay>
              </Col>
            </Row>
            <Row className="mt-2">
              <Col col="6">
                <DividerPrimary text={"داده های مورد نیاز دستور"} />
                {GetRequierDataForCommand()}
              </Col>
              <Col col="6"></Col>
            </Row>
            <Row className="mt-2">
              <Col col="8">
                <button
                  className="btn btn-info mt-2"
                  onClick={HandleAddNewCommand}
                >
                  افرودن دستور
                </button>
              </Col>
              <Col col="4">{/* <Card title="توضیحات دستور"></Card> */}</Col>
            </Row>
          </Card>
        </Col>
      </Row>
      <Row>
        <Col col="12">
          <Card
            titleElement={
              <>
                <h5>وضعیت دستورات</h5>
                <div>
                  <button
                    className="btn btn-sm btn-primary"
                    onClick={(e) =>
                      setReloadCommandLogTable(!reloadCommandLogTable)
                    }
                  >
                    REFRESH
                  </button>
                </div>
              </>
            }
            className="mt-2"
          >
            <CommandLogTableCom reLoad={reloadCommandLogTable} />
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default CommandImmediatelyCom;
