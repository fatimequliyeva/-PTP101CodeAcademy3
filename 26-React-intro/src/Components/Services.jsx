import "../Components/css/Services.css";

import servicesData from "../Components/ServicesData";


const Services = () => {
  return (
    <section className="services">
      <h1>Our Services</h1>
      <p className="services-text">
        We offer a comprehensive range of services to help your business succeed in the digital world.
      </p>

      <div className="services-card">
        {servicesData.map((service) => (
          <div className="service-box" key={service.id}>
            <span className="service-icon">{service.icon}</span>
            <h3>{service.title}</h3>
            <p>{service.description}</p>
          </div>
        ))}

      </div>

    </section>
  );
};

export default Services
