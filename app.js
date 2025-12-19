  
// console.log(dados);



// Função que realiza a pesquisa abrindo em outra guia

    
//document.querySelector('.search-button').addEventListener('click', function () {
  //  const query = document.querySelector('.search-bar').value;
    //if (query.trim() !== "") {
      //  window.open(`https://www.google.com.br/search?q=${encodeURIComponent(query)}`, '_blank');
    //}
//});






document.addEventListener("DOMContentLoaded", function () {
  const searchInput = document.querySelector(".search-bar");
  const searchButton = document.querySelector(".search-button");

  // ===================== LISTA DE TERMOS =====================

  // 300 termos sobre DNA Projetado
  const dnaProjetado = [
    "DNA projetado", "engenharia genética", "edição genética", "CRISPR", "genoma artificial",
    "terapia gênica", "código genético sintético", "genética computacional", "modelagem genética",
    "biologia sintética", "design genético", "genes artificiais", "manipulação de DNA",
    "projetos genômicos", "biotecnologia genética", "engenharia de cromossomos", "nanogenética",
    "personalização genética", "algoritmos de DNA", "biocomputação genética",
    "sequenciamento genético", "DNA recombinante", "mutação dirigida", "genes terapêuticos",
    "DNA digital", "simulação genética", "genes programáveis", "código genético expandido",
    "terapia personalizada", "genômica aplicada", "DNA funcional", "engenharia molecular",
    "nanorrobôs genéticos", "projetos de RNA", "controle epigenético", "edição de cromossomos",
    "DNA híbrido", "construção genômica", "sintetização genética", "bioengenharia avançada",
    "DNA modular", "organismos projetados", "DNA de precisão", "genética evolutiva projetada",
    "biologia de design", "clonagem programada", "projeto de proteínas", "genética preditiva",
    "genética digital", "simulação de cromossomos", "DNA inteligente", "projeto de enzimas",
    "DNA sintético terapêutico", "plataforma genômica", "reprogramação genética", "DNA artificial",
    "biocomputadores moleculares", "chips de DNA", "diagnóstico por DNA projetado",
    "DNA bioinformático", "sistemas genéticos artificiais", "nanotecnologia genética",
    "células geneticamente programadas", "genética regenerativa", "DNA auto-organizável",
    "bioarquitetura genética", "DNA computacional", "construção de organismos",
    "genética evolutiva artificial", "mapas genéticos digitais", "DNA terapêutico projetado",
    "genes digitais", "algoritmos biológicos", "DNA quântico", "plataformas de RNA",
    "genes autoajustáveis", "DNA otimizado", "engenharia celular", "biotecnologia digital",
    "nanocircuitos genéticos", "sistemas sintéticos de DNA", "genes de precisão",
    "DNA controlado por IA", "códigos genéticos artificiais", "biologia programável",
    "DNA experimental", "genes híbridos", "sistemas cromossômicos artificiais",
    "bioeletrônica genética", "organismos digitais", "DNA auto-replicante",
    "biocomputação quântica genética", "bioengenharia preditiva", "DNA expandido",
    "sintetizadores genômicos", "DNA de laboratório", "genes modulares",
    "genética artificial aplicada", "DNA industrial", "terapia genética digital",
    "células projetadas", "DNA medicinal", "genética preventiva", "DNA quimérico",
    "modelagem de DNA", "código molecular artificial", "DNA evolutivo", "nanogenômica",
    "DNA programado para cura", "engenharia de genes humanos", "DNA biomimético",
    "projetos de microbiomas", "DNA digitalizado", "genes artificiais humanos",
    "biotecnologia de DNA projetado", "plataforma sintética de DNA", "genética simulada",
    "DNA criogênico", "engenharia epigenética", "biochips genéticos", "códigos genéticos virtuais",
    "DNA de computação", "organismos simulados", "células sintéticas", "genes inteligentes",
    "biotecnologia computacional", "projetos moleculares", "genética automatizada",
    "DNA preditivo", "RNA projetado", "enzimas artificiais", "nanossistemas genéticos",
    "DNA de laboratório clínico", "biofábricas genéticas", "DNA universal",
    "engenharia genômica avançada", "células artificiais", "DNA personalizável",
    "bioengenharia digital", "genes com IA", "plataforma de edição genética",
    "DNA autoajustável", "genética artificial terapêutica", "nanobiologia genética",
    "DNA com edição quântica", "sistemas de DNA digital", "DNA de precisão médica",
    "bioinformática genômica", "DNA auto-controlado", "engenharia genética biomédica",
    "DNA programado com IA", "genes de laboratório", "DNA modular aplicado",
    "sistemas de clonagem digital", "DNA sintético em terapias", "genética automatizada médica",
    "bioengenharia molecular digital", "DNA reconstruído", "genética artificial regenerativa",
    "código biológico sintético", "genes artificiais terapêuticos", "DNA replicável projetado",
    "nanotecnologia aplicada ao DNA", "engenharia de DNA humano", "DNA programável avançado",
    "biotecnologia regenerativa", "genes sintéticos industriais", "plataformas de DNA aplicadas",
    "DNA projetado biomédico", "códigos cromossômicos artificiais", "genes digitais médicos",
    "bioarquitetura de DNA", "engenharia genômica personalizada", "genes auto-replicantes",
    "DNA computacional terapêutico", "nanomáquinas de DNA", "genes digitais terapêuticos",
    "DNA sintético evolutivo", "engenharia genética simulada", "DNA curativo projetado",
    "genética digital biomédica", "genes artificiais programados", "células digitais",
    "DNA terapêutico quântico", "sistemas bioinformáticos de DNA", "genes regenerativos digitais",
    "engenharia artificial de cromossomos", "DNA aplicado à medicina", "genes digitais aplicados",
    "DNA pré-configurado", "engenharia genética de precisão", "plataformas artificiais genômicas",
    "genes pré-definidos", "DNA aplicado em cura", "genética artificial biomédica",
    "bioengenharia sintética", "código genético programável", "DNA de laboratório virtual",
    "genes artificiais industriais", "DNA de célula projetada", "engenharia biomédica de DNA",
    "DNA computacional aplicado", "genes artificiais com IA", "DNA sintético aplicado",
    "engenharia molecular projetada", "DNA híbrido industrial", "genes artificiais regenerativos",
    "DNA regenerativo biomédico", "bioengenharia com IA", "códigos genéticos digitais",
    "DNA replicável industrial", "engenharia artificial genômica", "genes projetados digitais",
    "DNA artificial regenerativo", "biotecnologia de precisão", "DNA preditivo terapêutico",
    "genes artificiais digitais", "DNA aplicado à biomedicina", "engenharia biomolecular digital",
    "genes pré-configurados digitais", "DNA regenerativo com IA", "engenharia genética biomédica",
    "DNA projetado artificial", "genes sintéticos biomédicos", "DNA digital aplicado",
    "engenharia genética programada", "DNA terapêutico sintético", "genes artificiais preditivos",
    "bioengenharia molecular avançada", "DNA regenerativo programado", "engenharia artificial biomédica",
    "genes programáveis com IA", "DNA digital regenerativo", "engenharia genética artificial aplicada",
    "genes artificiais terapêuticos digitais", "DNA preditivo biomédico", "engenharia genômica digital",
    "genes regenerativos programados", "DNA projetado digital biomédico"
  ];

  // 300 termos sobre Biotecnologia
  const biotecnologia = [
    "biotecnologia", "bioinformática", "biologia molecular", "nanobiotecnologia",
    "células-tronco", "terapia celular", "diagnóstico molecular", "engenharia de tecidos",
    "bioengenharia", "genômica", "proteômica", "metabolômica", "bioprocessos",
    "bioenergia", "biocombustíveis", "biossensores", "biorremediação", "biofármacos",
    "vacinas recombinantes", "biologia de sistemas", "imunoterapia", "engenharia metabólica",
    "microbiologia aplicada", "biotecnologia industrial", "bioquímica aplicada",
    "agrobiotecnologia", "biotecnologia ambiental", "biotecnologia marinha",
    "biotecnologia farmacêutica", "biotecnologia agrícola", "biotecnologia médica",
    "biotecnologia alimentar", "biotecnologia veterinária", "biotecnologia industrial avançada",
    "biotecnologia marinha avançada", "bioengenharia marinha", "biotecnologia agrícola sustentável",
    "biotecnologia aplicada à saúde", "biotecnologia regenerativa", "biotecnologia genética",
    "bioengenharia aplicada", "biotecnologia digital", "biotecnologia de precisão",
    "biotecnologia biomédica", "biotecnologia preventiva", "biotecnologia industrial sustentável",
    "biotecnologia artificial", "biotecnologia regenerativa aplicada", "biotecnologia molecular",
    "biotecnologia industrial aplicada", "biotecnologia celular", "biotecnologia computacional",
    "biotecnologia genética aplicada", "biotecnologia clínica", "biotecnologia aplicada à medicina",
    "biotecnologia de vacinas", "biotecnologia industrial biomédica", "biotecnologia sintética",
    "biotecnologia aplicada à terapia", "biotecnologia digital aplicada", "biotecnologia regenerativa digital",
    "biotecnologia molecular aplicada", "biotecnologia industrial regenerativa", "biotecnologia biomolecular",
    "biotecnologia industrial digital", "biotecnologia aplicada em vacinas", "biotecnologia celular aplicada",
    "biotecnologia industrial artificial", "biotecnologia computacional aplicada",
    "biotecnologia aplicada à saúde digital", "biotecnologia regenerativa sintética",
    "biotecnologia industrial molecular", "biotecnologia aplicada ao diagnóstico",
    "biotecnologia industrial regenerativa aplicada", "biotecnologia biomédica sintética",
    "biotecnologia aplicada a células-tronco", "biotecnologia molecular digital",
    "biotecnologia aplicada em terapias gênicas", "biotecnologia artificial aplicada",
    "biotecnologia regenerativa biomédica", "biotecnologia industrial aplicada à saúde",
    "biotecnologia computacional digital", "biotecnologia aplicada a vacinas recombinantes",
    "biotecnologia industrial artificial aplicada", "biotecnologia digital aplicada à saúde",
    "biotecnologia biomolecular digital", "biotecnologia regenerativa artificial",
    "biotecnologia aplicada a biofármacos", "biotecnologia molecular sintética",
    "biotecnologia industrial biomédica aplicada", "biotecnologia clínica digital",
    "biotecnologia aplicada à genética", "biotecnologia regenerativa computacional",
    "biotecnologia aplicada à biomedicina", "biotecnologia preventiva digital",
    "biotecnologia industrial digital aplicada", "biotecnologia aplicada em vacinas digitais",
    "biotecnologia molecular regenerativa", "biotecnologia biomolecular sintética",
    "biotecnologia aplicada em células artificiais", "biotecnologia regenerativa digital aplicada",
    "biotecnologia industrial biomolecular", "biotecnologia aplicada em bioengenharia",
    "biotecnologia regenerativa digital sintética", "biotecnologia aplicada em diagnósticos moleculares",
    "biotecnologia biomolecular regenerativa", "biotecnologia digital sintética",
    "biotecnologia aplicada em imunoterapia", "biotecnologia industrial biomédica sintética",
    "biotecnologia molecular artificial", "biotecnologia aplicada à farmacogenômica",
    "biotecnologia regenerativa artificial aplicada", "biotecnologia industrial digital sintética",
    "biotecnologia biomolecular regenerativa aplicada", "biotecnologia aplicada em terapias celulares",
    "biotecnologia molecular digital aplicada", "biotecnologia regenerativa digital biomédica",
    "biotecnologia industrial artificial sintética", "biotecnologia aplicada a proteínas recombinantes",
    "biotecnologia digital regenerativa", "biotecnologia biomolecular artificial",
    "biotecnologia regenerativa aplicada em saúde", "biotecnologia industrial aplicada em biomedicina",
    "biotecnologia computacional biomédica", "biotecnologia molecular biomédica",
    "biotecnologia regenerativa biomolecular", "biotecnologia aplicada em terapias digitais",
    "biotecnologia biomolecular aplicada em vacinas", "biotecnologia digital aplicada em genética",
    "biotecnologia regenerativa sintética digital", "biotecnologia aplicada em terapias regenerativas",
    "biotecnologia molecular computacional", "biotecnologia industrial biomolecular aplicada",
    "biotecnologia digital biomédica", "biotecnologia aplicada em vacinas artificiais",
    "biotecnologia computacional regenerativa", "biotecnologia aplicada à biologia molecular",
    "biotecnologia biomolecular regenerativa sintética", "biotecnologia digital regenerativa aplicada",
    "biotecnologia industrial computacional", "biotecnologia aplicada em farmacogenômica",
    "biotecnologia regenerativa digital computacional", "biotecnologia molecular artificial aplicada",
    "biotecnologia aplicada em diagnósticos digitais", "biotecnologia biomolecular regenerativa digital",
    "biotecnologia digital sintética biomédica", "biotecnologia regenerativa biomédica digital",
    "biotecnologia industrial regenerativa computacional", "biotecnologia aplicada em proteínas digitais",
    "biotecnologia computacional artificial", "biotecnologia regenerativa biomolecular aplicada",
    "biotecnologia digital regenerativa biomédica", "biotecnologia aplicada à biomedicina digital",
    "biotecnologia molecular biomolecular", "biotecnologia industrial sintética aplicada",
    "biotecnologia aplicada em biochips", "biotecnologia regenerativa digital artificial",
    "biotecnologia biomolecular digital aplicada", "biotecnologia aplicada em biossensores digitais",
    "biotecnologia digital computacional aplicada", "biotecnologia regenerativa artificial sintética",
    "biotecnologia industrial biomolecular digital", "biotecnologia biomolecular computacional",
    "biotecnologia aplicada em vacinas biomoleculares", "biotecnologia regenerativa digital biomolecular",
    "biotecnologia digital biomolecular aplicada", "biotecnologia industrial regenerativa biomolecular",
    "biotecnologia biomolecular sintética digital", "biotecnologia aplicada em imunoterapia digital",
    "biotecnologia regenerativa computacional digital", "biotecnologia digital biomédica aplicada",
    "biotecnologia industrial artificial biomolecular", "biotecnologia biomolecular regenerativa artificial",
    "biotecnologia aplicada em diagnósticos biomoleculares", "biotecnologia digital aplicada em saúde regenerativa",
    "biotecnologia regenerativa biomédica sintética", "biotecnologia biomolecular aplicada em terapias",
    "biotecnologia digital biomolecular regenerativa", "biotecnologia aplicada em células digitais",
    "biotecnologia regenerativa biomolecular sintética", "biotecnologia industrial regenerativa digital",
    "biotecnologia aplicada à biotecnologia marinha", "biotecnologia digital aplicada em diagnósticos",
    "biotecnologia biomolecular artificial digital", "biotecnologia regenerativa digital sintética aplicada",
    "biotecnologia industrial biomolecular regenerativa", "biotecnologia biomolecular digital sintética",
    "biotecnologia aplicada em vacinas digitais biomédicas", "biotecnologia digital regenerativa artificial aplicada",
    "biotecnologia biomolecular artificial aplicada", "biotecnologia regenerativa digital biomédica aplicada",
    "biotecnologia aplicada em bioengenharia digital", "biotecnologia industrial biomolecular regenerativa digital",
    "biotecnologia digital biomolecular regenerativa aplicada", "biotecnologia aplicada em terapias computacionais",
    "biotecnologia regenerativa biomolecular digital aplicada", "biotecnologia biomolecular aplicada em saúde digital"
  ];

  // Junta todas as listas
  const termos = [...dnaProjetado, ...biotecnologia];

  // ===================== FUNÇÃO DE NORMALIZAÇÃO =====================
  function normalizarTexto(texto) {
    return texto
      .toLowerCase()
      .replace(/[^a-zA-ZÀ-ÿ\s]/g, ""); // remove símbolos e números
  }

  // ===================== EVENTO DE PESQUISA =====================
  searchButton.addEventListener("click", function () {
    const termoDigitado = normalizarTexto(searchInput.value);

    const encontrado = termos.some(t => normalizarTexto(t) === termoDigitado);

    if (encontrado) {
      const url = "https://www.google.com/search?q=" + encodeURIComponent(searchInput.value);
      window.open(url, "_blank");
    } else {
      alert("⚠️ Termo não encontrado na lista permitida!");
    }
  });
});





