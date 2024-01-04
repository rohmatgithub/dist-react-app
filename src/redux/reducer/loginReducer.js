const authState = {
  token: null,
  isLogin: false,
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        token: action.authorization,
        isLogin: true,
      };
    case "LOGOUT":
      return {
        token: "",
        isLogin: false,
      };
    default:
      return state;
  }
};

export default authReducer;
