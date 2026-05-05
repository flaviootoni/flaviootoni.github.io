const translations = {
    pt: {
        // Nav
        "nav.about": "Sobre",
        "nav.experience": "Experiência",
        "nav.skills": "Competências",
        "nav.education": "Formação",
        "nav.contact": "Contato",

        // Hero
        "hero.subtitle": "Tech Lead / Engineering Leader",
        "hero.description": "Sistemas Críticos | Arquitetura & IA Operacional | Escala, Resiliência e Eficiência de Times",
        "hero.cta": "Contato",
        "hero.cta2": "Saiba Mais",

        // About
        "about.title": "Sobre Mim",
        "about.p1": "Lidero times de desenvolvimento em sistemas críticos, focando em escala, resiliência e eficiência operacional através de arquitetura bem definida e uso prático de IA.",
        "about.p2": "Atuo na coordenação de equipes multidisciplinares (desenvolvedores, arquitetos e analistas funcionais), garantindo entregas consistentes, estabilidade do sistema e resposta eficiente a incidentes de alto impacto.",
        "about.p3": "Minha atuação vai além da execução técnica: foco em estruturar o funcionamento do time para aumentar previsibilidade, qualidade e velocidade de entrega.",
        "about.highlight1": "Organização e priorização de backlog em ambientes de alta pressão",
        "about.highlight2": "Mediação entre áreas técnicas e de negócio",
        "about.highlight3": "Apoio contínuo ao time para destravar problemas complexos",
        "about.highlight4": "Tomada de decisão em cenários críticos",
        "about.ai.title": "IA na Engenharia e Gestão",
        "about.ai1": "Acelerar análise e resolução de incidentes",
        "about.ai2": "Apoiar engenharia reversa e construção de SDD (Spec-Driven Development)",
        "about.ai3": "Estruturar base de conhecimento funcional para melhorar qualidade das histórias",
        "about.ai4": "Identificar riscos e oportunidades nos projetos",
        "about.ai5": "Apoiar tomada de decisão técnica",
        "about.goal": '<i class="fas fa-bullseye"></i> <strong>Objetivo:</strong> Evoluir para Engineering Manager, ampliando impacto através do desenvolvimento de pessoas, melhoria de processos e construção de times de alta performance.',

        // Experience
        "exp.title": "Experiência Profissional",
        "exp.job1.title": "Coordenador de Sistemas OSS (Tech Lead)",
        "exp.job1.date": "Outubro 2021 – Presente",
        "exp.job1.d1": "Liderança de time multidisciplinar (desenvolvedores, arquitetos e analistas funcionais) em ambiente crítico de telecom",
        "exp.job1.d2": "Coordenação de backlog, priorização e tomada de decisão em cenários de alta pressão",
        "exp.job1.d3": "Aplicação de IA no apoio ao desenvolvimento, acelerando análise de código, debugging e resolução de incidentes",
        "exp.job1.d4": "Uso de IA para engenharia reversa de sistemas legados, estruturando SDDs e reduzindo dependência de conhecimento tácito",
        "exp.job1.d5": "Criação de base de conhecimento funcional com apoio de IA",
        "exp.job1.d6": "Foco contínuo em estabilidade, resiliência e melhoria de processos em sistemas de missão crítica",

        "exp.job2.title": "Arquiteto de Solução IT OSS",
        "exp.job2.date": "Junho 2019 – Outubro 2021",
        "exp.job2.d1": "Desenho e concepção de arquiteturas de soluções para telecomunicações",
        "exp.job2.d2": "Suporte consultivo aos desenvolvedores e garantia de resiliência e escalabilidade sistêmica",

        "exp.job3.title": "Gerente de Desenvolvimento",
        "exp.job3.date": "Agosto 2018 – Maio 2019",
        "exp.job3.d1": "Liderança de definição arquitetural e direcionamento técnico de projetos",
        "exp.job3.d2": "Gestão financeira completa dos projetos: controle de custos, previsibilidade e otimização de recursos",
        "exp.job3.d3": "Estruturação e condução da governança de projetos com metodologias ágeis e Jira",

        "exp.job4.title": "Coordenador de Sistemas Engenharia TI",
        "exp.job4.date": "Dezembro 2016 – Agosto 2018",
        "exp.job4.d1": "Coordenação de equipes multidisciplinares: gerentes de projetos, desenvolvedores, DBAs e fornecedores terceirizados",
        "exp.job4.d2": "Direção de projetos de software utilizando Scrum e ferramentas internas para gestão ágil",

        "exp.job5.title": "Coordenador de Sistemas Engenharia TI",
        "exp.job5.date": "Maio 2012 – Novembro 2016",
        "exp.job5.d1": "Coordenação técnica em ambientes de engenharia de alta criticidade, gerindo ciclos via Scrum e Asana",
        "exp.job5.d2": "<strong>Freedom (Retail):</strong> Aplicativo (Android e iOS) para uso da linha fixa pelo smartphone",
        "exp.job5.d3": "<strong>Colocation (Corporate):</strong> Primeira solução de Data Center B2B na GVT",
        "exp.job5.d4": "<strong>IONIX:</strong> Plataforma analítica de Problemas e Incidentes baseada em ITIL",

        "exp.job6.title": "Analista de Software Sênior",
        "exp.job6.date": "Maio 2010 – Maio 2012",
        "exp.job6.d1": "Desenvolvimento de sistemas em Java e Adobe Flex em projetos alocados na infraestrutura GVT",

        "exp.job7.title": "Programador Java",
        "exp.job7.date": "Agosto 2008 – Dezembro 2009",
        "exp.job7.d1": "Desenvolvimento do core sistêmico para a solução corporativa IBS (Insurance Brazil)",

        "exp.job8.title": "Programador Java",
        "exp.job8.date": "2007 – 2008",
        "exp.job8.d1": "Implementação do ERP Prometheus (Totvs), análise de projetos e entrega de soluções departamentais",

        // Skills
        "skills.title": "Competências",
        "skills.cat1": "Linguagens & Ecossistemas",
        "skills.cat2": "Arquitetura & Engenharia",
        "skills.cat2.1": "Sistemas Críticos",
        "skills.cat2.4": "Resiliência & Escalabilidade",
        "skills.cat3": "IA Operacional",
        "skills.cat3.3": "Automação com IA",
        "skills.cat3.4": "IA aplicada à gestão",
        "skills.cat4": "Ferramentas & Integração",
        "skills.cat4.1": "n8n (Orquestração)",
        "skills.cat5": "Metodologias",
        "skills.cat6": "Liderança",
        "skills.cat6.1": "Gestão de Times",
        "skills.cat6.2": "Mediação Técnica/Negócio",
        "skills.cat6.3": "Tomada de Decisão",
        "skills.cat6.4": "Desenvolvimento de Pessoas",

        // Education
        "edu.title": "Formação",
        "edu.degree": "Bacharel em Sistemas de Informação",
        "edu.languages": "Idiomas",
        "edu.lang1": "Português",
        "edu.lang1.level": "Nativo",
        "edu.lang2": "Inglês",
        "edu.lang2.level": "Intermediário",

        // Contact
        "contact.title": "Contato",

        // Footer
        "footer": "&copy; 2025 Flavio Henrique Nahon Otoni. Todos os direitos reservados."
    },
    en: {
        // Nav
        "nav.about": "About",
        "nav.experience": "Experience",
        "nav.skills": "Skills",
        "nav.education": "Education",
        "nav.contact": "Contact",

        // Hero
        "hero.subtitle": "Tech Lead / Engineering Leader",
        "hero.description": "Critical Systems | Architecture & Operational AI | Scale, Resilience and Team Efficiency",
        "hero.cta": "Contact",
        "hero.cta2": "Learn More",

        // About
        "about.title": "About Me",
        "about.p1": "I lead development teams in critical systems, focusing on scale, resilience, and operational efficiency through well-defined architecture and practical use of AI.",
        "about.p2": "I coordinate multidisciplinary teams (developers, architects, and functional analysts), ensuring consistent deliveries, system stability, and efficient response to high-impact incidents.",
        "about.p3": "My role goes beyond technical execution: I focus on structuring team operations to increase predictability, quality, and delivery speed.",
        "about.highlight1": "Backlog organization and prioritization in high-pressure environments",
        "about.highlight2": "Bridging technical and business areas",
        "about.highlight3": "Continuous support to unblock complex problems",
        "about.highlight4": "Decision-making in critical scenarios",
        "about.ai.title": "AI in Engineering & Management",
        "about.ai1": "Accelerate incident analysis and resolution",
        "about.ai2": "Support reverse engineering and SDD (Spec-Driven Development) construction",
        "about.ai3": "Build functional knowledge bases to improve story quality",
        "about.ai4": "Identify risks and opportunities in projects",
        "about.ai5": "Support technical decision-making",
        "about.goal": '<i class="fas fa-bullseye"></i> <strong>Goal:</strong> Evolve into an Engineering Manager role, expanding impact through people development, process improvement, and building high-performance teams.',

        // Experience
        "exp.title": "Professional Experience",
        "exp.job1.title": "OSS Systems Coordinator (Tech Lead)",
        "exp.job1.date": "October 2021 – Present",
        "exp.job1.d1": "Leading a multidisciplinary team (developers, architects, and functional analysts) in a critical telecom environment",
        "exp.job1.d2": "Backlog coordination, prioritization, and decision-making in high-pressure scenarios",
        "exp.job1.d3": "Applying AI to support development, accelerating code analysis, debugging, and incident resolution",
        "exp.job1.d4": "Using AI for legacy system reverse engineering, structuring SDDs and reducing tacit knowledge dependency",
        "exp.job1.d5": "Building functional knowledge bases with AI support",
        "exp.job1.d6": "Continuous focus on stability, resilience, and process improvement in mission-critical systems",

        "exp.job2.title": "IT OSS Solution Architect",
        "exp.job2.date": "June 2019 – October 2021",
        "exp.job2.d1": "Design and conception of solution architectures for telecommunications",
        "exp.job2.d2": "Consultative support to developers ensuring resilience and systemic scalability",

        "exp.job3.title": "Development Manager",
        "exp.job3.date": "August 2018 – May 2019",
        "exp.job3.d1": "Architectural definition leadership and technical direction of projects",
        "exp.job3.d2": "Complete financial management of projects: cost control, predictability, and resource optimization",
        "exp.job3.d3": "Project governance structuring with agile methodologies and Jira",

        "exp.job4.title": "IT Engineering Systems Coordinator",
        "exp.job4.date": "December 2016 – August 2018",
        "exp.job4.d1": "Coordination of multidisciplinary teams: project managers, developers, DBAs, and outsourced vendors",
        "exp.job4.d2": "Software project direction using Scrum and internal tools for agile management",

        "exp.job5.title": "IT Engineering Systems Coordinator",
        "exp.job5.date": "May 2012 – November 2016",
        "exp.job5.d1": "Technical coordination in high-criticality engineering environments, managing cycles via Scrum and Asana",
        "exp.job5.d2": "<strong>Freedom (Retail):</strong> Mobile app (Android and iOS) enabling landline use via smartphone",
        "exp.job5.d3": "<strong>Colocation (Corporate):</strong> First B2B Data Center solution at GVT",
        "exp.job5.d4": "<strong>IONIX:</strong> Analytical platform for Problems and Incidents based on ITIL",

        "exp.job6.title": "Senior Software Analyst",
        "exp.job6.date": "May 2010 – May 2012",
        "exp.job6.d1": "Java and Adobe Flex systems development in projects allocated to GVT infrastructure",

        "exp.job7.title": "Java Developer",
        "exp.job7.date": "August 2008 – December 2009",
        "exp.job7.d1": "Core system development for the corporate IBS (Insurance Brazil) solution",

        "exp.job8.title": "Java Developer",
        "exp.job8.date": "2007 – 2008",
        "exp.job8.d1": "ERP Prometheus (Totvs) implementation, project analysis, and departmental solution delivery",

        // Skills
        "skills.title": "Skills",
        "skills.cat1": "Languages & Ecosystems",
        "skills.cat2": "Architecture & Engineering",
        "skills.cat2.1": "Critical Systems",
        "skills.cat2.4": "Resilience & Scalability",
        "skills.cat3": "Operational AI",
        "skills.cat3.3": "AI Automation",
        "skills.cat3.4": "AI applied to management",
        "skills.cat4": "Tools & Integration",
        "skills.cat4.1": "n8n (Orchestration)",
        "skills.cat5": "Methodologies",
        "skills.cat6": "Leadership",
        "skills.cat6.1": "Team Management",
        "skills.cat6.2": "Technical/Business Mediation",
        "skills.cat6.3": "Decision-Making",
        "skills.cat6.4": "People Development",

        // Education
        "edu.title": "Education",
        "edu.degree": "Bachelor in Information Systems",
        "edu.languages": "Languages",
        "edu.lang1": "Portuguese",
        "edu.lang1.level": "Native",
        "edu.lang2": "English",
        "edu.lang2.level": "Intermediate",

        // Contact
        "contact.title": "Contact",

        // Footer
        "footer": "&copy; 2025 Flavio Henrique Nahon Otoni. All rights reserved."
    }
};
