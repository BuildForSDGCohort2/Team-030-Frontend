export const AuthActionTypes = {
 GET_AUTH: "GET_AUTH",
 GET_AUTH_SUCCESS: "GET_AUTH_SUCCESS",
 GET_AUTH_FAILURE: "GET_AUTH_FAILURE"
};

export class GetAuth {
 type = AuthActionTypes.GET_AUTH;
}

export class GetAuthSuccess {
 type = AuthActionTypes.GET_AUTH_SUCCESS;
 payload = null;
 constructor(payload) {
  this.payload = payload;
 }
}

export class GetAuthFailure {
 type = AuthActionTypes.GET_AUTH_FAILURE;
 error = null;
 constructor(error) {
  this.error = error;
 }
}
