<template>
  <div class="column is-12">
    <progress
      class="progress is-primary is-medium cut-progress"
      :value="cutProgress"
      max="100"
    >
      15%
    </progress>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  computed: { ...mapGetters(["cutProgress", "canRender"]) },
});
</script>

<style></style>
