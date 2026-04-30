import Link from "next/link";
import React from "react";

const NotFound = () => {
  return (
    <div className="flex  flex-col justify-center items-center h-screen space-y-4">
      <h2 className="text-2xl font-bold text-purple-600">This page is not Found</h2>
      <Link href={'/'} className="btn btn-primary">Back to Home</Link>
    </div>
  );
};

export default NotFound;
