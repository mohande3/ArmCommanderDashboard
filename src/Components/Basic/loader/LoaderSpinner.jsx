import React from "react";

function LoaderSpinner({ size = "" }) {
  return (
    <div class={`spinner-border ${size} text-secondary`} role="status">
      <span class="visually-hidden">Loading...</span>
    </div>
  );
}

const LoaderSpinnerSmall = () => {
  return <LoaderSpinner size="spinner-border-sm" />;
};

const LoaderSpinnerMedium = () => {
  return <LoaderSpinner />;
};

const LoaderSpinnerLarge = () => {
  return <LoaderSpinner size="spinner-border-lg" />;
};

export default {
  LoaderSpinner,
  LoaderSpinnerSmall,
  LoaderSpinnerMedium,
  LoaderSpinnerLarge,
};
