export default{
template:`
<section>
    <p>First name: {{ firstName}}</p>
    <p>Last name: {{lastName}}</p>

</section>
`,
data(){
    return{
        firstName: 'Fredrik',
        lastName: 'Jönsson'
    }
}
}