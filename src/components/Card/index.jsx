import Calendar from "../Icons/calendar";
import { CardCategory } from "./cardCategory";

export const Card = ({ Category, TaskName, TaskCreationDate }) => {
  return (
    <div className="cards__item">
      <div className="cards__card card">
        <div className="card__group">
          <CardCategory Category={Category} />
          <a href="#popBrowse" target="_self">
            <div className="card__btn">
              <div></div>
              <div></div>
              <div></div>
            </div>
          </a>
        </div>
        <div className="card__content">
          <a href="" target="_blank">
            <h3 className="card__title"> {TaskName} </h3>
          </a>
          <div className="card__date">
            <Calendar />
            <p>{TaskCreationDate}</p>
          </div>
        </div>
      </div>
    </div>
  );
};