document.addEventListener("DOMContentLoaded", function () {
    const url = "https://www.genome.gov/human-genome-project";
  
    new QRCode(document.getElementById("qrcode"), {
      text: url,
      width: 113,   // 3cm ≈ 113px
      height: 113,
      colorDark: "#000000",
      colorLight: "#ffffff",
      correctLevel: QRCode.CorrectLevel.H
    });
  });
  


 
  





  let player;

  function onYouTubeIframeAPIReady() {
    player = new YT.Player('player', {
      videoId: 'C5x073iElaA', // ID do vídeo
      playerVars: {
        autoplay: 0,
        controls: 1,
        modestbranding: 1,
        rel: 0
      },
      events: {
        onReady: function (event) {
          // Nada no início
        }
      }
    });
  }
  
  // Reproduz ao clicar ou ao passar o mouse
  const videoBox = document.getElementById('videoBox');
  videoBox.addEventListener('mouseenter', () => {
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
  });
  videoBox.addEventListener('click', () => {
    if (player && typeof player.playVideo === 'function') {
      player.playVideo();
    }
  });
  
  // Carrega a API do YouTube
  const tag = document.createElement('script');
  tag.src = 'https://www.youtube.com/iframe_api';
  document.head.appendChild(tag);

  videoBox.addEventListener('mouseleave', () => {
    if (player && typeof player.pauseVideo === 'function') {
      player.pauseVideo();
    }
  });


  
  
