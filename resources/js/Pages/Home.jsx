import AppLayout from '@/Layouts/AppLayout';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';

export default function Home() {
    return (
        <AppLayout title="Добро пожаловать">
            <div className="grid gap-6 md:grid-cols-2">
                <Card>
                    <CardHeader>
                        <CardTitle>Быстрый старт</CardTitle>
                        <CardDescription>Чистый стек без лишней магии</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>• Laravel 13 + Inertia 3 + React 19</p>
                        <p>• Vite 8 для быстрой сборки</p>
                        <p>• Полный контроль над кодом</p>
                        <p>• Готов к деплою на shared-хостинг</p>
                    </CardContent>
                </Card>

                <Card>
                    <CardHeader>
                        <CardTitle>🛠 Что дальше?</CardTitle>
                        <CardDescription>Идеи для развития</CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                        <p>• Добавить ручную авторизацию</p>                       
                        <p>• Создать админ-панель</p>
                        <p>• Настроить деплой-скрипт</p>
                    </CardContent>
                </Card>
            </div>

            <div className="mt-8 flex gap-4">
                <Button asChild>
                    <a href="/about">Узнать больше</a>
                </Button>
                <Button variant="outline" asChild>
                    <a href="https://laravel.com" target="_blank" rel="noopener noreferrer">
                        Документация Laravel
                    </a>
                </Button>
            </div>
        </AppLayout>
    );
}