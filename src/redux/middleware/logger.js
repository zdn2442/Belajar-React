export const tes = state => next => action => {
    // return next(action)
    if (action.color !== 'purple') {
        action.color = 'purple'
        return next(action)
    } 
    return next(action)
}

export const logger = (state) => {
  return (next) => {
    return (action) => {
      console.log("get", action.type);
    //   return next(action)
      if (action.type === "change") {
        return next(action)
      } else {
        return
      }
    };
  };
};
