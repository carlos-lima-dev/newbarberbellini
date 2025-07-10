import aboutImage from "../assets/about.webp";

export default function About() {
  return (
    <section className="max-w-6xl mx-auto px-6 py-12 flex flex-col md:flex-row items-center gap-12">
      {/* Imagem */}
      <div className="flex-1">
        <img
          src={aboutImage}
          alt="Sobre a Bellini Barbearia"
          className="w-full rounded-lg object-cover shadow-lg"
          style={{ maxHeight: "400px" }}
        />
      </div>

      {/* Texto */}
      <div className="flex-1 space-y-8 text-gray-800">
        <h1 className="text-4xl font-bold text-yellow-700">Desde 2015</h1>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Nossa História</h2>
          <p className="leading-relaxed">
            Na Bellini Barbearia, nossa paixão pela beleza e pelo estilo remonta a mais de uma década de dedicação
            ininterrupta. Desde o início, nos comprometemos em transformar cada atendimento em uma experiência
            memorável, oferecendo cortes de cabelo, coloração e serviços de estética que vão além do simples cuidado:
            são momentos de renovação, confiança e estilo. Valorizamos cada detalhe para que nossos clientes sintam-se
            únicos, conectados a uma tradição de qualidade, inovação e excelência.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Nossa Equipe</h2>
          <p className="leading-relaxed">
            Na Bellini Barbearia, contamos com uma equipe de profissionais altamente qualificados e experientes, que se
            dedicam a transformar cada atendimento em uma experiência de excelência. Constantemente atualizados com as
            últimas tendências de cabelo e as mais modernas técnicas, garantimos que cada cliente saia não apenas
            satisfeito, mas com um estilo renovado e único. Nossa equipe une paixão, habilidade e atenção aos detalhes
            para oferecer um serviço que vai além das expectativas.
          </p>
        </section>

        <section>
          <h2 className="text-2xl font-semibold mb-3">Nossos Serviços</h2>
          <p className="leading-relaxed">
            Na Bellini Barbearia, oferecemos uma ampla gama de serviços pensados para atender às suas necessidades e
            superar suas expectativas. Desde cortes clássicos e modernos, colorações vibrantes e personalizadas, até
            tratamentos capilares que revitalizam e fortalecem os fios, cada serviço é realizado com o máximo cuidado e
            atenção. Utilizamos apenas produtos de alta qualidade para garantir a saúde e o brilho do seu cabelo,
            proporcionando um resultado impecável e uma experiência incomparável.
          </p>
        </section>
      </div>
    </section>
  );
}
