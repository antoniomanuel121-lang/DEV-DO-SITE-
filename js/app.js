
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
  { id:'30x60', title:'30×60', subtitle:'Sara Exim 30×60', collectionsCount:7 },
  { id:'30x90', title:'30×90', subtitle:'Sara Exim 30×90', collectionsCount:6 },
  { id:'60x60', title:'60×60', subtitle:'Sara Exim 60×60', collectionsCount:19 },
  { id:'60x120', title:'60×120', subtitle:'Sara Exim 60×120', collectionsCount:17 },
  { id:'80x120', title:'80×120', subtitle:'Sara Exim 80×120', collectionsCount:5 },
  { id:'80x160', title:'80×160', subtitle:'Sara Exim 80×160', collectionsCount:13 },
  { id:'120x120', title:'120×120', subtitle:'Sara Exim 120×120', collectionsCount:4 },
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
    defaultFormat: '60x60'
  }
};

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
  if(!['winasa','sara'].includes(factory)) return;
  currentFactory = factory;
  document.getElementById('home').classList.remove('active');
  document.getElementById('factory').classList.add('active');
  renderFactory(factory);
  window.scrollTo({top:0, behavior:'smooth'});
}

function pluralize(n){
  return n === 1 ? '1 coleção' : `${n} coleções`;
}

function renderFactory(factory){
  const meta = factoryMeta[factory];
  document.getElementById('factoryEyebrow').textContent = meta.eyebrow;
  document.getElementById('factoryTitle').textContent = meta.title;
  document.getElementById('factoryDescription').textContent = meta.description;
  document.getElementById('factoryIntroEyebrow').textContent = meta.introEyebrow;
  document.getElementById('factoryIntroTitle').textContent = meta.introTitle;
  document.getElementById('factoryIntroDescription').textContent = meta.introDescription;

  const hero = document.querySelector('.winasa-hero');
  hero.classList.toggle('sara-hero', factory === 'sara');

  const hub = document.getElementById('winasaFormats');
  hub.dataset.ready = '';
  hub.innerHTML = '';
  document.getElementById('winasaCollections').innerHTML = '';

  if(factory === 'winasa') renderWinasaFormats();
  if(factory === 'sara') renderSaraFormats();
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
            <span>Ver coleções →</span>
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
            <p>${pluralize(format.collectionsCount)} disponíveis</p>
            <span>${format.collections ? 'Ver catálogo →' : 'Preparado para catálogos →'}</span>
          </div>
        </article>
      `).join('')}
    </div>
  `;

  hub.dataset.ready = 'sara';
  selectSaraFormat('60x60', false);
}

function selectFormat(id, scroll=true){
  const format = winasaData.find(f => f.id === id) || winasaData[0];
  const area = document.getElementById('winasaCollections');

  area.innerHTML = `
    <div class="collections-head">
      <p class="eyebrow">${format.subtitle}</p>
      <h2>${format.title}</h2>
      <p>${pluralize(format.collections.length)} disponíveis neste formato.</p>
    </div>

    <div class="collection-grid">
      ${format.collections.map(item => `
        <article class="collection-card">
          <div class="collection-img" style="background-image:url('${item.image}')"></div>
          <div class="collection-info">
            <small>${item.type}</small>
            <h3>${item.name}</h3>
            <button class="line-btn" onclick="openPDF('${item.pdf}','${item.name}')">Ver catálogo →</button>
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
      <p>${pluralize(format.collectionsCount)} disponíveis neste formato.</p>
    </div>

    ${collections.length ? `
      <div class="collection-grid">
        ${collections.map(item => `
          <article class="collection-card">
            <div class="collection-img" style="background-image:url('${item.image}')"></div>
            <div class="collection-info">
              <small>${item.type}</small>
              <h3>${item.name}</h3>
              <button class="line-btn" onclick="openPDF('${item.pdf}','${item.name}')">Ver catálogo →</button>
            </div>
          </article>
        `).join('')}
      </div>
    ` : `
      <div class="collection-grid collection-grid-empty">
        <article class="collection-card collection-card-empty">
          <div class="collection-info">
            <small>Sara Exim</small>
            <h3>Coleções em preparação</h3>
            <p>Este formato já está estruturado. As miniaturas reais e os PDFs serão adicionados assim que os catálogos completos forem recebidos.</p>
          </div>
        </article>
      </div>
    `}
  `;

  if(scroll) area.scrollIntoView({behavior:'smooth', block:'start'});
}

function openPDF(src,title='Catálogo'){
  document.getElementById('pdfTitle').textContent = title;
  document.getElementById('pdfViewer').src = src;
  document.getElementById('pdfModal').classList.add('active');
}

function closePDF(){
  document.getElementById('pdfViewer').src = '';
  document.getElementById('pdfModal').classList.remove('active');
}

document.addEventListener('keydown', e => {
  if(e.key === 'Escape') closePDF();
});


// Robust click support for factory cards (GitHub Pages/cache-safe)
document.addEventListener('DOMContentLoaded', () => {
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
window.openPDF = openPDF;
window.closePDF = closePDF;
