import React from "react";
import { Field, ErrorMessage } from "formik";
import styled from "styled-components";

type TTextField = {
  label: string;
  name: string;
  type?: "text" | "number";
};

const FieldWrapper = styled.div`
  margin: 10px;
`;

const Label = styled.label`
  margin-right: 10px;
`;

const ErrorText = styled.div`
  color: red;
`;

const TextField: React.FC<TTextField> = ({ label, name, type = "text" }) => {
  return (
    <FieldWrapper>
      <Label htmlFor={name}>{label}</Label>
      <Field name={name} type={type} />
      <ErrorText>
        <ErrorMessage name={name} />
      </ErrorText>
    </FieldWrapper>
  );
};

export default TextField;
