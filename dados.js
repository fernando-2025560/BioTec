let dados = [
  {
    titulo: "DNA Projetado",
    descricao: "Sequências de DNA sintético ou modificadas com objetivo de função específica em biotecnologia e medicina.",
    link: "https://www.nature.com/articles/s41467-024-49626-x",
    video: "https://www.youtube.com/watch?v=UKbrwPL3wXE",
    redes: {
      instagram: "https://www.instagram.com/dnaprojetado",
      twitter: "https://twitter.com/dnaprojetado",
      site: "https://www.dnaprojetado.org"
    }
  },
  {
    titulo: "Engenharia Genética",
    descricao: "Uso de técnicas para alterar genes de organismos vivos visando melhorar características ou corrigir defeitos.",
    link: "https://www.nature.com/articles/nrg1637",
    video: "https://www.youtube.com/watch?v=5Ylk9-zAeyE",
    redes: {
      instagram: "https://www.instagram.com/engenhariagenetica",
      twitter: "https://twitter.com/geneticaresearch",
      site: "https://www.engenhariagenetica.org"
    }
  },
  {
    titulo: "Edição Genética",
    descricao: "Alteração pontual de regiões do DNA (inserção, deleção ou substituição) com precisão controlada.",
    link: "https://www.nature.com/subjects/genome-editing",
    video: "https://www.youtube.com/watch?v=2pp17E4E-O8",
    redes: {
      instagram: "https://www.instagram.com/edicaogenetica",
      twitter: "https://twitter.com/edicaogenetica",
      site: "https://www.edicaogenetica.org"
    }
  },
  {
    titulo: "CRISPR",
    descricao: "Sistema CRISPR-Cas como ferramenta revolucionária para editar genes com alta eficiência e especificidade.",
    link: "https://www.nature.com/articles/nrg1637",
    video: "https://www.youtube.com/watch?v=6tw_JVz_IEc",
    redes: {
      instagram: "https://www.instagram.com/crisprtech",
      twitter: "https://twitter.com/crisprtech",
      site: "https://www.crispr.org"
    }
  },
  {
    titulo: "Genoma Artificial",
    descricao: "Criação ou montagem sintética de um genoma completo para funcionamento celular controlado.",
    link: "https://www.genome.gov/about-genomics/policy-issues/Synthetic-Biology",
    video: "https://www.youtube.com/watch?v=UKbrwPL3wXE",
    redes: {
      instagram: "https://www.instagram.com/genomaartificial",
      twitter: "https://twitter.com/genomaartificial",
      site: "https://www.genomaartificial.org"
    }
  },
  {
    titulo: "Terapia Gênica",
    descricao: "Correção ou substituição de genes defeituosos em pacientes usando vetores genéticos.",
    link: "https://www.genome.gov/about-genomics/fact-sheets/gene-therapy",
    video: "https://www.youtube.com/watch?v=HnqYtuV9_Bo",
    redes: {
      instagram: "https://www.instagram.com/terapiagenica",
      twitter: "https://twitter.com/genetherapynews",
      site: "https://www.terapiagenica.org"
    }
  },
  {
    titulo: "Código Genético Sintético",
    descricao: "Extensão ou modificação do código genético natural para criar novos aminoácidos ou codons sintéticos.",
    link: "https://www.nature.com/articles/s41467-024-49626-x",
    video: "https://www.youtube.com/watch?v=UKbrwPL3wXE",
    redes: {
      instagram: "https://www.instagram.com/codigosintetico",
      twitter: "https://twitter.com/codigosintetico",
      site: "https://www.codigosintetico.org"
    }
  },
  {
    titulo: "Genética Computacional",
    descricao: "Uso de algoritmos e computação para modelar, prever e projetar genomas e redes genéticas.",
    link: "https://www.sciencedirect.com/topics/computer-science/computational-genetics",
    video: "https://www.youtube.com/watch?v=cLMo6DYdJRE",
    redes: {
      instagram: "https://www.instagram.com/geneticacomputacional",
      twitter: "https://twitter.com/gencomputacional",
      site: "https://www.geneticacomputacional.org"
    }
  },
  {
    titulo: "Modelagem Genética",
    descricao: "Simulações e modelos matemáticos aplicados ao comportamento de genes e redes genéticas.",
    link: "https://arxiv.org/abs/2111.04508",
    video: "https://www.youtube.com/watch?v=r8zRNHBijYY",
    redes: {
      instagram: "https://www.instagram.com/modelagemgenetica",
      twitter: "https://twitter.com/modelagemgenetica",
      site: "https://www.modelagemgenetica.org"
    }
  },
  {
    titulo: "Biologia Sintética",
    descricao: "Integra biologia e engenharia para criar sistemas biológicos novos ou redesenhados com funções específicas.",
    link: "https://www.nature.com/subjects/synthetic-biology",
    video: "https://www.youtube.com/watch?v=yb4Wh38fqdE",
    redes: {
      instagram: "https://www.instagram.com/biologiasintetica",
      twitter: "https://twitter.com/biologiasintetica",
      site: "https://www.biologiasintetica.org"
    }
  },
  {
    titulo: "Design Genético",
    descricao: "Planejamento intencional de sequências genéticas para alcançar propriedades biológicas desejadas.",
    link: "https://www.cell.com/trends/biotechnology/fulltext/S0167-7799(20)30261-2",
    video: "https://www.youtube.com/watch?v=w1oM3kQpXRo",
    redes: {
      instagram: "https://www.instagram.com/designgenetico",
      twitter: "https://twitter.com/designgenetico",
      site: "https://www.designgenetico.org"
    }
  },
  {
    titulo: "Genes Artificiais",
    descricao: "Genes sintetizados em laboratório que imitam ou superam funções naturais.",
    link: "https://www.frontiersin.org/articles/10.3389/fbioe.2020.00075/full",
    video: "https://www.youtube.com/watch?v=9XcLaJR9b_E",
    redes: {
      instagram: "https://www.instagram.com/genesartificiais",
      twitter: "https://twitter.com/genesartificiais",
      site: "https://www.genesartificiais.org"
    }
  },
  {
    titulo: "Manipulação de DNA",
    descricao: "Processo de isolar, modificar e recombinar moléculas de DNA para alterar o código genético.",
    link: "https://www.ncbi.nlm.nih.gov/books/NBK21583/",
    video: "https://www.youtube.com/watch?v=XpdxI0z9z7Y",
    redes: {
      instagram: "https://www.instagram.com/manipulacaodedna",
      twitter: "https://twitter.com/manipulacaodna",
      site: "https://www.manipulacaodna.org"
    }
  },
  {
    titulo: "Projetos Genômicos",
    descricao: "Estudos que mapeiam, analisam e sintetizam genomas inteiros de organismos.",
    link: "https://www.genome.gov",
    video: "https://www.youtube.com/watch?v=KX9R5x9KqDA",
    redes: {
      instagram: "https://www.instagram.com/projetosgenomicos",
      twitter: "https://twitter.com/projetosgenomicos",
      site: "https://www.projetosgenomicos.org"
    }
  },
  {
    titulo: "Biotecnologia Genética",
    descricao: "Aplicação de técnicas genéticas para desenvolvimento de produtos e terapias biológicas.",
    link: "https://www.nature.com/subjects/biotechnology",
    video: "https://www.youtube.com/watch?v=bss8YDLvA6A",
    redes: {
      instagram: "https://www.instagram.com/biotecnologiagenetica",
      twitter: "https://twitter.com/biotecgenetica",
      site: "https://www.biotecnologiagenet
    }
  }
]
