import { apiCall } from "../api-call";
import { AxiosRequestConfig } from "axios";

jest.mock("axios", () => {
  const fn = async (config: AxiosRequestConfig) => {
    return Promise.resolve({
      status: 200,
      statusText: "OK",
      config,
    });
  };

  fn.interceptors = {
    request: { use: jest.fn() },
    response: { use: jest.fn() },
  };

  return fn;
});

describe("apiCall", () => {
  const apiCallOpts = {
    language: "en",
    apiUrl: "https://jsonplaceholder.typicode.com",
    url: "todos/1",
  };

  it("proper url should be constructed", async () => {
    const response = await apiCall(apiCallOpts);
    expect(response.config.url).toEqual(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
  });

  it("proper headers should be set", async () => {
    const response = await apiCall(apiCallOpts);
    expect(response.config.headers).toMatchObject({
      "Accept-Language": apiCallOpts.language,
    });
  });
});
