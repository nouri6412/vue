<template>
  <HelloWorld
    msg="Only now, you can get all premium features & more with the best discounts of the year."
  />
  <div class="container p-5">
    <MDBInput label="Example label" v-model="input1" />
  </div>

</template>

<script  lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import { MDBInput } from 'mdb-vue-ui-kit';
  import { ref } from 'vue';

  export default {
    components: {
      MDBInput,
    },
    setup() {
      const input1 = ref('');

      return {
        input1,
      };
    },
  };
</script>
