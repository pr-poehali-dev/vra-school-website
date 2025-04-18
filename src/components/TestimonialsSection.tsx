import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

interface Testimonial {
  id: number;
  name: string;
  role: string;
  content: string;
  rating: number;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Алексей Петров",
    role: "Родитель ученика",
    content: "Мой сын с удовольствием посещает занятия. VR-обучение вызывает у него настоящий восторг, а успеваемость значительно выросла!",
    rating: 5
  },
  {
    id: 2,
    name: "Мария Иванова",
    role: "Студентка бакалавриата",
    content: "Учиться в VRA совершенно не похоже на обычный университет. Погружение в виртуальную среду делает изучение даже сложных предметов увлекательным.",
    rating: 5
  },
  {
    id: 3,
    name: "Дмитрий Сидоров",
    role: "Выпускник",
    content: "Благодаря инновационному подходу к обучению я получил не только качественные знания, но и практические навыки, которые высоко ценятся работодателями.",
    rating: 4
  }
];

const TestimonialsSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Отзывы наших студентов и родителей
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
            Узнайте, что думают о нас люди, уже ставшие частью сообщества VRA Academy
          </p>
        </div>
        
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <Card key={testimonial.id} className="futuristic-card overflow-hidden">
              <CardContent className="p-6">
                <div className="mb-4 flex">
                  {[...Array(5)].map((_, i) => (
                    <Star
                      key={i}
                      className={`h-5 w-5 ${
                        i < testimonial.rating
                          ? "fill-vra-purple text-vra-purple"
                          : "text-gray-300"
                      }`}
                    />
                  ))}
                </div>
                <p className="mb-4">{testimonial.content}</p>
                <div className="flex items-center">
                  <div className="h-10 w-10 rounded-full bg-gradient-to-r from-vra-blue to-vra-purple flex items-center justify-center text-white font-bold">
                    {testimonial.name.charAt(0)}
                  </div>
                  <div className="ml-3">
                    <p className="font-medium">{testimonial.name}</p>
                    <p className="text-sm text-muted-foreground">{testimonial.role}</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;