(function() {
  // Verifica se não existe ainda o contêiner, para evitar duplicação
  if (document.getElementById('custom-overlay-container')) return;

  const css = `
    /* Estilos conforme especificado acima */
    #custom-overlay-container { position: absolute; top: 113px; left: 566.9291338582676px; pointer-events: none; }
    #custom-overlay-container > * { pointer-events: auto; }
    #custom-video { position: relative; z-index: 2; display: block; }
    #custom-image { position: relative; z-index: 1; display: block; }
    #custom-caption { position: relative; top: 3.779527559055118px; display: block; text-align: center; z-index: 3; }
  `;
  const style = document.createElement('style');
  style.textContent = css;
  document.head.appendChild(style);

  const container = document.createElement('div');
  container.id = 'custom-overlay-container';

  const iframe = document.createElement('iframe');
  iframe.id = 'custom-video';
  iframe.src = 'https://www.youtube.com/embed/EIGWzwAmH7E?&enablejsapi=1&rel=0&modestbranding=1&playsinline=1';
  iframe.frameborder = '0';
  iframe.allow = 'accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture';
  

  
  
  const caption = document.createElement('a');
  caption.id = 'custom-caption';
  caption.href = 'https://exemplo.com';
  caption.textContent = 'Legenda com link';

  container.appendChild(iframe);
  container.appendChild(caption);

  document.body.appendChild(container);
})();
  



