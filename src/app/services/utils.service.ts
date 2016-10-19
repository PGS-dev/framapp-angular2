/**
 * Created by rkubisiak on 10/13/2016.
 */
import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {
  constructor(){}

  filterObject(Obj,filterObj){
    let filterArr: Array<string> = Object.keys(filterObj);
    let result;

    if(filterArr.length===0){
      result = Obj;
    }else{
      result = Object.keys(Obj).filter((key)=>{
        var addFlag = true;
        filterArr.forEach((value)=>{
          if(!Obj[key][value] || Obj[key][value]!==filterObj[value]){
            addFlag = false;
          }
        });
        return addFlag;
      }).reduce((obj, key) => {
        obj[key] = Obj[key];
        return obj;
      }, {});
    }

    return result;
  }
}
