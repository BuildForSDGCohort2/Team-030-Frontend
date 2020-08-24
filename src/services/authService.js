import * as Http from "./config";

export class AuthService {
 constructor() {
  this.http = Http.createInstance();
 }

 async registerUser(data) {
  const r = await this.http.post("", data);
  return Promise.resolve(r.data);
 }

 async logUserIn(data) {
  const r = await this.http.post("", data);
  return Promise.resolve(r.data);
 }

 async getLoggedUser() {
  const r = await this.http.get("");
  return Promise.resolve(r.data);
 }
}
