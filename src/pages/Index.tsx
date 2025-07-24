import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Slider } from '@/components/ui/slider';
import Icon from '@/components/ui/icon';

const Index = () => {
  const [filters, setFilters] = useState({
    category: '',
    brand: '',
    year: [2015, 2024],
    price: [500000, 5000000]
  });

  const vehicles = [
    {
      id: 1,
      name: 'Экскаватор KOMATSU PC200',
      category: 'excavator',
      brand: 'Komatsu',
      year: 2022,
      price: 2800000,
      image: '/img/3833b581-f4f4-4e93-8053-7cb19433d13b.jpg',
      specs: { power: '148 л.с.', weight: '20 т', bucket: '1.0 м³' }
    },
    {
      id: 2,
      name: 'Тягач KAMAZ 65206',
      category: 'tractor',
      brand: 'KamAZ',
      year: 2023,
      price: 3200000,
      image: '/img/d3de54b8-6e28-4ac0-a954-e4b87de64a47.jpg',
      specs: { power: '400 л.с.', load: '44 т', engine: 'Euro 5' }
    },
    {
      id: 3,
      name: 'Грузовик MAN TGX',
      category: 'truck',
      brand: 'MAN',
      year: 2021,
      price: 2500000,
      image: '/img/67778bdd-27e9-4e38-ad09-5887de4d5db7.jpg',
      specs: { power: '460 л.с.', load: '26 т', fuel: 'Дизель' }
    }
  ];

  const filteredVehicles = vehicles.filter(vehicle => {
    if (filters.category && vehicle.category !== filters.category) return false;
    if (filters.brand && vehicle.brand !== filters.brand) return false;
    if (vehicle.year < filters.year[0] || vehicle.year > filters.year[1]) return false;
    if (vehicle.price < filters.price[0] || vehicle.price > filters.price[1]) return false;
    return true;
  });

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-900 via-gray-900 to-black text-white">
      {/* Hero Section */}
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10"></div>
        <div className="relative container mx-auto px-6 py-20">
          <div className="text-center animate-fade-in">
            <h1 className="text-6xl font-bold mb-6 bg-gradient-to-r from-neon-cyan to-neon-pink bg-clip-text text-transparent">
              СПЕЦТЕХНИКА БУДУЩЕГО
            </h1>
            <p className="text-xl text-gray-300 mb-8 max-w-2xl mx-auto">
              Российские и китайские марки тяжелой техники с гарантией качества и сервисным обслуживанием
            </p>
            <div className="flex gap-4 justify-center">
              <Button className="bg-neon-cyan text-black hover:bg-neon-cyan/90 text-lg px-8 py-3 animate-neon-glow">
                <Icon name="Truck" className="mr-2" />
                Каталог техники
              </Button>
              <Button variant="outline" className="border-neon-pink text-neon-pink hover:bg-neon-pink/10 text-lg px-8 py-3">
                <Icon name="Phone" className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="container mx-auto px-6 py-16">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-cyan">Категории техники</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { name: 'Экскаваторы', icon: 'Zap', count: '50+', color: 'neon-cyan' },
            { name: 'Тягачи', icon: 'Truck', count: '30+', color: 'neon-pink' },
            { name: 'Грузовики', icon: 'Package', count: '40+', color: 'electric-blue' }
          ].map((category, index) => (
            <Card key={index} className="bg-gray-800/50 border-gray-700 hover:border-neon-cyan/50 transition-all group cursor-pointer">
              <CardContent className="p-8 text-center">
                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${category.color}/20 flex items-center justify-center group-hover:scale-110 transition-transform`}>
                  <Icon name={category.icon as any} size={32} className={`text-${category.color}`} />
                </div>
                <h3 className="text-2xl font-bold mb-2">{category.name}</h3>
                <p className="text-gray-400">{category.count} моделей в наличии</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Filters Section */}
      <div className="container mx-auto px-6 py-8 border-t border-gray-800">
        <h3 className="text-2xl font-bold mb-6 text-neon-pink">Фильтры поиска</h3>
        <div className="grid md:grid-cols-4 gap-6 bg-gray-800/30 p-6 rounded-lg">
          <div>
            <label className="block text-sm font-medium mb-2">Категория</label>
            <Select value={filters.category} onValueChange={(value) => setFilters({...filters, category: value})}>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="Выберите категорию" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все категории</SelectItem>
                <SelectItem value="excavator">Экскаваторы</SelectItem>
                <SelectItem value="tractor">Тягачи</SelectItem>
                <SelectItem value="truck">Грузовики</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Марка</label>
            <Select value={filters.brand} onValueChange={(value) => setFilters({...filters, brand: value})}>
              <SelectTrigger className="bg-gray-700 border-gray-600">
                <SelectValue placeholder="Выберите марку" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="">Все марки</SelectItem>
                <SelectItem value="Komatsu">Komatsu</SelectItem>
                <SelectItem value="KamAZ">KamAZ</SelectItem>
                <SelectItem value="MAN">MAN</SelectItem>
              </SelectContent>
            </Select>
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Год выпуска: {filters.year[0]} - {filters.year[1]}</label>
            <Slider
              value={filters.year}
              onValueChange={(value) => setFilters({...filters, year: value})}
              max={2024}
              min={2015}
              step={1}
              className="mt-2"
            />
          </div>
          
          <div>
            <label className="block text-sm font-medium mb-2">Цена (₽): {filters.price[0].toLocaleString()} - {filters.price[1].toLocaleString()}</label>
            <Slider
              value={filters.price}
              onValueChange={(value) => setFilters({...filters, price: value})}
              max={5000000}
              min={500000}
              step={100000}
              className="mt-2"
            />
          </div>
        </div>
      </div>

      {/* Vehicles Grid */}
      <div className="container mx-auto px-6 py-16">
        <div className="flex justify-between items-center mb-8">
          <h3 className="text-3xl font-bold">Каталог техники</h3>
          <Badge variant="outline" className="text-neon-cyan border-neon-cyan">
            {filteredVehicles.length} единиц техники
          </Badge>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredVehicles.map((vehicle) => (
            <Card key={vehicle.id} className="bg-gray-800/50 border-gray-700 hover:border-neon-cyan/50 transition-all group overflow-hidden">
              <div className="relative">
                <img 
                  src={vehicle.image} 
                  alt={vehicle.name}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform"
                />
                <Badge className="absolute top-4 left-4 bg-neon-pink text-black">
                  {vehicle.year}
                </Badge>
              </div>
              
              <CardHeader>
                <CardTitle className="text-xl text-neon-cyan">{vehicle.name}</CardTitle>
                <CardDescription className="text-gray-400">{vehicle.brand}</CardDescription>
              </CardHeader>
              
              <CardContent>
                <div className="grid grid-cols-3 gap-2 mb-4 text-sm">
                  {Object.entries(vehicle.specs).map(([key, value]) => (
                    <div key={key} className="text-center p-2 bg-gray-700/50 rounded">
                      <div className="text-gray-400 text-xs">{key}</div>
                      <div className="text-white font-medium">{value}</div>
                    </div>
                  ))}
                </div>
                
                <div className="flex justify-between items-center">
                  <span className="text-2xl font-bold text-neon-pink">
                    {vehicle.price.toLocaleString()} ₽
                  </span>
                  <Button className="bg-neon-cyan text-black hover:bg-neon-cyan/90">
                    <Icon name="ShoppingCart" className="mr-2" size={16} />
                    Купить
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      {/* Features Section */}
      <div className="container mx-auto px-6 py-16 border-t border-gray-800">
        <h2 className="text-4xl font-bold text-center mb-12 text-neon-pink">Наши преимущества</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {[
            { icon: 'Shield', title: 'Гарантия качества', desc: 'Все единицы техники проходят тщательную проверку' },
            { icon: 'Wrench', title: 'Сервисная поддержка', desc: 'Полное техническое обслуживание и ремонт' },
            { icon: 'Truck', title: 'Быстрая доставка', desc: 'Доставка техники по всей России за 3-7 дней' }
          ].map((feature, index) => (
            <div key={index} className="text-center p-6">
              <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-electric-blue/20 flex items-center justify-center">
                <Icon name={feature.icon as any} size={32} className="text-electric-blue" />
              </div>
              <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
              <p className="text-gray-400">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="bg-gradient-to-r from-neon-cyan/10 to-neon-pink/10 py-16">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-4">Готовы купить спецтехнику?</h2>
          <p className="text-xl text-gray-300 mb-8">Свяжитесь с нами для консультации и получения лучшего предложения</p>
          <div className="flex gap-4 justify-center">
            <Button className="bg-neon-pink text-black hover:bg-neon-pink/90 text-lg px-8 py-3">
              <Icon name="Phone" className="mr-2" />
              +7 (495) 123-45-67
            </Button>
            <Button variant="outline" className="border-neon-cyan text-neon-cyan hover:bg-neon-cyan/10 text-lg px-8 py-3">
              <Icon name="Mail" className="mr-2" />
              info@spectech.ru
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Index;