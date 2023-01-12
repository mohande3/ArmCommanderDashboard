import React from "react";
import { Link } from "react-router-dom";

function SidebarCom() {
  return (
    <>
      <aside
        id="layout-menu"
        className="layout-menu menu-vertical menu bg-menu-theme"
      >
        <div className="app-brand demo">
          <div className="w-100 d-flex justify-content-center">
            <a href="index.html" className="app-brand-link">
              <span className="app-brand-logo demo"></span>
              <span className="app-brand-text demo menu-text fw-bolder">
                <strong className="text-uppercase">
                  <span className="text-danger">A</span>
                  <span className="text-primary">RM</span>
                </strong>
              </span>
            </a>
          </div>

          <a
            href="#"
            className="layout-menu-toggle menu-link text-large ms-auto d-block d-xl-none"
          >
            <i className="bx bx-chevron-left bx-sm align-middle"></i>
          </a>
        </div>

        <div className="menu-inner-shadow"></div>

        <ul className="menu-inner py-1">
          <li className="menu-item active">
            <a href="index.html" className="menu-link">
              <i className="menu-icon tf-icons bx bx-home-circle"></i>
              <div data-i18n="Analytics">داشبورد</div>
            </a>
          </li>
          {/* <li className="menu-header small text-uppercase">
            <span className="menu-header-text">مدیریت کاربران</span>
          </li> */}
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="User interface">مدیریت کاربران</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <Link to="/users" className="menu-link">
                  <div data-i18n="Without menu">کاربران</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/personnel" className="menu-link">
                  <div data-i18n="Without menu">پرسنل</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/personnel/add" className="menu-link">
                  <div data-i18n="Without menu">اضافه کردن پرسنل</div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="User interface">مدیریت ترددها</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <Link to="/timelogs/monitoring" className="menu-link">
                  <div data-i18n="Without menu">مانیتورینگ</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/timeLogs" className="menu-link">
                  <div data-i18n="Without menu">گزارش ترددها</div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="User interface">مدیریت سخت افزار</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <Link to="/devices" className="menu-link">
                  <div data-i18n="Without menu">دستگاه ها</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/gates" className="menu-link">
                  <div data-i18n="Without menu">گیت ها</div>
                </Link>
              </li>
            </ul>
          </li>
          <li className="menu-item">
            <a href="#" className="menu-link menu-toggle">
              <i className="menu-icon tf-icons bx bx-box"></i>
              <div data-i18n="User interface">مدیریت ناوگان خودرویی</div>
            </a>
            <ul className="menu-sub">
              <li className="menu-item">
                <Link to="/tracking/stations" className="menu-link">
                  <div data-i18n="Without menu">ایستگاه ها</div>
                </Link>
              </li>
              <li className="menu-item">
                <Link to="/tracking/services" className="menu-link">
                  <div data-i18n="Without menu">سرویس ها</div>
                </Link>
              </li>
            </ul>
          </li>
        </ul>
      </aside>
    </>
  );
}

export default SidebarCom;