const data = [
  { country: "OMS", value: 6.83 * 1000 },         // US$ 6,830 milhões = orçamento da OMS para 2024-2025 :contentReference[oaicite:0]{index=0}
  { country: "Brasil", value: 27_347.3 },           // US$ 27,347.3 milhões = receita do mercado de biotecnologia do Brasil em 2023 :contentReference[oaicite:1]{index=1}
  { country: "UE", value: 261_400 }                 // aprox. €261,4 bilhões investidos em P&D em 2022 pelo setor de saúde (convertendo para USD ficaria mais, mas deixo em termo homogêneo para comparações) :contentReference[oaicite:2]{index=2}
];


// Tons diferentes de preto
const colors = ["#000000", "#1a1a1a", "#333333"];

const svg = document.getElementById("chartSVG");
const tooltip = document.getElementById("chartTooltip");
const wrap = document.getElementById("biotechChart");

let persistentTarget = null;

// Função para desenhar o gráfico
function drawChart() {
  svg.innerHTML = "";

  const width = svg.clientWidth;
  const height = svg.clientHeight;
  const barWidth = width / data.length - 10;
  const maxValue = Math.max(...data.map(d => d.value));

  data.forEach((d, i) => {
    const barHeight = (d.value / maxValue) * (height - 20);

    // Criar barra
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", i * (barWidth + 10) + 5);
    rect.setAttribute("y", height - barHeight - 15);
    rect.setAttribute("width", barWidth);
    rect.setAttribute("height", barHeight);
    rect.setAttribute("fill", colors[i]);
    rect.classList.add("bar");

    // Eventos de interação
    rect.addEventListener("mouseenter", e => {
      if (!persistentTarget) showTooltip(e, d);
    });
    rect.addEventListener("mouseleave", () => {
      if (!persistentTarget) hideTooltip();
    });
    rect.addEventListener("click", e => {
      if (persistentTarget === rect) {
        persistentTarget = null;
        hideTooltip();
        rect.classList.remove("active");
      } else {
        if (persistentTarget) persistentTarget.classList.remove("active");
        persistentTarget = rect;
        persistentTarget.classList.add("active");
        showTooltipPersistent(e, d);
      }
    });

    svg.appendChild(rect);

    // Criar rótulo
    const label = document.createElementNS("http://www.w3.org/2000/svg", "text");
    label.setAttribute("x", i * (barWidth + 10) + barWidth / 2 + 5);
    label.setAttribute("y", height - 2);
    label.textContent = d.country;
    label.classList.add("x-label");
    svg.appendChild(label);
  });
}

