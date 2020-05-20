import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import styled from "styled-components";
import { IHorse } from '../types';

import { store as HorseStore } from "../store/index"


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


const HorseList: React.FC<any> = (props) => {
  const [selectMode, setSelectMode] = useState<boolean>(false);


  useEffect(() => {
    HorseStore.load();
  }, []);

  return (
    <Container>
      <h3>Horse List Page</h3>
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
      <Content>
        {HorseStore.horses?.map((horse:IHorse) => (
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
    </Container>
  );
};

export default observer(HorseList);
