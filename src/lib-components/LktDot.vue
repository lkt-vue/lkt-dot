<script setup lang="ts">
import {computed} from "vue";
import {Dot, DotConfig, extractI18nValue, getDefaultValues} from "lkt-vue-kernel";

const props = withDefaults(defineProps<DotConfig>(), getDefaultValues(Dot));

const computedClassName = computed(() => {
        let r = [];
        if (props.class) r.push(props.class);
        return r.join(' ');
    }),
    computedText = computed(() => {
        return extractI18nValue(props.text);
    });

</script>

<template>
    <i class="lkt-dot" :class="computedClassName">{{ computedText }}</i>
</template>