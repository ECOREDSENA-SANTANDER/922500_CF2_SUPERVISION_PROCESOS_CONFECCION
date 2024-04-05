<template lang="pug">
.curso-main-container.pb-3
  BannerInterno
  .container.tarjeta.tarjeta--blanca.p-4.p-md-5
    
    .titulo-principal.color-acento-contenido
      .titulo-principal__numero
        span 3
      h1 Presupuestos

    .tarjeta.mb-5
      .col-md.tarjeta.bg-02.p-5
        .row
          .col-2 
            img.img-t.img-a.mt-4(src='@/assets/curso/temas/tema_3/img_13.svg', alt='Imagen descriptiva')
          .col-6
            p.mb-4 Para planear y ejecutar un proyecto de la manera más apropiada, es importante dimensionar y estimar la cantidad de recursos necesarios, las cantidades, el momento, y el costo de estos, a ese cálculo se le denomina presupuestar. 
            p El encargado de la actividad de producción debe saber articular su función de producir prendas, con las actividades donde se origina la información que va a definir sus objetivos, por eso es muy importante que comprenda las actividades que anteceden su programación. Incorporar los objetivos de la empresa a todos los integrantes de la organización es una premisa muy válida para tener en cuenta.
          .col-4  
            img.img-b(src='@/assets/curso/temas/tema_3/img_14.png', alt='Para planear y ejecutar un proyecto de la manera más apropiada')

    .row 
      .col-12
        p.mb-5(data-aos='fade-left') Existen varios tipos de presupuestos, aquí se referencia a dos específicamente: el de producción y el de ventas. Para iniciar se debe prestar atención a sus elementos del presupuesto de ventas:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--azul.bg06.p-4.mb-5(data-aos="fade-down-left")
          SlyderA
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_1.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                h5 Presupuesto de ventas
                p Se trata del primer presupuesto a realizar, que define el tipo de prenda o servicio a comercializar, las cantidades y el plazo para cumplir con los pedidos, esto implica especificar el estilo, la silueta, la tela y la referencia de las prendas, pudiendo basarse en registros históricos de movimientos, temporadas de demanda especializada o estudios de mercado y tendencias.
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_2.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p En las empresas que trabajan para el sistema moda, la comunicación entre el departamento de ventas con el de producción es necesaria e importante, facilita que la información esté a tiempo para los interesados, y ahorra mucho tiempo. 
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_3.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p Cuando el encargado de la producción conoce las necesidades de despachos con todas sus características: cliente, fecha, especificaciones, lugar de destino y demás; tácitamente integra estas necesidades a su equipo de trabajo y capacidades de producción, y esto se convierte en un valor agregado para su desempeño.
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_4.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p Existen varias maneras de registrar este tipo de actividad,  donde quede consignada la información  correspondiente de los productos a  facturar, los formatos utilizados se diseñan de acuerdo con la naturaleza de las compañías, tamaño, sector económico o régimen tributario.
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_5.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p Deben contener información relacionada con:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    p.mb-0 #[strong La empresa: ] 
                      |nombre, domicilio, teléfono, correo. 
                  li 
                    i.lista-ul__vineta
                    p.mb-0  #[strong Descripción de los productos:] 
                      | tipo de prenda de vestir, material, nombre comercial.
                  li 
                    i.lista-ul__vineta
                    p.mb-0  #[strong Código o referencia:] 
                      | para efectos de control con códigos, números, referencias o códigos de barra
                  li 
                    i.lista-ul__vineta
                    p.mb-0  #[strong Cantidades:] 
                      | por talla y colores.
                  li 
                    i.lista-ul__vineta
                    p.mb-0  #[strong Fechas:] 
                      | del pedido y fecha límite para despachar; ésta última es muy importante para el área de producción.


    p.mb-5 A continuación en la tabla 2, se puede observar un ejemplo de presupuesto de ventas donde se describe lo anteriormente dicho.
    
    .row.justify-content-center
      .col-lg-10
        .titulo-sexto.color-acento-contenido(data-aos="fade-right")
          h5 Tabla 2.
          span Ficha de presupuesto de ventas
        .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in") 
          table
            thead
              tr.text-center
                th(colspan=7) 
                  h4 INDUSTRIA DE ROPA
                  p (Nombre de empresa, Dirección, Teléfono, Correo)
            tbody
              tr.text-center.td_bg1
                td(colspan=2) FECHA: sep. 2/21	
                td(colspan=2) COLECCIÓN #001	
                td(colspan=3) TOTAL REFERENCIAS:  6
              tr.text-center.td_bg1
                td(colspan=2) TELAS: varias 	
                td(colspan=2) FECHA INICIO: 05/ 3/21	
                td(colspan=3) FECHA FIN: 05/30/21
              tr.text-center 
                td(colspan=7) Las referencias que empiecen por 10 son dama, las que empiecen por 30 son hombre.
              tr.text-center.td_bg1
                td 
                  h5 REF	
                td 
                  h5 ESTILO	
                td 
                  h5 TELA	
                td 
                  h5 CANT	
                td 
                  h5 COLORES	
                td 
                  h5 S/	
                td 
                  h5 M/
              tr.text-center
                td 1001	
                td Bota ancha
                td Piel de durazno		
                td 150
                td 
                td
                td
              tr.text-center
                td 1002	
                td Europeo	
                td Kiss	
                td 150
                td
                td
                td
              tr.text-center
                td 1003	
                td Falda	
                td Bonaire	
                td 150
                td
                td
                td
              tr.text-center
                td 3001	
                td Jean clásico	
                td Artic	
                td 200
                td
                td
                td

    p.mb-5 En el siguiente recurso de aprendizaje, se debe prestar atención a los elementos que componen el presupuesto de producción:

    .row.justify-content-center
      .col-lg-10
        .tarjeta.tarjeta--azul.bg07.p-4.mb-5(data-aos="fade-down-left")
          SlyderA
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_6.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                h5 Presupuesto de producción
                p Este presupuesto se dedica a satisfacer el presupuesto de ventas, es un apoyo para que se cumplan los objetivos, es decir, este es el presupuesto encargado de identificar, calcular y proveer los recursos para que los presupuestos de ventas se cumplan. 
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_7.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p Todas las actividades del departamento de producción están encaminadas a proveer a la compañía de productos o servicios, que serán facturados y despachados (ventas), de ahí es importante que, el encargado de administrar el área de confecciones conozca la relación: presupuesto de ventas y presupuesto de producción.
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_8.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p El presupuesto de producción debe determinar:
                ul.lista-ul--color
                  li 
                    i.lista-ul__vineta
                    | Las necesidades de materias primas e insumos, con el fin de conocer cuáles y en qué cantidades se requieren.
                  li 
                    i.lista-ul__vineta
                    | La necesidad de servicios, traducidos en mano de obra directa: diseño, corte, confección, bordados, estampación, lavandería, terminación.
                  li 
                    i.lista-ul__vineta
                    | Necesidad de otros recursos que se necesitan para satisfacer la demanda: bodega, energía eléctrica, papelería, víveres, transporte.  
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_9.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                h5 Para poder presupuestar recursos es importante:
                p Establecer la cantidad de materiales disponibles: esto se conoce como inventario inicial, en el que se define cuánta materia prima y cuántos insumos se poseen a la fecha de inicio de la producción.
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_10.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p Establecer la cantidad requerida de materiales e insumos, para esto es importante hacer cálculos sobre los consumos unitarios de recursos por prenda de vestir y multiplicar por la cantidad total del lote de producción que se va a realizar.
            .row.justify-content-center.align-items-center
              .col-md-4
                figure
                  img.img-a(src='@/assets/curso/temas/tema_3/img_11.svg', alt='Imagen decorativa') 
              .col-md-6.mb-4.mb-md-0
                p Establecer si se requiere quedar con un inventario final: esto depende de las políticas de la empresa, sin embargo, es importante considerarlo para prever los imprevistos, prendas defectuosas o faltantes en el proceso. 

      p.mb-5 A continuación, se presenta un ejemplo de un caso en el que se diligencia la ficha de presupuestos:

    .row.mb-5
      .col-2
        figure
          img.img-a(src='@/assets/curso/temas/tema_3/img_17.svg', alt='Imagen decorativa') 
      .col-10
        p.mb-5 En una compañía el estimado de ventas es de 500 unidades de camisetas en un período de un mes. La empresa tiene como política programar el 15% adicional al pedido, para resolver imprevistos que sucedan durante la producción, y al revisar en la bodega, se encuentran, que tienen 100 camisetas. En la siguiente tabla se ilustra la solución al ejemplo planteado.

      .row
        .col-lg-8(data-aos="fade-right")
          .titulo-sexto.color-acento-contenido(data-aos="fade-right")
            h5 Tabla 3.
            span Ficha de presupuesto de producción
          .tabla-a.color-acento-contenido.mb-5(data-aos="zoom-in") 
            table
              thead
                tr
                  th(colspan=3) 
                    h4 PROGRAMA DE UNIDADES A PRODUCIR
              tbody
                tr.text-center
                  td Empresa:
                  td
                  td
                tr.text-center
                  td Fecha: 
                  td
                  td
                tr.text-center.td_bg1 
                  td 
                    h5 Descripción 	
                  td 
                    h5 Cantidades	
                  td 
                    h5 Acumulado
                tr.text-center
                  td Unidades solicitadas	
                  td 500	
                  td 500
                tr.text-center
                  td Unidades para dejar en inventario 15%	      
                  td + 75	
                  td 575
                tr.text-center
                  td Unidades en existencia	
                  td - 100
                  td
                tr.text-center 
                  td(colspan=2) Unidades para producir	
                  td 475

        .col-lg-4(data-aos="fade-left")
          figure
            img(src='@/assets/curso/temas/tema_3/img_12.png' alt='Ficha de presupuesto de producción') 

        



</template>

<script>
export default {
  name: 'Tema3',
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
