import React, { useState } from "react";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";
import {
  InputPassword,
  InputText,
  Label,
} from "../../Basic/formControlls/FormControlls";

function LoginCom() {
  const [user, setUser] = useState({
    userName: "",
    password: "",
    isRememberMe: false,
  });
  const navigate = useNavigate();
  
  const Login = async () => {
    let resultFromServer = await AuthService.LoginAsync(user);
    console.log(resultFromServer);
    if (resultFromServer.isSuccess) {
      navigate("/");
    } else {
      toast.error(resultFromServer.messages[0]);
      console.error(resultFromServer);
    }
  };
  return (
    <div className="d-flex justify-content-center w-100">
      <div className="authentication-wrapper authentication-basic container-p-y">
        <div className="authentication-inner">
          <div className="card mt-5">
            <div className="card-body px-5">
              <div className="app-brand justify-content-center">
                <a href="index.html" className="app-brand-link gap-2">
                  <span className="app-brand-logo demo"></span>
                  <span className="app-brand-text demo text-body fw-bolder">
                    <string className="text-danger text-uppercase">A</string>
                    <stron className="text-primary text-uppercase">RM</stron>
                  </span>
                </a>
              </div>
              <p className="mb-4 text-center">
                سیستم مدیریت سخت افزار شرکت کارادوهزار
              </p>

              <div>
                <div className="mb-3">
                  <Label htmlFor="password" text="نام کاربری : " />
                  <InputText
                    id="password"
                    placeHolder="نام کاربری"
                    value={user.userName}
                    onHandleChangeValue={(val) =>
                      setUser({
                        ...user,
                        userName: val,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <Label htmlFor="password" text="رمز عبور : " />
                  <InputPassword
                    id="password"
                    placeHolder="رمز عبور"
                    value={user.password}
                    onHandleChangeValue={(val) =>
                      setUser({
                        ...user,
                        password: val,
                      })
                    }
                  />
                </div>
                <div className="mb-3">
                  <button
                    className="btn btn-primary d-grid w-100"
                    type="button"
                    onClick={Login}
                  >
                    ورود
                  </button>
                </div>
              </div>

              <p className="text-center">
                <span>آیا رمز خود را فراموش کرده اید ؟</span>
                <span
                  className="text-primary cursor"
                  onClick={(e) =>
                    toast.success(
                      "این امکان در ورژن های بعدی اضافه خواهد شد . "
                    )
                  }
                >
                  {" "}
                  <span>ایجاد یک رمز جدید</span>
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LoginCom;
