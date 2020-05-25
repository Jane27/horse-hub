import React from "react";
import styled from "styled-components";
import get from "lodash/get";

const Row = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`;

const Cell = styled.div`
  display: flex;
  height: 35px;
  background-color: white;
  color: black;
  font-size: 14px;
  border: 1px solid black;
  width: 80%;
`;
export const Text = styled.p`
  margin: auto;
  text-align: center;
`;

Text.displayName = "value";


export type TComparison = {
  fields: { label: string; path: string }[];
  items: object[];
};

const ComparisonTable: React.FC<TComparison> = ({ fields, items }) => {

  console.log(fields)
  return (
    <div>
      {fields.map(({ label, path }, idx) => {
        const values = items.map((item, idx) => (
          <Cell key={idx}>
            <Text>{get(item, path, "")}</Text>
          </Cell>
        ));
        return (
          <Row key={idx}>
            <Cell>
              <Text>{label}</Text>
            </Cell>
            {values}
          </Row>
        );
      })}
    </div>
  );
};

export default ComparisonTable;
