import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router/routes";
import { useTasks } from "../../context/Tasks/useTasks";
import { deleteCardForID, getCardForID } from "../../api/tasks";
import * as S from "../PopBrowse/PopBrowse.styled";
import * as C from "../Calendar/calendar.styled";
import { useEffect, useState } from "react";
import { format, formatISO } from "date-fns";
import { ru } from "date-fns/locale";
import { statusChecks } from "../../../data";
import { changeTask } from "../../api/changeTask";

export const PopBrowse = () => {
  const [selected, setSelected] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [originalCard, setOriginalCard] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [hide, setHide] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const navigation = useNavigate();
  const { setCards } = useTasks();
  const params = useParams();

  // Получение карточки по ID
  useEffect(() => {
    if (params.id) {
      getCardForID(params.id)
        .then((data) => {
          if (data?.task) {
            setSelectedCard(data.task);
            setOriginalCard(data.task);
          }
        })
        .catch((error) => {
          console.error("Ошибка при загрузке данных карточки:", error);
        })
        .finally(() => {
          setIsLoading(false);
        });
    }
  }, [params.id]);

  // Синхронизация selectedCard с cards
  useEffect(() => {
    if (selectedCard) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card._id === selectedCard._id ? { ...card, ...selectedCard } : card
        )
      );
    }
  }, [selectedCard, setCards]);

  // Удаление карточки
  const handleDelCard = async (e) => {
    e.preventDefault();
    try {
      const res = await deleteCardForID(params.id);
      setCards(res.tasks);
      navigation(routes.main);
    } catch (error) {
      console.error("Ошибка удаления карточки:", error);
    }
  };

  // Отмена изменений
  const handleCancelChanges = (e) => {
    e.preventDefault();
    setSelectedCard(originalCard);
    setHide(true);
  };

  // Обработчик сохранения карточки
  const handleSaveChanges = () => {
    changeTask(selectedCard, selectedCard._id);
    setHide(true);
    setSuccessMessage("Изменения сохранены");

    setTimeout(() => {
      setSuccessMessage("");
    }, 2000);
  };

  // Обработчик изменения даты карточки
  useEffect(() => {
    if (selected) {
      let result = formatISO(selected, "dd.MM.yy", { locale: ru });
      setSelectedCard({ ...selectedCard, date: `${result}` });
    }
  }, [selected]);

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          {isLoading ? (
            <S.PopBrowseBlockMessage>
              Загрузка данных...
            </S.PopBrowseBlockMessage>
          ) : (
            <S.PopBrowseContent>
              <S.PopBrowseTopBlock>
                <S.PopBrowseTtl>
                  {selectedCard ? selectedCard.title : "Задача"}{" "}
                </S.PopBrowseTtl>
                {successMessage && (
                  <S.SuccessMessage>{successMessage}</S.SuccessMessage>
                )}
                <S.Categori
                  $categori={selectedCard ? selectedCard.topic : "Тема"}>
                  <p>{selectedCard ? selectedCard.topic : "Тема"}</p>
                </S.Categori>
              </S.PopBrowseTopBlock>

              <S.PopBrowseStatus>
                <S.StatusP>Статус</S.StatusP>
                <S.StatusThemes>
                  <S.CheckboxCat style={{ display: hide ? "block" : "none" }}>
                    <input type="radio" checked readOnly />
                    <span>
                      <S.StatusTheme>
                        <p>{selectedCard ? selectedCard.status : "Статус"}</p>
                      </S.StatusTheme>
                    </span>
                  </S.CheckboxCat>
                  {statusChecks.map((stat, i) => (
                    <S.CheckboxCat
                      key={i}
                      style={{ display: hide ? "none" : "block" }}>
                      <input
                        type="radio"
                        name="status"
                        id={stat}
                        checked={stat === selectedCard?.status}
                        onChange={(e) => {
                          if (!hide) {
                            setSelectedCard((prev) => ({
                              ...prev,
                              status: e.target.id,
                            }));
                          }
                        }}
                      />
                      <span>
                        <S.StatusTheme>
                          <p>{stat}</p>
                        </S.StatusTheme>
                      </span>
                    </S.CheckboxCat>
                  ))}
                </S.StatusThemes>
              </S.PopBrowseStatus>

              <S.PopBrowseWrap>
                <S.PopBrowseForm>
                  <S.FormBrowseBlock>
                    <label htmlFor="textArea01">Описание задачи</label>
                    <S.FormBrowseArea
                      name="text"
                      id="textArea01"
                      readOnly={hide}
                      value={selectedCard?.description || ""}
                      placeholder="Введите описание задачи..."
                      onChange={(e) => {
                        if (!hide) {
                          setSelectedCard((prev) => ({
                            ...prev,
                            description: e.target.value,
                          }));
                        }
                      }}
                    />
                  </S.FormBrowseBlock>
                </S.PopBrowseForm>

                <C.PopNewCardCalendar>
                  <C.CalendarTtl>Даты</C.CalendarTtl>
                  <C.CalendarBlock>
                    <C.StyledDatePicker
                      mode="single"
                      selected={new Date(selectedCard.date)}
                      onSelect={hide === false && setSelected}
                      locale={ru}
                    />
                    <C.CalendarPeriod>
                      <C.CalendarPDateEnd>
                        Срок исполнения:
                        <span>
                          {format(
                            selected || new Date(selectedCard.date),
                            "dd.MM.yy",
                            { locale: ru }
                          )}
                        </span>
                      </C.CalendarPDateEnd>
                    </C.CalendarPeriod>
                  </C.CalendarBlock>
                </C.PopNewCardCalendar>
              </S.PopBrowseWrap>

              <S.PopBrowseBtnBrowse>
                <S.BtnGroup>
                  <S.BtnBrowseEdit
                    style={{ display: hide ? "" : "none" }}
                    onClick={() => setHide(false)}>
                    Редактировать задачу
                  </S.BtnBrowseEdit>
                  <S.BtnBrowseDelete
                    onClick={handleDelCard}
                    style={{ display: hide ? "" : "none" }}>
                    Удалить задачу
                  </S.BtnBrowseDelete>
                </S.BtnGroup>
                <S.BtnBrowseClose style={{ display: hide ? "" : "none" }}>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnBrowseClose>
              </S.PopBrowseBtnBrowse>

              <S.PopBrowseBtnEdit>
                <S.BtnGroup>
                  <S.BtnEditEdit
                    onClick={handleSaveChanges}
                    style={{ display: hide ? "none" : "" }}>
                    Сохранить
                  </S.BtnEditEdit>
                  <S.BtnEditEditbor
                    onClick={handleCancelChanges}
                    style={{ display: hide ? "none" : "" }}>
                    Отменить
                  </S.BtnEditEditbor>
                </S.BtnGroup>
                <S.BtnEditClose style={{ display: hide ? "none" : "" }}>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnEditClose>
              </S.PopBrowseBtnEdit>
            </S.PopBrowseContent>
          )}
        </S.PopBrowseBlock>
      </S.PopBrowseContainer>
    </S.PopBrowse>
  );
};
