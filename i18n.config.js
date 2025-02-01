export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      navigation: 'navigation',
      home: 'Home',
      about: 'About',
      work: 'Work',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      about_home: {
        main_text: "I'm a web developer with a passion for creating websites. I strive for perfection, so that my projects are not only aesthetically pleasing and functional, but also effectively solve business problems.",
        context_text: "On this website I present my best works created using modern web development technologies. I will be happy to offer my services and help you stand out in the digital world."
      },
      latest_work: {
        title: "latest work",
        all_works: "All works"
      }
    },
    ru: {
      navigation: 'навигация',
      home: 'Главная',
      about: 'Обо мне',
      work: 'Работы',
      contact: 'Контакты',
      menu: 'Меню',
      close: 'Закрыть',
      about_home: {
        main_text: "Я веб-разработчик, увлеченный созданием сайтов. Я стремлюсь к совершенству, чтобы мои проекты были не только эстетически привлекательными и функциональными, но и эффективно решали бизнес-задачи.",
        context_text: "На этом сайте я представляю свои лучшие работы, созданные с использованием современных технологий веб-разработки. Буду рад предложить свои услуги и помочь вам выделиться в цифровом мире."
      },
      latest_work: {
        title: "последние работы",
        all_works: "Все работы"
      }
    }
  }
})) 