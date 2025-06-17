import React, { Suspense } from 'react';
import TutorLists from './TutorLists';
import useAuth from '../../hooks/useAuth';
import Loading from '../../components/Loading';
import useTutorsApi from '../../api/useTutorsApi';

const MyTutorials = () => {
    const { user } = useAuth();
    const {tutorsCreatedByPromise} = useTutorsApi();

    console.log('token in the context', user.accessToken);

    return (
        <Suspense fallback={<Loading />}>
            <TutorLists tutorsCreatedByPromise={tutorsCreatedByPromise(user.email)} />
        </Suspense>
    );
};

export default MyTutorials;