import React, { useState } from 'react';
import styles from '../../styles/common/TimeSelectComponent.module.css';
import { TIME_TYPE } from '../../types/TimeType';
import { DISPLAY_DEFAULT_UNIT, HOUR_TYPE, HOURS, MINUTES } from '../../constants/TimeConstant';

// types
interface CustomStyle {
  timeSelectContainer: string | undefined,
  timeSelectBtn: string | undefined,
  timeSelectItems: string | undefined,
  timeSelectItem: string | undefined,
  timeSelectItemBtn: string | undefined,
}

interface TimeSelectComponentProps {
  timeType: TIME_TYPE,                  // 시/분/초 중에 어떤 타입인지 정의. enum type. (필수값)
  displayUnit: string | undefined,      // 어떤 문자를 select 요소로 보여줄 것인지 정의 (opt)
  initDisplayText: string | undefined,  // 시간 설정 초기 문구 결정 (opt)
  customStyle: CustomStyle | undefined, // custom font style (opt)
}

const TimeSelectComponent = (
  { timeType, displayUnit, initDisplayText, customStyle }: TimeSelectComponentProps,
) => {
  const [selectedTime, setSelectedTime] = useState(initDisplayText);
  const [isTimeSelectListOpen, setIsTimeSelectListOpen] = useState(false);

  displayUnit = displayUnit !== undefined && displayUnit !== null ? displayUnit : DISPLAY_DEFAULT_UNIT.get(timeType);
  // TODO : SECONDS 도 추가해야 함. 현재 사용하지 않아서 일단 제외
  const displayTimeSelectItems = timeType === HOUR_TYPE ? HOURS : MINUTES;

  // 클릭 시 시간 선택 리스트 노출/미노출 결정
  const handleDisplayTimeSelectList = () => {
    setIsTimeSelectListOpen(!isTimeSelectListOpen);
  };
  // 클릭 시 선택한 시간(시/분/초)를 셋팅 후 시간 선택 리스트 미노출 처리
  const handleSelectedTimeValue = (event: React.MouseEvent<HTMLButtonElement>) => {
    const selectedValue = event.currentTarget.innerText;
    setSelectedTime(selectedValue);
    setIsTimeSelectListOpen(false);
  };

  return (
    <section className={`${styles.timeSelectContainer} ${customStyle?.timeSelectContainer}`}>
      <button
        className={`${styles.timeSelectBtn} ${customStyle?.timeSelectBtn}`}
        onClick={handleDisplayTimeSelectList}
      >
        {selectedTime}
      </button>

      {/* timeSelectBtn을 클릭하면 isTimeSelectListOpen 값에 따라 아래 리스트가 노출/블럭 되도록 설정. */}
      <ul
        className={`${styles.timeSelectItems} ${isTimeSelectListOpen ? styles.displayBlock : styles.displayNone} ${customStyle?.timeSelectItems}`}>
        {/* eslint-disable-next-line @typescript-eslint/no-unused-vars */}
        {displayTimeSelectItems.map((timeItem, _) => (
          <li className={`${styles.timeSelectItem} ${customStyle?.timeSelectItem}`}>
            <button
              className={`${styles.timeSelectItemBtn} ${customStyle?.timeSelectItemBtn}`}
              type="button"
              onClick={handleSelectedTimeValue}
            >
              {timeItem} {displayUnit}
            </button>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default TimeSelectComponent;
