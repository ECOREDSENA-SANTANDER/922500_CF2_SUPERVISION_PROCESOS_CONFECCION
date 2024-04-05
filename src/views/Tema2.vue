<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 2
      h1 Unidades de medida

    p.mb-5(data-aos='fade-right') Para calcular las necesidades de recursos, es importante conocer cuáles son las unidades de medida con que comercializan y utilizan esos recursos en la industria de la confección. Cuando se trata de calcular recursos que se necesitan para poder manufacturar una producción en plantas de confección, hay una referencia a esos recursos, no únicamente en cantidades sino en las unidades de medida en que se comercializan y se les conoce generalmente.

    .row.justify-content-center.mb-5
      .col-lg-10
        .row.mb-5
          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-down-left")
              img(src='@/assets/curso/temas/tema_2/img_4.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--bg1
                .p-4.text-center
                  h2 Definición
                  p Se refiere a unas características físicas estandarizadas, que se han establecido por ley o acuerdos internacionales.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-down-right")
              img(src='@/assets/curso/temas/tema_2/img_5.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--bg1
                .p-4.text-center
                  h2 Clasificación
                  p Las unidades de medidas generalmente se clasifican por peso, longitud, temperatura, tiempo; aunque en el sector confecciones existen también otros tipos de medidas.
        
    
    
    
    
    .row.mt-5.px-4.mb-5
      .col-sm-12.col-lg-4.position-relative.px-0
        figure.px-2
          img(src="@/assets/curso/temas/tema_2/img_6.png", alt="Longitud se define como la distancia entre dos puntos")
        .row.image-cover.mx-0
          figure.px-2
            img(src="@/assets/curso/temas/tema_2/img_10.svg", alt="De longitud")
          .col-12(style="margin-top: -100%").px-4
            .row.text-center
              .col-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_9.svg", alt="Imagen descriptiva").w-10.margin-0-auto
              .h4.text-center.mt-4 De longitud
              p.mt-3.ml-5.md-3 La longitud se define como la distancia entre dos puntos y las unidades de medida de longitud más comunes incluyen el metro, la yarda, el centímetro, la pulgada, el kilómetro y la milla. 
              p En cuanto a los materiales utilizados en la confección, como telas, elásticos, cintas y hilos, se comercializan y emplean con estas unidades de medida, así como sus fracciones correspondientes.
            
    
      .col-sm-12.col-lg-4.position-relative.px-0
        figure.px-2
          img(src="@/assets/curso/temas/tema_2/img_7.png", alt="La distancia que hay entre dos puntos")
        .row.image-cover.mx-0
          figure.px-2
            img(src="@/assets/curso/temas/tema_2/img_10.svg", alt="De peso")
          .col-12(style="margin-top: -100%").px-4
            .row.text-center
              .col-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_11.svg", alt="Imagen descriptiva").w-10.margin-0-auto
              .h4.text-center.mt-4 De peso
              p.mt-3.ml-5.md-3 La distancia que hay entre dos puntos se llama longitud, las unidades de medida de longitud más usadas son: metro, yardas, centímetros, pulgadas, kilómetros, milla. 
              p Las telas, los elásticos, las cintas, los hilos son algunos de los materiales que se comercializan y emplean con estas unidades de medida, y sus respectivas fracciones.
    
    
    
      .col-sm-12.col-lg-4.position-relative.px-0
        figure.px-2
          img(src="@/assets/curso/temas/tema_2/img_8.png", alt="Existen otros elementos utilizados en la fabricación y acabado de prendas de vestir")
        .row.image-cover.mx-0
          figure.px-2
            img(src="@/assets/curso/temas/tema_2/img_10.svg", alt="Otros")
          .col-12(style="margin-top: -100%").px-4
            .row.text-center
              .col-3
                figure
                  img(src="@/assets/curso/temas/tema_2/img_12.svg", alt="Imagen descriptiva").w-10.margin-0-auto
              .h4.text-center.mt-4 Otros
              p.mt-3.ml-5.md-3 Existen otros elementos utilizados en la fabricación y acabado de prendas de vestir que se comercializan y calculan por unidades, decenas, docenas o millares, como botones, hebillas, cremalleras, marquillas, etiquetas y bolsas.
   
    
    p(data-aos='fade-left') A continuación en la tabla 1, se presentan algunas unidades de medida en su presentación más comercial, y en qué tipos de materiales e insumos se aplican generalmente.

    
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 1.
          span Ejemplos de unidades de medida y materiales
        .tabla-a.color-acento-contenido.mb-5(data-aos='fade-left')
          table
            thead
              tr
                th Unidades de medida
                th Ejemplos
                th Materiales e Insumos
            tbody
              tr.text-center
                td Longitud	
                td Metros, cms, yardas.	
                td Telas, cintas, hilos, cremalleras, sesgos.
                
              tr.text-center
                td Peso	
                td Kilogramo, gramo, libra, onza.	
                td Telas, fibras, hilos, remaches.
              tr.text-center
                td Tiempo	
                td Segundo, minuto, hora.	
                td Confección, bordado, lavandería, corte.
              tr.text-center
                td Volumen	
                td M3, cm3, litro, galón, botella.	
                td Aceites, algodón, lubricantes. 
              tr.text-center
                td Unidades	
                td Unidad, docena, centena, millar.	
                td Botones, cremalleras, broches.




</template>

<script>
export default {
  name: 'Tema2',
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
