export default function Contacts() {
  return (
    <section className="flex items-center justify-center p-6 bg-white" style={{ minHeight: "calc(100vh - 100px)" }}>
      <div className="max-w-6xl w-full flex flex-col md:flex-row gap-12">
        {/* Texto e infos */}
        <div className="flex-1 space-y-6">
          <h1 className="text-3xl font-bold">Sejam bem vindos</h1>

          <p className="text-lg">Ou melhor, venha nos visitar.</p>

          <div className="space-y-1 text-gray-700">
            <p>
              <strong>De segunda à sexta-feira:</strong>
            </p>
            <p>09:00 da manhã - 08:00 da tarde</p>
            <p>
              <strong>Ao Sábado:</strong>
            </p>
            <p>09:00 da manhã - 06:00 da tarde</p>
            <p>
              <strong>Domingo:</strong> Encerrado
            </p>
          </div>

          <h2 className="text-2xl font-semibold">
            <a
              href="https://goo.gl/maps/WV9cDmUVbmS2"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-blue-600 transition"
            >
              MARCAÇÕES AQUI!
            </a>
          </h2>

          <div className="text-gray-800 space-y-1">
            <p className="font-semibold">Fale connosco</p>
            <p>Bellini Barbearia</p>
            <p>Rua Unidade Vimaranense 103,</p>
            <p>4810-026 Guimarães, Braga, Portugal</p>
          </div>

          {/* Botão WhatsApp */}
          <div>
            <a
              href="https://wa.me/351912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block bg-green-600 hover:bg-green-700 text-white font-semibold py-3 px-8 rounded-full transition"
            >
              Fale aqui connosco via WhatsApp
            </a>
          </div>
        </div>

        {/* Mapa */}
        <div className="flex-1 rounded border border-gray-300 overflow-hidden h-80 md:h-auto">
          <iframe
            title="Localização da Barbearia Bellini"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3111.611836599995!2d-8.289113584657242!3d41.45036497213168!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd2462ca983b92f5%3A0xa4a4b464569ea132!2sRua%20Unidade%20Vimaranense%20103%2C%204810-026%20Guimar%C3%A3es%2C%20Portugal!5e0!3m2!1spt-PT!2spt!4v1689030000000!5m2!1spt-PT!2spt"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          />
        </div>
      </div>
    </section>
  );
}