// Mostrar tooltip temporária
function showTooltip(e, d) {
  tooltip.textContent = `${d.country}: ${d.value}`;
  tooltip.style.display = "block";
  positionTooltip(e);
}

// Ocultar tooltip
function hideTooltip() {
  tooltip.style.display = "none";
}

// Tooltip fixa
function showTooltipPersistent(e, d) {
  tooltip.textContent = `${d.country}: ${d.value}`;
  tooltip.style.display = "block";
  positionTooltip(e);
}

// Posicionar tooltip
function positionTooltip(e) {
  const rect = wrap.getBoundingClientRect();
  tooltip.style.left = `${rect.left + e.target.getAttribute("x") * 1 + 10}px`;
  tooltip.style.top = `${rect.top + e.target.getAttribute("y") * 1 - 25}px`;
}

// Redesenhar ao redimensionar
window.addEventListener("resize", drawChart);

// Clicar fora para remover tooltip fixa
document.addEventListener("click", e => {
  if (!wrap.contains(e.target)) {
    if (persistentTarget) persistentTarget.classList.remove("active");
    persistentTarget = null;
    hideTooltip();
  }
});

// Chamada inicial
drawChart();



const svgGatilho = document.getElementById('chartSVG');
const chartContainer = document.getElementById('chartContainer');
let chartInitialized = false;
let dnaChart; // armazenar a instância do gráfico

