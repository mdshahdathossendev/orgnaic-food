import { Users, ShoppingBag, Leaf, Award } from 'lucide-react';

const statistics = [
  { number: '50,000+', label: 'Happy Customers', icon: <Users className="w-8 h-8 text-[#1B5E20]" /> },
  { number: '200+', label: 'Organic Products', icon: <ShoppingBag className="w-8 h-8 text-[#1B5E20]" /> },
  { number: '50+', label: 'Local Farms', icon: <Leaf className="w-8 h-8 text-[#1B5E20]" /> },
  { number: '5+', label: 'Years Experience', icon: <Award className="w-8 h-8 text-[#1B5E20]" /> }
];

export default function StatisticsSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#123517]">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {statistics.map((stat, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-4">
                <div className="p-4 bg-[#98D83E] rounded-full">
                  {stat.icon}
                </div>
              </div>
              <h3 className="text-4xl sm:text-5xl font-extrabold text-white mb-2">{stat.number}</h3>
              <p className="text-gray-300 text-sm font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
