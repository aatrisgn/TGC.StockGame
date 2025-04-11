//----------------------
// <auto-generated>
//     Generated using the NSwag toolchain v14.2.0.0 (NJsonSchema v11.1.0.0 (Newtonsoft.Json v13.0.0.0)) (http://NSwag.org)
// </auto-generated>
//----------------------

/* tslint:disable */
/* eslint-disable */
// ReSharper disable InconsistentNaming

import { mergeMap as _observableMergeMap, catchError as _observableCatch } from 'rxjs/operators';
import { Observable, throwError as _observableThrow, of as _observableOf } from 'rxjs';
import { Injectable, Inject, Optional, InjectionToken } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse, HttpResponseBase } from '@angular/common/http';

export const API_BASE_URL = new InjectionToken<string>('API_BASE_URL');

@Injectable()
export class EventClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    createNewEvent(id: string): Observable<EventResponse> {
        let url_ = this.baseUrl + "/api/games/{id}/events";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateNewEvent(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateNewEvent(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<EventResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<EventResponse>;
        }));
    }

    protected processCreateNewEvent(response: HttpResponseBase): Observable<EventResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result401: any = null;
            let resultData401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result401 = ProblemDetails.fromJS(resultData401);
            return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
        } else if (status === 403) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result403: any = null;
            let resultData403 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result403 = ProblemDetails.fromJS(resultData403);
            return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            }));
        } else if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = EventResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ProblemDetails.fromJS(resultData400);
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

@Injectable()
export class GameClient {
    private http: HttpClient;
    private baseUrl: string;
    protected jsonParseReviver: ((key: string, value: any) => any) | undefined = undefined;

    constructor(@Inject(HttpClient) http: HttpClient, @Optional() @Inject(API_BASE_URL) baseUrl?: string) {
        this.http = http;
        this.baseUrl = baseUrl ?? "";
    }

