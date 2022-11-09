export const increment = () => {
    return {
      type: "INCREMENT",
      status: "increasing the number",
    };
  };
  export const decrement = () => {
    return {
      type: "DECREMENT",
      status: "decreasing the number",
    };
  };