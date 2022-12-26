<script  lang="ts">
import HelloWorld from "../components/HelloWorld.vue";
import { MDBInput } from 'mdb-vue-ui-kit';
import { ref } from 'vue';

export default {
  components: {
    MDBInput
  },
  setup() {
    const input1 = ref('');
    const collapsed = ref(false);
    const miniMenu = ref(false);

    const testMenu = [
      {
        name: 'Getting Started',
        icon: { text: 'home', class: 'material-icons-outlined' },
        children: [
          {
            name: 'level 1.1',
            href: '/a',
            icon: { text: 'home', class: 'material-icons-outlined' },
            children: [
              {
                href: '/b',
                name: 'level 1.1.1',
              },
            ]
          },
          {
            name: 'level 1.2'
          }
        ],
      },
      {
        header: 'Settings'
      },
      {
        name: 'Dashboard',
        icon: { class: 'material-icons-outlined', text: 'dashboard' },
        children: [
          {
            href: '/c',
            name: 'level 2.1',
          },
        ]
      },
      {
        name: 'close menu',
        icon: { text: 'settings', class: 'material-icons-outlined' },
      },
    ];
    return {
      input1,
    };
  },
};
</script>

<template>
  <HelloWorld msg="Only now, you can get all premium features & more with the best discounts of the year." />
  <div class="container p-5">
    <MDBInput label="Example label" v-model="input1" />
  </div>




</template>


