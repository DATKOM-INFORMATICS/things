export default function HeroSection() {
    return (
      <section className="text-center py-16 px-6">
        <h1 className="text-5xl font-bold mb-6">Co-créez les produits de demain</h1>
        <p className="text-lg mb-8 max-w-3xl mx-auto">
          Soumettez vos idées, votez pour celles des autres et découvrez comment vos
          suggestions façonnent les produits et services des entreprises de votre quotidien.
        </p>
        <a
          href="/idees"
          className="bg-black text-white px-6 py-3 rounded text-lg"
        >
          Découvrir les idées
        </a>
      </section>
    );
  }
  