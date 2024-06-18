import NavNext from "../Icons/navNext";
import NavPrev from "../Icons/navPrev";
import * as S from "./calendar.styled";

export const Calendar = () => {
  return (
    <S.PopNewCardCalendar>
      <S.CalendarTtl>Даты</S.CalendarTtl>
      <S.CalendarBlock>
        <S.CalendarNav>
          <S.CalendarMonth>Сентябрь 2023</S.CalendarMonth>
          <S.NavActions>
            <S.NavAction data-action="prev">
              <NavPrev />
            </S.NavAction>
            <S.NavAction data-action="next">
              <NavNext />
            </S.NavAction>
          </S.NavActions>
        </S.CalendarNav>
        <S.CalendarContent>
          <S.CalendarDaysNames>
            <S.CalendarDaysName>пн</S.CalendarDaysName>
            <S.CalendarDaysName>вт</S.CalendarDaysName>
            <S.CalendarDaysName>ср</S.CalendarDaysName>
            <S.CalendarDaysName>чт</S.CalendarDaysName>
            <S.CalendarDaysName>пт</S.CalendarDaysName>
            <S.CalendarDaysNameWekend>сб</S.CalendarDaysNameWekend>
            <S.CalendarDaysNameWekend>вс</S.CalendarDaysNameWekend>
          </S.CalendarDaysNames>
          <S.CalendarCells>
            <S.OtherMonth>28</S.OtherMonth>
            <S.OtherMonth>29</S.OtherMonth>
            <S.OtherMonth>30</S.OtherMonth>
            <S.CellDay>31</S.CellDay>
            <S.CellDay>1</S.CellDay>
            <S.CellDayWeekend>2</S.CellDayWeekend>
            <S.CellDayWeekend>3</S.CellDayWeekend>
            <S.CellDay>4</S.CellDay>
            <S.CellDay>5</S.CellDay>
            <S.CellDay>6</S.CellDay>
            <S.CellDay>7</S.CellDay>
            <S.CellDayCurrent>8</S.CellDayCurrent>
            <S.CellDayWeekendActiveDay>9</S.CellDayWeekendActiveDay>
            <S.CellDayWeekend>10</S.CellDayWeekend>
            <S.CellDay>11</S.CellDay>
            <S.CellDay>12</S.CellDay>
            <S.CellDay>13</S.CellDay>
            <S.CellDay>14</S.CellDay>
            <S.CellDay>15</S.CellDay>
            <S.CellDayWeekend>16</S.CellDayWeekend>
            <S.CellDayWeekend>17</S.CellDayWeekend>
            <S.CellDay>18</S.CellDay>
            <S.CellDay>19</S.CellDay>
            <S.CellDay>20</S.CellDay>
            <S.CellDay>21</S.CellDay>
            <S.CellDay>22</S.CellDay>
            <S.CellDayWeekend>23</S.CellDayWeekend>
            <S.CellDayWeekend>24</S.CellDayWeekend>
            <S.CellDay>25</S.CellDay>
            <S.CellDay>26</S.CellDay>
            <S.CellDay>27</S.CellDay>
            <S.CellDay>28</S.CellDay>
            <S.CellDay>29</S.CellDay>
            <S.CellDayWeekend>30</S.CellDayWeekend>
            <S.OtherMonthWeekend>1</S.OtherMonthWeekend>
          </S.CalendarCells>
        </S.CalendarContent>

        <input type="hidden" id="datepick_value" value="08.09.2023" />
        <S.CalendarPeriod>
          <S.CalendarPDateEnd>
            Срок исполнения: <span>09.09.23</span>
          </S.CalendarPDateEnd>
        </S.CalendarPeriod>
      </S.CalendarBlock>
    </S.PopNewCardCalendar>
  );
};
