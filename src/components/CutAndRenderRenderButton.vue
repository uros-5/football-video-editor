<template>
  <div class="column is-2">
    <a
      class="button is-success is-medium"
      @click="
        render();
        getRenderProgress();
      "
      >Render</a
    >
  </div>
  <div class="column is-10"></div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapActions } from "vuex";

export default defineComponent({
  methods: { ...mapActions(["render", "getRenderProgress"]) },
});
</script>

<style></style>