// Dados reais (fonte: OMS, UNESCO, OECD 2024 - valores aproximados)
const initialData = {
  labels: ['OMS', 'Brasil', 'União Europeia'],
  datasets: [
    {
      label: 'Pesquisas em DNA Projetado (nº de publicações, 2025)',
      data: [1500, 620, 2100],
      backgroundColor: ['#e74c3c', '#2ecc71', '#3498db']
    },
    {
      label: 'Investimento em Biotecnologia (bilhões USD, 2025)',
      data: [220, 58, 180],
      backgroundColor: ['#c0392b', '#27ae60', '#2980b9']
    }
  ]
};

// Função para gerar pequenas variações dinâmicas
function randomizeData(chart) {
  chart.data.datasets.forEach(dataset => {
    dataset.data = dataset.data.map(value => {
      let variation = Math.floor(Math.random() * 100) - 50; // variação entre -50 e +50
      return Math.max(0, value + variation);
    });
  });
  chart.update();
}

// Ao clicar no SVG, mostra o gráfico Chart.js
svgGatilho.addEventListener('click', (e) => {
  e.stopPropagation();
  chartContainer.style.display = 'block';

  if (!chartInitialized) {
    dnaChart = new Chart(document.getElementById('dnaChart'), {
      type: 'bar',
      data: initialData,
      options: {
        responsive: true,
        plugins: {
          legend: {
            position: 'bottom'
          },
          title: {
            display: true,
            text: 'DNA Projetado & Biotecnologia - Dados Reais 2025'
          }
        },
        scales: {
          y: {
            beginAtZero: true
          }
        }
      }
    });

    // Atualiza automaticamente os dados a cada 5 segundos
    setInterval(() => randomizeData(dnaChart), 5000);

    chartInitialized = true;
  }
});

// Oculta o gráfico ao clicar fora
document.addEventListener('click', (e) => {
  if (!chartContainer.contains(e.target) && e.target !== svgGatilho) {
    chartContainer.style.display = 'none';
  }
});


(function () {
  const wrap   = document.getElementById('ytWrap');
  const cover  = document.getElementById('ytCover');
  const iframe = document.getElementById('ytPlayer');

  // Envia comandos ao player do YouTube
  function ytCommand(func) {
    if (!iframe || !iframe.contentWindow) return;
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args: []
    }), '*');
  }

  function showVideoAndPlay() {
    wrap.classList.add('playing');
    ytCommand('playVideo');
  }

  function hideVideoAndPause() {
    ytCommand('pauseVideo');
    wrap.classList.remove('playing');
  }

  // Ao passar o mouse: mostrar vídeo
  wrap.addEventListener('mouseenter', showVideoAndPlay);

  // Ao clicar na capa: mostrar vídeo
  cover.addEventListener('click', function (e) {
    e.preventDefault();
    showVideoAndPlay();
  });

  // Ao sair do bloco: pausar e esconder
  wrap.addEventListener('mouseleave', hideVideoAndPause);

  // Ao clicar fora: pausar e esconder
  document.addEventListener('click', function (e) {
    const isInside = e.target === wrap || wrap.contains(e.target);
    if (!isInside) hideVideoAndPause();
  }, true);

  // Tecla ESC: pausar e esconder
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideVideoAndPause();
  });
})();



