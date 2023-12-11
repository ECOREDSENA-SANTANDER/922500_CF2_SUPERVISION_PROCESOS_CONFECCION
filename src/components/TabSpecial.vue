<template lang="pug">
.tabs-d
  .tabs-d__header
    .row.m-0
      .col-auto.arrow.align-self-center
        img(src="@/assets/curso/tabs-arrow-1.svg")
      .col-sm-6.col-lg-4.col-xl.tabs-d__tab(
        v-for="(elm,index) of elements"
        :key="'tabs-c-menu-'+elm.id"
        @click="selected = elm.id"
        role="button"
        @mouseover="mostrarIndicador = mostrarIndicador && index >= 1 ? false : mostrarIndicador"
      )
        img.number(:src="elm.numero")
        .tabs-d__pre-header
          .tabs-d__container-header(:class="selected === elm.id ? 'active' : ''")
            .indicador__container(v-if="mostrarIndicador && index === 1")
              .indicador--click
            img(:src="elm.imagen")
            span {{elm.titulo}}
        .tabs-d__container-active(v-if="selected === elm.id")
      .col-auto.arrow.align-self-center
        img(src="@/assets/curso/tabs-arrow-2.svg")

  .tabs-c__content-item(
    v-for="elm of elements"
    :key="'tabs-content-'+elm.id"
    v-show="selected === elm.id"
    v-child="elm.elm"
  )

  .hidden-slot
    slot

</template>

<script>
import componentSlotMixins from 'ecored-base-pkg/src/mixins/componentSlotMixins'
export default {
  name: 'TabsC',
  mixins: [componentSlotMixins],
  data: () => ({
    mostrarIndicador: true,
    images: [],
  }),
}
</script>

<style lang="sass"></style>
