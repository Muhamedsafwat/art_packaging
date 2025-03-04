// OurService.jsx (Server Component)
import ServiceCards from "../cards/ServiceCards";
import ServicesTranslation from "./ServicesTranslation";
const fetchData = async () => {
  try {
    const response = await fetch(`${process.env.BASE_URL}/api/services`, {
      cache: "no-store",
    });
    if (!response.ok) throw new Error("Failed to fetch data");

    const data = await response.json();
    return data.docs;
  } catch (error) {
    console.error(error);
    return [];
  }
};

const OurService = async () => {
  const services = await fetchData();

  return (
    <section
      id="services"
      className="flex flex-col items-center text-center sm:-mt-28 mr-7"
    >
      {/* Now using a separate client component for translations */}
      <ServicesTranslation />
      <ServiceCards services={services} />
    </section>
  );
};

export default OurService;
