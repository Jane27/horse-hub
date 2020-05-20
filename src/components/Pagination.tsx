import React from "react";
import styled from "styled-components";

type TPagination = {
  total: number;
  currPage: number;
  setPageContent: (index: number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

const Button = styled.button<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: ${(props) => (props.active ? "blue" : "#fff")};
`;

const Pagination: React.FC<TPagination> = ({
  total: itemsNo,
  currPage,
  setPageContent,
}) => {
  const totalPages = Math.ceil(itemsNo / 10);
  const renderSerial = (total: number) => {
    const buttonGroup: any[] = [];

    for (let i = 0; i < total; i++) {
      buttonGroup.push(
        <Button active={i === currPage} onClick={() => setPageContent(i)}>
          {i + 1}
        </Button>
      );
    }
    return buttonGroup;
  };

  return (
    <Container>
      <button
        disabled={currPage === 0}
        onClick={() => setPageContent(currPage - 1)}
      >
        Previous
      </button>
      {renderSerial(totalPages)}
      <button
        disabled={currPage === totalPages - 1}
        onClick={() => setPageContent(currPage + 1)}
      >
        Next
      </button>
    </Container>
  );
};

export default Pagination;
