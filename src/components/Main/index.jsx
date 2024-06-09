/* eslint-disable react/prop-types */
import { statusList } from "../../../data.js";
import { Column } from "../Column/index.jsx";

export const Main = ({ cards }) => {
  return (
    <main className="main">
      <div className="container">
        <div className="main__block">
          <div className="main__content">
            {statusList.map((status) => (
              <Column
                key={status}
                title={status}
                cardList={cards.filter((card) => card.status === status)}
              />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};
