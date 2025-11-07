import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Input } from '@/components/ui/input';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Avatar, AvatarFallback } from '@/components/ui/avatar';
import { ScrollArea } from '@/components/ui/scroll-area';
import { Separator } from '@/components/ui/separator';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedChat, setSelectedChat] = useState<number | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedCountry, setSelectedCountry] = useState<string>('all');
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [showVerifiedOnly, setShowVerifiedOnly] = useState(false);

  const products = [
    { id: 1, name: 'Смартфоны Xiaomi', price: '15 000 ₽', country: '🇨🇳', countryCode: 'CN', category: 'Электроника', seller: 'TechDragon', verified: true },
    { id: 2, name: 'Чай Пуэр премиум', price: '2 500 ₽', country: '🇨🇳', countryCode: 'CN', category: 'Продукты', seller: 'TeaHouse', verified: true },
    { id: 3, name: 'Строительные материалы', price: '50 000 ₽', country: '🇷🇺', countryCode: 'RU', category: 'Стройка', seller: 'StroyBase', verified: true },
    { id: 4, name: 'LED светильники', price: '1 200 ₽', country: '🇨🇳', countryCode: 'CN', category: 'Освещение', seller: 'LightWay', verified: false },
    { id: 5, name: 'Мебель из дерева', price: '45 000 ₽', country: '🇷🇺', countryCode: 'RU', category: 'Мебель', seller: 'WoodCraft', verified: true },
    { id: 6, name: 'Текстиль оптом', price: '800 ₽/м', country: '🇨🇳', countryCode: 'CN', category: 'Ткани', seller: 'SilkRoad', verified: true },
    { id: 7, name: 'Автозапчасти', price: '3 500 ₽', country: '🇨🇳', countryCode: 'CN', category: 'Автозапчасти', seller: 'AutoParts', verified: true },
    { id: 8, name: 'Химическое сырье', price: '25 000 ₽', country: '🇷🇺', countryCode: 'RU', category: 'Химия', seller: 'ChemBase', verified: true },
    { id: 9, name: 'Игрушки оптом', price: '150 ₽/шт', country: '🇨🇳', countryCode: 'CN', category: 'Игрушки', seller: 'ToyWorld', verified: false },
  ];

  const categories = ['Электроника', 'Продукты', 'Стройка', 'Освещение', 'Мебель', 'Ткани', 'Автозапчасти', 'Химия', 'Игрушки'];

  const filteredProducts = products.filter((product) => {
    const matchesSearch = product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         product.seller.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCountry = selectedCountry === 'all' || product.countryCode === selectedCountry;
    const matchesCategory = selectedCategory === 'all' || product.category === selectedCategory;
    const matchesVerified = !showVerifiedOnly || product.verified;
    
    return matchesSearch && matchesCountry && matchesCategory && matchesVerified;
  });

  const sellers = [
    { id: 1, name: 'TechDragon', country: '🇨🇳', products: 234, rating: 4.8, verified: true, category: 'Электроника' },
    { id: 2, name: 'StroyBase', country: '🇷🇺', products: 156, rating: 4.9, verified: true, category: 'Стройматериалы' },
    { id: 3, name: 'TeaHouse', country: '🇨🇳', products: 89, rating: 4.7, verified: true, category: 'Продукты питания' },
    { id: 4, name: 'WoodCraft', country: '🇷🇺', products: 67, rating: 4.6, verified: true, category: 'Мебель' },
  ];

  const chats = [
    { id: 1, name: 'TechDragon', lastMessage: 'Да, товар в наличии', time: '10:30', unread: 2, avatar: '🐉' },
    { id: 2, name: 'StroyBase', lastMessage: 'Отправили документы', time: '09:15', unread: 0, avatar: '🏗️' },
    { id: 3, name: 'TeaHouse', lastMessage: 'Спасибо за заказ!', time: 'Вчера', unread: 1, avatar: '🍵' },
  ];

  const orders = [
    { id: 1001, product: 'Смартфоны Xiaomi', seller: 'TechDragon', status: 'В пути', date: '15.11.2024', amount: '15 000 ₽' },
    { id: 1002, product: 'Чай Пуэр', seller: 'TeaHouse', status: 'Доставлен', date: '12.11.2024', amount: '2 500 ₽' },
    { id: 1003, product: 'LED светильники', seller: 'LightWay', status: 'Обработка', date: '16.11.2024', amount: '1 200 ₽' },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted/20">
      <nav className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="flex items-center gap-2 text-2xl font-bold">
              <span className="text-primary">🇷🇺</span>
              <span className="bg-gradient-to-r from-primary to-secondary bg-clip-text text-transparent">
                RU-CN Bridge
              </span>
              <span className="text-secondary">🇨🇳</span>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('home')}>
              <Icon name="Home" size={18} className="mr-2" />
              Главная
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('catalog')}>
              <Icon name="Package" size={18} className="mr-2" />
              Каталог
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('sellers')}>
              <Icon name="Store" size={18} className="mr-2" />
              Продавцы
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('messages')}>
              <Icon name="MessageCircle" size={18} className="mr-2" />
              Сообщения
              <Badge variant="destructive" className="ml-2">3</Badge>
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('orders')}>
              <Icon name="ShoppingCart" size={18} className="mr-2" />
              Заказы
            </Button>
            <Button variant="ghost" size="sm" onClick={() => setActiveTab('profile')}>
              <Icon name="User" size={18} className="mr-2" />
              Профиль
            </Button>
          </div>
        </div>
      </nav>

      <main className="container py-8">
        {activeTab === 'home' && (
          <div className="space-y-12 animate-fade-in">
            <section className="relative overflow-hidden rounded-3xl bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 p-12 text-center">
              <div className="relative z-10 space-y-6">
                <h1 className="text-5xl font-bold tracking-tight">
                  Торговый мост между Россией и Китаем
                </h1>
                <p className="mx-auto max-w-2xl text-xl text-muted-foreground">
                  Безопасная платформа для прямого общения покупателей и поставщиков. 
                  Находите надежных партнеров, общайтесь без посредников, управляйте сделками в одном месте.
                </p>
                <div className="flex items-center justify-center gap-4">
                  <Button size="lg" className="hover-scale" onClick={() => setActiveTab('catalog')}>
                    <Icon name="Search" size={20} className="mr-2" />
                    Найти товары
                  </Button>
                  <Button size="lg" variant="outline" className="hover-scale" onClick={() => setActiveTab('sellers')}>
                    <Icon name="Users" size={20} className="mr-2" />
                    База продавцов
                  </Button>
                </div>
              </div>
            </section>

            <section className="grid gap-8 md:grid-cols-3">
              <Card className="hover-scale">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="Shield" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Верификация продавцов</CardTitle>
                  <CardDescription>
                    Все поставщики проходят проверку документов и имеют рейтинг надежности
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-secondary/10">
                    <Icon name="MessageSquare" size={24} className="text-secondary" />
                  </div>
                  <CardTitle>Прямое общение</CardTitle>
                  <CardDescription>
                    Встроенный мессенджер с переводчиком для комфортного общения на русском и китайском
                  </CardDescription>
                </CardHeader>
              </Card>

              <Card className="hover-scale">
                <CardHeader>
                  <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-lg bg-primary/10">
                    <Icon name="FileText" size={24} className="text-primary" />
                  </div>
                  <CardTitle>Управление сделками</CardTitle>
                  <CardDescription>
                    Отслеживайте статусы заказов, документы и платежи в личном кабинете
                  </CardDescription>
                </CardHeader>
              </Card>
            </section>

            <section>
              <h2 className="mb-6 text-3xl font-bold">Популярные категории</h2>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {['Электроника', 'Текстиль и ткани', 'Стройматериалы', 'Продукты питания', 'Мебель', 'Автозапчасти', 'Химия', 'Игрушки'].map((cat) => (
                  <Card key={cat} className="cursor-pointer hover-scale transition-shadow hover:shadow-lg">
                    <CardHeader>
                      <CardTitle className="text-lg">{cat}</CardTitle>
                    </CardHeader>
                  </Card>
                ))}
              </div>
            </section>
          </div>
        )}

        {activeTab === 'catalog' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">Каталог товаров</h2>
              <Input 
                placeholder="Поиск товаров, продавцов..." 
                className="w-80" 
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>

            <Card className="p-4">
              <div className="flex flex-wrap items-center gap-4">
                <div className="flex items-center gap-2">
                  <Icon name="Globe" size={18} className="text-muted-foreground" />
                  <span className="text-sm font-medium">Страна:</span>
                  <div className="flex gap-2">
                    <Button 
                      variant={selectedCountry === 'all' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCountry('all')}
                    >
                      Все
                    </Button>
                    <Button 
                      variant={selectedCountry === 'RU' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCountry('RU')}
                    >
                      🇷🇺 Россия
                    </Button>
                    <Button 
                      variant={selectedCountry === 'CN' ? 'default' : 'outline'} 
                      size="sm"
                      onClick={() => setSelectedCountry('CN')}
                    >
                      🇨🇳 Китай
                    </Button>
                  </div>
                </div>

                <Separator orientation="vertical" className="h-8" />

                <div className="flex items-center gap-2">
                  <Icon name="Tag" size={18} className="text-muted-foreground" />
                  <span className="text-sm font-medium">Категория:</span>
                  <select
                    value={selectedCategory}
                    onChange={(e) => setSelectedCategory(e.target.value)}
                    className="rounded-md border bg-background px-3 py-1.5 text-sm"
                  >
                    <option value="all">Все категории</option>
                    {categories.map((cat) => (
                      <option key={cat} value={cat}>{cat}</option>
                    ))}
                  </select>
                </div>

                <Separator orientation="vertical" className="h-8" />

                <Button
                  variant={showVerifiedOnly ? 'default' : 'outline'}
                  size="sm"
                  onClick={() => setShowVerifiedOnly(!showVerifiedOnly)}
                >
                  <Icon name="BadgeCheck" size={16} className="mr-2" />
                  Только проверенные
                </Button>

                {(selectedCountry !== 'all' || selectedCategory !== 'all' || showVerifiedOnly || searchQuery) && (
                  <Button
                    variant="ghost"
                    size="sm"
                    onClick={() => {
                      setSelectedCountry('all');
                      setSelectedCategory('all');
                      setShowVerifiedOnly(false);
                      setSearchQuery('');
                    }}
                  >
                    <Icon name="X" size={16} className="mr-2" />
                    Сбросить
                  </Button>
                )}
              </div>
            </Card>

            <div className="flex items-center justify-between text-sm text-muted-foreground">
              <span>Найдено товаров: {filteredProducts.length}</span>
            </div>

            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {filteredProducts.map((product) => (
                <Card key={product.id} className="hover-scale overflow-hidden">
                  <div className="aspect-video bg-gradient-to-br from-primary/5 to-secondary/5 flex items-center justify-center text-6xl">
                    {product.country}
                  </div>
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div>
                        <CardTitle className="text-lg">{product.name}</CardTitle>
                        <CardDescription>{product.category}</CardDescription>
                      </div>
                      {product.verified && (
                        <Badge variant="default" className="bg-green-500">
                          <Icon name="CheckCircle" size={14} className="mr-1" />
                          Проверен
                        </Badge>
                      )}
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between">
                      <div>
                        <div className="text-2xl font-bold text-primary">{product.price}</div>
                        <div className="text-sm text-muted-foreground">{product.seller}</div>
                      </div>
                      <Button size="sm">
                        <Icon name="MessageCircle" size={16} className="mr-2" />
                        Связаться
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'sellers' && (
          <div className="space-y-6 animate-fade-in">
            <div className="flex items-center justify-between">
              <h2 className="text-3xl font-bold">База продавцов</h2>
              <Input placeholder="Поиск продавцов..." className="w-80" />
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              {sellers.map((seller) => (
                <Card key={seller.id} className="hover-scale">
                  <CardHeader>
                    <div className="flex items-start justify-between">
                      <div className="flex items-center gap-4">
                        <Avatar className="h-16 w-16">
                          <AvatarFallback className="text-2xl">{seller.country}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center gap-2">
                            <CardTitle>{seller.name}</CardTitle>
                            {seller.verified && (
                              <Badge variant="default" className="bg-green-500">
                                <Icon name="BadgeCheck" size={14} />
                              </Badge>
                            )}
                          </div>
                          <CardDescription>{seller.category}</CardDescription>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-4">
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Товаров в каталоге</span>
                        <span className="font-semibold">{seller.products}</span>
                      </div>
                      <div className="flex items-center justify-between text-sm">
                        <span className="text-muted-foreground">Рейтинг</span>
                        <div className="flex items-center gap-1">
                          <Icon name="Star" size={16} className="fill-yellow-400 text-yellow-400" />
                          <span className="font-semibold">{seller.rating}</span>
                        </div>
                      </div>
                      <Separator />
                      <div className="flex gap-2">
                        <Button className="flex-1">
                          <Icon name="MessageCircle" size={16} className="mr-2" />
                          Написать
                        </Button>
                        <Button variant="outline" className="flex-1">
                          <Icon name="Eye" size={16} className="mr-2" />
                          Каталог
                        </Button>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        )}

        {activeTab === 'messages' && (
          <div className="animate-fade-in">
            <Card className="overflow-hidden">
              <div className="grid md:grid-cols-[350px_1fr]">
                <div className="border-r">
                  <div className="border-b p-4">
                    <h2 className="text-xl font-bold">Сообщения</h2>
                    <Input placeholder="Поиск чатов..." className="mt-4" />
                  </div>
                  <ScrollArea className="h-[600px]">
                    {chats.map((chat) => (
                      <div
                        key={chat.id}
                        className={`cursor-pointer border-b p-4 transition-colors hover:bg-muted/50 ${
                          selectedChat === chat.id ? 'bg-muted' : ''
                        }`}
                        onClick={() => setSelectedChat(chat.id)}
                      >
                        <div className="flex items-start gap-3">
                          <Avatar>
                            <AvatarFallback>{chat.avatar}</AvatarFallback>
                          </Avatar>
                          <div className="flex-1 space-y-1">
                            <div className="flex items-center justify-between">
                              <div className="font-semibold">{chat.name}</div>
                              <div className="text-xs text-muted-foreground">{chat.time}</div>
                            </div>
                            <div className="flex items-center justify-between">
                              <div className="text-sm text-muted-foreground line-clamp-1">
                                {chat.lastMessage}
                              </div>
                              {chat.unread > 0 && (
                                <Badge variant="destructive" className="ml-2">
                                  {chat.unread}
                                </Badge>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </ScrollArea>
                </div>

                <div className="flex flex-col">
                  {selectedChat ? (
                    <>
                      <div className="border-b p-4">
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <Avatar>
                              <AvatarFallback>
                                {chats.find((c) => c.id === selectedChat)?.avatar}
                              </AvatarFallback>
                            </Avatar>
                            <div>
                              <div className="font-semibold">
                                {chats.find((c) => c.id === selectedChat)?.name}
                              </div>
                              <div className="text-sm text-muted-foreground">онлайн</div>
                            </div>
                          </div>
                          <Button variant="ghost" size="icon">
                            <Icon name="MoreVertical" size={18} />
                          </Button>
                        </div>
                      </div>

                      <ScrollArea className="flex-1 p-4" style={{ height: '500px' }}>
                        <div className="space-y-4">
                          <div className="flex justify-start">
                            <div className="max-w-[70%] rounded-2xl bg-muted px-4 py-2">
                              <p className="text-sm">Здравствуйте! Интересует ваш товар.</p>
                              <p className="mt-1 text-xs text-muted-foreground">10:25</p>
                            </div>
                          </div>
                          <div className="flex justify-end">
                            <div className="max-w-[70%] rounded-2xl bg-primary px-4 py-2 text-primary-foreground">
                              <p className="text-sm">Добрый день! Да, товар в наличии.</p>
                              <p className="mt-1 text-xs opacity-80">10:30</p>
                            </div>
                          </div>
                        </div>
                      </ScrollArea>

                      <div className="border-t p-4">
                        <div className="flex gap-2">
                          <Button variant="ghost" size="icon">
                            <Icon name="Paperclip" size={18} />
                          </Button>
                          <Input placeholder="Введите сообщение..." className="flex-1" />
                          <Button>
                            <Icon name="Send" size={18} />
                          </Button>
                        </div>
                      </div>
                    </>
                  ) : (
                    <div className="flex h-[600px] items-center justify-center text-muted-foreground">
                      Выберите чат для начала общения
                    </div>
                  )}
                </div>
              </div>
            </Card>
          </div>
        )}

        {activeTab === 'orders' && (
          <div className="space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Управление заказами</h2>

            <Tabs defaultValue="active">
              <TabsList>
                <TabsTrigger value="active">Активные</TabsTrigger>
                <TabsTrigger value="completed">Завершенные</TabsTrigger>
                <TabsTrigger value="cancelled">Отмененные</TabsTrigger>
              </TabsList>

              <TabsContent value="active" className="space-y-4">
                {orders.map((order) => (
                  <Card key={order.id}>
                    <CardHeader>
                      <div className="flex items-start justify-between">
                        <div>
                          <CardTitle className="text-lg">Заказ #{order.id}</CardTitle>
                          <CardDescription>{order.date}</CardDescription>
                        </div>
                        <Badge
                          variant={
                            order.status === 'Доставлен'
                              ? 'default'
                              : order.status === 'В пути'
                              ? 'secondary'
                              : 'outline'
                          }
                        >
                          {order.status}
                        </Badge>
                      </div>
                    </CardHeader>
                    <CardContent>
                      <div className="flex items-center justify-between">
                        <div>
                          <div className="font-semibold">{order.product}</div>
                          <div className="text-sm text-muted-foreground">
                            Продавец: {order.seller}
                          </div>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary">{order.amount}</div>
                          <Button variant="outline" size="sm" className="mt-2">
                            <Icon name="Eye" size={14} className="mr-2" />
                            Подробнее
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </TabsContent>

              <TabsContent value="completed">
                <div className="flex h-40 items-center justify-center text-muted-foreground">
                  Завершенных заказов пока нет
                </div>
              </TabsContent>

              <TabsContent value="cancelled">
                <div className="flex h-40 items-center justify-center text-muted-foreground">
                  Отмененных заказов нет
                </div>
              </TabsContent>
            </Tabs>
          </div>
        )}

        {activeTab === 'profile' && (
          <div className="mx-auto max-w-2xl space-y-6 animate-fade-in">
            <h2 className="text-3xl font-bold">Личный кабинет</h2>

            <Card>
              <CardHeader>
                <CardTitle>Профиль пользователя</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="flex items-center gap-4">
                  <Avatar className="h-20 w-20">
                    <AvatarFallback className="text-2xl">ИП</AvatarFallback>
                  </Avatar>
                  <div className="space-y-1">
                    <div className="text-xl font-semibold">Иван Петров</div>
                    <div className="text-sm text-muted-foreground">ivan@example.com</div>
                    <Badge>🇷🇺 Покупатель</Badge>
                  </div>
                </div>

                <Separator />

                <div className="grid gap-4">
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Активных сделок</span>
                    <span className="text-2xl font-bold text-primary">3</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Завершено заказов</span>
                    <span className="text-2xl font-bold">27</span>
                  </div>
                  <div className="flex items-center justify-between">
                    <span className="text-sm font-medium">Рейтинг</span>
                    <div className="flex items-center gap-1">
                      <Icon name="Star" size={20} className="fill-yellow-400 text-yellow-400" />
                      <span className="text-2xl font-bold">4.9</span>
                    </div>
                  </div>
                </div>

                <Separator />

                <div className="space-y-2">
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Settings" size={18} className="mr-2" />
                    Настройки аккаунта
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="Bell" size={18} className="mr-2" />
                    Уведомления
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Icon name="HelpCircle" size={18} className="mr-2" />
                    Помощь и FAQ
                  </Button>
                  <Button variant="outline" className="w-full justify-start text-destructive">
                    <Icon name="LogOut" size={18} className="mr-2" />
                    Выйти
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        )}
      </main>

      <footer className="mt-20 border-t bg-muted/30 py-12">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-4">
            <div>
              <h3 className="mb-4 font-bold">RU-CN Bridge</h3>
              <p className="text-sm text-muted-foreground">
                Международная торговая платформа для прямого взаимодействия российских и китайских предпринимателей
              </p>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Платформа</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>О нас</li>
                <li>Как это работает</li>
                <li>Тарифы</li>
                <li>Партнерам</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Поддержка</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>Помощь</li>
                <li>FAQ</li>
                <li>Контакты</li>
                <li>Документы</li>
              </ul>
            </div>
            <div>
              <h4 className="mb-4 font-semibold">Связь</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li>📧 info@ru-cn-bridge.com</li>
                <li>📱 +7 (495) 123-45-67</li>
                <li>📱 +86 10 1234 5678</li>
              </ul>
            </div>
          </div>
          <Separator className="my-8" />
          <div className="text-center text-sm text-muted-foreground">
            © 2024 RU-CN Bridge. Все права защищены.
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;