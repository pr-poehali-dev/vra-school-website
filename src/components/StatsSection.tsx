import { Card, CardContent } from "@/components/ui/card";

interface Stat {
  value: string;
  label: string;
  description: string;
}

const stats: Stat[] = [
  {
    value: "98%",
    label: "Успеваемость",
    description: "Наших студентов успешно осваивают программу обучения"
  },
  {
    value: "500+",
    label: "Студентов",
    description: "Уже обучаются в нашей академии на разных уровнях"
  },
  {
    value: "85%",
    label: "Выпускников",
    description: "Трудоустраиваются по специальности в первый год"
  }
];

const StatsSection = () => {
  return (
    <section className="py-20 bg-vra-purple/5">
      <div className="container mx-auto px-4">
        <div className="grid gap-8 md:grid-cols-3">
          {stats.map((stat, index) => (
            <Card key={index} className="border-vra-purple/20 bg-white/50 backdrop-blur-sm hover:border-vra-blue/30 transition-colors dark:bg-vra-deepBlue/50">
              <CardContent className="p-6 text-center">
                <div className="mb-2 text-4xl font-bold vr-gradient-text">{stat.value}</div>
                <div className="mb-2 text-xl font-semibold">{stat.label}</div>
                <p className="text-muted-foreground">{stat.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;