import React from "react";
import { Button } from "@mui/material";

interface ButtonProps {
  onClick: () => void;
  children: React.ReactNode;
}

const CustomButton: React.FC<ButtonProps> = ({ onClick, children }) => {
  return <Button variant="contained" onClick={onClick}>{children}</Button>;
};

export default CustomButton;
