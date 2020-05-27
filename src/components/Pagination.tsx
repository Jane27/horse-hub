import React, { useState } from "react";
import styled from "styled-components";

type TPagination = {
  total: number;
  initialPage: number;
  pageSize: number;
  onPageChange?: (index: number) => void;
};

const Container = styled.div`
  display: flex;
  flex-direction: row;
`;

export const Button = styled.button<{ active?: boolean }>`
  color: ${(props) => (props.active ? "#fff" : "#000")};
  background-color: ${(props) => (props.active ? "blue" : "#fff")};
`;

Button.displayName = "NumberButton";

const Pagination: React.FC<TPagination> = ({
  total: itemsNo,
  initialPage,
  pageSize,
  onPageChange,
}) => {
  const [currPage, setCurrPage] = useState<number>(initialPage);
  const totalPages = Math.ceil(itemsNo / pageSize);

  const setNextPage = (nextPage: number) => {
    setCurrPage(nextPage);
    onPageChange && onPageChange(nextPage);
  };
  const renderSerial = (total: number) => {
    const buttonGroup: any[] = [];

    for (let i = 0; i < total; i++) {
      buttonGroup.push(
        <Button key={i} active={i === currPage} onClick={() => setNextPage(i)}>
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
        onClick={() => setNextPage(currPage - 1)}
      >
        Previous
      </button>
      {renderSerial(totalPages)}
      <button
        disabled={currPage === totalPages - 1}
        onClick={() => setNextPage(currPage + 1)}
      >
        Next
      </button>
    </Container>
  );
};

export default Pagination;
