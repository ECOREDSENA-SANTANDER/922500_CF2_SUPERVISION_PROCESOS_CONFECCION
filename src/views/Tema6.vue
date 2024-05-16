<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Inventario
      

    .row.mb-5
      .col-sm-12.col-lg-3 
        img.d-none.d-lg-block.img-a(src='@/assets/curso/temas/tema_6/img_10.svg', alt='Imagen decorativa')
      .col-sm-12.col-lg-9
        p La descripción actualizada que una organización realiza de sus productos o servicios incluye detalles como la fecha, el lugar, códigos, referencias y cantidades. Este registro se lleva de manera organizada, coherente y racional, lo que permite una gestión efectiva al conocer tanto lo disponible como lo necesario; para lograr esto es fundamental una buena planificación, lo que facilita un desempeño óptimo y la toma de decisiones acertadas en cuanto a compras se refiere.
    .tarjeta--bg1.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          p Para el desarrollo de sus actividades las empresas necesitan aprovisionarse de bienes y servicios para cumplir sus propósitos. La gestión del almacén se lleva a cabo a través de los inventarios en los que se detallan de forma ordenada los contenidos de bienes, que las empresas tienen en sus instalaciones. La información contenida en dichos inventarios forma un insumo importante para la empresa y sus operaciones comerciales, al mismo tiempo se provee información sobre materia prima necesaria para prestar los servicios. 
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 3.
            span Actividad de inventario.
          figure
            img(src='@/assets/curso/temas/tema_6/img_1.png', alt='Es importante conservar los inventarios de forma organizada, que permita llevar un control de existencias por referencias y así contar con lo suficiente y necesario.') 
          figcaption Nota. Arrechedora, I. (2020).

    
    p.mb-5(data-aos="zoom-in") Revisar el siguiente video, presentado por el Fondo Esperanza, donde se entregan tips, consejos y recomendaciones relacionadas con el inventario, se refuerza la definición, como clasificarlo, codificarlo, listarlo, prestar atención a la información mínima que se debe incluir:

        figure.mb-5(data-aos="slide-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/s_GBs0V4cR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Cómo hacer un buen inventario

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.1 Políticas empresariales de inventarios 

    p.mb-3(data-aos="zoom-in") Se definen como estrategias empresariales pensadas para administrar eficientemente los recursos materiales de la organización, potenciando así los procesos de calidad de servicio al cliente y minimizando costos de mantenimiento. 
    p.mb-5(data-aos="zoom-in") Se construyen de acuerdo con los siguientes criterios:


    .tarjeta.row.mb-5
    .col-md.tarjeta.bg4.p-5
      .row
        .col-10

      .row.justify-content-center
        .col-lg-5
          hr
          .list_1.mb-0(data-aos="zoom-in").h-list
            .list_1__item 
              .list_1__item__bulletNumber 
                span 1
            .list_1__txt
              h5 Respuesta de los proveedores
              p El tiempo de respuesta para entregar los pedidos de parte de los proveedores es fundamental para que las programaciones se cumplan, es imposible hacer un plan cuando existe incertidumbre en poseer en inventario los materiales que se necesitan.
          hr
          .list_1.mb-3(data-aos="zoom-in").h-list
            .list_1__item 
              .list_1__item__bulletNumber 
                span 3
            .list_1__txt
              h5 Posición geográfica donde se encuentra el proveedor
              p Cuando los facilitadores de insumos están ubicados muy lejos y esa condición no permite acceso rápido a los pedidos, se toman decisiones que contrarresten esa situación.
          hr
        .col-lg-5
          hr
          .list_1(data-aos="zoom-in").h-list
            .list_1__item 
              .list_1__item__bulletNumber 
                span 2
            .list_1__txt
              h5 Frecuencia de utilización de un insumo o material
              p Existen materiales e insumos que en las empresas se utilizan más a menudo que otros, de acuerdo con este criterio, se establece mantener inventario constante de estos productos. 
          hr
          .list_1(data-aos="zoom-in").h-list
            .list_1__item 
              .list_1__item__bulletNumber 
                span 4
            .list_1__txt
              h5 Períodos de plazo y descuentos
              p Los términos de negociación, como los plazos y descuentos, pueden influir en la gestión de inventarios sin afectar la parte financiera. 
          hr

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.2 Sistemas de inventarios

    p.mb-5(data-aos="zoom-in") Un sistema de inventarios es una herramienta de gestión empleada para registrar el conjunto de elementos que interactúan entre sí  productos, áreas, cantidades, precios, fechas, documentos, informaciones, logística, embalajes, presentación. También incluye en este sistema, normas, métodos y procedimientos aplicados para que la elaboración de inventarios realmente cumpla con su finalidad de saber cuánta mercancía existe, los niveles de rotación de los productos, cuales están por acabarse o identificar aquellos próximos a caducar y se pueden controlar las existencias de forma manual o de forma sistematizada.


  
    .mt-5.d-flex.mb-5(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 250px;') Inventario manual
        img.col-lg.d-flex(src='@/assets/curso/temas/icon-bot.svg')(style='left: -85%; max-width: 55px;').icon-img-blue

    
    .row.mb-5
      .col-lg-8.mb-3(data-aos="fade-down-left")
        p.mb-3 El conteo de los productos se hace manual, y se registra en formatos diseñados para este fin, es un método costoso debido a la cantidad de tiempo, cantidad de personas, y cantidad de papelería que se requiere. Debido a esto, el inventario físico se realiza pocas veces al año para corroborar la información teórica y la información real. 
        p.mb-3 A estos inventarios se les va sumando las compras que en determinada fecha se realiza, y se descuenta los materiales utilizados en las diferentes referencias producidas; la información continua, actualizada y detallada no es fácil hacerla debido a la cantidad de elementos que de manera manual se debe hacer funcionar. Este tipo de inventarios se deben hacer periódicamente.
        p Las empresas que llevan este tipo de inventario lo realizan en un documento denominado #[i Kardex], un formato que permite registrar la entrada y salida de materiales e insumos, consultar tabla 8.

      .col-lg-4.mb-3.mb-lg-0.d-flex(data-aos="fade-down-right")
        figure
          img(src='@/assets/curso/temas/tema_6/img_2.png', alt='Imagen decorativa') 
    
    .titulo-sexto.color-acento-contenido(data-aos='fade-right')
      h5 Tabla 8.
      span Ficha Control de inventario.
    .row.justify-content-center
      .col-sm-12.col-lg-10.justify-content-center
        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in") 
          table
            thead
              tr
                th(colspan=8) 
                  h4 Ficha Control de inventario
            tbody
              tr
                td Fecha:	 	
                td
                td(colspan=4) Empresa: XXX	
                td(colspan=2) Documento N°:
              tr
                td Producto:
                td 
                td(colspan=3) Producto:
                td(colspan=2) Proovedor:
                td
              tr.text-center.td_bg1
                td Fecha 	
                td Entrada
                td Salida	
                td Saldo	
                td Fecha	
                td Entrada
                td Salida	
                td Saldo
              tr
                td
                td
                td
                td
                td
                td
                td
                td
              tr
                td
                td
                td
                td
                td
                td
                td
                td
              tr.text-center
                td(colspan=2) Observaciones:
                td(colspan=6)


    .mt-5.d-flex.mb-5(data-aos="fade-right")
      .d-flex.flex-wrap.align-items-center.pe-4
        h3.col.px-4.mb-0.text-white.bg-img-blue(style='width: 320px;') Inventario sistematizado
        img.col-lg.d-flex(src='@/assets/curso/temas/icon-bot.svg')(style='left: -88%; max-width: 55px;').icon-img-blue  

    p.mb-5  Se requiere disponer de un #[i software ], el cual hay que alimentarlo con la siguiente información: 

    .row.justify-content-center.mb-5 
      .col-10
        .py-3.py-md-4(titulo="Inventario\nsistematizado" :imagen="images[1]"  :numero="numbers[1]")
          .row.mb-5
            .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
              img(src='@/assets/curso/temas/tema_6/img_3.png', alt='Imagen decorativa') 
              h5.text-center Los proveedores
              p.text-center Nombre, dirección, portafolio de productos o servicios, precios, presentación, unidades de medida, redes, teléfonos, contactos y demás datos que lo identifique.

            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
              img(src='@/assets/curso/temas/tema_6/img_4.png', alt='Imagen decorativa') 
              h5.text-center Los productos
              p.text-center Descripción, nombre comercial, presentación, unidad de medida, productor, código, referencia.


            .col-lg-4.mb-4.mb-lg-0(data-aos="fade-slide-right")
              img(src='@/assets/curso/temas/tema_6/img_5.png', alt='Imagen decorativa') 
              h5.text-center Los clientes
              p.text-center Domicilio, precios de venta, redes, transportadoras, criterios de venta.


    .row.mb-5 
      .col-sm-12.col-lg-7
        .cajon.color-primario.p-4.mb-5
          p Después que el #[i software ] tiene la información que le permite interactuar, se establece el código de identificación de los productos; de qué material está construido, con qué equipo se aplica y en qué parte se coloca.

        p.mb-5 Estos programas tienen la facultad de imprimir códigos de barra entre otros, ya con los adhesivos de los códigos de barra, se le colocan a las materias primas e insumos, y con un lector de códigos de barra se lee la información allí consignada, este a su vez envía la información al sistema, este ejercicio se hace a la entrada y también a la salida, y de esta manera la información se mantiene actualizada, y en poco tiempo.
      
      .col-5
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema_6/img_11.svg', alt='Imagen decorativa')

    p.mb-5 Se utilizan también códigos QR, que son leídos con un dispositivo diseñado para ese fin. En ese código está toda la información de esa prenda de vestir, o de ese paquete, o de esa caja; existen sensores para determinar las cantidades que se tienen de algún producto.


    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-sm-12.col-lg-11
        .titulo-sexto.color-acento-contenido(data-aos='fade-right')
          h5 Figura 4.
          span  Insumos con código QR.
    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-sm-12.col-lg-8
        figure
          img(src='@/assets/curso/temas/tema_6/img_6.png', alt='Insumos embalados en cajas de cartón que están identificadas con un código QR que contiene toda la información de su contenido') 
        figcaption Nota. Arrechedora, I. (2020). 
        
    .row.justify-content-center.mb-5 
      .col-10
        .cajon.color-secundario.p-4
          p.mb-3 La sistematización de los procedimientos de inventario garantiza un flujo dinámico de información y materiales, optimizando así todos los procesos de la compañía. Además, ayuda a prevenir impactos negativos en la producción o la situación financiera debido a excesos o deficiencias en las existencias, ya que mantiene bajo control las variables de entradas, salidas y existencias reales, facilita la toma de decisiones más informadas.
          p.mb-0 En realidad, el sistema o #[i software ] utilizado simplemente recopila datos y realiza cálculos rápidos sobre la mercancía disponible.
    separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.3 Funciones del inventario


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/2L91WMqw96A" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description

    p.mb-5 A continuación, se presenta el video tutorial para identificar la función del inventario, los requerimientos de materia prima y consumo.


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure.mb-5(data-aos="slide-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/CEKjA_UsvnQ" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Tutorial Req Materia Prima y consumo



    separador

    #t_6_4.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.4 Tipos de inventarios

    .row.justify-content-center
      .col-lg-10
        .tarjeta-avatar-b.mb-3(data-aos="fade-down-right")
            .tarjeta-avatar-b__img
              img.img-a(src='@/assets/curso/temas/tema_6/img_7.svg' alt='Imagen decorativa')
            .tarjeta.tarjeta--bg1
              .p-4
                h5 Inventario de materia prima e Insumos 
                p Se refiere a los elementos necesarios al inicio del proceso, y que se requieren para fabricar prendas de vestir.
        .tarjeta-avatar-b.mb-3(data-aos="fade-down-left")
            .tarjeta-avatar-b__img
              img.img-a(src='@/assets/curso/temas/tema_6/img_8.svg' alt='Imagen decorativa')
            .tarjeta.tarjeta--bg1
              .p-4
                h5 Inventario de producción en proceso
                p En la medida que van avanzando los lotes en su proceso, adquieren un valor menor o mayor, de acuerdo con los recursos que se les haya invertido.  
        .tarjeta-avatar-b.mb-3(data-aos="fade-down-right")
            .tarjeta-avatar-b__img
              img.img-a(src='@/assets/curso/temas/tema_6/img_9.svg' alt='Imagen decorativa')
            .tarjeta.tarjeta--bg1
              .p-4
                h5 Inventario de producto terminado
                p Son los que son transferidos de la sala de producción a la bodega de despachos, porque cumplen con el 100% de su proceso de elaboración. Los productos terminados también requieren un control de existencias.


</template>

<script>
import TabSpecial from '../components/TabSpecial.vue'

const imagentab1 = require('@/assets/curso/temas/tema_6/tema2-tabs1.svg')
const imagentab2 = require('@/assets/curso/temas/tema_6/tema2-tabs2.svg')
const numerotab1 = require('@/assets/curso/temas/tema_6/tema2-number1.svg')
const numerotab2 = require('@/assets/curso/temas/tema_6/tema2-number2.svg')
export default {
  name: 'Tema6',
  components: {
    TabSpecial,
  },
  data: () => ({
    images: [imagentab1, imagentab2],
    numbers: [numerotab1, numerotab2],
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

<style lang="sass" scoped></style>
