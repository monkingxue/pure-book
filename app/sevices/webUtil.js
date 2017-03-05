import {compose} from "./basicUtil";

const kernel = () => {
  // request
};

const applyMiddlewares = (...middlewares) => data => compose(...middlewares)(data);
