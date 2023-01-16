import React from "react";
import { useNavigate } from "react-router-dom";
import AuthService from "../../../services/AuthService";

function NavbarCom() {
  const navigate = useNavigate();
  return (
    <>
      <nav
        className="layout-navbar container-xxl navbar navbar-expand-xl navbar-detached align-items-center bg-navbar-theme"
        id="layout-navbar"
      >
        <div className="layout-menu-toggle navbar-nav align-items-xl-center me-3 me-xl-0 d-xl-none">
          <a className="nav-item nav-link px-0 me-xl-4" href="#">
            <i className="bx bx-menu bx-sm"></i>
          </a>
        </div>

        <div
          className="navbar-nav-right d-flex align-items-center"
          id="navbar-collapse"
        >
          <div className="navbar-nav align-items-center">
            <div className="nav-item d-flex align-items-center">
              <i className="bx bx-search fs-4 lh-0"></i>
              <input
                type="text"
                className="form-control border-0 shadow-none"
                placeholder="Search..."
                aria-label="Search..."
              />
            </div>
          </div>
          <ul className="navbar-nav flex-row align-items-center me-auto">
            <li className="nav-item lh-1 ms-3">
              {/* <strong className="text-primary">مهندس خادمی</strong> */}
            </li>
            <li className="nav-item navbar-dropdown dropdown-user dropdown">
              <a
                className="nav-link dropdown-toggle hide-arrow"
                href="#"
                data-bs-toggle="dropdown"
              >
                <div className="avatar avatar-online">
                  <img
                    src="../assets/img/avatars/1.png"
                    className="w-px-40 h-auto rounded-circle"
                  />
                </div>
              </a>
              <ul className="dropdown-menu dropdown-menu-start">
                <li>
                  <a className="dropdown-item" href="#">
                    <div className="d-flex">
                      <div className="flex-shrink-0 ms-3">
                        <div className="avatar avatar-online">
                          <img
                            src="../assets/img/avatars/1.png"
                            className="w-px-40 h-auto rounded-circle"
                          />
                        </div>
                      </div>
                      <div className="flex-grow-1">
                        <span className="fw-semibold d-block">
                          محمد تقی خادمی
                        </span>
                        <small className="text-muted d-block text-center">
                          Admin
                        </small>
                      </div>
                    </div>
                  </a>
                </li>
                <li>
                  <div className="dropdown-divider"></div>
                </li>
                <li>
                  <a className="dropdown-item text-end" href="#">
                    <i className="bx bx-user ms-2"></i>
                    <span className="align-middle">پروفایل</span>
                  </a>
                </li>
                <li>
                  <a className="dropdown-item text-end" href="#">
                    <i className="bx bx-cog ms-2"></i>
                    <span className="align-middle">تنظیمات</span>
                  </a>
                </li>
                {/* <li>
                  <a className="dropdown-item text-end" href="#">
                    <span className="d-flex align-items-center align-middle">
                      <i className="flex-shrink-0 bx bx-credit-card ms-2"></i>
                      <span className="ms-1">Billing</span>
                      <span className="flex-shrink-0 badge badge-center rounded-pill bg-danger w-px-20 h-px-20">
                        4
                      </span>
                    </span>
                  </a>
                </li> */}
                <li>
                  <div className="dropdown-divider text-end"></div>
                </li>
                <li>
                  <span
                    className="dropdown-item text-end"
                    onClick={(e) => {
                      AuthService.LogOut();
                      navigate("/login");
                    }}
                  >
                    <i className="bx bx-power-off ms-2"></i>
                    <span className="align-middle">خروج</span>
                  </span>
                </li>
              </ul>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
}

export default NavbarCom;
