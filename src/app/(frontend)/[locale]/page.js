import ImageSlider from "../_components/ImageSlider";
export default async function Home({ params }) {
  const { locale } = await params;
  if (!["en", "ar"].includes(locale)) {
    notFound();
  }
  return (
    <main>
      <ImageSlider locale={locale} />
    </main>
  );
}
