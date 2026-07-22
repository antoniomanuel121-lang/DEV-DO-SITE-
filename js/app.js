const LANGUAGES = {
  pt: { flag:'🇵🇹', code:'PT', htmlLang:'pt-PT' },
  en: { flag:'🇬🇧', code:'EN', htmlLang:'en' },
  es: { flag:'🇪🇸', code:'ES', htmlLang:'es' },
  fr: { flag:'🇫🇷', code:'FR', htmlLang:'fr' }
};

const I18N = {
  pt: {
    title:'António Leite Representante | Representação Internacional',
    description:'Representação internacional de fabricantes de revestimentos, pavimentos e soluções para clientes profissionais e fornecimento por contentor.',
    brand:'António Leite Representante',
    nav:{home:'Início',partners:'Parceiros',why:'Porquê nós',contact:'Contactos',about:'Quem Somos'},
    hero:{eyebrow:'Representação internacional',title:'Representação internacional de revestimentos e pavimentos.',text:'Catálogos atualizados, fábricas organizadas e contacto comercial direto para clientes profissionais e encomendas por contentor.',primary:'Explorar parceiros',secondary:'Contacto comercial',mark:'Ceramics<br>Supply'},
    trust:{eyebrow:'Porque trabalham connosco',title:'Uma ligação simples entre clientes profissionais e fábricas internacionais.',card1:{title:'Catálogos sempre organizados',text:'Consulta rápida por fábrica e formato, com estrutura preparada para atualizações frequentes.'},card2:{title:'Foco em volume',text:'Informação pensada para clientes que compram por contentor e procuram clareza comercial.'},card3:{title:'Acompanhamento direto',text:'Apoio na análise de formatos, disponibilidade, prazos e contacto com os parceiros na origem.'},card4:{title:'Imagem profissional',text:'Uma plataforma limpa e credível para apresentar fábricas, materiais e documentação atualizada.'}},
    partners:{eyebrow:'Os nossos parceiros',title:'Fábricas representadas',winasa:{text:'Porcelânico · 5 formatos disponíveis'},keval:{text:'Pavimentos SPC · 33 coleções disponíveis'},sara:{text:'Materiais cerâmicos · 12 categorias disponíveis'},lamigloss:{text:'PVC Marble Sheets · Wall Panels · Louvers'},stoneworks:{text:'Pedra natural · Betão · Superfícies técnicas'},enter:{catalogs:'Entrar nos catálogos →',collections:'Entrar nas coleções →'}},
    contact:{eyebrow:'Contacto comercial',title:'Precisa de informação para uma encomenda?',text:'Entre em contacto para analisar catálogos, formatos, quantidades, prazos ou condições de fornecimento por contentor.',emailLabel:'Email',note:'Responderemos com a maior brevidade possível.'},
    about:{eyebrow:'Quem Somos',title:'Representação internacional para profissionais do setor da construção.',text1:'A António Leite Representante trabalha com fabricantes internacionais de revestimentos cerâmicos, porcelânicos e pavimentos SPC, disponibilizando soluções para distribuidores, importadores e profissionais do setor da construção.',text2:'Trabalhamos com parceiros selecionados para oferecer coleções que combinam qualidade, design e inovação, respondendo às exigências de projetos residenciais, comerciais e de grande dimensão.',stat1:'Fabricantes Internacionais',stat2:'Coleções Disponíveis',stat3:'Formatos e Acabamentos',stat4:'Distribuição Profissional'},
    factory:{back:'← Voltar',available:'disponíveis',collectionSingle:'1 coleção',collectionPlural:'{n} coleções',seeCollections:'Ver coleções →',seeCatalog:'Ver catálogo →',seeGallery:'Ver galeria →',prepareCatalogs:'Preparado para catálogos →',prepareGallery:'Preparar galeria →',availableInFormat:'{count} disponíveis neste formato.',emptySaraTitle:'Coleções em preparação',emptySaraText:'Este formato já está estruturado. As miniaturas reais e os PDFs serão adicionados assim que os catálogos completos forem recebidos.',emptyKevalTitle:'Galeria em preparação',emptyKevalText:'Categoria criada sem placeholders. As imagens finais serão integradas manualmente, mantendo o padrão premium aprovado na Winasa e na Sara Exim.',mainImage:'Imagem principal',viewImage:'Ver imagem →',luxeText:'Catálogo especial em PDF da coleção Luxe.',galleryText:'Galeria com {count} imagens reais desta coleção.',futureGalleryText:'Coleção aberta. A galeria será preenchida com imagens reais quando recebermos o bloco completo desta coleção.',catalog:'Catálogo'},
    factoryMeta:{winasa:{title:'Porcelânico por formato.',description:'Catálogos organizados para consulta rápida de clientes profissionais. Escolha um formato e abra o PDF correspondente sem sair do site.',introEyebrow:'Catálogos Winasa',introTitle:'Formatos disponíveis',introDescription:'Escolha primeiro o formato. Depois consulte as coleções disponíveis dentro de cada formato.'},sara:{title:'Categorias por formato.',description:'Estrutura preparada para consultar as coleções oficiais e os respetivos catálogos PDF, mantendo a mesma organização premium da Winasa.',introEyebrow:'Catálogos Sara Exim',introTitle:'Categorias disponíveis',introDescription:'Escolha primeiro o formato ou categoria. Depois consulte as coleções disponíveis.'},keval:{title:'Pavimentos SPC por coleção.',description:'Coleções organizadas para consulta profissional, com imagens reais e galerias próprias, mantendo a linguagem visual premium do site.',introEyebrow:'Catálogos Keo Surfaces',introTitle:'Coleções disponíveis',introDescription:'Escolha a coleção para consultar as imagens reais ou o catálogo disponível.'},lamigloss:{title:'Soluções premium para interiores.',description:'PVC Marble Sheets, Wall Panels and Louvers designed to bring premium aesthetics, durability and versatility to modern interior spaces.',introEyebrow:'Catálogo Lami Gloss',introTitle:'Produtos disponíveis',introDescription:'Consulte o catálogo completo de PVC Marble Sheets, Wall Panels e Louvers.'},stoneworks:{title:'Revestimentos flexíveis para interiores e exteriores.',description:'Fabricante de revestimentos flexíveis em pedra natural, betão e superfícies técnicas, combinando inovação, leveza e design para aplicações em interiores e exteriores.',introEyebrow:'Catálogos StoneWorks',introTitle:'Coleções disponíveis',introDescription:'Consulte os catálogos de pedra natural, betão e superfícies técnicas da StoneWorks.'}},
    widget:{toggle:'Contacto',eyebrow:'Contacto rápido',title:'Tem alguma dúvida?',text:'Deixe o seu email e uma pequena mensagem. Responderemos o mais breve possível.',name:'Nome',namePlaceholder:'O seu nome',email:'Email',emailPlaceholder:'email@empresa.com',message:'Mensagem',messagePlaceholder:'Como podemos ajudar?',submit:'Enviar'},
    form:{subject:'Novo contacto - António Leite Representante'},
    pdf:{title:'Catálogo'},
    footer:{brand:'António Leite Representante',text:'Representação internacional de revestimentos cerâmicos, pavimentos SPC e soluções para clientes profissionais.',factories:'Fabricantes',contact:'Contacto',note:'Responderemos com a maior brevidade possível.',copy:'© António Leite Representante',official:'Website oficial de apresentação de fabricantes representados.'},
    thanks:{title:'Obrigado | António Leite Representante',description:'Obrigado pelo seu contacto. A António Leite Representante responderá com a maior brevidade possível.',back:'Voltar ao site',eyebrow:'Mensagem enviada',heading:'Obrigado pelo contacto.',text:'Recebemos a sua mensagem. Responderemos com a maior brevidade possível através do email indicado.'}
  },
  en: {
    title:'António Leite Representative | International Representation',
    description:'International representation of manufacturers of wall coverings, flooring and solutions for professional clients and container supply.',
    brand:'António Leite Representative',
    nav:{home:'Home',partners:'Partners',why:'Why us',contact:'Contact',about:'About Us'},
    hero:{eyebrow:'International representation',title:'International representation of coverings and flooring.',text:'Updated catalogues, organised manufacturers and direct commercial contact for professional clients and container orders.',primary:'Explore partners',secondary:'Commercial contact',mark:'Ceramics<br>Supply'},
    trust:{eyebrow:'Why clients work with us',title:'A simple connection between professional clients and international manufacturers.',card1:{title:'Always organised catalogues',text:'Quick browsing by manufacturer and format, with a structure prepared for frequent updates.'},card2:{title:'Volume focused',text:'Information designed for clients purchasing by container and looking for commercial clarity.'},card3:{title:'Direct support',text:'Support with formats, availability, lead times and contact with partners at origin.'},card4:{title:'Professional image',text:'A clean and credible platform to present manufacturers, materials and updated documentation.'}},
    partners:{eyebrow:'Our partners',title:'Represented manufacturers',winasa:{text:'Porcelain tiles · 5 available formats'},keval:{text:'SPC flooring · 33 available collections'},sara:{text:'Ceramic materials · 12 available categories'},lamigloss:{text:'PVC Marble Sheets · Wall Panels · Louvers'},stoneworks:{text:'Natural stone · Concrete · Technical surfaces'},enter:{catalogs:'Enter catalogues →',collections:'Enter collections →'}},
    contact:{eyebrow:'Commercial contact',title:'Need information for an order?',text:'Contact us to review catalogues, formats, quantities, lead times or container supply conditions.',emailLabel:'Email',note:'We will reply as soon as possible.'},
    about:{eyebrow:'About Us',title:'International representation for construction professionals.',text1:'António Leite Representative works with international manufacturers of ceramic wall coverings, porcelain tiles and SPC flooring, offering solutions for distributors, importers and construction professionals.',text2:'We work with selected partners to offer collections that combine quality, design and innovation, meeting the needs of residential, commercial and large-scale projects.',stat1:'International Manufacturers',stat2:'Available Collections',stat3:'Formats and Finishes',stat4:'Professional B2B Distribution'},
    factory:{back:'← Back',available:'available',collectionSingle:'1 collection',collectionPlural:'{n} collections',seeCollections:'View collections →',seeCatalog:'View catalogue →',seeGallery:'View gallery →',prepareCatalogs:'Ready for catalogues →',prepareGallery:'Prepare gallery →',availableInFormat:'{count} available in this format.',emptySaraTitle:'Collections in preparation',emptySaraText:'This format is already structured. Final thumbnails and PDFs will be added once the complete catalogues are received.',emptyKevalTitle:'Gallery in preparation',emptyKevalText:'Category created without placeholders. Final images will be manually integrated, keeping the premium standard approved for Winasa and Sara Exim.',mainImage:'Main image',viewImage:'View image →',luxeText:'Special PDF catalogue for the Luxe collection.',galleryText:'Gallery with {count} real images from this collection.',futureGalleryText:'Collection created. The gallery will be completed with real images when the full image block is received.',catalog:'Catalogue'},
    factoryMeta:{winasa:{title:'Porcelain tiles by format.',description:'Catalogues organised for fast browsing by professional clients. Choose a format and open the corresponding PDF without leaving the site.',introEyebrow:'Winasa catalogues',introTitle:'Available formats',introDescription:'First choose the format. Then browse the collections available within each format.'},sara:{title:'Categories by format.',description:'Structure prepared to browse the official collections and their PDF catalogues, keeping the same premium organisation as Winasa.',introEyebrow:'Sara Exim catalogues',introTitle:'Available categories',introDescription:'First choose the format or category. Then browse the available collections.'},keval:{title:'SPC flooring by collection.',description:'Collections organised for professional browsing, with real images and dedicated galleries, keeping the premium visual language of the website.',introEyebrow:'Keo Surfaces catalogues',introTitle:'Available collections',introDescription:'Choose the collection to view real images or the available catalogue.'},lamigloss:{title:'Premium interior solutions.',description:'PVC Marble Sheets, Wall Panels and Louvers designed to bring premium aesthetics, durability and versatility to modern interior spaces.',introEyebrow:'Lami Gloss catalogue',introTitle:'Available products',introDescription:'Browse the complete catalogue of PVC Marble Sheets, Wall Panels and Louvers.'}},
    widget:{toggle:'Contact',eyebrow:'Quick contact',title:'Do you have a question?',text:'Leave your email and a short message. We will reply as soon as possible.',name:'Name',namePlaceholder:'Your name',email:'Email',emailPlaceholder:'email@company.com',message:'Message',messagePlaceholder:'How can we help?',submit:'Send'},
    form:{subject:'New contact - António Leite Representative'},pdf:{title:'Catalogue'},
    footer:{brand:'António Leite Representative',text:'International representation of ceramic coverings, SPC flooring and solutions for professional clients.',factories:'Manufacturers',contact:'Contact',note:'We will reply as soon as possible.',copy:'© António Leite Representative',official:'Official website presenting represented manufacturers.'},
    thanks:{title:'Thank you | António Leite Representative',description:'Thank you for contacting us. António Leite Representative will reply as soon as possible.',back:'Back to website',eyebrow:'Message sent',heading:'Thank you for contacting us.',text:'We have received your message. We will reply as soon as possible using the email provided.'}
  },
  es: {
    title:'António Leite Representante | Representación Internacional',description:'Representación internacional de fabricantes de revestimientos, pavimentos y soluciones para clientes profesionales y suministro por contenedor.',brand:'António Leite Representante',
    nav:{home:'Inicio',partners:'Socios',why:'Por qué nosotros',contact:'Contactos',about:'Quiénes somos'},
    hero:{eyebrow:'Representación internacional',title:'Representación internacional de revestimientos y pavimentos.',text:'Catálogos actualizados, fabricantes organizados y contacto comercial directo para clientes profesionales y pedidos por contenedor.',primary:'Explorar socios',secondary:'Contacto comercial',mark:'Ceramics<br>Supply'},
    trust:{eyebrow:'Por qué trabajan con nosotros',title:'Una conexión sencilla entre clientes profesionales y fabricantes internacionales.',card1:{title:'Catálogos siempre organizados',text:'Consulta rápida por fabricante y formato, con una estructura preparada para actualizaciones frecuentes.'},card2:{title:'Enfoque en volumen',text:'Información pensada para clientes que compran por contenedor y buscan claridad comercial.'},card3:{title:'Acompañamiento directo',text:'Apoyo en el análisis de formatos, disponibilidad, plazos y contacto con los socios en origen.'},card4:{title:'Imagen profesional',text:'Una plataforma limpia y creíble para presentar fabricantes, materiales y documentación actualizada.'}},
    partners:{eyebrow:'Nuestros socios',title:'Fabricantes representados',winasa:{text:'Porcelánico · 5 formatos disponibles'},keval:{text:'Pavimentos SPC · 33 colecciones disponibles'},sara:{text:'Materiales cerámicos · 12 categorías disponibles'},lamigloss:{text:'PVC Marble Sheets · Wall Panels · Louvers'},stoneworks:{text:'Pierre naturelle · Béton · Surfaces techniques'},enter:{catalogs:'Entrar en catálogos →',collections:'Entrar en colecciones →'}},
    contact:{eyebrow:'Contacto comercial',title:'¿Necesita información para un pedido?',text:'Contáctenos para analizar catálogos, formatos, cantidades, plazos o condiciones de suministro por contenedor.',emailLabel:'Email',note:'Responderemos con la mayor brevedad posible.'},
    about:{eyebrow:'Quiénes somos',title:'Representación internacional para profesionales del sector de la construcción.',text1:'António Leite Representante trabaja con fabricantes internacionales de revestimientos cerámicos, porcelánicos y pavimentos SPC, ofreciendo soluciones para distribuidores, importadores y profesionales del sector de la construcción.',text2:'Trabajamos con socios seleccionados para ofrecer colecciones que combinan calidad, diseño e innovación, respondiendo a las exigencias de proyectos residenciales, comerciales y de gran dimensión.',stat1:'Fabricantes internacionales',stat2:'Colecciones disponibles',stat3:'Formatos y acabados',stat4:'Distribución profesional B2B'},
    factory:{back:'← Volver',available:'disponibles',collectionSingle:'1 colección',collectionPlural:'{n} colecciones',seeCollections:'Ver colecciones →',seeCatalog:'Ver catálogo →',seeGallery:'Ver galería →',prepareCatalogs:'Preparado para catálogos →',prepareGallery:'Preparar galería →',availableInFormat:'{count} disponibles en este formato.',emptySaraTitle:'Colecciones en preparación',emptySaraText:'Este formato ya está estructurado. Las miniaturas finales y los PDFs se añadirán cuando se reciban los catálogos completos.',emptyKevalTitle:'Galería en preparación',emptyKevalText:'Categoría creada sin marcadores temporales. Las imágenes finales se integrarán manualmente, manteniendo el estándar premium aprobado para Winasa y Sara Exim.',mainImage:'Imagen principal',viewImage:'Ver imagen →',luxeText:'Catálogo especial en PDF de la colección Luxe.',galleryText:'Galería con {count} imágenes reales de esta colección.',futureGalleryText:'Colección creada. La galería se completará con imágenes reales cuando recibamos el bloque completo.',catalog:'Catálogo'},
    factoryMeta:{winasa:{title:'Porcelánico por formato.',description:'Catálogos organizados para una consulta rápida por parte de clientes profesionales. Elija un formato y abra el PDF correspondiente sin salir del sitio.',introEyebrow:'Catálogos Winasa',introTitle:'Formatos disponibles',introDescription:'Elija primero el formato. Después consulte las colecciones disponibles dentro de cada formato.'},sara:{title:'Categorías por formato.',description:'Estructura preparada para consultar las colecciones oficiales y sus catálogos PDF, manteniendo la misma organización premium de Winasa.',introEyebrow:'Catálogos Sara Exim',introTitle:'Categorías disponibles',introDescription:'Elija primero el formato o la categoría. Después consulte las colecciones disponibles.'},keval:{title:'Pavimentos SPC por colección.',description:'Colecciones organizadas para consulta profesional, con imágenes reales y galerías propias, manteniendo el lenguaje visual premium del sitio.',introEyebrow:'Catálogos Keo Surfaces',introTitle:'Colecciones disponibles',introDescription:'Elija la colección para consultar las imágenes reales o el catálogo disponible.'},lamigloss:{title:'Soluciones premium para interiores.',description:'PVC Marble Sheets, Wall Panels and Louvers diseñados para aportar estética premium, durabilidad y versatilidad a los interiores modernos.',introEyebrow:'Catálogo Lami Gloss',introTitle:'Productos disponibles',introDescription:'Consulte el catálogo completo de PVC Marble Sheets, Wall Panels y Louvers.'}},
    widget:{toggle:'Contacto',eyebrow:'Contacto rápido',title:'¿Tiene alguna duda?',text:'Deje su email y un breve mensaje. Responderemos lo antes posible.',name:'Nombre',namePlaceholder:'Su nombre',email:'Email',emailPlaceholder:'email@empresa.com',message:'Mensaje',messagePlaceholder:'¿Cómo podemos ayudar?',submit:'Enviar'},
    form:{subject:'Nuevo contacto - António Leite Representante'},pdf:{title:'Catálogo'},
    footer:{brand:'António Leite Representante',text:'Representación internacional de revestimientos cerámicos, pavimentos SPC y soluciones para clientes profesionales.',factories:'Fabricantes',contact:'Contacto',note:'Responderemos con la mayor brevedad posible.',copy:'© António Leite Representante',official:'Sitio web oficial de presentación de fabricantes representados.'},
    thanks:{title:'Gracias | António Leite Representante',description:'Gracias por su contacto. António Leite Representante responderá con la mayor brevedad posible.',back:'Volver al sitio',eyebrow:'Mensaje enviado',heading:'Gracias por contactar.',text:'Hemos recibido su mensaje. Responderemos con la mayor brevedad posible al email indicado.'}
  },
  fr: {
    title:'António Leite Représentant | Représentation Internationale',description:'Représentation internationale de fabricants de revêtements, de sols et de solutions pour clients professionnels et fourniture par conteneur.',brand:'António Leite Représentant',
    nav:{home:'Accueil',partners:'Partenaires',why:'Pourquoi nous',contact:'Contact',about:'Qui sommes-nous'},
    hero:{eyebrow:'Représentation internationale',title:'Représentation internationale de revêtements et de sols.',text:'Catalogues à jour, fabricants organisés et contact commercial direct pour clients professionnels et commandes par conteneur.',primary:'Explorer les partenaires',secondary:'Contact commercial',mark:'Ceramics<br>Supply'},
    trust:{eyebrow:'Pourquoi travailler avec nous',title:'Un lien simple entre clients professionnels et fabricants internationaux.',card1:{title:'Catalogues toujours organisés',text:'Consultation rapide par fabricant et format, avec une structure prévue pour des mises à jour fréquentes.'},card2:{title:'Orientation volume',text:'Informations pensées pour les clients qui achètent par conteneur et recherchent une clarté commerciale.'},card3:{title:'Accompagnement direct',text:'Assistance pour l’analyse des formats, disponibilités, délais et contact avec les partenaires à l’origine.'},card4:{title:'Image professionnelle',text:'Une plateforme claire et crédible pour présenter fabricants, matériaux et documentation à jour.'}},
    partners:{eyebrow:'Nos partenaires',title:'Fabricants représentés',winasa:{text:'Grès cérame · 5 formats disponibles'},keval:{text:'Sols SPC · 33 collections disponibles'},sara:{text:'Matériaux céramiques · 12 catégories disponibles'},lamigloss:{text:'PVC Marble Sheets · Wall Panels · Louvers'},enter:{catalogs:'Voir les catalogues →',collections:'Voir les collections →'}},
    contact:{eyebrow:'Contact commercial',title:'Besoin d’informations pour une commande ?',text:'Contactez-nous pour analyser catalogues, formats, quantités, délais ou conditions de fourniture par conteneur.',emailLabel:'Email',note:'Nous répondrons dans les plus brefs délais.'},
    about:{eyebrow:'Qui sommes-nous',title:'Représentation internationale pour les professionnels de la construction.',text1:'António Leite Représentant travaille avec des fabricants internationaux de revêtements céramiques, de grès cérame et de sols SPC, en proposant des solutions pour distributeurs, importateurs et professionnels de la construction.',text2:'Nous travaillons avec des partenaires sélectionnés afin de proposer des collections alliant qualité, design et innovation, adaptées aux exigences des projets résidentiels, commerciaux et de grande envergure.',stat1:'Fabricants internationaux',stat2:'Collections disponibles',stat3:'Formats et finitions',stat4:'Distribution professionnelle B2B'},
    factory:{back:'← Retour',available:'disponibles',collectionSingle:'1 collection',collectionPlural:'{n} collections',seeCollections:'Voir les collections →',seeCatalog:'Voir le catalogue →',seeGallery:'Voir la galerie →',prepareCatalogs:'Préparé pour les catalogues →',prepareGallery:'Préparer la galerie →',availableInFormat:'{count} disponibles dans ce format.',emptySaraTitle:'Collections en préparation',emptySaraText:'Ce format est déjà structuré. Les miniatures finales et les PDFs seront ajoutés lorsque les catalogues complets seront reçus.',emptyKevalTitle:'Galerie en préparation',emptyKevalText:'Catégorie créée sans images temporaires. Les images finales seront intégrées manuellement, en conservant le standard premium approuvé pour Winasa et Sara Exim.',mainImage:'Image principale',viewImage:'Voir l’image →',luxeText:'Catalogue PDF spécial de la collection Luxe.',galleryText:'Galerie avec {count} images réelles de cette collection.',futureGalleryText:'Collection créée. La galerie sera complétée avec des images réelles lorsque le bloc complet sera reçu.',catalog:'Catalogue'},
    factoryMeta:{winasa:{title:'Grès cérame par format.',description:'Catalogues organisés pour une consultation rapide par les clients professionnels. Choisissez un format et ouvrez le PDF correspondant sans quitter le site.',introEyebrow:'Catalogues Winasa',introTitle:'Formats disponibles',introDescription:'Choisissez d’abord le format. Consultez ensuite les collections disponibles dans chaque format.'},sara:{title:'Catégories par format.',description:'Structure prête pour consulter les collections officielles et leurs catalogues PDF, en conservant la même organisation premium que Winasa.',introEyebrow:'Catalogues Sara Exim',introTitle:'Catégories disponibles',introDescription:'Choisissez d’abord le format ou la catégorie. Consultez ensuite les collections disponibles.'},keval:{title:'Sols SPC par collection.',description:'Collections organisées pour une consultation professionnelle, avec images réelles et galeries dédiées, en conservant le langage visuel premium du site.',introEyebrow:'Catalogues Keo Surfaces',introTitle:'Collections disponibles',introDescription:'Choisissez la collection pour consulter les images réelles ou le catalogue disponible.'},lamigloss:{title:'Solutions premium pour les intérieurs.',description:'PVC Marble Sheets, Wall Panels and Louvers conçus pour apporter esthétique premium, durabilité et polyvalence aux espaces intérieurs modernes.',introEyebrow:'Catalogue Lami Gloss',introTitle:'Produits disponibles',introDescription:'Consultez le catalogue complet de PVC Marble Sheets, Wall Panels et Louvers.'},stoneworks:{title:'Revêtements flexibles pour intérieurs et extérieurs.',description:'Fabricant de revêtements flexibles en pierre naturelle, béton et surfaces techniques, associant innovation, légèreté et design pour les applications intérieures et extérieures.',introEyebrow:'Catalogues StoneWorks',introTitle:'Collections disponibles',introDescription:'Consultez les catalogues StoneWorks de pierre naturelle, béton et surfaces techniques.'}},
    widget:{toggle:'Contact',eyebrow:'Contact rapide',title:'Vous avez une question ?',text:'Laissez votre email et un court message. Nous répondrons dans les plus brefs délais.',name:'Nom',namePlaceholder:'Votre nom',email:'Email',emailPlaceholder:'email@entreprise.com',message:'Message',messagePlaceholder:'Comment pouvons-nous aider ?',submit:'Envoyer'},
    form:{subject:'Nouveau contact - António Leite Représentant'},pdf:{title:'Catalogue'},
    footer:{brand:'António Leite Représentant',text:'Représentation internationale de revêtements céramiques, sols SPC et solutions pour clients professionnels.',factories:'Fabricants',contact:'Contact',note:'Nous répondrons dans les plus brefs délais.',copy:'© António Leite Représentant',official:'Site officiel de présentation des fabricants représentés.'},
    thanks:{title:'Merci | António Leite Représentant',description:'Merci pour votre contact. António Leite Représentant répondra dans les plus brefs délais.',back:'Retour au site',eyebrow:'Message envoyé',heading:'Merci pour votre contact.',text:'Nous avons bien reçu votre message. Nous répondrons dans les plus brefs délais à l’email indiqué.'}
  }
};

