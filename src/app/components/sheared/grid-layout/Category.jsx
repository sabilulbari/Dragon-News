import Link from "next/link";
import React from "react";



const Category = async ({ c , activeId}) => {
  return (
    <div>
      <ul>
        <li
          className={`${activeId == c.category_id && "btn bg-[#E7E7E7] text-black"}  text-[#9F9F9F] text-[18px] font-medium block text-center py-2 mt-4 rounded-sm  cursor-pointer active:shadow-md hover:bg-[#E7E7E7] hover:text-black`}
        >
          <Link className="block" href={`/newsCategory/${c.category_id}`}>
            {c.category_name}
          </Link>
        </li>
      </ul>
    </div>
  );
};

export default Category;
