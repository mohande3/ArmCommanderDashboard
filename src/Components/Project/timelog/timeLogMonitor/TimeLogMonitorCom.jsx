import React, { useEffect, useRef } from "react";
import { Col, Row } from "../../../Basic/containers/Containers";
import TimeLogMonitorCardCom from "./TimeLogMonitorCardCom";

function TimeLogMonitorCom() {
  const rows = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  const counter = useRef();
  const GetPersonnelImage = () => {
    console.log("GetPersonnelImage ", counter.current);
    if (isNaN(counter.current)) counter.current = 0;
    if (counter.current >= 4) counter.current = 0;
    counter.current += 1;
    if (counter.current === 1) return "../../assets/img/avatars/1.png";
    if (counter.current === 2) return "../../assets/img/avatars/2.png";
    if (counter.current === 3) return "../../assets/img/avatars/3.png";
    if (counter.current === 4) return "../../assets/img/avatars/4.png";
  };
  useEffect(() => {
    counter.current = 0;
    console.log("CUTERN ", counter.current);
  }, []);
  return (
    <>
      <Row>
        {rows.map((row, index) => (
          <Col col="12 col-sm-6 col-md-3 mb-2">
            <TimeLogMonitorCardCom
              key={index}
              className=""
              personnelNumber={row}
              personnelImage={GetPersonnelImage()}
            />
          </Col>
        ))}
      </Row>
    </>
  );
}

export default TimeLogMonitorCom;
