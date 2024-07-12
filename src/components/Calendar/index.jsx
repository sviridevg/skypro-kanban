import { ru } from "date-fns/locale";
import { format } from "date-fns/format";
import * as S from "./calendar.styled";
import { useState } from "react";

import "react-day-picker/dist/style.css";

export const Calendar = () => {
  const [selected, setSelected] = useState();

  function dayClick() {
    let dueDate = (
      <S.CalendarPDateEnd> Выберите срок исполнения. </S.CalendarPDateEnd>
    );
    if (selected) {
      dueDate = (
        <S.CalendarPDateEnd>
          Срок исполнения:{" "}
          <span>{format(selected, "dd.MM.yy", { locale: ru })} </span>
        </S.CalendarPDateEnd>
      );
    }
    return dueDate;
  }

  return (
    <S.PopNewCardCalendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarContent>
          <S.StyledDatePicker
            mode="single"
            selected={selected}
            onSelect={setSelected}
            locale={ru}
          />
        </S.CalendarContent>
        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <S.CalendarPeriod>{dayClick()}</S.CalendarPeriod>
      </S.CalendarBlock>
    </S.PopNewCardCalendar>
  );
};
