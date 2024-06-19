import React from "react";
import Container from "components/custom/Container";

const Section = ({ id, title, children }) => {
  return (
    <Container>
      <h2 className="mb-4 text-2xl font-bold">{title}</h2>
      <hr />
      <div className="mt-4">{children}</div>
    </Container>
  );
};

export default Section;
