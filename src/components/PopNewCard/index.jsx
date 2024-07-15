import { Link, useNavigate } from "react-router-dom";

import * as C from "../Calendar/calendar.styled";
import "react-day-picker/dist/style.css";
import { format, formatISO } from "date-fns";
import { ru } from "date-fns/locale";

import { routes } from "../../router/routes";
import * as S from "./popNewCard.styled";
import { useEffect, useState } from "react";
import { addTask } from "../../api/newCard";
import { useTasks } from "../../context/Tasks/useTasks";

export const PopNewCard = () => {
  const { setCards } = useTasks();
  const [error, setError] = useState("");
  const navigation = useNavigate();
  const [selected, setSelected] = useState();
  const [carsdData, setCardData] = useState({
    title: "",
    topic: "",
    status: "Без статуса",
    description: "",
    date: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    setCardData({
      title: "",
      topic: "",
      status: "",
      description: "",
      date: "",
    });
  };

  useEffect(() => {
    if (selected) {
      let result = formatISO(selected, "dd.MM.yy", { locale: ru });
      setCardData({ ...carsdData, date: `${result}` });
    }
  }, [selected]);

  const handleNewCard = (e) => {
    e.preventDefault();

    if (!carsdData.title || !carsdData.topic || !carsdData.description) {
      setError("Для продолжения заполните все поля!");
      return;
    }

    addTask(carsdData)
      .then((res) => {
        setCards(res.tasks);
        navigation(routes.main);
      })
      .catch((error) => {
        setError(error.message);
      });
  };

  return (
    <S.PopNewCard id="popNewCard">
      <S.PopNewCardContainer>
        <S.PopNewCardBlock onSubmit={handleSubmit}>
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
                    onChange={(e) =>
                      setCardData({ ...carsdData, title: e.target.value })
                    }
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
                    onChange={(e) =>
                      setCardData({ ...carsdData, description: e.target.value })
                    }
                    placeholder="Введите описание задачи..."></textarea>
                </S.FormNewBlock>
              </S.PopNewCardForm>

              <C.PopNewCardCalendar>
                <C.CalendarTtl>Даты</C.CalendarTtl>
                <C.CalendarBlock>
                  <C.CalendarContent>
                    <C.StyledDatePicker
                      mode="single"
                      selected={selected}
                      onSelect={setSelected}
                      locale={ru}
                    />
                  </C.CalendarContent>
                  <C.CalendarPeriod>
                    {!selected && (
                      <C.CalendarPDateEnd>
                        {" "}
                        Выберите срок исполнения.{" "}
                      </C.CalendarPDateEnd>
                    )}
                    {selected && (
                      <C.CalendarPDateEnd>
                        Срок исполнения: 
                        <span>
                          {format(selected, "dd.MM.yy", { locale: ru })}{" "}
                        </span>
                      </C.CalendarPDateEnd>
                    )}
                  </C.CalendarPeriod>
                </C.CalendarBlock>
              </C.PopNewCardCalendar>
            </S.PopNewCardWrap>
            <S.PopNewCardCategories>
              <S.PopNewCardP>Категория</S.PopNewCardP>
              <S.CategoriesThemes>
                <S.Checkbox>
                  <input
                    type="radio"
                    name="radio"
                    id="Web Design"
                    onChange={(e) =>
                      setCardData({ ...carsdData, topic: e.target.id })
                    }
                  />
                  <span>
                    <S.Categori $categori={"Web Design"}>
                      <p>Web Design</p>
                    </S.Categori>
                  </span>
                </S.Checkbox>
                <S.Checkbox>
                  <input
                    type="radio"
                    name="radio"
                    id="Research"
                    onChange={(e) =>
                      setCardData({ ...carsdData, topic: e.target.id })
                    }
                  />
                  <span>
                    <S.Categori $categori={"Research"}>
                      <p>Research</p>
                    </S.Categori>
                  </span>
                </S.Checkbox>
                <S.Checkbox>
                  <input
                    type="radio"
                    name="radio"
                    id="Copywriting"
                    onChange={(e) =>
                      setCardData({ ...carsdData, topic: e.target.id })
                    }
                  />
                  <span>
                    <S.Categori $categori={"Copywriting"}>
                      <p>Copywriting</p>
                    </S.Categori>
                  </span>
                </S.Checkbox>
              </S.CategoriesThemes>
            </S.PopNewCardCategories>

            <S.FormNewСreateBtn onClick={handleNewCard}>
              Создать задачу
            </S.FormNewСreateBtn>
            {error && <p>{error}</p>}
          </S.PopNewCardContent>
        </S.PopNewCardBlock>
      </S.PopNewCardContainer>
    </S.PopNewCard>
  );
};
