

export const checkValidData = (name,email,password) => {
   
   const isNameValid = /^[A-Za-z\s]+$/.test(name);

   const isEmailValid = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/.test(email);

   const isPasswordValid = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&^])[A-Za-z\d@.#$!%*?&]{8,15}$/.test(password);

   
 
   if(!isNameValid) return "* Invalid Name"
   if(!isEmailValid) return "* Email ID is not valid"
   if(!isPasswordValid) return "* Password is not valid"
   

   return null
}