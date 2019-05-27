<template>
  <div class="about" >
    <div class="root">
      <div>a</div>
      <div>b</div>
    </div>
  </div>
</template>
<style scoped lang="less">

  .root{
    & >  div{
      display: inline-block;
      border: 1px solid red;
      width: 50%;
      box-sizing: content-box;
      &:first-child{
        background-color: aquamarine;
      }
      &:nth-child(2){
        background-color: red;
      }
    }
  }

</style>
