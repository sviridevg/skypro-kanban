import { Card } from "../Card";

export const Column = ({ title }) => {
  return (
    <div className="main__column column">
      <div className="column__title">
        <p>{title}</p>
      </div>
      <div className="cards">
        <Card
          Category="Web Design"
          TaskName="Название задачи"
          TaskCreationDate="06.02.24"
        />
        <Card
          Category="Research"
          TaskName="Название задачи"
          TaskCreationDate="06.02.24"
        />
        <Card
          Category="Copywriting"
          TaskName="Название задачи"
          TaskCreationDate="06.02.24"
        />
      </div>
    </div>
  );
};
