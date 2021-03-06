import { Ref } from './ref';

export type TRef = (el: Element) => void;

export interface IAttributes {
  // typing; detect ref
  ref?: Ref | TRef;

  // array-local unique key to identify element items in a NodeList
  key?: string;
}
