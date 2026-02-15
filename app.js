/* =========================================================
   Remodelação.Pt - app.js
   What to edit:
   1) i18n strings in I18N (add/adjust keys)
   2) Contact details (phone/email/address) in index.html/footer + JSON-LD base
   3) SEO titles/descriptions per language in SEO_META
   ========================================================= */

const $ = (sel, root = document) => root.querySelector(sel);
const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

const LANGS = ["pt", "en", "es", "fr"];

const SEO_META = {
  pt: {
    langTag: "pt-PT",
    title: "Especialistas em Remodelações e Pintura — Lisboa e Santarém",
    description:
      "Mais de 30 anos de experiência em renovação de interiores, fachadas e telhados. Rigor, qualidade e prazos cumpridos. Contacte-nos para um orçamento.",
    ogTitle: "Remodelações e Obras em Lisboa e Santarém — Remodelação.Pt",
    ogDescription: "Transformamos a sua casa com rigor e qualidade. Peça o seu orçamento gratuito!"
  },
  en: {
    langTag: "en-GB",
    title: "Renovations Lisbon & Santarém — Painting, Roofing & Works | Free Quote",
    description:
      "Transform your home with Remodelação.Pt. Expert interior/exterior painting, roofing, and full renovations. Serving Lisbon & Santarém. Get your free quote today!",
    ogTitle: "Renovations & Painting in Lisbon and Santarém — Remodelação.Pt",
    ogDescription: "We transform homes with quality and professionalism. Request a free quote!"
  },
  es: {
    langTag: "es-ES",
    title: "Reformas en Lisboa y Santarém — Pintura, Tejados y Obras | Presupuesto Gratis",
    description:
      "Renueva tu hogar con confianza. Expertos en pintura, tejados y reformas integrales. Trabajamos en Lisboa y Santarém. ¡Pide tu presupuesto gratuito!",
    ogTitle: "Reformas y Pintura en Lisboa y Santarém — Remodelação.Pt",
    ogDescription: "Transformamos tu hogar con calidad y dedicación. ¡Pide presupuesto gratis!"
  },
  fr: {
    langTag: "fr-FR",
    title: "Rénovation Lisbonne et Santarém — Peinture, Toiture et Travaux | Devis Gratuit",
    description:
      "Transformez votre maison avec Remodelação.Pt. Experts en peinture, toiture et rénovation clé en main. À Lisbonne et Santarém. Demandez votre devis gratuit !",
    ogTitle: "Rénovation et Peinture à Lisbonne et Santarém — Remodelação.Pt",
    ogDescription: "Nous transformons votre maison avec qualité et rigueur. Demandez un devis gratuit !"
  }
};

