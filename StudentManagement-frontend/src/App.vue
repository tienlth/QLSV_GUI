<script>
import Header from './components/Header.vue';
import Username from './components/Username.vue';

export default {
    components: {
		Header,
        Username
	},  
    props:{
        
    },
    data(){
        return {

        }
    },
    methods:{

    }
}
</script>

<template>
    <main class="row container-fluid px-0">
        <div class="col-2">
            <Header></Header>
        </div>
        <div class="col-10 p-3">
            <Username></Username>
            <router-view />
        </div>
    </main>
</template>

<style>
</style>

