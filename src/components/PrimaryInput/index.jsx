import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";

const PrimaryInput = ({
  type,
  name,
  id,
  value,
  className,
  onChange,
  debounceTime,
  ...props
}) => {
  const [handleValue, setHandleValue] = useState(value);
  const [isInit, setIsInit] = useState(true);

  const onChangeValue = (e) => {
    setHandleValue(e.target.value);
  };

  useEffect(() => {
    let handler;
    if (isInit) {
      setIsInit(false);
    } else {
      handler = setTimeout(() => {
        onChange();
      }, debounceTime);
    }

    return () => {
      clearTimeout(handler);
    };
  }, [handleValue]);

  return (
    <input
      type={type}
      name={name}
      id={id}
      className={className}
      value={handleValue}
      onChange={onChangeValue}
      {...props}
    />
  );
};

export default PrimaryInput;

PrimaryInput.propTypes = {
  type: PropTypes.string,
  name: PropTypes.string,
  id: PropTypes.string,
  value: PropTypes.string,
  className: PropTypes.string,
  onChange: PropTypes.func,
  debounceTime: PropTypes.number,
};

PrimaryInput.defaultProps = {
  type: "text",
  name: "",
  id: "",
  value: "",
  className: "",
  onChange: () => {},
  debounceTime: 0,
};
