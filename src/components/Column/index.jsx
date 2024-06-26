/* eslint-disable react/prop-types */
import { Card } from "../Card";
import { Cards, ColumnTitle, MainColumn } from "./column.styled";

export const Column = ({ title, cardList }) => {
  return (
    <MainColumn className="column">
      <ColumnTitle>
        <p>{title}</p>
      </ColumnTitle>

      <Cards>
        {cardList.map((card) => {
          return (
            <Card
              key={card.id}
              id={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          );
        })}
      </Cards>
    </MainColumn>
  );
};
