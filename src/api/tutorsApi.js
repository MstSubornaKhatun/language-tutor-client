export const tutorsCreatedByPromise = async (email, accessToken) => {
  const res = await fetch(`http://localhost:3000/tutors?email=${email}`, {
     
             headers: {
            authorization: `Bearer ${accessToken}`
        }});
  return res.json();
};










// export const tutorsCreatedByPromise = email =>{
//     return fetch(`http://localhost:3000/tutors/bookings?email=${email}`)
//     .then(res => res.json())
// }





// export const tutorsCreatedByPromise = email =>{
//     return fetch(`http://localhost:3000/tutors?email=${email}`)
//     .then(res => res.json())
// }