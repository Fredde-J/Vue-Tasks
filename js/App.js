import welcome from './welcome.js'

export default{
components: {
    welcome
},

    template:`
    <div>
        <h1>hello!</h1>
        <h2>{{ message }}</h2>
        <welcome title="Fist prop"></welcome>
        <welcome title="Second prop"></welcome>
        <welcome title="thired prop"></welcome>
        <welcome></welcome>
    </div>
    `,
    data(){
        return{
            message: "Whats up?"
        }
    }
}