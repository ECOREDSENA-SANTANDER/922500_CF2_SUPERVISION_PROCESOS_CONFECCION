export default {
  global: {
    componenteFormativo: 'Materias primas e insumos de confección industrial',
    descripcionCurso:
      'El componente aborda los fundamentos de las materias primas e insumos de confección industrial, lo que permite contextualizar al aprendiz en cuanto a los tipos, clasificación e implementación para la producción de prendas, Así mismo se incluyen conceptos de costos, presupuestos y cálculos de consumo, conocimientos necesarios para determinar los materiales requeridos para la elaboración de prendas de vestir.',
    imagenBannerPrincipal: require('@/assets/curso/portada/banner-princiapal.png'),
    fondoBannerPrincipal: require('@/assets/curso/portada/fondo-banner-principal.png'),
    imagenesDecorativasBanner: [
      {
        clases: ['banner-principal-decorativo-1', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/1.svg'),
      },
      {
        clases: ['banner-principal-decorativo-2', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/2.svg'),
      },
      {
        clases: ['banner-principal-decorativo-3', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/3.svg'),
      },
      {
        clases: ['banner-principal-decorativo-4', 'd-none', 'd-lg-block'],
        imagen: require('@/assets/curso/portada/4.svg'),
      },
    ],
  },
  menuPrincipal: {
    menu: [
      {
        nombreRuta: 'inicio',
        icono: 'fas fa-home',
        titulo: 'Volver al inicio',
      },
      {
        nombreRuta: 'introduccion',
        icono: 'fas fa-info',
        titulo: 'Introducción',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema1',
        numero: '1',
        titulo: 'Materias primas e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '1.1',
            titulo: 'Materias primas',
            hash: 't_1_1',
          },
          {
            numero: '1.2',
            titulo: 'Insumos',
            hash: 't_1_2',
          },
          {
            numero: '1.3',
            titulo: 'Cadena de valor',
            hash: 't_1_3',
          },
        ],
      },
      {
        nombreRuta: 'tema2',
        numero: '2',
        titulo: 'Unidades de medida',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema3',
        numero: '3',
        titulo: 'Presupuestos',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'tema4',
        numero: '4',
        titulo: 'Consumos de materias primas',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '4.1',
            titulo: 'Orden de producción (OP)',
            hash: 't_4_1',
          },
          {
            numero: '4.2',
            titulo: 'Ficha técnica',
            hash: 't_4_2',
          },
        ],
      },
      {
        nombreRuta: 'tema5',
        numero: '5',
        titulo: 'Cálculo de consumo de materiales e insumos',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '5.1',
            titulo: 'Cálculo de consumo unitario',
            hash: 't_5_1',
          },
          {
            numero: '5.2',
            titulo: 'Cálculo de consumo por lote',
            hash: 't_5_2',
          },
        ],
      },
      {
        nombreRuta: 'tema6',
        numero: '6',
        titulo: 'Inventario',
        desarrolloContenidos: true,
        subMenu: [
          {
            numero: '6.1',
            titulo: 'Políticas empresariales de inventarios',
            hash: 't_6_1',
          },
          {
            numero: '6.2',
            titulo: 'Sistemas de inventarios',
            hash: 't_6_2',
          },
          {
            numero: '6.3',
            titulo: 'Funciones del inventario',
            hash: 't_6_3',
          },
          {
            numero: '6.4',
            titulo: 'Tipos de inventarios',
            hash: 't_6_4',
          },
        ],
      },
    ],
    subMenu: [
      {
        icono: 'fas fa-sitemap',
        titulo: 'Síntesis',
        nombreRuta: 'sintesis',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'actividad',
        icono: 'far fa-question-circle',
        titulo: 'Actividad didáctica',
        desarrolloContenidos: true,
      },
      {
        nombreRuta: 'glosario',
        icono: 'fas fa-sort-alpha-down',
        titulo: 'Glosario',
      },
      {
        nombreRuta: 'complementario',
        icono: 'far fa-folder-open',
        titulo: 'Material complementario',
      },
      {
        icono: 'fas fa-book',
        titulo: 'Referencias bibliográficas',
        nombreRuta: 'referencias',
      },
      {
        icono: 'fas fa-file-pdf',
        titulo: 'Descargar PDF',
        download: 'downloads/CF02_922500_DU.zip',
      },
      {
        icono: 'fas fa-download',
        titulo: 'Descargar material',
        download: 'downloads/material.zip',
      },
      {
        icono: 'far fa-registered',
        titulo: 'Créditos',
        nombreRuta: 'creditos',
      },
    ],
  },
  complementario: [
    {
      tema: 'Telas',
      referencia:
        'SENA. (2021) Telas, materiales, insumos y maquinaria para la confección de ropa interior. Material formativo Programa tecnólogo de diseño para la industria de la moda.',
      tipo: 'PDF',
      descarga: '/downloads/anexo1_telas_sena.pdf',
    },
    {
      tema: 'Insumos',
      referencia: 'Rojas C (s.f.) Fundamentación textil. Hilaturas – Hilos. ',
      tipo: 'PDF',
      descarga: '/downloads/Anexo_2_Fundamentacion_Textil_Hilaturas_Hilos.pdf',
    },
    {
      tema: 'Consumo de hilo',
      referencia:
        'Coats Multisolution (s.f.) Cálculo de consumo de hilo para tejido liviano. ',
      tipo: 'Documento',
      descarga:
        '/downloads/Anexo_3_Tabla_dinamica_calculo_consumo_hilo_tejido_liviano.xls',
    },
    {
      tema: 'Inventarios',
      referencia:
        'Fondo esperanza (s.f.) Cómo hacer un buen inventario | Aprendo y Emprendo. [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/s_GBs0V4cR0',
    },
    {
      tema: 'Funciones del inventario',
      referencia:
        'Hancco M. (2018) Tutorial Req Materia Prima y consumo [Video] YouTube.',
      tipo: 'Video',
      link: 'https://youtu.be/CEKjA_UsvnQ',
    },
    {
      tema: 'Inventarios – Administración de la producción ',
      referencia: 'Zambelli Rafael. (2023) Gestion de inventarios Blog.',
      tipo: 'Blog',
      link:
        'https://blog-es.checklistfacil.com/gestion-de-inventario/?utm_term=&utm_campaign=LATAM-ES-PAID-CF-GOOGLE-SEARCH-LM_NOVOS_LEADS-DSA-BLOG&utm_source=google&utm_medium=cpc&hsa_acc=6707140990&hsa_cam=21096577828&hsa_grp=160250856136&hsa_ad=693261475572&hsa_s',
    },
  ],
  glosario: [
    {
      termino: 'Ancho de la tela',
      significado:
        'Longitud determinada por la longitud de los hilos a lo ancho del telar, trama.',
    },
    {
      termino: 'Calidad',
      significado:
        'Conjunto de especificaciones a cumplir, para dar satisfacción a una necesidad y expectativa del cliente.',
    },
    {
      termino: 'Consumo promedio',
      significado:
        'Cantidad de materiales e insumos necesarios para la construcción de una prenda de vestir y/ o un servicio del sistema moda.',
    },
    {
      termino: 'Investigación',
      significado:
        'Indagar tendencias, colores, procesos, utilizando como fuentes ferias, internet, desfiles. Desarrollo: elaborar prototipos con la anterior información.',
    },
    {
      termino: 'Ficha técnica',
      significado:
        'Documento que contiene información que orienta los procesos para construir muestras y lotes de producción.',
    },
    {
      termino: 'Marquilla instrucción lavado',
      significado:
        'Elemento que va fijado en la prenda que contiene información sobre los cuidados que hay que tener al lavar las prendas.',
    },
    {
      termino: 'Producción',
      significado:
        'Conjunto de actividades que agregan valor para obtener un bien o un servicio.',
    },
    {
      termino: 'Sistema',
      significado:
        'Conjunto de partes que interactúan, para conseguir el mismo objetivo, con excelente comunicación, y a la misma velocidad.',
    },
    {
      termino: 'Tejido',
      significado:
        'Conjunto de hilos entrelazados, con características de peso, suavidad, composición, y volumen.',
    },
    {
      termino: 'Trazo',
      significado:
        'Dibujo de los moldes sobre la tela o sobre un papel que tenga las medidas de la tela que se va a trabajar, en las cantidades y tallas que se requieran.',
    },
    {
      termino: 'O.P.',
      significado:
        'Orden de producción: documento que describe de manera detallada las cantidades de los lotes a producir.',
    },
  ],
  referencias: [
    {
      referencia:
        'Arrechedora, I. (2020). Gestión de inventarios: concepto, tipos, modelos y ejemplos. Lifeder.',
      link: 'https://www.lifeder.com/gestion-inventarios/',
    },

    {
      referencia:
        'Chi, B. (2020, 26 Nov). ficha técnica, un documento imprescindible para la producción de moda. [Blog]. SeamPedia.com',
      link:
        'https://seampedia.com/ficha-tecnica-documento-inprescindible-produccion-moda/#:~:text=La%20ficha%20t%C3%A9cnica%20contiene%20toda,mejora%20los%20tiempos%20de%20entrega',
    },

    {
      referencia:
        'Calderón Rojas, C. (2020).  Fundamentación textil, hilaturas e hilos. Material formativo para el Programa Tecnólogo en desarrollo de colecciones para la industria de la moda.',
    },

    {
      referencia:
        'Canal Fondo Esperanza. (2019). Como hacer un buen inventario, aprendo y emprendo. [Archivo de video] YouTube.',
      link: 'https://www.youtube.com/watch?v=s_GBs0V4cR0',
    },

    {
      referencia:
        'Depositphotos. (2017). Fibras de material azul enlazadas. Blog fotos.',
      link:
        'https://depositphotos.com/es/photos/fibras-de-material-azul-enlazadas.html',
    },

    {
      referencia:
        'Hancco Machaca, M. (2018) Tutorial requerimientos materia prima y consumo. [Archivo de video] YouTube',
      link: 'https://www.youtube.com/watch?v=CEKjA_UsvnQ',
    },

    { referencia: 'Rojas C (s.f.) Fundamentación textil. Hilaturas – Hilos.' },

    {
      referencia:
        'SENA. (2021). Componente formativo 14. Materiales e insumos para vestuario. Programa Tecnólogo en desarrollo de colecciones para la industria de la moda.',
    },

    {
      referencia:
        'SENA. (2021) Telas, materiales, insumos y maquinaria para la confección de ropa interior. Material formativo Programa tecnólogo de diseño para la industria de la moda. Recuperado de',
      link:
        'https://drive.google.com/file/d/0B0cUWYMxp4Tmb25Qal8yYzl0U1E/view?usp=sharing&resourcekey=0-tonU5rMv8Vs06Ef_RErNDQ',
    },
  ],
  creditos: [
    {
      titulo: 'ECOSISTEMA DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Claudia Johanna Gómez Pérez',
          cargo: 'Responsable de Línea de Producción',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor Metodológico y Pedagógico',
          centro:
            'Regional Santander - Centro Industrial del Diseño y la Manufactura ',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Experto Temático',
          centro:
            'Regional Antioquia - Centro de Formación en Diseño, Confección y Moda ',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora Metodologa Diseño y Desarrollo Curricular',
          centro:
            'Regional Antioquia  - Centro de Formación en Diseño, Confección y Moda ',
        },
        {
          nombre: 'Giovanna Escobar',
          cargo: 'Diseñadora Instruccional',
          centro: 'Regional Antioquia - Centro de Servicios de Salud',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Diseñadora Instruccional',
          centro:
            'Regional Distrito Capital - Centro para la Industria de la Comunicación Gráfica ',
        },
        {
          nombre: 'Vilma Lucia Perilla M',
          cargo: 'Revisora Pedagógica y Metodológica',
          centro: 'Regional Distrito Capital - Centro de Gestión Industrial ',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y Evaluador Instruccional',
          centro:
            'Regional Distrito Capital  - Centro para la Industria de la Comunicación Gráfica ',
        },
        {
          nombre: 'Sandra Paola Morales Páez',
          cargo: 'Evaluadora Instruccional',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: 'Yazmin Figueroa Pacheco',
          cargo: 'Diseñadora de Contenidos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrolladora <i>Full-Stack</i>',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Yuly Andrea Rey Quiñonez',
          cargo: 'Validadora de Diseño y Contenido',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Yineth Ibette Gonzalez Quintero',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Laura Paola Gelvez Manosalva',
          cargo: 'Validadora de Recursos Educativos Digitales',
          centro: 'Regional Santander - Centro Agroturístico',
        },
        {
          nombre: 'Erika Fernanda Mejía Pinzón',
          cargo: 'Evaluadora Para Contenidos Inclusivos y Accesibles',
          centro: 'Regional Santander - Centro Agroturístico',
        },
      ],
    },
  ],
  creditosAdicionales: {
    imagenes:
      'Fotografías y vectores tomados de <a href="https://www.freepik.es/" target="_blank">www.freepik.es</a>, <a href="https://www.shutterstock.com/" target="_blank">www.shutterstock.com</a>, <a href="https://unsplash.com/" target="_blank">unsplash.com </a>y <a href="https://www.flaticon.com/" target="_blank">www.flaticon.com</a>',
    creativeCommons:
      'Licencia creative commons CC BY-NC-SA<br><a href="https://creativecommons.org/licenses/by-nc-sa/2.0/" target="_blank">ver licencia</a>',
  },
}