    getAllGames(): Observable<GameResponse[]> {
        let url_ = this.baseUrl + "/api/games";
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetAllGames(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetAllGames(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<GameResponse[]>;
                }
            } else
                return _observableThrow(response_) as any as Observable<GameResponse[]>;
        }));
    }

    protected processGetAllGames(response: HttpResponseBase): Observable<GameResponse[]> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result401: any = null;
            let resultData401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result401 = ProblemDetails.fromJS(resultData401);
            return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
        } else if (status === 403) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result403: any = null;
            let resultData403 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result403 = ProblemDetails.fromJS(resultData403);
            return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            }));
        } else if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            if (Array.isArray(resultData200)) {
                result200 = [] as any;
                for (let item of resultData200)
                    result200!.push(GameResponse.fromJS(item));
            }
            else {
                result200 = <any>null;
            }
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ProblemDetails.fromJS(resultData400);
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    createNewGame(gameRequest: GameRequest): Observable<GameResponse> {
        let url_ = this.baseUrl + "/api/games";
        url_ = url_.replace(/[?&]$/, "");

        const content_ = JSON.stringify(gameRequest);

        let options_ : any = {
            body: content_,
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Content-Type": "application/json",
                "Accept": "application/json"
            })
        };

        return this.http.request("post", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processCreateNewGame(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processCreateNewGame(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<GameResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<GameResponse>;
        }));
    }

    protected processCreateNewGame(response: HttpResponseBase): Observable<GameResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result401: any = null;
            let resultData401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result401 = ProblemDetails.fromJS(resultData401);
            return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
        } else if (status === 403) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result403: any = null;
            let resultData403 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result403 = ProblemDetails.fromJS(resultData403);
            return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            }));
        } else if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GameResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ProblemDetails.fromJS(resultData400);
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    getGameById(id: string): Observable<GameResponse> {
        let url_ = this.baseUrl + "/api/games/{id}";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("get", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processGetGameById(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processGetGameById(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<GameResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<GameResponse>;
        }));
    }

    protected processGetGameById(response: HttpResponseBase): Observable<GameResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result401: any = null;
            let resultData401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result401 = ProblemDetails.fromJS(resultData401);
            return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
        } else if (status === 403) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result403: any = null;
            let resultData403 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result403 = ProblemDetails.fromJS(resultData403);
            return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            }));
        } else if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GameResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ProblemDetails.fromJS(resultData400);
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }

    progressGame(id: string): Observable<GameResponse> {
        let url_ = this.baseUrl + "/api/games/{id}/progress";
        if (id === undefined || id === null)
            throw new Error("The parameter 'id' must be defined.");
        url_ = url_.replace("{id}", encodeURIComponent("" + id));
        url_ = url_.replace(/[?&]$/, "");

        let options_ : any = {
            observe: "response",
            responseType: "blob",
            headers: new HttpHeaders({
                "Accept": "application/json"
            })
        };

        return this.http.request("put", url_, options_).pipe(_observableMergeMap((response_ : any) => {
            return this.processProgressGame(response_);
        })).pipe(_observableCatch((response_: any) => {
            if (response_ instanceof HttpResponseBase) {
                try {
                    return this.processProgressGame(response_ as any);
                } catch (e) {
                    return _observableThrow(e) as any as Observable<GameResponse>;
                }
            } else
                return _observableThrow(response_) as any as Observable<GameResponse>;
        }));
    }

    protected processProgressGame(response: HttpResponseBase): Observable<GameResponse> {
        const status = response.status;
        const responseBlob =
            response instanceof HttpResponse ? response.body :
            (response as any).error instanceof Blob ? (response as any).error : undefined;

        let _headers: any = {}; if (response.headers) { for (let key of response.headers.keys()) { _headers[key] = response.headers.get(key); }}
        if (status === 401) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result401: any = null;
            let resultData401 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result401 = ProblemDetails.fromJS(resultData401);
            return throwException("A server side error occurred.", status, _responseText, _headers, result401);
            }));
        } else if (status === 403) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result403: any = null;
            let resultData403 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result403 = ProblemDetails.fromJS(resultData403);
            return throwException("A server side error occurred.", status, _responseText, _headers, result403);
            }));
        } else if (status === 500) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("A server side error occurred.", status, _responseText, _headers);
            }));
        } else if (status === 200) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result200: any = null;
            let resultData200 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result200 = GameResponse.fromJS(resultData200);
            return _observableOf(result200);
            }));
        } else if (status === 400) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            let result400: any = null;
            let resultData400 = _responseText === "" ? null : JSON.parse(_responseText, this.jsonParseReviver);
            result400 = ProblemDetails.fromJS(resultData400);
            return throwException("A server side error occurred.", status, _responseText, _headers, result400);
            }));
        } else if (status !== 200 && status !== 204) {
            return blobToText(responseBlob).pipe(_observableMergeMap((_responseText: string) => {
            return throwException("An unexpected server error occurred.", status, _responseText, _headers);
            }));
        }
        return _observableOf(null as any);
    }
}

export class ProblemDetails implements IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;

    constructor(data?: IProblemDetails) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            for (var property in _data) {
                if (_data.hasOwnProperty(property))
                    this[property] = _data[property];
            }
            this.type = _data["type"];
            this.title = _data["title"];
            this.status = _data["status"];
            this.detail = _data["detail"];
            this.instance = _data["instance"];
        }
    }

    static fromJS(data: any): ProblemDetails {
        data = typeof data === 'object' ? data : {};
        let result = new ProblemDetails();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        for (var property in this) {
            if (this.hasOwnProperty(property))
                data[property] = this[property];
        }
        data["type"] = this.type;
        data["title"] = this.title;
        data["status"] = this.status;
        data["detail"] = this.detail;
        data["instance"] = this.instance;
        return data;
    }
}

export interface IProblemDetails {
    type?: string | undefined;
    title?: string | undefined;
    status?: number | undefined;
    detail?: string | undefined;
    instance?: string | undefined;

    [key: string]: any;
}

export class EventResponse implements IEventResponse {
    some?: string | undefined;

