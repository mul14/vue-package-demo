<template>
  <div>{{ title }}</div>
</template>

<script lang="ts">
import { defineComponent } from "vue";

interface ComponentData {
  title: string;
}

export default defineComponent({
  name: "DemoComponent",

  data(): ComponentData {
    return {
      title: "Demo Component",
    };
  },
});
</script>
