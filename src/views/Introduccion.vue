<template lang="pug">
.curso-main-container.introduccion
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5.mb-5
  
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span
          i.fas.fa-info
      h1 Introducción
    
    .row.p-5.bg-01.rounded.mb-5(data-aos='fade-right')
      .col-sm-12.col-lg-6
        .row
          .col-lg-1.d-sm-none.d-lg-block
            p.BorTit1.p-4 
          .col-lg-11
            p.w-100 El aprendiz en Supervisión de plantas de confección debe adquirir competencias para conocer las materias primas y los insumos, y calcular las necesidades para su producción, de acuerdo con las especificaciones técnicas de la producción. Por lo cual se iniciará por revisar los documentos que contengan información importante como las fichas técnicas, que ayudan a determinar los materiales e insumos requeridos para la producción y adquirir los insumos y materiales de acuerdo con los cálculos realizados para determinar el consumo requerido. 


    .row.justify-content-center.align-items-center.mb-5
      .col-lg-12(data-aos="fade-left")
        figure
          .video
            iframe(width="560" height="315" src="https://www.youtube.com/embed/OyE2mtd2Ns4" title="Description" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen)
          figcaption Video. Description





</template>

<script>
export default {
  name: 'Introduccion',
  data: () => ({
    // variables de vue
  }),
}
</script>

<style lang="sass" scoped>
.introduccion
</style>
