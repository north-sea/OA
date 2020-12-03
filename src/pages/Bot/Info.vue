<template>
  <q-page padding>
    <div class="q-pa-md row items-start q-gutter-md">
    <q-card>
      <q-avatar size="200px">
        <img :src="bot.avatar">
      </q-avatar>
      <q-list bordered separator>
        <q-item >
          <q-item-section>名称</q-item-section>
          <q-item-section>{{bot.name}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>微信号</q-item-section>
          <q-item-section>{{bot.weixin}}</q-item-section>
        </q-item>
        <q-item >
          <q-item-section>状态</q-item-section>
          <q-item-section>{{!!bot?'在线':'失去连接'}}</q-item-section>
        </q-item>
      </q-list>
    </q-card>
    </div>

  </q-page>
</template>

<script>
import Bot from "@/api/bot";

export default {
    name: "BotInfo",
    data() {
      return {
        bot: {}
      };
    },
    async mounted() {
      console.log(process.env.DEV);
        const { data: { body: { payload } } } = await Bot.get();
        this.bot = payload;
    }
};
</script>
