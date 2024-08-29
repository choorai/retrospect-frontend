const TIME_TYPE = {
  HOUR: 'hour',
  MINUTE: 'min',
  SECOND: 'second'
} as const;

export type TIME_TYPE = typeof TIME_TYPE[keyof typeof TIME_TYPE];
