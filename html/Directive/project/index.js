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
               id:3,
               name:"MacBook Pro",
               price:21488,
               count:1
           }
       ],
        checkModel:true,
        forChecks:[1,2,3]
    },
    methods:{
        handleReduce:function (index) {
            if(this.list[index].count===1) return;
            this.list[index].count--;
        },
        handleAdd:function (index) {
            this.list[index].count++;
        },
        handleRemove:function (index) {
            this.list.splice(index,1);
        },
        checkAll:function () {
            var _this=this;
            if(this.checkModel){
                this.forChecks=[];
            }else {
                this.forChecks=[];
                this.list.forEach(function (item) {
                    _this.forChecks.push(item.id);
                })
            }

        }
    },
    watch:{
        "forChecks":{
            handler:function (val,oldVal) {
                console.log(val);
                console.log(oldVal);
                if(this.forChecks.length===this.list.length){
                    this.checkModel=true;
                }else {
                    this.checkModel=false;
                }

                for(var i=0;i<val.length;i++){

                }
            },
            deep:true
        }
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
});