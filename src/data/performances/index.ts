import { sadlersWellsPerformances } from './sadlers-wells';
import { royalOperaHousePerformances } from './royal-opera-house';
import { londonColiseumPerformances } from './london-coliseum';

export const performances = [
  ...sadlersWellsPerformances,
  ...royalOperaHousePerformances,
  ...londonColiseumPerformances,
];
