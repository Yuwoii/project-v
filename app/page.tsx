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
          <div className="space-x-4">
            <Link
              href="/menu"
              className="border-2 border-white text-white px-8 py-3 rounded-full 
              font-vietnam hover:bg-white hover:text-[--color-primary] transition-all inline-block"
            >
              View Menu
            </Link>
            <Link
              href="/story"
              className="border-2 border-white text-white px-8 py-3 rounded-full 
              font-vietnam hover:bg-white hover:text-[--color-primary] transition-all inline-block"
            >
              Our Story
            </Link>
          </div>
        </div>
      </section>

      {/* Featured Section */}
      <section className="py-20 px-4 md:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <h2 className="font-playfair text-3xl md:text-4xl text-center mb-16">
            Our Signature Dishes
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/menu/pho-dac-biet.jpg"
                  alt="Special Beef Pho"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl mb-2">Special Beef Pho</h3>
                <p className="text-[--color-primary] font-vietnam mb-2">Phở Đặc Biệt</p>
                <p className="text-gray-600 font-vietnam text-sm">
                  Rice noodles in beef broth with various cuts of beef
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/menu/bo-luc-lac.jpg"
                  alt="Shaking Beef"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl mb-2">Shaking Beef</h3>
                <p className="text-[--color-primary] font-vietnam mb-2">Bò Lúc Lắc</p>
                <p className="text-gray-600 font-vietnam text-sm">
                  Cubed beef tenderloin with garlic and black pepper sauce
                </p>
              </div>
            </div>

            <div className="bg-white rounded-lg shadow-md overflow-hidden">
              <div className="relative h-64">
                <Image
                  src="/menu/banh-xeo.jpg"
                  alt="Vietnamese Pancake"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-playfair text-xl mb-2">Vietnamese Pancake</h3>
                <p className="text-[--color-primary] font-vietnam mb-2">Bánh Xèo</p>
                <p className="text-gray-600 font-vietnam text-sm">
                  Crispy savory crepe with shrimp, pork, and bean sprouts
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-12">
            <Link
              href="/menu"
              className="inline-block px-8 py-3 bg-[--color-primary] text-white rounded-full 
              font-vietnam hover:bg-opacity-90 transition-all"
            >
              View Full Menu
            </Link>
          </div>
        </div>
      </section>

      {/* Story Section */}
    </div>
  );
}
