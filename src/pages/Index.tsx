import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import Icon from '@/components/ui/icon';
import AnimatedTestimonial from '@/components/AnimatedTestimonial';
import CountdownTimer from '@/components/CountdownTimer';

export default function Index() {
  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    situation: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    // Здесь будет обработка отправки формы
  };

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-slate-900 to-slate-800 text-white">
        <div className="absolute inset-0 bg-black/20"></div>
        <div className="relative container mx-auto px-4 py-20 lg:py-28">
          <div className="max-w-4xl mx-auto text-center">
            <Badge className="mb-6 bg-primary/20 text-primary-foreground border-primary/30">
              Мужской коучинг при семейных кризисах
            </Badge>
            <h1 className="text-4xl md:text-6xl font-bold mb-6 animate-fade-in">
              ВЫЙДИ ИЗ КРИЗИСА 
              <br />
              <span className="text-primary">СИЛЬНЕЕ, ЧЕМ БЫЛ</span>
            </h1>
            <p className="text-xl md:text-2xl text-slate-300 mb-8 animate-fade-in">
              Помогу пережить развод и семейный кризис, сохранив достоинство и найдя новые возможности для роста
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center animate-scale-in">
              <Button size="lg" className="text-lg px-8 py-4">
                <Icon name="MessageCircle" className="mr-2" size={20} />
                Получить консультацию
              </Button>
              <Button variant="outline" size="lg" className="text-lg px-8 py-4 border-white/30 text-white hover:bg-white/10">
                <Icon name="Play" className="mr-2" size={20} />
                Узнать подробнее
              </Button>
            </div>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary to-transparent"></div>
      </section>

      {/* Pain Points Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Узнаешь себя?
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Эти проблемы знакомы каждому мужчине, переживающему семейный кризис
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {[
              {
                icon: "HeartCrack",
                title: "Чувствуешь себя потерянным",
                description: "Не знаешь, как жить дальше после разрыва отношений. Кажется, что весь мир рухнул."
              },
              {
                icon: "Users",
                title: "Проблемы с детьми",
                description: "Сложно выстроить отношения с детьми после развода. Чувство вины не отпускает."
              },
              {
                icon: "DollarSign",
                title: "Финансовые трудности",
                description: "Алименты, раздел имущества, содержание двух домов - финансы трещат по швам."
              },
              {
                icon: "Brain",
                title: "Эмоциональное выгорание",
                description: "Злость, обида, депрессия. Сложно контролировать эмоции и двигаться дальше."
              },
              {
                icon: "Briefcase",
                title: "Проблемы на работе",
                description: "Личные проблемы влияют на карьеру. Сложно концентрироваться и быть продуктивным."
              },
              {
                icon: "Shield",
                title: "Потеря уверенности",
                description: "Сомневаешься в себе как в мужчине, отце, партнере. Самооценка на нуле."
              }
            ].map((pain, index) => (
              <Card key={index} className="hover:shadow-lg transition-all duration-300 hover:scale-105">
                <CardHeader className="text-center">
                  <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Icon name={pain.icon} className="text-primary" size={32} />
                  </div>
                  <CardTitle className="text-xl">{pain.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-center text-muted-foreground">
                    {pain.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Diagnosis Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              В чем корень проблемы?
            </h2>
            <p className="text-xl text-muted-foreground mb-12">
              Большинство мужчин пытаются справиться с кризисом в одиночку, но это путь в никуда
            </p>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              <Card className="bg-destructive/5 border-destructive/20">
                <CardHeader>
                  <Icon name="X" className="text-destructive mb-4" size={48} />
                  <CardTitle className="text-destructive">Неправильный путь</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Minus" className="text-destructive mt-1 mr-2 flex-shrink-0" size={16} />
                      Замыкание в себе и изоляция
                    </li>
                    <li className="flex items-start">
                      <Icon name="Minus" className="text-destructive mt-1 mr-2 flex-shrink-0" size={16} />
                      Попытки "заглушить" боль алкоголем
                    </li>
                    <li className="flex items-start">
                      <Icon name="Minus" className="text-destructive mt-1 mr-2 flex-shrink-0" size={16} />
                      Месть и конфликты с бывшей
                    </li>
                    <li className="flex items-start">
                      <Icon name="Minus" className="text-destructive mt-1 mr-2 flex-shrink-0" size={16} />
                      Попытки вернуть отношения любой ценой
                    </li>
                  </ul>
                </CardContent>
              </Card>

              <Card className="bg-primary/5 border-primary/20">
                <CardHeader>
                  <Icon name="CheckCircle" className="text-primary mb-4" size={48} />
                  <CardTitle className="text-primary">Правильный путь</CardTitle>
                </CardHeader>
                <CardContent className="text-left">
                  <ul className="space-y-3 text-muted-foreground">
                    <li className="flex items-start">
                      <Icon name="Plus" className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                      Работа с профессионалом
                    </li>
                    <li className="flex items-start">
                      <Icon name="Plus" className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                      Проработка эмоций и травм
                    </li>
                    <li className="flex items-start">
                      <Icon name="Plus" className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                      Построение новой жизни
                    </li>
                    <li className="flex items-start">
                      <Icon name="Plus" className="text-primary mt-1 mr-2 flex-shrink-0" size={16} />
                      Развитие личности и навыков
                    </li>
                  </ul>
                </CardContent>
              </Card>
            </div>

            <div className="bg-primary/10 p-8 rounded-lg">
              <h3 className="text-2xl font-bold mb-4">Главное понимание</h3>
              <p className="text-lg text-muted-foreground">
                Семейный кризис - это не конец, а <strong>новое начало</strong>. 
                Возможность стать лучшей версией себя, построить более здоровые отношения 
                и найти истинное счастье.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Results Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Что получишь в результате работы
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Через 3 месяца ты станешь совершенно другим человеком
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                {[
                  {
                    icon: "Target",
                    title: "Ясность целей и направления",
                    description: "Поймешь, чего хочешь от жизни и как этого достичь"
                  },
                  {
                    icon: "Heart",
                    title: "Эмоциональная стабильность",
                    description: "Научишься управлять эмоциями и реагировать осознанно"
                  },
                  {
                    icon: "Users",
                    title: "Здоровые отношения с детьми",
                    description: "Выстроишь крепкую связь с детьми, станешь примером"
                  },
                  {
                    icon: "TrendingUp",
                    title: "Карьерный и финансовый рост",
                    description: "Сосредоточишься на развитии и увеличении доходов"
                  },
                  {
                    icon: "Shield",
                    title: "Уверенность в себе",
                    description: "Вернешь мужскую силу и харизму, поверишь в себя"
                  },
                  {
                    icon: "Sunrise",
                    title: "Готовность к новым отношениям",
                    description: "Если захочешь, создашь здоровые и гармоничные отношения"
                  }
                ].map((result, index) => (
                  <div key={index} className="flex items-start space-x-4 animate-fade-in">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0">
                      <Icon name={result.icon} className="text-primary" size={24} />
                    </div>
                    <div>
                      <h3 className="text-xl font-semibold mb-2">{result.title}</h3>
                      <p className="text-muted-foreground">{result.description}</p>
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="text-center">
                <img 
                  src="/img/9b60790c-d592-456d-86b6-f7036e112fe4.jpg" 
                  alt="Уверенный мужчина"
                  className="rounded-lg shadow-2xl max-w-full h-auto"
                />
                <p className="mt-4 text-muted-foreground italic">
                  Ты через 3 месяца работы
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* How We Work Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Как мы будем работать
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Пошаговый план выхода из кризиса за 3 месяца
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {[
                {
                  step: "1",
                  title: "Диагностика и постановка целей",
                  duration: "1-2 неделя",
                  description: "Разбираем твою ситуацию, определяем ключевые проблемы и ставим конкретные цели на каждый месяц работы.",
                  points: ["Глубокий анализ ситуации", "Выявление деструктивных паттернов", "Постановка SMART-целей"]
                },
                {
                  step: "2", 
                  title: "Эмоциональная стабилизация",
                  duration: "3-6 неделя",
                  description: "Учимся управлять эмоциями, прорабатываем травмы и обиды, возвращаем внутренний стержень.",
                  points: ["Техники управления гневом", "Проработка травм развода", "Восстановление самооценки"]
                },
                {
                  step: "3",
                  title: "Построение новой жизни",
                  duration: "7-10 неделя", 
                  description: "Выстраиваем новые привычки, отношения с детьми, планы на карьеру и финансы.",
                  points: ["Новые жизненные привычки", "Стратегия общения с детьми", "Карьерное планирование"]
                },
                {
                  step: "4",
                  title: "Закрепление результатов",
                  duration: "11-12 неделя",
                  description: "Закрепляем достигнутое, готовимся к самостоятельной жизни, планируем дальнейшее развитие.",
                  points: ["План самостоятельного развития", "Готовность к новым отношениям", "Долгосрочные цели"]
                }
              ].map((phase, index) => (
                <Card key={index} className="relative overflow-hidden hover:shadow-lg transition-all duration-300">
                  <div className="absolute left-0 top-0 w-2 h-full bg-primary"></div>
                  <CardHeader className="pl-8">
                    <div className="flex items-center space-x-4 mb-4">
                      <div className="w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-xl">
                        {phase.step}
                      </div>
                      <div>
                        <CardTitle className="text-xl">{phase.title}</CardTitle>
                        <Badge variant="outline" className="mt-1">{phase.duration}</Badge>
                      </div>
                    </div>
                    <CardDescription className="text-base text-muted-foreground mb-4">
                      {phase.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent className="pl-8">
                    <ul className="space-y-2">
                      {phase.points.map((point, pointIndex) => (
                        <li key={pointIndex} className="flex items-center space-x-2">
                          <Icon name="CheckCircle" className="text-primary" size={16} />
                          <span className="text-muted-foreground">{point}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Trust Section */}
      <section className="py-20 bg-muted/30">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Почему стоит доверять
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Мой опыт и результаты клиентов говорят сами за себя
            </p>
          </div>

          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Experience */}
              <div className="space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Icon name="Award" className="text-primary" size={32} />
                      <span>7 лет практики</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Более 500 мужчин прошли через семейные кризисы и построили новую счастливую жизнь
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Icon name="BookOpen" className="text-primary" size={32} />
                      <span>Профессиональное образование</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Психолог, сертифицированный коуч, специализация на мужской психологии и семейных кризисах
                    </p>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center space-x-3">
                      <Icon name="User" className="text-primary" size={32} />
                      <span>Личный опыт</span>
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">
                      Сам прошел через развод, знаю эту боль изнутри. Смог не только выжить, но и стать сильнее
                    </p>
                  </CardContent>
                </Card>
              </div>

              {/* Testimonials */}
              <div className="space-y-6">
                <h3 className="text-2xl font-semibold mb-6">Отзывы клиентов</h3>
                
