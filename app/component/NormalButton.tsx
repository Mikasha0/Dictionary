import { NormalButtonTypes } from "~/types/normalButton.types";

export default function NormalButton({btnName, type,bgColor, textColor, ...inputProps}:NormalButtonTypes) {
  return (
    <button
      className={`${bgColor} rounded-lg ${textColor} mr-4`}
      style={{ padding: "0.2rem 1.4rem 0.4rem" }}
      type={type}
      {...inputProps}
    >
      {btnName}
    </button>
  );
}
