<template lang="pug">
.curso-main-container.pb-3
  BannerInterno(icono="fas fa-sitemap" titulo="Síntesis")
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    .row.mt-5.mb-5
      .col-lg-10
        .color-sintesis  #[b Tecnólogo en supervisión en procesos de confección]  
          p Síntesis: Materias primas e insumos de confección industrial
      .col-lg-2
        figure.logo-sena 
          img(src="@/assets/curso/temas/sena.svg", alt="alt")
    p.mb-5 Para ejecutar un proyecto se hace necesario presupuestar los elementos que están presentes en la elaboración de los productos, pero así mismo se deben determinar las cantidades y costos de estos. Es decir, las materias primas presentes, las cuales pueden ser de distinto origen y tipo como fibras textiles o telas. A continuación, se presenta un esquema gráfico que resume de manera visual estos aspectos:

    .row.justify-content-center
      .col-lg-10.mb-5
        figure
          img(src="@/assets/curso/temas/sintesis.svg", alt="alt")
      .col-auto
        a.anexo.mb-5(:href="obtenerLink('/downloads/Sintesis.pdf')" target="_blank")
          .anexo__icono
            img(src="@/assets/template/icono-pdf.svg")
          .anexo__texto
            p Anexo. Síntesis

</template>

<script>
export default {
  name: 'Sintesis',
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

<style lang="sass"></style>
