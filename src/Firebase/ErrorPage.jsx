import { Link } from 'react-router-dom';
import error from '../assets/error.jpg'

const ErrorPage = () => {
    return (
        <div className="mt-32">
        <img className='w-9/12 mx-auto' src={error} alt="" />
      <div className='text-center p-32'>
      <Link to='/'>
       <button className='mx-auto text-5xl btn btn-primary'>Back To Home</button>

       
       </Link>
      </div>
        </div>
    );
};

export default ErrorPage;