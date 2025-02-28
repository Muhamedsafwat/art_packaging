import ImageSlider from "../_components/ImageSlider";
import LetsWork from "../_components/home/LetsWork";
import SuccessPartners from "../_components/home/SuccessPartners";
import Speach from "../_components/home/speach";
import OurService from "../_components/home/OurService";
export default async function Home({ params }) {
  const { locale } = await params;
  if (!["en", "ar"].includes(locale)) {
    notFound();
  }
  return (
    <main>
      <ImageSlider locale={locale} />
      <OurService locale={locale} />
      <Speach locale={locale} />
      <SuccessPartners locale={locale} />
      <LetsWork locale={locale} />
    </main>
  );
}
