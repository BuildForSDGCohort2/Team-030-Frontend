import React from "react";
import { SimpleCard } from "../../layout/Card";

export const LoginForm = ({ topComponentProps }) => {
 const [form, setForm] = React.useState({
  email: "",
  password: ""
 });

 const isLoggedIn = topComponentProps.isLoggedIn;

 React.useEffect(() => {
  topComponentProps.history.push(); // Will navigate to the user's dashboard
  // Cleanup
  return () => {
   setForm({
    email: "",
    password: ""
   });
  };
 }, [isLoggedIn]);

 const changeFormValue = (e) => {
  setForm({
   ...form,
   [e.target.name]: e.target.value
  });
 };

 const submitForm = (e) => {
  e.preventDefault();
 };

 return(
  <div>
   <SimpleCard 
    title="Login"
    raised={true}
   >
    <form onSubmit={submitForm}>
     <input type="email" name="email" value={form.email} onInput={changeFormValue} />
     <input type="password" name="password" value={form.password} onInput={changeFormValue} />
    </form>
   </SimpleCard>
  </div>
 );
}
