import { Card, CardContent } from '@/components/ui/card';
import Icon from '@/components/ui/icon';
import { useScrollAnimation } from '@/hooks/useScrollAnimation';

interface Testimonial {
  name: string;
  text: string;
  rating: number;
  photo: string;
}

interface AnimatedTestimonialProps {
  testimonial: Testimonial;
  index: number;
}

export default function AnimatedTestimonial({ testimonial, index }: AnimatedTestimonialProps) {
  const { ref, isVisible } = useScrollAnimation({ threshold: 0.3 });

  return (
    <div 
      ref={ref} 
      className={`transition-all duration-700 ease-out ${
        isVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-8'
      }`}
      style={{ 
        transitionDelay: `${index * 150}ms` 
      }}
    >
      <Card className="bg-white hover:shadow-lg transition-shadow duration-300">
        <CardContent className="pt-6">
          <div className="flex items-start space-x-4 mb-4">
            <img 
              src={testimonial.photo} 
              alt={testimonial.name}
              className="w-16 h-16 rounded-full object-cover flex-shrink-0"
            />
            <div className="flex-1">
              <div className="flex items-center space-x-1 mb-2">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Icon key={i} name="Star" className="text-yellow-400 fill-current" size={16} />
                ))}
              </div>
              <cite className="font-semibold text-foreground block mb-2">
                {testimonial.name}
              </cite>
            </div>
          </div>
          <blockquote className="text-muted-foreground italic">
            "{testimonial.text}"
          </blockquote>
        </CardContent>
      </Card>
    </div>
  );
}