{[
                  {
                    name: "Александр, 38 лет",
                    text: "После развода думал, что жизнь закончена. За 3 месяца работы полностью изменил мышление. Теперь у меня отличные отношения с сыном и новая любовь.",
                    rating: 5,
                    photo: "https://cdn.poehali.dev/files/c0206919-4d17-4c87-aa6c-e5536a2f3402.jpeg"
                  },
                  {
                    name: "Дмитрий, 42 года", 
                    text: "Помог не только пережить развод, но и понять свои ошибки. Стал лучшим отцом и добился повышения на работе. Благодарен за поддержку!",
                    rating: 5,
                    photo: "https://cdn.poehali.dev/files/85c9241a-03f1-48d9-9163-0703ead7371a.jpeg"
                  },
                  {
                    name: "Михаил, 35 лет",
                    text: "Казалось, что никто не поймет. Но здесь я нашел не только профессионала, но и человека, который прошел через то же самое. Результат превзошел ожидания.",
                    rating: 5,
                    photo: "https://cdn.poehali.dev/files/26c1a51e-c344-4a55-b44a-c09faed18cc3.jpeg"
                  }
                ].map((testimonial, index) => (
                  <AnimatedTestimonial key={index} testimonial={testimonial} index={index} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Ответы на возражения и вопросы
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Все, что тебя беспокоит - разбираем честно
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            <Accordion type="single" collapsible className="space-y-4">
              {[
                {
                  question: "Зачем мне коуч? Я сам разберусь",
                  answer: "Понимаю это чувство - каждый мужчина хочет справиться сам. Но подумай: если бы ты мог решить проблему самостоятельно, разве ты бы не сделал это уже? Коуч - это не костыль, это инструмент для ускорения результата. Вместо 2-3 лет мучений ты получишь решение за 3 месяца."
                },
                {
                  question: "Это дорого. Не могу себе позволить",
                  answer: "Дорого - это потерять еще несколько лет жизни в депрессии, проблемах с детьми и карьерой. Стоимость программы окупится уже в первый месяц за счет повышения твоей продуктивности и принятия правильных решений. Плюс есть рассрочка."
                },
                {
                  question: "А вдруг не поможет? Мой случай особый",
                  answer: "За 7 лет практики я не встретил ни одного 'особого' случая. Да, детали разные, но суть проблем одинакова. Даю гарантию результата: если через месяц работы ты не увидишь изменений - вернем деньги полностью."
                },
                {
                  question: "Не хочу выносить сор из избы чужому человеку",
                  answer: "Твоя приватность под защитой - действует полная конфиденциальность. Кроме того, я сам прошел через развод и знаю эту боль. Ты будешь говорить не с 'чужим', а с тем, кто тебя понимает."
                },
                {
                  question: "Может, стоит попробовать помириться с женой?",
                  answer: "Если есть реальный шанс восстановить отношения - мы это обязательно рассмотрим. Но часто попытки 'вернуть' только усугубляют ситуацию. Сначала нужно стать лучшей версией себя, а потом принимать решения о будущем."
                },
                {
                  question: "Сколько времени займет работа?",
                  answer: "Базовая программа - 3 месяца интенсивной работы. Но первые изменения ты почувствуешь уже через 2-3 недели. Встречаемся 1 раз в неделю + поддержка в мессенджерах между сессиями."
                }
              ].map((faq, index) => (
                <AccordionItem key={index} value={`item-${index}`} className="border rounded-lg px-6">
                  <AccordionTrigger className="text-left text-lg font-semibold hover:no-underline">
                    {faq.question}
                  </AccordionTrigger>
                  <AccordionContent className="text-muted-foreground pt-4">
                    {faq.answer}
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="py-20 bg-gradient-to-br from-primary to-primary/80 text-primary-foreground">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold mb-6">
              Готов изменить свою жизнь?
            </h2>
            <p className="text-xl mb-8 opacity-90">
              Хватит страдать в одиночку. Пора действовать и строить новую, лучшую жизнь.
            </p>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="text-left space-y-6">
                <div className="bg-white/10 p-6 rounded-lg">
                  <h3 className="text-2xl font-bold mb-4">Что включает программа:</h3>
                  <ul className="space-y-3">
                    <li className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} />
                      <span>12 персональных сессий по 90 минут</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} />
                      <span>Поддержка в мессенджерах 24/7</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} />
                      <span>Персональный план действий</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} />
                      <span>Техники и упражнения</span>
                    </li>
                    <li className="flex items-center space-x-3">
                      <Icon name="CheckCircle" size={20} />
                      <span>Гарантия результата</span>
                    </li>
                  </ul>
                </div>
                
                <CountdownTimer />
                
                <div className="bg-white/10 p-4 rounded-lg text-center">
                  <div className="mb-2">
                    <span className="text-xl line-through opacity-60">149 000 ₽</span>
                  </div>
                  <p>
                    <span className="text-3xl font-bold text-yellow-300">99 000 ₽</span>
                    <br />
                    <span className="opacity-75">или 33 000 ₽ × 3 месяца</span>
                  </p>
                  <div className="mt-2">
                    <span className="bg-red-500 text-white px-3 py-1 rounded-full text-sm font-bold">
                      Скидка 33%
                    </span>
                  </div>
                </div>
              </div>

              <Card className="bg-white text-foreground">
                <CardHeader>
                  <CardTitle className="text-2xl text-center">
                    Запишись на бесплатную консультацию
                  </CardTitle>
                  <CardDescription className="text-center">
                    30 минут, чтобы понять, как решить твою ситуацию
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Твое имя"
                      value={formData.name}
                      onChange={(e) => setFormData({...formData, name: e.target.value})}
                      required
                    />
                    <Input
                      placeholder="Номер телефона"
                      type="tel"
                      value={formData.phone}
                      onChange={(e) => setFormData({...formData, phone: e.target.value})}
                      required
                    />
                    <Textarea
                      placeholder="Кратко опиши свою ситуацию"
                      value={formData.situation}
                      onChange={(e) => setFormData({...formData, situation: e.target.value})}
                      className="min-h-20"
                    />
                    <Button type="submit" className="w-full" size="lg">
                      <Icon name="Send" className="mr-2" size={20} />
                      Записаться на консультацию
                    </Button>
                  </form>
                  
                  <div className="text-center mt-4 text-sm text-muted-foreground">
                    <p>🔒 Ваши данные в безопасности</p>
                    <p>📞 Перезвоню в течение 2 часов</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-12 bg-slate-900 text-slate-300">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h3 className="text-2xl font-bold text-white mb-4">
              Мужской коуч Алексей Петров
            </h3>
            <p className="mb-6">
              Помогаю мужчинам преодолеть семейные кризисы и построить счастливую жизнь
            </p>
            <div className="flex justify-center space-x-6 mb-8">
              <a href="tel:+79001234567" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Icon name="Phone" size={20} />
                <span>+7 (900) 123-45-67</span>
              </a>
              <a href="mailto:info@example.com" className="flex items-center space-x-2 hover:text-primary transition-colors">
                <Icon name="Mail" size={20} />
                <span>info@menscoach.ru</span>
              </a>
            </div>
            <div className="border-t border-slate-700 pt-8">
              <p className="text-sm">
                © 2024 Все права защищены. Политика конфиденциальности
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}