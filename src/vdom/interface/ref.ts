type UpdateFn = (state?: any) => void;

export interface Ref {
  current?: any;
  update?: UpdateFn;
  onUpdate?: (updateFn: UpdateFn) => void;
}
