<script>
export default {
    data() {
        return {
            message: 'Hello world vue',
            titleClass: 'red',
            count: 0,
            text: '',
            checked: false,
            checkedNames: [],
            selected: '',
            options:[
                {text:'jalil',value:'jalil'},
                {text:'aysal',value:'aysal'},
                {text:'ali',value:'ali'}
            ]
        }
    },
    methods: {
        increment() {
            this.count++;
        },
        onInput(e) {
            this.text = e.target.value;
        }
    }
}
</script>
<template>
    <h1 :class="titleClass">
        {{ message.split('').reverse().join('') }}
    </h1>
    <button @click="increment">{{ count }}</button>
    <input @input="onInput" />

    <input v-model="text" />
    <p>{{ text }}</p>
    <hr />

    <input type="checkbox" id="checkboxTest" v-model="checked">
    <label for="checkboxTest">{{ checked }}</label>
    <hr />

    <input type="checkbox" id="jalil" value="jalil" v-model="checkedNames">
    <label for="jalil">jalil</label>

    <input type="checkbox" id="ali" value="ali" v-model="checkedNames">
    <label for="ali">ali</label>

    <input type="checkbox" id="aysal" value="aysal" v-model="checkedNames">
    <label for="aysal">aysal</label>

    <div>Checked names: {{ checkedNames }}</div>
    <hr />
    <div>Selected is : {{ selected }}</div>
    <select v-model="selected">
        <option disabled value="">Please select me</option>
        <option>ali</option>
        <option>jalil</option>
        <option>aysal</option>
    </select>
    <select v-model="selected">
        <option v-for="option in options" :value="option.value">{{option.text}}</option>
    </select>
    <hr />

</template>
<style>
.red {
    color: red;
}
</style>