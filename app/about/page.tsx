export default function About() {
  return (
    <main className="pt-20">
      <section className="min-h-screen py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-4xl mx-auto space-y-16">
          {/* Header */}
          <div className="text-center space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              About FX Studio
            </h1>
            <p className="text-xl text-gray-600 italic">
              Images with a Point of View
            </p>
          </div>

          {/* Content */}
          <div className="space-y-8 text-lg text-gray-700 leading-relaxed">
            <p>
              FX Studio is a commercial photography studio dedicated to creating 
              images that tell compelling stories. We believe every photograph 
              should have a distinct point of view—a unique perspective that 
              captures not just what we see, but how we see it.
            </p>

            <p>
              Our approach combines technical excellence with artistic vision, 
              delivering imagery that resonates with authenticity and emotion. 
              Whether it's capturing the essence of a brand, the energy of a moment, 
              or the beauty of everyday life, we craft visuals that leave a lasting impression.
            </p>

            <p>
              Based on our commitment to quality and creativity, we work closely 
              with clients to understand their vision and bring it to life through 
              thoughtful, intentional photography.
            </p>
          </div>

          {/* Services */}
          <div className="pt-12 space-y-6">
            <h2 className="text-3xl font-light tracking-wide">Services</h2>
            <ul className="space-y-3 text-lg text-gray-700">
              <li>• Commercial Photography</li>
              <li>• Brand & Product Photography</li>
              <li>• Editorial & Lifestyle</li>
              <li>• Creative Direction</li>
            </ul>
          </div>
        </div>
      </section>
    </main>
  );
}

