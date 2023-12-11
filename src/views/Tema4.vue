<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 4
      h1 Consumos de materias primas

    .row.justify-content-center
      .col-lg-8
        figure.mb-3
          img.img-a(src='@/assets/curso/tema_4/img_1.png', alt='') 
        p.mb-0 En las plantas de producción existe una actividad clave dentro de la planeación, que se refiere a verificar los tipos de materiales e insumos a utilizar. Esta información viene en documentos como órdenes de producción y/o fichas técnicas, y también en muestras físicas. De acuerdo con las características de estos elementos, la cantidad del lote a producir, y las políticas de la empresa; se procederá a calcular la necesidad de materiales e insumos.
    
    separador

    #t_4_1.titulo-segundo(data-aos="zoom-in")
      .h2 4.1 Orden de producción (OP)

    p.text-center.mb-5 Es un documento en el cual se consigna información referente al lote que se va a producir, esta información se relaciona a continuación, ver ejemplo en tabla 4:

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-10
        TabsC(data-aos="flip-up")
          .py-4.py-md-5.tab1(titulo="Número de documento o consecutivo")
            .tarjeta--bg1.p-4
              p.mb-0 Para controlar los lotes de producción que se van ejecutando.

          .py-4.py-md-5.tab1(titulo="Referencia")
            .tarjeta--bg1.p-4
              p.mb-0 Para una identificación más precisa, a las prendas de vestir se les asigna números de referencia, códigos, consecutivos y demás. Esto se hace con criterios como el tipo de prenda, si es de hombre, dama, infantil, adulto, el color, la talla. 

          .py-4.py-md-5.tab1(titulo="Descripción")
            .tarjeta--bg1.p-4
              p.mb-0 Además de la referencia o código, es importante que en este documento se describa el tipo de prenda que se va a someter a procesos de trazo y corte.

          .py-4.py-md-5.tab1(titulo="Fechas")
            .tarjeta--bg1.p-4
              p.mb-0 Todas las fechas son importantes para poder hacer seguimiento. En producción es importante la información que tenga que ver con las fechas, como son de la elaboración del documento, del inicio de la producción, y de la terminación de la misma.

          .py-4.py-md-5.tab1(titulo="Cliente")
            .tarjeta--bg1.p-4
              p.mb-0 Muy importante que en la orden de producción esté reseñado el nombre del cliente al que se le va a trabajar. 

          .py-4.py-md-5.tab1(titulo="Cantidad")
            .tarjeta--bg1.p-4
              p.mb-0 Esta información es definitiva, se referencia cantidad por talla, color y cantidad total. En el cuadro que se consignan las tallas y las cantidades se puede aprovechar para nombrar las tallas por números o letras, y comercialmente tienen sus equivalencias. 

          .py-4.py-md-5.tab1(titulo="Identificación de tallas")
            .tarjeta--bg1.p-4
              p.mb-0 Existen otros criterios para la identificación de las tallas a producir, como si es ropa interior o exterior, cuando son prendas superiores o inferiores, cuando son prendas junior, infantiles o de adulto, cuando son prendas de dama u hombre.

    .row.justify-content-center.mb-5
      .col-lg-8.border_1
        p.mb-0 Este documento debe ser aprobado por alguien de la organización, habitualmente es el gerente o administrador; también debe ser recibido por alguien del departamento de producción. Para el supervisor, esta información es importante para planear sus recursos. Este documento puede venir desde el departamento de corte, que a su vez lo recibieron de Gerencia de producción y/o de ventas. De acuerdo con el tamaño de la organización, hay una persona ejecutando cada labor, y si es una pequeña empresa, es una persona que gestiona y documenta las ventas de la compañía, y programa la producción.

    .row.justify-content-center
      .col-lg-8
        p.BorTit Tabla 4. Ejemplo ficha orden de producción.
        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in") 
          table
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

    #t_4_2.titulo-segundo(data-aos="zoom-in")
      .h2 4.2 Ficha técnica

    p.mb-5 Es un documento que le permite al departamento de creación comunicarse con las demás áreas encargadas de la elaboración de productos terminados, en este se especifica:

    .tarjeta--bg2.p-4(data-aos="fade-left")
      h5 Identificación de la prenda de vestir
      p Número de referencia, descripción y un dibujo con sus especificaciones señaladas.
    .tarjeta--bg3.p-4(data-aos="fade-right")
      h5 Materias primas
      p Se relaciona cuáles materias primas se utilizan en esta prenda de vestir, su composición, su nombre comercial, el consumo y en algunas ocasiones el proveedor.
    .tarjeta--bg2.p-4(data-aos="fade-left")
      h5 Insumos
      p En la ficha técnica vienen señalados cuales insumos están incorporados en la prenda, cuáles son sus calidades, sus dimensiones, y sus cantidades por prenda, adicional señalan la posición donde van colocados estos insumos. En esta área están los botones, las cremalleras, los hilos, los elásticos, las marquillas, las etiquetas, las hebillas, los broches, etc.
    .tarjeta--bg3.p-4.mb-5(data-aos="fade-right")
      h5 Otras especificaciones
      p También trae especificaciones de costuras, máquinas, puntadas por pulgada, medidas, características de terminado, y un dibujo plano de la prenda de vestir. 
    

    .row.justify-content-center.mb-5(data-aos="slide-down")
      .col-lg-8
        p.text-center.mb-5 
          strong Información que conforma la ficha técnica
        figure
          img.img-a(src='@/assets/curso/tema_4/img_2.svg', alt='') 
        figcaption Nota. Chi, B. (2020).

    .row.justify-content-center.mb-5
      .col-lg-10
        .bloque-texto-c.tarjeta--bg4.p-4.mb-5
          i.fas.fa-quote-right
          h3.mb-2 No existe ningún estándar internacional para hacer Fichas Técnicas, pero si existe un acuerdo general sobre el tipo de información que debes incluir. Esta información se desarrolla en varias hojas, y todas forman una Ficha Técnica
          span - Chi, 2020

        .row
          .col-lg-6(data-aos="fade-right")
            p Este documento es la guía que orienta los departamentos y asegura que los procesos de producción determinen correctamente las especificaciones técnicas del producto establecidas y aseguren las condiciones de la prenda, a cabalidad. El cumplimiento de estas especificaciones se podría denominar buena calidad.  Haciendo la analogía, una ficha de diseño, o ficha técnica es, a los fabricantes de prendas de vestir, como el plano de un edificio, al maestro de obra.

            p En la imagen se observa la relación de la ficha técnica con los demás departamentos. 
          .col-lg-6(data-aos="fade-left")
            figure
              img.img-a(src='@/assets/curso/tema_4/img_3.svg', alt='') 
            figcaption Nota. Chi, B. (2020).
        
    .row.justify-content-center.mb-5
      .col-lg-5
        .tarjeta--bg2.p-3
          p.mb-0.text-center En la imagen se detalla un ejemplo de ficha técnica. 

    figure(data-aos="zoom-in")
      img.img-a(src='@/assets/curso/tema_4/img_4.svg', alt='') 
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
