import { useEffect } from "react";
import { ColumnTitle } from "../Column/column.styled";
import * as S from "../Loading/loading.styled.js";

// eslint-disable-next-line react/prop-types
export const Loading = ({ error, setError }) => {
  useEffect(() => {
    setError(error);
  }, []);

  return (
    <S.LoadingBG>
      <ColumnTitle>
        <S.Loading>
          {error && "Не удалось загрузить данные, попробуйте позже"}{" "}
          {!error && "Данные загружаются ..."}
        </S.Loading>
      </ColumnTitle>
    </S.LoadingBG>
  );
};
