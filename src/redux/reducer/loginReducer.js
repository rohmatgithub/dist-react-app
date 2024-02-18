const authState = {
  token: null,
  isLogin: false,
  isSelected: false,
  company: {},
  userProfile: {},
};

const authReducer = (state = authState, action) => {
  switch (action.type) {
    case "LOGIN":
      return {
        token: action.authorization,
        isLogin: true,
        company: action.company,
      };
    case "LOGOUT":
      return {
        token: "",
        isLogin: false,
        isSelected: false,
        company: {},
        userProfile: {},
      };
    case "UPDATE_COMPANY_BRANCH":
      return {
        ...state,
        isSelected: action.isSelected,
        company: action.company,
      };
    case "UPDATE_PERSON_PROFILE":
      return {
        ...state,
        userProfile: action.userProfile,
      };
    default:
      return state;
  }
};

export default authReducer;
