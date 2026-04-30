export const fetchCategory = async () => {
  const res = await fetch("https://openapi.programming-hero.com/api/news/categories");
  const categories = res.json();
  return categories;
};

export const getNewsByCategoryId = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/category/${id}`);
  const categories = res.json();
  return categories;
};

export const getNewsDetailsId = async (id) => {
  const res = await fetch(`https://openapi.programming-hero.com/api/news/${id}`);
  const categories = res.json();
  return categories;
};
