import React from "react";

const NewsCardLoading = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen gap-4">
      <h2 className="text-lg font-medium">News are loading..</h2>
      <span className="loading loading-ring loading-xl"></span>
    </div>
  );
};

export default NewsCardLoading;
