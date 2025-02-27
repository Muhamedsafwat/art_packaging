import ImageSlider from "../_components/ImageSlider";
import LetsWork from "../_components/home/LetsWork";
import SuccessPartners from "../_components/home/SuccessPartners";
export default async function Home({ params }) {
  const { locale } = await params;
  if (!["en", "ar"].includes(locale)) {
    notFound();
  }
  return (
    <main>
      <ImageSlider locale={locale} />
      <SuccessPartners locale={locale} />
      <LetsWork locale={locale} />
    </main>
  );
}
