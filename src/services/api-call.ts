import axios, { AxiosPromise, AxiosRequestConfig } from "axios";

type UrlParams = {
  [key: string]: string | number;
};

// sample parameters
type ApiCallOptions = AxiosRequestConfig & {
  language: string;
  apiUrl: string;
  accessToken?: string;
  urlParams?: UrlParams;
};

function rtrimSlashes(s: string): string {
  return s.replace(/\/+$/, "");
}

function makeUrl(config: ApiCallOptions): string {
  const apiUrl = rtrimSlashes(config.apiUrl);
  let url = `${apiUrl}/${config.url || ""}`;

  // replace url tokens with values
  if (config.urlParams) {
    Object.entries(config.urlParams).forEach((item) => {
      const [key, value] = item;
      url = url.replace("{" + key + "}", value.toString());
    });
  }

  return url;
}

export function apiCall<R extends unknown>(
  config: ApiCallOptions
): AxiosPromise<R> {
  const { language, apiUrl, accessToken, urlParams, ...restConfig } = config;
  const cfg: AxiosRequestConfig = restConfig;

  cfg.url = makeUrl(config);

  if (!cfg.headers) {
    cfg.headers = {};
  }

  cfg.headers["Accept-Language"] = language;

  if (accessToken) {
    cfg.headers["X-Access-Token"] = accessToken;
  }

  return axios(cfg);
}
