<template>
    <div class="home">
        <input type="button" value="浪起来" @click="start">
        <input type="button" value="低调" @click="stop">
        <h1 :style="{'color': color}">{{message}}</h1>
        <div class="inner" @click="divClick">
            <input type="button" value="戳他" @click.stop="btnClick">
        </div>
    </div>
</template>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }
</style>
<script>
    // 插值表达式
    // v-bind 属性绑定绑定机制  简写 ：
    // v-on 事件绑定机制 简写 @
    export default {
        data() {
            return {
                myTitle: '这是我的一个自定义title',
                message: '猥琐发育，别浪~~~~',
                timer: null,
                color: ''
            }
        },
        methods: {  // methods 定义了 当前vue实例的所有可用的 js方法
            btnClick(){
                console.info('这是触发了 btn div 的点击事件');
            },
            divClick(){
                console.info('这是触发了 inner div 的点击事件');
            },
            changeColor(){
                let r = Math.floor(Math.random() * 256); //随机生成256以内r值
                let g = Math.floor(Math.random() * 256); //随机生成256以内g值
                let b = Math.floor(Math.random() * 256); //随机生成256以内b值
                let alpha = Math.random(); //随机生成1以内a值
                this.color = `rgb(${r},${g},${b},${alpha})`;
            },
            start() {
                if (this.timer != null) return;
                this.timer = setInterval(() => {
                    let first = this.message.charAt(0);
                    let end = this.message.substring(1, this.message.length);
                    let new_contetn = end + first;
                    this.changeColor();
                    // 设置标签中的值
                    this.message = new_contetn;
                }, 100);
            },
            stop() {
                clearInterval(this.timer);
                this.timer = null;
            },
        },
        components: {}
    }
</script>
