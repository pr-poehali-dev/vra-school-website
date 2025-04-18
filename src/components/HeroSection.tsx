import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HeroSection = () => {
  return (
    <div className="relative overflow-hidden">
      {/* Градиентный фон и декоративные элементы */}
      <div className="absolute inset-0 bg-gradient-to-b from-vra-lightPink to-white dark:from-vra-deepBlue dark:to-vra-darkBlue/50"></div>
      <div className="absolute -right-64 -top-64 h-[500px] w-[500px] rounded-full bg-vra-purple/10 blur-3xl"></div>
      <div className="absolute -left-64 top-10 h-[300px] w-[300px] rounded-full bg-vra-blue/10 blur-3xl"></div>
      
      <div className="container relative mx-auto px-4 py-20 md:py-32">
        <div className="grid items-center gap-12 md:grid-cols-2">
          <div className="flex flex-col space-y-6">
            <h1 className="text-4xl font-extrabold tracking-tight sm:text-5xl md:text-6xl">
              <span className="block">Будущее образования</span>
              <span className="vr-gradient-text">уже здесь</span>
            </h1>
            <p className="text-xl text-muted-foreground">
              Первая в России академия с полным погружением в виртуальную реальность. От начальной школы до высшего образования.
            </p>
            <div className="flex flex-col space-y-4 sm:flex-row sm:space-x-4 sm:space-y-0">
              <Button asChild className="vr-gradient group text-lg font-medium" size="lg">
                <Link to="/programs">
                  Наши программы
                  <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </Link>
              </Button>
              <Button asChild variant="outline" className="border-vra-purple text-foreground hover:bg-vra-purple/10" size="lg">
                <Link to="/about">
                  Узнать больше
                </Link>
              </Button>
            </div>
          </div>
          
          <div className="relative flex items-center justify-center">
            <div className="relative h-[350px] w-[350px] animate-float">
              {/* VR шлем с голографическим эффектом */}
              <div className="absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-vra-purple/20 blur-xl"></div>
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative h-full w-full">
                  <div className="absolute inset-x-8 inset-y-10 rounded-2xl border border-vra-purple/30 bg-white/10 backdrop-blur-sm"></div>
                  <img 
                    src="/placeholder.svg" 
                    alt="VR шлем" 
                    className="relative z-10 h-full w-full object-contain"
                  />
                  <div className="absolute -right-5 -top-5 h-24 w-24 rounded-full border border-vra-blue/30 bg-white/10 backdrop-blur-sm"></div>
                  <div className="absolute -bottom-5 -left-5 h-16 w-16 rounded-full border border-vra-purple/30 bg-white/10 backdrop-blur-sm"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;