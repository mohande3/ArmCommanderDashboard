import React, { useEffect, useState } from "react";
import { Card } from "../../Basic/card/Card";
import Table from "../../Basic/table/Table";
import PersonnelApiService from "../../../services/apis/PersonnelApiService";
import { toast } from "react-hot-toast";
import { DateObject } from "react-multi-date-picker";
import {
  InputText,
  Label,
  ShowDateFromUnix,
} from "../../Basic/formControlls/FormControlls";
import { useNavigate } from "react-router-dom";
import Modal, { ModalDelete, ModalShowBtn } from "../../Basic/modal/Modal";
import UserApiService from "../../../services/apis/UserApiService";
import { Col, Row } from "../../Basic/containers/Containers";
import UserAddOrEditModalCom from "./private/UserAddOrEditModalCom";
function UserTableCom() {
  const [users, setusers] = useState(null);
  const [userIdForDelete, setuserIdForDelete] = useState(null);
  const [user, setuser] = useState({
    userName: "",
    password: "",
    confirmPassword: "",
    email: "",
    confirmEmail: "",
  });
  const columns = [
    {
      title: "نام کاربری",
      property: "userName",
    },
    {
      title: "شماره تلفن یک",
      property: "selfPhone1",
    },
    {
      title: "شماره تلفن دو",
      property: "selfPhone1",
    },
    {
      title: "",
      property: "",
      render: (row) => {
        return (
          <td>
            <ModalShowBtn
              className="btn-sm btn-warning"
              modalId="ModalAddEdituser"
              text="EDI"
              onHandleClick={(e) => {
                setuser({
                  userName: row["userName"],
                  password: row["password"],
                  confirmPassword: row["confirmPassword"],
                  email: row["email"],
                  confirmEmail: row["confirmEmail"],
                });
              }}
            />
            <ModalShowBtn
              className="btn-sm btn-danger me-2"
              text="DEL"
              modalId="modalDeleteuser"
              onHandleClick={(e) => setuserIdForDelete(row["userName"])}
            />
          </td>
        );
      },
    },
  ];
  const HandleAddOrUpdate = async () => {
    let resultFromServer = await UserApiService.AddOrUpdate(user);
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      toast.success("اضافه کردن کاربر به درستی انجام شد .");
      await LoadData();
    } else {
      toast.error(resultFromServer.messages[0]);
    }
  };
  const HandleConfirmDelete = async () => {
    // if (!userIdForDelete) {
    //   toast.warn("لطفا یک دستگاه را برای حذف انتخاب کنید . ");
    //   return;
    // }
    // let resultFromServer = await userApiService.DeleteBySerialNumber(
    //   userIdForDelete
    // );
    // if (resultFromServer.isSuccess) {
    //   toast.success("دستگاه به درستی حذف شد . ");
    //   await LoadData();
    // } else {
    //   toast.error(resultFromServer.messages[0]);
    //   console.error(resultFromServer);
    // }
  };
  const HandleSetValue = (property, value) => {
    let tempuser = user;
    tempuser[property] = value;
    setuser({ ...tempuser });
  };
  const LoadData = async () => {
    let resultFromServer = await UserApiService.GetTableAsync();
    if (resultFromServer.isSuccess) {
      setusers(resultFromServer.result.results);
    } else {
      toast.error(resultFromServer.messages[0]);
    }
    console.log(resultFromServer);
  };
  useEffect(() => {
    LoadData();
  }, []);
  return (
    <>
      <ModalDelete
        id="modalDeleteuser"
        onHandleClickConfirm={HandleConfirmDelete}
      />
      <UserAddOrEditModalCom
        user={user}
        onHandleSetValue={HandleSetValue}
        onHandleClickConfirm={HandleAddOrUpdate}
      />
      <Card
        titleElement={
          <>
            <h5>مدیریت کاربران سیستم و سطح دسترسی آنها</h5>
            <div>
              <ModalShowBtn
                className="btn-sm btn-primary"
                id="btnShowModal"
                modalId="ModalAddEditUser"
                text="اضافه کردن کاربر جدید"
              />
              <ModalShowBtn
                className="btn-sm btn-warning me-2"
                modalId="ModalAddUserFromPersonnel"
                text="اضافه کردن کاربر از پرسنل"
              />
            </div>
          </>
        }
      >
        <Table columns={columns} type="primary-2" rows={users} />
      </Card>
    </>
  );
}

export default UserTableCom;
