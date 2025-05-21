
import { useState } from 'react';
import Icon from '@/components/ui/icon';
import { Button } from '@/components/ui/button';
import { 
  Card, 
  CardContent, 
  CardDescription, 
  CardFooter, 
  CardHeader, 
  CardTitle 
} from '@/components/ui/card';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';

const Index = () => {
  const [activeTab, setActiveTab] = useState('about');

  return (
    <div className="min-h-screen font-sans">
      {/* Верхняя навигация */}
      <header className="bg-gradient-to-r from-blue-50 to-purple-50 border-b">
        <div className="container mx-auto px-4 py-4 flex flex-col md:flex-row justify-between items-center">
          <div className="flex items-center mb-4 md:mb-0">
            <Icon name="BookOpen" className="h-8 w-8 text-primary mr-2" />
            <h1 className="text-2xl font-bold font-montserrat text-primary">Репетитор начальных классов</h1>
          </div>
          <nav className="flex gap-4">
            {['О себе', 'Документы', 'Материалы', 'Контакты'].map((item) => (
              <Button key={item} variant="ghost" className="hover:bg-primary/10">
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
              Индивидуальные <span className="text-[#9b87f5]">занятия</span> для учеников начальной школы
            </h1>
            <p className="text-lg text-gray-600 mb-8">
              Помогаю детям 1-4 классов осваивать школьную программу и развивать любовь к учебе с индивидуальным подходом к каждому ученику.
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
          <Tabs defaultValue="about" className="w-full" onValueChange={setActiveTab}>
            <TabsList className="grid grid-cols-3 md:grid-cols-6 mb-8">
              <TabsTrigger value="about" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Визитка
              </TabsTrigger>
              <TabsTrigger value="primary" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Начальная школа
              </TabsTrigger>
              <TabsTrigger value="documents" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Документы
              </TabsTrigger>
              <TabsTrigger value="materials" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Методическая копилка
              </TabsTrigger>
              <TabsTrigger value="extracurricular" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Внеклассная работа
              </TabsTrigger>
              <TabsTrigger value="help" className="data-[state=active]:bg-[#9b87f5] data-[state=active]:text-white">
                Помощь учащимся
              </TabsTrigger>
            </TabsList>

            {/* О себе */}
            <TabsContent value="about" className="animate-fade-in">
              <div className="flex flex-col md:flex-row gap-8">
                <div className="md:w-1/3">
                  <Avatar className="w-48 h-48 mx-auto">
                    <AvatarImage src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=2787&auto=format&fit=crop" />
                    <AvatarFallback>УР</AvatarFallback>
                  </Avatar>
                  <div className="mt-6 bg-gray-50 p-6 rounded-lg shadow-sm">
                    <h3 className="font-bold text-lg mb-2">Контактная информация</h3>
                    <div className="space-y-2">
                      <div className="flex items-center">
                        <Icon name="Mail" className="mr-2 h-4 w-4 text-gray-500" />
                        <span>teacher@example.com</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="Phone" className="mr-2 h-4 w-4 text-gray-500" />
                        <span>+7 (XXX) XXX-XX-XX</span>
                      </div>
                      <div className="flex items-center">
                        <Icon name="MapPin" className="mr-2 h-4 w-4 text-gray-500" />
                        <span>г. Москва</span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="md:w-2/3">
                  <h2 className="text-3xl font-bold font-montserrat mb-6 text-[#333]">Иванова Мария Ивановна</h2>
                  <div className="bg-[#F8F9FA] p-3 rounded-md inline-block mb-4">
                    <span className="text-gray-700">Учитель начальных классов высшей категории</span>
                  </div>
                  
                  <p className="text-gray-700 mb-6">
                    Я — опытный педагог с 15-летним стажем преподавания в начальной школе. 
                    Моя цель — не просто помочь детям с выполнением домашних заданий, 
                    но и привить им любовь к учёбе, развить уверенность в своих силах.
                  </p>
                  
                  <div className="mb-6">
                    <h3 className="text-xl font-bold mb-3">Образование</h3>
                    <ul className="list-disc list-inside space-y-2 text-gray-700">
                      <li>Московский педагогический государственный университет, 
                        факультет начального образования (2008 г.)</li>
                      <li>Курсы повышения квалификации "Современные методики обучения в начальной школе" (2020 г.)</li>
                    </ul>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Icon name="Award" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                          Достижения
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>Победитель конкурса "Лучший педагог года" (2022)</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>Автор методических пособий по математике</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Icon name="BookOpen" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                          Подход к обучению
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>Индивидуальный план для каждого ученика</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="Check" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>Интерактивные методики обучения</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Начальная школа */}
            <TabsContent value="primary" className="animate-fade-in">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="md:col-span-2">
                  <h2 className="text-3xl font-bold font-montserrat mb-6 text-[#333]">Специализация: начальная школа</h2>
                  <p className="text-gray-700 mb-6">
                    Я специализируюсь на работе с учениками 1-4 классов, помогая им освоить базовые предметы и 
                    заложить прочный фундамент для дальнейшего обучения. В начальной школе формируются ключевые 
                    навыки и привычки, которые определяют весь дальнейший образовательный путь ребенка.
                  </p>
                  
                  <div className="bg-[#F2FCE2] p-6 rounded-lg mb-8 border border-green-100">
                    <h3 className="text-xl font-bold mb-3 flex items-center">
                      <Icon name="Star" className="mr-2 h-5 w-5 text-amber-500" />
                      Преимущества занятий
                    </h3>
                    <ul className="space-y-3">
                      <li className="flex items-start">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <Icon name="CheckCircle" className="h-5 w-5 text-green-500" />
                        </div>
                        <div>
                          <span className="font-semibold">Индивидуальный подход</span>
                          <p className="text-sm text-gray-600">Учитываю темп и особенности восприятия информации каждым ребенком</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <Icon name="BookOpen" className="h-5 w-5 text-blue-500" />
                        </div>
                        <div>
                          <span className="font-semibold">Комплексное развитие</span>
                          <p className="text-sm text-gray-600">Работаю над всеми аспектами: чтение, письмо, счет, логическое мышление</p>
                        </div>
                      </li>
                      <li className="flex items-start">
                        <div className="bg-white p-2 rounded-full mr-3">
                          <Icon name="Heart" className="h-5 w-5 text-red-500" />
                        </div>
                        <div>
                          <span className="font-semibold">Психологический комфорт</span>
                          <p className="text-sm text-gray-600">Создаю дружественную атмосферу, где ребенок не боится ошибаться</p>
                        </div>
                      </li>
                    </ul>
                  </div>
                  
                  <h3 className="text-xl font-bold mb-4">Предметы начальной школы</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-6">
                    {[
                      { name: 'Русский язык', icon: 'PenTool', desc: 'Правописание, грамматика, развитие речи' },
                      { name: 'Математика', icon: 'Calculator', desc: 'Арифметика, логические задачи' },
                      { name: 'Литературное чтение', icon: 'BookOpen', desc: 'Техника чтения, анализ текстов' },
                      { name: 'Окружающий мир', icon: 'Globe', desc: 'Природоведение, обществознание' }
                    ].map(subject => (
                      <Card key={subject.name}>
                        <CardHeader className="pb-2">
                          <CardTitle className="text-lg flex items-center">
                            <Icon name={subject.icon} className="mr-2 h-5 w-5 text-[#9b87f5]" />
                            {subject.name}
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm text-gray-600">{subject.desc}</p>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <div className="bg-white shadow-lg rounded-lg overflow-hidden sticky top-4">
                    <div className="bg-[#9b87f5] p-4 text-white">
                      <h3 className="font-bold text-xl">Форматы занятий</h3>
                    </div>
                    <div className="p-6 space-y-6">
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Индивидуальные занятия</span>
                          <span className="font-bold">от 1000 ₽</span>
                        </div>
                        <p className="text-sm text-gray-600">60 минут персональной работы с учеником</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Групповые занятия</span>
                          <span className="font-bold">от 800 ₽</span>
                        </div>
                        <p className="text-sm text-gray-600">90 минут в мини-группе до 3 человек</p>
                      </div>
                      <div>
                        <div className="flex justify-between mb-2">
                          <span className="font-semibold">Онлайн-занятия</span>
                          <span className="font-bold">от 900 ₽</span>
                        </div>
                        <p className="text-sm text-gray-600">60 минут через видеосвязь</p>
                      </div>
                      <Button className="w-full bg-[#9b87f5] hover:bg-[#8b5cf6]">
                        Записаться
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Документы */}
            <TabsContent value="documents" className="animate-fade-in">
              <div className="max-w-4xl mx-auto">
                <h2 className="text-3xl font-bold font-montserrat mb-6 text-[#333]">Нормативные документы</h2>
                <p className="text-gray-700 mb-8">
                  В своей работе я руководствуюсь официальными образовательными стандартами и программами. 
                  Здесь представлены основные документы, которые регламентируют образовательный процесс 
                  в начальной школе.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
                  {[
                    { title: 'ФГОС начального общего образования', date: '31.05.2021', number: 'Приказ №286' },
                    { title: 'Санитарные правила и нормы', date: '28.09.2020', number: 'СанПиН 2.4.3648-20' },
                    { title: 'Примерные рабочие программы НОО', date: '27.09.2021', number: 'Протокол 3/21' },
                    { title: 'Профессиональный стандарт педагога', date: '18.10.2013', number: 'Приказ №544н' }
                  ].map((doc, index) => (
                    <Card key={index} className="group hover:shadow-md transition-all">
                      <CardHeader className="pb-2">
                        <CardTitle className="text-lg">{doc.title}</CardTitle>
                        <CardDescription>
                          {doc.number} от {doc.date}
                        </CardDescription>
                      </CardHeader>
                      <CardFooter>
                        <Button variant="outline" className="w-full group-hover:bg-[#9b87f5] group-hover:text-white transition-colors">
                          <Icon name="FileText" className="mr-2 h-4 w-4" />
                          Открыть документ
                        </Button>
                      </CardFooter>
                    </Card>
                  ))}
                </div>
                
                <div className="bg-[#F8F9FA] p-6 rounded-lg mb-6">
                  <h3 className="font-bold text-xl mb-4">Образовательные программы</h3>
                  <Accordion type="single" collapsible className="w-full">
                    {[
                      { title: 'Рабочая программа по русскому языку (1-4 классы)', content: 'Программа разработана в соответствии с ФГОС НОО и включает в себя основные разделы: фонетика, лексика, морфология, синтаксис и пунктуация.' },
                      { title: 'Рабочая программа по математике (1-4 классы)', content: 'Программа охватывает основные темы: арифметические действия с числами, решение текстовых задач, геометрический материал, элементы алгебры.' },
                      { title: 'Рабочая программа по литературному чтению (1-4 классы)', content: 'Программа направлена на формирование навыка чтения, развитие восприятия художественного произведения, творческой деятельности учащихся.' },
                      { title: 'Рабочая программа по окружающему миру (1-4 классы)', content: 'Программа включает изучение природы, общества, человека, включая аспекты безопасности жизнедеятельности и экологии.' }
                    ].map((program, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger>{program.title}</AccordionTrigger>
                        <AccordionContent>
                          <p className="text-gray-700 mb-4">{program.content}</p>
                          <Button variant="ghost" className="text-[#9b87f5]">
                            <Icon name="Download" className="mr-2 h-4 w-4" />
                            Скачать программу
                          </Button>
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
                
                <div className="bg-orange-50 border border-orange-100 p-6 rounded-lg">
                  <div className="flex items-start">
                    <div className="p-2 bg-orange-100 rounded-full mr-4">
                      <Icon name="Info" className="h-6 w-6 text-orange-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-lg mb-2">Важно знать</h3>
                      <p className="text-gray-700">
                        Все материалы, представленные на сайте, соответствуют актуальным образовательным стандартам.
                        Для получения полной информации об образовательных программах и документах, вы можете 
                        связаться со мной напрямую.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Методическая копилка */}
            <TabsContent value="materials" className="animate-fade-in">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold font-montserrat mb-6 text-[#333]">Методическая копилка</h2>
                <p className="text-gray-700 mb-8">
                  В этом разделе я собрала полезные материалы, разработки уроков и дидактические ресурсы, 
                  которые могут пригодиться как учителям, так и родителям для занятий с детьми.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">
                  {[
                    { title: 'Карточки по математике', desc: 'Набор из 20 карточек для отработки вычислительных навыков', icon: 'Calculator', color: 'bg-blue-100 text-blue-500' },
                    { title: 'Тексты для чтения', desc: 'Подборка текстов разной сложности с заданиями для развития навыков чтения', icon: 'BookOpen', color: 'bg-green-100 text-green-500' },
                    { title: 'Прописи', desc: 'Упражнения для красивого почерка и отработки навыков письма', icon: 'PenTool', color: 'bg-purple-100 text-purple-500' },
                    { title: 'Задания на логику', desc: 'Развивающие упражнения для формирования логического мышления', icon: 'Lightbulb', color: 'bg-amber-100 text-amber-500' },
                    { title: 'Словарные слова', desc: 'Интерактивные карточки для запоминания словарных слов', icon: 'BookMarked', color: 'bg-red-100 text-red-500' },
                    { title: 'Сезонные материалы', desc: 'Тематические задания по временам года и праздникам', icon: 'Calendar', color: 'bg-teal-100 text-teal-500' }
                  ].map((material, index) => (
                    <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-all">
                      <div className={`flex items-center justify-center h-16 ${material.color}`}>
                        <Icon name={material.icon} className="h-8 w-8" />
                      </div>
                      <div className="p-5">
                        <h3 className="font-bold text-lg mb-2">{material.title}</h3>
                        <p className="text-gray-600 text-sm mb-4">{material.desc}</p>
                        <Button variant="outline" className="w-full">
                          <Icon name="Download" className="mr-2 h-4 w-4" />
                          Скачать
                        </Button>
                      </div>
                    </div>
                  ))}
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Готовые разработки уроков</h3>
                  <div className="bg-gray-50 rounded-lg p-6">
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        { subject: 'Русский язык', topics: ['Правописание безударных гласных', 'Части речи', 'Разбор предложений'] },
                        { subject: 'Математика', topics: ['Табличное умножение', 'Решение задач в два действия', 'Геометрические фигуры'] },
                        { subject: 'Окружающий мир', topics: ['Природные зоны', 'Животный мир', 'Времена года'] },
                        { subject: 'Литературное чтение', topics: ['Сказки народов мира', 'Стихи о природе', 'Работа с текстом'] }
                      ].map((item, index) => (
                        <AccordionItem key={index} value={`lesson-${index}`}>
                          <AccordionTrigger className="text-lg font-medium">
                            {item.subject}
                          </AccordionTrigger>
                          <AccordionContent>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-2">
                              {item.topics.map((topic, idx) => (
                                <Card key={idx} className="hover:border-[#9b87f5] transition-colors">
                                  <CardHeader className="pb-2">
                                    <CardTitle className="text-base">{topic}</CardTitle>
                                  </CardHeader>
                                  <CardFooter>
                                    <Button variant="ghost" className="w-full text-[#9b87f5]">
                                      <Icon name="FileText" className="mr-2 h-4 w-4" />
                                      Просмотреть
                                    </Button>
                                  </CardFooter>
                                </Card>
                              ))}
                            </div>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                </div>
                
                <div className="bg-[#FDE1D3] rounded-lg p-6">
                  <h3 className="text-2xl font-bold mb-4">Полезные ресурсы</h3>
                  <p className="mb-4 text-gray-700">
                    Подборка проверенных онлайн-ресурсов, которые я рекомендую использовать для дополнительных занятий:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {[
                      { name: 'Учи.ру', desc: 'Интерактивная образовательная платформа' },
                      { name: 'Российская электронная школа', desc: 'Полный школьный курс уроков' },
                      { name: 'ЯКласс', desc: 'Цифровой образовательный ресурс для школ' },
                      { name: 'Инфоурок', desc: 'Материалы для учителей и учеников' }
                    ].map((resource, index) => (
                      <a 
                        key={index} 
                        href="#" 
                        className="bg-white p-4 rounded-lg shadow flex items-center hover:shadow-md transition-shadow"
                      >
                        <div className="bg-orange-100 rounded-full p-3 mr-4">
                          <Icon name="ExternalLink" className="h-5 w-5 text-orange-500" />
                        </div>
                        <div>
                          <h4 className="font-bold">{resource.name}</h4>
                          <p className="text-sm text-gray-600">{resource.desc}</p>
                        </div>
                      </a>
                    ))}
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Внеклассная работа */}
            <TabsContent value="extracurricular" className="animate-fade-in">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold font-montserrat mb-6 text-[#333]">Внеклассная работа</h2>
                <p className="text-gray-700 mb-8">
                  Внеклассная работа — это важная часть образовательного процесса, помогающая расширить 
                  кругозор детей, развить их творческие способности и привить интерес к учебе через 
                  нестандартные формы деятельности.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1564429097433-52fc49a68602?q=80&w=2940&auto=format&fit=crop" 
                      alt="Внеклассные занятия" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-6"
                    />
                    <h3 className="text-xl font-bold mb-3">Проектная деятельность</h3>
                    <p className="text-gray-700 mb-4">
                      Исследовательские и творческие проекты помогают детям научиться самостоятельно 
                      добывать знания, анализировать информацию и представлять результаты своего труда.
                    </p>
                    <div className="bg-[#F2FCE2] rounded-lg p-4">
                      <h4 className="font-bold mb-2">Примеры проектов:</h4>
                      <ul className="space-y-2">
                        <li className="flex items-center">
                          <Icon name="Check" className="mr-2 h-4 w-4 text-green-500" />
                          <span>«Моя семья» — изучение семейной истории</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="mr-2 h-4 w-4 text-green-500" />
                          <span>«Мой город» — исследование родного края</span>
                        </li>
                        <li className="flex items-center">
                          <Icon name="Check" className="mr-2 h-4 w-4 text-green-500" />
                          <span>«Времена года» — наблюдение за природой</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                  
                  <div>
                    <img 
                      src="https://images.unsplash.com/photo-1501349800519-48093d60bde0?q=80&w=2940&auto=format&fit=crop" 
                      alt="Творческие мастерские" 
                      className="rounded-lg shadow-md w-full h-auto object-cover mb-6"
                    />
                    <h3 className="text-xl font-bold mb-3">Творческие мастерские</h3>
                    <p className="text-gray-700 mb-4">
                      Регулярные творческие занятия, где дети могут реализовать свои идеи, развить 
                      моторику и воображение, научиться работать с различными материалами.
                    </p>
                    <div className="bg-[#E5DEFF] rounded-lg p-4">
                      <h4 className="font-bold mb-2">Популярные мастер-классы:</h4>
                      <div className="grid grid-cols-2 gap-3">
                        {['Оригами', 'Лепка из глины', 'Аппликации', 'Рисование'].map((activity, index) => (
                          <div key={index} className="bg-white rounded p-3 text-center shadow-sm">
                            {activity}
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Экскурсии и выездные мероприятия</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                    {[
                      { name: 'Музеи', desc: 'Исторические, художественные и научные экспозиции', icon: 'LandmarkMonument' },
                      { name: 'Библиотеки', desc: 'Знакомство с миром книг и литературные встречи', icon: 'Library' },
                      { name: 'Природные парки', desc: 'Экологические тропы и наблюдения за природой', icon: 'Trees' }
                    ].map((place, index) => (
                      <div key={index} className="bg-white rounded-lg shadow-md p-5 text-center hover:shadow-lg transition-shadow">
                        <div className="bg-[#9b87f5]/10 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                          <Icon name={place.icon} className="h-8 w-8 text-[#9b87f5]" />
                        </div>
                        <h4 className="font-bold text-lg mb-2">{place.name}</h4>
                        <p className="text-gray-600">{place.desc}</p>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="bg-[#FDE1D3] rounded-lg p-6 mb-8">
                  <h3 className="text-2xl font-bold mb-4">Интеллектуальные игры и конкурсы</h3>
                  <p className="text-gray-700 mb-6">
                    Провожу регулярные интеллектуальные мероприятия, которые в игровой форме позволяют 
                    детям расширять кругозор и развивать познавательный интерес:
                  </p>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Icon name="Brain" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                          Викторины
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>"Что? Где? Когда?" для младших школьников</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>"Умники и умницы" по предметам</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                    
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center">
                          <Icon name="Trophy" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                          Олимпиады
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <ul className="space-y-2">
                          <li className="flex items-start">
                            <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>Подготовка к городским и всероссийским олимпиадам</span>
                          </li>
                          <li className="flex items-start">
                            <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                            <span>Внутренние тематические олимпиады</span>
                          </li>
                        </ul>
                      </CardContent>
                    </Card>
                  </div>
                </div>
                
                <div className="bg-blue-50 rounded-lg p-6 border border-blue-100">
                  <div className="flex items-start">
                    <div className="bg-blue-100 p-3 rounded-full mr-4">
                      <Icon name="Calendar" className="h-6 w-6 text-blue-500" />
                    </div>
                    <div>
                      <h3 className="font-bold text-xl mb-3">Календарь предстоящих мероприятий</h3>
                      <p className="text-gray-700 mb-4">
                        Следите за обновлениями календаря, чтобы не пропустить интересные внеклассные события!
                      </p>
                      <Button className="bg-blue-500 hover:bg-blue-600">
                        Посмотреть календарь
                        <Icon name="ArrowRight" className="ml-2 h-4 w-4" />
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
            </TabsContent>

            {/* Помощь учащимся */}
            <TabsContent value="help" className="animate-fade-in">
              <div className="max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold font-montserrat mb-6 text-[#333]">Помощь учащимся</h2>
                <p className="text-gray-700 mb-8">
                  Каждый ребенок уникален, и подход к обучению должен учитывать индивидуальные особенности. 
                  На этой странице вы найдете информацию о том, какую помощь я оказываю учащимся начальных классов.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Icon name="BookOpenCheck" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                      Учебная поддержка
                    </h3>
                    <div className="bg-[#F8F9FA] rounded-lg p-5 mb-6">
                      <h4 className="font-bold mb-3">Помощь с домашними заданиями</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span>Объяснение сложных тем в доступной форме</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span>Помощь в выполнении упражнений и заданий</span>
                        </li>
                        <li className="flex items-start">
                          <Icon name="CheckCircle" className="mr-2 h-4 w-4 text-green-500 mt-1" />
                          <span>Подготовка к контрольным и проверочным работам</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div className="bg-[#F8F9FA] rounded-lg p-5">
                      <h4 className="font-bold mb-3">Работа с пробелами в знаниях</h4>
                      <p className="text-gray-700 mb-4">
                        Провожу диагностику и выявляю пробелы в знаниях, затем составляю индивидуальный 
                        план работы с учетом особенностей ребенка.
                      </p>
                      <div className="bg-white p-4 rounded shadow-sm">
                        <div className="flex justify-between items-center mb-2">
                          <span className="font-semibold">Диагностика</span>
                          <span className="bg-[#9b87f5] text-white px-2 py-1 rounded text-xs">1 этап</span>
                        </div>
                        <p className="text-sm text-gray-600 mb-3">
                          Определение текущего уровня знаний и выявление проблемных зон
                        </p>
                        <div className="h-2 bg-gray-100 rounded overflow-hidden">
                          <div className="h-full bg-[#9b87f5] w-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  
                  <div>
                    <h3 className="text-xl font-bold mb-4 flex items-center">
                      <Icon name="Brain" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                      Развитие навыков
                    </h3>
                    <div className="mb-6">
                      <div className="grid grid-cols-2 gap-4">
                        {[
                          { skill: 'Навыки чтения', desc: 'Техника и скорость чтения, понимание прочитанного' },
                          { skill: 'Письмо', desc: 'Каллиграфия, грамотность, структура текста' },
                          { skill: 'Счет', desc: 'Вычислительные навыки, решение задач' },
                          { skill: 'Внимание и память', desc: 'Концентрация, запоминание информации' }
                        ].map((item, index) => (
                          <Card key={index} className="hover:border-[#9b87f5] transition-colors">
                            <CardHeader className="pb-2">
                              <CardTitle className="text-base">{item.skill}</CardTitle>
                              <CardDescription>{item.desc}</CardDescription>
                            </CardHeader>
                          </Card>
                        ))}
                      </div>
                    </div>
                    
                    <div className="bg-[#F8F9FA] rounded-lg p-5">
                      <h4 className="font-bold mb-3">Мотивация к учебе</h4>
                      <p className="text-gray-700 mb-4">
                        Помогаю детям полюбить процесс обучения, используя игровые методики и 
                        нестандартные подходы к изучению предметов.
                      </p>
                      <Card className="bg-[#E5DEFF]">
                        <CardHeader>
                          <CardTitle className="text-base flex items-center">
                            <Icon name="Lightbulb" className="mr-2 h-5 w-5 text-[#9b87f5]" />
                            Интересный факт
                          </CardTitle>
                        </CardHeader>
                        <CardContent>
                          <p className="text-sm">
                            Внутренняя мотивация эффективнее внешней. Когда ребенок учится из интереса, 
                            а не за награду, результаты значительно выше и сохраняются дольше.
                          </p>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                </div>
                
                <div className="mb-12">
                  <h3 className="text-2xl font-bold mb-6">Форматы помощи</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
                    {[
                      { title: 'Индивидуальные занятия', desc: 'Персональная работа с учеником с учетом его особенностей', icon: 'User', color: 'bg-blue-50 text-blue-500' },
                      { title: 'Групповые занятия', desc: 'Обучение в мини-группе до 3 человек с похожим уровнем подготовки', icon: 'Users', color: 'bg-green-50 text-green-500' },
                      { title: 'Онлайн-консультации', desc: 'Дистанционная поддержка через видеосвязь', icon: 'Video', color: 'bg-amber-50 text-amber-500' }
                    ].map((format, index) => (
                      <Card key={index} className="overflow-hidden">
                        <div className={`${format.color} p-4 flex justify-center`}>
                          <Icon name={format.icon} className="h-10 w-10" />
                        </div>
                        <CardHeader>
                          <CardTitle>{format.title}</CardTitle>
                          <CardDescription>{format.desc}</CardDescription>
                        </CardHeader>
                        <CardFooter>
                          <Button className="w-full bg-[#9b87f5] hover:bg-[#8b5cf6]">
                            Узнать подробнее
                          </Button>
                        </CardFooter>
                      </Card>
                    ))}
                  </div>
                </div>
                
                <div>
                  <h3 className="text-2xl font-bold mb-6">Часто задаваемые вопросы</h3>
                  <div className="bg-white rounded-lg shadow">
                    <Accordion type="single" collapsible className="w-full">
                      {[
                        { q: 'Как часто нужно заниматься с репетитором?', a: 'Оптимальная частота занятий зависит от целей и уровня ученика. Обычно я рекомендую 1-2 занятия в неделю, чтобы был виден прогресс, но без перегрузки ребенка.' },
                        { q: 'Как долго длится одно занятие?', a: 'Стандартное занятие длится 60 минут, но для учеников 1-2 классов возможны сокращенные занятия по 45 минут с учетом возрастных особенностей концентрации внимания.' },
                        { q: 'Нужно ли что-то приносить на занятия?', a: 'На первое занятие желательно принести учебники, тетради и любые материалы, которые помогут оценить уровень знаний. Далее я предоставляю все необходимые материалы для работы.' },
                        { q: 'Как отслеживается прогресс ученика?', a: 'Я веду индивидуальный дневник достижений каждого ученика, провожу регулярные проверочные работы и отслеживаю успеваемость в школе. Раз в месяц предоставляю родителям отчет о прогрессе.' },
                        { q: 'Возможны ли пробные занятия?', a: 'Да, первое ознакомительное занятие проводится со скидкой 50%, чтобы оценить совместимость с учеником и определить программу работы.' }
                      ].map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="px-6 py-4 hover:no-underline hover:bg-gray-50">
                            {faq.q}
                          </AccordionTrigger>
                          <AccordionContent className="px-6 py-4">
                            <p className="text-gray-700">{faq.a}</p>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </div>
                  
                  <div className="mt-8 bg-[#9b87f5] rounded-lg p-6 text-white">
                    <div className="flex flex-col md:flex-row items-center">
                      <div className="mb-4 md:mb-0 md:mr-6">
                        <Icon name="MessagesSquare" className="h-12 w-12" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-xl mb-2">Нужна помощь или консультация?</h3>
                        <p className="mb-4">
                          Свяжитесь со мной любым удобным способом, и я отвечу на все ваши вопросы!
                        </p>
                      </div>
                      <Button className="bg-white text-[#9b87f5] hover:bg-gray-100">
                        Написать сообщение
                      </Button>
                    </div>
                  </div>
                </div>
              </div>
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
                  <span>teacher@example.com</span>
                </div>
                <div className="flex items-center">
                  <Icon name="Phone" className="mr-2 h-4 w-4 text-gray-400" />
                  <span>+7 (XXX) XXX-XX-XX</span>
                </div>
                <div className="flex items-center">
                  <Icon name="MapPin" className="mr-2 h-4 w-4 text-gray-400" />
                  <span>г. Москва</span>
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
              <p className="mb-4">Получайте информацию о новых материалах и акциях</p>
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
            <p>© {new Date().getFullYear()} Репетитор начальных классов. Все права защищены.</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
