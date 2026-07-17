import { Leaf, Truck, ShieldCheck, Heart } from 'lucide-react';

const services = [
  {
    icon: <Leaf className="w-10 h-10 text-[#1B5E20]" />,
    title: '100% Organic',
    description: 'All our products are certified organic and free from chemicals'
  },
  {
    icon: <Truck className="w-10 h-10 text-[#1B5E20]" />,
    title: 'Free Delivery',
    description: 'Get free delivery on all orders over $30'
  },
  {
    icon: <ShieldCheck className="w-10 h-10 text-[#1B5E20]" />,
    title: 'Quality Guarantee',
    description: 'We stand behind the quality of our products'
  },
  {
    icon: <Heart className="w-10 h-10 text-[#1B5E20]" />,
    title: 'Farm Fresh',
    description: 'Sourced directly from local organic farms'
  }
];

export default function ServicesSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Leaf className="w-4 h-4" />
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B431C] mb-4">Why Choose Organic Meadow?</h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">We are committed to providing the best organic products and services to our customers</p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div key={index} className="bg-[#FCFBF7] p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-md transition-all">
              <div className="mb-4 p-4 bg-[#E8F5E9] rounded-xl inline-flex">
                {service.icon}
              </div>
              <h3 className="text-lg font-bold text-[#1B431C] mb-2">{service.title}</h3>
              <p className="text-gray-600 text-sm">{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
