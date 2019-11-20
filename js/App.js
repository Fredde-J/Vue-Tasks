import Task7 from './Task7.js'

export default{

    components:{
Task7
    },


    template:`
    <div>
        <h1>hello!</h1>
        <h2>{{ message }}</h2>
        <Task7></Task7>
    </div>
    `,
    data(){
        return{
            message: "Whats up?"
        }
    }
}