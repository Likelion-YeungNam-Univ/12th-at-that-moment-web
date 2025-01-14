import React from 'react';
import DatePopUpContentHook from 'hooks/calendar/DatePopUpContentHook';
import {
  DateWrapper,
  DateColumn,
  DateBox,
  PreviousDate,
  NextDate,
  DatePopUpWrapper,
  DatePopUpSaveBtn,
  DatePopUpCancelBtn,
} from 'styles/calendar/DatePopUp-styled';

const DatePopUpContent = ({ onClose, getSelectedDate }) => {
  const {
    handleWheel,
    handleComplete,
    year,
    month,
    day,
    previousYear,
    nextYear,
    previousMonth,
    nextMonth,
    previousDay,
    nextDay,
  } = DatePopUpContentHook();

  return (
    <DatePopUpWrapper>
      <DateWrapper>
        <DateColumn>
          <PreviousDate>{previousYear}년</PreviousDate>
          <DateBox onWheel={(event) => handleWheel(event, 'year')}>
            {year}년
          </DateBox>
          <NextDate>{nextYear}년</NextDate>
        </DateColumn>
        <DateColumn>
          <PreviousDate>{previousMonth}</PreviousDate>
          <DateBox onWheel={(event) => handleWheel(event, 'month')}>
            {month}
          </DateBox>
          <NextDate>{nextMonth}</NextDate>
        </DateColumn>
        <DateColumn>
          <PreviousDate>{previousDay}일</PreviousDate>
          <DateBox onWheel={(event) => handleWheel(event, 'day')}>
            {day}일
          </DateBox>
          <NextDate>{nextDay}일</NextDate>
        </DateColumn>
      </DateWrapper>

      <DatePopUpSaveBtn
        onClick={() => handleComplete(onClose, getSelectedDate)}
      >
        완료
      </DatePopUpSaveBtn>
      <DatePopUpCancelBtn onClick={onClose}>취소 </DatePopUpCancelBtn>
    </DatePopUpWrapper>
  );
};

export default DatePopUpContent;
