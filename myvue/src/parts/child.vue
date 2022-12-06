<script>
export default {
    emits: ['response'],
    created() {
        this.$emit('response' , 'Hello from child part','Hello from child part second');
    }
}
</script>
<template>
<div>
    tag from child
</div>
</template>