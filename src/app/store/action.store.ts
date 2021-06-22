import { Action } from '@ngrx/store';

export enum ActionTypes {
  Add = 'ADD',
  Remove = 'REM',
  Clear = 'CLE',
}

export const Add = (payload: any) => {
  return <Action>{ type: ActionTypes.Add, payload};
}

export const Remove = (payload: any) => {
  return <Action>{ type: ActionTypes.Remove, payload };
}

export const Clear = () => {
  return <Action>{ type: ActionTypes.Clear, payload: null };
}