const I18N = {
  // ---- Header / Nav
  skipToContent: {
    pt: "Saltar para o conteúdo",
    en: "Skip to content",
    es: "Saltar al contenido",
    fr: "Aller au contenu"
  },
  openMenu: { pt: "Abrir menu", en: "Open menu", es: "Abrir menú", fr: "Ouvrir le menu" },
  navServices: { pt: "Serviços", en: "Services", es: "Servicios", fr: "Services" },
  navAbout: { pt: "Sobre Nós", en: "About", es: "Sobre nosotros", fr: "À propos" },
  navTestimonials: { pt: "Testemunhos", en: "Testimonials", es: "Reseñas", fr: "Avis" },
  navFaq: { pt: "FAQ", en: "FAQ", es: "FAQ", fr: "FAQ" },
  navContacts: { pt: "Contactos", en: "Contact", es: "Contacto", fr: "Contact" },

  // ---- Hero
  heroLine1a: { pt: "Transformamos a", en: "We transform your", es: "Transformamos tu", fr: "Nous transformons votre" },
  heroLine1b: { pt: "sua Casa", en: "Home", es: "Casa", fr: "Maison" },
  heroComma: { pt: ",", en: ",", es: ",", fr: "," },
  heroLine2a: { pt: "Valorizamos o seu", en: "We elevate your", es: "Revalorizamos tu", fr: "Nous valorisons votre" },
  heroLine2b: { pt: "Sonho", en: "Dream", es: "Sueño", fr: "Rêve" },
  heroDot: { pt: ".", en: ".", es: ".", fr: "." },
  heroSub: {
    pt: "Serviço de remodelação profissional com qualidade, rigor e dedicação. Da pintura à renovação completa, somos o seu parceiro de confiança.",
    en: "Professional renovation services with quality, precision and care. From painting to full renovations, we’re your trusted partner.",
    es: "Servicios profesionales de reforma con calidad, precisión y dedicación. De la pintura a la reforma integral, somos tu socio de confianza.",
    fr: "Services de rénovation professionnels avec qualité, rigueur et attention. De la peinture à la rénovation complète, nous sommes votre partenaire de confiance."
  },
  ctaQuote: { pt: "Pedir Orçamento", en: "Request a Quote", es: "Pedir Presupuesto", fr: "Demander un Devis" },
  ctaProjects: { pt: "Ver Projetos", en: "View Projects", es: "Ver Proyectos", fr: "Voir les Projets" },
  heroBadge1: { pt: "Lisboa & Santarém", en: "Lisbon & Santarém", es: "Lisboa y Santarém", fr: "Lisbonne & Santarém" },
  heroBadge2: { pt: "Orçamentos Transparentes", en: "Transparent Quotes", es: "Presupuestos Transparentes", fr: "Devis Transparents" },
  heroBadge3: { pt: "Garantia em Serviços", en: "Service Warranty", es: "Garantía", fr: "Garantie" },
  heroChip: {
    pt: "Disponível para novos projetos",
    en: "Available for new projects",
    es: "Disponible para nuevos proyectos",
    fr: "Disponible pour de nouveaux projets"
  },

  // ---- Services
  servicesTitle: { pt: "Nossos Serviços", en: "Our Services", es: "Nuestros Servicios", fr: "Nos Services" },
  svcPaintTitle: { pt: "Pintura", en: "Painting", es: "Pintura", fr: "Peinture" },
  svcPaintText: {
    pt: "Pintura interior e exterior com acabamentos de alta qualidade e durabilidade.",
    en: "Interior and exterior painting with high-quality, long-lasting finishes.",
    es: "Pintura interior y exterior con acabados de alta calidad e durabilidad.",
    fr: "Peinture intérieure et extérieure avec des finitions durables et de haute qualité."
  },
  svcRoofTitle: { pt: "Remodelação de Telhados", en: "Roof Renovation", es: "Reforma de Tejados", fr: "Rénovation de Toiture" },
  svcRoofText: {
    pt: "Reparação, substituição e manutenção de telhados para garantir a proteção da sua casa.",
    en: "Roof repair, replacement and maintenance to protect your home.",
    es: "Reparación, sustitución y mantenimiento de tejados para proteger tu hogar.",
    fr: "Réparation, remplacement et entretien de toiture pour protéger votre maison."
  },
  svcMaintTitle: { pt: "Manutenção", en: "Maintenance", es: "Mantenimiento", fr: "Maintenance" },
  svcMaintText: {
    pt: "Serviços gerais de manutenção preventiva e corretiva para todos os espaços.",
    en: "General preventive and corrective maintenance for all spaces.",
    es: "Servicios generales de mantenimiento preventivo y correctivo para todo tipo de espacios.",
    fr: "Services généraux de maintenance préventive et corrective pour tous les espaces."
  },
  svcInstallTitle: { pt: "Instalação", en: "Installation", es: "Instalación", fr: "Installation" },
  svcInstallText: {
    pt: "Instalação de pavimentos, loiças, portas e equipamentos sanitários.",
    en: "Installation of flooring, fixtures, doors and sanitary equipment.",
    es: "Instalación de suelos, sanitarios, puertas y equipamiento.",
    fr: "Installation de sols, équipements, portes et sanitaires."
  },

  // ---- Projects
  projectsTitle: { pt: "Galeria de Projetos", en: "Project Gallery", es: "Galería de Proyectos", fr: "Galerie de Projets" },
  projectsSub: {
    pt: "Veja alguns dos nossos trabalhos realizados",
    en: "See some of our completed work",
    es: "Mira algunos de nuestros trabajos",
    fr: "Découvrez quelques-unes de nos réalisations"
  },
  proj1: { pt: "Pintura Interior", en: "Interior Painting", es: "Pintura Interior", fr: "Peinture Intérieure" },
  proj2: { pt: "Remodelação de Telhado", en: "Roof Renovation", es: "Reforma de Tejado", fr: "Rénovation de Toiture" },
  proj3: { pt: "Renovação de Cozinha", en: "Kitchen Renovation", es: "Reforma de Cocina", fr: "Rénovation de Cuisine" },
  proj4: { pt: "Pintura de Sala", en: "Living Room Painting", es: "Pintura de Salón", fr: "Peinture de Salon" },
  proj5: { pt: "Renovação Casa de Banho", en: "Bathroom Renovation", es: "Reforma de Baño", fr: "Rénovation de Salle de Bain" },
  proj6: { pt: "Pintura Exterior", en: "Exterior Painting", es: "Pintura Exterior", fr: "Peinture Extérieure" },

  // ---- About
  aboutImageLabel: { pt: "Sobre Nós", en: "About", es: "Sobre nosotros", fr: "À propos" },
  aboutYears: { pt: "Anos de Experiência", en: "Years of Experience", es: "Años de Experiencia", fr: "Années d’Expérience" },
  aboutTitle: { pt: "Excelência em cada detalhe", en: "Excellence in every detail", es: "Excelencia en cada detalle", fr: "L’excellence dans chaque détail" },
  aboutP1: {
    pt: "Na Remodelação.Pt, acreditamos que cada casa conta uma história. A nossa missão é ajudar a escrever o próximo capítulo da sua, com espaços renovados que combinam funcionalidade e estética.",
    en: "At Remodelação.Pt, we believe every home tells a story. Our mission is to help you write the next chapter with renewed spaces that balance function and design.",
    es: "En Remodelação.Pt creemos que cada hogar cuenta una historia. Nuestra misión es ayudarte a escribir el siguiente capítulo com espaços renovados que combinan funcionalidade e estética.",
    fr: "Chez Remodelação.Pt, nous pensons que chaque maison raconte une histoire. Notre mission est d’écrire le prochain chapitre avec des espaces rénovés, à la fois fonctionnels et esthétiques."
  },
  aboutP2: {
    pt: "Com uma equipa multidisciplinar e experiente, garantimos o cumprimento de prazos e orçamentos, utilizando materiais de primeira qualidade e técnicas modernas de construção.",
    en: "With an experienced, multi-disciplinary team, we keep timelines and budgets on track using quality materials and modern construction methods.",
    es: "Con un equipo multidisciplinar y con experiencia, cumplimos plazos y presupuestos usando materiais de primeira qualidade e técnicas modernas.",
    fr: "Avec une équipe expérimentée et pluridisciplinaire, nous respectons délais et budgets, avec des matériaux de qualité et des techniques modernes."
  },
  aboutB1: { pt: "Equipa Certificada e Especializada", en: "Certified, Specialized Team", es: "Equipo Certificado y Especializado", fr: "Équipe Certifiée et Spécialisée" },
  aboutB2: { pt: "Materiais de Alta Qualidade", en: "High-Quality Materials", es: "Materiales de Alta Calidad", fr: "Matériaux de Haute Qualité" },
  aboutB3: { pt: "Garantia em todos os serviços", en: "Warranty on all services", es: "Garantía en todos los servicios", fr: "Garantie sur tous les services" },
  aboutB4: { pt: "Orçamentos Transparentes", en: "Transparent Quotes", es: "Presupuestos Transparentes", fr: "Devis Transparents" },

  // ---- About (Founder)
  founderName: { pt: "Valdinelio B. Oliveira", en: "Valdinelio B. Oliveira", es: "Valdinelio B. Oliveira", fr: "Valdinelio B. Oliveira" },
  founderRole: { pt: "Fundador & Especialista", en: "Founder & Specialist", es: "Fundador y Especialista", fr: "Fondateur et Spécialiste" },
  founderBio1: {
    pt: "Sou Valdinelio B. Oliveira, profissional da construção civil com mais de 30 anos de experiência. Filho e neto de artesãos, aprendi ainda jovem a importância do trabalho feito com dedicação e qualidade. No Brasil formei-me pelo SENAI e, desde então, venho me especializando em remodelações, telhados e pintura em fachadas.",
    en: "I am Valdinelio B. Oliveira, a construction professional with over 30 years of experience. Son and grandson of artisans, I learned early on the importance of dedication and quality. I graduated from SENAI in Brazil and have since specialized in renovations, roofing, and façade painting.",
    es: "Soy Valdinelio B. Oliveira, profesional de la construcción con más de 30 años de experiencia. Hijo y nieto de artesanos, aprendí joven la importancia del trabajo con dedicación. Me formé en el SENAI en Brasil y me especializo en reformas, tejados y fachadas.",
    fr: "Je suis Valdinelio B. Oliveira, professionnel du bâtiment avec plus de 30 ans d'expérience. Fils et petit-fils d'artisans, j'ai appris très tôt l'importance du travail bien fait. Diplômé du SENAI au Brésil, je me suis spécialisé dans la rénovation, les toitures et la peinture de façades."
  },
  founderBio2: {
    pt: "Desde 2022, atuo em Portugal, oferecendo serviços com rapidez, qualidade e profissionalismo, sempre com foco na satisfação do cliente e na excelência em cada projeto.",
    en: "Since 2022, I have been working in Portugal, offering fast, high-quality, and professional services, always focused on customer satisfaction and excellence in every project.",
    es: "Desde 2022 opero en Portugal, ofreciendo servicios rápidos, de calidad y profesionales, siempre enfocado en la satisfacción del cliente y la excelencia.",
    fr: "Depuis 2022, je travaille au Portugal, offrant des services rapides, de qualité et professionnels, toujours axés sur la satisfaction du client et l'excellence de chaque projet."
  },

  // ---- Contact
  contactTitle: { pt: "Fale Connosco", en: "Contact Us", es: "Contáctanos", fr: "Contactez-nous" },
  contactSub: {
    pt: "Estamos prontos para ouvir as suas ideias e transformá-las em realidade. Entre em contacto hoje mesmo.",
    en: "We’re ready to hear your ideas and bring them to life. Get in touch today.",
    es: "Estamos listos para escuchar tus ideas y convertirlas en realidad. Contáctanos hoy.",
    fr: "Nous sommes prêts à écouter vos idées et à les concrétiser. Contactez-nous dès aujourd’hui."
  },
  contactEmailTitle: { pt: "Email", en: "Email", es: "Email", fr: "Email" },
  contactPhoneTitle: { pt: "Telefone", en: "Phone", es: "Teléfono", fr: "Téléphone" },
  contactWhatsappTitle: { pt: "WhatsApp", en: "WhatsApp", es: "WhatsApp", fr: "WhatsApp" },
  contactWhatsappCta: { pt: "Enviar Mensagem", en: "Send Message", es: "Enviar Mensaje", fr: "Envoyer un Message" },

  // ---- Testimonials
  testimonialsTitle: { pt: "O que dizem os nossos clientes", en: "What our clients say", es: "Lo que dicen nuestros clientes", fr: "Ce que disent nos clients" },
  testimonialsSub: {
    pt: "Avaliações reais de clientes satisfeitos com o nosso trabalho.",
    en: "Real feedback from clients who trusted our work.",
    es: "Opiniones reales de clientes satisfechos con nuestro trabajo.",
    fr: "Des avis réels de clients satisfaits de notre travail."
  },
  t1: {
    pt: "Excelente trabalho na renovação da minha cozinha. Profissionais pontuais e muito cuidadosos com os detalhes. Recomendo!",
    en: "Excellent work renovating my kitchen. On time and very detail-oriented. Highly recommended!",
    es: "Excelente trabajo en la reforma de mi cocina. Puntuales e muito cuidadosos com os detalhes. ¡Recomendable!",
    fr: "Excellent travail sur la rénovation de ma cuisine. Ponctuels et très attentifs aux détails. Je recommande !"
  },
  t1name: { pt: "João Silva", en: "João Silva", es: "João Silva", fr: "João Silva" },
  t1role: { pt: "Proprietário", en: "Homeowner", es: "Propietario", fr: "Propriétaire" },

  t2: {
    pt: "Como arquiteta, exijo o máximo rigor. A equipa da Remodelação.Pt superou as expectativas na execução do projeto.",
    en: "As an architect, I demand precision. Remodelação.Pt exceeded expectations in execution.",
    es: "Como arquitecta, exijo el máximo rigor. El equipo superó las expectativas en la ejecución.",
    fr: "En tant qu’architecte, j’exige de la rigueur. L’équipe a dépassé les attentes lors de l’exécution."
  },
  t2name: { pt: "Maria Santos", en: "Maria Santos", es: "Maria Santos", fr: "Maria Santos" },
  t2role: { pt: "Arquiteta", en: "Architect", es: "Arquitecta", fr: "Architecte" },

  t3: {
    pt: "Rápidos, eficientes e com um preço muito competitivo. A remodelação do telhado ficou impecável.",
    en: "Fast, efficient, and very competitively priced. The roof renovation was flawless.",
    es: "Rápidos, eficientes y com un precio muy competitivo. La reforma del tejado quedó impecable.",
    fr: "Rapides, efficaces et à un prix très compétitif. La rénovation de la toiture est impeccable."
  },
  t3name: { pt: "Pedro Ferreira", en: "Pedro Ferreira", es: "Pedro Ferreira", fr: "Pedro Ferreira" },
  t3role: { pt: "Gestor de Imóveis", en: "Property Manager", es: "Gestor Inmobiliario", fr: "Gestionnaire Immobilier" },

  // ---- FAQ
  faqTitle: { pt: "Perguntas Frequentes", en: "Frequently Asked Questions", es: "Preguntas Frecuentes", fr: "Questions Fréquentes" },
  faqSub: {
    pt: "Esclareça as suas dúvidas sobre os nossos serviços",
    en: "Get clear answers about our services",
    es: "Aclara tus dudas sobre nuestros servicios",
    fr: "Clarifiez vos questions sur nos services"
  },

  faq1q: { pt: "Fazem orçamentos gratuitos?", en: "Do you offer free quotes?", es: "¿Ofrecen presupuestos gratuitos?", fr: "Proposez-vous des devis gratuits ?" },
  faq1a: {
    pt: "Sim. Fazemos uma avaliação inicial e apresentamos um orçamento claro, com descrição de trabalhos, materiais e prazos. Em Lisboa e região de Santarém, conseguimos agendar visita com rapidez.",
    en: "Yes. We assess your needs and provide a clear quote with scope, materials and timelines. In Lisbon and the Santarém region we can schedule quickly.",
    es: "Sí. Evaluamos y entregamos un presupuesto claro con trabajos, materiales e plazos. Em Lisboa e la región de Santarém agendamos visitas com rapidez.",
    fr: "Oui. Nous évaluons e remettons un devis clair (travaux, matériaux, délais). À Lisbonne et dans la région de Santarém, nous planifions rapidement."
  },

  faq2q: { pt: "Em que zonas do país atuam?", en: "Which areas do you serve?", es: "¿En qué zonas trabajan?", fr: "Dans quelles zones intervenez-vous ?" },
  faq2a: {
    pt: "Trabalhamos principalmente em Lisboa e concelhos próximos, e também na região de Santarém (ex.: Santarém, Cartaxo, Rio Maior, Almeirim, Benavente). Para outros locais, analisamos caso a caso.",
    en: "We mainly work in Lisbon and nearby municipalities, and also across the Santarém region (e.g., Santarém, Cartaxo, Rio Maior, Almeirim, Benavente). Other areas upon request.",
    es: "Trabajamos principalmente en Lisboa y municipios cercanos, y también en la región de Santarém (p. ej., Santarém, Cartaxo, Rio Maior, Almeirim, Benavente). Otras zonas bajo consulta.",
    fr: "Nous intervenons surtout à Lisbonne et alentours, ainsi que dans la région de Santarém (ex. Santarém, Cartaxo, Rio Maior, Almeirim, Benavente). Autres zones sur demande."
  },

  faq3q: { pt: "Os trabalhos têm garantia?", en: "Do you provide a warranty?", es: "¿Los trabajos tienen garantía?", fr: "Y a-t-il une garantie ?" },
  faq3a: {
    pt: "Sim. Fornecemos garantia nos serviços executados, com condições definidas no orçamento/contrato (conforme o tipo de intervenção e materiais aplicados).",
    en: "Yes. We provide a warranty for executed services, with conditions defined in the quote/contract depending on the work type and materials used.",
    es: "Sí. Ofrecemos garantía según el tipo de intervenção e materiais, definida em o orçamento/contrato.",
    fr: "Oui. Nous proposons une garantie, selon le type d’intervention et les matériaux, définie dans le devis/contrat."
  },

  faq4q: { pt: "Fazem projetos “chave-na-mão”?", en: "Do you offer turnkey projects?", es: "¿Hacen proyectos “llave en mano”?", fr: "Proposez-vous des projets clé en main ?" },
  faq4a: {
    pt: "Sim. Gerimos o processo de ponta a ponta: planeamento, demolições, eletricidade/canalização (quando aplicável), revestimentos, pintura e acabamentos. Ideal para remodelação completa em Lisboa ou Santarém.",
    en: "Yes. We manage everything end-to-end: planning, demolition, electrical/plumbing (when applicable), finishes, painting, and final details—ideal for full renovations in Lisbon or Santarém.",
    es: "Sí. Gestionamos todo: planificación, demoliciones, electricidad/fontanería (si aplica), revestimientos, pintura y acabados. Ideal para reformas completas en Lisboa o Santarém.",
    fr: "Oui. Nous gérons tout : planification, démolition, électricité/plomberie (si nécessaire), finitions, peinture et détails—idéal pour une rénovation complète à Lisbonne ou Santarém."
  },

  faq5q: { pt: "Quanto tempo demora uma remodelação?", en: "How long does a renovation take?", es: "¿Cuánto dura una reforma?", fr: "Combien de temps dure une rénovation ?" },
  faq5a: {
    pt: "Depende da dimensão e do estado do imóvel. Uma pintura pode demorar dias; cozinhas e casas de banho podem levar algumas semanas. Após visita técnica, indicamos um cronograma realista com marcos de execução.",
    en: "It depends on size and property condition. Painting may take days; kitchens and bathrooms can take a few weeks. After a site visit we provide a realistic timeline with milestones.",
    es: "Depende del tamaño y del estado del inmueble. Una pintura puede durar días; cocinas and baños pueden tardar semanas. Tras la visita, damos un cronograma realista.",
    fr: "Cela dépend de la taille et de l’état du bien. Une peinture peut prendre quelques jours ; cuisine/salle de bain, quelques semaines. Après visite, nous fournissons un planning réaliste."
  },

  faq6q: { pt: "Trabalham com materiais fornecidos pelo cliente?", en: "Can I supply my own materials?", es: "¿Puedo aportar mis materiales?", fr: "Puis-je fournir mes matériaux ?" },
  faq6a: {
    pt: "Sim, quando faz sentido. Também podemos propor materiais com boa relação qualidade/preço e garantir compatibilidades técnicas (colas, primários, impermeabilizações, etc.), evitando problemas futuros.",
    en: "Yes, when appropriate. We can also recommend good-value materials and ensure technical compatibility (primers, adhesives, waterproofing, etc.) to prevent future issues.",
    es: "Sí, quando sea adequado. También recomendamos materiais com boa relação qualidade/preço e verificamos compatibilidades técnicas para evitar problemas.",
    fr: "Oui, si c’est pertinent. Nous pouvons aussi recommander des matériaux au bon rapport qualité/prix et assurer les compatibilités techniques pour éviter des soucis."
  },

  faq7q: { pt: "Fazem remodelação de casa de banho em Lisboa e Santarém?", en: "Do you renovate bathrooms in Lisbon and Santarém?", es: "¿Reforman baños en Lisboa y Santarém?", fr: "Rénovez-vous des salles de bain à Lisbonne et Santarém ?" },
  faq7a: {
    pt: "Sim. Fazemos renovação completa: substituição de loiças, bases/banheiras, impermeabilização, revestimentos, móveis e iluminação. Em Lisboa e Santarém, adaptamos o planeamento para reduzir ao mínimo o tempo sem uso.",
    en: "Yes. We handle full bathroom renovations: fixtures, shower/bath, waterproofing, tiling, furniture and lighting. We plan to minimize downtime in Lisbon and Santarém.",
    es: "Sí. Reforma completa: sanitarios, ducha/bañera, impermeabilización, alicatado, muebles e iluminación. Planificamos para reduzir el tempo sem uso.",
    fr: "Oui. Rénovation complète : sanitaires, douche/baignoire, étanchéité, carrelage, meubles et éclairage. Nous planifions pour limiter l’indisponibilité."
  },

  faq8q: { pt: "Como garantem um orçamento transparente?", en: "How do you ensure transparent pricing?", es: "¿Cómo garantizan un presupuesto transparente?", fr: "Comment assurez-vous un devis transparent ?" },
  faq8a: {
    pt: "O orçamento inclui medições/quantidades, lista de tarefas por fase, marcas ou gamas sugeridas, e condições de pagamento. Assim, consegue comparar propostas e evitar “extras” inesperados.",
    en: "Quotes include measurements/quantities, task lists by phase, suggested brands/ranges, and payment terms—so you can compare offers and avoid surprise extras.",
    es: "Incluimos mediciones/cantidades, tarefas por fases, marcas/gamas sugeridas e condições de pagamento para evitar extras inesperados.",
    fr: "Nous incluons métrés/quantités, tâches par phase, marques/gammes conseillées et conditions de paiement afin d’éviter les surprises."
  },

  faq9q: { pt: "Fazem pintura exterior e tratamento de fachadas?", en: "Do you do exterior painting and façade treatments?", es: "¿Hacen pintura exterior y tratamiento de fachadas?", fr: "Faites-vous la peinture extérieure et le traitement de façades ?" },
  faq9a: {
    pt: "Sim. Avaliamos fissuras, humidades e o estado do suporte, aplicando primários e tintas adequadas ao clima de Lisboa e ao interior da região de Santarém, garantindo durabilidade e acabamento.",
    en: "Yes. We check cracks, moisture and substrate condition, then apply suitable primers/paints for Lisbon’s coastal conditions and the inland Santarém region to ensure durability.",
    es: "Sí. Evaluamos fisuras, humedades e el soporte, aplicando imprimaciones y pinturas adecuadas al clima de Lisboa y al interior de Santarém para máxima durabilidad.",
    fr: "Oui. Nous évaluons fissures, humidité et support, puis appliquons primaires et peintures adaptées au climat de Lisbonne et à l’intérieur de Santarém pour une meilleure durabilité."
  },

  faq10q: { pt: "Emitem fatura e ajudam com documentação?", en: "Do you issue invoices and provide documentation?", es: "¿Emiten factura y documentación?", fr: "Émettez-vous une facture et fournissez-vous la documentation ?" },
  faq10a: {
    pt: "Sim. Emitimos fatura e organizamos a documentação do serviço (orçamento, aditamentos e comprovativos). Isso facilita garantias e registos do imóvel.",
    en: "Yes. We issue invoices and keep service documentation (quote, add-ons, receipts), making warranties and property records easier.",
    es: "Sí. Emitimos factura e organizamos la documentação (presupuesto, cambios e comprovantes) para facilitar garantias e registros.",
    fr: "Oui. Nous émettons une facture et organisons la documentation (devis, avenants, justificatifs) pour faciliter garanties et dossiers."
  },

  faq11q: { pt: "Como posso pedir um orçamento rapidamente?", en: "How can I request a quote quickly?", es: "¿Cómo pedir presupuesto rápido?", fr: "Comment demander un devis rapidement ?" },
  faq11a: {
    pt: "Pode contactar por email, telefone ou WhatsApp. Para acelerar, envie fotos, localização (Lisboa/Santarém), tipo de obra e prazo pretendido. Respondemos com perguntas objetivas e agendamos visita se necessário.",
    en: "Contact us by email, phone or WhatsApp. To speed things up, send photos, location (Lisbon/Santarém), scope and target date. We’ll reply with clear questions and schedule a visit if needed.",
    es: "Contacta por email, teléfono o WhatsApp. Para agilizar, envía fotos, ubicación (Lisboa/Santarém), tipo de obra e fecha objetivo. Respondemos e agendamos visita si hace falta.",
    fr: "Contactez-nous par email, téléphone ou WhatsApp. Pour aller plus vite, envoyez photos, localisation (Lisbonne/Santarém), type de travaux et délai souhaité. Nous répondons et planifions une visite si nécessaire."
  },

  // ---- Footer
  footerAbout: {
    pt: "Transformamos espaços, construímos sonhos. A sua empresa de confiança para remodelações.",
    en: "We transform spaces and build dreams. Your trusted renovation company.",
    es: "Transformamos espaços, construimos sonhos. Tu empresa de confiança para reformas.",
    fr: "Nous transformons les espaces et construisons des rêves. Votre entreprise de confiance pour la rénovation."
  },
  footerQuick: { pt: "Links Rápidos", en: "Quick Links", es: "Enlaces Rápidos", fr: "Liens Rapides" },
  footerServices: { pt: "Serviços", en: "Services", es: "Servicios", fr: "Services" },
  footerInfo: { pt: "Informações", en: "Information", es: "Información", fr: "Informations" },
  rights: { pt: "Todos os direitos reservados.", en: "All rights reserved.", es: "Todos los derechos reservados.", fr: "Tous droits réservés." },
  devCredit: { pt: " | Desenvolvido por ", en: " | Developed by ", es: " | Desarrollado por ", fr: " | Développé par " }
};

