export default{
    template:`
<div>
  <p>{{ message }}</p>
  <input v-model="message">
</div>
    `,
    data(){
        return{
            message: 'Hello vue!'
        }
    }
}