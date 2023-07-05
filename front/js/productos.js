const {createApp} = Vue 

createApp({
    data(){
        return{
            productos:[] ,
            url:'http://127.0.0.1:5000/productos',
            cargando: true,
            error: false

        }

    },
    methods:{
        fetchData(){
            fetch(this.url)
            .then(response => response.json())
            .then(data =>{
                this.productos = data;
                this.cargando = false;
            })
            .catch(err => {
                console.error(err);
                this.error = true;
            })
        },
        delate(id){
            const url = 'http://127.0.0.1:5000/productos/'+id;
            let options = {
                method:'DELETE'
            }
            fetch(url, options)
                .this(response => response.json())
                .then(data =>{
                location.reload();
            })
            .catch(err=>{
                console.error(err)
            })
        }
    },
    created(){
        this.fetchData(this.url);
    }

}).mount('#app')