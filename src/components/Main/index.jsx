/* eslint-disable react/prop-types */
import { statusList } from "../../../data.js";
import { Container } from "../../globalStyle.stiled.js";
import { Column } from "../Column/index.jsx";
import * as S from "./main.styled.js";

export const Main = ({ cards }) => {
  return (
    <S.Main>
      <Container>
        <S.MainBlock>
          <S.MainContent>
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </S.MainContent>
        </S.MainBlock>
      </Container>
    </S.Main>
  );
};
