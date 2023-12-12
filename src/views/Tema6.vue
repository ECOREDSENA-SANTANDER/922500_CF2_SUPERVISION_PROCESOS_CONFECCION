<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 6
      h1 Inventario
      

    .row.justify-content-center.mb-5(data-aos="zoom-in")
      .col-lg-10.border_1
        p Es la descripción actualizada que realiza una organización de sus productos o servicios, donde se especifica: fecha, lugar, código, referencia, cantidad, este se registra de manera organizada, coherente y racional; este permite conocer qué se tiene y qué se necesita, para lograr esto es fundamental realizar una buena planeación, lo que permitirá un buen desempeño y la toma de mejores decisiones en la gestión de compras.

    .cajon.color-primario.p-4.mb-5(data-aos="zoom-in")
      .row.align-items-center
        .col-lg-6.mb-4.mb-lg-0
          p Para el desarrollo de sus actividades las empresas necesitan aprovisionarse de bienes y servicios para cumplir sus propósitos. La gestión del almacén se lleva a cabo a través de los inventarios en los que se detallan de forma ordenada los contenidos de bienes, que las empresas tienen en sus instalaciones. La información contenida en dichos inventarios forma un insumo importante para la empresa y sus operaciones comerciales, al mismo tiempo se provee información sobre materia prima necesaria para prestar los servicios. 
        .col-lg-6
          .titulo-sexto.color-acento-contenido(data-aos='fade-right')
            h5 Figura 1
            span Imagen de actividad de inventario
          figure
            img(src='@/assets/curso/tema_6/img_1.png', alt='') 
          figcaption Nota. Arrechedora, I. (2020).

    .row.justify-content-center
      .col-lg-10
        p.mb-5(data-aos="zoom-in") Observe el siguiente video, presentado por el Fondo Esperanza, donde se entregan #[i tips], consejos y recomendaciones relacionadas con el inventario, se refuerza la definición, como clasificarlo, codificarlo, listarlo, prestar atención a la información mínima que se debe incluir:

        figure.mb-5(data-aos="slide-down")
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/s_GBs0V4cR0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video: Cómo hacer un buen inventario

    separador

    #t_6_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.1 Políticas empresariales de inventarios 

    p(data-aos="zoom-in") Se definen como estrategias empresariales pensadas para administrar eficientemente los recursos materiales de la organización, potenciando así los procesos de calidad de servicio al cliente y minimizando costos de mantenimiento. 

    p.mb-5(data-aos="zoom-in") Se construyen de acuerdo con los siguientes criterios:

    .row.justify-content-center
      .col-lg-5
        hr
        .list_1.mb-0(data-aos="zoom-in")
          .list_1__item 
            .list_1__item__bulletNumber 
              span 1
          .list_1__txt
            h5 Respuesta de los proveedores
            p El tiempo de respuesta para entregar los pedidos de parte de los proveedores es fundamental para que las programaciones se cumplan, es imposible hacer un plan cuando existe incertidumbre en poseer en inventario los materiales que se necesitan.
        hr
        .list_1.mb-3(data-aos="zoom-in")
          .list_1__item 
            .list_1__item__bulletNumber 
              span 3
          .list_1__txt
            h5 Posición geográfica donde se encuentra el proveedor
            p Cuando los facilitadores de insumos están ubicados muy lejos y esa condición no permite acceso rápido a los pedidos, se toman decisiones que contrarresten esa situación.
        hr
      .col-lg-5
        hr
        .list_1.mb-5(data-aos="zoom-in")
          .list_1__item 
            .list_1__item__bulletNumber 
              span 2
          .list_1__txt
            h5 Frecuencia de utilización de un insumo o material
            p Existen materiales e insumos que en las empresas se utilizan más a menudo que otros, de acuerdo con este criterio, se establece mantener inventario constante de estos productos.
        hr
        .list_1.mb-5(data-aos="zoom-in")
          .list_1__item 
            .list_1__item__bulletNumber 
              span 4
          .list_1__txt
            h5 Períodos de plazo y descuentos
            p De acuerdo con términos de negociación, se puede permitir que; en algunas ocasiones; se manejen inventarios que no afecten la parte financiera.
        hr

    separador

    #t_6_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.2 Sistemas de inventarios

    p.mb-5(data-aos="zoom-in") Un sistema de inventarios es una herramienta de gestión empleada para registrar el conjunto de elementos que interactúan entre sí  productos, áreas, cantidades, precios, fechas, documentos, informaciones, logística, embalajes, presentación. También incluye en este sistema, normas, métodos y procedimientos aplicados para que la elaboración de inventarios realmente cumpla con su finalidad de saber cuánta mercancía existe, los niveles de rotación de los productos, cuales están por acabarse o identificar aquellos próximos a caducar y se pueden controlar las existencias de forma manual o de forma sistematizada.

    .row.justify-content-center
      .col-lg-7

        TabSpecial.color-acento-botones.mb-5(data-aos="zoom-in")
          .py-3.py-md-4.mb-4.mb-lg-0(titulo="Inventario\nmanual" :imagen="images[0]" :numero="numbers[0]") 
            .border--bg4.mb-5
            .row.mb-5
              .col-lg-8.mb-3.mb-lg-0(data-aos="fade-down-left")
                p El conteo de los productos se hace manual, y se registra en formatos diseñados para este fin, es un método costoso debido a la cantidad de tiempo, cantidad de personas, y cantidad de papelería que se requiere. Debido a esto, el inventario físico se realiza pocas veces al año para corroborar la información teórica y la información real. 

                p A estos inventarios se les va sumando las compras que en determinada fecha se realiza, y se descuenta los materiales utilizados en las diferentes referencias producidas; la información continua, actualizada y detallada no es fácil hacerla debido a la cantidad de elementos que de manera manual se debe hacer funcionar. Este tipo de inventarios se deben hacer periódicamente.

                p Las empresas que llevan este tipo de inventario lo realizan en un documento denominado Kardex, un formato que permite registrar la entrada y salida de materiales e insumos, ver tabla 8.

              .col-lg-4.mb-3.mb-lg-0.d-flex(data-aos="fade-down-right")
                figure
                  img(src='@/assets/curso/tema_6/img_2.png', alt='') 

            .titulo-sexto.color-acento-contenido(data-aos='fade-right')
              h5 Tabla 8.
              span Ficha Control de inventario
            .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in") 
              table
                thead
                  tr
                    th(colspan=8) 
                      h4 DATOS APROXIMADOS A 10 PUNTADAS POR PULGADAS
                tbody
                  tr
                    td FECHA:	 	
                    td
                    td(colspan=4) EMPRESA XXX	
                    td(colspan=2) DOCUMENTO N°:
                  tr
                    td(colspan=2) PRODUCTO:
                    td 
                    td(colspan=3) REFERENCIA O CÓDIGO:
                    td(colspan=2) PROVEEDOR:
                  tr
                    td(colspan=3) REVISÓ:
                    td(colspan=4) AUTORIZÓ:
                    td
                  tr.text-center.td_bg1
                    td FECHA	
                    td ENTRADA
                    td SALIDA	
                    td SALDO	
                    td FECHA	
                    td ENTRADA	
                    td SALIDA	
                    td SALDO
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


          .py-3.py-md-4(titulo="Inventario\nsistematizado" :imagen="images[1]"  :numero="numbers[1]")
            .border--bg4.mb-5
            p.mb-5 Se requiere disponer de un software, el cual hay que alimentarlo con la siguiente información: 
            .row.mb-5
              .col-lg-4.mb-4.mb-lg-0(data-aos="slide-left")
                img(src='@/assets/curso/tema_6/img_3.png', alt='') 
                h5.text-center Los proveedores
                p.text-center Nombre, dirección, portafolio de productos o servicios, precios, presentación, unidades de medida, redes, teléfonos, contactos y demás datos que lo identifique.

              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-down")
                img(src='@/assets/curso/tema_6/img_4.png', alt='') 
                h5.text-center Los productos
                p.text-center Descripción, nombre comercial, presentación, unidad de medida, productor, código, referencia.


              .col-lg-4.mb-4.mb-lg-0(data-aos="fade-slide-right")
                img(src='@/assets/curso/tema_6/img_5.png', alt='') 
                h5.text-center Los clientes
                p.text-center Domicilio, precios de venta, redes, transportadoras, criterios de venta.

            .cajon.color-primario.p-4.mb-5
              p Después que el software tiene la información que le permite interactuar, se establece el código de identificación de los productos; de qué material está construido; con qué equipo se aplica, y en qué parte se coloca.

            p.mb-5 Estos programas tienen la facultad de imprimir códigos de barra entre otros, ya con los adhesivos de los códigos de barra, se le colocan a las materias primas e insumos, y con un lector de códigos de barra se lee la información allí consignada, este a su vez envía la información al sistema, este ejercicio se hace a la entrada y también a la salida, y de esta manera la información se mantiene actualizada, y en poco tiempo.

            .row.justify-content-center.mb-5(data-aos="zoom-in")
              .col-lg-11.border_1
                p Se utilizan también códigos QR, que son leídos con un dispositivo diseñado para ese fin. En ese código está toda la información de esa prenda de vestir, o de ese paquete, o de esa caja; existen sensores para determinar las cantidades que se tienen de algún producto.

            .row.justify-content-center.mb-5(data-aos="zoom-in")
              .col-lg-11
                .titulo-sexto.color-acento-contenido(data-aos='fade-right')
                  h5 Figura 2.
                  span Insumos embalados en cajas de cartón que están identificadas con un código QR que contiene toda la información de su contenido
                figure
                  img(src='@/assets/curso/tema_6/img_6.png', alt='') 
                figcaption Nota. Arrechedora, I. (2020).   

            .cajon.color-secundario.p-4
              p Sistematizar los procedimientos de un inventario, garantiza que el flujo de información y de materiales, sea dinámico, y que de manera óptima funcionen todos los procesos de la compañía; también ayuda a que las existencias por efecto o por exceso, no afecten la producción o la parte financiera de la organización, a mantener bajo control las variables de entradas, salidas y existencia real, y permite tomar decisiones mucho más inteligentes. Realmente el sistema o software que se esté utilizando lo que hace es, recibir los datos y hacer de manera rápida los cálculos de la mercancía que se tiene.

    separador

    #t_6_3.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 6.3 Funciones del inventario

    .row.justify-content-center.mb-5
      .col-lg-4(data-aos="fade-right")
        a.anexo.mb-4(:href="obtenerLink('/downloads/Infografia-CF2_Funciones inventario.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p #[strong Anexo.] Funciones inventario


    p.text-center.mb-5(data-aos="slide-down") A continuación, se presenta el video tutorial para identificar la función del inventario, los requerimientos de materia prima y consumo    

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
              img.img-a(src='@/assets/curso/tema_6/img_7.svg' alt='AvatarTop')
            .tarjeta.tarjeta--bg1
              .p-4
                h5 Inventario de materia prima e insumos 
                p Se refiere a los elementos necesarios al inicio del proceso, y que se requieren para fabricar prendas de vestir.
        .tarjeta-avatar-b.mb-3(data-aos="fade-down-left")
            .tarjeta-avatar-b__img
              img.img-a(src='@/assets/curso/tema_6/img_8.svg' alt='AvatarTop')
            .tarjeta.tarjeta--bg1
              .p-4
                h5 Inventario de producción en proceso
                p En la medida que van avanzando los lotes en su proceso, adquieren un valor menor o mayor, de acuerdo con los recursos que se les haya invertido. 
        .tarjeta-avatar-b.mb-3(data-aos="fade-down-right")
            .tarjeta-avatar-b__img
              img.img-a(src='@/assets/curso/tema_6/img_9.svg' alt='AvatarTop')
            .tarjeta.tarjeta--bg1
              .p-4
                h5 Inventario de producto terminado
                p Son los que son transferidos de la sala de producción a la bodega de despachos, porque cumplen con el 100 % de su proceso de elaboración. Los productos terminados también requieren un control de existencias.



            




    




</template>

<script>
import TabSpecial from '../components/TabSpecial.vue'

const imagentab1 = require('@/assets/curso/tema_6/tema2-tabs1.svg')
const imagentab2 = require('@/assets/curso/tema_6/tema2-tabs2.svg')
const numerotab1 = require('@/assets/curso/tema_6/tema2-number1.svg')
const numerotab2 = require('@/assets/curso/tema_6/tema2-number2.svg')
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
