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
      // Garante que o elemento existe e remove espaços desnecessários antes de criar a URL
  const url = searchInput && searchInput.value 
? "https://www.google.com/search?q=" + encodeURIComponent(searchInput.value.trim())
: "#";
      window.open(url, "_blank");
    } else {
      alert("⚠️ Termo não encontrado na lista permitida!");
    }
  });
});





document.addEventListener("DOMContentLoaded", function () {
  const url = "https://www.genome.gov/human-genome-project";
  const qrContainer = document.getElementById("qrcode");

  // Lê o tamanho real definido pelo CSS
  const size = qrContainer.offsetWidth;

  new QRCode(qrContainer, {
    text: url,
    width: size,
    height: size,
    colorDark: "#000000",
    colorLight: "#ffffff",
    correctLevel: QRCode.CorrectLevel.H
  });
});


/*new QRCode(document.getElementById("qrcode-6"), {
  text: "https://www.ebsco.com/research-starters/science/dna-and-rna-synthesis",
  width: 120,
  height: 120
  }); */
  

document.addEventListener("DOMContentLoaded", function () {
  const originalContainer = document.getElementById("qrcode-container");
  const originalQR = document.getElementById("qrcode");

  const newContainer = document.getElementById("qrcode-container-2");
  const newQR = document.getElementById("qrcode-2");

  /* 🔁 copia dimensões reais */
  const containerStyles = window.getComputedStyle(originalContainer);
  const qrSize = originalQR.offsetWidth;

  newContainer.style.width = containerStyles.width;
  newContainer.style.height = containerStyles.height;

  /* 📍 mesma distância da lateral direita */
  newContainer.style.right = containerStyles.right;
  newContainer.style.left = containerStyles.left;

  /* ⬇️ posição vertical nova */
  newContainer.style.top = "55vh";
  
  /* 🔲 QR quadrado */
  newQR.style.width = qrSize + "px";
  newQR.style.height = qrSize + "px";

  new QRCode(newQR, {
    text: "https://www.cnnbrasil.com.br/tecnologia/cientistas-criam-tecnologia-que-usa-dna-para-armazenar-dados/",
    width: qrSize,
    height: qrSize,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const originalContainer = document.getElementById("qrcode-container");
  const originalQR = document.getElementById("qrcode");

  const newContainer = document.getElementById("qrcode-container-3");
  const newQR = document.getElementById("qrcode-3");

  /* 🔁 copia dimensões reais */
  const containerStyles = window.getComputedStyle(originalContainer);
  const qrSize = originalQR.offsetWidth;

  newContainer.style.width = containerStyles.width;
  newContainer.style.height = containerStyles.height;

  /* 📍 mesma distância da lateral direita */
  newContainer.style.right = containerStyles.right;
  newContainer.style.left = containerStyles.left;

  /* ⬇️ posição vertical nova */
  newContainer.style.top = "95vh";
  
  /* 🔲 QR quadrado */
  newQR.style.width = qrSize + "px";
  newQR.style.height = qrSize + "px";

  new QRCode(newQR, {
    text: "https://protosbiotec.com/blog/big-data-na-biotecnologia-como-lidar-com-milhoes-de-dados-genomicos/",
    width: qrSize,
    height: qrSize,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
});

  
document.addEventListener("DOMContentLoaded", function () {
  const originalContainer = document.getElementById("qrcode-container");
  const originalQR = document.getElementById("qrcode");

  const newContainer = document.getElementById("qrcode-container-4");
  const newQR = document.getElementById("qrcode-4");

  /* 🔁 copia dimensões reais */
  const containerStyles = window.getComputedStyle(originalContainer);
  const qrSize = originalQR.offsetWidth;

  newContainer.style.width = containerStyles.width;
  newContainer.style.height = containerStyles.height;

  /* 📍 mesma distância da lateral direita */
  newContainer.style.right = containerStyles.right;
  newContainer.style.left = containerStyles.left;

  /* ⬇️ posição vertical nova */
  newContainer.style.top = "133vh";
  
  /* 🔲 QR quadrado */
  newQR.style.width = qrSize + "px";
  newQR.style.height = qrSize + "px";

  new QRCode(newQR, {
    text: "https://www.exxtend.com.br/blog/revolucionando-o-armazenamento-de-dados-o-poder-do-dna-sintetico-na-era-digital",
    width: qrSize,
    height: qrSize,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
});



document.addEventListener("DOMContentLoaded", function () {
  const originalContainer = document.getElementById("qrcode-container");
  const originalQR = document.getElementById("qrcode");

  const newContainer = document.getElementById("qrcode-container-5");
  const newQR = document.getElementById("qrcode-5");

  /* 🔁 copia dimensões reais */
  const containerStyles = window.getComputedStyle(originalContainer);
  const qrSize = originalQR.offsetWidth;

  newContainer.style.width = containerStyles.width;
  newContainer.style.height = containerStyles.height;

  /* 📍 mesma distância da lateral direita */
  newContainer.style.right = containerStyles.right;
  newContainer.style.left = containerStyles.left;

  /* ⬇️ posição vertical nova */
  newContainer.style.top = "161vh";
  
  /* 🔲 QR quadrado */
  newQR.style.width = qrSize + "px";
  newQR.style.height = qrSize + "px";

  new QRCode(newQR, {
    text: "https://noticias.portaldaindustria.com.br/noticias/inovacao-e-tecnologia/viu-isso-dna-sintetico-podera-armazenar-dados-digitais/",
    width: qrSize,
    height: qrSize,
    colorDark: "#000",
    colorLight: "#fff",
    correctLevel: QRCode.CorrectLevel.H
  });
});

document.addEventListener("DOMContentLoaded", () => {
  const container = document.getElementById("qr-container");

  new QRCode(container, {
    text: "https://www.bbc.com/portuguese/articles/cp3j3616k05o",
    width: qrSize,
    height: qrSize,
    
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
    #custom-overlay-container { position: absolute; top: 12.556vh; left: 29.528vw; pointer-events: none; }
    #custom-overlay-container > * { pointer-events: auto; }
    #custom-video { position: relative; z-index: 2; display: block; }
    #custom-image { position: relative; z-index: 1; display: block; }
    #custom-caption { position: relative; top: 0.42vh; display: block; text-align: center; z-index: 3; }
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
  iframe.allow = 'accelerometer; controls; autoplay; encrypted-media; gyroscope; picture-in-picture';
  

  
  
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

  const width = svg.clientWidth || svg.getBoundingClientRect().width || 0;
  const height = svg.clientHeight;
  const barWidth = width / data.length - 10;
  const maxValue = Math.max(...data.map(d => d.value));

  data.forEach((d, i) => {
    const barHeight = (d.value / maxValue) * (height - 20);

    // Criar barra
    const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");
    rect.setAttribute("x", i * (barWidth + 10) + 5);
    rect.setAttribute("y", height - barHeight - 15);
    // Garante que a largura seja sempre um número válido e não negativo
rect.setAttribute("width", Math.max(0, parseFloat(barWidth) || 0));
    // Garante que o valor seja um número absoluto e evita valores negativos ou NaN
rect.setAttribute("height", Math.max(0, Math.abs(barHeight)) || 0);
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

function positionTooltip(e) {
  const rect = wrap.getBoundingClientRect();
  const svg = e.target.ownerSVGElement;

  // Escala do SVG
  const scaleX = rect.width / svg.viewBox.baseVal.width;
  const scaleY = rect.height / svg.viewBox.baseVal.height;

  const x = e.target.getAttribute("x") * scaleX;
  const y = e.target.getAttribute("y") * scaleY;

  const tooltipWidth = tooltip.offsetWidth;
  const tooltipHeight = tooltip.offsetHeight;

  tooltip.style.left = `${Math.min(
    Math.max(rect.left + x + 10, 8),
    window.innerWidth - tooltipWidth - 8
  )}px`;

  tooltip.style.top = `${Math.min(
    Math.max(rect.top + y - 25, 8),
    window.innerHeight - tooltipHeight - 8
  )}px`;
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

// Dados reais (fonte: OMS, UNESCO, OECD 2025 - valores aproximados)
const initialData = {
  labels: ['OMS', 'Brasil', 'União Europeia'],
  datasets: [
    {
      label: 'Pesquisas em DNA Projetado (nº de publicações, 2026)',
      data: [1500, 620, 2100],
      backgroundColor: ['#e74c3c', '#2ecc71', '#3498db']
    },
    {
      label: 'Investimento em Biotecnologia (bilhões USD, 2026)',
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
            text: 'DNA Projetado & Biotecnologia - Dados Reais 2026'
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



(function () {
  "use strict";

  (function() {
    if (window.__VIDEO_FORCE_LOADED__) return;
    window.__VIDEO_FORCE_LOADED__ = true;
  
    const injectVideo = () => {
      const videoContainer = document.getElementById("video-area");
      if (!videoContainer) return;
  
      // Força a visibilidade do container pai contra qualquer regra CSS externa
      videoContainer.style.setProperty("display", "block", "important");
      videoContainer.style.setProperty("visibility", "visible", "important");
      videoContainer.style.setProperty("opacity", "1", "important");
      videoContainer.style.setProperty("height", "auto", "important");
      videoContainer.style.setProperty("min-height", "22.222vh", "important");
  
      if (videoContainer.dataset.loaded === "true") return;
      videoContainer.dataset.loaded = "true";
  
      // Iframe com proporção 16:9 forçada
      const iframe = document.createElement("iframe");
      iframe.src = "https://www.youtube.com/embed/QN8Y8eEKz7Q?controls=1&autoplay=0&rel=0&modestbranding=1&playsinline=1";
      iframe.allow = "accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture";
      iframe.loading = "lazy";
      
      // Estilos críticos forçados no Iframe
      iframe.style.setProperty("width", "100%", "important");
      iframe.style.setProperty("aspect-ratio", "16 / 9", "important");
      iframe.style.setProperty("border", "none", "important");
      iframe.style.setProperty("display", "block", "important");
  
      // Legenda
      const caption = document.createElement("div");
      caption.style.setProperty("padding", "0.521vw 0", "important");
      caption.style.setProperty("display", "block", "important");
  
      const link = document.createElement("a");
      link.href = "https://medicinasa.com.br/ia-genoma-humano/";
      link.textContent = "Do Código ao Carbono: A Ciência Hackeando a Vida!";
      link.target = "_blank";
      link.rel = "noopener noreferrer";
      
      // Estilo do Link (Garante legibilidade básica)
      link.style.setProperty("color", "#000", "important");
      link.style.setProperty("text-decoration", "underline", "important");
      link.style.setProperty("font-family", "Arial, sans-serif", "important");
      link.style.setProperty("font-size", "1.76vh", "important");
  
      caption.appendChild(link);
  
      const fragment = document.createDocumentFragment();
      fragment.appendChild(iframe);
      fragment.appendChild(caption);
  
      videoContainer.innerHTML = ""; // Limpa conteúdo residual antes de injetar
      videoContainer.appendChild(fragment);
    };
  
    // Garante execução mesmo se o DOM já estiver pronto
    if (document.readyState === "complete" || document.readyState === "interactive") {
      injectVideo();
    } else {
      document.addEventListener("DOMContentLoaded", injectVideo);
    }
  })();})();

/*document.addEventListener("DOMContentLoaded", () => {
  const capa =document.getElementById("ytCover");
  if (capa) capa.style.display = "none";
});

*/

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
    // 1. Previne o comportamento padrão do clique (importante se for um link ou botão)
    e.preventDefault();

    // 2. Garante que a função e o container existam antes de prosseguir
    if (typeof createIframe === 'function' && container) {
      const iframe = createIframe();

      // 3. Limpa o container de forma segura e injeta o iframe
      while (container.firstChild) {
        container.removeChild(container.firstChild);
      }
      
      container.appendChild(iframe);
      container.style.display = 'block';
      container.setAttribute('aria-hidden', 'false');

      // 4. Esconde o placeholder apenas se ele existir
      if (placeholder) {
        placeholder.style.display = 'none';
      }
    }
  });
})();




// Responsividade: altera colunas dependendo da largura da tela
function ajustarColunas() {
  const gallery = document.querySelector('.video-gallery');
  if(window.innerWidth < 1050) {
    gallery.style.gridTemplateColumns = 'repeat(2, clamp(12vw, 26vw, 42vw))';   // 2 colunas em telas menores
  } else {
    gallery.style.gridTemplateColumns = 'repeat(3, clamp(12vw, 26vw, 42vw))';
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
      video.style.maxWidth = "16.667vw";
      video.style.display = "block";
      video.style.margin = "0 auto";
    });

    // 🔹 Ajuste de imagens para telas pequenas
    imagens.forEach(img => {
      img.style.width = "100%";
      img.style.height = "auto";
      img.style.maxWidth = "16.667vw";
      img.style.borderRadius = "0.625vw";
      img.style.display = "block";
      img.style.margin = "0.521vw auto";
    });

    // 🔹 Ajuste do menu para mobile
    if (menu) {
      menu.style.position = "fixed";
      menu.style.top = "0";
      menu.style.width = "100%";
      menu.style.height = "auto";
      menu.style.backgroundColor = "rgba(0, 0, 0, 0.85)";
      menu.style.backdropFilter = "blur(0.26vw)";
      menu.style.flexDirection = "column";
      menu.style.textAlign = "center";
      menu.style.padding = "0.521vw 0";
    }

    // 🔹 Ajuste geral do corpo da página
    body.style.paddingTop = "3.646vw";

  } else {
    console.log("Modo desktop ativado");

    // 🔹 Ajuste de vídeos para telas grandes
    videos.forEach(video => {
      video.style.width = "33.333vw";
      video.style.height = "40vh";
      video.style.margin = "1.042vw auto";
      video.style.display = "block";
    });

    // 🔹 Ajuste de imagens para telas grandes
    imagens.forEach(img => {
      img.style.width = "auto";
      img.style.height = "auto";
      img.style.maxWidth = "31.25vw";
      img.style.borderRadius = "0.417vw";
      img.style.display = "block";
      img.style.margin = "1.042vw auto";
    });

    // 🔹 Ajuste do menu para desktop
    if (menu) {
      menu.style.position = "fixed";
      menu.style.top = "0";
      menu.style.width = "100%";
      menu.style.height = "6.667vh";
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

let ultimoScroll  = 0;
const icones = document.querySelector('.icones');

window.addEventListener('scroll', ()  => {
  const scrollAtual = window.scrollY;

  if  (scrollAtual > ultimoScroll &&  scrollAtual > 50) {
      // rolando para baixo - some
      icones.classList.add('oculto');
  } else {
    // rolando para cima - apareçe
    icones.classList.remove('oculto');
  }

  ultimoScroll = scrollAtual;
});



(function () {
  // Busca especificamente o link da BBC para não afetar outros placeholders
  const bbcIcon = document.querySelector('a.glass-icon[href*="bbc.com/portuguese"]');

  if (bbcIcon) {
    bbcIcon.addEventListener('click', function (e) {
      // O comportamento de clique só será disparado para este elemento
      console.log("Ícone da BBC clicado de forma isolada.");
    });
  }
})();



const icon = document.getElementById("yt-icon");
const box = document.getElementById("yt-shorts-box");
const iframe = document.getElementById("yt-shorts");
const closeBtn = document.getElementById("yt-close");
const volume = document.getElementById("yt-volume");



/* LINK SVG PARA PÁGINA 3 */

const linkPagina3 = document.getElementById("link-pagina3-svg");

if(linkPagina3){

linkPagina3.addEventListener("click", function(e){

e.preventDefault(); 
window.location.href = "pagina3.html";

});

}














const linkPagina2 = document.getElementById("link-pagina2-svg");

if(linkPagina2){

linkPagina2.addEventListener("click", function(e){

e.preventDefault(); 
window.location.href = "pagina2.html";

});

}

const linkPagina1 = document.getElementById("link-pagina1-svg");

if(linkPagina3){

linkPagina1.addEventListener("click", function(e){

e.preventDefault(); 
window.location.href = "pagina1.html";

});

}

