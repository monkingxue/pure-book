import { connect } from "react-redux";

/**
 * reducer 辅助函数
 * @param  {object} initState
 * @param  {Object} handlers
 * @return {Reducer}
 */
export function createReducer(initState, handlers) {
  return function reducer(state = initState, action) {
    const handler = handlers[action.type];
    return handler ? handler(state, action) : state;
  };
}

/**
 * 将木偶组件变成智能组件
 * @param  {Function} mapStateToProps
 * @param  {Object}   mapActionCreators
 * @param  {Component?} component
 * @return {Connect | Container}
 */
export function createContainer(mapStateToProps, mapActionCreators, component) {
  const connectComponent = connect(mapStateToProps, mapActionCreators);
  return component ? connectComponent(component) : connectComponent;
}
