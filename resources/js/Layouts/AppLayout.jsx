import { Link, usePage } from '@inertiajs/react';
import { Button } from '@/components/ui/button';

export default function AppLayout({ children, title = 'Мой сайт' }) {
    const { url } = usePage();

    // Хелпер для активной ссылки
    const isActive = (path) => url === path ? 'text-primary font-medium' : 'text-muted-foreground hover:text-foreground';

    return (
        <div className="min-h-screen flex flex-col bg-background">
            {/* Шапка с навигацией */}
            <header className="border-b bg-card">
                <div className="container mx-auto px-4 py-3 flex items-center justify-between">
                    <Link href="/" className="text-xl font-bold text-foreground">
                        MyApp
                    </Link>

                    <nav className="flex items-center gap-6">
                        <Link href="/" className={isActive('/')}>
                            Главная
                        </Link>
                        <Link href="/about" className={isActive('/about')}>
                            О нас
                        </Link>
                    </nav>

                    <div className="flex items-center gap-2">
                        <Button variant="outline" size="sm" asChild>
                            <Link href="/login">Войти</Link>
                        </Button>
                        <Button size="sm" asChild>
                            <Link href="/register">Регистрация</Link>
                        </Button>
                    </div>
                </div>
            </header>

            {/* Основной контент */}
            <main className="flex-1 container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6">{title}</h1>
                {children}
            </main>

            {/* Футер */}
            <footer className="border-t py-6 text-center text-sm text-muted-foreground">
                <p>© {new Date().getFullYear()} MyApp. Все права защищены.</p>
            </footer>
        </div>
    );
}