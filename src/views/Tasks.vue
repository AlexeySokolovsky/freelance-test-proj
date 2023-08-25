<template>
  <h1 v-if="!data.length" class="text-white center">Задач пока нет</h1>
  <template v-if="data.length">
    <h3 class="text-white">Всего активных задач: {{ activeTasks }}</h3>
    <div class="card" v-for="(item, index) of data" :key="index">
      <h2 class="card-title">
        {{ item.title }}
        <AppStatus :type="item.status" />
      </h2>
      <p>
        <strong>
          <small>
            {{ item.date }}
          </small>
        </strong>
      </p>
      <button class="btn primary" @click="openTask(item.id)">Посмотреть</button>
      <button class="btn danger" @click="cancelTask(item.id)">
        Снять задачу
      </button>
    </div>
  </template>
</template>

<script>
import { computed } from "vue";
import AppStatus from "../components/AppStatus";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const data = computed(() => store.getters.getData);
    const openTask = function (id) {
      router.push({
        name: "Task",
        params: {
          id: id,
        },
      });
    };
    const cancelTask = function (id) {
      store.commit("deleteTask", id);
    };
    const activeTasks = computed(() => store.getters.getActiveTask);
    return {
      data,
      openTask,
      activeTasks,
      cancelTask,
    };
  },
  components: { AppStatus },
};
</script>
