import React, { InputHTMLAttributes } from "react";
import "./Checkbox.scss";

type CheckboxProps = InputHTMLAttributes<HTMLInputElement> & {
  id?: number;
  label?: string;
};

const Checkbox = (props: CheckboxProps) => {
  const { id, label, ...rest } = props;
  return (
    <label htmlFor={id} className={"checkbox"} key={id}>
      <input type={"checkbox"} id={id} {...rest} />
      {label && <div className="checkbox-label">{label}</div>}
    </label>
  );
};

export default Checkbox;
