export interface Alert {
  type: Type;
  message: string;
}

export type Res<T> = {
  success: boolean;
  data: T;
};

export type Type = 'succes' | 'error';
