<template>
  <div class="character-model" ref="containerRef">
    <div ref="canvasRef" class="canvas-container"></div>
    <div class="model-placeholder">
      <div class="placeholder-icon">🏋️</div>
      <p>3D肌肉模型加载中...</p>
      <p class="tip">此为演示版本，实际项目中将集成Three.js展示真实3D模型</p>
    </div>
    
    <!-- 可点击的肌肉热点 -->
    <div class="muscle-hotspots">
      <div 
        v-for="muscle in sampleMuscles" 
        :key="muscle.id"
        class="hotspot"
        :style="muscle.position"
        @click="handleClick(muscle.id)"
      >
        {{ muscle.name.charAt(0) }}
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'

const emit = defineEmits(['muscle-click'])

const containerRef = ref<HTMLElement | null>(null)
const canvasRef = ref<HTMLElement | null>(null)

const sampleMuscles = [
  { id: 'chest-major', name: '胸', position: { top: '30%', left: '45%' } },
  { id: 'latissimus-dorsi', name: '背', position: { top: '35%', left: '30%' } },
  { id: 'biceps-brachii', name: '肱', position: { top: '35%', left: '20%' } },
  { id: 'deltoid-lateral', name: '肩', position: { top: '25%', left: '25%' } },
  { id: 'rectus-abdominis', name: '腹', position: { top: '40%', left: '45%' } },
  { id: 'quadriceps', name: '股', position: { top: '60%', left: '40%' } },
  { id: 'gluteus-maximus', name: '臀', position: { top: '55%', left: '55%' } },
  { id: 'calves', name: '小', position: { top: '75%', left: '48%' } }
]

function handleClick(muscleId: string) {
  emit('muscle-click', muscleId)
}

onMounted(() => {
  // 实际项目中这里将初始化Three.js
  // 包括场景、相机、渲染器、模型加载等
  console.log('CharacterModel mounted')
})
</script>

<style scoped lang="scss">
.character-model {
  position: relative;
  width: 100%;
  height: 400px;
  background: linear-gradient(180deg, #1A1A2E 0%, #16213E 100%);
  border-radius: 12px;
  overflow: hidden;
}

.canvas-container {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.model-placeholder {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100%;
  color: white;
  text-align: center;
  padding: 20px;
  
  .placeholder-icon {
    font-size: 80px;
    margin-bottom: 20px;
  }
  
  p {
    margin: 5px 0;
    font-size: 16px;
  }
  
  .tip {
    font-size: 12px;
    opacity: 0.7;
    margin-top: 20px;
  }
}

.muscle-hotspots {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
  
  .hotspot {
    position: absolute;
    width: 40px;
    height: 40px;
    background: rgba(255, 107, 53, 0.8);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    color: white;
    font-weight: bold;
    cursor: pointer;
    pointer-events: auto;
    transition: all 0.2s;
    animation: pulse 2s infinite;
    
    &:hover {
      transform: scale(1.2);
      background: rgba(255, 107, 53, 1);
    }
  }
}

@keyframes pulse {
  0%, 100% {
    box-shadow: 0 0 0 0 rgba(255, 107, 53, 0.7);
  }
  50% {
    box-shadow: 0 0 0 10px rgba(255, 107, 53, 0);
  }
}
</style>