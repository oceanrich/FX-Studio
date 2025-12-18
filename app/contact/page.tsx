export default function Contact() {
  return (
    <main className="pt-20">
      <section className="min-h-screen py-32 px-6 lg:px-12 bg-white">
        <div className="max-w-3xl mx-auto text-center space-y-12">
          {/* Header */}
          <div className="space-y-6">
            <h1 className="text-5xl md:text-6xl font-light tracking-wide">
              Get in Touch
            </h1>
            <p className="text-xl text-gray-600">
              Let's create something remarkable together
            </p>
          </div>

          {/* Contact Info */}
          <div className="pt-12 space-y-8 text-lg text-gray-700">
            <p>
              We'd love to hear about your project and explore how we can 
              bring your vision to life.
            </p>
            
            <div className="pt-8 space-y-4">
              <p className="text-2xl font-light">
                Coming Soon
              </p>
              <p className="text-gray-500">
                Contact information will be available shortly.
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

