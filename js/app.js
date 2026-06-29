const winasaFormats = [
  {
    title:'200×1200',
    subtitle:'Porcelana 200×1200',
    text:'Formato alongado para projetos com leitura linear, pavimentos contínuos e ambientes comerciais ou residenciais com impacto visual.',
    image:'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1600&q=90',
    pdf:'assets/catalogos/winasa/porcelana-200x1200.pdf'
  },
  {
    title:'300×600',
    subtitle:'Porcelana 300×600',
    text:'Formato versátil para parede e pavimento, indicado para soluções comerciais com boa rotação e aplicação simples.',
    image:'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=1600&q=90',
    pdf:'assets/catalogos/winasa/porcelana-300x600.pdf'
  },
  {
    title:'600×600',
    subtitle:'Porcelana 600×600',
    text:'Formato quadrado de grande procura, equilibrando estética, logística e facilidade de aplicação em volume.',
    image:'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1600&q=90',
    pdf:'assets/catalogos/winasa/porcelana-600x600.pdf'
  },
  {
    title:'600×1200',
    subtitle:'Porcelana 600×1200',
    text:'Formato grande com apresentação premium, indicado para clientes que procuram peças maiores e ambientes mais limpos.',
    image:'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1600&q=90',
    pdf:'assets/catalogos/winasa/porcelana-600x1200.pdf'
  },
  {
    title:'800×800',
    subtitle:'Porcelana 800×800',
    text:'Formato quadrado de grandes dimensões, indicado para áreas amplas, lojas, espaços comerciais e projetos de maior escala.',
    image:'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=1600&q=90',
    pdf:'assets/catalogos/winasa/porcelana-800x800.pdf'
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
  renderWinasa();
  window.scrollTo({top:0, behavior:'smooth'});
}

function renderWinasa(){
  const wrap = document.getElementById('winasaMagazine');
  if(!wrap || wrap.dataset.ready) return;
  wrap.innerHTML = winasaFormats.map(item => `
    <article class="format-section">
      <div class="format-image" style="background-image:url('${item.image}')"></div>
      <div class="format-copy">
        <small>Winasa Porcelain</small>
        <h2>${item.title}</h2>
        <p>${item.text}</p>
        <div class="format-actions">
          <button class="line-btn" onclick="openPDF('${item.pdf}','${item.subtitle}')">Ver catálogo →</button>
          <button class="line-btn" onclick="window.open('${item.pdf}','_blank')">Download</button>
        </div>
      </div>
    </article>
  `).join('');
  wrap.dataset.ready = '1';
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
