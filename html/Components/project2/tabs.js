Vue.component("tabs",{
    template:'<div class="tabs">\n' +
    '        <div class="tabs-bar">\n' +
    '            <div :class="tabCls(item)" v-for="(item,index) in navList" @click="handleChange(index)"></div>\n' +
    '            <div class="tabs-content">\n' +
    '                <slot></slot>\n' +
    '            </div>\n' +
    '        </div>\n' +
    '    </div>',
    data:function () {
        return {
            navList:[],
            currentValue:this.value
        }
    },
    methods:{
        getTabs:function () {
            return this.$children.filter(function (item) {
                return item.$options.name==='pane';
            })
        },
        updateNav:function () {
            this.navList=[];
            var _this=this;
            this.getTabs().forEach(function (pane, index) {
                _this.navList.push({
                    label:pane.label,
                    name:pane.name||index
                });
                if(!pane.name) pane.name=index;
                if(index===0){
                    if(!_this.currentValue){
                        _this.currentValue=pane.name||index;
                    }
                }
            });

            this.updateStatus();
        },
        updateStatus:function () {
            var tabs=this.getTabs();
            var _this=this;
            tabs.forEach(function (tab) {
                return tab.show=tab.name===_this.currentValue;
            })
        }
    }
})