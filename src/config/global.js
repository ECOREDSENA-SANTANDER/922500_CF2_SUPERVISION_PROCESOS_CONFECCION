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
      // {
      //   icono: 'fas fa-file-pdf',
      //   titulo: 'Descargar PDF',
      //   download: 'downloads/prueba.pdf',
      // },
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
      link: '/downloads/Anexo_1_Telas_Sena.pdf',
    },
    {
      tema: 'Insumos',
      referencia: 'Rojas C (s.f.) Fundamentación textil. Hilaturas – Hilos ',
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
      tema: 'Planeación y control de la producción',
      referencia:
        'Sipper, D; Bulfin, R. (1998). Planeación y control de la producción. McGraw-Hill Interamericana Editores.',
      tipo: 'E-book/Enlace',
      link:
        'https://www.academia.edu/10997351/Daniel_Sipper_Planeaci%C3%B3n_y_Control_de_La_Producci%C3%B3n',
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
      referencia:
        'Cruz Fernández, A. (2017). Gestión de inventarios: UF0476 . IC Editorial. Ebooks 7-24. ',
      tipo: 'Enlace de biblioteca',
      link: 'http://www.ebooks7-24.com.bdigital.sena.edu.co/?il=8741 ',
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
        'Chi, B. (2020, 26 Nov). Ficha Técnica en moda: ¿qué información incluir? [Blog]. SeamPedia.com',
      link: 'https://seampedia.com/ficha-tecnica-en-moda/',
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
        'https://sp.depositphotos.com/177910842/stock-photo-linked-blue-material-fibers.html',
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
          nombre: 'Claudia Patricia Aristizabal',
          cargo: 'Responsable del Ecosistema',
          centro: 'Dirección General',
        },
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Responsable de Línea de Producción',
          centro:
            'Centro Industrial del Diseño y la Manufactura - Regional Santander',
        },
      ],
    },
    {
      titulo: 'CONTENIDO INSTRUCCIONAL',
      autores: [
        {
          nombre: 'Rafael Neftalí Lizcano Reyes',
          cargo: 'Asesor metodológico y pedagógico',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Pedro Luis Sossa Ramírez',
          cargo: 'Experto temático',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Regional Antioquia',
        },
        {
          nombre: 'Liliana María Ceballos Gutiérrez',
          cargo: 'Asesora metodologa diseño y desarrollo curricular',
          centro:
            'Centro de Formación en Diseño, Confección y Moda Regional Antioquia ',
        },
        {
          nombre: 'Giovanna Escobar',
          cargo: 'Diseñadora instruccional',
          centro: 'Centro de Servicios de Salud Regional Antioquia',
        },
        {
          nombre: 'Liliana Morales',
          cargo: 'Diseñadora instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital',
        },
        {
          nombre: 'Vilma Lucia Perilla M',
          cargo: 'Revisora pedagógica y metodológica',
          centro: 'Centro de Gestión Industrial Regional Distrito Capital',
        },
        {
          nombre: 'Jhon Jairo Rodríguez Pérez',
          cargo: 'Diseñador y evaluador instruccional',
          centro:
            'Centro para la Industria de la Comunicación Gráfica Regional Distrito Capital ',
        },
      ],
    },
    {
      titulo: 'DISEÑO Y DESARROLLO DE RECURSOS EDUCATIVOS DIGITALES',
      autores: [
        {
          nombre: ['Oscar Ivan Uribe Ortiz'],
          cargo: 'Diseñador web',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Lizeth Karina Manchego Suarez',
          cargo: 'Desarrollora Full-Stack',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
        {
          nombre: 'Jhana Johanna Bustillo Ardila',
          cargo: 'Validadora de diseño y contenido',
          centro:
            'Centro Industrial del Diseño y la Manufactura Regional Santander',
        },
      ],
    },
    {
      titulo: 'VALIDACIÓN RECURSO EDUCATIVO DIGITAL',
      autores: [
        {
          nombre: 'Milady Tatiana Villamil Castellanos',
          cargo: 'Validadora y vinculadora en plataforma LMS',
          centro: 'Centro de Comercio y Servicios Regional Tolima',
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
  // creditosInicio: [
  //   {
  //     titulo: 'En alianza',
  //     contenido: [
  //       require('@/assets/template/logo-sena-naranja.svg'),
  //       require('@/assets/template/mintic.jpg'),
  //       require('@/assets/template/minsalud.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'En compañía',
  //     contenido: [
  //       require('@/assets/template/presidencia.jpg'),
  //       require('@/assets/template/ecopetrol.jpg'),
  //     ],
  //   },
  //   {
  //     titulo: 'Una iniciativa',
  //     contenido: [require('@/assets/template/santander.jpg')],
  //   },
  // ],
}
