import { Link } from "react-router-dom";
import { Calendar } from "../Calendar";
import { routes } from "../../router/routes";

import * as S from "./popNewCard.styled";

export const PopNewCard = () => {
  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock>
          <S.PopNewCardContent>
            <h3>Создание задачи</h3>
            <Link to={routes.main}>
              <S.PopNewCardClose>&#10006;</S.PopNewCardClose>
            </Link>
            <S.PopNewCardWrap>
              <S.PopNewCardForm id="formNewCard" action="#">
                <S.FormNewBlock>
                  <S.FormNewLabel htmlFor="formTitle">
                    Название задачи
                  </S.FormNewLabel>
                  <input
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </S.FormNewBlock>
                <S.FormNewBlock>
                  <S.FormNewLabel htmlFor="textArea">
                    Описание задачи
                  </S.FormNewLabel>
                  <textarea
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."></textarea>
                </S.FormNewBlock>
              </S.PopNewCardForm>
              <Calendar />
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.PopNewCardP>Категория</S.PopNewCardP>
              <S.CategoriesThemes>
                <S.Checkbox>
                  <input type="radio" name="radio" />
                  <span>
                    <S.Categori $categori={"Web Design"}>
                      <p>Web Design</p>
                    </S.Categori>
                  </span>
                </S.Checkbox>
                <S.Checkbox>
                  <input type="radio" name="radio" />
                  <span>
                    <S.Categori $categori={"Research"}>
                      <p>Research</p>
                    </S.Categori>
                  </span>
                </S.Checkbox>
                <S.Checkbox>
                  <input type="radio" name="radio" />
                  <span>
                    <S.Categori $categori={"Copywriting"}>
                      <p>Copywriting</p>
                    </S.Categori>
                  </span>
                </S.Checkbox>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>
            <S.FormNewСreateBtn id="btnCreate">
              Создать задачу
            </S.FormNewСreateBtn>
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};
