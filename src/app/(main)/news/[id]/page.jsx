import RightSide from "@/app/components/sheared/rightSide/RightSide";
import { getNewsDetailsId } from "@/app/lib/data";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsArrowLeft } from "react-icons/bs";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";

const NewsDetails = async ({ params }) => {
  const res = await params;
  const id = res.id;

  const newsDetailsId = await getNewsDetailsId(id);
  console.log(newsDetailsId.data[0]);
  const news = newsDetailsId.data[0];

  return (
    <div className="grid grid-cols-12  w-[90%] mx-auto">
      <div className="card col-span-9 bg-base-100 shadow-sm mt-5 p-4 mb-20">
        {/* Author */}
        <h2 className="font-semibold text-[20px] text-gray-500">Dragon News Home</h2>
        <figure className="pt-10">
          <Image className="w-full" src={news.image_url} width={200} height={150} alt={news?.title} />
        </figure>
        <div className="card-body">
          <h2 className="mt-3 text-[#403F3F] text-[25px] font-bold">{news.title}</h2>
          <p className="text-[14px] leading-6">{news.details}</p>
          <div className="w-fit mt-4">
            <Link href={`/newsCategory/${news.category_id}`} className="inline-flex items-center gap-2 p-2 bg-red-700 font-medium text-white hover:bg-red-500 text-sm rounded">
              <BsArrowLeft className="font-medium text-2xl" /> Get all news in this category
            </Link>
          </div>
        </div>
      </div>
      <div className="col-span-3 mt-4 flex justify-center">
        <RightSide />
      </div>
    </div>
  );
};

export default NewsDetails;
