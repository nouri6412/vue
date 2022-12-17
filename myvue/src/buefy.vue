<script>
import AutoComplete from 'primevue/autocomplete';
export default {
    data() {
        return {
            selectedCountry: null,
            filteredCountries: null
        }
    },
    created() {
        this.countryService = new CountryService();
    },
    methods: {
        searchCountry(event) {
            this.filteredCountriesBasic = this.countryService.search(event.query);
        }
    }
}
</script>
<template>
    <AutoComplete v-model="selectedCountry" :suggestions="filteredCountriesBasic" @complete="searchCountry($event)"
        optionLabel="name" />
    <hr />
</template>
<style>

</style>