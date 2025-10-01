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

- **Запуск у режимі розробки:**
```bash
yarn dev
```

- **Білд для продакшну:**
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

### Приклад

```
gulp dev     # Запуск у режимі розробки
gulp build   # Збірка для продакшну
```

## Автор
TwiZzys

## Ліцензія

Цей проєкт ліцензовано за MIT License. Деталі можна знайти у файлі [LICENSE](LICENSE).
