<template>
    <label class="switch">
        <input type="checkbox" v-model="checked" @click="clickCheckbox">
        <span class="slider round"></span>
    </label>
</template>

<script setup>
const checked = ref(false);

const props = defineProps(['modelValue']);
const emit = defineEmits(['update:modelValue']);

onMounted(() => {
    checked.value = !!props.modelValue;
});

function clickCheckbox() {
    checked.value = !checked.value;
    emit("update:modelValue", checked.value);
}
</script>

<style>
/* The switch - the box around the slider */
.switch {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 24px;
}

/* Hide default HTML checkbox */
.switch input {
    opacity: 0;
    width: 0;
    height: 0;
}

/* The slider */
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: #ccc;
    -webkit-transition: .1s;
    transition: .1s;
}

.slider:before {
    position: absolute;
    content: "";
    height: 16px;
    width: 16px;
    left: 4px;
    bottom: 4px;
    background-color: white;
    -webkit-transition: .1s;
    transition: .1s;
}

input:checked+.slider {
    @apply bg-violet-700
}


input:checked+.slider:before {
    transform: translateX(15px);
}

/* Rounded sliders */
.slider.round {
    border-radius: 24px;
}

.slider.round:before {
    border-radius: 50%;
}
</style>