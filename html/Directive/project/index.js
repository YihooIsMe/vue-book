var app=new Vue({
    el:"#app",
    data:{
       list:[
           {
               id:1,
               name:"iPhone 7",
               price:5000,
               count:1
           },
           {
               id:2,
               name:"iPad Pro",
               price:1000,
               count:1
           },
           {
               id:3,
               name:"MacBook Pro",
               price:10000,
               count:1
           }
       ],
        forChecks:[],
        totalPrice:[]
    },
    created:function () {
        var _this=this;
        this.list.forEach(function (forItem) {
            _this.forChecks.push(forItem.id);
            _this.totalPrice.push(forItem.price*forItem.count);
            _this.$set(forItem,"checked",true);
        });
    },
    methods:{
        handleReduce:function (item,index) {
            if(this.list[index].count===1) return;
            this.list[index].count--;
            this.addOrReduce();
        },
        handleAdd:function (item,index) {
            this.list[index].count++;
            this.addOrReduce();
        },
        handleRemove:function (item,index) {
            var _this=this;
            this.list.splice(index,1);
            this.totalPrice.splice(index,1);
            this.forChecks.forEach(function (forItem,forIndex) {
                if(forItem==item.id){
                    _this.forChecks.splice(forIndex,1);
                }
            });
            this.addOrReduce();
        },
        changSelect:function (item) {
            let _this=this;
            if(typeof item.checked=='undefined'){
                this.totalPrice=[];
                this.$set(item,"checked",true);
                let total=0;
                this.list.forEach(function (forItem) {
                    if(forItem.checked){
                        total+=forItem.price*forItem.count;
                    }
                });
                this.totalPrice.push(total);
            }else {
                this.totalPrice=[];
                this.$delete(item,"checked");
                let total=0;
                this.list.forEach(function (forItem) {
                    if(forItem.checked){
                        total+=forItem.price*forItem.count;
                    }
                });
                this.totalPrice.push(total);
            }
        },
        addOrReduce:function () {
            var _this=this;
            this.totalPrice=[];
            this.list.forEach(function (forItem) {
                if(forItem.checked){
                    _this.totalPrice.push(forItem.price*forItem.count)
                }
            })
        }
    },
    computed:{
        checkAll:{
          get:function () {
              return this.forChecks.length===this.list.length;
          },
          set:function (v) {
              var _this=this;
              if(v){
                  this.forChecks=[];
                  this.list.forEach(function (forItem, index) {
                      _this.forChecks.push(forItem.id);
                      _this.$set(forItem,"checked",true);
                  });
                  this.totalPrice=[];
                  this.list.forEach(function (forItem) {
                      _this.totalPrice.push(forItem.price*forItem.count)
                  })
              }else {
                  this.forChecks=[];
                  this.totalPrice=[];
                  this.list.forEach(function (forItem, index) {
                      _this.$delete(forItem,"checked");
                  });
              }
          }  
        },
        totalMoney:function () {
            var total=0;
            for(var i=0;i<this.totalPrice.length;i++){
                total+=this.totalPrice[i];
            }
            console.log(total);
            return total.toString().replace(/\B(?=(\d{3})+$)/g,",")
        }
    }
});