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
<div>
    Global var is : {{global_val}}
</div>
</template>