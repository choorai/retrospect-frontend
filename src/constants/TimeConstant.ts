/**
 * TimeSelectComponent.tsx 와 같이 사용될 수 있는 상수 선언
 *
 * @author kimjaejun
 * @see TimeSelectComponent.tsx
 */

import { TIME_TYPE } from '../types/TimeType';

// constant
export const HOUR_TYPE: TIME_TYPE = 'hour';
export const MINUTE_TYPE: TIME_TYPE = 'min';
export const SECOND_TYPE: TIME_TYPE = 'second';

// component config constant
export const ZERO_PADDING: string = '0';
export const HOURS: Array<string> = Array.from({ length: 24 }, (_, hour) => {
  return String(hour).padStart(2, ZERO_PADDING);
});
export const MINUTES: Array<string> = Array.from({ length: 60 }, (_, minute) => {
  return String(minute).padStart(2, ZERO_PADDING);
});
export const DISPLAY_DEFAULT_UNIT = new Map([
  [HOUR_TYPE, '시간'], [MINUTE_TYPE, '분'], [SECOND_TYPE, '초'], ['', '']
]);
