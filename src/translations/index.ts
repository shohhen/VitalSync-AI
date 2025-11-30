export const translations = {
    en: {
        nav: { problem: "Problem", solution: "Solution", business: "Business Model", team: "Team" },
        hero: {
            badge: "AI500! Hackathon Submission",
            title: "Bridging the gap between Hospital Discharge and Home Recovery.",
            subtitle: "VitalSync is an intelligent Remote Patient Monitoring ecosystem. We use AI agents to triage patients 24/7, preventing readmissions before they happen.",
            cta: "Try the Telegram Bot"
        },
        problem: {
            title: "The Problem", domain: "Domain: Healthcare / RPM", heading: "Chronic Patients Lack Continuous Monitoring", desc: "Conditions like diabetes and hypertension need 24/7 attention. Yet, doctors cannot track every patient daily, and patients often forget to log data manually.",
            list: ["High hospital readmission rates", "Delayed detection of critical spikes", "Medical staff burnout"]
        },
        solution: {
            title: "The IT Solution", heading: "AI-Driven Proactive Triage", desc: "VitalSync transforms static follow-ups into dynamic conversations. Our AI agent actively checks in on patients via Telegram and triages data instantly.",
            list: ["24/7 Monitoring without staff overhead", "AI alerts for abnormal vital spikes", "Seamless Telegram & Dashboard sync"]
        },
        business: {
            title: "Business Model & Viability", desc: "We utilize a Hybrid B2B & B2G Strategy. While private clinics provide immediate traction, our goal is to modernize state infrastructure via the Ministry of Healthcare.",
            cards: [
                { title: "B2B: Private Clinics", desc: "Subscription model for private hospitals. Quick onboarding allows us to gather data and validate the AI model rapidly." },
                { title: "B2G: State Integration", desc: "Scale Strategy: Integration with state hospitals (Ministry of Health). We reduce the national burden of chronic disease readmissions." },
                { title: "Impact Metrics", desc: "By automating triage in understaffed state hospitals, we project a 40% reduction in unnecessary doctor visits for stable patients." }
            ]
        },
        tech: {
            title: "How We Solve It", desc: "We utilize a microservices architecture where Generative AI processes unstructured patient text into structured medical data.",
            stack: [
                { name: "Go (Gin/Fiber)", role: "High-Performance Backend" }, { name: "Python + LangChain", role: "AI & RAG Pipeline" },
                { name: "Telegram Bot API", role: "Accessible Interface" }, { name: "React + Recharts", role: "Doctor Triage Dashboard" }
            ]
        },
        roadmap: {
            title: "Roadmap & Status", badge: "Current Stage: Prototype / MVP",
            steps: [
                { phase: "Idea Phase", title: "Problem Definition", desc: "Identified readmission gaps and defined data schema." },
                { phase: "Prototype / MVP", title: "Core Development", desc: "Connected Telegram to Go Backend. AI generates basic questions." },
                { phase: "Testing", title: "Clinical Validation", desc: "Simulate 50 concurrent patient conversations." }
            ]
        },
        team: {
            title: "Our Team", whyUsTitle: "Why We Can Solve This", whyUsDesc: "Our team combines deep expertise in scalable backend systems (Go) with cutting-edge AI engineering. We are motivated by a shared history of building reliable tools for high-stakes environments.",
            members: [
                { role: "Backend Lead", skills: "Go, Postgres, System Architecture" }, { role: "AI Engineer", skills: "Python, RAG, LLMs, Vector DBs" }, { role: "Frontend Developer", skills: "React, TypeScript, UX/UI Design" },  { role: "Mobile Developer", skills: "Flutter, UX/UI Design" }
            ],
            linkText: "View LinkedIn / GitHub"
        },
        footer: "© 2025 VitalSync Team. Submitted for AI500! Hackathon."
    },
    ru: {
        nav: { problem: "Проблема", solution: "Решение", business: "Бизнес-модель", team: "Команда" },
        hero: {
            badge: "Хакатон AI500! Проект", title: "Мост между выпиской из больницы и восстановлением дома.", subtitle: "VitalSync — это экосистема удаленного мониторинга пациентов. Мы используем ИИ-агентов для круглосуточной сортировки пациентов, предотвращая повторные госпитализации.", cta: "Запустить Telegram Бота"
        },
        problem: {
            title: "Проблема", domain: "Сфера: Здравоохранение / RPM", heading: "Отсутствие непрерывного мониторинга", desc: "Диабет и гипертония требуют внимания 24/7. Врачи не могут следить за каждым пациентом ежедневно, а пациенты забывают записывать данные.",
            list: ["Высокий уровень повторных госпитализаций", "Позднее обнаружение критических состояний", "Выгорание медицинского персонала"]
        },
        solution: {
            title: "IT Решение", heading: "Проактивная сортировка с ИИ", desc: "VitalSync превращает статические наблюдения в динамичные диалоги. Наш ИИ-агент проверяет пациентов через Telegram и мгновенно анализирует данные.",
            list: ["Мониторинг 24/7 без нагрузки на персонал", "ИИ-оповещения об аномальных показателях", "Синхронизация Telegram и Дашборда"]
        },
        business: {
            title: "Бизнес-модель", desc: "Мы используем гибридную стратегию B2B и B2G. Частные клиники обеспечивают быстрый старт, а наша цель — модернизация госсектора через Минздрав.",
            cards: [
                { title: "B2B: Частные Клиники", desc: "Модель подписки для частных больниц. Быстрое внедрение позволяет нам собирать данные и проверять модель ИИ." },
                { title: "B2G: Интеграция с Госсектором", desc: "Стратегия масштабирования: Интеграция с государственными больницами (Минздрав). Снижение нагрузки на национальную систему." },
                { title: "Метрики Влияния", desc: "Автоматизируя сортировку в госучреждениях, мы прогнозируем снижение ненужных визитов к врачу на 40%." }
            ]
        },
        tech: {
            title: "Как мы это решаем", desc: "Мы используем микросервисную архитектуру, где Генеративный ИИ обрабатывает неструктурированный текст пациента в медицинские данные.",
            stack: [
                { name: "Go (Gin/Fiber)", role: "Высокопроизводительный бэкенд" }, { name: "Python + LangChain", role: "ИИ и RAG Пайплайн" }, { name: "Telegram Bot API", role: "Доступный интерфейс" }, { name: "React + Recharts", role: "Дашборд для врачей" }
            ]
        },
        roadmap: {
            title: "Дорожная карта", badge: "Текущий этап: Прототип / MVP",
            steps: [
                { phase: "Идея", title: "Определение проблемы", desc: "Выявлены пробелы в повторной госпитализации и определена схема данных." },
                { phase: "Прототип / MVP", title: "Разработка ядра", desc: "Telegram подключен к Go бэкенду. ИИ генерирует базовые вопросы." },
                { phase: "Тестирование", title: "Клиническая валидация", desc: "Симуляция 50 одновременных диалогов с пациентами." }
            ]
        },
        team: {
            title: "Наша команда", whyUsTitle: "Почему мы?", whyUsDesc: "Наша команда сочетает глубокие знания в масштабируемых бэкенд-системах (Go) и современной ИИ-инженерии. Мы мотивированы созданием надежных инструментов для медицины.",
            members: [
                { role: "Backend Lead", skills: "Go, Postgres, Системная архитектура" }, { role: "AI Engineer", skills: "Python, RAG, LLMs, Векторные БД" }, { role: "Frontend Developer", skills: "React, TypeScript, UX/UI Дизайн" }
            ],
            linkText: "Профиль LinkedIn / GitHub"
        },
        footer: "© 2025 Команда VitalSync. Для хакатона AI500!"
    },
    uz: {
        nav: { problem: "Muammo", solution: "Yechim", business: "Biznes Model", team: "Jamoa" },
        hero: {
            badge: "AI500! Hakaton Loyihasi", title: "Kasalxonadan chiqish va uyda tiklanish o'rtasidagi ko'prik.", subtitle: "VitalSync - bu masofaviy bemor monitoringi (RPM) tizimi. Biz sun'iy intellekt yordamida bemorlarni 24/7 nazorat qilamiz va qayta kasalxonaga yotishni oldini olamiz.", cta: "Telegram Botni Sinash"
        },
        problem: {
            title: "Muammo", domain: "Soha: Sog'liqni saqlash / RPM", heading: "Surunkali bemorlarda doimiy nazorat yo'q", desc: "Qandli diabet va gipertoniya kabi kasalliklar 24/7 e'tiborni talab qiladi. Ammo shifokorlar har bir bemorni har kuni kuzatib bora olmaydilar.",
            list: ["Kasalxonaga qayta yotish darajasi yuqori", "Kritik holatlarni kech aniqlash", "Tibbiyot xodimlarining yuklamasi"]
        },
        solution: {
            title: "IT Yechim", heading: "Sun'iy Intellekt yordamida saralash", desc: "VitalSync statik tekshiruvlarni dinamik suhbatlarga aylantiradi. Bizning AI agentimiz Telegram orqali bemorlarni tekshiradi va ma'lumotlarni tahlil qiladi.",
            list: ["Xodimlarsiz 24/7 monitoring", "Anomal o'zgarishlar haqida AI ogohlantirishlari", "Telegram va Dashboard integratsiyasi"]
        },
        business: {
            title: "Biznes Model", desc: "Biz gibrid B2B va B2G strategiyasidan foydalanamiz. Xususiy klinikalar tezkor start beradi, asosiy maqsadimiz esa Sog'liqni saqlash vazirligi bilan ishlash.",
            cards: [
                { title: "B2B: Xususiy Klinikalar", desc: "Xususiy shifoxonalar uchun obuna modeli. Tezkor joriy etish ma'lumotlarni yig'ish va AI modelini tekshirish imkonini beradi." },
                { title: "B2G: Davlat Integratsiyasi", desc: "Masshtablash: Davlat shifoxonalari (Sog'liqni saqlash vazirligi) bilan integratsiya. Surunkali kasalliklar yukini kamaytirish." },
                { title: "Samaradorlik", desc: "Davlat shifoxonalarida saralashni avtomatlashtirish orqali keraksiz shifokor qabullarini 40% ga kamaytirishni rejalashtirmoqdamiz." }
            ]
        },
        tech: {
            title: "Bizning Yondashuv", desc: "Biz mikrosxizmatlar arxitekturasidan foydalanamiz, bu yerda Generativ AI bemor matnini tibbiy ma'lumotlarga aylantiradi.",
            stack: [
                { name: "Go (Gin/Fiber)", role: "Yuqori tezlikdagi Backend" }, { name: "Python + LangChain", role: "AI va RAG tizimi" }, { name: "Telegram Bot API", role: "Qulay interfeys" }, { name: "React + Recharts", role: "Shifokorlar paneli" }
            ]
        },
        roadmap: {
            title: "Rivojlanish rejasi", badge: "Bosqich: Prototip / MVP",
            steps: [
                { phase: "G'oya", title: "Muammoni aniqlash", desc: "Qayta kasalxonaga yotish sabablari va ma'lumotlar sxemasi aniqlandi." },
                { phase: "Prototip / MVP", title: "Asosiy ishlanma", desc: "Telegram Go Backendga ulandi. AI asosiy savollarni yaratadi." },
                { phase: "Sinov", title: "Klinik tekshiruv", desc: "50 nafar bemor bilan suhbatni simulyatsiya qilish." }
            ]
        },
        team: {
            title: "Jamoa", whyUsTitle: "Nega aynan biz?", whyUsDesc: "Bizning jamoamiz backend tizimlari (Go) va zamonaviy AI muhandisligi bo'yicha chuqur tajribaga ega. Biz tibbiyot uchun ishonchli vositalarni yaratishga intilamiz.",
            members: [
                { role: "Backend Lead", skills: "Go, Postgres, Tizim Arxitekturasi" }, { role: "AI Engineer", skills: "Python, RAG, LLMs, Vector DBs" }, { role: "Frontend Developer", skills: "React, TypeScript, UX/UI Dizayn" }
            ],
            linkText: "LinkedIn / GitHub profili"
        },
        footer: "© 2025 VitalSync Jamoasi. AI500! Hakatoni uchun."
    }
};