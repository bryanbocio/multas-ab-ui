import React from "react";

interface Props {
  error?: string;
}

const Error: React.FC<Props> = ({ error }) => {
  return <div>{error}</div>;
};

export default Error;
