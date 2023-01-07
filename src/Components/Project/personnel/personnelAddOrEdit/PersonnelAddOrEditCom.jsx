import React from "react";
import { Card } from "../../../Basic/card/Card";

function PersonnelAddOrEditCom() {
  return (
    <Card title="اضافه کردن پرسنل جدید">
      <div class="nav-align-top mb-4">
        <ul class="nav nav-tabs nav-fill" role="tablist">
          <li class="nav-item">
            <button
              type="button"
              class="nav-link active"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-justified-home"
              aria-controls="navs-justified-home"
              aria-selected="true"
            >
              <i class="tf-icons bx bx-home"></i> Home
              <span class="badge rounded-pill badge-center h-px-20 w-px-20 bg-label-danger">
                3
              </span>
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="nav-link"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-justified-profile"
              aria-controls="navs-justified-profile"
              aria-selected="false"
            >
              <i class="tf-icons bx bx-user"></i> Profile
            </button>
          </li>
          <li class="nav-item">
            <button
              type="button"
              class="nav-link"
              role="tab"
              data-bs-toggle="tab"
              data-bs-target="#navs-justified-messages"
              aria-controls="navs-justified-messages"
              aria-selected="false"
            >
              <i class="tf-icons bx bx-message-square"></i> Messages
            </button>
          </li>
        </ul>
        <div class="tab-content">
          <div
            class="tab-pane fade show active"
            id="navs-justified-home"
            role="tabpanel"
          >
            <p>
              Icing pastry pudding oat cake. Lemon drops cotton candy caramels
              cake caramels sesame snaps powder. Bear claw candy topping.
            </p>
            <p class="mb-0">
              Tootsie roll fruitcake cookie. Dessert topping pie. Jujubes wafer
              carrot cake jelly. Bonbon jelly-o jelly-o ice cream jelly beans
              candy canes cake bonbon. Cookie jelly beans marshmallow jujubes
              sweet.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="navs-justified-profile"
            role="tabpanel"
          >
            <p>
              Donut dragée jelly pie halvah. Danish gingerbread bonbon cookie
              wafer candy oat cake ice cream. Gummies halvah tootsie roll muffin
              biscuit icing dessert gingerbread. Pastry ice cream cheesecake
              fruitcake.
            </p>
            <p class="mb-0">
              Jelly-o jelly beans icing pastry cake cake lemon drops. Muffin
              muffin pie tiramisu halvah cotton candy liquorice caramels.
            </p>
          </div>
          <div
            class="tab-pane fade"
            id="navs-justified-messages"
            role="tabpanel"
          >
            <p>
              Oat cake chupa chups dragée donut toffee. Sweet cotton candy jelly
              beans macaroon gummies cupcake gummi bears cake chocolate.
            </p>
            <p class="mb-0">
              Cake chocolate bar cotton candy apple pie tootsie roll ice cream
              apple pie brownie cake. Sweet roll icing sesame snaps caramels
              danish toffee. Brownie biscuit dessert dessert. Pudding jelly
              jelly-o tart brownie jelly.
            </p>
          </div>
          <form id="formAccountDeactivation" onsubmit="return false">
            <div className="form-check mb-3">
              <input
                className="form-check-input"
                type="checkbox"
                name="accountActivation"
                id="accountActivation"
              />
              <label className="form-check-label" for="accountActivation">
                I confirm my account deactivation
              </label>
            </div>
            <button type="submit" className="btn btn-danger deactivate-account">
              Deactivate Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default PersonnelAddOrEditCom;