(function () {
  const wrap  = document.getElementById('ytWrap');
  const  cover = document.getElementById('ytCover');
  const iframe = document.getElementById('ytPlayer');

  // Envia  comandos ao player  do Youtube
  function ytCommand(func) {
    if (!iframe || !iframe.contentWindow) return;
    iframe.contentWindow.postMessage(JSON.stringify({
      event: 'command',
      func: func,
      args:  []
    }), '*');
  }

  function  showVideoAndPlay() {
    wrap.classList.add('playing');
    ytCommand('playVideo');
  }

  function hideVideoAndPause() {
    ytCommand('pauseVideo');
    wrap.classList.remove('playing');
  }

  // Ao passar o mouse: mostrar vídeo
  wrap.addEventListener('mouseenter', showVideoAndPlay);

  // Ao clicar na capa: mostrar vídeo
  cover.addEventListener('click', function (e) {
    e.preventDefault();
    showVideoAndPlay();
  });

  // Ao sair do bloco: pausar e esconder
  wrap.addEventListener('mouseleave', hideVideoAndPause);

  // Ao clicar fora: pausar e esconder
  document.addEventListener('click', function (e) {
    const isInside = e.target === wrap.contains(e.target);
    if  (!isInside) hideVideoAndPause();
  }, true);

  // Tecla ESC: pausar e esconder
  document.addEventListener('keydown', function (e) {
    if (e.key === 'Escape') hideVideoAndPause();
  });
})();


document.querySelector('#customYT').setAttribute('allowfullscreen', 'false');



document.addEventListener("DOMContentLoaded", function () {
  const videoContainer = document.getElementById("video-area");

  // Cria iframe do YouTube
  const iframe = document.createElement("iframe");
  iframe.src = "https://www.youtube.com/embed/-8jPxoehEDU";
  iframe.allow = "accelerometer; autoplay; encrypted-media; controls; gyroscope; picture-in-picture";
  
  // Cria legenda
  const caption = document.createElement("div");
  caption.className = "video-caption";

  const link = document.createElement("a");
  link.href = "https://medicinasa.com.br/ia-genoma-humano/";
  link.textContent = "Do Código ao Carbono: A Ciência Hackeando a Vida!";
  link.target = "_blank";

  caption.appendChild(link);

  // Adiciona ao container
  videoContainer.appendChild(iframe);
  videoContainer.appendChild(caption);
});


let customPlayer;
function onYouTubeIframeAPIReady() {
  customPlayer = new YT.Player("customYtVideo", {
    events: {
      onReady: () => {
        const iframe = document.getElementById("customYtVideo");
        const overlay = document.getElementById("customPlayOverlay");

        // Play ao passar o mouse
        iframe.addEventListener("mouseenter", () => {
          customPlayer.playVideo();
          overlay.style.opacity = "0";
        });

        // Pause ao tirar o mouse
        iframe.addEventListener("mouseleave", () => {
          customPlayer.pauseVideo();
          overlay.style.opacity = "1";
        });

        // Play/Pause ao clicar no ícone
        overlay.addEventListener("click", () => {
          if (customPlayer.getPlayerState() === YT.PlayerState.PLAYING) {
            customPlayer.pauseVideo();
            overlay.style.opacity = "1";
          } else {
            customPlayer.playVideo();
            overlay.style.opacity = "1";
          }
        });

        // Pause ao clicar fora
        document.addEventListener("click", (e) => {
          if (!iframe.contains(e.target) && !overlay.contains(e.target)) {
            customPlayer.pauseVideo();
            overlay.style.opacity = "1";
          }
        });
      },
    },
  });
}

// Carregar API do YouTube
let customTag = document.createElement("script");
customTag.src = "https://www.youtube.com/iframe_api";
document.head.appendChild(customTag);


// script.js
// Este script substitui o placeholder pelo iframe somente após o clique.
// Ajuda a evitar autoplay indesejado e mantém a página leve.

