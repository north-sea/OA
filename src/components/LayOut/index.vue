<template>
  <q-layout view="hHh lpR fFf">

    <q-header reveal elevated class="bg-primary text-white">
      <q-toolbar>
        <q-btn dense flat round icon="menu" @click="left = !left" />

        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          {{Title}}
        </q-toolbar-title>
        <q-btn round>
          <q-avatar size="42px">
            <img src="https://cdn.quasar.dev/img/avatar2.jpg">
          </q-avatar>
        </q-btn>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="left" side="left"  elevated show-if-above>
      <rae-sider :routes="routes"></rae-sider>
    </q-drawer>

    <q-page-container>
      <router-view />
    </q-page-container>

    <q-footer elevated class="bg-grey-8 text-white">
      <q-toolbar>
        <q-toolbar-title>
          <q-avatar>
            <img src="https://cdn.quasar.dev/logo/svg/quasar-logo.svg">
          </q-avatar>
          {{Title}}
        </q-toolbar-title>
      </q-toolbar>
    </q-footer>

  </q-layout>
</template>

<script>
import routes from "@/router/routes";
import RaeSider from "./rae-sider";

export default {
    name: "Layout",
    data() {
        return {
            left: true,
            routes
        };
    },
    components: {
      RaeSider
    },
    computed: {
      Title() {
        return this.$route.meta.title;
      }
    }
};
</script>
