import React from "react";

function NotFound() {
  return (
    <div className="w-100 d-flex justify-content-center ">
      <div class="misc-wrapper mt-5">
        <h2 class="mb-2 mx-2">صفحه درخواستی پیدا نشد :(</h2>
        <p class="mb-4 mx-2">
          اوووه! 😖 این صفحه ای که درخواست آنرا دارید وجود ندارد .
        </p>
        <a href="/" class="btn btn-primary">
          برگشت به داشبورد
        </a>
        <div class="mt-3">
          <img
            src="../assets/img/illustrations/page-misc-error-light.png"
            alt="page-misc-error-light"
            width="500"
            class="img-fluid"
            data-app-dark-img="illustrations/page-misc-error-dark.png"
            data-app-light-img="illustrations/page-misc-error-light.png"
          />
        </div>
      </div>
    </div>
  );
}

export default NotFound;
