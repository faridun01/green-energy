# Руководство по развертыванию Green Energy Website

## Быстрый старт на Vercel (Рекомендуется)

### Почему Vercel?
- ✅ Бесплатный план для личных проектов
- ✅ Автоматическое развертывание из GitHub
- ✅ Встроенная поддержка Next.js
- ✅ SSL сертификат бесплатно
- ✅ CDN для быстрой загрузки по всему миру
- ✅ Возможность привязать свой домен

### Пошаговая инструкция

#### Шаг 1: Подготовка кода

1. Убедитесь, что проект работает локально
2. Все файлы должны быть сохранены
3. Проверьте, что файл `.env.local` не загружается в Git (он в `.gitignore`)

#### Шаг 2: Загрузка на GitHub

1. Создайте аккаунт на GitHub.com (если нет)
2. Создайте новый репозиторий (New Repository)
3. Загрузите проект:

**Через GitHub Desktop (Проще):**
- Скачайте GitHub Desktop
- Перетащите папку проекта
- Нажмите "Publish repository"

**Через командную строку:**
```bash
git init
git add .
git commit -m "Initial commit: Green Energy website"
git branch -M main
git remote add origin https://github.com/ваш-username/green-energy.git
git push -u origin main
```

#### Шаг 3: Регистрация на Vercel

1. Перейдите на https://vercel.com/signup
2. Зарегистрируйтесь через GitHub (рекомендуется)
3. Разрешите Vercel доступ к вашим репозиториям

#### Шаг 4: Создание проекта

1. Нажмите "Add New..." → "Project"
2. Выберите репозиторий `green-energy`
3. Vercel автоматически определит Next.js
4. Настройки оставьте по умолчанию

#### Шаг 5: Добавление переменных окружения

В разделе "Environment Variables" добавьте:

```
EMAIL_USER = ваш-email@gmail.com
EMAIL_APP_PASSWORD = ваш-app-password-из-gmail
```

**Как получить Gmail App Password:**

1. Перейдите на https://myaccount.google.com/security
2. Включите "2-Step Verification" (двухфакторная аутентификация)
3. После включения найдите "App passwords" внизу страницы
4. Выберите:
   - App: Mail
   - Device: Other (Custom name) → напишите "Green Energy Website"
5. Нажмите "Generate"
6. Скопируйте 16-значный пароль (без пробелов)
7. Вставьте в Vercel как `EMAIL_APP_PASSWORD`

#### Шаг 6: Деплой

1. Нажмите "Deploy"
2. Подождите 1-2 минуты
3. Получите ссылку типа: `https://green-energy-xxx.vercel.app`

#### Шаг 7: Проверка

1. Откройте сайт по полученной ссылке
2. Проверьте переключение языков (RU/TJ)
3. Проверьте мобильное меню
4. Отправьте тестовое сообщение через форму
5. Проверьте почту farid.istar05@gmail.com

### Настройка своего домена

Если у вас есть домен (например, green-energy.tj):

1. В проекте Vercel → Settings → Domains
2. Добавьте ваш домен
3. Vercel покажет DNS записи
4. Зайдите в панель вашего регистратора домена
5. Добавьте A Record или CNAME запись
6. Подождите 24-48 часов (обычно быстрее)

**Типичные DNS настройки:**
```
Type: A
Name: @
Value: 76.76.21.21

Type: CNAME
Name: www
Value: cname.vercel-dns.com
```

## Альтернатива: Netlify

1. Зарегистрируйтесь на https://www.netlify.com
2. "Add new site" → "Import from Git"
3. Выберите GitHub репозиторий
4. Build command: `npm run build`
5. Publish directory: `.next`
6. Добавьте Environment Variables
7. Deploy

## Альтернатива: Собственный VPS сервер

Для продвинутых пользователей:

### Требования
- VPS сервер (Ubuntu 20.04+)
- Node.js 18+
- Nginx
- PM2

### Установка

```bash
# Обновление системы
sudo apt update && sudo apt upgrade -y

# Установка Node.js
curl -fsSL https://deb.nodesource.com/setup_20.x | sudo -E bash -
sudo apt install -y nodejs

# Установка PM2
sudo npm install -g pm2

# Клонирование проекта
git clone https://github.com/ваш-username/green-energy.git
cd green-energy

# Установка зависимостей
npm install

# Создание .env.local
nano .env.local
# Добавьте EMAIL_USER и EMAIL_APP_PASSWORD

# Сборка проекта
npm run build

# Запуск с PM2
pm2 start npm --name "green-energy" -- start
pm2 save
pm2 startup

# Установка Nginx
sudo apt install nginx

# Настройка Nginx
sudo nano /etc/nginx/sites-available/green-energy
```

Конфигурация Nginx:
```nginx
server {
    listen 80;
    server_name ваш-домен.tj www.ваш-домен.tj;

    location / {
        proxy_pass http://localhost:3000;
        proxy_http_version 1.1;
        proxy_set_header Upgrade $http_upgrade;
        proxy_set_header Connection 'upgrade';
        proxy_set_header Host $host;
        proxy_cache_bypass $http_upgrade;
    }
}
```

```bash
# Активация конфигурации
sudo ln -s /etc/nginx/sites-available/green-energy /etc/nginx/sites-enabled/
sudo nginx -t
sudo systemctl restart nginx

# Установка SSL (Let's Encrypt)
sudo apt install certbot python3-certbot-nginx
sudo certbot --nginx -d ваш-домен.tj -d www.ваш-домен.tj
```

## Обновление сайта

### На Vercel (автоматически)
1. Внесите изменения в код
2. Загрузите на GitHub:
   ```bash
   git add .
   git commit -m "Описание изменений"
   git push
   ```
3. Vercel автоматически задеплоит новую версию

### На VPS
```bash
cd green-energy
git pull
npm install
npm run build
pm2 restart green-energy
```

## Мониторинг

### Vercel
- Автоматические логи в панели Vercel
- Analytics доступна в бесплатном плане
- Real-time monitoring

### VPS
```bash
# Просмотр логов
pm2 logs green-energy

# Статус приложения
pm2 status

# Мониторинг ресурсов
pm2 monit
```

## Устранение проблем

### Письма не отправляются

1. Проверьте переменные окружения в Vercel
2. Убедитесь, что используете App Password, а не обычный пароль
3. Проверьте, что двухфакторная аутентификация включена в Gmail
4. Посмотрите логи в Vercel → Functions → Logs

### Сайт не открывается

1. Проверьте статус деплоя в Vercel
2. Откройте логи сборки (Build Logs)
3. Убедитесь, что все зависимости установлены
4. Проверьте DNS настройки домена

### Мобильное меню не работает

1. Очистите кэш браузера
2. Проверьте JavaScript в браузере (должен быть включен)
3. Обновите страницу с Ctrl+F5

## Поддержка

Если возникли вопросы:
- Email: farid.istar05@gmail.com
- Phone: +992 98 709 06 05
- WhatsApp: https://wa.me/992987090605
