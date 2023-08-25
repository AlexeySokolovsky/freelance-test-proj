<template>
  <form class="card" @submit.prevent="addToDataArray">
    <h1>Создать новую задачу</h1>
    <div class="form-control">
      <label for="title">Название</label>
      <input type="text" id="title" v-model="title" />
    </div>

    <div class="form-control">
      <label for="date">Дата дэдлайна</label>
      <input type="date" id="date" v-model="date" />
    </div>

    <div class="form-control">
      <label for="description">Описание</label>
      <textarea id="description" v-model="description"></textarea>
    </div>

    <button class="btn primary" :disabled="checkData">Создать</button>
  </form>
</template>

<script>
import { ref, computed } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";
export default {
  setup() {
    const title = ref("");
    const date = ref("");
    const description = ref("");
    const store = useStore();
    const router = useRouter();

    const addToDataArray = () => {
      store.commit("addData", {
        title: title.value,
        date: date.value,
        description: description.value,
        status: "active",
        id: (Math.random() * 10000).toFixed(0),
      });
      title.value = "";
      date.value = "";
      description.value = "";
      router.push("/");
    };
    const checkData = computed(() => {
      if (title.value && date.value && description.value) {
        return false;
      } else {
        return true;
      }
    });
    return {
      title,
      date,
      description,
      addToDataArray,
      checkData,
    };
  },
};
</script>