let currentLanguage = localStorage.getItem('alc_lang') || 'pt';

function getNested(obj, path){
  return path.split('.').reduce((acc, part) => acc && acc[part], obj);
}

function t(path, fallback=''){
  return getNested(I18N[currentLanguage], path) || getNested(I18N.pt, path) || fallback || path;
}

function replaceVars(text, vars={}){
  return String(text).replace(/\{(\w+)\}/g, (_, key) => vars[key] ?? '');
}

function getFactoryCopy(factory){
  const base = factoryMeta[factory] || {};
  const copy = t(`factoryMeta.${factory}`, {});
  return { ...base, ...(copy || {}) };
}

function updateLanguageSwitcher(){
  const meta = LANGUAGES[currentLanguage] || LANGUAGES.pt;
  const flag = document.querySelector('.language-flag');
  const code = document.querySelector('.language-code');
  if(flag) flag.textContent = meta.flag;
  if(code) code.textContent = meta.code;
  document.documentElement.lang = meta.htmlLang;
}

function translateStaticContent(){
  document.querySelectorAll('[data-i18n]').forEach(el => { el.textContent = t(el.dataset.i18n, el.textContent); });
  document.querySelectorAll('[data-i18n-html]').forEach(el => { el.innerHTML = t(el.dataset.i18nHtml, el.innerHTML); });
  document.querySelectorAll('[data-i18n-placeholder]').forEach(el => { el.setAttribute('placeholder', t(el.dataset.i18nPlaceholder, el.getAttribute('placeholder') || '')); });
  document.querySelectorAll('[data-i18n-value]').forEach(el => { el.setAttribute('value', t(el.dataset.i18nValue, el.getAttribute('value') || '')); });
  document.title = t('title', document.title);
  const description = document.querySelector('meta[name="description"]');
  if(description) description.setAttribute('content', t('description', description.getAttribute('content') || ''));
  updateLanguageSwitcher();
}

function refreshDynamicView(){
  if(document.getElementById('factory')?.classList.contains('active')){
    renderFactory(currentFactory);
  }
}

function setLanguage(lang){
  if(!LANGUAGES[lang]) return;
  currentLanguage = lang;
  localStorage.setItem('alc_lang', lang);
  translateStaticContent();
  refreshDynamicView();
  closeLanguageMenu();
}

function toggleLanguageMenu(){
  const switcher = document.querySelector('.language-switcher');
  if(!switcher) return;
  switcher.classList.toggle('open');
  const isOpen = switcher.classList.contains('open');
  switcher.querySelector('.language-current')?.setAttribute('aria-expanded', String(isOpen));
  switcher.querySelector('.language-menu')?.setAttribute('aria-hidden', String(!isOpen));
}

function closeLanguageMenu(){
  const switcher = document.querySelector('.language-switcher');
  if(!switcher) return;
  switcher.classList.remove('open');
  switcher.querySelector('.language-current')?.setAttribute('aria-expanded', 'false');
  switcher.querySelector('.language-menu')?.setAttribute('aria-hidden', 'true');
}



