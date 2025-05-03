# Debounced Search Demo (Vue 3 + TypeScript + Composition API)

Демо создания кастомного composable `useDebouncedSearch` для выполнения отложенного (debounced) поиска с API.

✅ Composable-функции (useSomething())
— это функции, которые используют реактивность Vue или Pinia.
✔ возвращают ref, computed, watch, reactive
✔ часто используются для того, чтобы собрать какую-то связку реактивных данных и логики
✔ могут подписываться на события, эффекты, таймеры, API


<img width="1438" alt="Снимок экрана 2025-05-02 в 09 28 32" src="https://github.com/user-attachments/assets/d58078da-d3f9-4fb0-9d96-374913530193" />

---

## 🚀 Стек

- Vue 3
- Composition API
- TypeScript
- Pinia (опционально)
- lodash-es (debounce)
- Vite

---

## 📦 Функционал

✅ Поле поиска с двусторонним связыванием (`v-model`)  
✅ Отложенный запрос к API с помощью lodash `debounce`  
✅ Индикация загрузки (`Загрузка...`)  
✅ Отображение результатов в `<pre>` с корректной версткой  
✅ Отмена дебаунса при размонтировании компонента

---

