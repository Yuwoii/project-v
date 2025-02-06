import Image from 'next/image';

interface MenuItem {
  name: string;
  vietnameseName: string;
  description: string;
  price: string;
  image?: string;
  spicy?: boolean;
  vegetarian?: boolean;
}

const menuItems: Record<string, MenuItem[]> = {
  appetizers: [
    {
      name: "Spring Rolls",
      vietnameseName: "Gỏi Cuốn",
      description: "Fresh rice paper rolls with shrimp, pork, herbs, and rice vermicelli",
      price: "12",
      image: "/menu/spring-rolls.jpg",
      vegetarian: false
    },
    {
      name: "Vietnamese Pancake",
      vietnameseName: "Bánh Xèo",
      description: "Crispy savory crepe with shrimp, pork, and bean sprouts",
      price: "14",
      image: "/menu/banh-xeo.jpg"
    }
  ],
  pho: [
    {
      name: "Special Beef Pho",
      vietnameseName: "Phở Đặc Biệt",
      description: "Rice noodles in beef broth with various cuts of beef",
      price: "16",
      image: "/menu/pho-dac-biet.jpg"
    },
    {
      name: "Chicken Pho",
      vietnameseName: "Phở Gà",
      description: "Rice noodles in chicken broth with free-range chicken",
      price: "15",
      image: "/menu/pho-ga.jpg"
    }
  ],
  mainCourses: [
    {
      name: "Caramelized Fish",
      vietnameseName: "Cá Kho Tộ",
      description: "Braised fish in caramel sauce with black pepper",
      price: "24",
      image: "/menu/ca-kho-to.jpg"
    },
    {
      name: "Shaking Beef",
      vietnameseName: "Bò Lúc Lắc",
      description: "Cubed beef tenderloin with garlic and black pepper sauce",
      price: "28",
      image: "/menu/bo-luc-lac.jpg"
    }
  ],
  beverages: [
    {
      name: "Vietnamese Coffee",
      vietnameseName: "Cà Phê Sữa Đá",
      description: "Traditional Vietnamese coffee with condensed milk, served hot or iced",
      price: "6",
      image: "/menu/cafe-sua-da.jpg"
    },
    {
      name: "Fresh Coconut",
      vietnameseName: "Nước Dừa Tươi",
      description: "Young coconut served with coconut water and fresh coconut meat",
      price: "7",
      image: "/menu/nuoc-dua.jpg"
    },
    {
      name: "Lotus Tea",
      vietnameseName: "Trà Sen",
      description: "Premium green tea scented with lotus flowers",
      price: "5",
      image: "/menu/tra-sen.jpg"
    },
    {
      name: "Sugarcane Juice",
      vietnameseName: "Nước Mía",
      description: "Freshly pressed sugarcane juice with kumquat",
      price: "6",
      image: "/menu/nuoc-mia.jpg"
    },
    {
      name: "Vietnamese Beer",
      vietnameseName: "Bia Việt Nam",
      description: "Choice of Saigon Special, 333, or Hanoi Beer",
      price: "7",
      image: "/menu/bia-viet.jpg"
    },
    {
      name: "Herbal Tea",
      vietnameseName: "Trà Thảo Mộc",
      description: "Blend of chrysanthemum, lotus leaf, and artichoke tea",
      price: "5",
      image: "/menu/tra-thao-moc.jpg"
    }
  ]
};

export default function MenuPage() {
  return (
    <div className="min-h-screen py-20 px-4 md:px-8">
      {/* Hero Section */}
      <div className="max-w-6xl mx-auto text-center mb-16">
        <h1 className="font-playfair text-4xl md:text-6xl mb-4">Our Menu</h1>
        <p className="font-vietnam text-lg text-gray-600">
          A culinary journey through Vietnam's finest dishes
        </p>
      </div>

      {/* Menu Sections */}
      {Object.entries(menuItems).map(([section, items]) => (
        <section key={section} className="max-w-6xl mx-auto mb-16">
          <h2 className="font-playfair text-3xl mb-8 text-center capitalize">
            {section.replace(/([A-Z])/g, ' $1').trim()}
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {items.map((item) => (
              <div key={item.name} className="flex gap-6 p-6 bg-white rounded-lg shadow-md">
                {item.image && (
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.image}
                      alt={item.name}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
                <div className="flex-1">
                  <div className="flex justify-between items-start mb-2">
                    <div>
                      <h3 className="font-playfair text-xl">{item.name}</h3>
                      <p className="text-[--color-primary] font-vietnam">
                        {item.vietnameseName}
                      </p>
                    </div>
                    <span className="font-vietnam text-lg">${item.price}</span>
                  </div>
                  <p className="text-gray-600 font-vietnam text-sm">
                    {item.description}
                  </p>
                  <div className="flex gap-2 mt-2">
                    {item.spicy && (
                      <span className="text-red-500 text-sm">🌶️ Spicy</span>
                    )}
                    {item.vegetarian && (
                      <span className="text-green-500 text-sm">🌱 Vegetarian</span>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </section>
      ))}

      {/* Note Section */}
      <div className="max-w-2xl mx-auto text-center mt-16 p-6 bg-[--color-primary]/5 rounded-lg">
        <p className="font-vietnam text-sm text-gray-600">
          All our dishes are prepared fresh to order. Please inform our staff of any 
          allergies or dietary requirements.
        </p>
      </div>
    </div>
  );
} 