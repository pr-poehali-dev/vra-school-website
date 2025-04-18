import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

const NotFound = () => {
  return (
    <div className="container flex flex-col items-center justify-center px-4 py-16 md:py-32">
      <div className="text-center">
        <div className="mb-6 inline-block rounded-full vr-gradient p-3">
          <div className="h-20 w-20 flex items-center justify-center bg-white rounded-full dark:bg-vra-deepBlue">
            <span className="text-4xl font-bold vr-gradient-text">404</span>
          </div>
        </div>
        <h1 className="mb-4 text-3xl font-bold">Страница не найдена</h1>
        <p className="mb-8 text-muted-foreground">
          Похоже, мы не можем найти страницу, которую вы ищете
        </p>
        <Button asChild className="vr-gradient">
          <Link to="/">
            <Home className="mr-2 h-4 w-4" /> На главную
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;