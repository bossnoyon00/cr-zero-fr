const initialState = {
  success: null,
  message: null,
  error: null,
  loading: false,
};

const formsReducer = (state = initialState, action) => {
  const { type, payload } = action;

  switch (type) {
    case "FORM_SUBMIT_REQUEST":
      return {
        ...state,
        loading: true,
      };
    case "FORM_SUBMIT_SUCCESS":
      return {
        ...state,
        loading: false,
        success: payload.success,
        message: payload.message,
      };
    case "FORM_SUBMIT_FAIL":
      return {
        ...state,
        loading: false,
        success: payload.success,
        error: payload.error,
      };
    case "FORM_SUBMIT_RESET":
      return {
        ...state,
        success: null,
        message: null,
        error: null,
      };
    default:
      return state;
  }
};

export default formsReducer;
