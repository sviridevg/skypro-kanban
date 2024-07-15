import { Link, useNavigate, useParams } from "react-router-dom";
// import { Calendar } from "../Calendar";
import { routes } from "../../router/routes";
import { useTasks } from "../../context/Tasks/useTasks";
import { deleteCardForID } from "../../api/tasks";
// import { useState } from "react";

export const PopBrowse = () => {
  const navigation = useNavigate();
  const { setCards } = useTasks();

  const params = useParams();

  const handleDelCard = (e) => {
    e.preventDefault();
    deleteCardForID(params.id).then((res) => {
      setCards(res.tasks);
      navigation(routes.main);
    });
  };

  return (
    <div className="pop-browse" id="popBrowse">
      <div className="pop-browse__container">
        <div className="pop-browse__block">
          <div className="pop-browse__content">
            <div className="pop-browse__top-block">
              <h3 className="pop-browse__ttl">
                {params.title} {params.id}
              </h3>
              <div className="categories__theme theme-top _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__status status">
              <p className="status__p subttl">Статус</p>
              <div className="status__themes">
                <div className="status__theme ">
                  <p>Без статуса</p>
                </div>
                <div className="status__theme _gray">
                  <p className="_gray">Нужно сделать</p>
                </div>
                <div className="status__theme ">
                  <p>В работе</p>
                </div>
                <div className="status__theme ">
                  <p>Тестирование</p>
                </div>
                <div className="status__theme ">
                  <p>Готово</p>
                </div>
              </div>
            </div>
            <div className="pop-browse__wrap">
              <form
                className="pop-browse__form form-browse"
                id="formBrowseCard"
                action="#">
                <div className="form-browse__block">
                  <label htmlFor="textArea01" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-browse__area"
                    name="text"
                    id="textArea01"
                    readOnly
                    placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>
              {/* <Calendar /> */}
            </div>
            <div className="theme-down__categories theme-down">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__theme _orange _active-category">
                <p className="_orange">Web Design</p>
              </div>
            </div>
            <div className="pop-browse__btn-browse ">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03">
                  <a href="#">Редактировать задачу</a>
                </button>
                <button className="btn-browse__delete _btn-bor _hover03">
                  <a onClick={handleDelCard}>Удалить задачу</a>
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01">
                <Link to={routes.main}>Закрыть</Link>
              </button>
            </div>
            <div className="pop-browse__btn-edit _hide">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01">
                  <a href="#">Сохранить</a>
                </button>
                <button className="btn-edit__edit _btn-bor _hover03">
                  <a href="#">Отменить</a>
                </button>
                <button
                  className="btn-edit__delete _btn-bor _hover03"
                  id="btnDelete">
                  <a href="#">Удалить задачу</a>
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01">
                <Link to={routes.main}>Закрыть</Link>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
