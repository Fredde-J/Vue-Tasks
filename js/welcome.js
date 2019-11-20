import person from './person.js'
export default{
    components: {
person
    },
    template:`
    <div>
        <h2>{{ title }}</h2>
        <person></person>
    </div>
    `,
    data(){
        return{
        title: 'welcome!'
    }
},
props: ['title']
}
