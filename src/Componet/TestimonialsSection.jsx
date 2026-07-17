import { Star, Leaf } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Regular Customer',
    image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=200&q=80',
    text: 'The organic produce from Organic Meadow is always fresh and delicious! I love knowing exactly where my food comes from.',
    rating: 5
  },
  {
    name: 'Michael Chen',
    role: 'Health Coach',
    image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=200&q=80',
    text: 'I recommend Organic Meadow to all my clients. The quality is outstanding!',
    rating: 5
  },
  {
    name: 'Emily Rodriguez',
    role: 'Food Blogger',
    image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&fit=crop&w=200&q=80',
    text: 'From farm to table, Organic Meadow delivers the best organic products I\'ve ever tried!',
    rating: 5
  }
];

export default function TestimonialsSection() {
  return (
    <section className="py-20 px-6 sm:px-12 lg:px-24 bg-[#FCFBF7]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <span className="inline-flex items-center gap-2 bg-[#E8F5E9] text-[#1B5E20] px-4 py-1.5 rounded-full text-xs font-bold tracking-widest uppercase mb-4">
            <Leaf className="w-4 h-4" />
            Testimonials
          </span>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-[#1B431C] mb-4">What Our Customers Say</h2>
          <p className="text-gray-600 text-sm max-w-2xl mx-auto">Hear from our happy customers about their experience with Organic Meadow</p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm">
              <div className="flex gap-1 mb-4">
                {Array.from({ length: testimonial.rating }).map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-amber-400 text-amber-400" />
                ))}
              </div>
              <p className="text-gray-600 text-sm mb-6 italic">"{testimonial.text}"</p>
              <div className="flex items-center gap-4">
                <img src={testimonial.image} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                <div>
                  <h4 className="font-bold text-[#1B431C]">{testimonial.name}</h4>
                  <p className="text-gray-500 text-xs">{testimonial.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