    constructor(data?: IEventResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.some = _data["some"];
        }
    }

    static fromJS(data: any): EventResponse {
        data = typeof data === 'object' ? data : {};
        let result = new EventResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["some"] = this.some;
        return data;
    }
}

export interface IEventResponse {
    some?: string | undefined;
}

export class GameResponse implements IGameResponse {
    id?: string;
    name?: string;
    players?: PlayerEntity[];
    stocks?: AssetEntity[];
    inflation?: AssetEntity | undefined;
    interestRate?: AssetEntity | undefined;
    mortgageIndex?: AssetEntity | undefined;
    iteration?: number;

    constructor(data?: IGameResponse) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.id = _data["id"];
            this.name = _data["name"];
            if (Array.isArray(_data["players"])) {
                this.players = [] as any;
                for (let item of _data["players"])
                    this.players!.push(PlayerEntity.fromJS(item));
            }
            if (Array.isArray(_data["stocks"])) {
                this.stocks = [] as any;
                for (let item of _data["stocks"])
                    this.stocks!.push(AssetEntity.fromJS(item));
            }
            this.inflation = _data["inflation"] ? AssetEntity.fromJS(_data["inflation"]) : <any>undefined;
            this.interestRate = _data["interestRate"] ? AssetEntity.fromJS(_data["interestRate"]) : <any>undefined;
            this.mortgageIndex = _data["mortgageIndex"] ? AssetEntity.fromJS(_data["mortgageIndex"]) : <any>undefined;
            this.iteration = _data["iteration"];
        }
    }

    static fromJS(data: any): GameResponse {
        data = typeof data === 'object' ? data : {};
        let result = new GameResponse();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["id"] = this.id;
        data["name"] = this.name;
        if (Array.isArray(this.players)) {
            data["players"] = [];
            for (let item of this.players)
                data["players"].push(item.toJSON());
        }
        if (Array.isArray(this.stocks)) {
            data["stocks"] = [];
            for (let item of this.stocks)
                data["stocks"].push(item.toJSON());
        }
        data["inflation"] = this.inflation ? this.inflation.toJSON() : <any>undefined;
        data["interestRate"] = this.interestRate ? this.interestRate.toJSON() : <any>undefined;
        data["mortgageIndex"] = this.mortgageIndex ? this.mortgageIndex.toJSON() : <any>undefined;
        data["iteration"] = this.iteration;
        return data;
    }
}

export interface IGameResponse {
    id?: string;
    name?: string;
    players?: PlayerEntity[];
    stocks?: AssetEntity[];
    inflation?: AssetEntity | undefined;
    interestRate?: AssetEntity | undefined;
    mortgageIndex?: AssetEntity | undefined;
    iteration?: number;
}

export class PlayerEntity implements IPlayerEntity {
    name?: string;

    constructor(data?: IPlayerEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): PlayerEntity {
        data = typeof data === 'object' ? data : {};
        let result = new PlayerEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data;
    }
}

export interface IPlayerEntity {
    name?: string;
}

export class AssetEntity implements IAssetEntity {
    assetName?: string;
    indexPrice?: number;
    currentPrice?: number;
    previousPrice?: number;
    marketCap10?: number;
    marketCap20?: number;
    marketCap50?: number;
    marketCap100?: number;
    assetData?: AssetPrice[];

    constructor(data?: IAssetEntity) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.assetName = _data["assetName"];
            this.indexPrice = _data["indexPrice"];
            this.currentPrice = _data["currentPrice"];
            this.previousPrice = _data["previousPrice"];
            this.marketCap10 = _data["marketCap10"];
            this.marketCap20 = _data["marketCap20"];
            this.marketCap50 = _data["marketCap50"];
            this.marketCap100 = _data["marketCap100"];
            if (Array.isArray(_data["assetData"])) {
                this.assetData = [] as any;
                for (let item of _data["assetData"])
                    this.assetData!.push(AssetPrice.fromJS(item));
            }
        }
    }

    static fromJS(data: any): AssetEntity {
        data = typeof data === 'object' ? data : {};
        let result = new AssetEntity();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["assetName"] = this.assetName;
        data["indexPrice"] = this.indexPrice;
        data["currentPrice"] = this.currentPrice;
        data["previousPrice"] = this.previousPrice;
        data["marketCap10"] = this.marketCap10;
        data["marketCap20"] = this.marketCap20;
        data["marketCap50"] = this.marketCap50;
        data["marketCap100"] = this.marketCap100;
        if (Array.isArray(this.assetData)) {
            data["assetData"] = [];
            for (let item of this.assetData)
                data["assetData"].push(item.toJSON());
        }
        return data;
    }
}

