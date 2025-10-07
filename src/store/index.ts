import {useStore} from '@nanostores/solid';
import { atom } from 'nanostores';

const $timeSectionsAtom = atom<string[][]>([]);

const $timer = atom<number>(0);

export default {
  getTimeSections: () => {
    return $timeSectionsAtom.get();
  },
  setTimeSections: (value: string[][]) => {
    return $timeSectionsAtom.set(value);
  },
  getTimer: () => {
    return $timer.get();
  },
  setTimer: (value: number) => {
    return $timer.set(value);
  },
  useTimeSections: () => {
    return useStore($timeSectionsAtom);
  }
} as const;
