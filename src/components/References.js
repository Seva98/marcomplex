import ReferenceCard from './ReferenceCard';

const References = () => {
  return (
    <section className="section">
      <div className="container">
        <h2 class="is-size-1 has-text-centered" id="references">
          REFERENCE
        </h2>
        <div className="columns">
          <ReferenceCard img="references/tech1.jpg" title="Inteligentní regulace teploty 5000m2" subtitle="Amit" text="Napojení celého objektu Amitu na centrální řízení teploty s online podporou" />
          <ReferenceCard img="references/tech2.jpeg" title="Tvorba centrálního systému kontroly spotřeby" subtitle="Cressto" text="Chytrá kontrola celkové spotřeby energii" />
          <ReferenceCard
            img="references/tech3.jpeg"
            title="Měření teplotních výkyvů a jejich náprava"
            subtitle="Danfoss"
            text="Komplexní měření tepelných ztrát v objektu firmy Danfoss, vytvoření doporučení pro jejich nápravu a implementace těchto doporučení"
          />
        </div>
      </div>
    </section>
  );
};

export default References;