const saraEximData = [
  {
    id:'20x120',
    title:'20×120',
    subtitle:'Sara Exim 20×120',
    collectionsCount:2,
    image:'assets/images/sara-exim/20x120/glare.jpg',
    collections:[
      {
        name:'Glare',
        type:'20×120 Sara Exim',
        image:'assets/images/sara-exim/20x120/glare.jpg',
        pdf:'https://www.dropbox.com/scl/fi/cl0go5o5eyiqaedq8oqdc/200x1200_-CARVING-GLARE-COLLECTION.pdf?rlkey=jv477z2luuyhya16wgjmug06r&st=j8rn0pxl&raw=1'
      },
      {
        name:'Amazon',
        type:'20×120 Sara Exim',
        image:'assets/images/sara-exim/20x120/amazon.jpg',
        pdf:'https://www.dropbox.com/scl/fi/kdss7df083hy3auc5vaq7/200x1200_AMAZON-COLLECTION.pdf?rlkey=ztsdtgwso588gibxkjpeozife&st=mwa3sfqx&raw=1'
      }
    ]
  },
  {
    "id": "30x60",
    "title": "30×60",
    "subtitle": "Sara Exim 30×60",
    "collectionsCount": 7,
    "image": "assets/images/sara-exim/30x60/hd-vol-01.jpg",
    "collections": [
        {
            "name": "H.D. Vol. 01",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-01.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/y9ffh3ozs8s0pkjpzf9st/H.D-30X60-Vol-01.pdf?rlkey=k88d0vqj00tjh9osjn1mxdyvj&st=xpgwve49&raw=1"
        },
        {
            "name": "H.D. Vol. 02",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-02.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/lehfjzupf9r3as4d1sjnm/H.D-30X60-Vol-02.pdf?rlkey=it0u2hridrsoxar508qimlbko&st=72vtdrcd&raw=1"
        },
        {
            "name": "H.D. Vol. 03",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-03.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/5hbv0hutsar6ycyom9y7t/H.D-30X60-Vol-03.pdf?rlkey=tyrym8yq16k3c9o6bw4wg71tp&st=51o9dwts&raw=1"
        },
        {
            "name": "H.D. Vol. 04",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-04.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/d3k4xhxk3dj7pkgt6vpy2/H.D-30X60-Vol-04.pdf?rlkey=do1e2gnhk8mpyeu9kh1uzbk0o&st=wrt36379&raw=1"
        },
        {
            "name": "H.D. Vol. 05",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-05.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/xp6t6rkrps26rsp17nnl3/H.D-30X60-Vol-05.pdf?rlkey=pm0md6h0xn85toachx6yvc48g&st=kstvpkl7&raw=1"
        },
        {
            "name": "H.D. Vol. 06",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-06.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/rtywfww2bcm1rvvxpp42d/H.D-30X60-Vol-06.pdf?rlkey=wyegqcfhkpum2wtt6zivb8ce7&st=ua5cr3s2&raw=1"
        },
        {
            "name": "H.D. Vol. 07",
            "type": "30×60 Sara Exim",
            "image": "assets/images/sara-exim/30x60/hd-vol-07.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/yfo27fbmtfh0ien0aq93s/H.D-30X60-Vol-07.pdf?rlkey=luoq2na5d125p56pnba31j2q6&st=07tjgnrd&raw=1"
        }
    ]
},
  {
    "id": "30x90",
    "title": "30×90",
    "subtitle": "Sara Exim 30×90",
    "collectionsCount": 6,
    "image": "assets/images/sara-exim/30x90/glossy.jpg",
    "collections": [
        {
            "name": "Glossy",
            "type": "30×90 Sara Exim",
            "image": "assets/images/sara-exim/30x90/glossy.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/pb9hae2i3e7tm20dpdy49/30x90cm-Glossy-Wall-E-Catalogue-JAN-2024.pdf?rlkey=x3zp8rozt1r30gopahg6rct0n&st=hlf2iuke&raw=1"
        },
        {
            "name": "Glue",
            "type": "30×90 Sara Exim",
            "image": "assets/images/sara-exim/30x90/glue.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/1i7r6askr75z3k8xujqup/30x90cm-Glue-Wall-E-Catalogue-JAN-2024.pdf?rlkey=urvtngw72hiclxdm3vf6l50sm&st=urpren5q&raw=1"
        },
        {
            "name": "Matt",
            "type": "30×90 Sara Exim",
            "image": "assets/images/sara-exim/30x90/matt.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/f2fut7o6lr2fwpftjk95r/30x90cm-Matt-Wall-E-Catalogu-JAN-2024.pdf?rlkey=lxwccix4tw01fzoxnhjgc73zg&st=ucm05nmf&raw=1"
        },
        {
            "name": "Super Black",
            "type": "30×90 Sara Exim",
            "image": "assets/images/sara-exim/30x90/super-black.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/yyiu5ssqm9lurdzcg2ir0/30x90cm-Super-Black-Series-E-Catalogue-Feb-24.pdf?rlkey=0qcbpdro0vbiiunz6f2147h0j&st=w9t9d72l&raw=1"
        },
        {
            "name": "Super White",
            "type": "30×90 Sara Exim",
            "image": "assets/images/sara-exim/30x90/super-white.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/g5ntiq17bbffk8q1cq8tg/30x90cm-Super-White-Series-E-Catalogue-Feb-24.pdf?rlkey=hq3749etw7kpd4zvg3m6yv2o8&st=y5r5z0pc&raw=1"
        },
        {
            "name": "Super White Statuario",
            "type": "30×90 Sara Exim",
            "image": "assets/images/sara-exim/30x90/super-white-statuario.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/q5ruv26b3qoir12ehcfio/30x90cm-Wall-Super-White-Statuariyo-E-Catalogue-JAN-24.pdf?rlkey=0rzwa915k5s1b4epgxqpvi2me&st=zbdym73n&raw=1"
        }
    ]
},
  {
    id:'60x60',
    title:'60×60',
    subtitle:'Sara Exim 60×60',
    collectionsCount:19,
    image:'assets/images/sara-exim/60x60/glossy-06.jpg',
    collections:[
      {
        name:'3D',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/3d.jpg',
        pdf:'https://www.dropbox.com/scl/fi/7z0yo9o924xr5fapvyig5/3D.pdf?rlkey=p0tn2hheatgmse872m1e4g59f&st=de1vc9p8&raw=1'
      },
      {
        name:'Carving Plan',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/carving-plan.jpg',
        pdf:'https://www.dropbox.com/scl/fi/pifnze7r3pivxvovacxpl/CARVING_PLAN.pdf?rlkey=mlsdyi4i6uzq5x5jshy93hzht&st=29iwdrvr&raw=1'
      },
      {
        name:'Glossy Mirror 01',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-mirror-01.jpg',
        pdf:'https://www.dropbox.com/scl/fi/s7t9zuq9jyoulsx1zmjja/GLOSSY-MIRROR_01.pdf?rlkey=k784v191xef6c8o6psmfgux7z&st=2iolrrb4&raw=1'
      },
      {
        name:'Glossy Mirror 02',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-mirror-02.jpg',
        pdf:'https://www.dropbox.com/scl/fi/ofqr6etqofdjtwre626h1/GLOSSY-MIRROR_02.pdf?rlkey=qes7hynjhw70owj3xwvy6aly1&st=g8uzdezn&raw=1'
      },
      {
        name:'Glossy 01',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-01.jpg',
        pdf:'https://www.dropbox.com/scl/fi/o9cz4htsu6hxbrzr508vv/GLOSSY_01.pdf?rlkey=kxv9dx07vbigdit681keix159&st=eznxvkym&raw=1'
      },
      {
        name:'Glossy 02',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-02.jpg',
        pdf:'https://www.dropbox.com/scl/fi/188djc3g32gv55ins2rdc/GLOSSY_02.pdf?rlkey=0xr62ye791y5vyazdekf1g0g3&st=7z32pdo8&raw=1'
      },
      {
        name:'Glossy 03',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-03.jpg',
        pdf:'https://www.dropbox.com/scl/fi/8dtfty0vaad96iqrab52o/GLOSSY_03.pdf?rlkey=d0esbw3k9ytos7tvpt6howcre&st=ttto4frm&raw=1'
      },
      {
        name:'Glossy 05',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-05.jpg',
        pdf:'https://www.dropbox.com/scl/fi/sr5crhoix1obrkjrpie1h/GLOSSY_05.pdf?rlkey=01ltnr241qwjsnwf9nox4yq8y&st=y9x6bqgw&raw=1'
      },
      {
        name:'Glossy 06',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/glossy-06.jpg',
        pdf:'https://www.dropbox.com/scl/fi/34yul4y9x33dvjnq0196y/GLOSSY_06.pdf?rlkey=gnx0lsfd9ddmhqo6ebxs13g55&st=0diha2po&raw=1'
      },
      {
        name:'Granite',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/granite.jpg',
        pdf:'https://www.dropbox.com/scl/fi/f8qikb7zp57sqkmu5fmcq/GRANITE.pdf?rlkey=h0mcf9nfrmp4cgy7lpv89q9og&st=n1ra95e6&raw=1'
      },
      {
        name:'Infinity',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/infinity.jpg',
        pdf:'https://www.dropbox.com/scl/fi/qkr3cv2opz78id2z4tyu3/INFINITY.pdf?rlkey=l8lbxqpx9vfog6opaels3b6em&st=1aya84t4&raw=1'
      },
      {
        name:'Plain Glossy Aqua 01',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/plain-glossy-aqua-01.jpg',
        pdf:'https://www.dropbox.com/scl/fi/siq06qw1qdxqc4hnxwux2/PLAIN_GLOSSY_AQUA_01.pdf?rlkey=g9pxm3hzbh5nptxzajy4ajg4k&st=f2zpi8s6&raw=1'
      },
      {
        name:'Plain Glossy Aqua 02',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/plain-glossy-aqua-02.jpg',
        pdf:'https://www.dropbox.com/scl/fi/99l2cj3z9jjbt6k3k9mbw/PLAIN_GLOSSY_AQUA_02.pdf?rlkey=hv1k7iy8195r4req7ncglr0sv&st=c39igdzy&raw=1'
      },
      {
        name:'Plain Glossy Aqua 03',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/plain-glossy-aqua-03.jpg',
        pdf:'https://www.dropbox.com/scl/fi/90733kchdp2fiemb31e7f/PLAIN_GLOSSY_AQUA_03.pdf?rlkey=aobufz9jsy7dyog4imp325csz&st=fiyzayip&raw=1'
      },
      {
        name:'Rustic Strip Wood',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/rustic-strip-wood.jpg',
        pdf:'https://www.dropbox.com/scl/fi/teckgdhzi2uvnorr1ua2y/RUSTIC-STRIP-WOOD.pdf?rlkey=aya0eqjn853gdc1jld7up5d3o&st=78nmamyi&raw=1'
      },
      {
        name:'Rustic Wood',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/rustic-wood.jpg',
        pdf:'https://www.dropbox.com/scl/fi/l7ajhsd9xoco8qbwzlmh2/RUSTIC-WOOD.pdf?rlkey=66e9qga1gor95oy8zj9wd6ubi&st=ww3dw7le&raw=1'
      },
      {
        name:'Rustic',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/rustic.jpg',
        pdf:'https://www.dropbox.com/scl/fi/pjzlu5lce3cev64o9i7ek/RUSTIC.pdf?rlkey=9yqz89niczlav6jzn2hq02v3n&st=4de9r455&raw=1'
      },
      {
        name:'Satin Matt',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/satin-matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/ummdzh7g6eyqanvcsfwbv/SATIN_MATT.pdf?rlkey=r4bc9qn7f1o6c0k4cr51h4vbo&st=axwha7d9&raw=1'
      },
      {
        name:'Without Glitter',
        type:'60×60 Sara Exim',
        image:'assets/images/sara-exim/60x60/without-glitter.jpg',
        pdf:'https://www.dropbox.com/scl/fi/8dlombezlub6p92omq1qr/WITHOUT_GLITTER_COLLECTION.pdf?rlkey=umpm2usgv4j2f2czdxvawe2e1&st=k8n7v1kg&raw=1'
      }
    ]
  },
  {
    id:'60x120',
    title:'60×120',
    subtitle:'Sara Exim 60×120',
    collectionsCount:17,
    image:'assets/images/sara-exim/60x120/echo.jpg',
    collections:[
      {
            name: "Echo",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/echo.jpg",
            pdf: "https://www.dropbox.com/scl/fi/fe3gwpldzjpb09m66xqxl/ECHO-COLLECTION-BOOK-MATCH.pdf?rlkey=c5wwu0hs444l2zh1rnlj6efeu&st=u838229s&raw=1"
      },
      {
            name: "Elegante",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/elegante.jpg",
            pdf: "https://www.dropbox.com/scl/fi/ntz0hyon95xblq5hdj58q/ELEGANTE-COLLECTION-LIGHT-COLOUR-HG.pdf?rlkey=078ykhz3u6usetp3wl4qnvn18&st=2dk6zlqn&raw=1"
      },
      {
            name: "Foil",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/foil.jpg",
            pdf: "https://www.dropbox.com/scl/fi/9b2e4rpbv1vr5w9oekqx3/FOIL-COLLECTION-GOLDEN-SERIES.pdf?rlkey=f2lmoe8myyllyyzlngr80e7b3&st=q09jkf9c&raw=1"
      },
      {
            name: "Fusion",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/fusion.jpg",
            pdf: "https://www.dropbox.com/scl/fi/rjlywccowanevslqmo996/FUSION-COLLECTION-DOUBLE-CHARGE.pdf?rlkey=xen2htg48mbkwpneao67wr2cb&st=w3i02g11&raw=1"
      },
      {
            name: "Gemstone",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/gemstone.jpg",
            pdf: "https://www.dropbox.com/scl/fi/1nm35nmihh4f1s8bebr1h/GEMSTONE-COLLECTION-GRANITE.pdf?rlkey=kzxcaa3tqrrlad3uw9uffg73o&st=dympnz4o&raw=1"
      },
      {
            name: "Pastelo",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/pastelo.jpg",
            pdf: "https://www.dropbox.com/scl/fi/xwtw4e3w457kz6iumldh4/GLOSSY-MATT-PASTELO.pdf?rlkey=3sg2ytomzubc7pnqek7pkw2i8&st=hxzkvk3c&raw=1"
      },
      {
            name: "Marvilla",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/marvilla.jpg",
            pdf: "https://www.dropbox.com/scl/fi/a1map3mvkelayhowl4w53/MARVILLA-COLLECTION-SATVARIO.pdf?rlkey=fnzfkgt3l4tj1l51k2ahqh9kt&st=fw82exps&raw=1"
      },
      {
            name: "Muted",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/muted.jpg",
            pdf: "https://www.dropbox.com/scl/fi/9ra7d7liyhcyk2w4237ec/MUTED-COLLECTION-MATT.pdf?rlkey=gzkp2gfdtd2sw8rfpe1uthemm&st=35noaypm&raw=1"
      },
      {
            name: "Prisma",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/prisma.jpg",
            pdf: "https://www.dropbox.com/scl/fi/9xp9n8gdl2gl10z7bhthy/PRISMA-COLLECTION-3D.pdf?rlkey=ml514wefwzgy73veqn98xpapc&st=tr7on4d1&raw=1"
      },
      {
            name: "Rocker Artisan",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/rocker-artisan.jpg",
            pdf: "https://www.dropbox.com/scl/fi/dvok5vgla0ng34k0s7g9p/ROCKER-ARTISAN-COLLECTION-DECOR-CARVING.pdf?rlkey=135kxvqproe6hz0izys1szhly&st=jx1lvigq&raw=1"
      },
      {
            name: "Rocker",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/rocker.jpg",
            pdf: "https://www.dropbox.com/scl/fi/0e0930p4poxdn24a8yp2d/ROCKER-COLLECTION-CARVING.pdf?rlkey=7hhc9f11ro3iwl7s2gwh9eb1m&st=wkgmj5vc&raw=1"
      },
      {
            name: "Rocker Eternal",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/rocker-eternal.jpg",
            pdf: "https://www.dropbox.com/scl/fi/ugzi32p5asjseo604jfsh/ROCKER-ETERNAL-COLLECTION-ENDLESS-CARVING.pdf?rlkey=5ruk72dm8sregwrx2z6p6l877&st=0ugrvo25&raw=1"
      },
      {
            name: "Shimmer",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/shimmer.jpg",
            pdf: "https://www.dropbox.com/scl/fi/oldgwd4vozgab3axgqcgd/SHIMMER-COLLECTION-SUPER-HIGH-GLOSS.pdf?rlkey=xqf4f9kft4fde8wzbix29g2ev&st=7vy3yo95&raw=1"
      },
      {
            name: "Spectrum Artisan",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/spectrum-artisan.jpg",
            pdf: "https://www.dropbox.com/scl/fi/hqg2olqfyy1tqmhlaw9cg/SPECTRUM-ARTISAN-COLLECTION-GLOSSY-DECOR.pdf?rlkey=cpct0xx04vr71d5dzqvisi39z&st=9og20s3e&raw=1"
      },
      {
            name: "Spectrum",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/spectrum.jpg",
            pdf: "https://www.dropbox.com/scl/fi/pg8tfxuo8tfszr3q5cgea/SPECTRUM-COLLECTION-GLOSSY.pdf?rlkey=bmls2r1cjty4l8vjs5tprwgiy&st=cfyjqccn&raw=1"
      },
      {
            name: "Spectrum Eternal",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/spectrum-eternal.jpg",
            pdf: "https://www.dropbox.com/scl/fi/99yax35fvw6pfhmbf7i30/SPECTRUM-ETERNAL-COLLECTION-ENDLESS-GLOSSY.pdf?rlkey=j8i4l6vzt87npu7obat5cp7io&st=v9zundmh&raw=1"
      },
      {
            name: "Woodland",
            type: "60×120 Sara Exim",
            image: "assets/images/sara-exim/60x120/woodland.jpg",
            pdf: "https://www.dropbox.com/scl/fi/l8j8r37t1cgpo4znokf63/WOODLAND-COLLECTION-WOOD.pdf?rlkey=mmldx2tw4nobrysg0oiskd929&st=g2cyuc3u&raw=1"
      }
]
  },
  {
    id:'80x120',
    title:'80×120',
    subtitle:'Sara Exim 80×120',
    collectionsCount:5,
    image:'assets/images/sara-exim/80x120/glossy-seamless.jpg',
    collections:[
      {
        name:'Glossy',
        type:'80×120 Sara Exim',
        image:'assets/images/sara-exim/80x120/glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/gteculwc6b9kszjv6ta5k/80x120cm-Glossy-Seren-E-Catalogue-Mar-24.pdf?rlkey=2cvt19jqulzc6plfh878umr4k&st=25chj1xd&raw=1'
      },
      {
        name:'Matt',
        type:'80×120 Sara Exim',
        image:'assets/images/sara-exim/80x120/matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/2rfbadlih61b1xw04gtm4/80x120cm-Matt-E-Catalogue-Mar-24.pdf?rlkey=dowbufyf9yo6eztie2a2qpbmu&st=zsclx3p2&raw=1'
      },
      {
        name:'Carving',
        type:'80×120 Sara Exim',
        image:'assets/images/sara-exim/80x120/carving.jpg',
        pdf:'https://www.dropbox.com/scl/fi/flwe4mh2kj1xli6rcmv04/80x120cm-Carving-E-Catalogue-Mar-24.pdf?rlkey=lmtrpi76vfdczoph5prsyov6h&st=ph94skru&raw=1'
      },
      {
        name:'Glossy Seamless',
        type:'80×120 Sara Exim',
        image:'assets/images/sara-exim/80x120/glossy-seamless.jpg',
        pdf:'https://www.dropbox.com/scl/fi/xez0f0j72sgwy66wrp8fu/80x120cm-Glossy-Seamless-E-Catalogue-Mar-24.pdf?rlkey=ydopvti1f8lx3kpafibvtds06&st=45e2lmw1&raw=1'
      },
      {
        name:'Carving Seamless',
        type:'80×120 Sara Exim',
        image:'assets/images/sara-exim/80x120/carving-seamless.jpg',
        pdf:'https://www.dropbox.com/scl/fi/3lajfpit3cmqyxieeqdnm/80x120cm-Carving-Seamless-E-Catalogue-Mar-24.pdf?rlkey=f3ypa3istlv0sbf8ovjq8378x&st=2h7iql5w&raw=1'
      }
    ]
  },
  {
    "id": "80x160",
    "title": "80×160",
    "subtitle": "Sara Exim 80×160",
    "collectionsCount": 13,
    "image": "assets/images/sara-exim/80x160/crystal.jpg",
    "collections": [
        {
            "name": "Abstract",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/abstract.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/7u3wnmh9v902fh6s6vs8w/800x1600mm-Abstract-Collection-2024-25-Granula.pdf?rlkey=7pmtdrtyuw2evt82p01l7qqw0&st=p5elduac&raw=1"
        },
        {
            "name": "Crystal",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/crystal.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/9guv3mhypomxl0xewaa1x/800x1600mm-Crystal-Collection-2024-25-Glossy.pdf?rlkey=h4y26wffib16zaofrnny0l955&st=2u50d13r&raw=1"
        },
        {
            "name": "Earth",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/earth.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/377sinczuw1ov3almtyls/800x1600mm-Earth-Collection-2024-25-Punch-with-GHR.pdf?rlkey=atlqdiiv343qngykhqhtxa32r&st=pixh5ch1&raw=1"
        },
        {
            "name": "Edge",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/edge.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/bjik6p68a0nu1z89qu9sq/800x1600mm-Edge-Collection-2024-25-Glossy-Endless.pdf?rlkey=8ydc7vzgbuid3m7im9q6g0xvj&st=4tjimofr&raw=1"
        },
        {
            "name": "Flowsta Endless",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/flowsta-endless.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/85u43s3brwsnrl5jugazc/800x1600mm-Flowsta-Endless-Collection-2024-25-Carving-Endless.pdf?rlkey=p4tj2xdku8f2n3dsttvvi613h&st=hf1j9ycw&raw=1"
        },
        {
            "name": "Foster & Linen",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/foster-linen.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/q60shz03ze1uzr4buyltn/800x1600mm-Foster-Linen-Series-2024-25-Carving.pdf?rlkey=ja7kkrp8ey39k496gxh031bia&st=44le88tk&raw=1"
        },
        {
            "name": "Luce",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/luce.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/hncqfwyfran6nqd4yfgx7/800x1600mm-Luce-Collection-2024-25-DG-Matt.pdf?rlkey=tokmggdssah7011cldquha9d2&st=7cjmx6wh&raw=1"
        },
        {
            "name": "Matt",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/matt.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/s829mr5pnm8hhvy55xkxq/800x1600mm-Matt-Collection-2024-25-Matt.pdf?rlkey=e05inmbib2jvp80xqoafui37q&st=fmti4jdr&raw=1"
        },
        {
            "name": "Mirror",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/mirror.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/hqxp4s4s122dsn02ulw19/800x1600mm-Mirror-Collection-2024-25-High-Glossy.pdf?rlkey=6vdzgqtoedycxzil08w8tas0l&st=hbh9lzv1&raw=1"
        },
        {
            "name": "Rocker",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/rocker.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/t1zcgv4lvd2b8002a3qxh/800x1600mm-Rocker-Collection-2024-25-Carving.pdf?rlkey=c603w8pkaz7i5auq9h5b2suvw&st=g71qnosu&raw=1"
        },
        {
            "name": "Steel",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/steel.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/3zd70yj9vwyd7o1nz3276/800x1600mm-Steel-Collection-2024-25-Steel.pdf?rlkey=pxg3c3zqpwag76w7gcx7i2hv1&st=h7ubi5bv&raw=1"
        },
        {
            "name": "Stonecraft",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/stonecraft.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/7arny95lv7f0oo4t9vaxe/800x1600mm-Stonecraft-Collection-2024-25-Punch.pdf?rlkey=9e30fi23yumh9h0h1h1pyhatp&st=2xe0sx50&raw=1"
        },
        {
            "name": "Victoria",
            "type": "80×160 Sara Exim",
            "image": "assets/images/sara-exim/80x160/victoria.jpg",
            "pdf": "https://www.dropbox.com/scl/fi/ib4foozor16nubsxv6f34/800x1600mm-Victoria-Collection-2024-25-Multi-Color-Carving.pdf?rlkey=06gsr47w7wpb6u9or62njv9l7&st=szl1bkoi&raw=1"
        }
    ]
},
  {
    id:'120x120',
    title:'120×120',
    subtitle:'Sara Exim 120×120',
    collectionsCount:4,
    image:'assets/images/sara-exim/120x120/glossy.jpg',
    collections:[
      {
        name:'Glossy',
        type:'120×120 Sara Exim',
        image:'assets/images/sara-exim/120x120/glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/8vg9mu7dxj3iyp5fuxx34/Glossy-Collection-1200x1200mm.pdf?rlkey=5uw6gcj150998hql4jr4ty62v&st=rdswqf4m&raw=1'
      },
      {
        name:'Matt',
        type:'120×120 Sara Exim',
        image:'assets/images/sara-exim/120x120/matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/4z222ftexje9j047ckqid/Matt-Collection-1200x1200mm.pdf?rlkey=yz5q4vjv3z9lxk5d8vcs4spql&st=sjyldhc2&raw=1'
      },
      {
        name:'Carving',
        type:'120×120 Sara Exim',
        image:'assets/images/sara-exim/120x120/carving.jpg',
        pdf:'https://www.dropbox.com/scl/fi/sddt8v5532t2enlvsymuv/Carving-Collection-1200x1200mm.pdf?rlkey=u4pi0pfn2u4s17oc4o05wuhmq&st=k7ahurod&raw=1'
      },
      {
        name:'Glossy Endless',
        type:'120×120 Sara Exim',
        image:'assets/images/sara-exim/120x120/glossy-endless.jpg',
        pdf:'https://www.dropbox.com/scl/fi/vw76al0n4rwpkads3p3it/1200x1200-Glossy-Endless.pdf?rlkey=8oobzvkukpma2ig7y83mi7yfa&st=a7hizgaz&raw=1'
      }
    ]
  },
  {
    id:'120x180',
    title:'120×180',
    subtitle:'Sara Exim 120×180',
    collectionsCount:3,
    image:'assets/images/sara-exim/120x180/new-glossy.jpg',
    collections:[
      {
        name:'New Glossy',
        type:'120×180 Sara Exim',
        image:'assets/images/sara-exim/120x180/new-glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/mkzmlhnoa32q85e026csm/1200x1800_-New-glossy-1.pdf?rlkey=6gd7hmtphfbrqpbqf2l7d7slz&st=e59mhzt3&raw=1'
      },
      {
        name:'Matt',
        type:'120×180 Sara Exim',
        image:'assets/images/sara-exim/120x180/matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/4zul8ylesw5iirkkjryba/1200x1800-Matt-Collection-2022-23-2.pdf?rlkey=s64bziw09oveoscwp8qg6zben&st=tydjbtf4&raw=1'
      },
      {
        name:'Glossy',
        type:'120×180 Sara Exim',
        image:'assets/images/sara-exim/120x180/glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/s4yvq18jl6fw6owwlalys/1200x1800mm-Glossy-Collection-2022.pdf?rlkey=jhhkntvrfqc8siypzn7n1gry7&st=ww5i63z8&raw=1'
      }
    ]
  },
  {
    id:'faucet',
    title:'Faucet',
    subtitle:'Sara Exim Faucet',
    collectionsCount:1,
    image:'assets/images/sara-exim/faucet/faucet.jpg',
    collections:[
      {
        name:'Faucet',
        type:'Sara Exim',
        image:'assets/images/sara-exim/faucet/faucet.jpg',
        pdf:'https://www.dropbox.com/scl/fi/6k3btwreqhpqupks3wyhp/Sara-faucet.pdf?rlkey=007yfvhtstm66ehw55xn1u7g1&st=a8pes8gi&raw=1'
      }
    ]
  },
  {
    id:'hardware',
    title:'Hardware',
    subtitle:'Sara Exim Hardware',
    collectionsCount:1,
    image:'assets/images/sara-exim/hardware/hardware.jpg',
    collections:[
      {
        name:'Hardware',
        type:'Sara Exim',
        image:'assets/images/sara-exim/hardware/hardware.jpg',
        pdf:'https://www.dropbox.com/scl/fi/1nlaegmnn3df99ybukbi0/SARA-Hardware-One-Stop-Solition-MRP-List-2025_M-1.pdf?rlkey=ct1mcqlqusxqzz7inmokye2ij&st=ntz9rzqp&raw=1'
      }
    ]
  },
  {
    id:'sanitary',
    title:'Sanitary',
    subtitle:'Sara Exim Sanitary',
    collectionsCount:1,
    image:'assets/images/sara-exim/sanitary/sanitary.jpg',
    collections:[
      {
        name:'Sanitary',
        type:'Sara Exim',
        image:'assets/images/sara-exim/sanitary/sanitary.jpg',
        pdf:'https://www.dropbox.com/scl/fi/7w3p1ymv9z0ozbr2cckfm/SANITARYWARE.pdf?rlkey=ep0bs0tgmx2c98kgj2joupgjy&st=nnaun6h7&raw=1'
      }
    ]
  }
];

