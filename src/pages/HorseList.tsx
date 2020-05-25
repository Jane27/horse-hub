import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import styled from "styled-components";
import { IHorse } from "../types";
import { Pagination, ComparisonTable } from "../components";

import { store as HorseStore } from "../store/index";

const PageSize = 10;

const Container = styled.div`
  max-width: 500px;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`;

const Content = styled.div`
  min-height: 300px;
`;

const Entry = styled.div`
  text-align: left;
`;

const ToolBar = styled.div`
  margin: 20px;
`;

const Footer = styled.div`
  margin-top: 20px;
`;

const CompareBox = styled.div`
  width: 100%;
`;

const compareFields = [
  {
    label: "Name",
    path: "name",
  },
  {
    label: "Favourite Food",
    path: "profile.favouriteFood",
  },
  {
    label: "Height",
    path: "profile.physical.height",
  },
  {
    label: "Weight",
    path: "profile.physical.weight",
  },
];

const HorseList: React.FC<any> = (props) => {
  const [selectMode, setSelectMode] = useState<boolean>(false);
  const [page, setPage] = useState<number>(0);

  useEffect(() => {
    HorseStore.load();
  }, []);

  const pageContent = HorseStore.horses.slice(
    page * PageSize,
    page * PageSize + PageSize
  );

  const showCompareTable = HorseStore.selectedHorses?.length > 1;

  return (
    <Container>
      <h3>Horse List Page</h3>
      <ToolBar>
        <button
          onClick={() => {
            if (selectMode) HorseStore.clearAllSelection();
            setSelectMode(!selectMode);
          }}
        >
          {selectMode ? `Hide` : `Compare`}
        </button>
        <Link to={`/horse`}>
          <button>Add</button>
        </Link>
      </ToolBar>

      <Content>
        {pageContent?.map((horse: IHorse) => (
          <Entry key={horse.id}>
            {selectMode && (
              <input
                type="checkbox"
                checked={horse.isSelected}
                onChange={(e) => {
                  horse.id &&
                    HorseStore.toggleSelect(horse.id, e.target.checked);
                }}
              ></input>
            )}
            <Link to={`/horse?id=${horse.id}`}>{horse.name}</Link>
          </Entry>
        ))}
      </Content>
      <Footer>
        <Pagination
          total={HorseStore.horses?.length}
          initialPage={page}
          pageSize={PageSize}
          onPageChange={(index) => setPage(index)}
        />
      </Footer>
      {showCompareTable && (
        <CompareBox>
          <h3>Compare Result</h3>
          <ComparisonTable
            fields={compareFields}
            items={HorseStore.selectedHorses}
          />
        </CompareBox>
      )}
    </Container>
  );
};

export default observer(HorseList);
