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
              img(src='@/assets/curso/tema_1/img_7.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--bg1
                .p-4.text-center
                  h2 Definición
                  p Se refiere a unas características físicas estandarizadas, que se han establecido por ley o acuerdos internacionales.

          .col-md-6.col-lg.mb-5.mb-lg-0
            .tarjeta-avatar(data-aos="fade-down-right")
              img(src='@/assets/curso/tema_1/img_8.svg' alt='Imagen decorativa')
              .tarjeta.tarjeta--bg1
                .p-4.text-center
                  h2 Clasificación
                  p Las unidades de medidas generalmente se clasifican por peso, longitud, temperatura, tiempo; aunque en el sector confecciones existen también otros tipos de medida.
        
        p.text-center(data-aos='fade-left') Las unidades de medidas generalmente se clasifican por peso, longitud, temperatura, tiempo; aunque en el sector confecciones existen también otros tipos de medida.

    .row.justify-content-center.align-items-center.mb-5
      .col-lg-8
        TabsC(data-aos="flip-up")
          .py-4.py-md-5(titulo="De longitud")
            figure.mb-3
              img(src='@/assets/curso/tema_2/img_1.png', alt='Imagen decorativa metro')
            p La distancia que hay entre dos puntos se llama longitud, las unidades de medida de longitud más usadas son: metro, yardas, centímetros, pulgadas, kilómetros, milla.  

            p.mb-0 Las telas, los elásticos, las cintas, los hilos son algunos de los materiales que se comercializan y emplean con estas unidades de medida, y sus respectivas fracciones.
          .py-4.py-md-5(titulo="De peso")
            figure.mb-3
              img(src='@/assets/curso/tema_2/img_2.png', aalt='Imagen decorativa pesa')
            p.mb-0 Algunos de los elementos incorporados en las prendas de vestir, que se comercializan y miden por unidades de peso son: telas, remaches, hilos, fibras, las más usadas son kilogramo, gramo, libra, tonelada y onza.

          .py-4.py-md-5(titulo="Otros")
            figure.mb-3
              img(src='@/assets/curso/tema_2/img_3.png', alt='Imagen decorativa')
            p Hay otros elementos utilizados para fabricar y terminar prendas de vestir que se comercializan y calculan por unidades, decenas, docenas, millares, ellos son, botones, hebillas, cremalleras, marquillas, etiquetas y bolsas.

    .row.justify-content-center
      .col-lg-11
        .cajon.color-secundario.p-4.mb-5(data-aos='fade-right')
          p.mb-0.text-center A continuación en la tabla 1, se presentan algunas unidades de medida en su presentación más comercial, y en qué tipos de materiales e insumos se aplican generalmente.

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
              tr
                td Longitud	
                td Metros, cms, yardas.	
                td Telas, cintas, hilos, cremalleras, sesgos.
                
              tr
                td Peso	
                td Kilogramo, gramo, libra, onza.	
                td Telas, fibras, hilos, remaches.
              tr
                td Tiempo	
                td Segundo, minuto, hora.	
                td Confección, bordado, lavandería, corte.
              tr
                td Volumen	
                td M3, cm3, litro, galón, botella.	
                td Aceites, algodón, lubricantes. 
              tr
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