let currentFactory = 'winasa';

const factoryMeta = {
  winasa: {
    eyebrow: 'Winasa',
    title: 'Porcelânico por formato.',
    description: 'Catálogos organizados para consulta rápida de clientes profissionais. Escolha um formato e abra o PDF correspondente sem sair do site.',
    introEyebrow: 'Catálogos Winasa',
    introTitle: 'Formatos disponíveis',
    introDescription: 'Escolha primeiro o formato. Depois consulte as coleções disponíveis dentro de cada formato.',
    defaultFormat: '600x1200'
  },
  sara: {
    eyebrow: 'Sara Exim',
    title: 'Categorias por formato.',
    description: 'Estrutura inicial preparada para receber as coleções oficiais e os respetivos catálogos PDF, mantendo a mesma organização premium da Winasa.',
    introEyebrow: 'Catálogos Sara Exim',
    introTitle: 'Categorias disponíveis',
    introDescription: 'Escolha primeiro o formato ou categoria. As coleções serão adicionadas por blocos completos após a análise dos PDFs.',
    defaultFormat: '120x120'
  },
  lamigloss: {
    eyebrow: 'Lami Gloss',
    title: 'Soluções premium para interiores.',
    description: 'PVC Marble Sheets, Wall Panels and Louvers designed to bring premium aesthetics, durability and versatility to modern interior spaces.',
    introEyebrow: 'Catálogo Lami Gloss',
    introTitle: 'Produtos disponíveis',
    introDescription: 'Consulte o catálogo completo de PVC Marble Sheets, Wall Panels e Louvers.',
    defaultFormat: 'catalogue'
  },
  stoneworks: {
    eyebrow: 'StoneWorks',
    title: 'Revestimentos flexíveis para interiores e exteriores.',
    description: 'Fabricante de revestimentos flexíveis em pedra natural, betão e superfícies técnicas, combinando inovação, leveza e design para aplicações em interiores e exteriores.',
    introEyebrow: 'Catálogos StoneWorks',
    introTitle: 'Coleções disponíveis',
    introDescription: 'Consulte os catálogos de pedra natural, betão e superfícies técnicas da StoneWorks.',
    defaultFormat: 'natural-stone-veneer'
  },
  keval: {
    eyebrow: 'Keo Surfaces',
    title: 'Pavimentos SPC por coleção.',
    description: 'Coleções organizadas para consulta profissional. Cada coleção será preparada com imagens reais e galeria própria, mantendo a linguagem visual premium do site.',
    introEyebrow: 'Catálogos Keo Surfaces',
    introTitle: 'Coleções disponíveis',
    introDescription: 'Escolha a coleção. As imagens reais serão integradas por blocos completos, sem placeholders e sem alterar a arquitetura do site.',
    defaultFormat: 'grey-oak'
  }
};

