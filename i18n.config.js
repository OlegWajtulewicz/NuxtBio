import privacyTranslations from './locales/privacy'
import cookiesTranslations from './locales/cookies'
import product from './locales/productPizza'

export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en',
  messages: {
    en: {
      navigation: 'navigation',
      home: 'Home',
      about: 'About',
      work: 'Work',
      works: 'Works',
      contact: 'Contact',
      menu: 'Menu',
      close: 'Close',
      all_works: 'all works',
      privacy: 'Privacy',
      back: 'Back',
      live_site: 'Live Site',
      want_same: 'I want the same',

      about_home: {
        main_text: "I'm a web developer with a passion for creating websites. I strive for perfection, so that my projects are not only aesthetically pleasing and functional, but also effectively solve business problems.",
        context_text: "On this website I present my best works created using modern web development technologies. I will be happy to offer my services and help you stand out in the digital world."
      },
      latest_work: {
        title: "latest work",
        all_works: "All works"
      },
      footer_m: "Let's talk",

      pages: {
        home: { title: '' },
        about: { title: 'About' },
        work: { title: 'Works' },
        cookie: { title: 'Cookie' },
        privacy: { title: 'Privacy' },
        'julia-maisa': { title: 'Julia Maisa' },
        'groove-school': { title: 'Groove School' },
        'pizza-next': { title: 'Pizza Next' }
      },
      bio: {
        title: "FRONTEND DEVELOPER",
        contacts: "Contacts",
        location: "Warszawa",
        skills: "Skills",
        education: "EDUCATION",
        other: "OTHER",
        languages: "Languages:",
        languages_level: "English – A1 / Russian – C / Polish - B",
        license: "Car, cat B driver's license",
        experience: "EXPERIENCE",
        partnership: "Partnership:",
        consent: "I agree to the processing of my personal data for the purposes necessary to carry out the recruitment process (in accordance with the Act of August 29, 1997 on the Protection of Personal Data; consolidated text: Journal of Laws 2016, item 922).",
        university: "Belarusian State University of Culture and Arts",
        bachelor: "Bachelor of Arts (BA), Instrumental music, Percussion instruments",
        frontend_dev: "Frontend Developer (Freelance)",
        drummer: "Drummer",
        session_musician: "Session musician | (Freelance)",
        drummer_perc: "Drummer, percussionist",
        concert_activity: "Concert activity, participation in various projects, studio work",
        orchestral_artist: "Orchestral Artist",
        percussion_instruments: "Percussion instruments",
        percussion_teacher: "Percussion Teacher, Orchestral Artist",
        comprehensive_school: "Comprehensive School",
        present: "Present",
        guard_orchestra: "Guard of Honor Orchestra",
        music_theater: "Belarusian State Academic Musical Theater"
      },
      cookies: {
        title: "We value your privacy",
        description: "We use cookies to improve your browsing experience, display personalized ads or content, and analyze traffic. By clicking the \"Accept All\" button, you consent to our use of ",
        accept_all: "Accept all",
        save: "Save",
        reject: "Reject",
        necessary: "Necessary",
        analytics: "Analytics",
        preferences: "Preferences",
        marketing: "Marketing",
        settings: 'Cookie settings',
        privacy: 'Privacy'
      },
      ...cookiesTranslations.en,
      ...privacyTranslations.en,
      privacy_page: privacyTranslations.en.privacy_page,
      cookie_page: cookiesTranslations.en.cookie_page,
      ...product.en
    },
    ru: {
      navigation: 'навигация',
      home: 'Главная',
      about: 'Обо мне',
      work: 'Работы',
      works: 'Работы',
      contact: 'Контакты',
      menu: 'Меню',
      close: 'Закрыть',
      all_works: 'все работы',
      want_same: 'Хочу такой же',
      back: 'Назад',
      project_not_found: 'Проект не найден',
      back_to_works: 'Вернуться к работам',
      live_site: 'Дальше',

      about_home: {
        main_text: "Я веб-разработчик, увлеченный созданием сайтов. Я стремлюсь к совершенству, чтобы мои проекты были не только эстетически привлекательными и функциональными, но и эффективно решали бизнес-задачи.",
        context_text: "На этом сайте я представляю свои лучшие работы, созданные с использованием современных технологий веб-разработки. Буду рад предложить свои услуги и помочь вам выделиться в цифровом мире."
      },
      latest_work: {
        title: "последние работы",
        all_works: "Все работы"
      },
      footer_m: 'Поговорим',

      pages: {
        home: { title: '' },
        about: { title: 'Обо мне' },
        work: { title: 'Работы' },
        cookie: { title: 'Cookie' },
        privacy: { title: 'Privacy' },
        'julia-maisa': { title: 'Julia Maisa' },
        'groove-school': { title: 'Groove School' },
        'pizza-next': { title: 'Pizza Next' }
      },
      bio: {
        title: "ФРОНТЕНД РАЗРАБОТЧИК",
        contacts: "Контакты",
        location: "Варшава",
        skills: "Навыки",
        education: "ОБРАЗОВАНИЕ",
        other: "ДРУГОЕ",
        languages: "Языки:",
        languages_level: "Английский – A1 / Русский – C / Польский - B",
        license: "Водительские права кат. B",
        experience: "ОПЫТ",
        partnership: "Сотрудничество:",
        consent: "Даю согласие на обработку моих персональных данных для целей, необходимых для реализации процесса рекрутинга (в соответствии с Законом от 29.08.1997 о защите персональных данных; сводный текст: Законодательный вестник 2016 г., поз. 922).",
        university: "Белорусский государственный университет культуры и искусств",
        bachelor: "Бакалавр искусств (BA), Инструментальная музыка, Ударные инструменты",
        frontend_dev: "Фронтенд-разработчик (Фриланс)",
        drummer: "Барабанщик",
        session_musician: "Сессионный музыкант | (Фриланс)",
        drummer_perc: "Барабанщик, перкуссионист",
        concert_activity: "Концертная деятельность, участие в различных проектах, студийная работа",
        orchestral_artist: "Артист оркестра",
        percussion_instruments: "Ударные инструменты",
        percussion_teacher: "Преподаватель ударных, артист оркестра",
        comprehensive_school: "Общеобразовательная школа",
        present: "настоящее время",
        guard_orchestra: "Оркестр Роты Почетного Караула",
        music_theater: "Белорусский Государственный Музыкальный Театр"
      },
      cookies: {
        title: "Мы ценим вашу конфиденциальность",
        description: "Мы используем файлы cookie для улучшения удобства просмотра, показа персонализированной рекламы или контента и анализа трафика. Нажимая кнопку «Принять все», вы соглашаетесь на использование нами файлов ",
        accept_all: "Принять все",
        save: "Сохранить",
        reject: "Отклонить",
        necessary: "Необходимые",
        analytics: "Аналитика",
        preferences: "Предпочтения",
        marketing: "Маркетинг",
        settings: 'Настройки cookies',
        privacy: 'Privacy'
      },
      ...cookiesTranslations.ru,
      ...privacyTranslations.ru,
      privacy_page: privacyTranslations.ru.privacy_page,
      cookie_page: cookiesTranslations.ru.cookie_page,
      ...product.ru
    },
    pl: {
      navigation: 'nawigacja',
      home: 'Główna',
      about: 'O mnie',
      work: 'Prace',
      works: 'Prace',
      contact: 'Kontakt',
      menu: 'Menu',
      close: 'Zamknij',
      all_works: 'wszystkie prace',
      cookie: 'Pliki cookie',
      privacy: 'Prywatność',
      back: 'Wróć',
      live_site: 'Następna',
      want_same: 'Chcę taki sam',

      cookies: {
        title: "Cenimy Twoją prywatność",
        description: "Używamy plików cookie w celu poprawy komfortu przeglądania, wyświetlania spersonalizowanych reklam lub treści oraz analizowania ruchu. Klikając przycisk \"Akceptuję wszystkie\", użytkownik wyraża zgodę na korzystanie przez nas z plików ",
        accept_all: "Zaakceptuj wszystkie",
        save: "Zapisz",
        reject: "Odrzucić",
        necessary: "Niezbędny",
        analytics: "Analityka",
        preferences: "Preferencje",
        marketing: "Marketing",
        settings: 'Ustawienia plików cookie',
        privacy: 'Prywatność'
      },

      about_home: {
        main_text: "Jestem programistą webowym z pasją do tworzenia stron internetowych. Dążę do perfekcji, aby moje projekty były nie tylko estetyczne i funkcjonalne, ale także skutecznie rozwiązywały problemy biznesowe.",
        context_text: "Na tej stronie prezentuję moje najlepsze prace stworzone przy użyciu nowoczesnych technologii web developmentu. Chętnie zaoferuję swoje usługi i pomogę Ci wyróżnić się w świecie cyfrowym."
      },
      latest_work: {
        title: "ostatnie prace",
        all_works: "Wszystkie prace"
      },
      footer_m: "Porozmawiajmy",

      pages: {
        home: { title: '' },
        about: { title: 'O mnie' },
        work: { title: 'Prace' },
        cookie: { title: 'Cookie' },
        privacy: { title: 'Prywatność' },
        'julia-maisa': { title: 'Julia Maisa' },
        'groove-school': { title: 'Groove School' },
        'pizza-next': { title: 'Pizza Next' }
      },
      bio: {
        title: "FRONTEND DEVELOPER",
        contacts: "Kontakty",
        location: "Warszawa",
        skills: "Umiejętności",
        education: "EDUKACJA",
        other: "INNE",
        languages: "Języki:",
        languages_level: "Angielski – A1 / Rosyjski – C / Polski - B",
        license: "Prawo jazdy kat. B",
        experience: "DOŚWIADCZENIE",
        partnership: "Współpraca:",
        consent: "Wyrażam zgodę na przetwarzanie moich danych osobowych dla potrzeb niezbędnych do realizacji procesu rekrutacji (zgodnie z Ustawą z dnia 29.08.1997 roku o Ochronie Danych Osobowych; tekst jednolity: Dz. U. 2016 r. poz. 922).",
        university: "Białoruski Państwowy Uniwersytet Kultury i Sztuki",
        bachelor: "Licencjat (BA), Muzyka instrumentalna, Instrumenty perkusyjne",
        frontend_dev: "Frontend Developer (Freelance)",
        drummer: "Perkusista",
        session_musician: "Muzyk sesyjny | (Freelance)",
        drummer_perc: "Perkusista, instrumenty perkusyjne",
        concert_activity: "Działalność koncertowa, udział w różnych projektach, praca studyjna",
        orchestral_artist: "Artysta orkiestrowy",
        percussion_instruments: "Instrumenty perkusyjne",
        percussion_teacher: "Nauczyciel perkusji, Artysta orkiestrowy",
        comprehensive_school: "Szkoła ogólnokształcąca",
        present: "obecnie",
        guard_orchestra: "Orkiestra Reprezentacyjna Wojska Białoruskiego",
        music_theater: "Białoruski Państwowy Teatr Muzyczny"
      },
      ...cookiesTranslations.pl,
      ...privacyTranslations.pl,
      privacy_page: privacyTranslations.pl.privacy_page,
      cookie_page: cookiesTranslations.pl.cookie_page,
      ...product.pl
    }
  }
})) 