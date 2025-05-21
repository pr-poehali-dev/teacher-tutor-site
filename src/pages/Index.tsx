import { useState } from "react";
import Icon from "@/components/ui/icon";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const Index = () => {
  const [activeTab, setActiveTab] = useState("about");

  return (
    <div className="min-h-screen font-sans">
      {/* Верхняя навигация */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icon name="BookOpen" className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold font-montserrat text-primary">
              Репетитор начальных классов
            </h1>
          </div>
          <nav className="flex gap-4">
            {["О себе", "Документы", "Материалы", "Контакты"].map((item) => (
              <Button
                key={item}
                variant="ghost"
                className="hover:bg-primary/10"
              >
                {item}
              </Button>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero секция */}
      <section className="bg-gradient-to-b from-[#E5DEFF] to-white py-16">
        <div className="container mx-auto px-4 flex flex-col md:flex-row items-center gap-10">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold font-montserrat mb-4 text-[#333] leading-tight">
              Индивидуальные <span className="text-[#9b87f5]">занятия</span> для
              учеников начальной школы
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Помогаю детям 1-4 классов осваивать школьную программу и развивать
              любовь к учебе с индивидуальным подходом к каждому ученику.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button size="lg" className="bg-[#9b87f5] hover:bg-[#8b5cf6]">
                Записаться на занятие
                <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
              </Button>
              <Button variant="outline" size="lg">
                Узнать больше
              </Button>
            </div>
          </div>
          <div className="flex-1 flex justify-center">
            <div className="relative">
              <div className="absolute -z-10 w-64 h-64 rounded-full bg-[#FDE1D3] blur-3xl opacity-70 -top-10 -left-10"></div>
              <img
                src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&w=2940&auto=format&fit=crop"
                alt="Учитель с учеником"
                className="rounded-lg shadow-lg max-w-md w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Основное содержимое с вкладками */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <Tabs
            defaultValue="about"
            className="w-full"
            onValueChange={setActiveTab}
          >
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger
                value="about"
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Визитка
              </TabsTrigger>
              <TabsTrigger
                value="primary"
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Начальная школа
              </TabsTrigger>
              <TabsTrigger
                value="documents"
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Документы
              </TabsTrigger>
              <TabsTrigger
                value="materials"
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Методическая копилка
              </TabsTrigger>
              <TabsTrigger
                value="extracurricular"
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Внеклассная работа
              </TabsTrigger>
              <TabsTrigger
                value="help"
                className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white"
              >
                Помощь учащимся
              </TabsTrigger>
            </TabsList>

            {/* О себе */}
            <TabsContent value="about" className="animate-fade-in">
              {/* ... остальной код без изменений ... */}
            </TabsContent>

            {/* Начальная школа */}
            <TabsContent value="primary" className="animate-fade-in">
              {/* ... остальной код без изменений ... */}
            </TabsContent>

            {/* Документы */}
            <TabsContent value="documents" className="animate-fade-in">
              {/* ... остальной код без изменений ... */}
            </TabsContent>

            {/* Методическая копилка */}
            <TabsContent value="materials" className="animate-fade-in">
              {/* ... остальной код без изменений ... */}
            </TabsContent>

            {/* Внеклассная работа */}
            <TabsContent value="extracurricular" className="animate-fade-in">
              {/* ... остальной код без изменений ... */}
            </TabsContent>

            {/* Помощь учащимся */}
            <TabsContent value="help" className="animate-fade-in">
              {/* ... остальной код без изменений ... */}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Футер */}
      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
              <h3 className="text-xl font-bold mb-4">Контакты</h3>
              <div className="space-y-2">
                <div className="flex items-center">
                  <Icon name="Mail" className="mr-2 h-4 w-4 text-gray-400" />
                  <span>blinovas373@gmail.com</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2 h-4 w-4 text-gray-400" />
                  <span>8 (902) 302-85-45</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2 h-4 w-4 text-gray-400" />
                  <span>8 (996) 017-78-57</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2 h-4 w-4 text-gray-400" />
                  <span>г. Нижний Новгород</span>
                </div>
              </div>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Режим работы</h3>
              <p className="mb-2">Пн-Пт: 14:00 - 20:00</p>
              <p>Сб: 10:00 - 16:00</p>
              <p>Вс: выходной</p>
            </div>

            <div>
              <h3 className="text-xl font-bold mb-4">Подписка на новости</h3>
              <p className="mb-4">
                Получайте информацию о новых материалах и акциях
              </p>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Ваш email"
                  className="px-4 py-2 rounded-l-md w-full text-gray-800 focus:outline-none"
                />
                <Button className="rounded-l-none bg-[#9b87f5] hover:bg-[#8b5cf6]">
                  <Icon name="Send" className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </div>

          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>
              © {new Date().getFullYear()} Репетитор начальных классов. Все
              права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