const stoneWorksData = [
  {id:'natural-stone-veneer',title:'Natural Stone Veneer',subtitle:'StoneWorks',image:'assets/images/stoneworks/natural-stone-veneer.jpg',pdf:'https://www.dropbox.com/scl/fi/1ztc20o47q5yc4ei2i9rt/NATURAL-STONE-VENEER-SWI-1.pdf?rlkey=skwhi84rpe3hbgvtom5t3tse7&st=p4tuwzzo&raw=1'},
  {id:'tech-stone',title:'Tech Stone',subtitle:'StoneWorks',image:'assets/images/stoneworks/tech-stone.jpg',pdf:'https://www.dropbox.com/scl/fi/1mha8aqru382qf42wuh0g/TECH-Stone.pdf?rlkey=xge5sicwfklk3om1pwx9n4guu&st=bat2xemd&raw=1'},
  {id:'patthar-collection',title:'The Patthar Collection',subtitle:'StoneWorks',image:'assets/images/stoneworks/banner.jpg',pdf:'https://www.dropbox.com/scl/fi/lbf9xoklhgup62r13ye82/THE-PATTHAR-COLLECTION.pdf?rlkey=8tfqls17s5e98nb8cj6nv76zq&st=cej6v5cb&raw=1'},
  {id:'concrete-veneer',title:'Concrete Veneer Series',subtitle:'StoneWorks',image:'assets/images/stoneworks/concrete-veneer.jpg',pdf:'https://www.dropbox.com/scl/fi/znlir7eiuwqr6scpripc3/Concrete-Veneer-Series-SWI.pdf?rlkey=m50ifj2yfjpazb7w78lnmhibh&st=p6zwrr5e&raw=1'},
  {id:'corrode-series',title:'Corrode Series',subtitle:'StoneWorks',image:'assets/images/stoneworks/corrode-series.jpg',pdf:'https://www.dropbox.com/scl/fi/e6qt8c4guayq07d1906ub/Corrode-Series-SWI.pdf?rlkey=j46pygvx72yc1ub2aifcupp49&st=dgwpdkdq&raw=1'}
];

const lamiGlossData = [
  {
    id:'catalogue',
    title:'PVC Marble Sheets · Wall Panels · Louvers',
    subtitle:'Lami Gloss',
    image:'assets/images/lamigloss/lg-gls-0003.jpg',
    pdf:'https://www.dropbox.com/scl/fi/7c8j2en5p99ialxiwuxhk/LamiGlossCatalogue.pdf?rlkey=9ip74acvn14q41jrfes68i102&st=4dluebad&raw=1'
  }
];

