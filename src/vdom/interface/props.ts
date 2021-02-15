import { IVirtualNode } from './ivirtual-node';
import { Ref } from './ref';

export interface Props {
  children?: Array<IVirtualNode>;

  // allow for forwardRef cases
  ref?: Ref;
}
