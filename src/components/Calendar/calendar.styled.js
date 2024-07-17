import { DayPicker } from "react-day-picker";
import styled, { css } from "styled-components";
import { Subttl } from "../../globalStyle.stiled";

export const Calendar = css`
  width: 182px;
  margin-bottom: 20px;
`;

export const PopNewCardCalendar = styled.div`
  width: 100%;

  ${Calendar}
`;

export const CalendarTtl = styled.div`
  margin-bottom: 14px;
  padding: 0 7px;

  ${Subttl}
`;

export const CalendarBlock = styled.div`
  display: block;
`;

export const CalendarNav = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 14px;
  padding: 0 7px;
`;

export const CalendarMonth = styled.div`
  color: #94a6be;
  font-size: 14px;
  line-height: 25px;
  font-weight: 600;
`;

export const NavActions = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const NavAction = styled.div`
  width: 18px;
  height: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;

  & svg {
    fill: #94a6be;
  }
`;

export const CalendarContent = styled.div`
  margin-bottom: 12px;
`;
export const CalendarDaysNames = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  margin: 7px 0;
  padding: 0 7px;
`;

export const CalendarDaysName = styled.div`
  color: #94a6be;
  font-size: 10px;
  font-weight: 500;
  line-height: normal;
  letter-spacing: -0.2px;
`;

export const CalendarDaysNameWekend = styled(CalendarDaysName)``;

export const CalendarCells = styled.div`
  width: 182px;
  height: 126px;
  display: flex;
  flex-wrap: wrap;
`;

export const CalendarCell = styled.div`
  width: 22px;
  height: 22px;
  margin: 2px;
  border-radius: 50%;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  color: #94a6be;
  font-size: 10px;
  line-height: 1;
  letter-spacing: -0.2px;
  cursor: pointer;
`;

export const OtherMonth = styled(CalendarCell)`
  opacity: 0;
`;
export const OtherMonthWeekend = styled(OtherMonth)``;

export const CellDay = styled(CalendarCell)`
  &:hover {
    color: #94a6be;
    background-color: #eaeef6;
  }
`;

export const CellDayWeekend = styled(CellDay)``;

export const CellDayWeekendActiveDay = styled(CellDayWeekend)`
  background-color: #94a6be;
  color: #ffffff;
`;

export const CellDayCurrent = styled(CellDay)`
  font-weight: 700;
`;

export const CalendarPeriod = styled.div`
  padding: 0 7px;
`;

export const CalendarP = styled.div`
  color: #94a6be;
  font-size: 10px;
  line-height: 1;

  & span {
    color: #000000;
  }
`;

export const DateControl = styled(CalendarP)``;

export const CalendarPDateEnd = styled(CalendarP)`
  & span {
    color: ${({ theme }) => theme.PopExitTtlH2};
  }
`;

export const StyledDatePicker = styled(DayPicker)`
  margin: 0;
  --rdp-cell-size: 24px;
  --rdp-caption-font-size: 14px;
  --rdp-accent-color: #94a6be;
  & div {
    color: #94a6be;
    text-transform: capitalize;
  }

  & td {
    font-size: 10px;
    color: #94a6be;
  }

  & th {
    color: #94a6be;
    font-size: 10px;
  }

  & svg {
    color: #94a6be;
  }
`;