export interface IAssetEntity {
    assetName?: string;
    indexPrice?: number;
    currentPrice?: number;
    previousPrice?: number;
    marketCap10?: number;
    marketCap20?: number;
    marketCap50?: number;
    marketCap100?: number;
    assetData?: AssetPrice[];
}

export class AssetPrice implements IAssetPrice {
    iteration?: number;
    priceIndex?: number;

    constructor(data?: IAssetPrice) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.iteration = _data["iteration"];
            this.priceIndex = _data["priceIndex"];
        }
    }

    static fromJS(data: any): AssetPrice {
        data = typeof data === 'object' ? data : {};
        let result = new AssetPrice();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["iteration"] = this.iteration;
        data["priceIndex"] = this.priceIndex;
        return data;
    }
}

export interface IAssetPrice {
    iteration?: number;
    priceIndex?: number;
}

export class GameRequest implements IGameRequest {
    name?: string;
    players?: PlayerRequest[];

    constructor(data?: IGameRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
            if (Array.isArray(_data["players"])) {
                this.players = [] as any;
                for (let item of _data["players"])
                    this.players!.push(PlayerRequest.fromJS(item));
            }
        }
    }

    static fromJS(data: any): GameRequest {
        data = typeof data === 'object' ? data : {};
        let result = new GameRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        if (Array.isArray(this.players)) {
            data["players"] = [];
            for (let item of this.players)
                data["players"].push(item.toJSON());
        }
        return data;
    }
}

export interface IGameRequest {
    name?: string;
    players?: PlayerRequest[];
}

export class PlayerRequest implements IPlayerRequest {
    name?: string | undefined;

    constructor(data?: IPlayerRequest) {
        if (data) {
            for (var property in data) {
                if (data.hasOwnProperty(property))
                    (<any>this)[property] = (<any>data)[property];
            }
        }
    }

    init(_data?: any) {
        if (_data) {
            this.name = _data["name"];
        }
    }

    static fromJS(data: any): PlayerRequest {
        data = typeof data === 'object' ? data : {};
        let result = new PlayerRequest();
        result.init(data);
        return result;
    }

    toJSON(data?: any) {
        data = typeof data === 'object' ? data : {};
        data["name"] = this.name;
        return data;
    }
}

export interface IPlayerRequest {
    name?: string | undefined;
}

export class SwaggerException extends Error {
    override message: string;
    status: number;
    response: string;
    headers: { [key: string]: any; };
    result: any;

    constructor(message: string, status: number, response: string, headers: { [key: string]: any; }, result: any) {
        super();

        this.message = message;
        this.status = status;
        this.response = response;
        this.headers = headers;
        this.result = result;
    }

    protected isSwaggerException = true;

    static isSwaggerException(obj: any): obj is SwaggerException {
        return obj.isSwaggerException === true;
    }
}

function throwException(message: string, status: number, response: string, headers: { [key: string]: any; }, result?: any): Observable<any> {
    if (result !== null && result !== undefined)
        return _observableThrow(result);
    else
        return _observableThrow(new SwaggerException(message, status, response, headers, null));
}

function blobToText(blob: any): Observable<string> {
    return new Observable<string>((observer: any) => {
        if (!blob) {
            observer.next("");
            observer.complete();
        } else {
            let reader = new FileReader();
            reader.onload = event => {
                observer.next((event.target as any).result);
                observer.complete();
            };
            reader.readAsText(blob);
        }
    });
}