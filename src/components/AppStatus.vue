<template>
  <span class='badge' :class="badgeColor">{{ statusName }}</span>
</template>
<script>
import { computed, ref } from 'vue';

export default{
	props:['type'],
	setup(props){
		const badgeColor = ref('')
		const statusName = computed(()=>{
			if(props.type === 'active'){
				badgeColor.value = 'primary'
				return 'Активен'
			}else if(props.type === 'done'){
				badgeColor.value = 'primary'
				return 'Выполнено'
			}else if (props.type === 'cancelled'){
				badgeColor.value = 'danger'
				return 'Отменено'
			}else if (props.type === 'pending'){
				badgeColor.value = 'warning'
				return 'Ожидание'
			}
		})
		return {
			statusName,
			badgeColor
		}
	}
}
</script>