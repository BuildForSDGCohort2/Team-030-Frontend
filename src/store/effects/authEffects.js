import { GetAuth, GetAuthSuccess, GetAuthFailure } from "../actions/authActions";
import { AuthService } from "../../services";

export default () => {
 return dispatch => {
  // Load first
  dispatch(new GetAuth());
  try {
   const service = new AuthService();
   const data = await service.getLoggedUser();
   dispatch(new GetAuthSuccess(data.response));
  } catch (error) {
   dispatch(new GetAuthFailure(error.error.response));
  }
 };
};
