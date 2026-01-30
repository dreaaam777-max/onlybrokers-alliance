// src/i18n.js
import i18n from "i18next";
import { initReactI18next } from "react-i18next";

const resources = {
  en: {
    translation: {
      request_access: "Request Partner Access",
      lang_switch_aria: "Language switch",

      /* ================= HEADER ================= */
      brand_home_aria: "ONLYBROKERS Alliance Home",
      nav_aria: "Primary navigation",
      mobile_menu_aria: "Mobile menu",
      menu_open: "Open menu",
      menu_close: "Close menu",

      nav_for_whom: "For whom",
      nav_about: "About",
      nav_how_it_works: "How it works",
      nav_commissions: "Commissions",
      nav_faq: "FAQ",

      /* ================= HERO ================= */
      hero: {
        badge: "Entry by invitation only",
        h1_line1: "Exclusive Access to",
        h1_accent: "Real Estate",
        h1_line2: "Opportunities",
        sub: "Partner-only ecosystem for deals, referrals and scalable income.",
        actions_aria: "Primary actions",
        cta_secondary: "Learn how it works",
        meta_aria: "Key positioning",
        meta: {
          not_brokerage: "Not a brokerage",
          not_marketplace: "Not a marketplace",
          closed_hub: "Closed partner hub",
        },
        panel: {
          title: "Partner Hub",
          kpi1: { k: "Verified projects", v: "Access" },
          kpi2: { k: "Referral system", v: "Built-in" },
          kpi3: { k: "Partner protection", v: "Rules" },
        },
      },

      /* ================= FOR WHOM (NEW) ================= */
      forWhom: {
        title: "Who this is for",
        subtitle:
          "If you bring clients, capital or connections — this platform works for you.",
        aria: "Target partner groups",
        hint: "Partner-first access • Trackable attribution",
        items: {
          brokers: {
            title: "Brokers & Agents",
            text: "Introduce clients, earn commissions, keep protection rules.",
          },
          agencies: {
            title: "Agencies",
            text: "Scale through structured referral levels and team tracking.",
          },
          investors: {
            title: "Investors",
            text: "Submit a request and get served through the platform flow.",
          },
          referral: {
            title: "Referral Partners",
            text: "Bring connections, get rewarded. No public marketplace noise.",
          },
        },
      },

      /* ================= JOIN ================= */
      join: {
        title: "How to join",
        subtitle:
          "1) Request access → 2) Review & approval → 3) Onboarding → 4) Start working",
        mini: "Entry by invitation only. Partners-first ecosystem.",
        points_aria: "What happens next",
        points: {
          p1: "Requests are reviewed against program rules and availability.",
          p2: "Approved partners receive onboarding instructions and access details.",
          p3: "Attribution and commissions are tracked by platform rules.",
        },
        form: {
          name_label: "Name",
          name_ph: "Your full name",
          name_help: "Use the name you want shown in partner records.",
          email_label: "Email",
          email_ph: "you@email.com",
          email_help: "We’ll reply to this email after review.",
          role_label: "Role",
          role_help: "This helps us route your request correctly.",
          roles: ["Broker / Agent", "Agency", "Investor", "Referral Partner"],
          msg_label: "Message (optional)",
          msg_ph: "Tell us what you bring: clients / capital / connections",
          msg_help: "Short and clear is best.",
          sending: "Sending...",
          read_faq: "Read FAQ",
        },
        note:
          "By submitting, you agree that your request will be reviewed under program rules. No public access. No open marketplace.",
        status_success:
          "✅ Request received. Our team will review and respond by email.",
        status_error: "❌ Something went wrong. Please try again later.",
      },

      /* ================= ABOUT ================= */
      about: {
        title: "What is ONLYBROKERS Alliance",
        subtitle:
          "A private partner alliance connecting vetted clients, deals, and professionals through controlled referrals.",
        note:
          "Built for controlled access, transparent attribution, and long-term partner protection.",
        aria: "Clarifications",
        not_brokerage: {
          title: "Not a brokerage",
          desc: "We don’t act as a public broker marketplace.",
        },
        not_marketplace: {
          title: "Not a marketplace",
          desc: "No open listings. No uncontrolled traffic.",
        },
        not_public: {
          title: "Not public access",
          desc: "Entry is partner-first, invitation-based.",
        },
      },

      /* ================= BENEFITS ================= */
      benefits: {
        title: "Why partners join",
        subtitle: "Simple, rational reasons — without hype.",
        no_license: {
          title: "No license required",
          desc: "Partner or referral participation with clear, structured rules.",
        },
        no_legal_risk: {
          title: "No legal risk",
          desc: "Structured deal flow with platform-managed closing.",
        },
        no_inventory: {
          title: "No inventory search",
          desc: "Access verified projects directly inside the partner hub.",
        },
        scalable_income: {
          title: "Scalable income",
          desc: "Commissions and referral levels built for individual and team growth.",
        },
      },

      /* ================= FOUNDERS ================= */
      founders: {
        title: "Who’s behind the platform?",
        subtitle:
          "Built by real market operators — focused on partner protection, clear attribution, and verified deal flow.",
        aria: "Platform founders",
        cards: {
          surena:
            "A Dubai real estate broker known for top-tier performance in the UAE market. Over the years, he built a systematic approach to deals that prioritizes structure, clarity, and measurable results.",
          nazih:
            "Co-founder and an experienced specialist in real estate and investments. Together with Surena, he helped design a partner-first system that makes access to premium opportunities simple, controlled, and transparent.",
        },
        note:
          "The platform works with specific verified projects and negotiates partner advantages — wholesale terms, limited discounts, furniture packages, installment options, and other benefits that are typically unavailable on the open market.",
      },

      /* ================= HOW IT WORKS ================= */
      howItWorks: {
        title: "How the system works",
        subtitle: "Clear flow. Controlled access. Trackable attribution.",
        aria: "Process steps",
        step_label: "Step {{n}}",
        mini: "Platform-managed • Partner-safe • Rule-based attribution",
        steps: [
          "Partner joins by invitation",
          "Gets access to verified projects",
          "Introduces client or partner",
          "Platform closes the deal",
          "Commissions distributed",
        ],
      },

      /* ================= PROTECTION ================= */
      protection: {
        title: "Partner protection",
        subtitle:
          "Trust is enforced by rules, attribution logic, and platform control — not verbal agreements.",
        aria: "Partner protection rules",
        items: [
          {
            t: "Client lock",
            p: "Partner attribution is locked after a verified client introduction within defined rules.",
          },
          {
            t: "No lead stealing",
            p: "Projects and clients cannot be reassigned outside the platform attribution logic.",
          },
          {
            t: "Fair 14-day rule",
            p: "Clear activity window protects partner claims and prevents silent takeovers.",
          },
          {
            t: "Project-based attribution",
            p: "Rewards are tied to specific projects, actions, and milestones — not promises.",
          },
        ],
      },

      /* ================= LEADERSHIP ================= */
      leadership: {
        title: "Alliance Leadership",
        subtitle:
          "Founded and operated by partners managing access, attribution, and partner protection.",
        role: "Founding Partner, Alliance",
        aria: "Alliance leadership team",
      },

      /* ================= COMMISSIONS ================= */
      commissions: {
        title: "Commission model",
        subtitle:
          "Structured rewards. Rule-based attribution. Partner-first access.",
        aria: "Commission tiers",
        deal_reward: "Deal reward",
        deal_partner: "Deal partner",
        level_1: "Referral level 1",
        invited_partner: "Invited partner",
        level_2: "Referral level 2",
        second_level: "Second level",
        agency_program: "Agency program",
        agencies: "Agencies",
        note:
          "Attribution is tracked by partner introduction and project rules. Rewards apply only after defined deal milestones are met.",
      },

      /* ================= ENTRY ================= */
      entry: {
        title: "Two entry scenarios",
        subtitle: {
          line1: "One ecosystem — two ways people enter it.",
          line2: "Access and monetization stay partner-first.",
        },
        scenarioA: {
          tag: "Scenario A",
          title: "Clients",
          desc:
            "Investors or buyers arrive via partner introduction or a direct platform request.",
          note:
            "Clients are served exclusively through partners or the platform flow.",
        },
        scenarioB: {
          tag: "Scenario B",
          title: "Partners",
          desc: "Brokers, agencies and referral partners join by invitation.",
          cta_secondary: "View commission model",
        },
      },

      /* ================= FAQ ================= */
      faq: {
        title: "FAQ",
        subtitle:
          "Clear answers to common questions before requesting partner access.",
        read_rules: "Read full rules",
        items: {
          am_i_broker: {
            q: "Am I a broker?",
            a: "No. ONLYBROKERS Alliance is a closed partner and referral ecosystem.",
          },
          need_license: {
            q: "Do I need a license?",
            a: "License requirements depend on your role and jurisdiction.",
          },
          who_works_client: {
            q: "Who works directly with the client?",
            a: "Verified professionals handle the deal execution.",
          },
          how_assigned: {
            q: "How is a client assigned?",
            a: "Through partner introduction and platform routing rules.",
          },
          reassigned: {
            q: "Can my client be reassigned?",
            a: "Platform protection rules prevent unfair reassignment.",
          },
          is_mlm: {
            q: "Is this MLM?",
            a: "No. Rewards are tied to real deals, not recruitment.",
          },
          when_paid: {
            q: "When do I get paid?",
            a: "After deal milestones or closing conditions are met.",
          },
        },
      },

      /* ================= FINAL CTA ================= */
      finalCta: {
        title: "Ready to join the partner-only ecosystem?",
        subtitle: "Request Partner Access. Entry by invitation only.",
        note:
          "No public access. No open marketplace. Requests are reviewed under program rules.",
        cta_primary: "Request Partner Access",
        cta_secondary: "Back to top",
      },

      /* ================= FOOTER ================= */
      "footer.tagline":
        "Partner-only ecosystem for deals, referrals and scalable income.",
      "footer.affiliate": "Affiliate Program Rules",
      "footer.terms": "Terms & Conditions",
      "footer.privacy": "Privacy Policy",
      "footer.notice":
        "Property buyers are served exclusively through partners or platform request.",
      "footer.contacts": "Contacts",
      "footer.invite": "Entry by invitation only.",

      /* ================= AFFILIATE RULES (✅ INSIDE translation) ================= */
      affiliateRules: {
        seo: {
          title: "Affiliate Program Rules — ONLYBROKERS Alliance",
          description:
            "Full affiliate program rules covering referral attribution, marketing reward terms, prohibited actions, compliance, and legal limitations.",
        },
        h1: "Affiliate Program Rules",
        intro:
          "These rules define referral attribution, marketing reward eligibility, partner responsibilities, prohibited actions, and compliance requirements for participation in ONLYBROKERS Alliance.",
        accordion_aria: "Affiliate rules accordion",
        outro:
          "If you have questions, contact support through the Platform. By participating, you agree to follow these rules.",
        items: [
          {
            q: "1. Program overview",
            a: "This partner program rewards individuals who refer potential clients for real estate purchases through licensed professionals (third parties). These Rules are designed to ensure transparent, clear, and safe participation for all parties.",
          },
          {
            q: "2. Disclaimer (role limitations)",
            a:
              "2.1 Partners are not real estate brokers/agents, legal, financial, or investment advisors, and do not represent the Company.\n" +
              "2.2 A Partner performs a referral function only: informing and directing a potential client through the Platform tools (including a personal link/form).\n" +
              "2.3 All property consultations, negotiations, legal review, document preparation, deal support, and closing are handled exclusively by licensed third parties (agencies, developers, lawyers, etc.). The Company may interact with such third parties as the Platform operator and/or a marketing partner, but does not provide brokerage services.\n" +
              "2.4 Partners are prohibited from: accepting money/advances/deposits/payments from clients; promising guaranteed income/profit or fixed results; acting on behalf of the Company or claiming to be an employee/representative; providing legal/tax/financial/investment advice; using misleading marketing statements.",
          },
          {
            q: "3. Definitions",
            a:
              "3.1 Platform — the ONLYBROKERS website, dashboard, and/or software services.\n" +
              "3.2 Company — the legal entity owning and operating the ONLYBROKERS Platform, not engaged in brokerage activity.\n" +
              "3.3 Partner — an individual admitted by the Company to the Program with access to referral tools.\n" +
              "3.4 Client — a person who (a) is tracked by the Platform via the Partner’s link/form/approved channel; and (b) completes a real estate purchase through a licensed specialist (third party).\n" +
              "3.5 Referral Partner (Level 1) — a partner personally invited by another Partner in the Platform system (first level only).\n" +
              "3.6 Marketing Reward — compensation for referral/marketing assistance payable when these Rules are satisfied. Any mention of “commission” must be understood as a marketing reward, not a brokerage commission.",
          },
          {
            q: "4. Program nature",
            a:
              "4.1 The Program is referral-only.\n" +
              "4.2 The Partner does not provide brokerage, legal, financial, or investment services.\n" +
              "4.3 The Program is not employment, staffing, a service contract as an employee, or an MLM system.\n" +
              "4.4 Only one referral reward level (Level 1) is allowed. No additional levels are permitted.",
          },
          {
            q: "5. Marketing reward",
            a:
              "5.1 Base terms (unless otherwise specified for a project/deal inside the Platform):\n" +
              "• Partner receives 3% of the property price for personal clients;\n" +
              "• Partner receives 1% for deals of Level 1 partners personally invited by the Partner.\n" +
              "5.1.1 Payment timing depends on developer/deal rules, but in any case cannot exceed 12 months from accrual. After that, unclaimed amounts may be voided.\n" +
              "5.2 Rates/terms may vary by project, developer, country, property type, and other parameters. In such cases, the Platform terms for that project/deal apply.\n" +
              "5.3 Reward is calculated based on the purchase price stated in the sale contract (or other confirming document) and may be limited to amounts actually received by the Company from a developer/third party, if applicable.\n" +
              "5.4 A Partner’s entitlement arises only if: the deal is fully completed and documented; the Company has received its reward (if applicable); the Partner did not violate these Rules; and the Client was not previously registered/assigned before Platform tracking.\n" +
              "5.5 The Company may change reward terms for future deals by publishing updates in the Platform and/or notifying via electronic channels.",
          },
          {
            q: "6. Client registration & attribution",
            a:
              "6.1 Client attribution is determined by Platform tracking data (referral link, form, and other approved channels). Platform records take priority.\n" +
              "6.2 The Company may reject or adjust attribution if: duplicates/errors/invalid data exist; the client was already in the database; fraud/abuse is suspected; these Rules or applicable law are violated.\n" +
              "6.3 The Company may request evidence of the referral source (screenshots, correspondence, campaign tags, etc.) to resolve disputes. Final decisions are made in good faith based on Platform data and available evidence.",
          },
          {
            q: "7. Payment terms & process",
            a:
              "7.1 Payment is made when: the deal is closed; the Company has received funds/reward from third parties (if applicable); Section 5 conditions are satisfied; no Partner violations are found.\n" +
              "7.2 Timing/method may depend on developer settlement terms, banking procedures, currency controls, and compliance.\n" +
              "7.3 The Company may request identification/compliance documents (KYC/AML/sanctions checks). Payments may be paused until documents are provided.\n" +
              "7.4 Partners are responsible for their own tax compliance in their jurisdiction.\n" +
              "7.5 Developer/third-party non-payment: if a developer/third party delays, disputes, or fails to pay the Company, the Company is not liable for that delay/non-payment. The Company will use reasonable efforts to address the issue and may inform the Partner of status where possible.",
          },
          {
            q: "8. Partner obligations",
            a:
              "8.1 Use the Platform and Company materials legally and in good faith.\n" +
              "8.2 Do not accept money from clients or participate in settlements.\n" +
              "8.3 Do not present yourself as a broker/agent, Company employee/representative, or a lawyer.\n" +
              "8.4 Do not promise guaranteed outcomes, profitability, discounts, or “exact terms” unless confirmed in the Platform/official materials.\n" +
              "8.5 Route clients only via approved Platform channels.\n" +
              "8.6 Maintain confidentiality of client/partner data.\n" +
              "8.7 Comply with applicable laws (advertising, privacy, and fair marketing).\n" +
              "8.8 Obtain client consent for sharing contact data where required by law and confirm consent for data processing and outreach by licensed specialists.",
          },
          {
            q: "9. Prohibited actions",
            a:
              "9.1 Register fake clients, use contacts without consent, create duplicates to capture attribution.\n" +
              "9.1.1 A Partner may not create/use/control more than one Platform account. Related accounts (family members, spouses, relatives, affiliated persons) are prohibited if intended to aggregate rewards from the same deal(s).\n" +
              "9.1.2 The Company may determine account linkage based on technical/behavioral/financial indicators (including IP, devices, payment data, behavior patterns, matching details, or other indirect signs).\n" +
              "9.1.3 The Company may run linkage checks before any accrual/payment. Payments may be paused pending verification or voided if a violation is confirmed.\n" +
              "9.1.4 If accounts are blocked or rewards are voided due to violations, such amounts may be redistributed within the partner system at the Company’s discretion.\n" +
              "9.2 Manipulate tracking, use bots, inflate metrics, falsify documents.\n" +
              "9.3 Publish misleading advertising or unverified promises/terms.\n" +
              "9.4 Use the Company brand/name/logo without written consent except where explicitly allowed.\n" +
              "9.5 Use the Platform for unlawful activity or to bypass Rules.",
          },
          {
            q: "10. Company rights",
            a:
              "10.1 Approve, limit, or terminate Partner access to the Program.\n" +
              "10.2 Reassign/reject clients in cases of violations, duplicates, or fraud.\n" +
              "10.3 Refuse accrual/payment if Rules are violated.\n" +
              "10.4 Modify these Rules by publishing an updated version in the Platform.\n" +
              "10.5 Pause payments for compliance, fraud investigation, or legal/banking requirements.",
          },
          {
            q: "11. Liability",
            a:
              "11.1 Partners are responsible for their statements, marketing, content, and actions.\n" +
              "11.2 The Company is not responsible for: Partner promises/guarantees; decisions made by clients/partners based on their own assessment; actions/inactions of third parties (developers, agencies, banks, etc.), unless mandatory law requires otherwise.\n" +
              "11.3 To the maximum extent permitted by law, Company liability to the Partner is limited to the amount of accrued but unpaid reward, if payment obligation is proven.",
          },
          {
            q: "12. Legal limitations",
            a:
              "12.1 The Company is not a bank, financial institution, escrow service, payment agent, or brokerage house.\n" +
              "12.2 The Company does not guarantee performance of third parties.\n" +
              "12.3 Partners assess participation risks independently and must comply with their local laws.",
          },
          {
            q: "13. Termination",
            a:
              "13.1 A Partner may terminate participation by notifying the Company via the Platform or available contact channel.\n" +
              "13.2 The Company may terminate a Partner for Rules violations, fraud/abuse, misleading marketing, confidentiality breaches, or unlawful use of the Platform.\n" +
              "13.3 Deals closed before termination are payable only if Section 5 conditions are met, no violations exist, and no compliance/legal restrictions prevent payment.",
          },
          {
            q: "14. Acceptance of terms",
            a:
              "Registration, clicking acceptance (checkbox/button), and/or using the Platform constitutes full and unconditional acceptance of these Rules and recognition of the Partner as an independent party, not a Company employee.",
          },
          {
            q: "15. Governing law, jurisdiction & language",
            a:
              "15.1 These Rules are governed by the laws of the United Arab Emirates.\n" +
              "15.2 Disputes are subject to competent UAE courts, unless mandatory rules state otherwise.\n" +
              "15.3 If multiple language versions exist, the version designated by the Company in the Platform may prevail (recommended: English).",
          },
          {
            q: "16. Miscellaneous",
            a:
              "16.1 Force majeure: parties are not liable for delay/non-performance caused by events beyond reasonable control (sanctions, banking disruptions, regulator restrictions, war, natural disasters, mass outages, etc.).\n" +
              "16.2 Severability: if any provision is found invalid, remaining provisions remain in effect.\n" +
              "16.3 Updates: the current version is published in the Platform and applies to future operations/deals.",
          },
        ],
      },
    },
  },

  ru: {
    translation: {
      request_access: "Запросить доступ партнёра",
      lang_switch_aria: "Переключение языка",

      /* ================= HEADER ================= */
      brand_home_aria: "ONLYBROKERS Alliance Home",
      nav_aria: "Основная навигация",
      mobile_menu_aria: "Мобильное меню",
      menu_open: "Открыть меню",
      menu_close: "Закрыть меню",

      nav_for_whom: "Для кого",
      nav_about: "О проекте",
      nav_how_it_works: "Как работает",
      nav_commissions: "Комиссии",
      nav_faq: "Вопросы",

      /* ================= HERO ================= */
      hero: {
        badge: "Доступ только по приглашению",
        h1_line1: "Эксклюзивный доступ к",
        h1_accent: "недвижимости",
        h1_line2: "и инвестиционным возможностям",
        sub: "Партнёрская экосистема для сделок, рекомендаций и масштабируемого дохода.",
        actions_aria: "Основные действия",
        cta_secondary: "Узнать, как это работает",
        meta_aria: "Ключевое позиционирование",
        meta: {
          not_brokerage: "Не брокерская компания",
          not_marketplace: "Не маркетплейс",
          closed_hub: "Закрытый партнёрский хаб",
        },
        panel: {
          title: "Partner Hub",
          kpi1: { k: "Проверенные проекты", v: "Доступ" },
          kpi2: { k: "Реферальная система", v: "Встроено" },
          kpi3: { k: "Защита партнёров", v: "Правила" },
        },
      },

      /* ================= FOR WHOM (NEW) ================= */
      forWhom: {
        title: "Для кого это",
        subtitle:
          "Если вы приводите клиентов, капитал или связи — эта платформа работает для вас.",
        aria: "Категории партнёров",
        hint: "Партнёрский доступ • Отслеживаемая атрибуция",
        items: {
          brokers: {
            title: "Брокеры и агенты",
            text: "Приводите клиентов, зарабатывайте, сохраняйте защиту по правилам.",
          },
          agencies: {
            title: "Агентства",
            text: "Масштабируйтесь через структурированные уровни рефералов и учёт команды.",
          },
          investors: {
            title: "Инвесторы",
            text: "Оставьте заявку и получите сопровождение через поток платформы.",
          },
          referral: {
            title: "Реферальные партнёры",
            text: "Приводите связи — получайте вознаграждение. Без шума публичного маркетплейса.",
          },
        },
      },

      /* ================= JOIN ================= */
      join: {
        title: "Как присоединиться",
        subtitle:
          "1) Запрос доступа → 2) Проверка и одобрение → 3) Онбординг → 4) Начало работы",
        mini: "Доступ только по приглашению. Экосистема партнёров — в приоритете.",
        points_aria: "Что будет дальше",
        points: {
          p1: "Заявки проверяются по правилам программы и доступности.",
          p2: "Одобренные партнёры получают инструкции по онбордингу и детали доступа.",
          p3: "Атрибуция и комиссии отслеживаются по правилам платформы.",
        },
        form: {
          name_label: "Имя",
          name_ph: "Ваше полное имя",
          name_help: "Укажите имя, которое должно отображаться в партнёрских данных.",
          email_label: "Email",
          email_ph: "you@email.com",
          email_help: "Мы ответим на этот email после проверки.",
          role_label: "Роль",
          role_help: "Это помогает правильно направить вашу заявку.",
          roles: ["Брокер / Агент", "Агентство", "Инвестор", "Реферальный партнёр"],
          msg_label: "Сообщение (необязательно)",
          msg_ph: "Коротко: что вы приносите — клиенты / капитал / связи",
          msg_help: "Коротко и по делу — лучше всего.",
          sending: "Отправляем...",
          read_faq: "Читать FAQ",
        },
        note:
          "Отправляя заявку, вы соглашаетесь, что она будет рассмотрена по правилам программы. Нет публичного доступа. Нет открытого маркетплейса.",
        status_success: "✅ Заявка получена. Мы проверим и ответим вам на email.",
        status_error: "❌ Что-то пошло не так. Пожалуйста, попробуйте позже.",
      },

      /* ================= ABOUT ================= */
      about: {
        title: "Что такое ONLYBROKERS Alliance",
        subtitle:
          "Закрытый партнёрский альянс, который соединяет проверенных клиентов, сделки и специалистов через контролируемые рекомендации.",
        note:
          "Создано для контролируемого доступа, прозрачной атрибуции и долгосрочной защиты партнёров.",
        aria: "Пояснения",
        not_brokerage: {
          title: "Не брокерская компания",
          desc: "Мы не являемся публичной брокерской площадкой.",
        },
        not_marketplace: {
          title: "Не маркетплейс",
          desc: "Нет открытых листингов и неконтролируемого трафика.",
        },
        not_public: {
          title: "Не публичный доступ",
          desc: "Вход партнёрский: по приглашению и правилам.",
        },
      },

      /* ================= BENEFITS ================= */
      benefits: {
        title: "Почему партнёры присоединяются",
        subtitle: "Простые и рациональные причины — без лишнего хайпа.",
        no_license: {
          title: "Лицензия не требуется",
          desc: "Участие партнёра или реферала по понятным и структурированным правилам.",
        },
        no_legal_risk: {
          title: "Минимум юридических рисков",
          desc: "Структурированный поток сделок с сопровождением закрытия со стороны платформы.",
        },
        no_inventory: {
          title: "Без поиска объектов",
          desc: "Доступ к проверенным проектам напрямую внутри партнёрского хаба.",
        },
        scalable_income: {
          title: "Масштабируемый доход",
          desc: "Комиссии и уровни рекомендаций для роста одного партнёра и команды.",
        },
      },

      /* ================= FOUNDERS ================= */
      founders: {
        title: "Кто стоит за платформой?",
        subtitle:
          "Создано реальными операторами рынка — фокус на защите партнёров, прозрачной атрибуции и проверенном потоке сделок.",
        aria: "Основатели платформы",
        cards: {
          surena:
            "Брокер по недвижимости в Дубае, известный высокой эффективностью на рынке ОАЭ. За годы работы выстроил системный подход к сделкам, где приоритет — структура, ясность и измеримый результат.",
          nazih:
            "Сооснователь и опытный специалист в сфере недвижимости и инвестиций. Вместе с Surena помог разработать партнёрскую систему, которая делает доступ к премиальным возможностям простым, контролируемым и прозрачным.",
        },
        note:
          "Платформа работает с конкретными проверенными проектами и согласовывает преимущества для партнёров — оптовые условия, лимитированные скидки, мебельные пакеты, рассрочки и другие бонусы, которые обычно недоступны на открытом рынке.",
      },

      /* ================= HOW IT WORKS ================= */
      howItWorks: {
        title: "Как работает система",
        subtitle: "Чёткий процесс. Контролируемый доступ. Отслеживаемая атрибуция.",
        aria: "Шаги процесса",
        step_label: "Шаг {{n}}",
        mini: "Управляется платформой • Защита партнёров • Атрибуция по правилам",
        steps: [
          "Партнёр присоединяется по приглашению",
          "Получает доступ к проверенным проектам",
          "Приводит клиента или партнёра",
          "Платформа закрывает сделку",
          "Комиссии распределяются",
        ],
      },

      /* ================= PROTECTION ================= */
      protection: {
        title: "Защита партнёров",
        subtitle:
          "Доверие обеспечивается правилами, логикой атрибуции и контролем платформы — а не устными договорённостями.",
        aria: "Правила защиты партнёров",
        items: [
          {
            t: "Фиксация клиента",
            p: "Атрибуция партнёра закрепляется после подтверждённого представления клиента в рамках правил.",
          },
          {
            t: "Без “увода” лидов",
            p: "Проекты и клиенты не могут быть переназначены вне логики атрибуции платформы.",
          },
          {
            t: "Честное правило 14 дней",
            p: "Понятное окно активности защищает заявки партнёра и предотвращает “тихие перехваты”.",
          },
          {
            t: "Атрибуция по проектам",
            p: "Вознаграждения привязаны к проектам, действиям и этапам (milestones) — а не к обещаниям.",
          },
        ],
      },

      /* ================= LEADERSHIP ================= */
      leadership: {
        title: "Руководство альянса",
        subtitle:
          "Основано и управляется партнёрами: контроль доступа, атрибуция и защита партнёров.",
        role: "Founding Partner, Alliance",
        aria: "Команда руководства альянса",
      },

      /* ================= COMMISSIONS ================= */
      commissions: {
        title: "Модель комиссий",
        subtitle:
          "Структурные вознаграждения. Атрибуция по правилам. Партнёрский доступ.",
        aria: "Уровни комиссий",
        deal_reward: "Вознаграждение за сделку",
        deal_partner: "Партнёр по сделке",
        level_1: "Реферальный уровень 1",
        invited_partner: "Приглашённый партнёр",
        level_2: "Реферальный уровень 2",
        second_level: "Второй уровень",
        agency_program: "Программа для агентств",
        agencies: "Агентства",
        note:
          "Атрибуция фиксируется по факту представления клиента и правилам проекта. Выплаты возможны только после выполнения условий и этапов сделки.",
      },

      /* ================= ENTRY ================= */
      entry: {
        title: "Два сценария входа",
        subtitle: {
          line1: "Одна экосистема — два способа входа.",
          line2: "Доступ и монетизация остаются партнёрскими.",
        },
        scenarioA: {
          tag: "Сценарий A",
          title: "Клиенты",
          desc:
            "Инвесторы или покупатели приходят через партнёра или запрос через платформу.",
          note:
            "Клиенты обслуживаются исключительно через партнёров или поток платформы.",
        },
        scenarioB: {
          tag: "Сценарий B",
          title: "Партнёры",
          desc:
            "Брокеры, агентства и referral-партнёры заходят по приглашению.",
          cta_secondary: "Смотреть модель комиссий",
        },
      },

      /* ================= FAQ ================= */
      faq: {
        title: "Вопросы и ответы",
        subtitle: "Ответы перед отправкой запроса на партнёрский доступ.",
        read_rules: "Читать полные правила",
        items: {
          am_i_broker: {
            q: "Я брокер?",
            a: "Нет. ONLYBROKERS Alliance — закрытая партнёрская и реферальная экосистема.",
          },
          need_license: {
            q: "Нужна ли лицензия?",
            a: "Требования зависят от вашей роли и юрисдикции.",
          },
          who_works_client: {
            q: "Кто работает с клиентом напрямую?",
            a: "Сделку ведут проверенные специалисты.",
          },
          how_assigned: {
            q: "Как назначается клиент?",
            a: "По правилам атрибуции и маршрутизации платформы.",
          },
          reassigned: {
            q: "Могут ли переназначить моего клиента?",
            a: "Правила защиты партнёров предотвращают несправедливое переназначение.",
          },
          is_mlm: {
            q: "Это MLM?",
            a: "Нет. Вознаграждения привязаны к реальным сделкам, а не к рекрутингу.",
          },
          when_paid: {
            q: "Когда выплата?",
            a: "После выполнения условий (milestones) или закрытия сделки.",
          },
        },
      },

      /* ================= FINAL CTA ================= */
      finalCta: {
        title:
          "Готовы присоединиться к закрытой партнёрской экосистеме?",
        subtitle:
          "Запросите партнёрский доступ. Вход только по приглашению.",
        note:
          "Нет публичного доступа и открытого маркетплейса. Все заявки проходят проверку по правилам программы.",
        cta_primary: "Запросить доступ партнёра",
        cta_secondary: "Наверх",
      },

      /* ================= FOOTER ================= */
      "footer.tagline":
        "Партнёрская экосистема для сделок, рекомендаций и масштабируемого дохода.",
      "footer.affiliate": "Правила партнёрской программы",
      "footer.terms": "Условия использования",
      "footer.privacy": "Политика конфиденциальности",
      "footer.notice":
        "Покупатели обслуживаются исключительно через партнёров или запрос через платформу.",
      "footer.contacts": "Контакты",
      "footer.invite": "Доступ только по приглашению.",

      /* ================= AFFILIATE RULES ================= */
      affiliateRules: {
        seo: {
          title: "Правила партнёрской программы — ONLYBROKERS Alliance",
          description:
            "Полные правила партнёрской программы: атрибуция рекомендаций, условия маркетингового вознаграждения, запреты, комплаенс и юридические ограничения.",
        },
        h1: "Правила партнёрской программы",
        intro:
          "Эти правила определяют атрибуцию рекомендаций, условия получения маркетингового вознаграждения, обязанности партнёра, запрещённые действия и требования комплаенса для участия в ONLYBROKERS Alliance.",
        accordion_aria: "Аккордеон правил партнёрской программы",
        outro:
          "Если у вас есть вопросы — свяжитесь со службой поддержки через Платформу. Участвуя в программе, вы соглашаетесь соблюдать эти правила.",
        items: [
          {
            q: "1. Обзор программы",
            a: "Эта партнёрская программа вознаграждает людей, которые направляют потенциальных клиентов для покупки недвижимости через лицензированных специалистов (третьих лиц). Правила созданы для прозрачного, понятного и безопасного участия всех сторон.",
          },
          {
            q: "2. Дисклеймер (ограничения роли)",
            a:
              "2.1 Партнёры не являются брокерами/агентами по недвижимости, а также не являются юридическими, финансовыми или инвестиционными консультантами и не представляют Компанию.\n" +
              "2.2 Партнёр выполняет только реферальную функцию: информирует и направляет потенциального клиента через инструменты Платформы (включая персональную ссылку/форму).\n" +
              "2.3 Все консультации, переговоры, юридическая проверка, подготовка документов, сопровождение сделки и закрытие выполняются исключительно лицензированными третьими лицами (агентствами, девелоперами, юристами и т. д.). Компания может взаимодействовать с такими третьими лицами как оператор Платформы и/или маркетинговый партнёр, но не оказывает брокерских услуг.\n" +
              "2.4 Партнёрам запрещено: принимать деньги/авансы/депозиты/платежи от клиентов; обещать гарантированный доход/прибыль или фиксированный результат; действовать от имени Компании или выдавать себя за сотрудника/представителя; предоставлять юридические/налоговые/финансовые/инвестиционные советы; использовать вводящие в заблуждение маркетинговые заявления.",
          },
          {
            q: "3. Определения",
            a:
              "3.1 Платформа — сайт ONLYBROKERS, личный кабинет и/или программные сервисы.\n" +
              "3.2 Компания — юридическое лицо, владеющее и управляющее Платформой ONLYBROKERS, не осуществляющее брокерскую деятельность.\n" +
              "3.3 Партнёр — лицо, допущенное Компанией к программе и имеющее доступ к реферальным инструментам.\n" +
              "3.4 Клиент — лицо, которое (a) отслеживается Платформой через ссылку/форму/одобренный канал Партнёра; и (b) завершает покупку недвижимости через лицензированного специалиста (третье лицо).\n" +
              "3.5 Реферальный партнёр (Уровень 1) — партнёр, лично приглашённый другим Партнёром в системе (только первый уровень).\n" +
              "3.6 Маркетинговое вознаграждение — компенсация за реферальную/маркетинговую помощь при соблюдении настоящих Правил. Любое упоминание «комиссии» следует понимать как маркетинговое вознаграждение, а не брокерскую комиссию.",
          },
          {
            q: "4. Характер программы",
            a:
              "4.1 Программа носит исключительно реферальный характер.\n" +
              "4.2 Партнёр не оказывает брокерские, юридические, финансовые или инвестиционные услуги.\n" +
              "4.3 Программа не является трудоустройством, наймом персонала, договором оказания услуг как сотрудника, либо MLM-системой.\n" +
              "4.4 Допускается только один уровень вознаграждения (Уровень 1). Дополнительные уровни запрещены.",
          },
          {
            q: "5. Маркетинговое вознаграждение",
            a:
              "5.1 Базовые условия (если иное не указано по проекту/сделке внутри Платформы):\n" +
              "• 3% от стоимости объекта за личных клиентов;\n" +
              "• 1% по сделкам партнёров Уровня 1, лично приглашённых Партнёром.\n" +
              "5.1.1 Сроки выплат зависят от правил девелопера/сделки, но в любом случае не могут превышать 12 месяцев с момента начисления. После этого невостребованные суммы могут быть аннулированы.\n" +
              "5.2 Ставки/условия могут отличаться в зависимости от проекта, девелопера, страны, типа недвижимости и иных параметров. В таком случае применяются условия Платформы для конкретного проекта/сделки.\n" +
              "5.3 Вознаграждение рассчитывается от цены покупки, указанной в договоре (или подтверждающем документе), и может быть ограничено суммами, фактически полученными Компанией от девелопера/третьих лиц (если применимо).\n" +
              "5.4 Право на вознаграждение возникает только если: сделка полностью завершена и подтверждена документально; Компания получила своё вознаграждение (если применимо); Партнёр не нарушил Правила; Клиент не был ранее зарегистрирован/закреплён до отслеживания Платформой.\n" +
              "5.5 Компания может менять условия вознаграждения для будущих сделок, публикуя обновления в Платформе и/или уведомляя электронными каналами.",
          },
          {
            q: "6. Регистрация клиента и атрибуция",
            a:
              "6.1 Атрибуция клиента определяется данными трекинга Платформы (реферальная ссылка, форма и другие одобренные каналы). Записи Платформы имеют приоритет.\n" +
              "6.2 Компания может отклонить или скорректировать атрибуцию при наличии: дублей/ошибок/некорректных данных; если клиент уже был в базе; при подозрении на мошенничество/злоупотребления; при нарушении Правил или применимого законодательства.\n" +
              "6.3 Компания может запросить подтверждения источника (скриншоты, переписку, campaign tags и т. д.) для разрешения споров. Итоговое решение принимается добросовестно на основе данных Платформы и доступных доказательств.",
          },
          {
            q: "7. Условия и процесс выплат",
            a:
              "7.1 Выплата производится, когда: сделка закрыта; Компания получила средства/вознаграждение от третьих лиц (если применимо); выполнены условия Раздела 5; не выявлено нарушений Партнёра.\n" +
              "7.2 Сроки/методы могут зависеть от расчётов девелопера, банковских процедур, валютного контроля и комплаенса.\n" +
              "7.3 Компания может запросить документы идентификации/проверки (KYC/AML/санкционные проверки). Выплаты могут быть приостановлены до предоставления документов.\n" +
              "7.4 Партнёры самостоятельно отвечают за налоговые обязательства в своей юрисдикции.\n" +
              "7.5 Если девелопер/третье лицо задерживает, оспаривает или не выплачивает Компании, Компания не несёт ответственности за такую задержку/невыплату. Компания предпримет разумные усилия для решения вопроса и может информировать Партнёра о статусе по возможности.",
          },
          {
            q: "8. Обязанности партнёра",
            a:
              "8.1 Использовать Платформу и материалы Компании законно и добросовестно.\n" +
              "8.2 Не принимать деньги от клиентов и не участвовать в расчётах.\n" +
              "8.3 Не представляться брокером/агентом, сотрудником/представителем Компании или юристом.\n" +
              "8.4 Не обещать гарантированный результат/прибыль/скидки/«точные условия», если они не подтверждены в Платформе/официальных материалах.\n" +
              "8.5 Направлять клиентов только через одобренные каналы Платформы.\n" +
              "8.6 Соблюдать конфиденциальность данных клиентов/партнёров.\n" +
              "8.7 Соблюдать применимые законы (реклама, приватность, добросовестный маркетинг).\n" +
              "8.8 Получать согласие клиента на передачу контактных данных, где это требуется, и подтверждать согласие на обработку данных и коммуникации со стороны лицензированных специалистов.",
          },
          {
            q: "9. Запрещённые действия",
            a:
              "9.1 Регистрировать фейковых клиентов, использовать контакты без согласия, создавать дубли для захвата атрибуции.\n" +
              "9.1.1 Партнёр не может создавать/использовать/контролировать более одного аккаунта. Связанные аккаунты (члены семьи, супруги, родственники, аффилированные лица) запрещены, если цель — агрегировать вознаграждения по одним и тем же сделкам.\n" +
              "9.1.2 Компания может определять связь аккаунтов по техническим/поведенческим/финансовым признакам (IP, устройства, платёжные данные, паттерны поведения, совпадения данных и т. д.).\n" +
              "9.1.3 Компания может проводить проверки связи перед начислением/выплатой. Выплаты могут быть приостановлены до проверки или аннулированы при подтверждении нарушения.\n" +
              "9.1.4 При блокировке аккаунтов/аннулировании вознаграждений из-за нарушений такие суммы могут быть перераспределены в партнёрской системе по усмотрению Компании.\n" +
              "9.2 Манипулировать трекингом, использовать ботов, накручивать метрики, подделывать документы.\n" +
              "9.3 Публиковать вводящую в заблуждение рекламу или непроверенные обещания/условия.\n" +
              "9.4 Использовать бренд/название/логотип Компании без письменного согласия, кроме явно разрешённых случаев.\n" +
              "9.5 Использовать Платформу для незаконной деятельности или обхода Правил.",
          },
          {
            q: "10. Права компании",
            a:
              "10.1 Одобрять, ограничивать или прекращать доступ Партнёра к программе.\n" +
              "10.2 Переназначать/отклонять клиентов при нарушениях, дублях или мошенничестве.\n" +
              "10.3 Отказывать в начислении/выплате при нарушении Правил.\n" +
              "10.4 Изменять Правила, публикуя обновлённую версию в Платформе.\n" +
              "10.5 Приостанавливать выплаты по причинам комплаенса, расследования мошенничества или требований закона/банков.",
          },
          {
            q: "11. Ответственность",
            a:
              "11.1 Партнёры несут ответственность за свои заявления, маркетинг, контент и действия.\n" +
              "11.2 Компания не отвечает за: обещания/гарантии Партнёра; решения клиентов/партнёров, принятые на их усмотрение; действия/бездействие третьих лиц (девелоперы, агентства, банки и т. д.), если только обязательные нормы закона не требуют иного.\n" +
              "11.3 В максимальной степени, допустимой законом, ответственность Компании перед Партнёром ограничивается суммой начисленного, но невыплаченного вознаграждения, если обязанность выплаты доказана.",
          },
          {
            q: "12. Юридические ограничения",
            a:
              "12.1 Компания не является банком, финансовой организацией, эскроу-сервисом, платёжным агентом или брокерской компанией.\n" +
              "12.2 Компания не гарантирует исполнение обязательств третьими лицами.\n" +
              "12.3 Партнёры самостоятельно оценивают риски участия и обязаны соблюдать местное законодательство.",
          },
          {
            q: "13. Прекращение участия",
            a:
              "13.1 Партнёр может прекратить участие, уведомив Компанию через Платформу или доступный контактный канал.\n" +
              "13.2 Компания может прекратить участие Партнёра при нарушении Правил, мошенничестве/злоупотреблениях, вводящем в заблуждение маркетинге, нарушении конфиденциальности или незаконном использовании Платформы.\n" +
              "13.3 Сделки, закрытые до прекращения участия, оплачиваются только при выполнении условий Раздела 5, отсутствии нарушений и отсутствии комплаенс/юридических ограничений на выплату.",
          },
          {
            q: "14. Принятие условий",
            a:
              "Регистрация, подтверждение согласия (чекбокс/кнопка) и/или использование Платформы означает полное и безусловное принятие настоящих Правил и признание Партнёра независимой стороной, а не сотрудником Компании.",
          },
          {
            q: "15. Применимое право, юрисдикция и язык",
            a:
              "15.1 Настоящие Правила регулируются законами Объединённых Арабских Эмиратов.\n" +
              "15.2 Споры подлежат рассмотрению компетентными судами ОАЭ, если обязательные нормы не требуют иного.\n" +
              "15.3 При наличии нескольких языковых версий приоритет может иметь версия, указанная Компанией в Платформе (рекомендуется английская).",
          },
          {
            q: "16. Прочее",
            a:
              "16.1 Форс-мажор: стороны не несут ответственности за задержки/неисполнение из-за событий вне разумного контроля (санкции, банковские сбои, ограничения регуляторов, война, стихийные бедствия, массовые отключения и т. д.).\n" +
              "16.2 Делимость: если какое-то положение признано недействительным, остальные остаются в силе.\n" +
              "16.3 Обновления: актуальная версия публикуется в Платформе и применяется к будущим операциям/сделкам.",
          },
        ],
      },
    },
  },
};

/* ✅ fix for StrictMode/HMR повторной инициализации */
if (!i18n.isInitialized) {
  i18n.use(initReactI18next).init({
    resources,
    lng: localStorage.getItem("lng") || "en",
    fallbackLng: "en",
    supportedLngs: ["en", "ru"],
    returnNull: false,
    interpolation: { escapeValue: false },
  });
}

export default i18n;
