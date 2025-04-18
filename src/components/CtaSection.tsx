import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const CtaSection = () => {
  return (
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="rounded-2xl vr-gradient p-1">
          <div className="rounded-xl bg-white p-8 dark:bg-vra-deepBlue/95 sm:p-12">
            <div className="mx-auto max-w-3xl text-center">
              <h2 className="mb-4 text-3xl font-bold tracking-tight sm:text-4xl">
                Готовы к образованию будущего?
              </h2>
              <p className="mb-8 text-lg text-muted-foreground">
                Присоединяйтесь к VRA Academy и откройте для себя новый мир обучения, где традиционное образование сочетается с передовыми технологиями виртуальной реальности.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Button asChild className="vr-gradient group text-base" size="lg">
                  <Link to="/register">
                    Подать заявку
                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                </Button>
                <Button asChild variant="outline" className="border-vra-purple text-foreground hover:bg-vra-purple/10" size="lg">
                  <Link to="/programs">
                    Узнать о программах
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;