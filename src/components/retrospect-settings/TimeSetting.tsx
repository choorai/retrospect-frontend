import React from 'react';
import styles from '../../styles/retrospectSettings/TimeSetting.module.css';
import customTimeSelectStyles from '../../styles/retrospectSettings/CustomTimeSelect.module.css';
import TimeSelectComponent from '../common/TimeSelectComponent';
import { HOUR_TYPE, MINUTE_TYPE } from '../../constants/TimeConstant';

interface RetrospectProps {
  name: string,
  avgDurationMinutes: number
}

const TimeSetting = ({ name, avgDurationMinutes }: RetrospectProps) => {

  return (
    <section className={styles.rootContainer}>
      <div>
        <h1 className={styles.title}>회고 진행 시간을 설정해주세요!</h1>
        <h2 className={styles.subtitle}>
          {`${name} 회고는 평균 ${avgDurationMinutes}분 만큼의 시간을 소요해요.`}
        </h2>
      </div>

      <div className={styles.timeSettingContainer}>
        <TimeSelectComponent
          timeType={HOUR_TYPE}
          displayUnit={''}
          initDisplayText={"선택"}
          customStyle={{
            timeSelectContainer: customTimeSelectStyles.hourTimeSelectContainer,
            timeSelectBtn: customTimeSelectStyles.hourTimeSelectBtn,
            timeSelectItems: customTimeSelectStyles.hourTimeSelectItems,
            timeSelectItem: customTimeSelectStyles.hourTimeSelectItem,
            timeSelectItemBtn: customTimeSelectStyles.hourTimeSelectItemBtn,
          }}
        />
        <span className={styles.hourText}>시간</span>
        <TimeSelectComponent
          timeType={MINUTE_TYPE}
          displayUnit={''}
          initDisplayText={"선택"}
          customStyle={{
            timeSelectContainer: customTimeSelectStyles.hourTimeSelectContainer,
            timeSelectBtn: customTimeSelectStyles.hourTimeSelectBtn,
            timeSelectItems: customTimeSelectStyles.hourTimeSelectItems,
            timeSelectItem: customTimeSelectStyles.hourTimeSelectItem,
            timeSelectItemBtn: customTimeSelectStyles.hourTimeSelectItemBtn,
          }}
        />
        <span className={styles.minuteText}>분</span>
      </div>
    </section>
  );
};

export default TimeSetting;
