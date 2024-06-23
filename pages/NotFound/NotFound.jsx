import { Link } from "react-router-dom";
import { NouFound } from "./NotFound.styled";
import { routes } from "../../router/routes";

export const NotFound = () => {
  return (
    <NouFound>
      <h2>Ой... Страница не найдена. Давайте попробуем...</h2>
      <button type="button">
        <Link to={routes.main}>Вернуться на глвную</Link>
      </button>

      <img src="./public/404.svg" alt="Страница не найдена" />
    </NouFound>
  );
};
