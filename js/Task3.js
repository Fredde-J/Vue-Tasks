export default{
    template:`
    <div>
        <span v-if="seen">
            Now you see me
        </span>
    </div>
    `,
    data(){
        return{
        seen: true
    }
}
}