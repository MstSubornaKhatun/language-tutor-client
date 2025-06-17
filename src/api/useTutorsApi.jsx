import useAxiosSecure from '../hooks/useAxiosSecure';

const useTutorsApi = () => {
  const axiosSecure = useAxiosSecure();

  const tutorsCreatedByPromise = (email) => {
    return axiosSecure.get(`/tutors?email=${email}`).then((res) => res.data);
  };

  return { tutorsCreatedByPromise };
};

export default useTutorsApi;