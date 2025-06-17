// import React, { Suspense } from 'react';
// import MyBookingList from '../../components/MyBookingList';
// import useAuth from '../../hooks/useAuth';
// import { myBookingsPromise } from '../../api/bookingApi';
// import Loading from '../../components/Loading';

// const MyBookedTutorial = () => {
//         const { user } = useAuth();
//     return (
//         <div>
//             <Suspense fallback={<Loading/>}>
//  <MyBookingList  myBookingsPromise={myBookingsPromise(user.email)} />
//             </Suspense>
           
//         </div>
//     );
// };

// export default MyBookedTutorial;