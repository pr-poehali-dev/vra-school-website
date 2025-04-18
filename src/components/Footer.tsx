import { Link } from "react-router-dom";
import Logo from "@/components/Logo";
import { Facebook, Twitter, Instagram, Youtube, Mail, Phone, MapPin } from "lucide-react";
import { Separator } from "@/components/ui/separator";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="bg-vra-lightPink dark:bg-vra-deepBlue">
      <div className="container px-4 py-12">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-4">
          <div>
            <Logo />
            <p className="mt-4 text-sm">
              Первое в России образовательное учреждение, использующее исключительно VR/AR технологии в обучении.
            </p>
            <div className="mt-6 flex space-x-4">
              <a href="#" className="text-vra-blue hover:text-vra-purple transition-colors">
                <Facebook size={20} />
                <span className="sr-only">Facebook</span>
              </a>
              <a href="#" className="text-vra-blue hover:text-vra-purple transition-colors">
                <Twitter size={20} />
                <span className="sr-only">Twitter</span>
              </a>
              <a href="#" className="text-vra-blue hover:text-vra-purple transition-colors">
                <Instagram size={20} />
                <span className="sr-only">Instagram</span>
              </a>
              <a href="#" className="text-vra-blue hover:text-vra-purple transition-colors">
                <Youtube size={20} />
                <span className="sr-only">YouTube</span>
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Образование</h3>
            <ul className="space-y-2">
              <li>
                <Link to="#" className="text-sm hover:text-vra-blue transition-colors">
                  Начальное образование
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-vra-blue transition-colors">
                  Основное общее образование
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-vra-blue transition-colors">
                  Среднее общее образование
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-vra-blue transition-colors">
                  Высшее образование
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Быстрые ссылки</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/about" className="text-sm hover:text-vra-blue transition-colors">
                  О нас
                </Link>
              </li>
              <li>
                <Link to="/programs" className="text-sm hover:text-vra-blue transition-colors">
                  Программы обучения
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-vra-blue transition-colors">
                  Технологии
                </Link>
              </li>
              <li>
                <Link to="#" className="text-sm hover:text-vra-blue transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="mb-4 text-lg font-semibold">Контакты</h3>
            <ul className="space-y-3">
              <li className="flex items-start">
                <MapPin size={16} className="mr-2 mt-0.5 text-vra-purple" />
                <span className="text-sm">Москва, ул. Технологическая, 42</span>
              </li>
              <li className="flex items-center">
                <Phone size={16} className="mr-2 text-vra-purple" />
                <span className="text-sm">+7 (800) 123-45-67</span>
              </li>
              <li className="flex items-center">
                <Mail size={16} className="mr-2 text-vra-purple" />
                <span className="text-sm">info@vra-academy.ru</span>
              </li>
            </ul>
          </div>
        </div>
        
        <Separator className="my-8 bg-vra-purple/20" />
        
        <div className="flex flex-col items-center justify-between md:flex-row">
          <p className="text-sm">© {currentYear} Virtual Reality Academy. Все права защищены.</p>
          <div className="mt-4 flex space-x-6 md:mt-0">
            <Link to="#" className="text-sm hover:text-vra-blue">
              Политика конфиденциальности
            </Link>
            <Link to="#" className="text-sm hover:text-vra-blue">
              Условия использования
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;