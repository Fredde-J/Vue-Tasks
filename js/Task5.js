export default{
    template:`
    <div>
        <p>{{message}}</p>
        <button v-on:click="reverseMessage">Reverse Message</button>
    </div>
    `,
    data(){
        return{
            message: 'hello vue.js!'
        }
    },
    methods: {
        reverseMessage: function(){
            this.message = this.message.split('').reverse().join('')
        }
    }
}