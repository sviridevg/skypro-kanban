import { Link } from "react-router-dom";
import Calendar from "../Icons/calendar";
import * as S from "./card.styled";

// eslint-disable-next-line react/prop-types
export const Card = ({ topic, title, date, id }) => {
  return (
    <S.CardsItem>
      <S.CardsCard>
        <S.CardsGroup>
          <S.CardTheme $topicColor = {topic}>
            <p>{topic}</p>
          </S.CardTheme>
          <Link to={`/card/${id}`} target="_self">
            <S.CardsBtn>
              <div></div>
              <div></div>
              <div></div>
            </S.CardsBtn>
          </Link>
        </S.CardsGroup>
        <S.CardContent>
          <a href="" target="_blank">
            <h3> {title} </h3>
          </a>
          <S.CardDate>
            <Calendar />
            <p>{date}</p>
          </S.CardDate>
        </S.CardContent>
      </S.CardsCard>
    </S.CardsItem>
  );
};
