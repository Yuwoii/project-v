import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative h-screen">
        <Image
          src="/hero-pho.jpg" // You'll need to add this image
          alt="Traditional Vietnamese Pho"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 hero-gradient" />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white">
          <h1 className="font-playfair text-5xl md:text-7xl mb-4 text-center">
            Nhà Hàng Việt
          </h1>
          <p className="font-vietnam text-xl md:text-2xl mb-8">
            Authentic Vietnamese Cuisine
          </p>
          <Link
            href="/menu"
            className="bg-[--color-secondary] text-white px-8 py-3 rounded-full 
            font-vietnam hover:bg-opacity-90 transition-all"
          >
            View Menu
          </Link>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">
            Our Signature Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Add featured dishes here */}
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 px-4 md:px-8 bg-[--color-background]">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-playfair text-3xl md:text-4xl mb-8">Our Story</h2>
          <p className="font-vietnam text-lg leading-relaxed">
            From the bustling streets of Hanoi to your table, we bring the authentic 
            flavors of Vietnam with a modern twist. Each dish tells a story of 
            tradition, family, and passion for Vietnamese cuisine.
          </p>
        </div>
      </section>
    </div>
  );
}
