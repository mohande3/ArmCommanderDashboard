import React, { useEffect, useState } from "react";
import * as signalR from "@microsoft/signalr";
import AddressApiService from "../../../../services/apis/AddressApiService";

function TimeLogSignalRTableCom({ onHandleNewTimeLog }) {
  const [connection, setConnection] = useState(null);
  useEffect(() => {
    const connect = new signalR.HubConnectionBuilder()
      .withUrl(AddressApiService.TimeLog.HubTimeLogAddress)
      .withAutomaticReconnect()
      .build();
    setConnection(connect);
  }, []);
  useEffect(() => {
    if (connection) {
      connection
        .start()
        .then(() => {
          connection.on(
            AddressApiService.TimeLog.HubTimeLogAddress_Event,
            (newTimeLog) => {
              if (onHandleNewTimeLog) {
                onHandleNewTimeLog(newTimeLog);
              } else {
                console.warn("Not exist onHandleNewTimeLog");
              }
            }
          );
        })
        .catch((error) => console.log(error));
    }
    
    return () => {
      Dispose(); 
    }
  }, [connection]);
  const Dispose = () => {
    if (connection) {
      console.error('DISCONNECTED')
      connection.stop();
      setConnection(null);
    }
  }
  return <></>;
}

export default TimeLogSignalRTableCom;
