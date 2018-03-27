var app=new Vue({
    el:"#app",
    data:{
       list:[
           {
               id:1,
               name:"iPhone 7",
               price:6188,
               count:1
           },
           {
               id:2,
               name:"iPad Pro",
               price:5888,
               count:1
           },
           {
               id:1,
               name:"MacBook Pro",
               price:21488,
               count:1
           }

       ]
    },
    methods:{

    },
    computed:{
        totalPrice:function () {
            var total=0;
            for(var i=0;i<this.list.length;i++){
                var item=this.list[i];
                total+=item.price*item.count;
            }
            return total.toString().replace(/\B(?=(\d{3})+$)/g,",")
        }
    }
})