function getLangFromUrl() {
  const url = new URL(window.location.href);
  const q = (url.searchParams.get("lang") || "").toLowerCase();
  return LANGS.includes(q) ? q : null;
}

function setUrlLang(lang) {
  const url = new URL(window.location.href);
  url.searchParams.set("lang", lang);
  window.history.replaceState({}, "", url.toString());
}

function setMeta(lang) {
  const meta = SEO_META[lang] || SEO_META.pt;

  // NOTE: this lang attribute can be used by CSS selectors (html[lang^="..."]) for small layout overrides.
  document.documentElement.lang = meta.langTag;

  document.title = meta.title;

  const desc = $('meta[name="description"]');
  if (desc) desc.setAttribute("content", meta.description);

  const ogTitle = $('meta[property="og:title"]');
  if (ogTitle) ogTitle.setAttribute("content", meta.ogTitle);

  const ogDesc = $('meta[property="og:description"]');
  if (ogDesc) ogDesc.setAttribute("content", meta.ogDescription);

  // Update JSON-LD base language (optional)
  const base = $("#jsonld-base");
  if (base) {
    try {
      const parsed = JSON.parse(base.textContent);
      const website = parsed?.["@graph"]?.find(x => x["@type"] === "WebSite");
      if (website) website.inLanguage = meta.langTag;
      base.textContent = JSON.stringify(parsed, null, 2);
    } catch {
      // keep as-is
    }
  }
}

