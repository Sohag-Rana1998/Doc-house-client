import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className="w-screen min-h-screen flex justify-center items-center">
      <div className="text-center">
        <div className="text-4xl font-bold">Sorry,</div>
        <div className="text-2xl ">This page is not found.</div>
        <div className="w-full h-[400px] px-20">
          <img
            src="https://i.postimg.cc/HLJ72h13/Frame.png"
            alt=""
            className="w-full h-full"
          />
          <Link to={'/'}>
            <button className="btn bg-[#F7A582]">Go back home</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
