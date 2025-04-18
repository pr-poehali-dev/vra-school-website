import { Card, CardContent } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { Building, Users, Trophy, Lightbulb, CheckCircle2 } from "lucide-react";

const About = () => {
  return (
    <div className="container mx-auto px-4 py-16">
      <div className="mb-12 text-center">
        <h1 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
          О <span className="vr-gradient-text">VRA Academy</span>
        </h1>
        <p className="mx-auto max-w-2xl text-lg text-muted-foreground">
          Первое в России образовательное учреждение с полным циклом обучения, основанном на VR/AR технологиях
        </p>
      </div>
      
      <div className="grid gap-16 lg:grid-cols-2">
        <div className="space-y-8">
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-bold">
              <Building className="mr-2 h-6 w-6 text-vra-purple" />
              Наша миссия
            </h2>
            <p className="text-muted-foreground">
              VRA Academy создана для революционного изменения образовательного процесса. Мы объединяем традиционные образовательные ценности с инновационными технологиями виртуальной и дополненной реальности, делая обучение более эффективным, увлекательным и доступным.
            </p>
          </div>
          
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-bold">
              <Trophy className="mr-2 h-6 w-6 text-vra-purple" />
              Наши достижения
            </h2>
            <ul className="space-y-2">
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-4 w-4 text-vra-blue" />
                <span>Разработка уникальных методик обучения с использованием VR/AR технологий</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-4 w-4 text-vra-blue" />
                <span>Создание первой в России полноценной образовательной VR-платформы</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-4 w-4 text-vra-blue" />
                <span>Получение премии «Инновации в образовании будущего» в 2033 году</span>
              </li>
              <li className="flex items-start">
                <CheckCircle2 className="mr-2 mt-1 h-4 w-4 text-vra-blue" />
                <span>Успешное трудоустройство 85% выпускников в первый год после окончания обучения</span>
              </li>
            </ul>
          </div>
          
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-bold">
              <Lightbulb className="mr-2 h-6 w-6 text-vra-purple" />
              Наш подход к обучению
            </h2>
            <p className="mb-4 text-muted-foreground">
              В VRA Academy мы заменили традиционные учебники на полное погружение в виртуальную реальность. Наш подход основан на трех ключевых принципах:
            </p>
            <div className="grid gap-4 sm:grid-cols-3">
              <Card className="futuristic-card">
                <CardContent className="p-4 text-center">
                  <h3 className="mb-2 text-lg font-medium">Иммерсивность</h3>
                  <p className="text-sm text-muted-foreground">
                    Полное погружение в учебный процесс через VR-среду
                  </p>
                </CardContent>
              </Card>
              <Card className="futuristic-card">
                <CardContent className="p-4 text-center">
                  <h3 className="mb-2 text-lg font-medium">Интерактивность</h3>
                  <p className="text-sm text-muted-foreground">
                    Активное взаимодействие с учебными материалами
                  </p>
                </CardContent>
              </Card>
              <Card className="futuristic-card">
                <CardContent className="p-4 text-center">
                  <h3 className="mb-2 text-lg font-medium">Индивидуализация</h3>
                  <p className="text-sm text-muted-foreground">
                    Адаптация обучения под потребности каждого студента
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
        
        <div className="space-y-8">
          <div className="rounded-2xl overflow-hidden">
            <div className="relative h-64 w-full">
              <img 
                src="/campus.png" 
                alt="Кампус VRA Academy" 
                className="h-full w-full object-cover"
              />
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 flex items-center text-2xl font-bold">
              <Users className="mr-2 h-6 w-6 text-vra-purple" />
              Наша команда
            </h2>
            <p className="mb-6 text-muted-foreground">
              Команда VRA Academy — это опытные педагоги, технические специалисты и эксперты в области VR/AR технологий, объединенные общей целью — создать образование будущего уже сегодня.
            </p>
            <div className="grid gap-4 sm:grid-cols-2">
              <div className="futuristic-card p-4">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full bg-gradient-to-r from-vra-blue to-vra-purple flex items-center justify-center text-white font-bold">
                    АП
                  </div>
                  <div>
                    <h3 className="font-medium">Александр Петров</h3>
                    <p className="text-xs text-muted-foreground">Директор академии</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Доктор педагогических наук, эксперт в области цифровой трансформации образования
                </p>
              </div>
              <div className="futuristic-card p-4">
                <div className="mb-3 flex items-center">
                  <div className="mr-3 h-10 w-10 rounded-full bg-gradient-to-r from-vra-blue to-vra-purple flex items-center justify-center text-white font-bold">
                    ЕС
                  </div>
                  <div>
                    <h3 className="font-medium">Елена Соколова</h3>
                    <p className="text-xs text-muted-foreground">Руководитель образовательных программ</p>
                  </div>
                </div>
                <p className="text-sm text-muted-foreground">
                  Кандидат психологических наук, автор методик адаптивного обучения
                </p>
              </div>
            </div>
          </div>
          
          <div>
            <h2 className="mb-4 text-2xl font-bold">Хронология развития</h2>
            <div className="space-y-6">
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full vr-gradient flex items-center justify-center text-white font-bold">
                    1
                  </div>
                  <div className="mt-2 h-full w-0.5 bg-vra-purple/20"></div>
                </div>
                <div>
                  <h3 className="font-semibold">2030</h3>
                  <p className="text-muted-foreground">Основание VRA Academy и открытие первых экспериментальных классов с передовыми VR-технологиями</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full vr-gradient flex items-center justify-center text-white font-bold">
                    2
                  </div>
                  <div className="mt-2 h-full w-0.5 bg-vra-purple/20"></div>
                </div>
                <div>
                  <h3 className="font-semibold">2032</h3>
                  <p className="text-muted-foreground">Запуск полного цикла школьного образования с использованием нейроинтерфейсов и VR-технологий</p>
                </div>
              </div>
              <div className="flex">
                <div className="mr-4 flex flex-col items-center">
                  <div className="h-10 w-10 rounded-full vr-gradient flex items-center justify-center text-white font-bold">
                    3
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold">2035</h3>
                  <p className="text-muted-foreground">Начало программ высшего образования и расширение кампуса с интеграцией квантовых вычислений</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;