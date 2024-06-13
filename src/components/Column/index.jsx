/* eslint-disable react/prop-types */
import { Card } from "../Card";

export const Column = ({ title, cardList }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>

      <div className="cards">
        {cardList.map((card) => {
          return (
            <Card
              key={card.id}
              topic={card.topic}
              title={card.title}
              date={card.date}
            />
          );
        })}
      </div>
    </div>
  );
};
