import { toPairs, find, pathEq } from '@/ramda';
import { IndexedObject } from '@/types';
import { isEnum } from './typeGuard';

/**
 * EnumからEnumへの変換を行う
 * @param fromEnum 変換元のenum
 * @param toEnum 変換後のenum
 * @param defaultValue 変換後のenumにmatchしない場合に設定する変換後のenum
 */
export const enum2enum = <T, K>(fromEnum: IndexedObject<T>, toEnum: IndexedObject<K>, defaultValue: K) => (
  value: T,
): K => {
  if (isEnum(fromEnum)(value)) {
    return defaultValue;
  }
  const fromKey = find(pathEq(['1'], value), toPairs(fromEnum))?.[0] || '';
  const toValue = find(pathEq(['0'], fromKey), toPairs(toEnum))?.[1] || defaultValue;
  return toValue;
};
