import { Icon } from "@iconify/react";
import "./Tooltip.css";

export const Tooltip = ({ title, ...props }) => {
  return (
    <div {...props} className={`tooltip_wrapper ${props.className}`}>
      <span>{title}</span>
      <Icon icon="bxs:up-arrow" />
    </div>
  );
};
