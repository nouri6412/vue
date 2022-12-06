<script>
export default {
    emits: ['response'],
    created() {
        this.$emit('response' , 'Hello from child part');
    }
}
</script>
<template>
<div>
    tag from child
</div>
</template>