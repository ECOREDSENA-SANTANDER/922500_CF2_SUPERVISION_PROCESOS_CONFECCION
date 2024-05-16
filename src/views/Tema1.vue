<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5

    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 1
      h1 Materias primas e insumos 

    
    .fullview 
      .row.px-5.pt-5.position-relative(data-aos="fade-right")
        .col-2 
          img.img-t.img-a.mt-4.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_25.svg', alt='Iconos de materias prima')
        .col-sm-12.col-lg-6
          p La diversidad de materias primas, accesorios e insumos que se relacionan con la industria textil hace de este escenario un gran campo para recorrer, en este sentido conocer los principales materiales e insumos para la confección es fundamental para decisiones futuras en relación con el diseño y la producción de prendas. 
        .col-4 
          img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_2.png', alt='Telas de muestra')
  

    separador

    #t_1_1.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.1  Materias primas

    p.mb-5(data-aos="fade-right") Se puede definir la materia prima como el conjunto de elementos que están presentes en la elaboración de un producto, es decir aquello que se transforma y se incorpora en la producción final de un producto. Las materias primas pueden ser de tres tipos:


    .row.justify-content-center.mb-5.d-flex(data-aos="fade-right")
      .col-lg-4.d-flex
        .nav-holder2.d-flex(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema_1/img_3.svg', alt="Materias primas de origen vegetal")
          .text.px-lg-5.p-4
            p.mb-3 Son  extraídas de la naturaleza como plantas, algodón, lino, semillas y transformadas en materiales que se convierten en bienes de consumo.
            p.mb-0 Las principales son el algodón y el lino. Las prendas más comunes que se fabrican con estas fibras son: chaquetas, camisas, pantalones, sacos.
      .col-lg-4.d-flex
        .nav-holder3.d-flex(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema_1/img_4.svg', alt="Materias primas de origen animal")
          .text.px-lg-5.p-4
            p.mb-3 Son  extraídas de animales, como  lana, seda, cueros. Las más utilizadas en el sistema moda son las lanas y las sedas.
            p.mb-0 Desde tiempos prehistóricos el ser humano viene utilizando las fibras, pelos y pieles para la confección de prendas de vestir.
      .col-lg-4.d-flex
        .nav-holder2.d-flex(@mouseover="mostrarIndicador = false")
          .indicador--click(v-if="mostrarIndicador")
          img(src='@/assets/curso/temas/tema_1/img_5.svg', alt="Materias primas de origen mineral")
          .text.px-lg-5.p-4
            p.mb-0 Son  extraídas de la tierra, el agua, pigmentos, metales y químicos, de ahí provienen los botones, hebillas, remaches, entre otros.

    p.mb-5(data-aos='fade-right') En el proceso de confección se utilizan una variedad de materiales, entre las más comunes se pueden relacionar las fibras textiles y las telas.



    .mt-5.d-flex.mb-5(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 210px;') Fibras textiles
        img.col-lg.d-flex(src='@/assets/curso/temas/icon-bot.svg')(style='left: -82%; max-width: 55px;').icon-img-blue

    p.md-4(data-aos="fade-right") Llevan este nombre un conjunto de filamentos o hebras que conforman los hilos con los que se construyen los tejidos; son naturales o sintéticas (provienen de derivados del petróleo). 
    p(data-aos="fade-right") Las más utilizadas son: 

    


    TabsC(data-aos="fade-right")
      .py-4.py-md-5.tab1(titulo="Algodón")
        .row.justify-content-center
          .col-sm-12.col-lg-5
            p.mb-0.mx-3 El algodón es una fibra textil de origen vegetal que se desarrolla alrededor de las semillas de la planta del mismo nombre, su principal característica es la capacidad de permitir la aireación, lo que hace que las telas fabricadas con esta fibra proporcionen una sensación de frescura al usarlas. Esta fibra es versátil, ya que permite una fácil manipulación en el tejido y puede mezclarse con otras fibras, lo que la convierte en una de las más utilizadas.
          .col-sm-8.col-lg-5 
            img.mx-3(src='@/assets/curso/temas/tema_1/img_34.svg', alt="Algodon materia prima de origen natural")

      .py-4.py-md-5.tab1(titulo="Rayón o viscosa")
        .row.justify-content-center
          .col-sm-12.col-lg-5
            p.mb-0.mx-3 Rayón o viscosa es una fibra artificial manufacturada que luego de un proceso químico, el resultante es regenerado e introducido en orificios formado filamentos para luego hacer el tejido. Se utiliza para fabricar prendas cómodas  y su apariencia es similar al algodón o a la seda.
          .col-sm-12.col-lg-5 
            img.mx-3(src='@/assets/curso/temas/tema_1/img_35.svg', alt="Fibra artificial manufacturada")
      .py-4.py-md-5.tab1(titulo="Lino")
        .row.justify-content-center
          .col-sm-12.col-lg-5
            p.mb-0.mx-3 Esta fibra, originaria de la planta del mismo nombre, se utiliza para crear un tejido llamado lino, sus características más destacadas son la frescura, la comodidad y la elegancia. Además de su uso en prendas de vestir, el lino también se emplea en la confección de ropa de hogar.
          .col-sm-12.col-lg-5 
            img.mx-3(src='@/assets/curso/temas/tema_1/img_36.svg', alt="Muestra tejido llamado Lino") 
      .py-4.py-md-5.tab1(titulo="Seda")
        .row.justify-content-center
          .col-sm-12.col-lg-5
            p.mb-0.mx-3 La seda es una fibra de origen animal, producida por los gusanos de seda en un proceso laborioso, lo que la convierte en una fibra costosa, pues es un tejido fino que requiere cuidado especial en su manejo.
          .col-sm-12.col-lg-5 
            img.mx-3(src='@/assets/curso/temas/tema_1/img_37.svg', alt="Muestra seda de origen animal")
      .py-4.py-md-5.tab1(titulo="Lana")
        .row.justify-content-center
          .col-sm-12.col-lg-5
            p.mb-0.mx-3 Es otra fibra natural de origen animal, su utilización es la de las más antiguas que ha realizado la humanidad. Proviene de animales como las llamas, las ovejas, las alpacas y las cabras.
          .col-sm-12.col-lg-5 
            img.mx-3(src='@/assets/curso/temas/tema_1/img_38.png', alt="Materias primas de origen mineral")


    .mt-5.d-flex.mb-5(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 125px;') Tela
        img.col-lg.d-flex(src='@/assets/curso/temas/icon-bot.svg')(style='left: -78%; max-width: 55px;').icon-img-blue
      
    p.mb-5(data-aos="fade-right") Las telas son la materia prima por excelencia en la confección de prendas de vestir, siendo el componente principal en su composición, pues se trata de tejidos fabricados con fibras textiles entrelazadas en un telar o máquina, cuenta con diversos usos tanto en prendas de vestir como en ropa de hogar y otros sectores industriales y domésticos. Vale la pena señalar que además de las fibras vegetales, existen tejidos fabricados con fibras de origen animal.


    .row.mb-5(data-aos="fade-right")
      .col-lg-2
          figure
            img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_26.png' ) 
      .col-lg-9.mt-3
        ul.lista-ul--color.mb-3
          li 
            i.lista-ul__vineta
            h5 Características de las telas

        p.mb-5 Las telas presentan características específicas que son importantes tener en cuenta al elegirlas, como la forma en que están entrecruzadas las fibras, que define el tejido y su apariencia, y las dimensiones, especialmente el ancho y el largo.
        
    .row.mb-5(data-aos="fade-right")
      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_27.svg' alt='AvatarTop')
          .tarjeta.bg-tarjeta 
            .p-4
              h2.text-center Fabricación
              p Pueden estar elaboradas en un telar con hilos perpendiculares (urdimbre), e hilos horizontales (trama), a este tipo de tejido con dos hilos se le conoce como <b>tejido plano</b>, también existen tejidos realizados por una sola aguja, o sea un solo hilo que se va entrelazando, a ese se le denomina <b>tejido de punto</b>.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_28.svg' alt='AvatarTop')
          .tarjeta.bg-tarjeta 
            .text-black.p-4
              h2.text-center Textura
              p La textura es una característica relevante al seleccionar telas, ya que algunas son más suaves al tacto que otras, lo que es especialmente importante considerar dado que las prendas de vestir están en contacto directo con la piel.

      .col-md-6.col-lg.mb-5.mb-lg-0
        .tarjeta-avatar
          img(src='@/assets/curso/temas/tema_1/img_29.svg' alt='AvatarTop')
          .tarjeta.bg-tarjeta 
            .text-black.p-4
              h2.text-center Elasticidad
              p La elasticidad se refiere a la capacidad de la tela para estirarse y volver a su forma original, esta característica es importante al fabricar prendas, ya que algunas requieren mayor elasticidad que otras, como en el caso de la ropa deportiva.


    .row.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-2
          figure
            img.br-10.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_10.png' ) 
      .col-sm-12.col-lg-10
        ul.lista-ul--color.mb-3
          li 
            i.lista-ul__vineta
            h5 Composición de las telas 

        p.mb-5 Hace referencia a las clases de fibras con las que están constituidas las telas, algunas están compuestas en un ciento por ciento de la misma fibra y hay otras conformadas por mezclas de diferentes fibras, unas naturales y otras sintéticas. Hay múltiples tejidos con mezclas, y de acuerdo con las textilerías que las fabrican, reciben diferentes nombres comerciales, tales como Indiana, Perchado, Monserrat Chicago, Amatista, Aurora, Vesubio, Arkansas. 





    .row.mb-5(data-aos="fade-right")     
      .col-lg-9
        ul.lista-ul--color.mb-3
          li 
            i.lista-ul__vineta
            h5 Tipos de telas más comunes

        p.mb-3 De acuerdo con su uso, existen numerosas telas en oferta en el mercado, no es lo mismo determinar una tela para ropa de trabajo, que un tejido para ropa interior. La composición, relacionada con el uso final, ayuda a escoger cuál es el tejido más apropiado para los diferentes proyectos. 
        p Consultar aquí las más comunes: 

        .tarjeta.bg-tarjeta-rosa.p-4.mb-5
          SlyderA
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-auto
                figure
                  img.img-a(src='@/assets/curso/temas/tema_1/img_11.png', alt='Imagen decorativa gabardina') 
              .col-md-6.mb-4.mb-md-0
                h5 Gabardina
                p Compuesta por fibras de algodón, es de difícil planchado y su aspecto es de brillo. Se utiliza en la confección de pantalones, trajes, abrigos y vestidos.
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-auto
                figure
                  img.img-a(src='@/assets/curso/temas/tema_1/img_12.png', alt='Imagen decorativa lino') 
              .col-md-6.mb-4.mb-md-0
                h5 Lino
                p Se origina en una planta y una fibra del mismo nombre, es un tejido fresco y durable, es recomendable para prendas informales de verano y para ropa de hogar.
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-auto
                figure
                  img.img-a(src='@/assets/curso/temas/tema_1/img_13.png', alt='Imagen decorativa Franela') 
              .col-md-6.mb-4.mb-md-0
                h5 Franela
                p.mb-0 Está compuesta por algodón o lana, se utiliza para ropa deportiva, chaquetas, vestidos. 
                p Es una tela suave satinada, en los últimos tiempos es elaborada con fibras sintéticas.
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-auto
                figure
                  img.img-a(src='@/assets/curso/temas/tema_1/img_14.png', alt='Imagen decorativa crepé') 
              .col-md-6.mb-4.mb-md-0
                h5 Crepé
                p Puede ser de poliéster, algodón o seda. La caída, el espesor y el brillo, hacen parte de sus características. Los trajes de noche son las prendas preferidas para utilizar esta tela.
            .row.justify-content-center
              .col-md-6.mb-4.mb-md-auto
                figure
                  img.img-a(src='@/assets/curso/temas/tema_1/img_15.png', alt='Imagen decorativa denim') 
              .col-md-6.mb-4.mb-md-0
                h5 Denim
                p También conocida como tela vaquera o mezclilla, es empleado para la producción de jeans, anteriormente su composición era 100% algodón, pero en los últimos tiempos se le ha incorporado elastómero con el fin de que gane elasticidad.

            
            

      .col-2
        figure
          img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_30.png' ) 


    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-10
        .cajon.color-primario.p-4.mb-3
          p.text-center.mb-0 El consumo de tela se lleva a cabo de manera masiva durante todo el año a nivel mundial. Este sector económico, parte de la industria textil, experimenta una gran demanda, lo que resulta en una facturación y generación de empleo significativamente importantes. La revisión del documento disponible a continuación permitirá profundizar acerca de las telas, sus características, tejidos y diferentes usos. 


    .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema_1/img_31.svg" )
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Anexo. Telas.
              p.text-small La revisión del documento disponible a continuación permitirá profundizar acerca de las telas, sus características, tejidos y diferentes usos.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('downloads/anexo1_telas_sena.pdf')" target="_blank")
                span Descargar
                i.fas.fa-file-download

    separador

    #t_1_2.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.2 Insumos


    .row.mb-5(data-aos="fade-right")   
      .col-sm-12.col-lg-8   
        .cajon.color-primario.p-4.mb-3
            p.mb-0 Los insumos se caracterizan por ser recursos, objetos o materiales transformados o modificados utilizados en la producción de otros bienes, productos o servicios. Estos juegan un papel muy importante en la estética y funcionalidad del producto, por eso son parte fundamental de la imagen de una prenda de vestir.
        p.mb-4 Los accesorios, directamente relacionados con el acabado y embalaje de un producto, se pueden definir como elementos terminados que ayudan a complementar, adornar o decorar el producto. En el proceso de producción, estos materiales e insumos se clasifican en dos escenarios: confección y empaque, los primeros se refieren a aquellos utilizados en la producción de prendas, mientras que los de empaque están relacionados con el producto final entregado al usuario.
        p Los insumos más utilizados en la industria de la moda son:            

      .col-4
        figure
          img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_32.png' )





    .tarjeta.tarjeta--azul-1.p-3.bg05.mb-5(data-aos="fade-right") 
      SlyderA
        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-5.my-2.mb-md-0
            h4.mb-3 Hilos
            p.mb-3 Los materiales textiles en forma de hebra, que resultan del tratamiento de fibras y que tienen como características su longitud alargada y continua, se llaman hilos. 
            p Pueden ser de origen natural o sintético y se utilizan para coser, tejer y bordar, entre otras funciones. En la industria de la confección, son importantes ya que, junto con agujas y máquinas de coser, se encargan de unir las piezas cortadas.
        
          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_16.png', alt='Sistema de producción lineal')

        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg-5.my-2.mb-md-0
            h4.mb-3 Botones
            p.mb-3 Es un elemento que se incorpora a las prendas de vestir para que, al pasar por una abertura hecha en la tela, se encargue de unir dos piezas, y las asegure.
            p Están compuestos por metal, nácar, madera, plástico, u otro material diseñado para ese fin. Se pueden pegar en máquina con aguja e hilo, a mano, o en máquina de golpe llamada remachadora. 
        
          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_17.png', alt='Sistema de producción lineal')

        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg--5.my-2.mb-md-0
            h4.mb-3 Hebillas
            p Es una pieza que sirve para sujetar o enganchar partes de la prenda de vestir, puede ser fabricada en metal o plástico. Se utiliza en correas, cinturones, cargaderas, etc.
        
          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_18.png', alt='Sistema de producción lineal')

        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg--5.my-2.mb-md-0
            h4.mb-3 Remaches
            p Son elementos colocados en las terminaciones de las costuras de algunas piezas con el fin de darles más resistencia a las costuras. Se recomienda pegarlos en las relojeras y bolsillos delanteros y traseros. Pueden ser de metal o plástico.

          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_19.png', alt='Sistema de producción lineal')

        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg--5.my-2.mb-md-0
            h4.mb-3 Broches
            p Se colocan los broches en las prendas de vestir con propósitos meramente estéticos. También hay broches que se componen de dos piezas, macho y hembra que se utilizan para sujetar, de esta manera se relaciona con el verbo abrochar.

          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_20.png', alt='Sistema de producción lineal')

        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg--5.my-2.mb-md-0
            h4.mb-3 Cremalleras
            p También llamado cierre, que se ubica en las prendas de vestir con el fin de cerrar y abrir aberturas o uniones de piezas. Está compuesto por unos dientes que se unen y abren, impulsados por una paleta o cabeza de cierre, estos dientes están sujetos por una cinta de tela en la mayoría de los casos. Los hay metálicos o de nylon o plástico.

          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_21.png', alt='Sistema de producción lineal')

        .row.justify-content-center.align-items-center
          .col-sm-12.col-lg--5.my-2.mb-md-0
            h4.mb-3 Marquillas
            p Elemento que se coloca en las prendas de vestir y que sirve para identificar características como, la talla, la marca, instrucciones de lavado, país de origen, código de identificación, etc. Se ubican en la parte interna y externa de la prenda. Existen de diferentes materiales, tejidas, estampadas, de papel, de cuero, de cartón, entre otros.
          .col-md-5
            figure
              img.d-none.d-lg-block(src='@/assets/curso/temas/tema_1/img_22.png', alt='Sistema de producción lineal')




    .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-0(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema_1/img_31.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              p.text-small A continuación, se relacionan dos documentos que le permitirán profundizar en los conceptos de la confección y fundamentación textil, se invita a estudiarlos. 

    .row.justify-content-center(data-aos="fade-right")
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/eslabones_de_confeccion.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-ppt.svg" alt='Imagen decorativa')
          .anexo__texto
            p #[strong Anexo.] Eslabones de confección.
      .col-lg-5
        a.anexo.mb-4(:href="obtenerLink('/downloads/Anexo_2_Fundamentacion_Textil_Hilaturas_Hilos.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg" alt='Imagen decorativa')
          .anexo__texto
            p #[strong Anexo.] Fundamentación Textil Hilaturas Hilos.

    separador

    #t_1_3.titulo-segundo.color-acento-contenido(data-aos="fade-right")
      .h2 1.3  Cadena de valor

    .row(data-aos='fade-right')
      .col-lg-3
        figure
          img(src='@/assets/curso/temas/tema_1/img_23.svg' )

      .col-lg-9
        .tarjeta--bg2.p-4.mb-5
          p.mb-3 <b>Las materias primas y los insumos juegan un papel importante en la cadena de valor de las organizaciones</b>, hacen parte de ese conjunto de elementos que van a relacionarse para obtener prendas de excelente calidad. Eso significa que entre todos los elementos y recursos que componen una prenda de vestir, los materiales con que están construidos, son una presencia muy importante.
          p.mb-0 Este conjunto de partes o sistema, conformado por recursos tangibles e intangibles, agrega valor a la cadena. La producción, como conjunto de actividades que agregan valor al proceso para obtener un bien o un servicio, se ve beneficiada al sumar materiales e insumos que contribuyen a la construcción de las prendas de vestir.

    
    p.mb-3(data-aos="fade-right") Dentro de este conjunto de acciones y partes, se encuentran las materias primas e insumos, cuya selección y origen pueden dar identidad a los productos, la marca y la organización en general, formando parte de una estrategia diferenciadora con respecto a la competencia. La calidad, el origen y la marca de los insumos suministrados por los proveedores pueden ayudar a darle un mayor reconocimiento a las prendas de vestir, por lo que una buena selección de proveedores contribuye a mejorar la cadena de valor.
    p.mb-5(data-aos="fade-right") Las actividades que tienen que ver con quienes son los proveedores de insumos, los criterios con que se seleccionan y el sector al que pertenecen, permiten darles valor a los productos.


    .mt-5.d-flex.mb-0(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4-cus
        h3.col.px-4-cus.mb-0.text-white.bg-img-tema1.wtitle Cabe entonces revisar cuáles son los elementos que conforman la cadena de valor:

    .tarjeta--bg3.p-4.mb-0.align-items-center(data-aos="fade-right")
      .row.justify-content-center.mb-5
        .col-sm-12.col-lg-7
          figure.mb-5
            img(src='@/assets/curso/temas/tema_1/img_24.svg', alt='La imagen muestra un diagrama de flujo del proceso de producción de ropa. El flujo comienza con el "Proveedor" de materiales, sigue con "Materias primas e insumos", luego "Producto", y finalmente el "Cliente" después de la "Distribución". Hay una ilustración de una persona ajustando un maniquí al lado del diagrama.')  

    .row.justify-content-center.mb-5(data-aos="fade-right")
      .col-sm-12.col-lg-7
        .cajon.color-primario.p-4.mb-3
          p.text-center.mb-0 Las materias primas e insumos de calidad minimizan el porcentaje de segunda calidad en la producción, evitan desperdicios y dificultades en la producción y a la vez mejora la competitividad.

   
    .tarjeta.tarjeta-descarga.color-secundario.p-3.mb-5(data-aos="fade-right")
      .row.justify-content-around.align-items-center
        .col-3.col-sm-2.col-lg-1
          img(src="@/assets/curso/temas/tema_1/img_31.svg")
        .col
          .row.justify-content-between.align-items-center
            .col.mb-3.mb-sm-0
              h3.mb-1 Materiales e insumos para vestuario.
              p.text-small Se puede profundizar sobre los materiales utilizados en el desarrollo de colecciones de moda en el siguiente enlace.
            .col-sm-auto
              a.boton.color-acento-botones.texto-blanco(:href="obtenerLink('/downloads/Infografia-CF2_Funciones inventario.pdf')" target="_blank")
                span Enlace
                i.fas.fa-link
                

</template>

<script>
export default {
  name: 'Tema1',
  components: {},
  data: () => ({
    datosSlyder: [
      {
        titulo: 'Hilos',
        texto:
          'Los materiales textiles en forma de hebra, que resultan del tratamiento de fibras y que tienen como características su longitud alargada y continua, se llaman hilos. <br><br>Los hay de origen natural, o sintético, y sirven para coser, hacer tejidos, y bordar, entre otras funciones. En la industria de la confección son de una importancia fundamental, ya que, en compañía de agujas y máquinas de coser, se encarga de unir las piezas cortadas.',
        imagen: require('@/assets/curso/temas/tema_1/img_16.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Botones',
        texto:
          'Es un elemento que se incorpora a las prendas de vestir para que, al pasar por una abertura hecha en la tela, se encargue de unir dos piezas, y las asegure.<br><br>Están compuestos por metal, nácar, madera, plástico, u otro material diseñado para ese fin. Se pueden pegar en máquina con aguja e hilo, a mano, o en máquina de golpe llamada remachadora.',
        imagen: require('@/assets/curso/temas/tema_1/img_17.png'),
        // leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Hebillas',
        texto:
          'Es una pieza que sirve para sujetar o enganchar partes de la prenda de vestir, puede ser fabricada en metal o plástico. Se utiliza en correas, cinturones, cargaderas, etc.',
        imagen: require('@/assets/curso/temas/tema_1/img_18.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Remaches',
        texto:
          'Son elementos colocados en las terminaciones de las costuras de algunas piezas con el fin de darles más resistencia a las costuras. Se recomienda pegarlos en las relojeras y bolsillos delanteros y traseros. Pueden ser de metal o plástico.',
        imagen: require('@/assets/curso/temas/tema_1/img_19.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Broches',
        texto:
          'Se colocan los broches en las prendas de vestir con propósitos meramente estéticos. También hay broches que se componen de dos piezas, macho y hembra que se utilizan para sujetar, de esta manera se relaciona con el verbo abrochar.',
        imagen: require('@/assets/curso/temas/tema_1/img_20.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },

      {
        titulo: 'Cremalleras',
        texto:
          'También llamado cierre, que se ubica en las prendas de vestir con el fin de cerrar y abrir aberturas o uniones de piezas. Está compuesto por unos dientes que se unen y abren, impulsados por una paleta o cabeza de cierre, estos dientes están sujetos por una cinta de tela en la mayoría de los casos. Los hay metálicos o de nylon o plástico.',
        imagen: require('@/assets/curso/temas/tema_1/img_21.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
      {
        titulo: 'Marquillas',
        texto:
          'Elemento que se coloca en las prendas de vestir y que sirve para identificar características como, la talla, la marca, instrucciones de lavado, país de origen, código de identificación, etc. Se ubican en la parte interna y externa de la prenda. Existen de diferentes materiales, tejidas, estampadas, de papel, de cuero, de cartón, entre otros.',
        imagen: require('@/assets/curso/temas/tema_1/img_22.png'),
        //leyendaImagen: 'Leyenda de la imagen',
      },
    ],
    // variables de vue
  }),
  mounted() {
    this.$nextTick(() => {
      this.$aosRefresh()
    })
  },
  updated() {
    this.$aosRefresh()
  },
}
</script>
