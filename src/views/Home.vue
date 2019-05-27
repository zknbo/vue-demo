<template>
    <div class="home">
        <div style="display: flex;flex-direction: column;">
            <div style="width: 100%; display:flex;  justify-content: space-between; background-color: antiquewhite;">
                <!--头像-->
                <div style="display: flex;">
                    <img src="http://b.hiphotos.baidu.com/image/pic/item/6c224f4a20a44623a8ba1f209322720e0cf3d704.jpg"
                          style="width: 50px;height: 50px;" alt="">
                    <div style="display: flex;flex-direction: column;align-self: center;font-size: 12px;">
                        <span>测试</span>
                        <span>186</span>
                    </div>
                </div>
                <!--设置按钮-->
                <div style="background-color: yellow; align-self: center;justify-self: right;  margin-right: 10px;"><input type="button"
                                                                                                      value="aaa"><input
                        type="button" value="222"></div>
            </div>
            <div style="margin-top:10px;background-color: aquamarine;text-align: center;">
                <div class="zzc">ccccc</div>
                <div>bbbbbbb</div>
            </div>
            <div style="display: flex;">
                <div style="flex: 1;">
                    <div>a</div>
                    <div>1</div></div>
                <div style="flex: 1; border-left: 1px solid red;"><div>a</div>
                    <div>1</div></div>
            </div>
        </div>
        <div class="center_container">
            <div style="background-color: blue;">
                <div>aaa</div>
                <div>bbbb</div>
            </div>
            <div style="background-color: yellow; align-self: center; margin-right: 10px;"><input type="button"
                                                                                                  value="aaa"><input
                    type="button" value="222"></div>
        </div>
        <div class="grid">
            <div class="col" :key="index" v-for="(item,index) in items">
                <div class="item_container" style="background-color: red;">
                    <img src="" alt="">
                    <span>{{item.title}}</span>
                </div>
            </div>
        </div>
    </div>
</template>
<style scoped>
    .home {
        width: 100%;
        height: 100%;
    }

    .center_container {
        /*align-content: space-between;*/
        justify-content: space-between;
        /*flex-direction: row;*/
        background-color: aqua;
        display: flex;
    }


    .grid {
        margin-top: 10px;
        background-color: aqua;
        width: 100%;
        display: grid;
        grid-template-columns: auto auto auto;
    }

    .col {
        border: 1px solid red;
        height: 100px;
        display: flex;
        align-items: center;
        justify-content: center;

    }

    .item_container {
        display: inline-block;
    }
    .zzc::after{
        content: url("http://b.hiphotos.baidu.com/image/pic/item/6c224f4a20a44623a8ba1f209322720e0cf3d704.jpg");
        width: 30px;
        height: 30px;
    }
</style>
<script>
    // @ is an alias to /src

    export default {
        name: 'home',
        data() {
            return {
                items: [{title: 'a', icon: ''},
                    {title: 'b', icon: ''},
                    {title: 'c', icon: ''},
                    {title: 'd', icon: ''},
                    {title: 'e', icon: ''},
                    {title: 'f', icon: ''},
                    {title: 'g', icon: ''}]
            }
        },
        components: {}
    }
</script>
