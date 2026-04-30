import { redirect } from "next/navigation";


export default async function Home() {
  const home_category = "01"
  return redirect(`/newsCategory/${home_category}`);
}
