import Image from "next/image";
import Link from "next/link";
import React from "react";
import { FaRegBookmark, FaStar } from "react-icons/fa";
import { IoShareSocialOutline } from "react-icons/io5";
import { MdRemoveRedEye } from "react-icons/md";

const NewsCard = ({ news }) => {
  console.log(news, "Get news");
  return (
    <div className="card bg-base-100 shadow-sm mt-5 p-4">
      {/* Author */}
      <div className="bg-base-300 p-4 rounded-sm flex justify-between items-center">
        <div className="flex gap-1 items-center ">
          <Image className="rounded-full w-8.75 h-8.75" src={news.author?.img} width={40} height={40} alt={news.author?.name ?? "Author"}></Image>
          <div>
            <h4 className="text-[16px]">{news.author.name}</h4>
            <p className="text-[14px]">{news.author.published_date}</p>
          </div>
        </div>
        <div className="flex gap-2">
          <IoShareSocialOutline />
          <FaRegBookmark />
        </div>
      </div>

      <h2 className="mt-3">{news.title}</h2>
      <figure className="pt-10">
        <Image className="w-full" src={news.image_url} width={200} height={150} alt={news?.title} />
      </figure>
      <div className="card-body">
        <p className="text-[14px] leading-6 line-clamp-3">{news.details}</p>
        <Link href={`/news/${news._id}`} className="text-red-500 hover:underline">
          Read more
        </Link>
        <hr className="text-slate-300" />
        <div className="card-actions flex justify-between items-center">
          <div className="flex gap-2 ">
            <FaStar className="text-yellow-500 text-2xl" />
            <p className="text-lg text-slate-500">{news.rating.number}</p>
          </div>
          <div className="flex gap-2">
            <MdRemoveRedEye className="text-slate-500 text-2xl" />
            <p className="text-lg text-slate-500">{news.total_view}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
