import Extra from './Extra.js';
export default{
    components:{
        Extra
    },
    template:`
    <div>
    <ol>
        <Extra
        v-for="item in groceryList"
      v-bind:todo="item"
      v-bind:key="item.id"
      ></Extra>
    </ol>
    </div>
    `,

    data(){
        return{
            groceryList: [
                { id: 0, text: 'Vegetables' },
                { id: 1, text: 'Cheese' },
                { id: 2, text: 'Whatever else humans are supposed to eat' }
              ]
        }
    }
}