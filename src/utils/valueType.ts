/* eslint-disable @typescript-eslint/ban-types */
export const EValueType = {
  string: 'string',
  number: 'number',
  boolean: 'boolean',
  symbol: 'symbol',
  bigint: 'bigint',
  function: 'function',
  date: 'date',
  object: 'object',
  array: 'array',
  null: 'null',
  undefined: 'undefined',
  unknown: 'unknown',
} as const;
export type ValueType = typeof EValueType[keyof typeof EValueType];

const __getObjectType = (value: object | null): ValueType => {
  if (value === null) {
    return EValueType.null;
  }
  if (Array.isArray(value)) {
    return EValueType.array;
  }
  if (value instanceof Date) {
    return EValueType.date;
  }
  return EValueType.object;
};

// eslint-disable-next-line complexity
export const getValueType = (value: unknown): ValueType => {
  switch (typeof value) {
    case 'string':
      return EValueType.string;
    case 'number':
      return EValueType.number;
    case 'boolean':
      return EValueType.boolean;
    case 'function':
      return EValueType.function;
    case 'undefined':
      return EValueType.undefined;
    case 'symbol':
      return EValueType.symbol;
    case 'bigint':
      return EValueType.bigint;
    case 'object':
      return __getObjectType(value);
    default:
      return EValueType.unknown;
  }
};