<template>
  <h1>{{ user }}</h1>
</template>

<script lang="ts" setup>

import useUser from "~/composables/useUser";

const user = useUser().get()

</script>