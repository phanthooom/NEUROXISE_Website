const translations = {
  ru: {
    // Navbar
    nav: {
      features:   'Возможности',
      howItWorks: 'Как это работает',
      exercises:  'Упражнения',
      stats:      'Статистика',
      pricing:    'Цены',
      getApp:     'Скачать',
    },

    // Hero
    hero: {
      badge:      'Тренировки на основе нейронауки',
      title1:     'Верните контроль',
      title2:     'над движениями и речью.',
      desc:       'Инновационная ИИ-платформа для эффективного восстановления пациентов после инсультов, травм головного мозга и нейрохирургических вмешательств. Персонализированные клинические протоколы реабилитации в вашем устройстве.',
      cta:        'Начать бесплатно',
      secondary:  'Как это работает',
      social:     'Рекомендовано ведущими специалистами в области неврологии и реабилитологии',
      // phone mockup
      greeting:   'Доброе утро',
      hello:      'Привет, Пользователь! 👋',
      goal:       'Цель: Память',
      dayStreak:  'Дней подряд',
      thisWeek:   'На этой нед.',
      accuracy:   'Точность',
      todaysPlan: "Сегодняшний план",
      seeAll:     'Все',
      done:       'ГОТОВО',
      // floating badges
      streakBadge:  'Серия 7 дней!',
      keepItUp:     'Продолжай!',
      accuracyBadge:'94% Точность',
      weekGrowth:   '+12% за неделю',
      // exercise names in phone
      wordRecall:    'Запоминание слов',
      soundPatterns: 'Звуковые паттерны',
      focusGrid:     'Сетка фокуса',
      memory:        'Память',
      speech:        'Речь',
      attention:     'Внимание',
      minLabel:      'мин',
    },

    // Features
    features: {
      badge:    'Преимущества NEUROXISE',
      title1:   'Доказательная медицина',
      title2:   'и передовые алгоритмы реабилитации',
      subtitle: 'Платформа базируется на принципах нейропластичности и доказательных методах восстановления речевых, моторных и когнитивных функций, делая процесс реабилитации непрерывным и контролируемым.',
      items: [
        {
          title: 'Адаптивные протоколы',
          desc:  'Система анализирует динамику выполнения заданий и автоматически корректирует сложность под текущее состояние пациента, обеспечивая оптимальную и безопасную терапевтическую нагрузку.',
        },
        {
          title: 'Объективный контроль',
          desc:  'Точная фиксация моторного и речевого отклика. Платформа формирует подробные структурированные отчеты о динамике восстановления для пациента и его лечащего врача.',
        },
        {
          title: 'Терапевтическая синергия',
          desc:  'Интерактивные специализированные механики вовлекают пациента в процесс лечения, стимулируют двигательную кору и поддерживают регулярность ежедневных занятий.',
        },
        {
          title: 'Локализация и доступность',
          desc:  'Интерфейс и специализированные речевые упражнения полностью адаптированы под узбекский, русский и английский языки, что критически важно для корректного восстановления речи.',
        },
        {
          title: 'Автономность и безопасность',
          desc:  'Основные восстановительные модули работают полностью автономно без доступа к интернету. Данные пациента строго конфиденциальны и могут храниться локально на устройстве.',
        },
        {
          title: 'Системность и комплаентность',
          desc:  'Встроенная система контроля регулярности занятий и бережные напоминания помогают пациенту соблюдать график тренировок, непрерывно стимулируя процессы нейропластичности.',
        },
      ],
    },

    // How it works
    howItWorks: {
      badge:    'Этапы реабилитации',
      title:    'Пошаговый процесс восстановления',
      subtitle: 'Системный подход к тренировкам позволяет запустить восстановительные процессы в нервной системе и отслеживать клиническую динамику.',
      cta:      'Начать программу восстановления →',
      steps: [
        {
          title: 'Первичная оценка дефицита',
          desc:  'Пациент проходит стартовое тестирование речевых, моторных и когнитивных функций для определения характера и степени постинсультных или посттравматических нарушений.',
        },
        {
          title: 'Регулярные направленные сессии',
          desc:  'Выполнение ежедневных целевых тренировок по специализированным модулям для активации зон головного мозга, отвечающих за восстановление утраченных функций.',
        },
        {
          title: 'Контроль и коррекция',
          desc:  'Фиксация динамики изменений и автоматическая адаптация терапевтической программы. Экспорт структурированных отчетов для демонстрации лечащему врачу-неврологу.',
        },
      ],
    },

    // Exercises
    exercises: {
      badge:    'Направления платформы',
      title1:   'Комплексная программа двигательного',
      title2:   'и речевого восстановления',
      subtitle: 'Специализированные модули для самостоятельных занятий пациента и видеоруководства для тех, кто находится рядом.',
      tryBtn:   'Попробовать',
      focusTitle: 'Терапевтический фокус модуля',
      diff: { Easy: 'Легко', Medium: 'Средне', Hard: 'Сложно' },
      categories: [
        {
          key:  'Мелкая моторика',
          icon: '🧠',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Интерактивные цифровые упражнения, направленные на координацию движений, разработку пальцев и кистей рук, а также восстановление двигательной синергии после неврологических нарушений.',
          btnText: 'Открыть упражнения',
          focusPoints: [
            'Разработка подвижности и гибкости суставов кисти',
            'Восстановление координации движений и точности захвата',
            'Тренировка раздельного контроля пальцев рук',
            'Стимуляция моторной коры головного мозга через сенсорный отклик',
          ],
          exercises: []
        },
        {
          key:  'Крупная моторика',
          icon: '🧠',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Пошаговые видеоуроки и практические руководства для родственников и близких. Обучаем правильной технике помощи пациенту при перемещении, позиционировании и выполнении базовой гимнастики.',
          btnText: 'Смотреть видеоуроки',
          focusPoints: [
            'Обучение безопасной технике пересаживания и перемещения пациента',
            'Правильное позиционирование в постели для профилактики осложнений',
            'Комплексы пассивной гимнастики для сохранения подвижности суставов',
            'Методики бережной активации крупных мышечных групп',
          ],
          exercises: []
        },
        {
          key:  'Восстановление речи',
          icon: '🎤',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Специализированные упражнения для пациентов с афазией. Помогают преодолевать барьеры в понимании речи и стимулируют процесс самостоятельного произношения звуков и слов.',
          btnText: 'Начать речевую терапию',
          focusPoints: [
            'Восстановление понимания номинативной речи (узнавание предметов)',
            'Стимуляция самостоятельного произношения и преодоление речевых барьеров',
            'Автоматизация артикуляционных движений и повторение звуков',
            'Поэтапное восстановление фразовой речи и навыков диалога',
          ],
          exercises: []
        },
        {
          key:  'Когнитивный модуль',
          icon: '⚡',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Тренировка высших психических функций, наиболее уязвимых при поражениях головного мозга. Восстановление концентрации, оперативной памяти и способности к планированию.',
          btnText: 'Перейти к модулю',
          focusPoints: [
            'Преодоление фиксационной амнезии и развитие кратковременной памяти',
            'Тренировка устойчивости, концентрации и переключаемости внимания',
            'Восстановление зрительно-пространственной ориентации',
            'Развитие логического мышления для адаптации к бытовым задачам',
          ],
          exercises: []
        },
      ],
    },

    // Stats
    stats: {
      items: [
        { label: 'Активных пользователей' },
        { label: 'Доступных упражнений'   },
        { label: 'Средняя точность'       },
        { label: 'Рейтинг App Store'      },
      ],
      testimonialsTitle:    'Что говорят пользователи',
      testimonialsSubtitle: 'Реальные истории людей, улучшающих себя каждый день',
      testimonials: [
        {
          name: 'Сара М.',
          role: 'Пациент речевой терапии',
          text: 'NEUROXISE стал настоящим переломным моментом в моём восстановлении. Речевые упражнения идеально подобраны, и я вижу прогресс каждый день.',
        },
        {
          name: 'Давид К.',
          role: 'Студент, 22 года',
          text: 'Моя концентрация на экзаменах значительно улучшилась всего за 3 недели. Упражнения на внимание — сложные в самом лучшем смысле.',
        },
        {
          name: 'Лена П.',
          role: 'Деловой специалист',
          text: 'Использую каждое утро как умственную разминку. Система серий держит меня ответственной, а геймификация делает процесс приятным.',
        },
      ],
    },

    // Download
    download: {
      badge:  'Доступно сейчас',
      title:  'Начни тренировать мозг уже сегодня',
      desc:   'Скачайте NEUROXISE бесплатно. Подписка не нужна — получите доступ к основным упражнениям сразу и обновляйтесь в любое время.',
      comingSoon: 'Скоро',
      appStore:   'Загрузить в',
      appStoreSub:'App Store',
      playStore:  'Доступно в',
      playStoreSub:'Google Play',
      features: [
        { icon: '🆓', label: 'Бесплатный старт',    sub: 'Карта не нужна'         },
        { icon: '📱', label: 'iOS и Android',        sub: 'Кроссплатформенность'   },
        { icon: '🔒', label: 'Приватность по умолч.',sub: 'Аккаунт не нужен'       },
        { icon: '🌐', label: '3 языка',              sub: 'RU · EN · UZ'           },
      ],
    },

    // FAQ
    faq: {
      badge:  'FAQ',
      title1: 'Часто задаваемые',
      title2: 'вопросы',
      items: [
        { q: 'Бесплатен ли NEUROXISE?',                   a: 'Да, базовый план полностью бесплатен и не требует банковской карты. Вы получаете 5 тренировочных модулей и базовую аналитику. Pro-план ($19/мес) открывает все возможности без ограничений.' },
        { q: 'На каких устройствах работает приложение?', a: 'NEUROXISE доступен на iOS и Android. Основные упражнения работают полностью офлайн — можно тренироваться в любом месте без интернета.' },
        { q: 'Нужен ли постоянный доступ к интернету?',  a: 'Нет. Все ключевые упражнения работают офлайн. Интернет нужен только для синхронизации прогресса между устройствами и загрузки обновлений.' },
        { q: 'Для кого предназначен NEUROXISE?',          a: 'Для всех: люди на речевой реабилитации, студенты, профессионалы, пожилые люди и все, кто хочет поддерживать или улучшать когнитивное здоровье.' },
        { q: 'Сколько времени нужно тренироваться?',      a: 'Достаточно 10–15 минут в день для заметных результатов. Умные напоминания помогут выработать устойчивую привычку в подходящее для вас время.' },
        { q: 'Мои данные в безопасности?',                a: 'Да. Данные хранятся на вашем устройстве. Для базового плана аккаунт не нужен. Мы никогда не продаём и не передаём ваши данные третьим лицам.' },
      ],
    },

    // Pricing
    pricing: {
      badge:    'Тарифы',
      title1:   'Каждый день — это шаг вперед.',
      title2:   '',
      subtitle: 'Восстановите движения, речь, когнитивные функции и уверенность вместе с NEUROXISE.',
      popular:  'Популярный',
      plans: [
        {
          name:  'Standart',
          price: '$15',
          per:   'навсегда',
          desc:  'Базовый курс упражнений для самостоятельного домашнего восстановления.',
          cta:   '14-дневный пробный период',
          ctaStyle: 'outline',
          features: [
            'Доступ к базовым модулям мелкой моторики и речи (Афазия)',
            'Стартовая оценка двигательных и речевых функций',
            'Локальное сохранение результатов тренировок на устройстве',
            'Ежедневный контроль регулярности занятий',
            'Стартовый скрининг для определения типа афазии и дефицитов',
          ],
        },
        {
          name:  'Premium',
          price: '$30',
          per:   'в месяц',
          desc:  'Комплексная индивидуальная программа реабилитации для пациента и поддержка близких.',
          cta:   '14-дневный пробный период',
          ctaStyle: 'primary',
          popular: true,
          features: [
            'Полный доступ ко всем 4 модулям платформы (включая когнитивный)',
            'Доступ к библиотеке видеоуроков по крупной моторике для близких',
            'Развернутая автоматическая диагностика речевых и моторных дефицитов',
            'Динамическая адаптация сложности заданий под состояние пациента',
            'Экспорт структурированных отчетов для демонстрации лечащему врачу',
            'Приоритетная техническая поддержка',
            'Развернутая экспертная диагностика речевых нарушений с определением формы афазии',
          ],
        },
        {
          name:  'ENTERPRISE',
          price: 'По запросу',
          per:   '',
          desc:  'Интеграция платформы в практику медицинских центров и работу профильных специалистов.',
          cta:   'Связаться с отделом продаж',
          ctaStyle: 'outline',
          features: [
            'Все возможности тарифа Премиум',
            'Панель врача для одновременного ведения и мониторинга множества пациентов',
            'Возможность ручной корректировки протоколов занятий реабилитологом',
            'Экспорт данных для интеграции с внутренними медицинскими картами',
            'Персональный менеджер внедрения и техническое сопровождение',
            'Обучение медицинского персонала работе с платформой',
          ],
        },
      ],
    },

    // Footer
    footer: {
      tagline: 'Тренировки мозга на основе науки для каждого. Улучшайте концентрацию, память и речь каждый день.',
      badge:   'Когнитивные тренировки и терапия',
      copyright: '© 2025 NEUROXISE. Все права защищены.',
      sections: {
        Product:   'Продукт',
        Company:   'Компания',
        Support:   'Поддержка',
        Community: 'Сообщество',
      },
      links: {
        Product:   ['Возможности', 'Упражнения', 'Отслеживание', 'Цены'],
        Company:   ['О нас', 'Блог', 'Карьера', 'Пресса'],
        Support:   ['Справка', 'Контакты', 'Конфиденциальность', 'Условия'],
        Community: ['Twitter / X', 'Instagram', 'LinkedIn', 'Discord'],
      },
      legal: ['Конфиденциальность', 'Условия', 'Cookies'],
    },
  },

  // ─────────────────────────────── ENGLISH ───────────────────────────────
  en: {
    nav: {
      features:   'Features',
      howItWorks: 'How it Works',
      exercises:  'Exercises',
      stats:      'Stats',
      pricing:    'Pricing',
      getApp:     'Get App',
    },
    hero: {
      badge:      'Neuroscience-based training',
      title1:     'Regain control',
      title2:     'over movement and speech.',
      desc:       'An innovative AI platform for effective patient recovery after strokes, traumatic brain injuries, and neurosurgical interventions. Personalized clinical rehabilitation protocols on your device.',
      cta:        'Start for free',
      secondary:  'How it works',
      social:     'Recommended by leading experts in neurology and rehabilitation',
      greeting:   'Good Morning',
      hello:      'Hello, User! 👋',
      goal:       'Goal: Memory',
      dayStreak:  'Day Streak',
      thisWeek:   'This Week',
      accuracy:   'Accuracy',
      todaysPlan: "Today's Plan",
      seeAll:     'All',
      done:       'DONE',
      streakBadge:  '7-Day Streak!',
      keepItUp:     'Keep it up',
      accuracyBadge:'94% Accuracy',
      weekGrowth:   '+12% this week',
      wordRecall:    'Word Recall',
      soundPatterns: 'Sound Patterns',
      focusGrid:     'Focus Grid',
      memory:        'Memory',
      speech:        'Speech',
      attention:     'Attention',
      minLabel:      'min',
    },
    features: {
      badge:    'NEUROXISE Advantages',
      title1:   'Evidence-based medicine',
      title2:   'and advanced rehabilitation algorithms',
      subtitle: 'The platform is based on neuroplasticity principles and evidence-based methods for restoring speech, motor, and cognitive functions, making the rehabilitation process continuous and controlled.',
      items: [
        {
          title: 'Adaptive protocols',
          desc:  'The system analyzes performance dynamics and automatically adjusts task difficulty to the patient\\'s current state, ensuring optimal and safe therapeutic load.',
        },
        {
          title: 'Objective control',
          desc:  'Accurate recording of motor and speech responses. The platform generates detailed, structured recovery reports for the patient and their attending physician.',
        },
        {
          title: 'Therapeutic synergy',
          desc:  'Interactive specialized mechanics engage the patient in the treatment process, stimulate the motor cortex, and maintain the regularity of daily exercises.',
        },
        {
          title: 'Localization and accessibility',
          desc:  'The interface and specialized speech exercises are fully adapted into Uzbek, Russian, and English, which is critical for proper speech recovery.',
        },
        {
          title: 'Autonomy and safety',
          desc:  'Core recovery modules operate completely offline without internet access. Patient data is strictly confidential and can be stored locally on the device.',
        },
        {
          title: 'Systematic approach and compliance',
          desc:  'The built-in activity tracking system and gentle reminders help the patient adhere to the training schedule, continuously stimulating neuroplasticity processes.',
        },
      ],
    },
    howItWorks: {
      badge:    'Rehabilitation stages',
      title:    'Step-by-step recovery process',
      subtitle: 'A systematic approach to training launches recovery processes in the nervous system and tracks clinical dynamics.',
      cta:      'Start recovery program →',
      steps: [
        {
          title: 'Initial deficit assessment',
          desc:  'The patient undergoes baseline testing of speech, motor, and cognitive functions to determine the nature and severity of post-stroke or post-traumatic impairments.',
        },
        {
          title: 'Regular targeted sessions',
          desc:  'Daily targeted training using specialized modules to activate brain areas responsible for restoring lost functions.',
        },
        {
          title: 'Monitoring and adjustment',
          desc:  'Recording dynamics of changes and automatic adaptation of the therapeutic program. Exporting structured reports to share with the attending neurologist.',
        },
      ],
    },
    exercises: {
      badge:    'Platform modules',
      title1:   'Comprehensive motor',
      title2:   'and speech recovery program',
      subtitle: 'Specialized modules for independent patient exercises and video guides for those around them.',
      tryBtn:   'Try',
      focusTitle: 'Therapeutic focus',
      diff: { Easy: 'Easy', Medium: 'Medium', Hard: 'Hard' },
      categories: [
        {
          key:  'Fine Motor Skills',
          icon: '🧠',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Interactive digital exercises aimed at motor coordination, finger and hand development, and restoring motor synergy after neurological impairments.',
          btnText: 'Open exercises',
          focusPoints: [
            'Developing hand joint mobility and flexibility',
            'Restoring movement coordination and grip precision',
            'Training independent finger control',
            'Stimulating the motor cortex through sensory feedback',
          ],
          exercises: []
        },
        {
          key:  'Gross Motor Skills',
          icon: '🧠',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Step-by-step video lessons and practical guides for relatives and loved ones. We teach proper techniques for assisting the patient with transfers, positioning, and basic gymnastics.',
          btnText: 'Watch video lessons',
          focusPoints: [
            'Learning safe techniques for patient transfers and moving',
            'Proper bed positioning to prevent complications',
            'Passive gymnastics complexes to preserve joint mobility',
            'Methods for gentle activation of large muscle groups',
          ],
          exercises: []
        },
        {
          key:  'Speech Recovery',
          icon: '🎤',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Specialized exercises for patients with aphasia. They help overcome barriers in speech comprehension and stimulate independent pronunciation of sounds and words.',
          btnText: 'Start speech therapy',
          focusPoints: [
            'Restoring nominative speech comprehension (object recognition)',
            'Stimulating independent pronunciation and overcoming speech barriers',
            'Automating articulatory movements and sound repetition',
            'Step-by-step restoration of phrasal speech and dialogue skills',
          ],
          exercises: []
        },
        {
          key:  'Cognitive Module',
          icon: '⚡',
          color: '#3D52F5',
          bg:   '#EEF0FF',
          desc: 'Training of higher mental functions that are most vulnerable in brain lesions. Restoring concentration, working memory, and planning ability.',
          btnText: 'Go to module',
          focusPoints: [
            'Overcoming fixation amnesia and developing short-term memory',
            'Training attention stability, concentration, and switching',
            'Restoring visual-spatial orientation',
            'Developing logical thinking for adapting to daily tasks',
          ],
          exercises: []
        },
      ],
    },
    stats: {
      items: [
        { label: 'Active Users'         },
        { label: 'Exercises Available'  },
        { label: 'Average Accuracy'     },
        { label: 'App Store Rating'     },
      ],
      testimonialsTitle:    'What our users say',
      testimonialsSubtitle: 'Real stories from people improving every day',
      testimonials: [
        { name: 'Sarah M.',  role: 'Speech Therapy Patient',  text: 'NEUROXISE has been a game-changer in my recovery. The speech exercises are perfectly paced and I can see my progress every single day.' },
        { name: 'David K.',  role: 'Student, 22',             text: 'My exam focus improved dramatically after just 3 weeks. The attention exercises are challenging in the best way possible.' },
        { name: 'Lena P.',   role: 'Corporate Professional',  text: 'I use it every morning as mental warm-up. The streak system keeps me accountable and the gamified approach makes it enjoyable.' },
      ],
    },
    download: {
      badge:  'Available Now',
      title:  'Start training your brain today',
      desc:   'Download NEUROXISE for free. No subscription required — access core exercises immediately and upgrade anytime.',
      comingSoon: 'Coming soon',
      appStore:    'Download on the',
      appStoreSub: 'App Store',
      playStore:   'Get it on',
      playStoreSub:'Google Play',
      features: [
        { icon: '🆓', label: 'Free to start',      sub: 'No credit card needed'  },
        { icon: '📱', label: 'iOS & Android',       sub: 'Cross-platform support' },
        { icon: '🔒', label: 'Private by default',  sub: 'No account required'    },
        { icon: '🌐', label: '3 languages',         sub: 'EN · RU · UZ'           },
      ],
    },
    faq: {
      badge:  'FAQ',
      title1: 'Frequently Asked',
      title2: 'Questions',
      items: [
        { q: 'Is NEUROXISE free?',                     a: 'Yes, the Starter plan is completely free with no credit card required. You get 5 training modules and basic analytics. The Pro plan at $19/month unlocks everything with no limits.' },
        { q: 'What devices does it support?',          a: 'NEUROXISE is available on iOS and Android. Core exercises run fully offline — you can train anywhere without an internet connection.' },
        { q: 'Do I need an internet connection?',      a: 'No. All key exercises work offline. Internet is only needed for syncing progress across devices and downloading content updates.' },
        { q: 'Who is NEUROXISE designed for?',         a: 'Everyone — people in speech rehabilitation, students, professionals, older adults, and anyone who wants to maintain or sharpen their cognitive health.' },
        { q: 'How long should I train each day?',      a: 'Just 10–15 minutes per day is enough to see meaningful results. Smart reminders help you build a lasting habit at the right time for you.' },
        { q: 'Is my data private and safe?',           a: 'Absolutely. Data is stored on your device. The Starter plan requires no account. We never sell or share your personal data with third parties.' },
      ],
    },

    pricing: {
      badge:    'Pricing',
      title1:   'Every day is a step forward.',
      title2:   '',
      subtitle: 'Restore movement, speech, cognitive functions, and confidence with NEUROXISE.',
      popular:  'Popular',
      plans: [
        {
          name:  'Standard',
          price: '$15',
          per:   'forever',
          desc:  'Basic course of exercises for independent home recovery.',
          cta:   '14-day trial period',
          ctaStyle: 'outline',
          features: [
            'Access to basic fine motor and speech modules (Aphasia)',
            'Initial assessment of motor and speech functions',
            'Local storage of training results on the device',
            'Daily monitoring of session regularity',
            'Initial screening to determine aphasia type and deficits',
          ],
        },
        {
          name:  'Premium',
          price: '$30',
          per:   '/ month',
          desc:  'Comprehensive individual rehabilitation program for the patient and support for loved ones.',
          cta:   '14-day trial period',
          ctaStyle: 'primary',
          popular: true,
          features: [
            'Full access to all 4 platform modules (including cognitive)',
            'Access to the library of gross motor video lessons for loved ones',
            'Detailed automatic diagnosis of speech and motor deficits',
            'Dynamic adaptation of task difficulty to the patient\'s condition',
            'Export of structured reports to demonstrate to the attending physician',
            'Priority technical support',
            'Detailed expert diagnosis of speech disorders with aphasia form determination',
          ],
        },
        {
          name:  'ENTERPRISE',
          price: 'On request',
          per:   '',
          desc:  'Integration of the platform into the practice of medical centers and specialized professionals.',
          cta:   'Contact sales',
          ctaStyle: 'outline',
          features: [
            'All features of the Premium plan',
            'Doctor\'s dashboard for simultaneous management and monitoring of multiple patients',
            'Ability to manually adjust session protocols by a rehabilitologist',
            'Data export for integration with internal electronic medical records',
            'Personal implementation manager and technical support',
            'Training medical staff to work with the platform',
          ],
        },
      ],
    },

    footer: {
      tagline:   'Science-backed cognitive training for everyone. Build better focus, memory and speech every day.',
      badge:     'Cognitive Training & Therapy',
      copyright: '© 2025 NEUROXISE. All rights reserved.',
      sections: {
        Product:   'Product',
        Company:   'Company',
        Support:   'Support',
        Community: 'Community',
      },
      links: {
        Product:   ['Features', 'Exercises', 'Progress Tracking', 'Pricing'],
        Company:   ['About', 'Blog', 'Careers', 'Press'],
        Support:   ['Help Center', 'Contact Us', 'Privacy Policy', 'Terms of Service'],
        Community: ['Twitter / X', 'Instagram', 'LinkedIn', 'Discord'],
      },
      legal: ['Privacy', 'Terms', 'Cookies'],
    },
  },

  // ─────────────────────────────── UZBEK ───────────────────────────────
  uz: {
    nav: {
      features:   'Imkoniyatlar',
      howItWorks: 'Qanday ishlaydi',
      exercises:  'Mashqlar',
      stats:      'Statistika',
      pricing:    'Narxlar',
      getApp:     'Yuklab olish',
    },
    hero: {
      badge:      'Neyroilmga asoslangan mashqlar',
      title1:     'Harakat va nutq ustidan',
      title2:     'nazoratni qaytaring.',
      desc:       'Insult, miya jarohatlari va neyroxirurgik aralashuvlardan so\'ng bemorlarni samarali tiklash uchun innovatsion sun\'iy intellekt platformasi. Qurilmangizda shaxsiylashtirilgan klinik reabilitatsiya protokollari.',
      cta:        'Bepul boshlash',
      secondary:  'Qanday ishlaydi',
      social:     'Nevrologiya va reabilitatsiya sohasidagi yetakchi mutaxassislar tomonidan tavsiya etilgan',
      greeting:   'Xayrli tong',
      hello:      'Salom, Foydalanuvchi! 👋',
      goal:       'Maqsad: Xotira',
      dayStreak:  'Kunlik seria',
      thisWeek:   'Bu hafta',
      accuracy:   'Aniqlik',
      todaysPlan: "Bugungi reja",
      seeAll:     'Barchasi',
      done:       'BAJARILDI',
      streakBadge:  '7 kunlik seria!',
      keepItUp:     'Davom eting!',
      accuracyBadge:'94% Aniqlik',
      weekGrowth:   '+12% bu hafta',
      wordRecall:    'So\'z eslab qolish',
      soundPatterns: 'Tovush naqshlari',
      focusGrid:     'Diqqat panjarasi',
      memory:        'Xotira',
      speech:        'Nutq',
      attention:     'Diqqat',
      minLabel:      'daq',
    },
    features: {
      badge:    'Nima uchun NEUROXISE?',
      title1:   'Samarali mashq uchun',
      title2:   'kerakli hamma narsa',
      subtitle: "Kognitiv fan tadqiqotlari asosida qurilgan. NEUROXISE miya mashqini samarali, o'lchanadigan va qiziqarli qiladi.",
      items: [
        { title: 'Shaxsiy reja',        desc: "Sun'iy intellekt asosidagi rejalar sizning kognitiv maqsadlaringiz, darajangiz va vaqtingizga moslashtirilgan." },
        { title: 'Taraqqiyotni kuzatish',desc: "Vizual analitika barcha kategoriyalar bo'yicha aniqlik, serialar va haftalik o'sishni ko'rsatadi." },
        { title: 'Gamifikatsiya',        desc: "O'yin asosidagi mashqlar yuqori motivatsiyani saqlab, haqiqiy terapevtik foyda keltiradi." },
        { title: 'Ko\'p tillilik',       desc: "O'zbek, rus va ingliz tillarini to'liq qo'llab-quvvatlash — keng auditoriya uchun qulay." },
        { title: 'Maxfiylik va oflayn',  desc: "Ma'lumotlar qurilmangizda saqlanadi. Asosiy mashqlar hisob yaratmasdan oflayn ishlaydi." },
        { title: 'Kunlik serialar',      desc: "Seriyani kuzatish va aqlli eslatmalar yordamida uzoq muddatli odatlar shakllantiring." },
      ],
    },
    howItWorks: {
      badge:    'Oddiy jarayon',
      title:    'Qanday ishlaydi',
      subtitle: "Bir necha daqiqada boshlang va birinchi haftada o'lchanadigan natijalarni ko'ring.",
      cta:      'Yo\'lni boshlash',
      steps: [
        { title: 'Profilingizni sozlang',    desc: "Maqsadlaringizni ayting — nutq terapiyasi, xotirani yaxshilash yoki kunlik kognitiv parvarish. Biz shaxsiy reja tuzib beramiz." },
        { title: 'Kunlik mashqlarni bajaring',desc: "Nutq, Til, Xotira, Diqqat va Kundalik ko'nikmalar bo'yicha qisqa va qiziqarli mashqlardan o'ting." },
        { title: 'Taraqqiyotingizni kuzating',desc: "Aniqlik, seria kunlari va haftalik sessiyalaringiz o'sishini kuzating. Analitika qayerda o'sayotganingizni ko'rsatadi." },
      ],
    },
    exercises: {
      badge:    'Mashqlar kutubxonasi',
      title1:   '5 kategoriya,',
      title2:   'cheksiz o\'sish',
      subtitle: "Har bir kategoriya kognitiv olimlar tomonidan miya funksiyalarini maqsadli rivojlantirish uchun ishlab chiqilgan.",
      tryBtn:   'Sinab ko\'rish',
      diff: { Easy: 'Oson', Medium: "O'rta", Hard: 'Qiyin' },
      categories: [
        {
          key: 'Xotira', icon: '🧠', color: '#3D52F5', bg: '#EEF0FF',
          desc: "So'z o'yinlari, naqshlarni tanish va fazoviy mashqlar orqali eslab qolish, saqlash va ishchi xotirani rivojlantiring.",
          exercises: [
            { name: "So'z eslab qolish",  time: '5 daq', diff: 'Medium' },
            { name: 'Raqamlar ketma-ket', time: '4 daq', diff: 'Hard'   },
            { name: 'Juftlik topish',     time: '6 daq', diff: 'Easy'   },
            { name: "Hikoyani qayta aytish",time: '8 daq',diff: 'Medium' },
          ],
        },
        {
          key: 'Nutq', icon: '🎤', color: '#9B59F5', bg: '#F3EEFF',
          desc: "Tuzilgan takrorlash va ovozli mashqlar orqali ravonlik, artikulyatsiya va nutq aniqligini oshiring.",
          exercises: [
            { name: 'Tez aytishlar',     time: '3 daq', diff: 'Medium' },
            { name: 'Gapni takrorlash',  time: '5 daq', diff: 'Easy'   },
            { name: 'Tovush naqshlari',  time: '4 daq', diff: 'Hard'   },
            { name: "So'z talaffuzi",    time: '6 daq', diff: 'Medium' },
          ],
        },
        {
          key: 'Diqqat', icon: '⚡', color: '#F5A623', bg: '#FEF4E2',
          desc: "Chalg'ituvchi omillarni filtrlash va vazifaga uzoqroq e'tibor qaratish uchun barqaror va tanlab e'tibor qilishni rivojlantiring.",
          exercises: [
            { name: 'Diqqat panjarasi',  time: '4 daq', diff: 'Hard'   },
            { name: 'Rang almashish',    time: '3 daq', diff: 'Medium' },
            { name: 'Farqni top',        time: '5 daq', diff: 'Easy'   },
            { name: 'Dual N-Back',       time: '7 daq', diff: 'Hard'   },
          ],
        },
        {
          key: 'Til', icon: '📖', color: '#34C48C', bg: '#E8FAF3',
          desc: "O'qish va so'z qurish vazifalari orqali lug'at, tushunish va grammatika ko'nikmalarini kengaytiring.",
          exercises: [
            { name: "So'z quruvchi",     time: '5 daq',  diff: 'Medium' },
            { name: "So'zlar tartibi",   time: '4 daq',  diff: 'Easy'   },
            { name: 'Sinonimlar',        time: '3 daq',  diff: 'Easy'   },
            { name: 'Matn tushunish',    time: '10 daq', diff: 'Medium' },
          ],
        },
        {
          key: "Kundalik ko'nikmalar", icon: '🌟', color: '#F55454', bg: '#FEF0F0',
          desc: "Kundalik faoliyatda to'g'ridan-to'g'ri samaradorlikni oshiruvchi haqiqiy hayotiy funksional vazifalar.",
          exercises: [
            { name: "Vaqtni boshqarish", time: '6 daq', diff: 'Medium' },
            { name: 'Qaror qabul qilish',time: '5 daq',  diff: 'Easy'   },
            { name: 'Muammoni hal qilish',time: '8 daq', diff: 'Hard'   },
            { name: 'Ijtimoiy vaziyatlar',time: '7 daq', diff: 'Medium' },
          ],
        },
      ],
    },
    stats: {
      items: [
        { label: 'Faol foydalanuvchilar' },
        { label: 'Mavjud mashqlar'       },
        { label: "O'rtacha aniqlik"      },
        { label: 'App Store reytingi'    },
      ],
      testimonialsTitle:    'Foydalanuvchilar nima deydi',
      testimonialsSubtitle: "Har kuni o'zini rivojlantirayotgan odamlarning haqiqiy hikoyalari",
      testimonials: [
        { name: 'Sara M.',  role: 'Nutq terapiyasi bemorasi', text: "NEUROXISE tuzalishimda o'zgaruvchan nuqta bo'ldi. Nutq mashqlari juda mos tezlikda va har kuni taraqqiyotimni ko'raman." },
        { name: 'Davud K.', role: 'Talaba, 22 yosh',          text: "Imtihondagi e'tiborim 3 haftada sezilarli darajada yaxshilandi. Diqqat mashqlari eng yaxshi ma'noda qiyin." },
        { name: 'Lena P.',  role: 'Korporativ mutaxassis',    text: "Har kuni ertalab aqliy isitish sifatida ishlataman. Seria tizimi mas'uliyatli tutadi va o'yinlashtirish jarayonni qiziqarli qiladi." },
      ],
    },
    download: {
      badge:  'Hoziroq mavjud',
      title:  'Bugun miyangizni mashq qilishni boshlang',
      desc:   "NEUROXISE-ni bepul yuklab oling. Obuna kerak emas — asosiy mashqlarga darhol kiring va istalgan vaqt yangilang.",
      comingSoon: 'Tez orada',
      appStore:    'Yuklab olish',
      appStoreSub: 'App Store',
      playStore:   "Olish",
      playStoreSub:'Google Play',
      features: [
        { icon: '🆓', label: 'Bepul boshlash',    sub: 'Karta kerak emas'         },
        { icon: '📱', label: 'iOS va Android',    sub: 'Kross-platforma qo\'llab'  },
        { icon: '🔒', label: 'Maxfiylik asosiy',  sub: 'Hisob kerak emas'         },
        { icon: '🌐', label: '3 til',             sub: 'UZ · RU · EN'             },
      ],
    },
    faq: {
      badge:  'FAQ',
      title1: "Ko'p so'raladigan",
      title2: 'savollar',
      items: [
        { q: 'NEUROXISE bepulmi?',                         a: "Ha, Starter rejasi to'liq bepul va kredit karta talab qilmaydi. 5 ta mashq moduli va asosiy analitika mavjud. Pro reja ($19/oy) barcha imkoniyatlarni cheksiz ochadi." },
        { q: 'Qaysi qurilmalarda ishlaydi?',               a: "NEUROXISE iOS va Android'da mavjud. Asosiy mashqlar to'liq oflayn ishlaydi — istalgan joyda internet siz mashq qilishingiz mumkin." },
        { q: 'Doimiy internet kerakmi?',                   a: "Yo'q. Barcha asosiy mashqlar oflayn ishlaydi. Internet faqat qurilmalar o'rtasida taraqqiyotni sinxronlash va yangilanishlarni yuklab olish uchun kerak." },
        { q: 'NEUROXISE kim uchun mo\'ljallangan?',        a: "Hamma uchun — nutq reabilitatsiyasidagi odamlar, talabalar, mutaxassislar, keksalar va kognitiv salomatligini saqlash yoki yaxshilamoqchi bo'lganlar." },
        { q: 'Har kuni qancha vaqt mashq qilish kerak?',  a: "Sezilarli natijalarga erishish uchun kuniga 10–15 daqiqa yetarli. Aqlli eslatmalar qulay vaqtda barqaror odatni shakllantirishga yordam beradi." },
        { q: "Ma'lumotlarim xavfsizmi?",                   a: "Ha. Ma'lumotlar qurilmangizda saqlanadi. Starter rejasi uchun hisob kerak emas. Biz shaxsiy ma'lumotlaringizni hech qachon uchinchi shaxslarga sotmaymiz yoki bermaymiz." },
      ],
    },

    pricing: {
      badge:    'Tariflar',
      title1:   'Har bir kun — oldinga qadam.',
      title2:   '',
      subtitle: 'NEUROXISE bilan harakat, nutq, kognitiv funktsiyalar va ishonchni tiklang.',
      popular:  'Ommabop',
      plans: [
        {
          name:  'Standart',
          price: '$15',
          per:   'umrbod',
          desc:  'Mustaqil uy reabilitatsiyasi uchun asosiy mashqlar kursi.',
          cta:   '14 kunlik sinov muddati',
          ctaStyle: 'outline',
          features: [
            'Nozik motorika va nutq (Afaziya) asosiy modullariga kirish',
            'Dvigatel va nutq funktsiyalarini dastlabki baholash',
            'Mashg\'ulot natijalarini qurilmada lokal saqlash',
            'Mashg\'ulotlar muntazamligini kundalik nazorat qilish',
            'Afaziya turi va nuqsonlarini aniqlash uchun dastlabki skrining',
          ],
        },
        {
          name:  'Premium',
          price: '$30',
          per:   '/ oy',
          desc:  'Bemor uchun kompleks individual reabilitatsiya dasturi va yaqinlarini qo\'llab-quvvatlash.',
          cta:   '14 kunlik sinov muddati',
          ctaStyle: 'primary',
          popular: true,
          features: [
            'Platformaning barcha 4 ta moduliga to\'liq kirish (shu jumladan kognitiv)',
            'Yaqinlar uchun yirik motorika bo\'yicha video darslar kutubxonasiga kirish',
            'Nutq va motor nuqsonlarining batafsil avtomatik diagnostikasi',
            'Vazifa murakkabligini bemorning holatiga dinamik moslashtirish',
            'Davolovchi shifokorga ko\'rsatish uchun tuzilgan hisobotlarni eksport qilish',
            'Ustuvor texnik yordam',
            'Afaziya shaklini aniqlash bilan nutq buzilishlarining batafsil ekspert diagnostikasi',
          ],
        },
        {
          name:  'ENTERPRISE',
          price: 'So\'rov bo\'yicha',
          per:   '',
          desc:  'Platformani tibbiyot markazlari amaliyotiga va mutaxassislar faoliyatiga integratsiya qilish.',
          cta:   'Savdo bo\'limi bilan bog\'lanish',
          ctaStyle: 'outline',
          features: [
            'Premium tarifining barcha imkoniyatlari',
            'Bir vaqtning o\'zida bir nechta bemorlarni olib borish va monitoring qilish uchun shifokor paneli',
            'Reabilitolog tomonidan mashg\'ulot protokollarini qo\'lda o\'zgartirish imkoniyati',
            'Ichki tibbiy kartalar bilan integratsiya qilish uchun ma\'lumotlarni eksport qilish',
            'Shaxsiy joriy etish menejeri va texnik yordam',
            'Tibbiyot xodimlarini platforma bilan ishlashga o\'rgatish',
          ],
        },
      ],
    },

    footer: {
      tagline:   "Hamma uchun fan asosidagi kognitiv mashqlar. Har kuni e'tibor, xotira va nutqni yaxshilang.",
      badge:     'Kognitiv mashqlar va terapiya',
      copyright: '© 2025 NEUROXISE. Barcha huquqlar himoyalangan.',
      sections: {
        Product:   'Mahsulot',
        Company:   'Kompaniya',
        Support:   'Qo\'llab-quvvatlash',
        Community: 'Jamiyat',
      },
      links: {
        Product:   ['Imkoniyatlar', 'Mashqlar', 'Kuzatish', 'Narxlar'],
        Company:   ['Biz haqimizda', 'Blog', 'Karyera', 'Matbuot'],
        Support:   ['Yordam markazi', 'Aloqa', 'Maxfiylik', 'Shartlar'],
        Community: ['Twitter / X', 'Instagram', 'LinkedIn', 'Discord'],
      },
      legal: ['Maxfiylik', 'Shartlar', 'Cookies'],
    },
  },
}

export default translations
