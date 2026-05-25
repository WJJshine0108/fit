<template>
  <div class="muscle-info-card">
    <!-- 肌肉头部信息 -->
    <div class="muscle-header">
      <div class="muscle-titles">
        <h2>{{ muscle.name }}</h2>
        <span class="name-en">{{ muscle.nameEn }}</span>
      </div>
      <span class="muscle-group">{{ getGroupName(muscle.group) }}</span>
    </div>
    
    <!-- 肌肉描述 -->
    <div class="muscle-section">
      <h3>📝 简介</h3>
      <p>{{ muscle.description }}</p>
    </div>
    
    <!-- 位置和功能 -->
    <div class="muscle-details">
      <div class="detail-item">
        <span class="detail-label">📍 位置</span>
        <p>{{ muscle.location }}</p>
      </div>
      <div class="detail-item">
        <span class="detail-label">💪 功能</span>
        <p>{{ muscle.function }}</p>
      </div>
    </div>
    
    <!-- 训练动作列表 -->
    <div class="exercises-section">
      <h3>🏋️ 推荐训练动作</h3>
      <div v-if="exercises.length > 0" class="exercises-list">
        <ExerciseCard 
          v-for="exercise in exercises" 
          :key="exercise.id" 
          :exercise="exercise" 
        />
      </div>
      <p v-else class="no-exercises">暂无相关训练动作</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import ExerciseCard from './ExerciseCard.vue'
import { muscleGroups } from '@/data/muscles'
import type { Muscle, Exercise } from '@/types'

const props = defineProps<{
  muscle: Muscle
  exercises: Exercise[]
}>()

function getGroupName(groupId: string): string {
  const group = muscleGroups.find(g => g.id === groupId)
  return group?.name || groupId
}
</script>

<style scoped lang="scss">
.muscle-info-card {
  h2 {
    color: var(--secondary-color);
    margin-bottom: 4px;
  }
  
  h3 {
    color: var(--primary-color);
    font-size: 16px;
    margin-bottom: 12px;
  }
}

.muscle-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 24px;
  padding-bottom: 16px;
  border-bottom: 1px solid #E0E0E0;
  
  .muscle-titles {
    .name-en {
      color: #666;
      font-size: 14px;
      font-style: italic;
    }
  }
  
  .muscle-group {
    background: rgba(255, 107, 53, 0.1);
    color: var(--primary-color);
    padding: 6px 12px;
    border-radius: 20px;
    font-size: 12px;
    font-weight: 500;
  }
}

.muscle-section {
  margin-bottom: 20px;
  
  p {
    line-height: 1.6;
    color: #555;
  }
}

.muscle-details {
  display: flex;
  flex-direction: column;
  gap: 16px;
  margin-bottom: 24px;
  
  .detail-item {
    .detail-label {
      display: block;
      font-weight: 600;
      color: var(--secondary-color);
      margin-bottom: 6px;
      font-size: 14px;
    }
    
    p {
      margin: 0;
      color: #555;
      line-height: 1.5;
    }
  }
}

.exercises-section {
  .exercises-list {
    display: flex;
    flex-direction: column;
    gap: 12px;
  }
  
  .no-exercises {
    text-align: center;
    color: #999;
    padding: 20px;
  }
}
</style>