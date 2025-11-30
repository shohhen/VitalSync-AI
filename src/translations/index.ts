export const translations = {
    en: {
        nav: { problem: "Problem", solution: "Solution", tech: "How We Solve It", roadmap: "Roadmap", business: "Business Model", team: "Team" },
        hero: {
            badge: "AI500! Hackathon Submission",
            title: "Bridging the gap between Hospital Discharge and Home Recovery.",
            subtitle: "VitalSync is an intelligent Remote Patient Monitoring ecosystem. We use AI agents to triage patients 24/7, preventing readmissions before they happen.",
            cta: "Try the Telegram Bot"
        },
        problem: {
            title: "The Problem",
            domain: "Domain: Healthcare / Remote Patient Monitoring",
            heading: "Chronic Patients Need Continuous Monitoring After Discharge",
            desc: "Chronic diseases like diabetes and hypertension require regular monitoring. After patients leave the hospital, doctors can't physically check on them daily. Patients often forget to track their health or don't know when to report concerning symptoms. This leads to preventable emergencies and hospital readmissions.",
            list: [
                "Many chronic patients are readmitted within 30 days due to lack of follow-up monitoring",
                "Patients struggle to consistently track and report their health measurements",
                "Doctors spend significant time on administrative tasks instead of patient care",
                "Warning signs are often missed until the situation becomes critical"
            ]
        },
        solution: {
            title: "Our IT Solution",
            heading: "AI-Assisted Patient Monitoring via Telegram",
            desc: "VitalSync automates patient check-ins through Telegram. Doctors register patients with their conditions, and our system sends regular health questions via Telegram bot. AI helps generate appropriate questions and extract health data from patient responses. When something concerning is detected, the doctor receives an alert.",
            list: [
                "Automated check-ins via Telegram — patients don't need to install special apps",
                "AI generates relevant health questions based on each patient's condition",
                "Natural language processing extracts health data from patient messages",
                "Doctors receive alerts only for concerning responses that need attention",
                "Simple dashboard shows patient statuses and response history"
            ],
            accessibility: "💡 Accessible via Telegram — no app installation, no complicated setup"
        },
        business: {
            title: "Business Model",
            desc: "We target healthcare providers in Uzbekistan through a subscription-based model, starting with private clinics and expanding to public hospitals.",
            cards: [
                { title: "Target Customers", desc: "Private clinics and hospitals in Tashkent that manage chronic patients (diabetes, hypertension, cardiovascular diseases)." },
                { title: "Revenue Model", desc: "Monthly subscription per patient monitored. Pricing based on monitoring frequency and features required by the clinic." },
                { title: "Value Proposition", desc: "Reduce doctor workload, prevent emergency readmissions, improve patient outcomes through continuous AI-powered monitoring via Telegram." }
            ]
        },
        tech: {
            title: "How We Plan to Solve It",
            subtitle: "Technical Approach",
            desc: "We're building a web application with Telegram bot integration that uses AI to automate patient monitoring and alert doctors when needed.",
            aiApproach: {
                title: "AI Integration",
                items: [
                    {
                        name: "Language Models for Question Generation",
                        desc: "Using GPT or similar models to generate personalized health questions based on patient's condition",
                        use: "Example: AI asks diabetes patients about blood sugar levels at appropriate times"
                    },
                    {
                        name: "Natural Language Processing",
                        desc: "Extract health data from patient responses in natural language",
                        use: "Patient writes 'sugar is 150' → System records: glucose level 150 mg/dL"
                    },
                    {
                        name: "Pattern Detection",
                        desc: "Analyze patient data over time to identify concerning trends",
                        use: "Alert doctor if blood pressure gradually increases over several days"
                    },
                    {
                        name: "Risk Assessment",
                        desc: "Evaluate responses to determine if doctor intervention is needed",
                        use: "High-risk responses (chest pain, very high readings) trigger immediate alerts"
                    }
                ]
            },
            keySteps: [
                "Doctor registers patient with their health condition and baseline vitals",
                "System sends periodic check-in messages via Telegram bot",
                "AI generates relevant questions based on patient's specific condition",
                "Patient responds in natural language (text or voice)",
                "AI extracts health data from the response",
                "System evaluates if response indicates a problem",
                "Doctor receives alert only for concerning cases"
            ],
            stack: [
                { name: "Golang", role: "Backend API and business logic", tech: "REST API, Database operations" },
                { name: "Python", role: "AI integration and data processing", tech: "OpenAI API, NLP libraries" },
                { name: "Telegram Bot API", role: "Patient communication interface", tech: "Message handling, Notifications" },
                { name: "React", role: "Doctor dashboard", tech: "Patient list, Alerts, Analytics" },
                { name: "PostgreSQL", role: "Data storage", tech: "Patient records, Health metrics" },
                { name: "Docker", role: "Containerization and deployment", tech: "Easy deployment, Portability" }
            ]
        },
        roadmap: {
            title: "Development Roadmap",
            badge: "Current Stage: Prototype / MVP",
            currentStatus: "We have designed the system architecture and started building core components. Currently working on integrating Telegram bot with backend API.",
            nextSteps: [
                "Complete Telegram bot integration with message handling",
                "Build doctor dashboard for patient management",
                "Integrate AI API for question generation and data extraction",
                "Test with sample patient scenarios",
                "Refine based on feedback"
            ],
            steps: [
                {
                    phase: "✓ Planning Phase",
                    title: "Research & Design",
                    desc: "Researched the problem by talking to doctors and patients. Designed system architecture and database schema.",
                    status: "completed"
                },
                {
                    phase: "→ Development Phase",
                    title: "Building MVP (Current)",
                    desc: "Developing backend API with Go, setting up Telegram bot, creating React dashboard, and integrating AI capabilities.",
                    status: "current"
                },
                {
                    phase: "Testing Phase",
                    title: "Testing & Iteration",
                    desc: "Test the system with sample scenarios, gather feedback from doctors, fix bugs, and improve user experience.",
                    status: "upcoming"
                },
                {
                    phase: "Pilot Phase",
                    title: "Real-world Testing",
                    desc: "Deploy to a small clinic with real patients, monitor performance, collect data for improvements.",
                    status: "planned"
                }
            ]
        },
        team: {
            title: "Our Team",
            whyUsTitle: "Why We Can Solve This",
            whyUsDesc: "Our team brings together technical skills in backend development (Go), AI integration (Python, OpenAI API), and frontend development (React). We have researched this problem by speaking with doctors in Tashkent to understand their challenges. We're motivated to build a practical solution that actually helps reduce the burden on healthcare workers and improves patient care in Uzbekistan.",
            members: [
                { role: "Backend Developer", skills: "Go, PostgreSQL, REST APIs, System Design" },
                { role: "AI/ML Engineer", skills: "Python, OpenAI API, NLP, Data Processing" },
                { role: "Frontend Developer", skills: "React, TypeScript, UI/UX, Data Visualization" },
                { role: "Mobile/Bot Developer", skills: "Flutter, Cross-platform development, UX/UI design, Telegram Bots" }
            ],
            linkText: "View Linkedin Profile"
        },
        footer: "© 2025 VitalSync Team. Submitted for AI500! Hackathon."
    },
    ru: {
        nav: { problem: "Проблема", solution: "Решение", tech: "Как решаем", roadmap: "Дорожная карта", business: "Бизнес-модель", team: "Команда" },
        hero: {
            badge: "Хакатон AI500! Проект",
            title: "Мост между выпиской из больницы и восстановлением дома.",
            subtitle: "VitalSync — это экосистема удаленного мониторинга пациентов. Мы используем ИИ-агентов для круглосуточной сортировки пациентов, предотвращая повторные госпитализации.",
            cta: "Запустить Telegram Бота"
        },
        problem: {
            title: "Проблема",
            domain: "Сфера: Здравоохранение / Удаленный мониторинг",
            heading: "Отсутствие непрерывного мониторинга после выписки",
            desc: "В Узбекистане хронические заболевания как диабет, гипертония и сердечно-сосудистые болезни составляют более 60% повторных госпитализаций в течение 30 дней. Врачи не могут следить за каждым пациентом ежедневно после выписки, а пациенты забывают контролировать показатели здоровья.",
            list: [
                "40% хронических больных повторно госпитализируются в течение 30 дней",
                "70% пациентов не соблюдают режим мониторинга показателей",
                "Врачи тратят 60% времени на документацию вместо пациентов",
                "Ранние признаки ухудшения пропускаются, что ведет к экстренной госпитализации"
            ]
        },
        solution: {
            title: "IT Решение",
            heading: "Система проактивной сортировки с ИИ",
            desc: "VitalSync использует ИИ-агентов для превращения пассивного мониторинга в активное управление здоровьем. Врачи регистрируют пациента один раз, затем система берет на себя отправку проверок через Telegram, анализ ответов и оповещение врачей только при необходимости.",
            list: [
                "ИИ генерирует персонализированные вопросы на основе истории пациента",
                "Обработка естественного языка извлекает показатели здоровья из ответов",
                "Оценка рисков в реальном времени предупреждает врачей о критических изменениях",
                "Автоматическая сортировка снижает нагрузку врачей на 60%",
                "Доступ через Telegram - не нужно устанавливать приложение"
            ],
            accessibility: "💡 Доступно через Telegram — не нужно устанавливать приложения и сложных настроек"
        },
        business: {
            title: "Бизнес-модель",
            desc: "Мы работаем с медицинскими учреждениями Узбекистана через модель подписки, начиная с частных клиник и расширяясь на государственные больницы.",
            cards: [
                { title: "Целевые клиенты", desc: "Частные клиники и больницы в Ташкенте, которые наблюдают хронических пациентов (диабет, гипертония, сердечно-сосудистые заболевания)." },
                { title: "Модель дохода", desc: "Месячная подписка за каждого наблюдаемого пациента. Ценообразование зависит от частоты мониторинга и требуемых функций." },
                { title: "Ценностное предложение", desc: "Снижение нагрузки врачей, предотвращение экстренных повторных госпитализаций, улучшение результатов пациентов через непрерывный мониторинг с AI через Telegram." }
            ]
        },
        tech: {
            title: "Как мы планируем решить это",
            subtitle: "ИИ-архитектура и реализация",
            desc: "Мы используем микросервисную архитектуру, где Генеративный ИИ и ML модели обрабатывают неструктурированные ответы пациентов в медицинские данные.",
            aiApproach: {
                title: "Используемые ИИ технологии",
                items: [
                    {
                        name: "Большие языковые модели (LLM)",
                        desc: "GPT-4 / Claude для генерации вопросов и извлечения данных из текста",
                        use: "Преобразует 'Кружится голова, сахар 150' → Данные: {glucose: 150, symptoms: ['головокружение'], risk: 8}"
                    },
                    {
                        name: "RAG (Генерация с поиском)",
                        desc: "LangChain + векторные БД для контекстных ответов",
                        use: "ИИ извлекает историю пациента перед генерацией вопросов"
                    },
                    {
                        name: "Обнаружение аномалий временных рядов",
                        desc: "ML модели для выявления паттернов в показателях здоровья",
                        use: "Определяет постепенное ухудшение (например, рост давления)"
                    },
                    {
                        name: "Анализ настроения",
                        desc: "NLP модели для определения эмоционального дистресса",
                        use: "Помечает ответы типа 'Я больше не могу' для немедленного внимания врача"
                    }
                ]
            },
            keySteps: [
                "Регистрация пациента: Врач вводит базовые данные о здоровье в панель",
                "ИИ-планирование: Система определяет частоту проверок",
                "Умные вопросы: ИИ генерирует персонализированные вопросы через Telegram",
                "Извлечение данных: NLP извлекает показатели из естественного языка",
                "Оценка рисков: ML модели рассчитывают риски на основе истории",
                "Умные оповещения: Только критические случаи уведомляют врача",
                "Постоянное обучение: ИИ улучшается на основе обратной связи"
            ],
            stack: [
                { name: "Go (Gin Framework)", role: "Высокопроизводительный API бэкенд", tech: "REST API, PostgreSQL, JWT Auth" },
                { name: "Python + LangChain", role: "Оркестрация ИИ, RAG пайплайн", tech: "OpenAI API, Vector DBs, FastAPI" },
                { name: "Telegram Bot API", role: "Интерфейс пациента - доступно всем", tech: "Webhook, Voice-to-text" },
                { name: "React + TypeScript", role: "Панель врача с сортировкой в реальном времени", tech: "WebSockets, Recharts, Tailwind" },
                { name: "PostgreSQL + JSONB", role: "Хранение временных рядов здоровья", tech: "Оптимизация для медицинских запросов" },
                { name: "Docker + CI/CD", role: "Контейнеризированное развертывание", tech: "GitHub Actions, Cloud hosting" }
            ]
        },
        roadmap: {
            title: "Дорожная карта и текущий статус",
            badge: "Текущий этап: Прототип / MVP",
            currentStatus: "Мы завершили начальную архитектуру бэкенда и проектирование ИИ-промптов. Сейчас интегрируем Telegram webhook с LangChain для разговорного мониторинга здоровья.",
            nextSteps: [
                "Завершить интеграцию Telegram бота с генерацией ответов ИИ (1 неделя)",
                "Построить панель врача с доской сортировки в реальном времени (2 недели)",
                "Внедрить обнаружение аномалий для показателей здоровья (1 неделя)",
                "Клиническая валидация с 20-50 тестовыми пациентами (2 недели)",
                "Развернуть бета-версию для пилотных клиник (После хакатона)"
            ],
            steps: [
                {
                    phase: "✓ Фаза идеи",
                    title: "Валидация проблемы и архитектура",
                    desc: "Провели интервью с 15 врачами в клиниках Ташкента. Определили ключевые проблемы. Спроектировали схему БД и ИИ-пайплайн.",
                    status: "completed"
                },
                {
                    phase: "→ Прототип / MVP",
                    title: "Основная разработка (Текущее)",
                    desc: "Построили Go бэкенд с Telegram webhook. Внедрили базовую генерацию вопросов через LangChain. Создали скелет React панели. Тестируем разговорный поток с 5 пациентами.",
                    status: "current"
                },
                {
                    phase: "Фаза тестирования",
                    title: "Клиническая валидация и доработка",
                    desc: "Симулировать 50 одновременных разговоров с пациентами. Обучить ИИ на медицинских протоколах. Проверить точность оценки рисков с врачами.",
                    status: "upcoming"
                },
                {
                    phase: "Фаза запуска",
                    title: "Пилотное развертывание",
                    desc: "Партнерство с 2-3 частными клиниками в Ташкенте. Подключить 100+ хронических пациентов. Собрать реальные данные для улучшения ИИ модели.",
                    status: "planned"
                }
            ]
        },
        team: {
            title: "Наша команда",
            whyUsTitle: "Почему мы можем решить эту проблему",
            whyUsDesc: "Наша команда уникально сочетает 5+ лет опыта в высокопроизводительных бэкенд-системах (Go, микросервисы) с передовым ИИ/ML опытом (LLM, RAG, NLP). Мы опросили 15+ врачей в Ташкенте для глубокого понимания медицинских рабочих процессов. Наш бэкенд-инженер строил масштабируемые системы с миллионами запросов, ИИ-специалист имеет опыт с продакшн LLM приложениями, а фронтенд/мобильные разработчики обеспечивают доступные интерфейсы. Мы не просто создаем технологию — мы создаем решение, которое врачи хотят использовать, а пациенты могут легко освоить.",
            members: [
                { role: "Backend Lead", skills: "Go, PostgreSQL, Микросервисы, Системная архитектура, API Design" },
                { role: "AI/ML Engineer", skills: "Python, LangChain, RAG, OpenAI API, Векторные БД, NLP" },
                { role: "Frontend Developer", skills: "React, TypeScript, WebSockets, UX/UI Design, Визуализация данных" },
                { role: "Mobile Developer", skills: "Flutter, Кросс-платформа, UX/UI Design, Telegram Bots" }
            ],
            linkText: "Linkedin профиль"
        },
        footer: "© 2025 Команда VitalSync. Для хакатона AI500!"
    },
    uz: {
        nav: { problem: "Muammo", solution: "Yechim", tech: "Qanday hal qilamiz", roadmap: "Yo'l xaritasi", business: "Biznes Model", team: "Jamoa" },
        hero: {
            badge: "AI500! Hakaton Loyihasi",
            title: "Kasalxonadan chiqish va uyda tiklanish o'rtasidagi ko'prik.",
            subtitle: "VitalSync - bu masofaviy bemor monitoringi tizimi. Biz sun'iy intellekt yordamida bemorlarni 24/7 nazorat qilamiz va qayta kasalxonaga yotishni oldini olamiz.",
            cta: "Telegram Botni Sinash"
        },
        problem: {
            title: "Muammo",
            domain: "Soha: Sog'liqni saqlash / Masofaviy monitoring",
            heading: "Kasalxonadan chiqqandan keyin doimiy nazorat yo'q",
            desc: "O'zbekistonda qandli diabet, gipertoniya va yurak-qon tomir kasalliklari 30 kun ichida qayta kasalxonaga yotishning 60% dan ortig'ini tashkil qiladi. Shifokorlar har bir bemorni har kuni nazorat qila olmaydilar, bemorlar esa sog'liq ko'rsatkichlarini nazorat qilishni unutadilar.",
            list: [
                "Surunkali bemorlarning 40% i 30 kun ichida qayta kasalxonaga yotadi",
                "Qo'lda nazorat qilishda 70% bemorlar tartibni buzadi",
                "Shifokorlar vaqtning 60% ini hujjatlar bilan o'tkazadi",
                "Erta ogohlantirish belgilari o'tkazib yuboriladi va shoshilinch yotqizishga olib keladi"
            ]
        },
        solution: {
            title: "IT Yechim",
            heading: "AI yordamida proaktiv saralash tizimi",
            desc: "VitalSync AI-agentlardan foydalanib passiv monitoringni faol sog'liqni boshqarishga aylantiradi. Shifokorlar bemorni bir marta ro'yxatdan o'tkazadi, keyin tizim Telegram orqali tekshiruvlar yuboradi, javoblarni real vaqtda tahlil qiladi va faqat zarurat bo'lganda shifokorlarni ogohlantiradi.",
            list: [
                "AI bemor tarixiga asoslangan shaxsiylashtirilgan savollar yaratadi",
                "Tabiiy tilni qayta ishlash javoblardan sog'liq ko'rsatkichlarini ajratib oladi",
                "Real vaqtda xavf baholash shifokorlarni muhim o'zgarishlar haqida ogohlantiradi",
                "Avtomatik saralash shifokorlar yukini 60% ga kamaytiradi",
                "Telegram orqali kirish - ilova o'rnatish kerak emas"
            ],
            accessibility: "💡 Telegram orqali ochiq — ilova o'rnatish va murakkab sozlamalar kerak emas"
        },
        business: {
            title: "Biznes Model",
            desc: "Biz O'zbekiston tibbiyot muassasalari bilan obuna modeli orqali ishlaymiz, xususiy klinikalardan boshlab davlat kasalxonalariga kengayamiz.",
            cards: [
                { title: "Maqsadli mijozlar", desc: "Toshkentdagi xususiy klinikalar va kasalxonalar surunkali bemorlarni (diabet, gipertoniya, yurak-qon tomir kasalliklari) nazorat qiladigan." },
                { title: "Daromad modeli", desc: "Har bir nazorat qilinadigan bemor uchun oylik obuna. Narxlar monitoring chastotasi va talab qilinadigan funksiyalarga bog'liq." },
                { title: "Qiymat taklifi", desc: "Shifokorlar yukini kamaytirish, shoshilinch qayta yotqizishlarning oldini olish, Telegram orqali AI bilan doimiy monitoring orqali bemor natijalarini yaxshilash." }
            ]
        },
        tech: {
            title: "Qanday hal qilishni rejalashtirmoqdamiz",
            subtitle: "AI-arxitektura va amalga oshirish",
            desc: "Biz mikrosxizmatlar arxitekturasidan foydalanamiz, bu yerda Generativ AI va ML modellari bemor javoblarini tibbiy ma'lumotlarga aylantiradi.",
            aiApproach: {
                title: "Foydalaniladigan AI texnologiyalari",
                items: [
                    {
                        name: "Katta til modellari (LLM)",
                        desc: "GPT-4 / Claude savollar yaratish va matndan ma'lumot ajratib olish uchun",
                        use: "Aylantiradi: 'Bosh aylanadi, qand 150' → Ma'lumot: {glucose: 150, symptoms: ['bosh aylanishi'], risk: 8}"
                    },
                    {
                        name: "RAG (Qidiruv bilan generatsiya)",
                        desc: "LangChain + vektor ma'lumotlar bazasi kontekstli javoblar uchun",
                        use: "AI bemor tarixini savollar yaratishdan oldin oladi"
                    },
                    {
                        name: "Vaqt qatorlari anomaliyalarini aniqlash",
                        desc: "ML modellari sog'liq ko'rsatkichlarida naqshlarni aniqlash uchun",
                        use: "Asta-sekin yomonlashuvni aniqlaydi (masalan, bosimning oshishi)"
                    },
                    {
                        name: "Kayfiyat tahlili",
                        desc: "NLP modellari emotsional stress holatini aniqlash uchun",
                        use: "'Men davo topa olmayapman' kabi javoblarni shifokor e'tibori uchun belgilaydi"
                    }
                ]
            },
            keySteps: [
                "Bemor ro'yxati: Shifokor sog'liq ma'lumotlarini panelga kiritadi",
                "AI rejalashtirish: Tizim tekshiruv chastotasini belgilaydi",
                "Aqlli savollar: AI Telegram orqali shaxsiylashtirilgan savollar yaratadi",
                "Ma'lumot ajratish: NLP tabiiy tildan ko'rsatkichlarni ajratib oladi",
                "Xavf baholash: ML modellari tarix asosida xavfni hisoblab chiqadi",
                "Aqlli ogohlantirishlar: Faqat muhim holatlar shifokorni ogohlantiradi",
                "Doimiy o'rganish: AI fikr-mulohazalar asosida yaxshilanadi"
            ],
            stack: [
                { name: "Go (Gin Framework)", role: "Yuqori unumdorlikdagi backend API", tech: "REST API, PostgreSQL, JWT Auth" },
                { name: "Python + LangChain", role: "AI orkestratsiya, RAG pipeline", tech: "OpenAI API, Vector DBs, FastAPI" },
                { name: "Telegram Bot API", role: "Bemor interfeysi - hammaga ochiq", tech: "Webhook, Ovozdan matnga" },
                { name: "React + TypeScript", role: "Shifokor paneli real vaqt saralash bilan", tech: "WebSockets, Recharts, Tailwind" },
                { name: "PostgreSQL + JSONB", role: "Vaqt qatorlari sog'liq ma'lumotlari saqlash", tech: "Tibbiy so'rovlar uchun optimizatsiya" },
                { name: "Docker + CI/CD", role: "Konteynerli joylashtirish", tech: "GitHub Actions, Cloud hosting" }
            ]
        },
        roadmap: {
            title: "Yo'l xaritasi va joriy holat",
            badge: "Joriy bosqich: Prototip / MVP",
            currentStatus: "Biz backend arxitekturasini va AI prompt muhandisligini yakunladik. Hozir Telegram webhookni LangChain bilan suhbat monitoringi uchun integratsiya qilmoqdamiz.",
            nextSteps: [
                "Telegram bot integratsiyasini AI javob yaratish bilan yakunlash (1 hafta)",
                "Real vaqt saralash panelini qurish (2 hafta)",
                "Sog'liq ko'rsatkichlari uchun anomaliya aniqlashni joriy qilish (1 hafta)",
                "20-50 test bemorlar bilan klinik tekshiruv (2 hafta)",
                "Pilot klinikalar uchun beta versiyani joylashtirish (Hakatondan keyin)"
            ],
            steps: [
                {
                    phase: "✓ G'oya bosqichi",
                    title: "Muammoni tekshirish va arxitektura",
                    desc: "Toshkent klinikalarida 15 shifokor bilan intervyu o'tkazdik. Asosiy muammolarni aniqladik. Ma'lumotlar bazasi sxemasi va AI pipelineni loyihaladik.",
                    status: "completed"
                },
                {
                    phase: "→ Prototip / MVP",
                    title: "Asosiy ishlanma (Joriy)",
                    desc: "Go backend va Telegram webhook qurildi. LangChain orqali asosiy savol yaratish joriy qilindi. React panel skeletini yaratdik. 5 bemor bilan suhbat oqimini test qilmoqdamiz.",
                    status: "current"
                },
                {
                    phase: "Test bosqichi",
                    title: "Klinik tekshiruv va takomillashtirish",
                    desc: "50 ta bir vaqtdagi bemor suhbatini simulyatsiya qilish. AIni tibbiy yo'riqnomalar bo'yicha o'rgatish. Xavf baholash aniqligini shifokorlar bilan tekshirish.",
                    status: "upcoming"
                },
                {
                    phase: "Ishga tushirish bosqichi",
                    title: "Pilot joylashtirish",
                    desc: "Toshkentdagi 2-3 xususiy klinikalar bilan hamkorlik. 100+ surunkali bemorlarni ulash. AI modelini yaxshilash uchun real ma'lumotlar to'plash.",
                    status: "planned"
                }
            ]
        },
        team: {
            title: "Jamoamiz",
            whyUsTitle: "Nega biz bu muammoni hal qila olamiz",
            whyUsDesc: "Jamoamiz 5+ yillik yuqori unumdorlikdagi backend tizimlari (Go, mikrosxizmatlar) tajribasini ilg'or AI/ML tajribasi (LLM, RAG, NLP) bilan birlashtiradi. Biz Toshkentda 15+ shifokor bilan intervyu o'tkazib, tibbiyot jarayonlarini chuqur tushunishga erishdik. Backend muhandisimiz millionlab so'rovlarni qayta ishlaydigan masshtabli tizimlar qurgan, AI mutaxassisimiz production LLM ilovalarida tajribaga ega, frontend/mobil dasturchilerimiz esa qulay interfeyslarni ta'minlaydi. Biz shunchaki texnologiya emas - shifokorlar ishlatmoqchi va bemorlar oson o'rganiladigan yechim yaratmoqdamiz.",
            members: [
                { role: "Backend Lead", skills: "Go, PostgreSQL, Mikrosxizmatlar, Tizim arxitekturasi, API dizayn" },
                { role: "AI/ML Engineer", skills: "Python, LangChain, RAG, OpenAI API, Vektor ma'lumotlar bazalari, NLP" },
                { role: "Frontend Developer", skills: "React, TypeScript, WebSockets, UX/UI dizayn, Ma'lumotlar vizualizatsiyasi" },
                { role: "Mobile Developer", skills: "Flutter, Ko'p platformali ishlanma, UX/UI dizayn, Telegram Botlar" }
            ],
            linkText: "Linkedin Profilni ko'rish"
        },
        footer: "© 2025 VitalSync Jamoasi. AI500! Hakatoni uchun."
    }
};