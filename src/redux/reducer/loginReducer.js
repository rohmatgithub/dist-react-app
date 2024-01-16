const authState = {
  token: null,
  isLogin: false,
  isSelected: false,
  companyBranch: {},
  userProfile: {},
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
        isSelected: false,
        companyBranch: {},
        userProfile: {},
      };
    case "UPDATE_COMPANY_BRANCH":
      return {
        ...state,
        isSelected: action.isSelected,
        companyBranch: action.companyBranch,
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
