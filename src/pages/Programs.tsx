import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { ArrowRight, Layers, Clock, Book } from "lucide-react";
import { Link } from "react-router-dom";

interface Program {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: string;
  subjects: string[];
}

const programs: Record<string, Program[]> = {
  elementary: [
    {
      id: "elem-1",
      title: "Начальная школа (1-4 класс)",
      description: "Погружение в виртуальную среду для изучения базовых предметов с игровыми элементами и интерактивными заданиями.",
      duration: "4 года",
      level: "Начальный",
      subjects: ["Русский язык", "Математика", "Окружающий мир", "Английский язык"]
    }
  ],
  secondary: [
    {
      id: "sec-1",
      title: "Основное общее образование (5-9 класс)",
      description: "Углубленное изучение предметов с использованием виртуальных лабораторий и 3D-моделирования.",
      duration: "5 лет",
      level: "Средний",
      subjects: ["Алгебра и геометрия", "Физика", "Химия", "Биология", "История"]
    },
    {
      id: "sec-2",
      title: "Среднее общее образование (10-11 класс)",
      description: "Профильное обучение с возможностью выбора направления и VR-практиками в выбранной области.",
      duration: "2 года",
      level: "Продвинутый",
      subjects: ["Профильная математика", "Профильная физика", "Информатика", "Программирование"]
    }
  ],
  higher: [
    {
      id: "high-1",
      title: "Бакалавриат «Виртуальные и AR/VR технологии»",
      description: "Подготовка специалистов в области разработки приложений виртуальной и дополненной реальности.",
      duration: "4 года",
      level: "Высшее образование",
      subjects: ["3D-моделирование", "Программирование VR", "UX/UI дизайн", "Разработка VR-контента"]
    },
    {
      id: "high-2",
      title: "Магистратура «Образовательные VR-технологии»",
      description: "Подготовка экспертов по внедрению VR/AR в образовательный процесс и разработке учебных VR-программ.",
      duration: "2 года",
      level: "Высшее образование",
      subjects: ["Педагогика иммерсивных технологий", "Проектирование образовательных VR-сред", "Психология виртуального обучения"]
    }
  ]
};

const Programs = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          Образовательные программы <span className="vr-gradient-text">VRA Academy</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          В нашей академии вы можете получить полный цикл образования — от начальной школы до магистратуры
        </p>
      </div>
      
      <Tabs defaultValue="elementary" className="w-full">
        <TabsList className="mb-8 grid w-full grid-cols-3">
          <TabsTrigger value="elementary" className="text-base">Начальное образование</TabsTrigger>
          <TabsTrigger value="secondary" className="text-base">Школьное образование</TabsTrigger>
          <TabsTrigger value="higher" className="text-base">Высшее образование</TabsTrigger>
        </TabsList>
        
        {Object.entries(programs).map(([key, programsList]) => (
          <TabsContent key={key} value={key} className="space-y-8">
            <div className="grid gap-8 md:grid-cols-2">
              {programsList.map((program) => (
                <Card key={program.id} className="futuristic-card overflow-hidden">
                  <CardHeader>
                    <CardTitle>{program.title}</CardTitle>
                    <CardDescription>{program.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center">
                        <Clock className="mr-2 h-4 w-4 text-vra-purple" />
                        <span className="text-sm">Длительность: {program.duration}</span>
                      </div>
                      <div className="flex items-center">
                        <Layers className="mr-2 h-4 w-4 text-vra-purple" />
                        <span className="text-sm">Уровень: {program.level}</span>
                      </div>
                      <div>
                        <div className="flex items-center mb-2">
                          <Book className="mr-2 h-4 w-4 text-vra-purple" />
                          <span className="text-sm">Основные предметы:</span>
                        </div>
                        <ul className="ml-6 list-disc text-sm space-y-1">
                          {program.subjects.map((subject, index) => (
                            <li key={index}>{subject}</li>
                          ))}
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button asChild className="vr-gradient w-full group">
                      <Link to="#">
                        Подробнее о программе
                        <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                      </Link>
                    </Button>
                  </CardFooter>
                </Card>
              ))}
            </div>
          </TabsContent>
        ))}
      </Tabs>
      
      <div className="mt-16 text-center">
        <h2 className="mb-6 text-2xl font-bold">Заинтересовались нашими программами?</h2>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <Button asChild className="vr-gradient group" size="lg">
            <Link to="/register">
              Подать заявку
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
          <Button asChild variant="outline" className="border-vra-purple text-foreground hover:bg-vra-purple/10" size="lg">
            <Link to="#">
              Задать вопрос
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
};

export default Programs;