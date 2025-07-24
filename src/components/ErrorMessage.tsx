import React from "react";

const ErrorMessage = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div style={{ color: "#d9534f", fontWeight: 700 }}>{children}</div>
    </>
  );
};

export default ErrorMessage;
