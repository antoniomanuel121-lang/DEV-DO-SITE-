const catalogs = [
  {
    id: '200x1200',
    format: '200×1200',
    title: 'Porcelana 200×1200',
    description: 'Formato alongado para projetos com leitura linear, pavimentos contínuos e ambientes comerciais ou residenciais de maior impacto visual.',
    image: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1400&q=90',
    pdf: 'assets/catalogos/winasa/porcelana-200x1200.pdf'
  },
  {
    id: '300x600',
    format: '300×600',
    title: 'Porcelana 300×600',
    description: 'Formato versátil para parede e pavimento, adequado a projetos com necessidade de variedade, eficiência e aplicação simples.',
    image: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1400&q=90',
    pdf: 'assets/catalogos/winasa/porcelana-300x600.pdf'
  },
  {
    id: '600x600',
    format: '600×600',
    title: 'Porcelana 600×600',
    description: 'Formato quadrado de grande procura, equilibrando estética, logística e facilidade de aplicação em volumes comerciais.',
    image: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1400&q=90',
    pdf: 'assets/catalogos/winasa/porcelana-600x600.pdf'
  },
  {
    id: '600x1200',
    format: '600×1200',
    title: 'Porcelana 600×1200',
    description: 'Formato grande com apresentação premium, indicado para clientes que procuram peças maiores e ambientes visualmente mais limpos.',
    image: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1400&q=90',
    pdf: 'assets/catalogos/winasa/porcelana-600x1200.pdf'
  },
  {
    id: '800x800',
    format: '800×800',
    title: 'Porcelana 800×800',
    description: 'Formato quadrado de grandes dimensões, indicado para projetos comerciais, lojas, áreas comuns e espaços amplos.',
    image: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1400&q=90',
    pdf: 'assets/catalogos/winasa/porcelana-800x800.pdf'
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
  renderCatalogs();
  window.scrollTo({top:0, behavior:'smooth'});
}
function renderCatalogs(){
  const list = document.getElementById('catalogList');
  if(!list || list.dataset.ready) return;
  list.innerHTML = catalogs.map(item => `
    <article class="catalog-item" onclick="selectCatalog('${item.id}')">
      <div class="catalog-img" style="background-image:url('${item.image}')"></div>
      <div class="catalog-info">
        <p class="kicker">Winasa Porcelain</p>
        <div class="format">${item.format}</div>
        <p>${item.description}</p>
        <span>Ver catálogo →</span>
      </div>
    </article>
  `).join('');
  list.dataset.ready = '1';
  selectCatalog('200x1200', false);
}
function selectCatalog(id, scroll=true){
  const item = catalogs.find(c => c.id === id) || catalogs[0];
  const detail = document.getElementById('catalogDetail');
  detail.innerHTML = `
    <div class="detail-card">
      <div class="detail-img" style="background-image:url('${item.image}')"></div>
      <div class="detail-info">
        <p class="kicker">Catálogo Winasa</p>
        <h2>${item.title}</h2>
        <p>${item.description}</p>
        <div class="detail-actions">
          <button class="line-btn" onclick="openPDF('${item.pdf}')">Abrir PDF</button>
          <button class="line-btn" onclick="window.open('${item.pdf}', '_blank')">Download</button>
        </div>
      </div>
    </div>
  `;
  if(scroll) detail.scrollIntoView({behavior:'smooth', block:'start'});
}
function openPDF(src){
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
