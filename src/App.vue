<template>
<div id="app">
      <button class="fixed-top btn btn-success mb-3 " v-on:click="doAction1"><a href="#">メニュー</a></button>
        <div v-if="flg1" class="list-group">
          <router-link to="/" class="btn btn-primary mx-2" v-on:click="doAction1">
            トップ
          </router-link>
          <router-link to="/greeting" class="btn btn-success" v-on:click="doAction1">
            ごあいさつ
          </router-link>
          <router-link to="/entering" class="btn btn-primary mx-2" v-on:click="doAction1">
            入塾について
          </router-link>
          <router-link to="/course" class="btn btn-success" v-on:click="doAction1">
            コース
          </router-link>
          <router-link to="/guideline" class="btn btn-primary mx-2" v-on:click="doAction1">
            学習指針
          </router-link>
          <router-link to="/plan" class="btn btn-success" v-on:click="doAction1">
            学習予定
          </router-link>
            <router-link to="/performance" class="btn btn-primary mx-2" v-on:click="doAction1">
            合格実績
          </router-link>
          <router-link to="/logic" class="btn btn-success" v-on:click="doAction1">
            論理エンジン
          </router-link>
          <router-link to="/exam" class="btn btn-primary mx-2" v-on:click="doAction1">
            模擬テスト
          </router-link>
          <router-link to="/kleperin" class="btn btn-success" v-on:click="doAction1">
            クレペリンテスト
          </router-link>
          <router-link to="/tweet" class="btn btn-primary mx-2" v-on:click="doAction1">
            おじさんのつぶやき
          </router-link>
          <router-link to="/contact" class="btn btn-success" v-on:click="doAction1">
            お問い合わせ
          </router-link>
        </div>
    <router-view ></router-view>
    </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data: function() {
    return {
      flg1: false,
      btn: 'Hide',
    }
  },
  methods: {
    doAction1() {
      this.flg1 = !this.flg1;
      
    },
  },
}

</script>

<style>

a:link, a:visited, a:hover, a:active {
  color: white;
  text-decoration: none;
}

.btn {
  margin: 10px;
}

.trans1 {
  color: black;
  padding: 10px;
  font-size: 20pt;
}

.slide-fade-enter-active {
  transition: all .3s ease-out;
}

.slide-fade-leave-active {
  transition: all .8s cubic-bezier(1, 0.5, 0.8, 1);
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(20px);
  opacity: 0;
}

</style>
