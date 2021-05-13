import { Injectable } from '@angular/core';
import * as crypto from 'crypto-js';

@Injectable({
  providedIn: 'root'
})
export class HashServiceService {

  constructor() { }

  hash(message: String, algorithm: String): String {
    switch(algorithm) {
      case 'sha-256':
        return crypto.SHA256(message as string).toString();
        break;
      case 'sha-512':
        return crypto.SHA512(message as string).toString();
        break;
      case 'md5':
        return crypto.MD5(message as string).toString();
        break;
      case 'ripemd-160':
        return crypto.RIPEMD160(message as string).toString();
        break;
      case 'sha-1':
        return crypto.SHA1(message as string).toString();
        break;
      case 'sha-3':
        return crypto.SHA3(message as string).toString();
        break;
      case '':
        return "Selecciona un algoritmo";
        break;
      default:
        return "Algoritmo no reconocido";
    }
    return "";
  }
}
