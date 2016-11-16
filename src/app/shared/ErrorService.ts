import {Injectable} from "@angular/core";

@Injectable()
export class ErrorService {
  public handle(error: any): Promise<any> {
    console.error('ErrorService:', error);
    return Promise.reject(error.message || error);
  }
}
