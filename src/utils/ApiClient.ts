import axios, {
  AxiosRequestConfig,
  AxiosRequestHeaders,
  AxiosResponse,
} from 'axios';

export interface Token {
  tokenType: string | null;
  token: string | null;
}

export class ApiClient {
  protected _host: string;
  protected _token: Token | null;
  protected _headers: AxiosRequestHeaders | null;
  protected _response: AxiosResponse | null;
  protected _error: any;

  /**
   * @param {string} host
   */
  constructor(host: string) {
    this._host = host;
    this._headers = null;
    this._response = null;
    this._token = null;
    this._error = null;
  }

  /**
   * @returns {string}
   */
  get host(): string {
    return this._host;
  }

  /**
   *
   * @returns {AxiosResponse<*, *>|null}
   */
  get response(): AxiosResponse<any, any> | null {
    return this._response;
  }

  /**
   *
   * @returns {*}
   */
  get error(): any {
    return this._error;
  }

  /**
   *
   * @param {AxiosRequestConfig} config
   * @returns {Promise<AxiosResponse<*, *>|*>}
   */
  async request(
    config: AxiosRequestConfig,
  ): Promise<AxiosResponse<any, any> | any> {
    if (this._token != null) {
      let token;
      if (this._token.tokenType) {
        token = `${this._token.tokenType} ${this._token.token}`;
      } else {
        token = `${this._token}`;
      }

      this._headers = Object.assign(this._headers, { Authorization: token });
    }

    if (this._headers != null) {
      config.headers = this._headers;
    }

    return this.setResponse(axios.request(config));
  }

  /**
   *
   * @param {string} path
   * @returns {string}
   */
  makeUrl(path: string) {
    if (this.host.endsWith('/')) {
      return this.host + path;
    } else {
      return `${this.host}/${path}`;
    }
  }

  /**
   *
   * @param {Promise<AxiosResponse<*, *>>} res
   * @returns {Promise<any>}
   */
  async setResponse(res: Promise<AxiosResponse<any, any>>): Promise<any> {
    try {
      this._response = await res;
      return this.response;
    } catch (error) {
      this._error = error;
      return this.error;
    }
  }

  /**
   *
   * @returns {boolean}
   */
  isSuccess(): boolean {
    return this.response?.statusText === 'OK' && this.error != null;
  }

  /**
   *
   * @param {string} token
   * @param {string|null} tokenType
   * @returns {ApiClient}
   */
  withToken(token: string, tokenType?: string): ApiClient {
    this._token = { tokenType: tokenType || null, token: token };
    return this;
  }

  /**
   *
   * @param {AxiosRequestHeaders} headers
   * @returns {ApiClient}
   */
  withHeader(headers: AxiosRequestHeaders): ApiClient {
    this._headers = headers;
    return this;
  }

  /**
   *
   * @param {string} path
   * @param {*} params
   * @returns {Promise<AxiosResponse<*, *>|*>}
   */
  get(path: string, params: object = {}) {
    const config: AxiosRequestConfig = {};
    config.method = 'GET';
    config.url = this.makeUrl(path);
    config.params = params;

    return this.setResponse(this.request(config));
  }

  /**
   *
   * @param {string} path
   * @param {*} data
   * @returns {Promise<AxiosResponse<*, *>|*|null>}
   */
  post(path: string, data: object = {}) {
    const config: AxiosRequestConfig = {};
    config.method = 'POST';
    config.url = this.makeUrl(path);
    config.data = data;

    return this.setResponse(this.request(config));
  }

  /**
   *
   * @param {string} path
   * @param {*} data
   * @returns {Promise<AxiosResponse<*, *>|*|null>}
   */
  put(path: string, data: object = {}) {
    const config: AxiosRequestConfig = {};
    config.method = 'PUT';
    config.url = this.makeUrl(path);
    config.data = data;

    return this.setResponse(this.request(config));
  }

  /**
   *
   * @param {string} path
   * @param {*} data
   * @returns {Promise<AxiosResponse<*, *>|*|null>}
   */
  patch(path: string, data: object = {}) {
    const config: AxiosRequestConfig = {};
    config.method = 'PATCH';
    config.url = this.makeUrl(path);
    config.data = data;

    return this.setResponse(this.request(config));
  }

  /**
   *
   * @param {string} path
   * @param {*} data
   * @returns {Promise<AxiosResponse<*, *>|*|null>}
   */
  delete(path: string, data: object = {}) {
    const config: AxiosRequestConfig = {};
    config.method = 'DELETE';
    config.url = this.makeUrl(path);
    config.data = data;

    return this.setResponse(this.request(config));
  }
}