function applyI18n(lang) {
  $$("[data-i18n]").forEach((el) => {
    const key = el.getAttribute("data-i18n");
    const entry = I18N[key];
    if (!entry) return;

    const value = entry[lang] ?? entry.pt;

    // NEW: if element has an inner span for text, update only that (keeps icons/markup)
    const slot = el.querySelector?.(".i18n-text");
    if (slot) {
      slot.textContent = value;
      return;
    }

    // Keep it simple: replace textContent (safe, no HTML injection)
    el.textContent = value;
    // Mobile: Update current label
    const mobileLabel = $(".lang-current-label");
    if (mobileLabel) mobileLabel.textContent = lang.toUpperCase();

    // Highlighting for mobile dropdown options
    $$(".lang-option").forEach(opt => {
      const is = opt.dataset.lang === lang;
      opt.classList.toggle("is-active", is);
    });

  });

  // Update language buttons state
  $$(".lang-btn").forEach((b) => {
    const is = b.dataset.lang === lang;
    b.classList.toggle("is-active", is);
    if (is) b.setAttribute("aria-current", "true");
    else b.removeAttribute("aria-current");
  });
}

function buildFaqJsonLd(lang) {
  // Builds FAQPage from current translated FAQ items in DOM (SEO-friendly).
  const faqItems = $$("#faq details.faq-item").map((d) => {
    const q = $(".faq-q", d)?.textContent?.trim();
    const a = $(".faq-a", d)?.textContent?.trim();
    if (!q || !a) return null;
    return {
      "@type": "Question",
      "name": q,
      "acceptedAnswer": { "@type": "Answer", "text": a }
    };
  }).filter(Boolean);

  return {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "inLanguage": (SEO_META[lang]?.langTag ?? "pt-PT"),
    "mainEntity": faqItems
  };
}

