

export const bookingsCreatedByPromise = (email, accessToken) => {
  return fetch(`https://language-tutor-server.vercel.app/bookings?email=${email}`, {
  
    headers: {
      authorization: `Bearer ${accessToken}`
    }
  }).then(res => res.json());
};

