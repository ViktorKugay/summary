export function reduceReducers(...reducersArray) {
  return function(previousState, currentAction) {
    const reducerFunction = function(accumulator, currentReducer) {
      return currentReducer(accumulator, currentAction);
    };

    return reducersArray.reduce(reducerFunction, previousState);
  };
}
