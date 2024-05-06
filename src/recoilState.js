// recoilState.js
import { atom } from 'recoil';

export const showAnswerState = atom({
  key: 'showAnswerState',
  default: false
});

export const drawerState = atom({
  key: 'drawerState',
  default: false
});

export const pageState = atom({
  key: 'pageState',
  default: 0
})