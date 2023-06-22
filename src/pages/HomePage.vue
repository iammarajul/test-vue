<template>
    <div>
        <!-- <FirstForm v-if="Page === 1" />
        <ChildForm v-else /> -->
        ok
    </div>
</template>

<script setup>
import { computed } from "vue";
import { useStore } from "vuex";
const store = useStore();

const Page = computed(() => store.state.page);
</script>

<style>
.p-progressbar .p-progressbar-value {
    background: #f59e0b;
}
</style>