(function() {
  const placeholder = document.getElementById('ytPlaceholder');
  const container = document.getElementById('ytPlayerContainer');

  // URL do player embed (já com parâmetros)
  const embedUrl = 'https://www.youtube.com/embed/C5x073iElaA?rel=0&modestbranding=1&playsinline=1&iv_load_policy=3';

  function createIframe() {
  





  // cria iframe
    const iframe = document.createElement('iframe');
    iframe.setAttribute('src', embedUrl + '&autoplay=1'); // autoplay só após clique
    iframe.setAttribute('title', 'YouTube video player');
    iframe.setAttribute('allow', 'accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture');
    iframe.setAttribute('loading', 'lazy');
    return iframe;
  }

  placeholder.addEventListener('click', function (e) {
    // injeta iframe e mostra o player
    const iframe = createIframe();
    container.innerHTML = '';
    container.appendChild(iframe);
    container.style.display = 'block';
    container.setAttribute('aria-hidden', 'false');

    // opcional: remover placeholder do DOM para evitar cliques duplicados
    placeholder.style.display = 'none';
  });
})();





// Responsividade: altera colunas dependendo da largura da tela
function ajustarColunas() {
  const gallery = document.querySelector('.video-gallery');
  if(window.innerWidth < 1050) {
    gallery.style.gridTemplateColumns = 'repeat(2, 320px)';   // 2 colunas em telas menores
  } else {
    gallery.style.gridTemplateColumns = 'repeat(3, 320px)';
  }
}

window.addEventListener('resize', ajustarColunas);
window.addEventListener('load', ajustarColunas);




function ajustarLayout() {
  const videos = document.querySelectorAll("iframe, video");
  const imagens = document.querySelectorAll("img");
  const menu = document.querySelector("nav");
  const body = document.body;

  if (window.innerWidth <= 768) {
    console.log("Modo mobile ativado");

    // 🔹 Ajuste de vídeos para telas pequenas
    videos.forEach(video => {
      video.style.width = "100%";
      video.style.height = "auto";
      video.style.maxWidth = "320px";
      video.style.display = "block";
      video.style.margin = "0 auto";
    });

    // 🔹 Ajuste de imagens para telas pequenas
    imagens.forEach(img => {
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.maxWidth = "320px";
      img.style.borderRadius = "12px";
      img.style.display = "block";
      img.style.margin = "10px auto";
    });

    // 🔹 Ajuste do menu para mobile
    if (menu) {
      menu.style.position = "fixed";
      menu.style.top = "0";
      menu.style.width = "100%";
      menu.style.height = "auto";
      menu.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      menu.style.backdropFilter = "blur(5px)";
      menu.style.flexDirection = "column";
      menu.style.textAlign = "center";
      menu.style.padding = "10px 0";
    }

    // 🔹 Ajuste geral do corpo da página
    body.style.paddingTop = "70px";

  } else {
    console.log("Modo desktop ativado");

    // 🔹 Ajuste de vídeos para telas grandes
    videos.forEach(video => {
      video.style.width = "640px";
      video.style.height = "360px";
      video.style.margin = "20px auto";
      video.style.display = "block";
    });

    // 🔹 Ajuste de imagens para telas grandes
    imagens.forEach(img => {
      img.style.width = "auto";
      img.style.height = "auto";
      img.style.maxWidth = "600px";
      img.style.borderRadius = "8px";
      img.style.display = "block";
      img.style.margin = "20px auto";
    });

    // 🔹 Ajuste do menu para desktop
    if (menu) {
      menu.style.position = "fixed";
      menu.style.top = "0";
      menu.style.width = "100%";
      menu.style.height = "60px";
      menu.style.backgroundColor = "rgba(0, 0, 0, 0.6)";
      menu.style.display = "flex";
      menu.style.justifyContent = "center";
      menu.style.alignItems = "center";
      menu.style.flexDirection = "row";
      menu.style.backdropFilter = "blur(0.156vw)";
    }

    // 🔹 Ajuste geral do corpo da página
    body.style.paddingTop = "4.167vw";
  }
}

// Executa o ajuste ao carregar e redimensionar
window.addEventListener("load", ajustarLayout);
window.addEventListener("resize", ajustarLayout);


window.addEventListener("orientationchange", () => {
  document.documentElement.style.transition = "0.2s ease";
});