function upsertFaqJsonLd(lang) {
  const id = "jsonld-faq";
  let node = document.getElementById(id);
  if (!node) {
    node = document.createElement("script");
    node.type = "application/ld+json";
    node.id = id;
    document.body.appendChild(node);
  }
  node.textContent = JSON.stringify(buildFaqJsonLd(lang), null, 2);
}

function setupNav() {
  const toggle = $(".nav-toggle");
  const panel = $("#navPanel");
  if (!toggle || !panel) return;

  const setOpen = (open) => {
    document.body.classList.toggle("nav-open", open);
    toggle.setAttribute("aria-expanded", String(open));
  };

  toggle.addEventListener("click", () => setOpen(!document.body.classList.contains("nav-open")));

  // Close on link click
  $$("#navPanel a").forEach((a) => a.addEventListener("click", () => setOpen(false)));

  // Close on outside click
  document.addEventListener("click", (e) => {
    if (!document.body.classList.contains("nav-open")) return;
    const t = e.target;
    if (t === toggle || toggle.contains(t)) return;
    if (t === panel || panel.contains(t)) return;
    setOpen(false);
  });

  // Close on ESC
  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") setOpen(false);
  });
}

function setupReveal() {
  const items = $$(".reveal");
  if (!items.length) return;

  // If reduced motion, mark visible immediately
  const reduce = window.matchMedia && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  if (reduce) {
    items.forEach((el) => el.classList.add("is-visible"));
    return;
  }

  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((en) => {
        if (!en.isIntersecting) return;
        en.target.classList.add("is-visible");
        io.unobserve(en.target);
      });
    },
    { root: null, threshold: 0.14 }
  );

  items.forEach((el) => io.observe(el));
}

