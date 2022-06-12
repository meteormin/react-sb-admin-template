import * as Auth from './utils/auth';
import * as Api from './utils/ApiClient';
import * as Str from './utils/str';
import Config from './config';
import HiddenByRole from './utils/HiddenByRole';
import Restricted from './utils/Restricted';
import Protected from './utils/Protected';
import {
  ApiClient,
  ApiResponse,
  ErrorResInterface,
  Token,
} from './utils/ApiClient';
import { AxiosRequestHeaders } from 'axios';
import { makePath } from './utils/str';

export const config = Config();
export const auth = Auth;

export interface ApiConfig {
  host?: string | null;
  prefix?: string | null;
  headers?: AxiosRequestHeaders;
  token?: Token;
}

/**
 * @param {ApiConfig} apiConfig
 * @returns {ApiClient}
 */
export const api = (apiConfig?: ApiConfig): ApiClient => {
  if (apiConfig?.prefix) {
    if (!apiConfig?.host) {
      apiConfig.host = config.api.default.host as string;
    }

    try {
      const url = new URL(apiConfig.host);
      apiConfig.host =
        url.protocol +
        '//' +
        makePath(url.host + url.pathname, apiConfig.prefix);
    } catch (error) {
      const url = new URL(window.location.href);
      apiConfig.host =
        url.protocol +
        '//' +
        makePath(url.host + apiConfig.host, apiConfig.prefix);
    }
  }

  if (apiConfig?.host) {
    try {
      const url = new URL(apiConfig.host);
      apiConfig.host = url.protocol + '//' + url.host + url.pathname;
    } catch (error) {
      const url = new URL(window.location.href);
      apiConfig.host = url.protocol + '//' + url.host + apiConfig.host;
    }
  }

  const client = apiConfig?.host
    ? new Api.ApiClient(apiConfig.host)
    : new Api.ApiClient(config.api.default.host as string);

  if (apiConfig) {
    if (apiConfig.headers) {
      client.withHeader(apiConfig.headers);
    }
    if (apiConfig.token) {
      client.withToken(
        apiConfig.token.token as string,
        apiConfig.token.tokenType as string,
      );
    }
  }

  return client;
};

export const apiResponse = (res: ApiResponse): any | ErrorResInterface => {
  if (res.isSuccess && res.res) {
    return res.res.data;
  }

  if (res.error) {
    return res.error;
  }
};

export const guard = {
  HiddenByRole,
  Restricted,
  Protected,
};

export const str = Str;
