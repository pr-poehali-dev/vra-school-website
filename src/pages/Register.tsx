import { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, UserPlus, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Separator } from "@/components/ui/separator";
import { Checkbox } from "@/components/ui/checkbox";

const Register = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [role, setRole] = useState("student");
  
  return (
    <div className="container mx-auto flex flex-col items-center justify-center px-4 py-16">
      <div className="w-full max-w-lg">
        <Card className="futuristic-card shadow-lg">
          <CardHeader className="space-y-1 text-center">
            <CardTitle className="text-2xl font-bold">Создание аккаунта</CardTitle>
            <CardDescription>
              Заполните форму для регистрации в VRA Academy
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="first-name">Имя</Label>
                  <Input
                    id="first-name"
                    placeholder="Иван"
                    className="border-vra-purple/30 focus:border-vra-blue focus:ring-vra-blue"
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="last-name">Фамилия</Label>
                  <Input
                    id="last-name"
                    placeholder="Иванов"
                    className="border-vra-purple/30 focus:border-vra-blue focus:ring-vra-blue"
                  />
                </div>
              </div>
              
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
                <Label htmlFor="password">Пароль</Label>
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
                <p className="text-xs text-muted-foreground">
                  Минимум 8 символов, включая буквы и цифры
                </p>
              </div>
              
              <div className="space-y-2">
                <Label>Я регистрируюсь как</Label>
                <RadioGroup
                  value={role}
                  onValueChange={setRole}
                  className="flex space-x-4"
                >
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="student" value="student" />
                    <Label htmlFor="student" className="cursor-pointer">Студент</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="parent" value="parent" />
                    <Label htmlFor="parent" className="cursor-pointer">Родитель</Label>
                  </div>
                  <div className="flex items-center space-x-2">
                    <RadioGroupItem id="teacher" value="teacher" />
                    <Label htmlFor="teacher" className="cursor-pointer">Преподаватель</Label>
                  </div>
                </RadioGroup>
              </div>
              
              {role === "student" && (
                <div className="space-y-2">
                  <Label>Ступень образования</Label>
                  <Select>
                    <SelectTrigger className="border-vra-purple/30 focus:border-vra-blue focus:ring-vra-blue">
                      <SelectValue placeholder="Выберите ступень образования" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="elementary">Начальное образование (1-4 класс)</SelectItem>
                      <SelectItem value="middle">Основное общее образование (5-9 класс)</SelectItem>
                      <SelectItem value="high">Среднее общее образование (10-11 класс)</SelectItem>
                      <SelectItem value="bachelor">Бакалавриат</SelectItem>
                      <SelectItem value="master">Магистратура</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              )}
              
              <div className="flex items-start space-x-2">
                <Checkbox id="terms" className="mt-1 border-vra-purple/30 data-[state=checked]:bg-vra-blue data-[state=checked]:text-white" />
                <div className="leading-tight">
                  <Label htmlFor="terms" className="cursor-pointer">
                    Я принимаю <Link to="#" className="text-vra-blue hover:text-vra-purple">условия использования</Link> и <Link to="#" className="text-vra-blue hover:text-vra-purple">политику конфиденциальности</Link>
                  </Label>
                </div>
              </div>
            </div>
            
            <Button className="w-full vr-gradient">
              <UserPlus className="mr-2 h-4 w-4" /> Зарегистрироваться
            </Button>
          </CardContent>
          <CardFooter className="flex justify-center">
            <p className="text-sm text-muted-foreground">
              Уже есть аккаунт?{" "}
              <Link
                to="/login"
                className="font-medium text-vra-blue hover:text-vra-purple"
              >
                Войти
              </Link>
            </p>
          </CardFooter>
        </Card>
      </div>
    </div>
  );
};

export default Register;