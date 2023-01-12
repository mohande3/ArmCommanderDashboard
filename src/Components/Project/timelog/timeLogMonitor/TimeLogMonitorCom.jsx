import React from 'react'
import TimeLogMonitorCardCom from "./TimeLogMonitorCardCom";

function TimeLogMonitorCom() {
 const rows = [1,2,3,4,5,6,7,8,9,10]
  return rows.map((row, index) => <TimeLogMonitorCardCom key={index} />);
}

export default TimeLogMonitorCom