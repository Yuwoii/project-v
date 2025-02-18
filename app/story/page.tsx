import Image from "next/image";

export default function StoryPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl mb-4">Our Story</h1>
        <p className="font-vietnam text-lg text-gray-600 max-w-2xl mx-auto">
          A journey from the streets of Hanoi to the heart of authentic Vietnamese cuisine
        </p>
      </div>

      <div className="max-w-4xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="relative h-[400px]">
            <Image
              src="/story-1.jpg"
              alt="Traditional Vietnamese cooking"
              fill
              className="object-cover rounded-lg"
            />
          </div>
          <div className="space-y-6 flex flex-col justify-center">
            <h2 className="font-playfair text-2xl">Our Heritage</h2>
            <p className="font-vietnam text-gray-600 leading-relaxed">
              Founded in 2020, Nhà Hàng Việt began with a simple mission: to share 
              the authentic flavors of Vietnam. Our recipes have been passed down 
              through generations, each dish telling a story of tradition and family.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <div className="space-y-6 flex flex-col justify-center md:order-1">
            <h2 className="font-playfair text-2xl">Our Philosophy</h2>
            <p className="font-vietnam text-gray-600 leading-relaxed">
              We believe in preserving the authenticity of Vietnamese cuisine while 
              embracing modern culinary techniques. Every ingredient is carefully 
              selected, every dish thoughtfully prepared to deliver an unforgettable 
              dining experience.
            </p>
          </div>
          <div className="relative h-[400px] md:order-2">
            <Image
              src="/story-2.jpg"
              alt="Modern Vietnamese dining"
              fill
              className="object-cover rounded-lg"
            />
          </div>
        </div>
      </div>
    </div>
  );
} 