import React, { useEffect, useState } from "react";
import { Card } from "../../../Basic/card/Card";
import Table from "../../../Basic/table/Table";
import PersonnelApiService from "../../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import {
  InputText,
  Label,
  ShowDateFromUnix,
} from "../../../Basic/formControlls/FormControlls";
import { useNavigate } from "react-router-dom";
import Modal, { ModalDelete, ModalShowBtn } from "../../../Basic/modal/Modal";
import TrackingTripApiService from "../../../../services/apis/TrackingTripApiService";
import { Col, Row } from "../../../Basic/containers/Containers";
function TripTableCom() {
  return <div>TripTableCom</div>;
}

export default TripTableCom;
