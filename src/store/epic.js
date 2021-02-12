/**
 * redux-observable 的实现原理，感觉有点怪，跟react-thunk有比较大差别，特别整理一下。
 * https://www.processon.com/view/link/60255440f346fb64f5651409
 */
import { of } from "rxjs";
import { filter,delay, map,  tap} from "rxjs/operators";
import * as ActionType from "./ActionType";
import { increase, decrease } from "./ActioncCreator";
export default function epic(action$, state$){
   return  action$.pipe(
        tap(action=>{
            console.log(`epic :: data stream enter, action = ${JSON.stringify(action)}`);
        }),
       filter(action=>{
            return action.type===ActionType.INCREASE;
       }),
       delay(1000),
       tap(action=>{
           console.log(`epic :: after delay 1000, action = ${JSON.stringify(action)}`);
       }),
       map(action=>{
            console.log(`epic :: map :: enter, action = ${JSON.stringify(action)}`);
           // 隔一秒之后做逆运算
           if(action.type===ActionType.INCREASE){
                const data = decrease();
                console.log(`epic :: map:: data = ${JSON.stringify(data)}`);
                return data
           }else if(action.type===ActionType.DECREASE){
                const data = increase();
                console.log(`epic :: map:: data = ${JSON.stringify(data)}`);
                return data;
           }else{
               return {type:"no-support"};
           }
       }),
       tap(action=>{
        console.log(`epic :: after map, action = ${JSON.stringify(action)}`);
    }),
   )
}