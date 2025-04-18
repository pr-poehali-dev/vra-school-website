import { 
  Lightbulb, 
  GraduationCap, 
  LucideIcon, 
  Gamepad2,
  Glasses,
  HeartHandshake,
  Brain,
} from "lucide-react";
import FeatureCard from "@/components/FeatureCard";

const features = [
  {
    icon: <Glasses className="h-6 w-6" />,
    title: "Погружение в VR",
    description: "Полное погружение в учебный процесс с использованием передовых VR-технологий"
  },
  {
    icon: <Brain className="h-6 w-6" />,
    title: "Адаптивное обучение",
    description: "Индивидуальный подход с учетом способностей и темпа усвоения материала каждым учеником"
  },
  {
    icon: <GraduationCap className="h-6 w-6" />,
    title: "Полный цикл образования",
    description: "От начальной школы до высшего образования в одном учебном заведении"
  },
  {
    icon: <Gamepad2 className="h-6 w-6" />,
    title: "Геймификация",
    description: "Игровые элементы делают обучение увлекательным и повышают мотивацию"
  },
  {
    icon: <Lightbulb className="h-6 w-6" />,
    title: "Инновационные программы",
    description: "Современные учебные программы, разработанные с учетом последних исследований в области образования"
  },
  {
    icon: <HeartHandshake className="h-6 w-6" />,
    title: "Поддержка 24/7",
    description: "Непрерывная поддержка студентов, преподавателей и родителей"
  }
];

const FeaturesSection = () => {
  return (
    <section className="bg-gradient-to-b from-white to-vra-lightPink/30 py-20 dark:from-vra-darkBlue dark:to-vra-deepBlue">
      <div className="container mx-auto px-4">
        <div className="mb-12 max-w-2xl mx-auto text-center">
          <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
            Почему выбирают <span className="vr-gradient-text">VRA Academy</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Мы совмещаем традиционные образовательные ценности с передовыми технологиями виртуальной и дополненной реальности.
          </p>
        </div>
        
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              icon={feature.icon}
              title={feature.title}
              description={feature.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturesSection;