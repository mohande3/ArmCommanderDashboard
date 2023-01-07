import React from "react";

function LoaderSpinner({ size = "",className='' }) {
  return (
    <div class={`spinner-border ${size} text-secondary `+className} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

const LoaderSpinnerSmall = ({className=''}) => {
  return <LoaderSpinner size="spinner-border-sm" className={className} />;
};

const LoaderSpinnerMedium = ({className=''}) => {
  return <LoaderSpinner className={className} />;
};

const LoaderSpinnerLarge = ({className=''}) => {
  return <LoaderSpinner className={className} size="spinner-border-lg" />;
};

export {
  LoaderSpinner,
  LoaderSpinnerSmall,
  LoaderSpinnerMedium,
  LoaderSpinnerLarge,
};
