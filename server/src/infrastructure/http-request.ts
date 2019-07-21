import {HttpService, Injectable} from '@nestjs/common';
import {Observable} from 'rxjs';
import {AxiosRequestConfig, AxiosResponse} from 'axios';
import {map} from 'rxjs/operators';
import {CustomError} from '../domain/custom.error';

@Injectable()
export class HttpRequest<T> {
  private readonly status2xx = [200, 201, 202, 203, 204, 205, 206];
  private readonly status4xx = [400, 401, 403, 404, 405, 406, 407, 408, 409, 410, 411, 412, 413, 414, 415, 416, 421];
  private readonly status5xx = [500, 501, 502, 503, 504, 505];

  constructor(private readonly httpService: HttpService) {
  }

  public getAsList(url: string, param?: unknown): Observable<T[]> {

    console.log(`url: ${url}, param:${param}`);
    // TODO: 雑すぎるので、なんとかする
    if (param == undefined) {
      return this.httpService.get(url).pipe(
        map((r: AxiosResponse<T[]>) => {
          // TODO: メッセージ変えるなら分けるかも？
          if (this.isStatus4xx(r.status) || this.isStatus5xx(r.status)) {
            throw new CustomError(r.statusText, r.status);
          }
          console.log('r.data', r.data);
          return r.data;
        })
      );
    }

    const config: AxiosRequestConfig = {
      params: param,
    };
    return this.httpService.get(url, config).pipe(
      map((r: AxiosResponse<T[]>) => {
        // TODO: メッセージ変えるなら分けるかも？
        if (this.isStatus4xx(r.status) || this.isStatus5xx(r.status)) {
          throw new CustomError(r.statusText, r.status);
        }
        return r.data;
      })
    );
  }

  public get(url: string, param?: unknown): Observable<T> {

    if (param == undefined) {
      return this.httpService.get(url).pipe(
        map((r: AxiosResponse<T>) => {
          // TODO: メッセージ変えるなら分けるかも？
          if (this.isStatus4xx(r.status) || this.isStatus5xx(r.status)) {
            throw new CustomError(r.statusText, r.status);
          }
          return r.data;
        })
      );
    }
    const config: AxiosRequestConfig = {
      params: param,
    };
    return this.httpService.get(url, config).pipe(
      map((r: AxiosResponse<T>) => {
        // TODO: メッセージ変えるなら分けるかも？
        if (this.isStatus4xx(r.status) || this.isStatus5xx(r.status)) {
          throw new CustomError(r.statusText, r.status);
        }
        return r.data;
      })
    );
  }

  public post(url: string, data: T): Observable<T> {
    return this.httpService.post(url, data).pipe(
      map((r: AxiosResponse<T>) => {
        // TODO: メッセージ変えるなら分けるかも？
        if (this.isStatus4xx(r.status) || this.isStatus5xx(r.status)) {
          throw new CustomError(r.statusText, r.status);
        }
        return r.data;
      })
    );
  }

  public put(url: string, data: T): Observable<T> {
    return this.httpService.put(url, data).pipe(
      map((r: AxiosResponse<T>) => {
        // TODO: メッセージ変えるなら分けるかも？
        if (this.isStatus4xx(r.status) || this.isStatus5xx(r.status)) {
          throw new CustomError(r.statusText, r.status);
        }
        return r.data;
      })
    );
  }

  private isStatus4xx(statusCode: number): boolean {
    return this.status4xx.includes(statusCode);
  }

  private isStatus5xx(statusCode: number): boolean {
    return this.status5xx.includes(statusCode);
  }

  private isStatus2xx(statusCode: number): boolean {
    return this.status2xx.includes(statusCode);
  }
}