const kevalData = [
  {
    id:'acacia-brown',
    title:'Acacia Brown',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/acacia-brown/acacia-brown-card.jpg',
    variants:[
      { name:'Acacia Brown', label:'Imagem principal', image:'assets/images/keval/acacia-brown/acacia-brown.jpg' },
      { name:'Acacia Brown R1', label:'R1', image:'assets/images/keval/acacia-brown/acacia-brown-r1.jpg' },
      { name:'Acacia Brown R2', label:'R2', image:'assets/images/keval/acacia-brown/acacia-brown-r2.jpg' },
      { name:'Acacia Brown R3', label:'R3', image:'assets/images/keval/acacia-brown/acacia-brown-r3.jpg' },
      { name:'Acacia Brown R4', label:'R4', image:'assets/images/keval/acacia-brown/acacia-brown-r4.jpg' },
      { name:'Acacia Brown RV', label:'RV', image:'assets/images/keval/acacia-brown/acacia-brown-rv.jpg' },
      { name:'Acacia Brown RVH', label:'RVH', image:'assets/images/keval/acacia-brown/acacia-brown-rvh.jpg' }
    ]
  },
  {
    id:'acacia-dark',
    title:'Acacia Dark',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/acacia-dark/acacia-dark-card.jpg',
    variants:[
      { name:'Acacia Dark', label:'Imagem principal', image:'assets/images/keval/acacia-dark/acacia-dark.jpg' },
      { name:'Acacia Dark R1', label:'R1', image:'assets/images/keval/acacia-dark/acacia-dark-r1.jpg' },
      { name:'Acacia Dark R2', label:'R2', image:'assets/images/keval/acacia-dark/acacia-dark-r2.jpg' },
      { name:'Acacia Dark R3', label:'R3', image:'assets/images/keval/acacia-dark/acacia-dark-r3.jpg' },
      { name:'Acacia Dark R4', label:'R4', image:'assets/images/keval/acacia-dark/acacia-dark-r4.jpg' },
      { name:'Acacia Dark RV', label:'RV', image:'assets/images/keval/acacia-dark/acacia-dark-rv.jpg' },
      { name:'Acacia Dark RVH', label:'RVH', image:'assets/images/keval/acacia-dark/acacia-dark-rvh.jpg' }
    ]
  },
  {
    id:'alphin-grey',
    title:'Alphin Grey',
    subtitle:'Keo Surfaces',
    variantsCount:6,
    image:'assets/images/keval/alphin-grey/alphin-grey-card.jpg',
    variants:[
      { name:'Alphin Grey', label:'Imagem principal', image:'assets/images/keval/alphin-grey/alphin-grey.jpg' },
      { name:'Alphin Grey R1', label:'R1', image:'assets/images/keval/alphin-grey/alphin-grey-r1.jpg' },
      { name:'Alphin Grey R2', label:'R2', image:'assets/images/keval/alphin-grey/alphin-grey-r2.jpg' },
      { name:'Alphin Grey R3', label:'R3', image:'assets/images/keval/alphin-grey/alphin-grey-r3.jpg' },
      { name:'Alphin Grey R4', label:'R4', image:'assets/images/keval/alphin-grey/alphin-grey-r4.jpg' },
      { name:'Alphin Grey RVH', label:'RVH', image:'assets/images/keval/alphin-grey/alphin-grey-rvh.jpg' }
    ]
  },
  {
    id:'ash-mix',
    title:'Ash Mix',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/ash-mix/ash-mix-card.jpg',
    variants:[
      { name:'Ash Mix', label:'Imagem principal', image:'assets/images/keval/ash-mix/ash-mix.jpg' },
      { name:'Ash Mix R1', label:'R1', image:'assets/images/keval/ash-mix/ash-mix-r1.jpg' },
      { name:'Ash Mix R2', label:'R2', image:'assets/images/keval/ash-mix/ash-mix-r2.jpg' },
      { name:'Ash Mix R3', label:'R3', image:'assets/images/keval/ash-mix/ash-mix-r3.jpg' },
      { name:'Ash Mix R4', label:'R4', image:'assets/images/keval/ash-mix/ash-mix-r4.jpg' },
      { name:'Ash Mix RV', label:'RV', image:'assets/images/keval/ash-mix/ash-mix-rv.jpg' },
      { name:'Ash Mix RVH', label:'RVH', image:'assets/images/keval/ash-mix/ash-mix-rvh.jpg' }
    ]
  },
  {
    id:'aspen-white',
    title:'Aspen White',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/aspen-white/aspen-white-card.jpg',
    variants:[
      { name:'Aspen White', label:'Imagem principal', image:'assets/images/keval/aspen-white/aspen-white.jpg' },
      { name:'Aspen White R1', label:'R1', image:'assets/images/keval/aspen-white/aspen-white-r1.jpg' },
      { name:'Aspen White R2', label:'R2', image:'assets/images/keval/aspen-white/aspen-white-r2.jpg' },
      { name:'Aspen White R3', label:'R3', image:'assets/images/keval/aspen-white/aspen-white-r3.jpg' },
      { name:'Aspen White R4', label:'R4', image:'assets/images/keval/aspen-white/aspen-white-r4.jpg' },
      { name:'Aspen White RV', label:'RV', image:'assets/images/keval/aspen-white/aspen-white-rv.jpg' },
      { name:'Aspen White RVH', label:'RVH', image:'assets/images/keval/aspen-white/aspen-white-rvh.jpg' }
    ]
  },
  {
    id:'beachwood-oak',
    title:'Beachwood Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/beachwood-oak/beachwood-oak-card.jpg',
    variants:[
      { name:'Beachwood Oak', label:'Imagem principal', image:'assets/images/keval/beachwood-oak/beachwood-oak.jpg' },
      { name:'Beachwood Oak R1', label:'R1', image:'assets/images/keval/beachwood-oak/beachwood-oak-r1.jpg' },
      { name:'Beachwood Oak R2', label:'R2', image:'assets/images/keval/beachwood-oak/beachwood-oak-r2.jpg' },
      { name:'Beachwood Oak R3', label:'R3', image:'assets/images/keval/beachwood-oak/beachwood-oak-r3.jpg' },
      { name:'Beachwood Oak R4', label:'R4', image:'assets/images/keval/beachwood-oak/beachwood-oak-r4.jpg' },
      { name:'Beachwood Oak RV', label:'RV', image:'assets/images/keval/beachwood-oak/beachwood-oak-rv.jpg' },
      { name:'Beachwood Oak RVH', label:'RVH', image:'assets/images/keval/beachwood-oak/beachwood-oak-rvh.jpg' }
    ]
  },
  {
    id:'blackjack-oak',
    title:'Blackjack Oak',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/blackjack-oak/blackjack-oak-card.jpg',
    variants:[
      { name:'Blackjack Oak', label:'Imagem principal', image:'assets/images/keval/blackjack-oak/blackjack-oak.jpg' },
      { name:'Blackjack Oak R1', label:'R1', image:'assets/images/keval/blackjack-oak/blackjack-oak-r1.jpg' },
      { name:'Blackjack Oak R2', label:'R2', image:'assets/images/keval/blackjack-oak/blackjack-oak-r2.jpg' },
      { name:'Blackjack Oak R3', label:'R3', image:'assets/images/keval/blackjack-oak/blackjack-oak-r3.jpg' },
      { name:'Blackjack Oak R4', label:'R4', image:'assets/images/keval/blackjack-oak/blackjack-oak-r4.jpg' },
      { name:'Blackjack Oak R5', label:'R5', image:'assets/images/keval/blackjack-oak/blackjack-oak-r5.jpg' },
      { name:'Blackjack Oak RV', label:'RV', image:'assets/images/keval/blackjack-oak/blackjack-oak-rv.jpg' },
      { name:'Blackjack Oak RVH', label:'RVH', image:'assets/images/keval/blackjack-oak/blackjack-oak-rvh.jpg' }
    ]
  },
  {
    id:'boston-gray',
    title:'Boston Gray',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/boston-gray/boston-gray-card.jpg',
    variants:[
      { name:'Boston Gray', label:'Imagem principal', image:'assets/images/keval/boston-gray/boston-gray.jpg' },
      { name:'Boston Gray R1', label:'R1', image:'assets/images/keval/boston-gray/boston-gray-r1.jpg' },
      { name:'Boston Gray R2', label:'R2', image:'assets/images/keval/boston-gray/boston-gray-r2.jpg' },
      { name:'Boston Gray R3', label:'R3', image:'assets/images/keval/boston-gray/boston-gray-r3.jpg' },
      { name:'Boston Gray R4', label:'R4', image:'assets/images/keval/boston-gray/boston-gray-r4.jpg' },
      { name:'Boston Gray R5', label:'R5', image:'assets/images/keval/boston-gray/boston-gray-r5.jpg' },
      { name:'Boston Gray RV', label:'RV', image:'assets/images/keval/boston-gray/boston-gray-rv.jpg' },
      { name:'Boston Gray RVH', label:'RVH', image:'assets/images/keval/boston-gray/boston-gray-rvh.jpg' }
    ]
  },
  {
    id:'boston-natural',
    title:'Boston Natural',
    subtitle:'Keo Surfaces',
    variantsCount:9,
    image:'assets/images/keval/boston-natural/boston-natural-card.jpg',
    variants:[
      { name:'Boston Natural', label:'Imagem principal', image:'assets/images/keval/boston-natural/boston-natural.jpg' },
      { name:'Boston Natural R1', label:'R1', image:'assets/images/keval/boston-natural/boston-natural-r1.jpg' },
      { name:'Boston Natural R2', label:'R2', image:'assets/images/keval/boston-natural/boston-natural-r2.jpg' },
      { name:'Boston Natural R3', label:'R3', image:'assets/images/keval/boston-natural/boston-natural-r3.jpg' },
      { name:'Boston Natural R4', label:'R4', image:'assets/images/keval/boston-natural/boston-natural-r4.jpg' },
      { name:'Boston Natural R5', label:'R5', image:'assets/images/keval/boston-natural/boston-natural-r5.jpg' },
      { name:'Boston Natural R6', label:'R6', image:'assets/images/keval/boston-natural/boston-natural-r6.jpg' },
      { name:'Boston Natural RV', label:'RV', image:'assets/images/keval/boston-natural/boston-natural-rv.jpg' },
      { name:'Boston Natural RVH', label:'RVH', image:'assets/images/keval/boston-natural/boston-natural-rvh.jpg' }
    ]
  },
  {
    id:'charnwood-oak',
    title:'Charnwood Oak',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/charnwood-oak/charnwood-oak-card.jpg',
    variants:[
      { name:'Charnwood Oak', label:'Imagem principal', image:'assets/images/keval/charnwood-oak/charnwood-oak.jpg' },
      { name:'Charnwood Oak R1', label:'R1', image:'assets/images/keval/charnwood-oak/charnwood-oak-r1.jpg' },
      { name:'Charnwood Oak R2', label:'R2', image:'assets/images/keval/charnwood-oak/charnwood-oak-r2.jpg' },
      { name:'Charnwood Oak R3', label:'R3', image:'assets/images/keval/charnwood-oak/charnwood-oak-r3.jpg' },
      { name:'Charnwood Oak R4', label:'R4', image:'assets/images/keval/charnwood-oak/charnwood-oak-r4.jpg' },
      { name:'Charnwood Oak R5', label:'R5', image:'assets/images/keval/charnwood-oak/charnwood-oak-r5.jpg' },
      { name:'Charnwood Oak RV', label:'RV', image:'assets/images/keval/charnwood-oak/charnwood-oak-rv.jpg' },
      { name:'Charnwood Oak RVH', label:'RVH', image:'assets/images/keval/charnwood-oak/charnwood-oak-rvh.jpg' }
    ]
  },
  {
    id:'chicago-gris',
    title:'Chicago Gris',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/chicago-gris/chicago-gris-card.jpg',
    variants:[
      { name:'Chicago Gris', label:'Imagem principal', image:'assets/images/keval/chicago-gris/chicago-gris.jpg' },
      { name:'Chicago Gris R1', label:'R1', image:'assets/images/keval/chicago-gris/chicago-gris-r1.jpg' },
      { name:'Chicago Gris R2', label:'R2', image:'assets/images/keval/chicago-gris/chicago-gris-r2.jpg' },
      { name:'Chicago Gris R3', label:'R3', image:'assets/images/keval/chicago-gris/chicago-gris-r3.jpg' },
      { name:'Chicago Gris R4', label:'R4', image:'assets/images/keval/chicago-gris/chicago-gris-r4.jpg' },
      { name:'Chicago Gris RV', label:'RV', image:'assets/images/keval/chicago-gris/chicago-gris-rv.jpg' },
      { name:'Chicago Gris RVH', label:'RVH', image:'assets/images/keval/chicago-gris/chicago-gris-rvh.jpg' }
    ]
  },
  {
    id:'classic-oak',
    title:'Classic Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/classic-oak/classic-oak-card.jpg',
    variants:[
      { name:'Classic Oak', label:'Imagem principal', image:'assets/images/keval/classic-oak/classic-oak.jpg' },
      { name:'Classic Oak R1', label:'R1', image:'assets/images/keval/classic-oak/classic-oak-r1.jpg' },
      { name:'Classic Oak R2', label:'R2', image:'assets/images/keval/classic-oak/classic-oak-r2.jpg' },
      { name:'Classic Oak R3', label:'R3', image:'assets/images/keval/classic-oak/classic-oak-r3.jpg' },
      { name:'Classic Oak R4', label:'R4', image:'assets/images/keval/classic-oak/classic-oak-r4.jpg' },
      { name:'Classic Oak RV', label:'RV', image:'assets/images/keval/classic-oak/classic-oak-rv.jpg' },
      { name:'Classic Oak RVH', label:'RVH', image:'assets/images/keval/classic-oak/classic-oak-rvh.jpg' }
    ]
  },
  {
    id:'columbia-beige',
    title:'Columbia Beige',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/columbia-beige/columbia-beige-card.jpg',
    variants:[
      { name:'Columbia Beige', label:'Imagem principal', image:'assets/images/keval/columbia-beige/columbia-beige.jpg' },
      { name:'Columbia Beige R1', label:'R1', image:'assets/images/keval/columbia-beige/columbia-beige-r1.jpg' },
      { name:'Columbia Beige R2', label:'R2', image:'assets/images/keval/columbia-beige/columbia-beige-r2.jpg' },
      { name:'Columbia Beige R3', label:'R3', image:'assets/images/keval/columbia-beige/columbia-beige-r3.jpg' },
      { name:'Columbia Beige R4', label:'R4', image:'assets/images/keval/columbia-beige/columbia-beige-r4.jpg' },
      { name:'Columbia Beige RV', label:'RV', image:'assets/images/keval/columbia-beige/columbia-beige-rv.jpg' },
      { name:'Columbia Beige RVH', label:'RVH', image:'assets/images/keval/columbia-beige/columbia-beige-rvh.jpg' }
    ]
  },
  {
    id:'dallas-brown',
    title:'Dallas Brown',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/dallas-brown/dallas-brown-card.jpg',
    variants:[
      { name:'Dallas Brown', label:'Imagem principal', image:'assets/images/keval/dallas-brown/dallas-brown.jpg' },
      { name:'Dallas Brown R1', label:'R1', image:'assets/images/keval/dallas-brown/dallas-brown-r1.jpg' },
      { name:'Dallas Brown R2', label:'R2', image:'assets/images/keval/dallas-brown/dallas-brown-r2.jpg' },
      { name:'Dallas Brown R3', label:'R3', image:'assets/images/keval/dallas-brown/dallas-brown-r3.jpg' },
      { name:'Dallas Brown R4', label:'R4', image:'assets/images/keval/dallas-brown/dallas-brown-r4.jpg' },
      { name:'Dallas Brown RV', label:'RV', image:'assets/images/keval/dallas-brown/dallas-brown-rv.jpg' },
      { name:'Dallas Brown RVH', label:'RVH', image:'assets/images/keval/dallas-brown/dallas-brown-rvh.jpg' }
    ]
  },
  {
    id:'dark-padauk',
    title:'Dark Padauk',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/dark-padauk/dark-padauk-card.jpg',
    variants:[
      { name:'Dark Padauk', label:'Imagem principal', image:'assets/images/keval/dark-padauk/dark-padauk.jpg' },
      { name:'Dark Padauk R1', label:'R1', image:'assets/images/keval/dark-padauk/dark-padauk-r1.jpg' },
      { name:'Dark Padauk R2', label:'R2', image:'assets/images/keval/dark-padauk/dark-padauk-r2.jpg' },
      { name:'Dark Padauk R3', label:'R3', image:'assets/images/keval/dark-padauk/dark-padauk-r3.jpg' },
      { name:'Dark Padauk R4', label:'R4', image:'assets/images/keval/dark-padauk/dark-padauk-r4.jpg' },
      { name:'Dark Padauk RV', label:'RV', image:'assets/images/keval/dark-padauk/dark-padauk-rv.jpg' },
      { name:'Dark Padauk RVH', label:'RVH', image:'assets/images/keval/dark-padauk/dark-padauk-rvh.jpg' }
    ]
  },
  {
    id:'emory-oak',
    title:'Emory Oak',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/emory-oak/emory-oak-card.jpg',
    variants:[
      { name:'Emory Oak', label:'Imagem principal', image:'assets/images/keval/emory-oak/emory-oak.jpg' },
      { name:'Emory Oak R1', label:'R1', image:'assets/images/keval/emory-oak/emory-oak-r1.jpg' },
      { name:'Emory Oak R2', label:'R2', image:'assets/images/keval/emory-oak/emory-oak-r2.jpg' },
      { name:'Emory Oak R3', label:'R3', image:'assets/images/keval/emory-oak/emory-oak-r3.jpg' },
      { name:'Emory Oak R4', label:'R4', image:'assets/images/keval/emory-oak/emory-oak-r4.jpg' },
      { name:'Emory Oak R5', label:'R5', image:'assets/images/keval/emory-oak/emory-oak-r5.jpg' },
      { name:'Emory Oak RV', label:'RV', image:'assets/images/keval/emory-oak/emory-oak-rv.jpg' },
      { name:'Emory Oak RVH', label:'RVH', image:'assets/images/keval/emory-oak/emory-oak-rvh.jpg' }
    ]
  },
  {
    id:'eucalyptus',
    title:'Eucalyptus',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/eucalyptus/eucalyptus-card.jpg',
    variants:[
      { name:'Eucalyptus', label:'Imagem principal', image:'assets/images/keval/eucalyptus/eucalyptus.jpg' },
      { name:'Eucalyptus R1', label:'R1', image:'assets/images/keval/eucalyptus/eucalyptus-r1.jpg' },
      { name:'Eucalyptus R2', label:'R2', image:'assets/images/keval/eucalyptus/eucalyptus-r2.jpg' },
      { name:'Eucalyptus R3', label:'R3', image:'assets/images/keval/eucalyptus/eucalyptus-r3.jpg' },
      { name:'Eucalyptus R4', label:'R4', image:'assets/images/keval/eucalyptus/eucalyptus-r4.jpg' },
      { name:'Eucalyptus RV', label:'RV', image:'assets/images/keval/eucalyptus/eucalyptus-rv.jpg' },
      { name:'Eucalyptus RVH', label:'RVH', image:'assets/images/keval/eucalyptus/eucalyptus-rvh.jpg' }
    ]
  },
  {
    id:'fancy-oak',
    title:'Fancy Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/fancy-oak/fancy-oak-card.jpg',
    variants:[
      { name:'Fancy Oak', label:'Imagem principal', image:'assets/images/keval/fancy-oak/fancy-oak.jpg' },
      { name:'Fancy Oak R1', label:'R1', image:'assets/images/keval/fancy-oak/fancy-oak-r1.jpg' },
      { name:'Fancy Oak R2', label:'R2', image:'assets/images/keval/fancy-oak/fancy-oak-r2.jpg' },
      { name:'Fancy Oak R3', label:'R3', image:'assets/images/keval/fancy-oak/fancy-oak-r3.jpg' },
      { name:'Fancy Oak R4', label:'R4', image:'assets/images/keval/fancy-oak/fancy-oak-r4.jpg' },
      { name:'Fancy Oak RV', label:'RV', image:'assets/images/keval/fancy-oak/fancy-oak-rv.jpg' },
      { name:'Fancy Oak RVH', label:'RVH', image:'assets/images/keval/fancy-oak/fancy-oak-rvh.jpg' }
    ]
  },
  {
    id:'gold-oak',
    title:'Gold Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/gold-oak/gold-oak-card.jpg',
    variants:[
      { name:'Gold Oak', label:'Imagem principal', image:'assets/images/keval/gold-oak/gold-oak.jpg' },
      { name:'Gold Oak R1', label:'R1', image:'assets/images/keval/gold-oak/gold-oak-r1.jpg' },
      { name:'Gold Oak R2', label:'R2', image:'assets/images/keval/gold-oak/gold-oak-r2.jpg' },
      { name:'Gold Oak R3', label:'R3', image:'assets/images/keval/gold-oak/gold-oak-r3.jpg' },
      { name:'Gold Oak R4', label:'R4', image:'assets/images/keval/gold-oak/gold-oak-r4.jpg' },
      { name:'Gold Oak RV', label:'RV', image:'assets/images/keval/gold-oak/gold-oak-rv.jpg' },
      { name:'Gold Oak RVH', label:'RVH', image:'assets/images/keval/gold-oak/gold-oak-rvh.jpg' }
    ]
  },
  {
    id:'grey-oak',
    title:'Grey Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/grey-oak/grey-oak-card.jpg',
    variants:[
      { name:'Grey Oak', label:'Imagem principal', image:'assets/images/keval/grey-oak/grey-oak.jpg' },
      { name:'Grey Oak R1', label:'R1', image:'assets/images/keval/grey-oak/grey-oak-r1.jpg' },
      { name:'Grey Oak R2', label:'R2', image:'assets/images/keval/grey-oak/grey-oak-r2.jpg' },
      { name:'Grey Oak R3', label:'R3', image:'assets/images/keval/grey-oak/grey-oak-r3.jpg' },
      { name:'Grey Oak R4', label:'R4', image:'assets/images/keval/grey-oak/grey-oak-r4.jpg' },
      { name:'Grey Oak RV', label:'RV', image:'assets/images/keval/grey-oak/grey-oak-rv.jpg' },
      { name:'Grey Oak RVH', label:'RVH', image:'assets/images/keval/grey-oak/grey-oak-rvh.jpg' }
    ]
  },
  {
    id:'luxe',
    title:'Luxe',
    subtitle:'Keo Surfaces',
    variantsCount:1,
    image:'assets/images/keval/luxe/luxe.jpg',
    pdf:'https://www.dropbox.com/scl/fi/ndyu4vvyfud0g2q7ik5ux/Keo_Prime-Luxe-CATALOUGE-33-_2025.pdf?rlkey=o566tbe522e02uz98utpzpdbu&raw=1'
  },
  {
    id:'maple-beige',
    title:'Maple Beige',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/maple-beige/maple-beige-card.jpg',
    variants:[
      { name:'Maple Beige', label:'Imagem principal', image:'assets/images/keval/maple-beige/maple-beige.jpg' },
      { name:'Maple Beige R1', label:'R1', image:'assets/images/keval/maple-beige/maple-beige-r1.jpg' },
      { name:'Maple Beige R2', label:'R2', image:'assets/images/keval/maple-beige/maple-beige-r2.jpg' },
      { name:'Maple Beige R3', label:'R3', image:'assets/images/keval/maple-beige/maple-beige-r3.jpg' },
      { name:'Maple Beige R4', label:'R4', image:'assets/images/keval/maple-beige/maple-beige-r4.jpg' },
      { name:'Maple Beige RV', label:'RV', image:'assets/images/keval/maple-beige/maple-beige-rv.jpg' },
      { name:'Maple Beige RVH', label:'RVH', image:'assets/images/keval/maple-beige/maple-beige-rvh.jpg' }
    ]
  },
  {
    id:'maple-brown',
    title:'Maple Brown',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/maple-brown/maple-brown-card.jpg',
    variants:[
      { name:'Maple Brown', label:'Imagem principal', image:'assets/images/keval/maple-brown/maple-brown.jpg' },
      { name:'Maple Brown R1', label:'R1', image:'assets/images/keval/maple-brown/maple-brown-r1.jpg' },
      { name:'Maple Brown R2', label:'R2', image:'assets/images/keval/maple-brown/maple-brown-r2.jpg' },
      { name:'Maple Brown R3', label:'R3', image:'assets/images/keval/maple-brown/maple-brown-r3.jpg' },
      { name:'Maple Brown R4', label:'R4', image:'assets/images/keval/maple-brown/maple-brown-r4.jpg' },
      { name:'Maple Brown RV', label:'RV', image:'assets/images/keval/maple-brown/maple-brown-rv.jpg' },
      { name:'Maple Brown RVH', label:'RVH', image:'assets/images/keval/maple-brown/maple-brown-rvh.jpg' }
    ]
  },
  {
    id:'natural-oak',
    title:'Natural Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/natural-oak/natural-oak-card.jpg',
    variants:[
      { name:'Natural Oak', label:'Imagem principal', image:'assets/images/keval/natural-oak/natural-oak.jpg' },
      { name:'Natural Oak R1', label:'R1', image:'assets/images/keval/natural-oak/natural-oak-r1.jpg' },
      { name:'Natural Oak R2', label:'R2', image:'assets/images/keval/natural-oak/natural-oak-r2.jpg' },
      { name:'Natural Oak R3', label:'R3', image:'assets/images/keval/natural-oak/natural-oak-r3.jpg' },
      { name:'Natural Oak R4', label:'R4', image:'assets/images/keval/natural-oak/natural-oak-r4.jpg' },
      { name:'Natural Oak RV', label:'RV', image:'assets/images/keval/natural-oak/natural-oak-rv.jpg' },
      { name:'Natural Oak RVH', label:'RVH', image:'assets/images/keval/natural-oak/natural-oak-rvh.jpg' }
    ]
  },
  {
    id:'natural-walnut',
    title:'Natural Walnut',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/natural-walnut/natural-walnut-card.jpg',
    variants:[
      { name:'Natural Walnut', label:'Imagem principal', image:'assets/images/keval/natural-walnut/natural-walnut.jpg' },
      { name:'Natural Walnut R1', label:'R1', image:'assets/images/keval/natural-walnut/natural-walnut-r1.jpg' },
      { name:'Natural Walnut R2', label:'R2', image:'assets/images/keval/natural-walnut/natural-walnut-r2.jpg' },
      { name:'Natural Walnut R3', label:'R3', image:'assets/images/keval/natural-walnut/natural-walnut-r3.jpg' },
      { name:'Natural Walnut R4', label:'R4', image:'assets/images/keval/natural-walnut/natural-walnut-r4.jpg' },
      { name:'Natural Walnut RV', label:'RV', image:'assets/images/keval/natural-walnut/natural-walnut-rv.jpg' },
      { name:'Natural Walnut RVH', label:'RVH', image:'assets/images/keval/natural-walnut/natural-walnut-rvh.jpg' }
    ]
  },
  {
    id:'oak-elegant',
    title:'Oak Elegant',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/oak-elegant/oak-elegant-card.jpg',
    variants:[
      { name:'Oak Elegant', label:'Imagem principal', image:'assets/images/keval/oak-elegant/oak-elegant.jpg' },
      { name:'Oak Elegant R1', label:'R1', image:'assets/images/keval/oak-elegant/oak-elegant-r1.jpg' },
      { name:'Oak Elegant R2', label:'R2', image:'assets/images/keval/oak-elegant/oak-elegant-r2.jpg' },
      { name:'Oak Elegant R3', label:'R3', image:'assets/images/keval/oak-elegant/oak-elegant-r3.jpg' },
      { name:'Oak Elegant R4', label:'R4', image:'assets/images/keval/oak-elegant/oak-elegant-r4.jpg' },
      { name:'Oak Elegant RV', label:'RV', image:'assets/images/keval/oak-elegant/oak-elegant-rv.jpg' },
      { name:'Oak Elegant RVH', label:'RVH', image:'assets/images/keval/oak-elegant/oak-elegant-rvh.jpg' }
    ]
  },
  {
    id:'parkhurst-oak',
    title:'Parkhurst Oak',
    subtitle:'Keo Surfaces',
    variantsCount:9,
    image:'assets/images/keval/parkhurst-oak/parkhurst-oak-card.jpg',
    variants:[
      { name:'Parkhurst Oak', label:'Imagem principal', image:'assets/images/keval/parkhurst-oak/parkhurst-oak.jpg' },
      { name:'Parkhurst Oak R1', label:'R1', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-r1.jpg' },
      { name:'Parkhurst Oak R2', label:'R2', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-r2.jpg' },
      { name:'Parkhurst Oak R3', label:'R3', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-r3.jpg' },
      { name:'Parkhurst Oak R4', label:'R4', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-r4.jpg' },
      { name:'Parkhurst Oak R5', label:'R5', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-r5.jpg' },
      { name:'Parkhurst Oak R6', label:'R6', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-r6.jpg' },
      { name:'Parkhurst Oak RV', label:'RV', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-rv.jpg' },
      { name:'Parkhurst Oak RVH', label:'RVH', image:'assets/images/keval/parkhurst-oak/parkhurst-oak-rvh.jpg' }
    ]
  },
  {
    id:'pine-charcoal',
    title:'Pine Charcoal',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/pine-charcoal/pine-charcoal-card.jpg',
    variants:[
      { name:'Pine Charcoal', label:'Imagem principal', image:'assets/images/keval/pine-charcoal/pine-charcoal.jpg' },
      { name:'Pine Charcoal R1', label:'R1', image:'assets/images/keval/pine-charcoal/pine-charcoal-r1.jpg' },
      { name:'Pine Charcoal R2', label:'R2', image:'assets/images/keval/pine-charcoal/pine-charcoal-r2.jpg' },
      { name:'Pine Charcoal R3', label:'R3', image:'assets/images/keval/pine-charcoal/pine-charcoal-r3.jpg' },
      { name:'Pine Charcoal R4', label:'R4', image:'assets/images/keval/pine-charcoal/pine-charcoal-r4.jpg' },
      { name:'Pine Charcoal R5', label:'R5', image:'assets/images/keval/pine-charcoal/pine-charcoal-r5.jpg' },
      { name:'Pine Charcoal RV', label:'RV', image:'assets/images/keval/pine-charcoal/pine-charcoal-rv.jpg' },
      { name:'Pine Charcoal RVH', label:'RVH', image:'assets/images/keval/pine-charcoal/pine-charcoal-rvh.jpg' }
    ]
  },
  {
    id:'proto-oak',
    title:'Proto Oak',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/proto-oak/proto-oak-card.jpg',
    variants:[
      { name:'Proto Oak', label:'Imagem principal', image:'assets/images/keval/proto-oak/proto-oak.jpg' },
      { name:'Proto Oak R1', label:'R1', image:'assets/images/keval/proto-oak/proto-oak-r1.jpg' },
      { name:'Proto Oak R2', label:'R2', image:'assets/images/keval/proto-oak/proto-oak-r2.jpg' },
      { name:'Proto Oak R3', label:'R3', image:'assets/images/keval/proto-oak/proto-oak-r3.jpg' },
      { name:'Proto Oak R4', label:'R4', image:'assets/images/keval/proto-oak/proto-oak-r4.jpg' },
      { name:'Proto Oak R5', label:'R5', image:'assets/images/keval/proto-oak/proto-oak-r5.jpg' },
      { name:'Proto Oak RV', label:'RV', image:'assets/images/keval/proto-oak/proto-oak-rv.jpg' },
      { name:'Proto Oak RVH', label:'RVH', image:'assets/images/keval/proto-oak/proto-oak-rvh.jpg' }
    ]
  },
  {
    id:'rusty-brown',
    title:'Rusty Brown',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/rusty-brown/rusty-brown-card.jpg',
    variants:[
      { name:'Rusty Brown', label:'Imagem principal', image:'assets/images/keval/rusty-brown/rusty-brown.jpg' },
      { name:'Rusty Brown R1', label:'R1', image:'assets/images/keval/rusty-brown/rusty-brown-r1.jpg' },
      { name:'Rusty Brown R2', label:'R2', image:'assets/images/keval/rusty-brown/rusty-brown-r2.jpg' },
      { name:'Rusty Brown R3', label:'R3', image:'assets/images/keval/rusty-brown/rusty-brown-r3.jpg' },
      { name:'Rusty Brown R4', label:'R4', image:'assets/images/keval/rusty-brown/rusty-brown-r4.jpg' },
      { name:'Rusty Brown R5', label:'R5', image:'assets/images/keval/rusty-brown/rusty-brown-r5.jpg' },
      { name:'Rusty Brown RV', label:'RV', image:'assets/images/keval/rusty-brown/rusty-brown-rv.jpg' },
      { name:'Rusty Brown RVH', label:'RVH', image:'assets/images/keval/rusty-brown/rusty-brown-rvh.jpg' }
    ]
  },
  {
    id:'sandy-oak',
    title:'Sandy Oak',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/sandy-oak/sandy-oak-card.jpg',
    variants:[
      { name:'Sandy Oak', label:'Imagem principal', image:'assets/images/keval/sandy-oak/sandy-oak.jpg' },
      { name:'Sandy Oak R1', label:'R1', image:'assets/images/keval/sandy-oak/sandy-oak-r1.jpg' },
      { name:'Sandy Oak R2', label:'R2', image:'assets/images/keval/sandy-oak/sandy-oak-r2.jpg' },
      { name:'Sandy Oak R3', label:'R3', image:'assets/images/keval/sandy-oak/sandy-oak-r3.jpg' },
      { name:'Sandy Oak R4', label:'R4', image:'assets/images/keval/sandy-oak/sandy-oak-r4.jpg' },
      { name:'Sandy Oak R5', label:'R5', image:'assets/images/keval/sandy-oak/sandy-oak-r5.jpg' },
      { name:'Sandy Oak RV', label:'RV', image:'assets/images/keval/sandy-oak/sandy-oak-rv.jpg' },
      { name:'Sandy Oak RVH', label:'RVH', image:'assets/images/keval/sandy-oak/sandy-oak-rvh.jpg' }
    ]
  },
  {
    id:'sessile-oak',
    title:'Sessile Oak',
    subtitle:'Keo Surfaces',
    variantsCount:8,
    image:'assets/images/keval/sessile-oak/sessile-oak-card.jpg',
    variants:[
      { name:'Sessile Oak', label:'Imagem principal', image:'assets/images/keval/sessile-oak/sessile-oak.jpg' },
      { name:'Sessile Oak R1', label:'R1', image:'assets/images/keval/sessile-oak/sessile-oak-r1.jpg' },
      { name:'Sessile Oak R2', label:'R2', image:'assets/images/keval/sessile-oak/sessile-oak-r2.jpg' },
      { name:'Sessile Oak R3', label:'R3', image:'assets/images/keval/sessile-oak/sessile-oak-r3.jpg' },
      { name:'Sessile Oak R4', label:'R4', image:'assets/images/keval/sessile-oak/sessile-oak-r4.jpg' },
      { name:'Sessile Oak R5', label:'R5', image:'assets/images/keval/sessile-oak/sessile-oak-r5.jpg' },
      { name:'Sessile Oak RV', label:'RV', image:'assets/images/keval/sessile-oak/sessile-oak-rv.jpg' },
      { name:'Sessile Oak RVH', label:'RVH', image:'assets/images/keval/sessile-oak/sessile-oak-rvh.jpg' }
    ]
  },
  {
    id:'vintage-oak',
    title:'Vintage Oak',
    subtitle:'Keo Surfaces',
    variantsCount:7,
    image:'assets/images/keval/vintage-oak/vintage-oak-card.jpg',
    variants:[
      { name:'Vintage Oak', label:'Imagem principal', image:'assets/images/keval/vintage-oak/vintage-oak.jpg' },
      { name:'Vintage Oak R1', label:'R1', image:'assets/images/keval/vintage-oak/vintage-oak-r1.jpg' },
      { name:'Vintage Oak R2', label:'R2', image:'assets/images/keval/vintage-oak/vintage-oak-r2.jpg' },
      { name:'Vintage Oak R3', label:'R3', image:'assets/images/keval/vintage-oak/vintage-oak-r3.jpg' },
      { name:'Vintage Oak R4', label:'R4', image:'assets/images/keval/vintage-oak/vintage-oak-r4.jpg' },
      { name:'Vintage Oak RV', label:'RV', image:'assets/images/keval/vintage-oak/vintage-oak-rv.jpg' },
      { name:'Vintage Oak RVH', label:'RVH', image:'assets/images/keval/vintage-oak/vintage-oak-rvh.jpg' }
    ]
  },
  {
    id:'warm-oak',
    title:'Warm Oak',
    subtitle:'Keo Surfaces',
    variantsCount:4,
    image:'assets/images/keval/warm-oak/warm-oak-card.jpg',
    variants:[
      { name:'Warm Oak', label:'Imagem principal', image:'assets/images/keval/warm-oak/warm-oak.jpg' },
      { name:'Warm Oak R1', label:'R1', image:'assets/images/keval/warm-oak/warm-oak-r1.jpg' },
      { name:'Warm Oak RV', label:'RV', image:'assets/images/keval/warm-oak/warm-oak-rv.jpg' },
      { name:'Warm Oak RVH', label:'RVH', image:'assets/images/keval/warm-oak/warm-oak-rvh.jpg' }
    ]
  }
];

const winasaData = [
  {
    id:'200x1200',
    title:'200×1200',
    subtitle:'Porcelana 200×1200',
    image:'assets/images/winasa/200x1200/ornament.jpg',
    collections:[
      {
        name:'Ornament Collection',
        type:'200×1200 Porcelain',
        image:'assets/images/winasa/200x1200/ornament.jpg',
        pdf:'https://www.dropbox.com/scl/fi/brzc077iv42u28z00lx7i/200x1200_ORNAMENT-COLLECTION.pdf?rlkey=4t7epi0p30r88bukp4r5sqnjk&st=onbu9ejd&raw=1'
      },
      {
        name:'Stave Collection',
        type:'200×1200 Porcelain',
        image:'assets/images/winasa/200x1200/stave.jpg',
        pdf:'https://www.dropbox.com/scl/fi/vgv27ub6whensnz9qh3ya/200x1200_STAVE-COLLECTION.pdf?rlkey=pccwrsn3riy3g7sxgvztajbrm&st=tk9qtjfm&raw=1'
      }
    ]
  },
  {
    id:'300x600',
    title:'300×600',
    subtitle:'Porcelana 300×600',
    image:'assets/images/winasa/300x600/matt.jpg',
    collections:[
      {
        name:'Matt',
        type:'300×600 Porcelain',
        image:'assets/images/winasa/300x600/matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/b30qy19605g83nha5tfig/300X600-MM-PORCELAIN-MATT.pdf?rlkey=rgyuhze9fd5b2r05tdybjd1lg&st=d7jjw24f&raw=1'
      },
      {
        name:'Polished',
        type:'300×600 Porcelain',
        image:'assets/images/winasa/300x600/polished.jpg',
        pdf:'https://www.dropbox.com/scl/fi/wcgrqfx7mx6omtx65c14l/300X600-MM-PORCELAIN-POLISHED.pdf?rlkey=jqnsfm07o5jvvgevm2i5wqulq&st=igqzgu3t&raw=1'
      }
    ]
  },
  {
    id:'600x600',
    title:'600×600',
    subtitle:'Porcelana 600×600',
    image:'assets/images/winasa/600x600/cover.jpg',
    collections:[
      {
        name:'EX-Series',
        type:'600×600 Porcelain',
        image:'assets/images/winasa/600x600/ex-series.jpg',
        pdf:'https://www.dropbox.com/scl/fi/euclrjulgqhjbfb42shs6/600x600-EX-SERIES.pdf?rlkey=mrhah22b7fkceamoflpwzuo7c&st=rqpnkgmg&raw=1'
      },
      {
        name:'Glossy',
        type:'600×600 Porcelain',
        image:'assets/images/winasa/600x600/glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/bmxtfgpl02fmvg2hx1jvx/600x600-PORCELAIN-GLOSSY-WINASA.pdf?rlkey=nxmbadx2lmbgqzty7xw5g2wgh&st=tk0ec837&raw=1'
      },
      {
        name:'High Gloss',
        type:'600×600 Porcelain',
        image:'assets/images/winasa/600x600/high-gloss.jpg',
        pdf:'https://www.dropbox.com/scl/fi/cdm6489ce4nrnqku4xcxu/600x600-PORCELAIN-HIGHGLOSS-WINASA.pdf?rlkey=d1lvui8ux3hgfwbvad2wvrxat&st=wqql0hwn&raw=1'
      },
      {
        name:'Matt',
        type:'600×600 Porcelain',
        image:'assets/images/winasa/600x600/matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/6q7z9qqan17lasrs87ohb/600x600-PORCELAIN-MATT-WINASA.pdf?rlkey=12sl9kr05fglv4rh7q8ow78d6&st=zxgb6t2j&raw=1'
      }
    ]
  },
  {
    id:'600x1200',
    title:'600×1200',
    subtitle:'Porcelana 600×1200',
    image:'assets/images/winasa/600x1200/new-exclusive-collection.jpg',
    collections:[
      {
        name:'Glossy',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/r76kt4iowgbx5wlfodpmq/600X1200-GLOSSY-WINASA.pdf?rlkey=zmcqaclo16jh3xdr10urgs6ss&st=xgt9nt9h&raw=1'
      },
      {
        name:'High Gloss',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/high-gloss.jpg',
        pdf:'https://www.dropbox.com/scl/fi/od42metzfqnmvcqyaixnl/600X1200-HIGHGLOSS-WINASA.pdf?rlkey=eieqvrgi3p0vd5lq1768idx78&st=xtq39o6v&raw=1'
      },
      {
        name:'Matt',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/matt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/3xws86s5tzm6iujeopmbw/600X1200-MATT-WINASA.pdf?rlkey=sxvp8yu62vq5wv7ajb8fag5oy&st=uj0cp0wr&raw=1'
      },
      {
        name:'New Exclusive Collection',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/new-exclusive-collection.jpg',
        pdf:'https://www.dropbox.com/scl/fi/c7boa5m5lqjzheq1wpbkl/600X1200-NEW-EXCLUSIVE-COLLECTION.pdf?rlkey=y14zluw1kb08gqpqp43fb59gq&st=7kryz17g&raw=1'
      },
      {
        name:'New Glossy',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/new-glossy.jpg',
        pdf:'https://www.dropbox.com/scl/fi/mna36wbd415oj731y6f36/600x1200-NEW-GLOSSY.pdf?rlkey=vmrijx32e0oi1h5are8l0r8zy&st=wp9hajkb&raw=1'
      },
      {
        name:'Satvario',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/satvario.jpg',
        pdf:'https://www.dropbox.com/scl/fi/0zr4n0u4iozk0cyqzpyg8/600x1200-SATVARIO.pdf?rlkey=wk2uvzuve3lhx0tptyo24806z&st=zumynlzw&raw=1'
      },
      {
        name:'Wood',
        type:'600×1200 Porcelain',
        image:'assets/images/winasa/600x1200/wood.jpg',
        pdf:'https://www.dropbox.com/scl/fi/0jreinpqvoip72zuhrpoc/600X1200-WOOD-WINASA.pdf?rlkey=hozds3h8b17qde7wd449uw4rv&st=s08zbdyf&raw=1'
      }
    ]
  },
  {
    id:'800x800',
    title:'800×800',
    subtitle:'Porcelana 800×800',
    image:'assets/images/winasa/800x800/cover.jpg',
    collections:[
      {
        name:'PGVT',
        type:'800×800 Porcelain',
        image:'assets/images/winasa/800x800/pgvt.jpg',
        pdf:'https://www.dropbox.com/scl/fi/qicsf31ds2dqvgpls8513/800x800-PGVT.pdf?rlkey=316r0uarqt9is03tv2yoswomf&st=9aardz6d&raw=1'
      }
    ]
  }
];

function showHome(){
  document.getElementById('home').classList.add('active');
  document.getElementById('factory').classList.remove('active');
  window.scrollTo({top:0, behavior:'smooth'});
}

function scrollHome(id){
  showHome();
  setTimeout(()=>document.getElementById(id)?.scrollIntoView({behavior:'smooth'}),80);
}


function openFactory(factory){
  if(!['winasa','sara','keval','lamigloss','stoneworks'].includes(factory)) return;
  currentFactory = factory;
  document.getElementById('home').classList.remove('active');
  document.getElementById('factory').classList.add('active');
  renderFactory(factory);
  window.scrollTo({top:0, behavior:'smooth'});
}

function pluralize(n){
  return n === 1 ? t('factory.collectionSingle') : replaceVars(t('factory.collectionPlural'), {n});
}

function renderFactory(factory){
  const meta = getFactoryCopy(factory);
  document.getElementById('factoryEyebrow').textContent = meta.eyebrow;
  document.getElementById('factoryTitle').textContent = meta.title;
  document.getElementById('factoryDescription').textContent = meta.description;
  document.getElementById('factoryIntroEyebrow').textContent = meta.introEyebrow;
  document.getElementById('factoryIntroTitle').textContent = meta.introTitle;
  document.getElementById('factoryIntroDescription').textContent = meta.introDescription;

  const hero = document.querySelector('.winasa-hero');
  hero.classList.toggle('sara-hero', factory === 'sara');
  hero.classList.toggle('keval-hero', factory === 'keval');
  hero.classList.toggle('lamigloss-hero', factory === 'lamigloss');
  hero.classList.toggle('stoneworks-hero', factory === 'stoneworks');

  const hub = document.getElementById('winasaFormats');
  hub.dataset.ready = '';
  hub.innerHTML = '';
  document.getElementById('winasaCollections').innerHTML = '';

  if(factory === 'winasa') renderWinasaFormats();
  if(factory === 'sara') renderSaraFormats();
  if(factory === 'keval') renderKevalCollections();
  if(factory === 'lamigloss') renderLamiGlossCatalog();
  if(factory === 'stoneworks') renderStoneWorksCatalogs();
}

function renderWinasaFormats(){
  const hub = document.getElementById('winasaFormats');
  if(!hub || hub.dataset.ready === 'winasa') return;

  hub.innerHTML = `
    <div class="format-hub-inner">
      ${winasaData.map(format => `
        <article class="format-tile" onclick="selectFormat('${format.id}')">
          <div class="format-tile-bg" style="background-image:url('${format.image}')"></div>
          <div class="format-tile-shade"></div>
          <div class="format-tile-content">
            <small>${format.subtitle}</small>
            <h2>${format.title}</h2>
            <p>${pluralize(format.collections.length)}</p>
            <span>${t('factory.seeCollections')}</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  hub.dataset.ready = 'winasa';
  selectFormat('600x1200', false);
}


function renderSaraFormats(){
  const hub = document.getElementById('winasaFormats');
  if(!hub || hub.dataset.ready === 'sara') return;

  hub.innerHTML = `
    <div class="format-hub-inner sara-grid">
      ${saraEximData.map(format => `
        <article class="format-tile ${format.image ? '' : 'format-tile-empty'}" onclick="selectSaraFormat('${format.id}')">
          <div class="format-tile-bg" ${format.image ? `style="background-image:url('${format.image}')"` : ''}></div>
          <div class="format-tile-shade"></div>
          <div class="format-tile-content">
            <small>${format.subtitle}</small>
            <h2>${format.title}</h2>
            <p>${pluralize(format.collectionsCount)} ${t('factory.available')}</p>
            <span>${format.collections ? t('factory.seeCatalog') : t('factory.prepareCatalogs')}</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  hub.dataset.ready = 'sara';
  selectSaraFormat(factoryMeta.sara.defaultFormat, false);
}


function renderStoneWorksCatalogs(){
  const hub = document.getElementById('winasaFormats');
  if(!hub || hub.dataset.ready === 'stoneworks') return;
  hub.innerHTML = `
    <div class="format-hub-inner sara-grid">
      ${stoneWorksData.map(item => `
        <article class="format-tile" onclick="selectStoneWorksCatalog('${item.id}')">
          <div class="format-tile-bg" style="background-image:url('${item.image}')"></div>
          <div class="format-tile-shade"></div>
          <div class="format-tile-content">
            <small>${item.subtitle}</small><h2>${item.title}</h2>
            <p>${t('factory.catalog')}</p><span>${t('factory.seeCatalog')}</span>
          </div>
        </article>`).join('')}
    </div>`;
  hub.dataset.ready = 'stoneworks';
  selectStoneWorksCatalog(factoryMeta.stoneworks.defaultFormat, false);
}

function selectStoneWorksCatalog(id, scroll=true){
  const item = stoneWorksData.find(entry => entry.id === id) || stoneWorksData[0];
  const area = document.getElementById('winasaCollections');
  area.innerHTML = `
    <div class="collections-head"><p class="eyebrow">StoneWorks</p><h2>${item.title}</h2><p>${getFactoryCopy('stoneworks').description}</p></div>
    <div class="collection-grid"><article class="collection-card">
      <div class="collection-img" style="background-image:url('${item.image}')"></div>
      <div class="collection-info"><small>StoneWorks</small><h3>${item.title}</h3>
      <button class="line-btn" onclick="openPDF('${item.pdf}','${item.title.replace(/'/g,"\'")}')">${t('factory.seeCatalog')}</button></div>
    </article></div>`;
  if(scroll) area.scrollIntoView({behavior:'smooth', block:'start'});
}

function renderLamiGlossCatalog(){
  const hub = document.getElementById('winasaFormats');
  if(!hub || hub.dataset.ready === 'lamigloss') return;

  const item = lamiGlossData[0];
  hub.innerHTML = `
    <div class="format-hub-inner sara-grid">
      <article class="format-tile" onclick="selectLamiGlossCatalog()">
        <div class="format-tile-bg" style="background-image:url('${item.image}')"></div>
        <div class="format-tile-shade"></div>
        <div class="format-tile-content">
          <small>${item.subtitle}</small>
          <h2>${item.title}</h2>
          <p>${t('factory.catalog')}</p>
          <span>${t('factory.seeCatalog')}</span>
        </div>
      </article>
    </div>
  `;

  hub.dataset.ready = 'lamigloss';
  selectLamiGlossCatalog(false);
}

function selectLamiGlossCatalog(scroll=true){
  const item = lamiGlossData[0];
  const area = document.getElementById('winasaCollections');
  area.innerHTML = `
    <div class="collections-head">
      <p class="eyebrow">Lami Gloss</p>
      <h2>${item.title}</h2>
      <p>${getFactoryCopy('lamigloss').description}</p>
    </div>
    <div class="collection-grid">
      <article class="collection-card">
        <div class="collection-img" style="background-image:url('${item.image}')"></div>
        <div class="collection-info">
          <small>Lami Gloss</small>
          <h3>${t('factory.catalog')}</h3>
          <button class="line-btn" onclick="openPDF('${item.pdf}','Lami Gloss')">${t('factory.seeCatalog')}</button>
        </div>
      </article>
    </div>
  `;
  if(scroll) area.scrollIntoView({behavior:'smooth', block:'start'});
}

function renderKevalCollections(){
  const hub = document.getElementById('winasaFormats');
  if(!hub || hub.dataset.ready === 'keval') return;

  hub.innerHTML = `
    <div class="format-hub-inner sara-grid">
      ${kevalData.map(item => `
        <article class="format-tile ${item.image ? '' : 'format-tile-empty'}" onclick="selectKevalCollection('${item.id}')">
          <div class="format-tile-bg" ${item.image ? `style="background-image:url('${item.image}')"` : ''}></div>
          <div class="format-tile-shade"></div>
          <div class="format-tile-content">
            <small>${item.subtitle}</small>
            <h2>${item.title}</h2>
            <p>${item.variantsCount ? pluralize(item.variantsCount) : t('factory.available')}</p>
            <span>${item.variants ? t('factory.seeGallery') : t('factory.prepareGallery')}</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  hub.dataset.ready = 'keval';
  selectKevalCollection(factoryMeta.keval.defaultFormat, false);
}

function selectKevalCollection(id, scroll=true){
  const item = kevalData.find(c => c.id === id) || kevalData[0];
  const area = document.getElementById('winasaCollections');
  const variants = item.variants || [];
  const main = variants[0];
  const detailVariants = variants.slice(1);
  const isPdfCollection = Boolean(item.pdf);

  let content = `
    <div class="collections-head keval-collections-head">
      <p class="eyebrow">${item.subtitle}</p>
      <h2>${item.title}</h2>
      <p>${isPdfCollection ? t('factory.luxeText') : (variants.length ? replaceVars(t('factory.galleryText'), {count: variants.length}) : t('factory.futureGalleryText'))}</p>
    </div>
  `;

  if(isPdfCollection){
    content += `
      <div class="collection-grid">
        <article class="collection-card collection-card-luxe">
          <div class="collection-img" style="background-image:url('${item.image}')"></div>
          <div class="collection-info">
            <small>Keo Surfaces</small>
            <h3>${item.title}</h3>
            <button class="line-btn" onclick="openPDF('${item.pdf}','${item.title}')">${t('factory.seeCatalog')}</button>
          </div>
        </article>
      </div>
    `;
  } else if(variants.length){
    content += `
      <section class="keval-detail-layout">
        <article class="keval-feature-card" onclick="openImage('${main.image}','${main.name}')">
          <div class="keval-feature-image">
            <img src="${main.image}" alt="${main.name}">
          </div>
          <div class="keval-feature-info">
            <small>${t('factory.mainImage')}</small>
            <h3>${item.title}</h3>
            <button class="line-btn" onclick="event.stopPropagation();openImage('${main.image}','${main.name}')">${t('factory.viewImage')}</button>
          </div>
        </article>

        <div class="keval-variant-grid">
          ${detailVariants.map(variant => `
            <article class="keval-variant-card" onclick="openImage('${variant.image}','${variant.name}')">
              <div class="keval-variant-image">
                <img src="${variant.image}" alt="${variant.name}">
              </div>
              <div class="keval-variant-info">
                <small>${variant.label}</small>
                <h3>${variant.name}</h3>
              </div>
            </article>
          `).join('')}
        </div>
      </section>
    `;
  } else {
    content += `
      <div class="collection-grid collection-grid-empty">
        <article class="collection-card collection-card-empty">
          <div class="collection-info">
            <small>Keo Surfaces</small>
            <h3>${t('factory.emptyKevalTitle')}</h3>
            <p>${t('factory.emptyKevalText')}</p>
          </div>
        </article>
      </div>
    `;
  }

  area.innerHTML = content;
  if(scroll) area.scrollIntoView({behavior:'smooth', block:'start'});
}

function resetModalViewer(){
  const oldViewer = document.getElementById('pdfViewer');
  const viewer = oldViewer.cloneNode(false);
  oldViewer.parentNode.replaceChild(viewer, oldViewer);
  return viewer;
}

function openImage(src,title='Imagem'){
  const viewer = resetModalViewer();
  document.getElementById('pdfTitle').textContent = title;
  viewer.removeAttribute('src');
  viewer.srcdoc = `<html><body style="margin:0;background:#050505;display:flex;align-items:center;justify-content:center;min-height:100vh"><img src="${src}" style="max-width:100%;max-height:100vh;object-fit:contain;display:block"></body></html>`;
  document.getElementById('pdfModal').classList.add('active');
}

function selectFormat(id, scroll=true){
  const format = winasaData.find(f => f.id === id) || winasaData[0];
  const area = document.getElementById('winasaCollections');

  area.innerHTML = `
    <div class="collections-head">
      <p class="eyebrow">${format.subtitle}</p>
      <h2>${format.title}</h2>
      <p>${replaceVars(t('factory.availableInFormat'), {count: pluralize(format.collections.length)})}</p>
    </div>

    <div class="collection-grid">
      ${format.collections.map(item => `
        <article class="collection-card">
          <div class="collection-img" style="background-image:url('${item.image}')"></div>
          <div class="collection-info">
            <small>${item.type}</small>
            <h3>${item.name}</h3>
            <button class="line-btn" onclick="openPDF('${item.pdf}','${item.name}')">${t('factory.seeCatalog')}</button>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  if(scroll) area.scrollIntoView({behavior:'smooth', block:'start'});
}


function selectSaraFormat(id, scroll=true){
  const format = saraEximData.find(f => f.id === id) || saraEximData[0];
  const area = document.getElementById('winasaCollections');
  const collections = format.collections || [];

  area.innerHTML = `
    <div class="collections-head">
      <p class="eyebrow">${format.subtitle}</p>
      <h2>${format.title}</h2>
      <p>${replaceVars(t('factory.availableInFormat'), {count: pluralize(format.collectionsCount)})}</p>
    </div>

    ${collections.length ? `
      <div class="collection-grid">
        ${collections.map(item => `
          <article class="collection-card">
            <div class="collection-img" style="background-image:url('${item.image}')"></div>
            <div class="collection-info">
              <small>${item.type}</small>
              <h3>${item.name}</h3>
              <button class="line-btn" onclick="openPDF('${item.pdf}','${item.name}')">${t('factory.seeCatalog')}</button>
            </div>
          </article>
        `).join('')}
      </div>
    ` : `
      <div class="collection-grid collection-grid-empty">
        <article class="collection-card collection-card-empty">
          <div class="collection-info">
            <small>Sara Exim</small>
            <h3>${t('factory.emptySaraTitle')}</h3>
            <p>${t('factory.emptySaraText')}</p>
          </div>
        </article>
      </div>
    `}
  `;

  if(scroll) area.scrollIntoView({behavior:'smooth', block:'start'});
}

function isIOSDevice(){
  return /iPad|iPhone|iPod/.test(navigator.userAgent) ||
    (navigator.platform === 'MacIntel' && navigator.maxTouchPoints > 1);
}

function openPDF(src,title=t('factory.catalog')){
  if(isIOSDevice()){
    window.open(src, '_blank', 'noopener');
    return;
  }

  document.getElementById('pdfTitle').textContent = title;
  const viewer = resetModalViewer();
  viewer.removeAttribute('srcdoc');
  viewer.src = src;
  document.getElementById('pdfModal').classList.add('active');
}

function closePDF(){
  const viewer = document.getElementById('pdfViewer');
  viewer.removeAttribute('src');
  viewer.removeAttribute('srcdoc');
  document.getElementById('pdfModal').classList.remove('active');
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closePDF();
});



function toggleContactWidget(){
  const widget = document.getElementById('contactWidget');
  if(widget) widget.classList.toggle('open');
}

function closeContactWidget(){
  const widget = document.getElementById('contactWidget');
  if(widget) widget.classList.remove('open');
}

// Robust click support for factory cards (GitHub Pages/cache-safe)
document.addEventListener('DOMContentLoaded', () => {
  translateStaticContent();
  document.querySelectorAll('[data-factory]').forEach(card => {
    const factory = card.getAttribute('data-factory');
    card.addEventListener('click', () => openFactory(factory));
    card.addEventListener('keydown', event => {
      if(event.key === 'Enter' || event.key === ' '){
        event.preventDefault();
        openFactory(factory);
      }
    });
  });
});

window.openFactory = openFactory;
window.showHome = showHome;
window.scrollHome = scrollHome;
window.selectFormat = selectFormat;
window.selectSaraFormat = selectSaraFormat;
window.selectKevalCollection = selectKevalCollection;
window.openPDF = openPDF;
window.openImage = openImage;
window.closePDF = closePDF;
window.toggleContactWidget = toggleContactWidget;
window.closeContactWidget = closeContactWidget;


document.addEventListener('click', event => {
  const switcher = document.querySelector('.language-switcher');
  if(switcher && !switcher.contains(event.target)) closeLanguageMenu();
});

window.setLanguage = setLanguage;
window.toggleLanguageMenu = toggleLanguageMenu;
