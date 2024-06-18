import { ColumnTitle } from "../Column/column.styled";
import * as S from "../Loading/loading.styled.js";

export const Loading = () => {
  return (
    <ColumnTitle>
      <S.Loading>Данные загружаются ... </S.Loading>
    </ColumnTitle>
  );
};
