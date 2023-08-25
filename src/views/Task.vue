<template>
  <div v-if="checkId" class="card">
    <h2>{{ checkId.title }}</h2>
    <p><strong>Статус</strong>: <AppStatus :type="checkId.status" /></p>
    <p><strong>Дэдлайн</strong>: {{ checkId.date }}</p>
    <p><strong>Описание</strong>: {{ checkId.description }}</p>
    <div>
      <button class="btn" @click="toJob('pending')">Взять в работу</button>
      <button class="btn primary" @click="toJob('done')">Завершить</button>
      <button class="btn danger" @click="toJob('cancelled')">Отменить</button>
    </div>
  </div>
  <h3 v-else class="text-white center">
    Задачи с id = <strong>{{ currentRoute }}</strong> нет.
  </h3>
</template>

<script>
import { useRouter } from "vue-router";
import { useStore } from "vuex";
import AppStatus from "../components/AppStatus";
import { computed } from "vue";
export default {
  setup() {
    const store = useStore();
    const router = useRouter();
    const currentRoute = router.currentRoute.value.params.id;
    const checkId = computed(() => {
      return store.getters.getData.find((item) => item.id === currentRoute);
    });
		function toJob(status){
			store.commit('addStatusJob', {currentRoute, status})
		}
    return {
      currentRoute,
      checkId,
			toJob
    };
  },
  components: { AppStatus },
};
</script>

<style scoped></style>
