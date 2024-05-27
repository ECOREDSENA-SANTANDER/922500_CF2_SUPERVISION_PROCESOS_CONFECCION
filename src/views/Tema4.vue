<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Consumos de materias primas

    .fullview-4
      .row.px-5.p-5.position-relative
          .col-sm-12.col-lg-2 
            img.img-t.img-a.mt-4.d-none.d-lg-block(src='@/assets/curso/temas/tema_4/img_5.svg' )
          .col-sm-12.col-lg-6
            p.mb-4 En las plantas de producción existe una actividad clave dentro de la planeación, que se refiere a verificar los tipos de materiales e insumos a utilizar. Esta información viene en documentos como órdenes de producción y/o fichas técnicas, así como en muestras físicas. Teniendo en cuenta las características de estos elementos, la cantidad del lote a producir y las políticas de la empresa, se procede a calcular la necesidad de materiales e insumos.
          .col-sm-12.col-lg-4  
            img.d-none.d-lg-block(src='@/assets/curso/temas/tema_4/img_1.png', alt='En las plantas de producción existe una actividad clave dentro de la planeación')    
    
    separador

    #t_4_1.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 4.1 Orden de producción (OP)

    p.mb-5 Es un documento en el cual se consigna información referente al lote que se va a producir, esta información se relaciona a continuación, consultar ejemplo en tabla 4:

    .row.mb-5  
      .col-sm-12.col-lg-9 
        TabsA.color-acento-contenido.mb-5
          .tarjeta.color-acento-botones--borde.p-4(titulo="Número de documento o consecutivo ")
            p Para controlar los lotes de producción que se van ejecutando.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Referencia")
            p Para una identificación más precisa, a las prendas de vestir se les asigna números de referencia, códigos, consecutivos y demás. Esto se hace con criterios como el tipo de prenda, si es de dama o caballero, infantil o para adulto, así como criterios por color y por tallaje.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Descripción")
            p Además de la referencia o código, es importante que en este documento se describa el tipo de prenda que se va a someter a procesos de trazo y corte.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Fechas")
            p Todas las fechas son importantes para poder hacer seguimiento. En producción es importante la información que tenga que ver con las fechas, como son de la elaboración del documento, del inicio de la producción y la terminación de la misma.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Clientes")
            p Muy importante que en la orden de producción esté reseñado el nombre del cliente al que se le va a trabajar.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Cantidad")
            p Esta información es definitiva, se referencia cantidad por talla, color y cantidad total. En el cuadro que se consignan las tallas y las cantidades se pueden aprovechar para nombrar las tallas por números o letras, y comercialmente tiene sus equivalencias.
          .tarjeta.color-acento-botones--borde.p-4(titulo="Identificación de tallas")
            p Existen otro para la identificación de las tallas a producir, como si es ropa interior o exterior, cuando son prendas superiores o inferiores, cuando son prendas junior, infantiles o de adulto, cuando son prendas de dama o caballero.

      .col-sm-12.col-lg-3(data-aos="fade-left")
        img.d-none.d-lg-block(src='@/assets/curso/temas/tema_4/img_6.svg' )  


    p.mb-0 Este tipo de documento requiere aprobación por parte de un representante de la organización, usualmente por el gerente o administrador, y también debe ser recibido por alguien del departamento de producción. Para el supervisor, esta información es fundamental para planificar los recursos necesarios. 
    p.mb-5 Este documento puede originarse en el departamento de corte, que a su vez lo recibe de los departamentos de producción o ventas, dependiendo del tamaño de la organización, puede haber una persona designada para cada tarea, mientras que en una pequeña empresa, una sola persona se encarga de gestionar y documentar las ventas y programar la producción.

    
    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 4.
          span Ejemplo ficha orden de producción.
        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in") 
          table(alt='La "Tabla 4. Ejemplo ficha orden de producción" muestra una orden de producción para una empresa con detalles específicos. La orden de producción N° 17, fechada el 20 de junio de 2021, con la referencia 4015-8, corresponde al artículo "Chaqueta" para el cliente "Between jeans". La cantidad total a producir es 200 unidades, con una fecha de inicio del 25 de junio de 2021 y una fecha de terminación del 10 de julio de 2021. La tabla especifica las cantidades de cada talla: 20 unidades de talla 6/8/S, 40 de 8/30/M, 50 de 10/32/L, 60 de 12/34/XL, y 30 de 14/36/XXL. La orden es aprobada por el encargado de producción y recibida por el supervisor de trazo y corte.')
            thead
              tr
                th(colspan=5) 
                  h4 ORDEN DE PRODUCCIÓN
              tr.th_bg2
                th(colspan=5)
                  h4 EMPRESA: (Nombre de la empresa)
            tbody
              tr.text-center
                td(colspan=2) Orden Producción 
                  .p_bg1 N°:17
                td Fecha: 
                  .p_bg1 junio 20 del 2021
                td(colspan=2) Referencia: 
                  .p_bg1 4015 -8
              tr.text-center
                td Artículo: 	
                td.p_bg1 Chaqueta	
                td Nombre del cliente:	
                td.p_bg1 Between jeans 	
                td Cantidad: 200
              tr.text-center
                td Fecha inicio:	
                td.p_bg1 25 de junio del 2021	
                td Fecha terminación:	 
                td.p_bg1 10 de julio del 2021
                td
              tr.text-center
                td(colspan=5).td_bg1 
                  h5 Especificar cantidades de cada talla: 
              tr.text-center
                td 6/28/S	
                td 8/30/M	
                td 10/32/L	
                td 12/34/XL	
                td 14/36/XXL
              tr.text-center.p_bg1
                td 20	 
                td 40	 
                td 60	 
                td 60	
                td 20 
              tr.text-center
                td(colspan=3) Aprueba: #[br](Encargado de aprobar la orden de producción)	
                td(colspan=2) Recibe: #[br](Quien supervisa el trabajo de trazo y corte)

    separador

    #t_4_2.titulo-segundo.color-acento-contenido(data-aos="zoom-in")
      .h2 4.2 Ficha técnica

    p.mb-5 Es un documento que le permite al departamento de creación comunicarse con las demás áreas encargadas de la elaboración de productos terminados, en este se especifica:


    .row.mb-5
      .col-sm-12.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.color-tarjeta-avatar
            .p-4
              img.img-tarjet(src='@/assets/curso/temas/tema_4/img_7.svg' alt='AvatarTop')
              h2.text-center Identificación de la prenda de vestir
              p Número de referencia, descripción y un dibujo con sus especificaciones señaladas.

      .col-sm-12.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.color-tarjeta-avatar
            .p-4
              img.img-tarjet(src='@/assets/curso/temas/tema_4/img_8.svg' alt='AvatarTop')
              h2.text-center Materias primas
              p Se relaciona cuáles materias primas se utilizan en esta prenda de vestir, su composición, su nombre comercial, el consumo y en algunas ocasiones el proveedor.

      .col-sm-12.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.color-tarjeta-avatar
            .p-4
              img.img-tarjet(src='@/assets/curso/temas/tema_4/img_9.svg' alt='AvatarTop')
              h2.text-center Otras especificaciones
              p También trae especificaciones de costuras, máquinas, puntadas por pulgada, medidas, características de terminado, y un dibujo plano de la prenda de vestir. 

      .col-sm-12.col-lg-3.mb-5.mb-lg-0
        .tarjeta-avatar
          .tarjeta.color-tarjeta-avatar
            .p-4
              img.img-tarjet(src='@/assets/curso/temas/tema_4/img_10.svg' alt='AvatarTop')
              h2.text-center Insumos
              p En la ficha técnica vienen señalados cuales insumos están incorporados en la prenda, cuáles son sus calidades, sus dimensiones, y sus cantidades por prenda, adicional señalan la posición donde van colocados estos insumos. En esta área están los botones, las cremalleras, los hilos, los elásticos, las marquillas, las etiquetas, las hebillas, los broches, etc.


    p.mb-5 Consultar la siguiente imagen en donde encontrará la información de como esta conformada la ficha técnica.



    .row.justify-content-center
      .col-lg-8
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 1.
          span  Ficha técnica.

    .row.justify-content-center.mb-5(data-aos="slide-down")
      .col-lg-8(data-aos='fade-right')
        p.text-center.mb-5 
          strong Información que conforma la ficha técnica
        figure
          img.img-a(src='@/assets/curso/temas/tema_4/img_2.svg', alt='La imagen muestra un diagrama que detalla la información que conforma la ficha técnica en el ámbito de la moda. En el centro, hay una carpeta etiquetada "FICHA TÉCNICA" y dos figuras humanas estilizadas a los lados. Alrededor de la carpeta, se distribuyen en un circuito los siguientes elementos: Medidas, Prueba de calce, Fornituras, Carta de colores, Gráfica, Tejidos, Desglose de materiales, Escalado, Etiquetado, Portada, Construcción y Detalles.') 
        figcaption Nota. Chi, B. (2020).

    .row.mb-5
      .col-lg-6(data-aos="fade-right")
        .bloque-texto-d.color-acento-contenido.p-4.tarjeta--bg4.mb-5
          .bloque-texto-d__texto.mb-2
            i.fas.fa-quote-left
            h3.mb-2 No existe ningún estándar internacional para hacer Fichas Técnicas, pero si existe un acuerdo general sobre el tipo de información que debes incluir. Esta información se desarrolla en varias hojas, y todas forman una Ficha Técnica.
            i.fas.fa-quote-right
          .bloque-texto-d__autor 
            span.h5.mb-0 Chi, 2020
        p Este documento es la guía que orienta los departamentos y asegura que los procesos de producción determinen correctamente las especificaciones técnicas del producto establecidas y aseguren las condiciones de la prenda, a cabalidad. El cumplimiento de estas especificaciones se podría denominar buena calidad.  Haciendo la analogía, una ficha de diseño, o ficha técnica es, a los fabricantes de prendas de vestir, como el plano de un edificio, al maestro de obra.
      .col-lg-6(data-aos="fade-left")
        p.mb-4 En el ejemplo se describe la relación de esta ficha con los siguientes departamentos: equipo técnico y de producción, proveedores/comerciales, fabrica y los diseñadores.

        figure
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Figura 2.
          span Ejemplo de la ficha técnica.
        img.img-a(src='@/assets/curso/temas/tema_4/img_3.svg', alt='La imagen muestra una ilustración de una ficha técnica de moda, destacando los elementos clave que incluye: medidas, prueba de calce, fornituras, carta de colores, gráfica, tejidos, desglose de materiales, escalado, etiquetado, portada, construcción y detalles. Estos componentes rodean una carpeta etiquetada como "Ficha Técnica" en el centro.') 
        figcaption Nota. Chi, B. (2020).



    .mt-5.d-flex.mb-0
      .d-flex.flex-wrap.align-items-center.pe-4-cus 
        h3.col.px-4.mb-0.text-white.bg-img-tema1.wtitle En la imagen se detalla un ejemplo de ficha técnica. 

    .tarjeta--bg3.p-4.mb-0.align-items-center
      .row.justify-content-center.mb-5(data-aos='fade-left')
        .col-lg-12
          figure.mb-5(data-aos="zoom-in")
            img(src='@/assets/curso/temas/tema_4/img_4.svg', alt='La imagen se presenta una ficha técnica de producción para un pantalón denim azul oscuro, con fecha de programación del 28/12/2021 y referencia JP 2163. Incluye detalles sobre el estilo, temporada (abril), y las medidas específicas de la prenda. También enumera los insumos necesarios, como cierres y botones, y describe las operaciones de confección y las instrucciones de lavado, junto con imágenes del diseño y medidas antes y después del lavado.')
    figcaption Nota. SENA (2021).


</template>

<script>
export default {
  name: 'Tema4',
  data: () => ({
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
