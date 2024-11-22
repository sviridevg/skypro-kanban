import { Link, useNavigate, useParams } from "react-router-dom";
import { routes } from "../../router/routes";
import { useTasks } from "../../context/Tasks/useTasks";
import { deleteCardForID, getCardForID } from "../../api/tasks";
import * as S from "../PopBrowse/PopBrowse.styled";
import * as C from "../Calendar/calendar.styled";
import { useEffect, useState } from "react";
import { format, formatISO } from "date-fns";
import { ru } from "date-fns/locale";
import { changeTask } from "../../api/changeTask";

export const PopBrowse = () => {
  const [selected, setSelected] = useState();
  const [selectedCard, setSelectedCard] = useState();
  const [originalCard, setOriginalCard] = useState();
  const [isLoading, setisLoading] = useState(true);
  const [hide, setHide] = useState(true);
  const [successMessage, setSuccessMessage] = useState("");
  const navigation = useNavigate();
  const { setCards } = useTasks();
  const params = useParams();

  // получим карточку через getCardForID
  useEffect(() => {
    const fetchCard = async () => {
      try {
        const res = await getCardForID(params.id);
        setSelectedCard(res.task);
        setOriginalCard(res.task);
        setisLoading(false);
      } catch (error) {
        console.error(error);
      }
    };
    fetchCard();
  }, [params.id]);

  const handleDelCard = (e) => {
    e.preventDefault();
    deleteCardForID(params.id).then((res) => {
      setCards(res.tasks);
      navigation(routes.main);
    });
  };

  const handleHide = (e) => {
    e.preventDefault();
    setHide(!hide);
  };

  useEffect(() => {
    if (selectedCard) {
      setCards((prevCards) =>
        prevCards.map((card) =>
          card.id === selectedCard.id ? selectedCard : card
        )
      );
    }
  }, [selectedCard, setCards]);

  useEffect(() => {
    if (selected) {
      let result = formatISO(selected, "dd.MM.yy", { locale: ru });
      setSelectedCard({ ...selectedCard, date: `${result}` });
    }
  }, [selected]);

  // обработчик Сохраниение карточки через changeTask с обновлением setCards
  const handleSave = (e) => {
    e.preventDefault();
    changeTask(selectedCard, params.id).then((res) => {
      setCards(res.tasks);
      setHide(true);
      setSuccessMessage("Изменения успешно сохранены");

      setTimeout(() => setSuccessMessage(""), 3000);
    });
  };

  const handleCancelChanges = (e) => {
    e.preventDefault();
    setSelectedCard(originalCard);
    setHide(true);
  };

  const statusChecks = [
    "Без статуса",
    "Нужно сделать",
    "В работе",
    "Тестирование",
    "Готово",
  ];

  return (
    <S.PopBrowse id="popBrowse">
      <S.PopBrowseContainer>
        <S.PopBrowseBlock>
          {isLoading ? (
            <S.PopBrowseBlockMessage>
              {" "}
              Загрузка данных ...
            </S.PopBrowseBlockMessage>
          ) : (
            <S.PopBrowseContent>
              <S.PopBrowseTopBlock>
                <S.PopBrowseTtl>
                  {selectedCard ? selectedCard.title : "Title"}{" "}
                </S.PopBrowseTtl>
                {successMessage && (
                  <S.SuccessMessage>{successMessage}</S.SuccessMessage>
                )}
                <S.Categori
                  $categori={selectedCard ? selectedCard.topic : "Topic"}>
                  <p>{selectedCard ? selectedCard.topic : "Topic"}</p>
                </S.Categori>
              </S.PopBrowseTopBlock>

              <S.PopBrowseStatus>
                <S.StatusP>Статус</S.StatusP>

                <S.StatusThemes>
                  <S.CheckboxCat style={{ display: hide ? "block" : "none" }}>
                    <input type="radio" checked readOnly />
                    <span>
                      <S.StatusTheme>
                        <p>{selectedCard ? selectedCard.status : "Status"}</p>
                      </S.StatusTheme>
                    </span>
                  </S.CheckboxCat>
                </S.StatusThemes>

                <S.StatusThemes>
                  {statusChecks.map((stat, i) => (
                    <S.CheckboxCat
                      key={i}
                      style={{ display: hide ? "none" : "block" }}>
                      <input
                        type="radio"
                        name="status"
                        id={stat}
                        onChange={(e) => {
                          if (!hide) {
                            setSelectedCard({
                              ...selectedCard,
                              status: e.target.id,
                            });
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
                <S.PopBrowseForm id="formBrowseCard" action="#">
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
                          setSelectedCard({
                            ...selectedCard,
                            description: e.target.value,
                          });
                        }
                      }}
                    />
                  </S.FormBrowseBlock>
                </S.PopBrowseForm>

                <C.PopNewCardCalendar>
                  <C.CalendarTtl>Даты</C.CalendarTtl>
                  <C.CalendarBlock>
                    <C.CalendarContent>
                      <C.StyledDatePicker
                        mode="single"
                        selected={new Date(selectedCard.date)}
                        onSelect={setSelected}
                        locale={ru}
                      />
                    </C.CalendarContent>
                    <C.CalendarPeriod>
                      {!selected && (
                        <C.CalendarPDateEnd>
                          Срок исполнения:{" "}
                          <span>
                            {format(new Date(selectedCard.date), "dd.MM.yy", {
                              locale: ru,
                            })}
                          </span>
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
              </S.PopBrowseWrap>

              <S.PopBrowseBtnBrowse>
                <S.BtnGroup>
                  <S.BtnBrowseEdit
                    style={{ display: hide ? "" : "none" }}
                    onClick={handleHide}>
                    <a>Редактировать задачу</a>
                  </S.BtnBrowseEdit>
                  <S.BtnBrowseDelete style={{ display: hide ? "" : "none" }}>
                    <a onClick={handleDelCard}>Удалить задачу</a>
                  </S.BtnBrowseDelete>
                </S.BtnGroup>
                <S.BtnBrowseClose style={{ display: hide ? "" : "none" }}>
                  <Link to={routes.main}>Закрыть</Link>
                </S.BtnBrowseClose>
              </S.PopBrowseBtnBrowse>

              <S.PopBrowseBtnEdit>
                <S.BtnGroup>
                  <S.BtnEditEdit
                    style={{ display: hide ? "none" : "" }}
                    onClick={handleSave}>
                    <a>Сохранить</a>
                  </S.BtnEditEdit>
                  <S.BtnEditEditbor
                    onClick={handleCancelChanges}
                    style={{ display: hide ? "none" : "" }}>
                    <a>Отменить</a>
                  </S.BtnEditEditbor>
                  <S.BtnEditDelete
                    id="btnDelete"
                    style={{ display: hide ? "none" : "" }}
                    onClick={handleDelCard}>
                    <a>Удалить задачу</a>
                  </S.BtnEditDelete>
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