function setupFaqBehavior() {
  // Optional UX: keep only one item open at a time
  const root = $("[data-faq]");
  if (!root) return;

  root.addEventListener("toggle", (e) => {
    const opened = e.target;
    if (!(opened instanceof HTMLDetailsElement)) return;
    if (!opened.open) return;

    $$(".faq-item", root).forEach((d) => {
      if (d !== opened) d.open = false;
    });
  }, true);
}

function setupLanguage() {
  /* Always default to PT unless URL or previous choice exists. */
  const initial =
    getLangFromUrl() ||
    (localStorage.getItem("lang") || "").toLowerCase() ||
    "pt";

  const lang = LANGS.includes(initial) ? initial : "pt";

  const setLang = (next) => {
    const safe = LANGS.includes(next) ? next : "pt";
    localStorage.setItem("lang", safe);
    setUrlLang(safe);

    setMeta(safe);
    applyI18n(safe);
    upsertFaqJsonLd(safe);
  };

  // Hook buttons
  $$(".lang-btn").forEach((b) => {
    b.addEventListener("click", () => setLang(b.dataset.lang));
  });

  // Mobile Dropdown Logic
  const mobileToggle = $(".lang-toggle-mobile");
  const mobileMenu = $(".lang-menu-mobile");
  const currentLabel = $(".lang-current-label");

  if (mobileToggle && mobileMenu) {
    // Toggle menu
    mobileToggle.addEventListener("click", (e) => {
      e.stopPropagation();
      const isOpen = mobileMenu.classList.contains("is-open");
      mobileMenu.classList.toggle("is-open", !isOpen);
      mobileToggle.setAttribute("aria-expanded", String(!isOpen));
    });

    // Close when clicking outside
    document.addEventListener("click", (e) => {
      if (!mobileToggle.contains(e.target) && !mobileMenu.contains(e.target)) {
        mobileMenu.classList.remove("is-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      }
    });

    // Handle option click
    $$(".lang-option", mobileMenu).forEach(opt => {
      opt.addEventListener("click", () => {
        const selectedLang = opt.dataset.lang;
        setLang(selectedLang);
        mobileMenu.classList.remove("is-open");
        mobileToggle.setAttribute("aria-expanded", "false");
      });
    });
  }

  setLang(lang);
}

function setupYear() {
  const y = $("#year");
  if (y) y.textContent = String(new Date().getFullYear());
}

document.addEventListener("DOMContentLoaded", () => {
  setupYear();
  setupNav();
  setupReveal();
  setupFaqBehavior();
  setupLanguage();
  setupLightbox();
  setupScrollToTop();

});

// ================= Features =================

function setupLightbox() {
  const lightbox = $("#lightbox");
  if (!lightbox) return;

  const img = $("#lightbox-img");
  const caption = $("#lightbox-caption");
  const close = $(".lightbox-close");
  const overlay = $(".lightbox-overlay");

  // Open lightbox on project click
  $$(".project-card").forEach(card => {
    card.addEventListener("click", (e) => {
      e.preventDefault();

      // Extract image URL from style "--img: url('...')"
      const style = card.getAttribute("style");
      const match = style.match(/url\(['"]?(.*?)['"]?\)/);
      const src = match ? match[1] : "";

      // Get title
      const title = card.querySelector(".project-label")?.textContent || "";

      if (src) {
        img.src = src;
        caption.textContent = title;
        lightbox.classList.add("is-open");
        lightbox.setAttribute("aria-hidden", "false");
        document.body.style.overflow = "hidden"; // lock scroll
      }
    });
  });

  // Close actions
  const closeLightbox = () => {
    lightbox.classList.remove("is-open");
    lightbox.setAttribute("aria-hidden", "true");
    document.body.style.overflow = "";
    setTimeout(() => { img.src = ""; }, 300); // clear after transition
  };

  close.addEventListener("click", closeLightbox);
  overlay.addEventListener("click", closeLightbox);

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape" && lightbox.classList.contains("is-open")) {
      closeLightbox();
    }
  });
}

function setupScrollToTop() {
  const btn = $("#scrollToTop");
  if (!btn) return;

  window.addEventListener("scroll", () => {
    if (window.scrollY > 400) {
      btn.classList.add("is-visible");
    } else {
      btn.classList.remove("is-visible");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
}


