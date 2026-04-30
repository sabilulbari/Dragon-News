import Category from '@/app/components/sheared/grid-layout/Category';
import NewsCard from '@/app/components/sheared/newsCard/NewsCard';
import RightSide from '@/app/components/sheared/rightSide/RightSide';
import { fetchCategory, getNewsByCategoryId } from '@/app/lib/data';
import React from 'react';




const NewsCategory = async ({params}) => {
    const res = await params;
    const fetchData = await fetchCategory();
    const data = fetchData.data.news_category;

    const newsCategory = await getNewsByCategoryId(res.id);

    console.log(res.id, "Params response");
    return (
      <div className="grid grid-cols-12 gap-2 w-[90%] mx-auto my-10">
        <div className="col-span-3 text-2xl ">
          <h2 className="font-semibold text-[20px]">All Categories</h2>
          {data.map((c) => (
            <Category c={c} key={c.category_id} activeId={res.id}></Category>
          ))}
        </div>

        {/* Display News */}
        <div className="col-span-6  text-2xl ">
          <h2 className="font-semibold text-[20px]">Dragon News Home</h2>

          {newsCategory.data.length > 0 ? (
            newsCategory.data.map((news) => <NewsCard key={news._id} news={news}></NewsCard>)
          ) : (
            <h2 className="text-center text-2xl font-bold ">No News Found!</h2>
          )}
        </div>

        {/* Right side bar */}
        <div className="col-span-3 space-y-5">
          <h2 className="font-semibold text-[20px]">Login With</h2>

          <RightSide />
        </div>
      </div>
    );
};

export default NewsCategory;