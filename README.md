# gulp-template

Базова Gulp-збірка з модульною структурою для SCSS, JS, зображень та шрифтів.

## Репозиторій

[https://github.com/TwiZzys/gulp-template](https://github.com/TwiZzys/gulp-template)

## Встановлення

1. Клонувати репозиторій:

```bash
git clone https://github.com/TwiZzys/gulp-template.git
```

2. Встановити залежності:

```bash
yarn install
```

## Скрипти

* **Запуск у режимі розробки:**

```bash
yarn dev
```

* **Білд для продакшну:**

```bash
yarn build
```

## Структура проєкту

```
app/
  scss/       # стилі
  js/         # скрипти
  images/     # зображення
  fonts/      # шрифти
dist/         # готовий результат
gulp-tasks/   # окремі модулі тасків
```

## Таски

### server

Запускає локальний сервер через BrowserSync з автоматичним оновленням браузера.

```bash
gulp server
```

### watching

Слідкує за змінами у файлах проекту (html, scss, js) і запускає відповідні таски для оновлення результату та
BrowserSync.

```bash
gulp watching
```

### htmlModules

Обробляє HTML-файли: перетворює шаблони, робить rename (`index-src.html` → `index.html`) і передає зміни BrowserSync.

```bash
gulp htmlModules
```

### Приклад запуску

```
gulp dev     # Запуск у режимі розробки
gulp build   # Збірка для продакшну
```

## Автор

TwiZzys

## Ліцензія

Цей проєкт ліцензовано за MIT License. Деталі можна знайти у файлі [LICENSE](LICENSE).
