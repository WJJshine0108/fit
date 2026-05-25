<script setup lang="ts">
import { onLaunch, onShow, onHide } from '@dcloudio/uni-app'
import { useUserStore } from '@/stores/userStore'

const userStore = useUserStore()

onLaunch(() => {
  userStore.loadFromStorage()
})

onShow(() => {
})

onHide(() => {
})
</script>

<style lang="scss">
@import './styles/main.scss';
</style>