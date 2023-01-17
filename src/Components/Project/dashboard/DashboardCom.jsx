import React from "react";
import { Col, Row } from "../../Basic/containers/Containers";
import { Card } from "../../Basic/card/Card";
import DeviceWidgetInfoCom from "../device/DeviceWidgetInfoCom";
import TimeLogWidgetInfoCom from "../timelog/TimeLogWidgetInfoCom";
import StationWidgetInfoCom from "../station/StationWidgetInfoCom";
import TrackingServiceWidgetInfoCom from "../trackingService/TrackingServiceWidgetInfoCom";
import FingerprintWidgetInfoCom from "../fingerprint/FingerprintWidgetInfoCom";
import WidgetProgressBox from "../../Basic/widget/WidgetProgressBox";
import FaceWidgetInfoBoxCom from "../face/FaceWidgetInfoBoxCom";
import PersonnelTotalInfoWidgetBoxInfoCom from "../personnel/widgets/PersonnelTotalInfoWidgetBoxInfoCom";
import PersonnelNearExpierWidgetBoxInfoCom from "../personnel/widgets/PersonnelNearExpierWidgetBoxInfoCom";

function DashboardCom() {
  return (
    <>
      <Row>
        <Col col="3 mb-1">
          <PersonnelTotalInfoWidgetBoxInfoCom />
        </Col>
        <Col col="2 mb-1">
          <DeviceWidgetInfoCom />
        </Col>
        <Col col="3 mb-1">
          <TimeLogWidgetInfoCom />
        </Col>
        <Col col="2 mb-1">
          <StationWidgetInfoCom />
        </Col>
        <Col col="2 mb-1">
          <TrackingServiceWidgetInfoCom />
        </Col>
        <Col col="3 mb-1">
          <FingerprintWidgetInfoCom />
        </Col>
        <Col col="3 mb-1">
          <FaceWidgetInfoBoxCom />
        </Col>
        <Col col="4 mb-1">
          <PersonnelNearExpierWidgetBoxInfoCom />
        </Col>
      </Row>
      <Row className="mb-2">
        <Col col="4 mb-1">
          <WidgetProgressBox
            title="تعداد افرادی که اثرانگشت ندارند"
            subTitle="1500"
          />
        </Col>
        <Col col="4 mb-1">
          <WidgetProgressBox
            className="bg-success text-white"
            title="تعداد افرادی که فیس ندارند"
            subTitle="2"
          />
        </Col>
        <Col col="4 mb-1">
          <WidgetProgressBox
            className="bg-warning text-white"
            title="تعداد افرادی که کارت ندارند"
            subTitle="50"
          />
        </Col>
      </Row>
    </>
  );
}

export default DashboardCom;
