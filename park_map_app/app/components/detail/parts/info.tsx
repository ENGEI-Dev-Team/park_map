import React from 'react'

type Props = {
  children: React.ReactNode;
};

const Info = ({ children }: Props) => {
  return (
    // <div style={{ padding: "1em", border: "1px solid #ccc" }}>
    <div>
      {children}
    </div>
  );
};


export default Info