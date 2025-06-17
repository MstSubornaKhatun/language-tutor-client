export const tutorsCreatedByPromise = async (email, accessToken) => {
  const res = await fetch(`https://language-tutor-server.vercel.app/tutors?email=${email}`, {
     
             headers: {
            authorization: `Bearer ${accessToken}`
        }});
  return res.json();
};










// export const tutorsCreatedByPromise = email =>{
//     return fetch(`https://language-tutor-server.vercel.app/tutors/bookings?email=${email}`)
//     .then(res => res.json())
// }





// export const tutorsCreatedByPromise = email =>{
//     return fetch(`https://language-tutor-server.vercel.app/tutors?email=${email}`)
//     .then(res => res.json())
// }