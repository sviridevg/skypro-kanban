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
              key={card._id}
              id={card._id}
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
