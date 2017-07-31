import { Injectable } from '@angular/core';

@Injectable()
export class ColorConverterSvcService {

  hexToRgb(hex): any {

    var currentHex  = hex.split('#')[1];
    var arrBuff = new ArrayBuffer(4);
    var vw = new DataView(arrBuff);
    vw.setUint32(0,parseInt(currentHex, 16),false);
    var arrByte = new Uint8Array(arrBuff);

    return {
      r: arrByte[1],
      g: arrByte[2],
      b: arrByte[3]
    };
  }

}
