const winasaData = [
  {
    id:'200x1200',
    title:'200×1200',
    subtitle:'Porcelana 200×1200',
    image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90',
    collections:[
      {
        name:'Ornament Collection',
        type:'200×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90',
        pdf:'assets/catalogos/winasa/200x1200-ornament-collection.pdf'
      },
      {
        name:'Stave Collection',
        type:'200×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=90',
        pdf:'assets/catalogos/winasa/200x1200-stave-collection.pdf'
      },
      {
        name:'Live Display',
        type:'200×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=90',
        pdf:'assets/catalogos/winasa/200x1200-live-display.pdf'
      }
    ]
  },
  {
    id:'300x600',
    title:'300×600',
    subtitle:'Porcelana 300×600',
    image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=90',
    collections:[
      {
        name:'Matt',
        type:'300×600 Porcelain',
        image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=90',
        pdf:'assets/catalogos/winasa/300x600-matt.pdf'
      },
      {
        name:'Polished',
        type:'300×600 Porcelain',
        image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90',
        pdf:'assets/catalogos/winasa/300x600-polished.pdf'
      }
    ]
  },
  {
    id:'600x600',
    title:'600×600',
    subtitle:'Porcelana 600×600',
    image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90',
    collections:[
      {
        name:'EX-Series',
        type:'600×600 Porcelain',
        image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x600-ex-series.pdf'
      },
      {
        name:'Glossy',
        type:'600×600 Porcelain',
        image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x600-glossy.pdf'
      },
      {
        name:'High Gloss',
        type:'600×600 Porcelain',
        image:'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x600-high-gloss.pdf'
      },
      {
        name:'Matt',
        type:'600×600 Porcelain',
        image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x600-matt.pdf'
      }
    ]
  },
  {
    id:'600x1200',
    title:'600×1200',
    subtitle:'Porcelana 600×1200',
    image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=90',
    collections:[
      {
        name:'Glossy',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-glossy.pdf'
      },
      {
        name:'High Gloss',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-high-gloss.pdf'
      },
      {
        name:'Matt',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-matt.pdf'
      },
      {
        name:'New Exclusive Collection',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-new-exclusive-collection.pdf'
      },
      {
        name:'New Glossy',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1604709177225-055f99402ea3?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-new-glossy.pdf'
      },
      {
        name:'Satvario',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600607688969-a5bfcd646154?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-satvario.pdf'
      },
      {
        name:'Wood',
        type:'600×1200 Porcelain',
        image:'https://images.unsplash.com/photo-1600566752355-35792bedcfea?w=1400&q=90',
        pdf:'assets/catalogos/winasa/600x1200-wood.pdf'
      }
    ]
  },
  {
    id:'800x800',
    title:'800×800',
    subtitle:'Porcelana 800×800',
    image:'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&q=90',
    collections:[
      {
        name:'PGVT',
        type:'800×800 Porcelain',
        image:'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1400&q=90',
        pdf:'assets/catalogos/winasa/800x800-pgvt.pdf'
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
  if(factory !== 'winasa') return;
  document.getElementById('home').classList.remove('active');
  document.getElementById('factory').classList.add('active');
  renderWinasaFormats();
  window.scrollTo({top:0, behavior:'smooth'});
}

function pluralize(n){
  return n === 1 ? '1 coleção' : `${n} coleções`;
}

function renderWinasaFormats(){
  const hub = document.getElementById('winasaFormats');
  if(!hub || hub.dataset.ready) return;

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

  hub.dataset.ready = '1';
  selectFormat('600x1200', false);
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
