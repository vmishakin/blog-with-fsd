# Blog with FSD (portfolio pet-project)

Этот проект - блог, созданный с использованием React/ReduxToolkit. Он представляет возможность просматривать список статей и страницы статей. Проект ценен, в первую очередь, не за функционал, а за обилие используемых инструментов, библиотек, их правильной настройки и современных подходов production-уровня. Сейчас я использую этот проект в качестве экспериментального полигона для опробования разных технологий.

## Структура проекта

Проект написан в соответствии с методологией [Feature Sliced Design](https://feature-sliced.design/ru/docs/get-started/overview)

1. `shared` — переиспользуемый код, не имеющий отношения к специфике приложения/бизнеса.
2. `entities` (сущности) — бизнес-сущности.
3. `features` (фичи) — взаимодействия с пользователем, действия, которые несут бизнес-ценность для пользователя.
4. `widgets` (виджеты) — композиционный слой для соединения сущностей и фич в самостоятельные блоки.
5. `pages` (страницы) — композиционный слой для сборки полноценных страниц из сущностей, фич и виджетов.
6. `app` — настройки, стили и провайдеры для всего приложения.

## Технологии

- Lang: `typescript`
- UI: `React`
- Data model: `Redux Toolkit`
- Fetch data: `RTK-Query`/`redux AsyncThunk`
- Styles: `SCSS Modules`
- i18n: `i18next`
- Lint:
  TS: `eslint`
  SCSS: `stylelint`
- Formatter: `prettier`
- Testing:
  Unit: `jest`, `react testing library`
  E2E: `cypress`
  Screenshot: `storybook`, `loki`, `reg-cli`
- Builders/Bundlers:
  `webpack`, `babel`, `@babel/plugin-transform-runtime`
  or
  `vite`

## Функциональность

Пользователи могут авторизоваться, просматривать список статей, искать, фильтровать, сортировать их. Так же есть возможность открывать страницу со статьей, оценивать статью, оставлять комментарии, просматривать рекомендации. Еще можно редактировать свой профиль.

## Установка и запуск проекта

Необходим nodejs 18 и выше

Установить зависимости

```bash
npm install
```

Запуск приложения в dev режиме

```bash
npm run start:dev
```

или

```bash
npm run start:dev:vite
```

## Скрипты

- `npm run start` - Запуск frontend проекта на webpack dev server
- `npm run start:vite` - Запуск frontend проекта на vite
- `npm run start:dev` - Запуск frontend проекта на webpack dev server + backend (json server)
- `npm run start:dev:vite` - Запуск frontend проекта на vite + backend (json server)
- `npm run start:dev:server` - Запуск backend сервера (json server)
- `npm run build` - Сборка в prod режиме
- `npm run build:dev` - Сборка в dev режиме
- `npm run lint:ts` - Линт ts/tsx файлов
- `npm run lint:ts:fix` - Автофикс ts файлов линтером
- `npm run lint:typecheck` - Тайпчекинг (tsc с флагом noEmit)
- `npm run lint:scss` - Линт scss файлов
- `npm run lint:scss:fix` - Автофикс scss файлов style линтером
- `npm run lint:all` - Линт ts и scss
- `npm run test:unit` - Запуск unit тестов с jest
- `npm run test:ui` - Запуск скриншотных тестов с loki
- `npm run test:ui:ok` - Подтверждение новых скриншотов
- `npm run test:ui:update` - Обновление скриншотов
- `npm run test:ui:ci` - Запуск скриншотных тестов в CI
- `npm run test:ui:report` - Генерация полного отчета для скриншотных тестов
- `npm run test:ui:json` - Генерация json отчета для скриншотных тестов
- `npm run test:ui:html` - Генерация HTML отчета для скриншотных тестов
- `npm run storybook` - запуск Storybook
- `npm run storybook:build` - Сборка storybook билда (используется при скриншотном тестировании в CI)
- `npm run prepare` - прекоммит хуки

## Работа с переводами

В проекте используется библиотека `i18next` для работы с переводами.
Файлы с переводами хранятся в `public/locales`
Для VSCode есть расширение `lokalise.i18n-ally` с подсказками для ключей переводов.

## Тесты

Подробнее о тестах - [документация по тестам](/docs/tests.md)

## Линтинг

В проекте используется `eslint` для проверки typescript кода и `stylelint` для проверки файлов со стилями.

Также для строгого контроля главных архитектурных принципов
используется собственный eslint plugin `eslint-plugin-fsd-tools-mishakin`,
который содержит 3 правила

1. path-checker - запрещает использовать абсолютные импорты в рамках одного модуля, имеет auto fix
2. layer-imports - проверяет корректность использования слоев с точки зрения FSD
   (например widgets нельзя использовать в features и entitites)
3. public-api-imports - разрешает импорт из других модулей только из public api. Имеет auto fix

## Storybook

В проекте для компонентов описываются стори-кейсы.
Запросы на сервер мокаются с помощью `storybook-addon-mock`.

Файл со сторикейсами должен лежать рядом с компонентом с расширением .stories.tsx

Подробнее о [Storybook](/docs/storybook.md)

## Конфигурация проекта

Для разработки проект содержит 2 конфига:

1. Webpack - `./config/build`
2. Vite - `vite.config.ts`

Оба сборщика адаптированы под основные фичи приложения.

Вся конфигурация хранится в /config

- `/config/babel` - babel
- `/config/build` - конфигурация webpack
- `/config/jest` - конфигурация тестовой среды
- `/config/storybook` - конфигурация сторибука

В папке `scripts` находятся различные скрипты для рефакторинга\упрощения написания кода\генерации отчетов и тд.

### Абсолютные импорты

В проекте настроены абсолютные импорты с использованием алиаса `@` на папку `src`.
Таким образом, согласно FSD, нужно делать такие абсолютные импорты при при импорте из другого слоя:

```ts
import { Product } from '@/entities/Product';
```

## CI pipeline и pre commit хуки

Конфигурация github actions находится в `/.github/workflows`.
В ci прогоняются все виды тестов, сборка проекта и сторибука, линтинг.

В прекоммит хуках проверяем проект линтерами, конфиг в /.husky

## Работа с данными

Взаимодействие с данными осуществляется с помощью `redux toolkit`.
По возможности переиспользуемые сущности необходимо нормализовать с помощью EntityAdapter

Запросы на сервер отправляются с помощью [RTK query](/src/shared/api/rtkApi.ts)

Для асинхронного подключения редюсеров (чтобы не тянуть их в общий бандл) используется
[DynamicModuleLoader](/src/shared/lib/components/DynamicModuleLoader/DynamicModuleLoader.tsx)
