import React from 'react'

function Widget({className=''}) {
  return (
    <div class={"small-box "+className}>
      <div class="inner">
        <h3>150</h3>

        <p>New Orders</p>
      </div>
      <div class="icon">
        <i class="fas fa-shopping-cart"></i>
      </div>
      <a href="#" class="small-box-footer">
        More info <i class="fas fa-arrow-circle-right"></i>
      </a>
    </div>
  );
}

export default Widget