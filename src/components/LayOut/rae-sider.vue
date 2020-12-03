<template>
<q-list bordered padding class="rounded-borders text-primary">
  <template v-for="route in routes">
      <q-expansion-item
        :key="route.name"
        v-if="route.children"
        expand-separator
        :icon="route.meta.icon"
        :label="route.meta.title"
      >
        <template v-for="{name,meta:{icon,title}} in route.children">
          <q-item
            clickable
            v-ripple
            :key="name"
            :active="link === name"
            @click="link = name"
            active-class="my-menu-link"
            :to="{name}"
          >
            <q-item-section avatar>
              <q-icon :name="icon"></q-icon>
            </q-item-section>

            <q-item-section>{{title}}</q-item-section>
          </q-item>
        </template>
      </q-expansion-item>

      <q-item
        clickable
        v-else
        v-ripple
        :key="route.name"
        :active="link === route.name"
        @click="link = route.name"
        active-class="my-menu-link"
        :to="{name:route.name}"
      >
        <q-item-section avatar>
          <q-icon :name="route.meta.icon"></q-icon>
        </q-item-section>

        <q-item-section>{{route.meta.title}}</q-item-section>
      </q-item>
  </template>

     </q-list>
</template>

<script>
export default {
  props: {
    routes: {
      type: Array,
      default: () => ([])
    }
  },
    data() {
        return {
            link: "inbox"
        };
    }
};
</script>

<style lang="scss" scoped>
.my-menu-link {
    color: $light-blue ;
}
</style>
