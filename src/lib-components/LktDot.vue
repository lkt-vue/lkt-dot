<script setup lang="ts">
import {computed} from "vue";
import {Dot, DotConfig, extractI18nValue, getDefaultValues} from "lkt-vue-kernel";

const props = withDefaults(defineProps<DotConfig>(), getDefaultValues(Dot));

const computedText = computed(() => {
        return extractI18nValue(props.text);
    }),
    computedClassName = computed(() => {
        let r = [];
        if (String(computedText.value).length > 0) r.push('is-filled');
        if (props.class) r.push(props.class);
        return r.join(' ');
    });

</script>

<template>
    <i class="lkt-dot" :class="computedClassName">{{ computedText }}</i>
</template>