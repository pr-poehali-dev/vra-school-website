import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Separator } from "@/components/ui/separator";

const Login = () => {
  const [showPassword, setShowPassword] = useState(false);
  
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-md">
        <Card className="futuristic-card shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Вход в аккаунт</CardTitle>
            <CardDescription>
              Введите данные для входа в личный кабинет VRA Academy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <Label htmlFor="email">Email</Label>
              <Input
                id="email"
                type="email"
                placeholder="email@example.com"
                className="border-vra-purple/30 focus:border-vra-blue focus:ring-vra-blue"
              />
            </div>
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <Label htmlFor="password">Пароль</Label>
                <Link
                  to="#"
                  className="text-xs text-vra-blue hover:text-vra-purple"
                >
                  Забыли пароль?
                </Link>
              </div>
              <div className="relative">
                <Input
                  id="password"
                  type={showPassword ? "text" : "password"}
                  placeholder="••••••••"
                  className="border-vra-purple/30 focus:border-vra-blue focus:ring-vra-blue pr-10"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute inset-y-0 right-0 flex items-center px-3 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>
            <Button className="w-full vr-gradient">
              <LogIn className="mr-2 h-4 w-4" /> Войти
            </Button>
            
            <div className="relative my-4">
              <Separator />
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="bg-background px-2 text-xs text-muted-foreground">
                  или войти через
                </span>
              </div>
            </div>
            
            <div className="grid grid-cols-2 gap-4">
              <Button variant="outline" className="border-vra-purple/30 hover:bg-vra-purple/10">
                Google
              </Button>
              <Button variant="outline" className="border-vra-purple/30 hover:bg-vra-purple/10">
                VK
              </Button>
            </div>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Нет аккаунта?{" "}
              <Link
                to="/register"
                className="font-medium text-vra-blue hover:text-vra-purple"
              >
                Зарегистрироваться
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Login;