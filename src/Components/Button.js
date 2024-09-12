import React from "react";
import PropTypes from "prop-types";
import classnames from "classnames";

function Button({
  children,
  primary,
  secondary,
  success,
  warning,
  danger,
  outline,
  rounded,
  ...rest
}) {
  const classes = classnames(rest.className, "px-3 py-2 border", {
    "border-blue-500 bg-blue-500 text-white": primary,
    "border-red-500 bg-red-500 text-white": danger,
    "border-yellow-500 bg-yellow-500 text-black": warning,
    "border-green-500 bg-green-500 text-white": success,
    "border-gray-900 bg-gray-900 text-white": secondary,
    "border-black-500 bg-white text-black": outline,
    "rounded-full": rounded,
    "bg-white": outline,
    "text-blue-500": outline && primary,
  });
  return (
    <div>
      <button {...rest} className={classes}>
        {children}
      </button>
    </div>
  );
}
Button.propTypes = {
  checkVariationValue: ({ primary, secondary, success, warning, danger }) => {
    const count =
      Number(!!primary) +
      Number(!!secondary) +
      Number(!!success) +
      Number(!!warning) +
      Number(!!danger);

    if (count > 1) {
      return new Error("invalid value");
    }
  },
};

export default Button;
