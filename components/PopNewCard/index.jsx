import NavNext from "../Icons/navNext";
import NavPrev from "../Icons/navPrev";

export const PopNewCard = () => {
  return (
    <div className="pop-new-card" id="popNewCard">
      <div className="pop-new-card__container">
        <div className="pop-new-card__block">
          <div className="pop-new-card__content">
            <h3 className="pop-new-card__ttl">Создание задачи</h3>
            <a href="#" className="pop-new-card__close">
              &#10006;
            </a>
            <div className="pop-new-card__wrap">
              <form
                className="pop-new-card__form form-new"
                id="formNewCard"
                action="#">
                <div className="form-new__block">
                  <label htmlFor="formTitle" className="subttl">
                    Название задачи
                  </label>
                  <input
                    className="form-new__input"
                    type="text"
                    name="name"
                    id="formTitle"
                    placeholder="Введите название задачи..."
                    autoFocus
                  />
                </div>
                <div className="form-new__block">
                  <label htmlFor="textArea" className="subttl">
                    Описание задачи
                  </label>
                  <textarea
                    className="form-new__area"
                    name="text"
                    id="textArea"
                    placeholder="Введите описание задачи..."></textarea>
                </div>
              </form>
              <div className="pop-new-card__calendar calendar">
                <p className="calendar__ttl subttl">Даты</p>
                <div className="calendar__block">
                  <div className="calendar__nav">
                    <div className="calendar__month">Сентябрь 2023</div>
                    <div className="nav__actions">
                      <div className="nav__action" data-action="prev">
                        <NavPrev />
                      </div>
                      <div className="nav__action" data-action="next">
                        <NavNext />
                      </div>
                    </div>
                  </div>
                  <div className="calendar__content">
                    <div className="calendar__days-names">
                      <div className="calendar__day-name">пн</div>
                      <div className="calendar__day-name">вт</div>
                      <div className="calendar__day-name">ср</div>
                      <div className="calendar__day-name">чт</div>
                      <div className="calendar__day-name">пт</div>
                      <div className="calendar__day-name -weekend-">сб</div>
                      <div className="calendar__day-name -weekend-">вс</div>
                    </div>
                    <div className="calendar__cells">
                      <div className="calendar__cell _other-month">28</div>
                      <div className="calendar__cell _other-month">29</div>
                      <div className="calendar__cell _other-month">30</div>
                      <div className="calendar__cell _cell-day">31</div>
                      <div className="calendar__cell _cell-day">1</div>
                      <div className="calendar__cell _cell-day _weekend">2</div>
                      <div className="calendar__cell _cell-day _weekend">3</div>
                      <div className="calendar__cell _cell-day">4</div>
                      <div className="calendar__cell _cell-day">5</div>
                      <div className="calendar__cell _cell-day ">6</div>
                      <div className="calendar__cell _cell-day">7</div>
                      <div className="calendar__cell _cell-day _current">8</div>
                      <div className="calendar__cell _cell-day _weekend">9</div>
                      <div className="calendar__cell _cell-day _weekend">
                        10
                      </div>
                      <div className="calendar__cell _cell-day">11</div>
                      <div className="calendar__cell _cell-day">12</div>
                      <div className="calendar__cell _cell-day">13</div>
                      <div className="calendar__cell _cell-day">14</div>
                      <div className="calendar__cell _cell-day">15</div>
                      <div className="calendar__cell _cell-day _weekend">
                        16
                      </div>
                      <div className="calendar__cell _cell-day _weekend">
                        17
                      </div>
                      <div className="calendar__cell _cell-day">18</div>
                      <div className="calendar__cell _cell-day">19</div>
                      <div className="calendar__cell _cell-day">20</div>
                      <div className="calendar__cell _cell-day">21</div>
                      <div className="calendar__cell _cell-day">22</div>
                      <div className="calendar__cell _cell-day _weekend">
                        23
                      </div>
                      <div className="calendar__cell _cell-day _weekend">
                        24
                      </div>
                      <div className="calendar__cell _cell-day">25</div>
                      <div className="calendar__cell _cell-day">26</div>
                      <div className="calendar__cell _cell-day">27</div>
                      <div className="calendar__cell _cell-day">28</div>
                      <div className="calendar__cell _cell-day">29</div>
                      <div className="calendar__cell _cell-day _weekend">
                        30
                      </div>
                      <div className="calendar__cell _other-month _weekend">
                        1
                      </div>
                    </div>
                  </div>

                  <input type="hidden" id="datepick_value" value="08.09.2023" />
                  <div className="calendar__period">
                    <p className="calendar__p date-end">
                      Выберите срок исполнения{" "}
                      <span className="date-control"></span>.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="pop-new-card__categories categories">
              <p className="categories__p subttl">Категория</p>
              <div className="categories__themes">
                <div className="categories__theme _orange _active-category">
                  <p className="_orange">Web Design</p>
                </div>
                <div className="categories__theme _green">
                  <p className="_green">Research</p>
                </div>
                <div className="categories__theme _purple">
                  <p className="_purple">Copywriting</p>
                </div>
              </div>
            </div>
            <button className="form-new__create _hover01" id="btnCreate">
              Создать задачу
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
