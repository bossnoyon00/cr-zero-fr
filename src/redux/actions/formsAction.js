import { publicAPI } from "../../config/constants";

export const sendContactUsData = (formData) => async (dispatch) => {
  try {
    dispatch({ type: "FORM_SUBMIT_REQUEST" });
    const { data } = await publicAPI.post("/user/contactUs", formData);
    console.log(
      "🚀 ~ file: formsAction.js:7 ~ sendContactUsData ~ data:",
      data
    );
    dispatch({ type: "FORM_SUBMIT_SUCCESS", payload: data });
  } catch (error) {
    dispatch({ type: "FORM_SUBMIT_SUCCESS", payload: error?.response?.data });
  }
};
