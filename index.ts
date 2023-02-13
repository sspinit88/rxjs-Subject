import './style.css';

import {
  of,
  map,
  Observable,
  Subject,
  BehaviorSubject,
  ReplaySubject,
} from 'rxjs';

const sbj = new ReplaySubject();

sbj.next(5);

sbj.subscribe((vl) => console.log(`1st: ${vl}`));

sbj.next(6);
sbj.next(7);

sbj.subscribe((vl) => console.log(`2nd: ${vl}`));

/*
Результат  в консоли:

1st: 5
1st: 6
1st: 7
2nd: 6
2nd: 7
*/
