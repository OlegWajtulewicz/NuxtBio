/**
 * Инициализация анимации бегущей строки.
 * @param {HTMLElement} element - Элемент, содержащий бегущую строку.
 * @param {Object} options - Опции настройки анимации.
 * @param {number} options.speed - Скорость анимации.
 * @param {string} options.direction - Направление движения ("left" или "right").
 * @param {string} options.status - Статус анимации (например, "default" или "inverted").
 */
export function initMarqueeScroll(element, options = {}) {
    // Дефолтные значения для настроек
    const { speed = 20, direction = "left", status = "default" } = options;
  
    // Проверка наличия элемента
    if (!element) {
      console.error("Ошибка: элемент бегущей строки не найден!");
      return;
    }
  
    const marqueeScroll = element.querySelector(".marquee-scroll");
    const marqueeContent = marqueeScroll?.querySelector(".marquee-content");
  
    // Проверка наличия содержимого бегущей строки
    if (!marqueeScroll || !marqueeContent) {
      console.error("Ошибка: элементы .marquee-scroll или .marquee-content не найдены!");
      return;
    }
  
    // Клонирование содержимого для создания бесконечного эффекта
    const cloneContent = cloneMarqueeContent(marqueeContent);
  
    // Инициализация анимации
    startMarqueeAnimation(marqueeScroll, marqueeContent, cloneContent, { speed, direction });
  
    // Функция клонирования содержимого
    function cloneMarqueeContent(content) {
      const clone = content.cloneNode(true);
      marqueeScroll.appendChild(clone);
      return clone;
    }
  
    // Функция анимации бегущей строки
    function startMarqueeAnimation(marqueeScroll, marqueeContent, cloneContent, { speed, direction }) {
      let scrollOffset = 0;
      const contentWidth = marqueeContent.offsetWidth;
  
      function animate() {
        const scrollSpeed = speed / 10; // Регулируем скорость
        scrollOffset += direction === "left" ? -scrollSpeed : scrollSpeed;
  
        // Обновляем позицию с помощью transform
        marqueeScroll.style.transform = `translateX(${scrollOffset}px)`;
  
        // Проверка на достижение конца контента и сброс позиции
        if (Math.abs(scrollOffset) >= contentWidth) {
          scrollOffset = 0;
        }
  
        // Рекурсивный вызов анимации
        requestAnimationFrame(animate);
      }
  
      animate();
    }
  }
  