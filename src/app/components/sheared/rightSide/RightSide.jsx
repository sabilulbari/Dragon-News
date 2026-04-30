import Link from 'next/link';
import React from 'react';
import { FaFacebook, FaGithub, FaGoogle } from 'react-icons/fa';

const RightSide = () => {
    return (
      <div>
        <div>
          {/* Google and Github */}
          <div>
            <Link className="text-blue-500 flex items-center justify-center border-2 border-blue-500 text-[20px] font-medium rounded-md p-2 mb-2" href={"/login"}>
              <FaGoogle className="mr-2" /> Login with Google
            </Link>
          </div>
          <div>
            <Link className="text-red-1000 flex items-center justify-center border-2 border-red-1000 text-[20px] font-medium rounded-md p-2 " href={"/login"}>
              <FaGithub className="mr-2" /> Login with Google
            </Link>
          </div>
        </div>
        {/* Find us on */}
        <div>
          {/* <h2 className="font-semibold text-[20px]">Find Us On</h2>
          <div>
            <FaFacebook /> Facebook
          </div> */}
        </div>
      </div>
    );
};

export default RightSide;