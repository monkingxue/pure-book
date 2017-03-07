import qs from "querystring";

import {compose} from "./basicUtil";

// content-type config in header
const contentType = [
  "application/json; charset=utf-8",
  "application/x-www-form-urlencoded; charset=utf-8"
];

// fetch config
const config = {
  mode: "cors",
  headers: {
    "Content-type": contentType[0]
  },
  credentials: "include"
};

// network timeout expires
const EXPIRES = 5000;

/**
 * network kernel util
 * @param {String} method
 * @param {String} url
 * @param {Object} body
 * @param {Object} query
 * @return {Promise.<*>|Promise.<T>}
 */
const kernel = (method, url, body, query) => {

  config.method = method;

  if (Object.keys(query).length !== 0)
    url += `?${qs.stringify(query)}`;

  method !== "GET" && (config.body = body);

  const network = fetch(url, config);

  const timeout = new Promise((resolve, reject) => {
    setTimeout(() => reject("网络请求超时，请重试"), EXPIRES);
  });

  return Promise.race([network, timeout]);
};

/**
 * handle the error in network connect
 * @param {Promise} promise
 * @return {Undefined}
 */
const errMiddleware = promise =>
  promise.catch(error => {
    alert(error);
    throw new Error(error);
  });

/**
 * get the response JSON data
 * @param {Promise} promise
 * @return {Promise}
 */
const getJSONMiddleware = promise => promise.then(res => res.json());

/**
 * add the middlewares to kernel function
 * return a function could apply kernel params
 * @param {Function} middlewares
 * @return {Function}
 */
const applyMiddlewares = (...middlewares) =>
  kernel => method => ({url, body = {}, query = {}}) => {

    compose(middlewares)(kernel(method, url, body, query));
  };

const http = applyMiddlewares(errMiddleware, getJSONMiddleware)(kernel);

export const httpGet = http("GET");

export const httpPost = http("POST");

export const httpPut = http("PUT");

export const httpDel = http("DELETE");

