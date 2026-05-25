<template>
  <view class="page-container">
    <view class="card">
      <view class="muscle-info-card">
        <view class="muscle-header">
          <view class="muscle-titles">
            <text class="muscle-name">{{ muscle?.name || '肌肉详情' }}</text>
            <text class="name-en">{{ muscle?.nameEn }}</text>
          </view>
          <text class="muscle-group">{{ getGroupName(muscle?.group || '') }}</text>
        </view>
        
        <view class="muscle-section">
          <text class="section-title">📝 简介</text>
          <text class="section-content">{{ muscle?.description || '暂无介绍' }}</text>
        </view>
        
        <view class="muscle-details">
          <view class="detail-item">
            <text class="detail-label">📍 位置</text>
            <text class="detail-content">{{ muscle?.location || '暂无信息' }}</text>
          </view>
          <view class="detail-item">
            <text class="detail-label">💪 功能</text>
            <text class="detail-content">{{ muscle?.function || '暂无信息' }}</text>
          </view>
        </view>
        
        <view class="exercises-section">
          <text class="section-title">🏋️ 推荐训练动作</text>
          <view v-if="exercises.length > 0" class="exercises-list">
            <view 
              v-for="exercise in exercises" 
              :key="exercise.id" 
              class="exercise-card"
            >
              <view class="exercise-header">
                <text class="exercise-name">{{ exercise.name }}</text>
                <text class="difficulty" :class="exercise.difficulty">
                  {{ getDifficultyText(exercise.difficulty) }}
                </text>
              </view>
              <text class="exercise-description">{{ exercise.description }}</text>
              <view class="exercise-info">
                <text>🔢 {{ exercise.sets }} 组 × {{ exercise.reps }} 次</text>
              </view>
              <view class="exercise-instructions" @click="toggleExercise(expandedExercise === exercise.id ? '' : exercise.id)">
                <text class="instructions-title">{{ expandedExercise === exercise.id ? '收起步骤' : '查看动作步骤' }}</text>
                <view v-if="expandedExercise === exercise.id" class="instructions-content">
                  <text v-for="(step, index) in getSteps(exercise.instructions)" :key="index" class="step">
                    <text class="step-number">{{ index + 1 }}.</text>
                    {{ step }}
                  </text>
                </view>
              </view>
            </view>
          </view>
          <text v-else class="no-exercises">暂无相关训练动作</text>
        </view>
      </view>
    </view>
    
    <view class="card">
      <text class="section-title">🔗 返回首页</text>
      <view class="btn" @click="goBack">
        <text>返回首页继续探索</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'
import { getMuscleById, getExercisesByMuscleId, muscleGroups } from '@/data/muscles'
import type { Muscle, Exercise } from '@/types'

const muscle = ref<Muscle | null>(null)
const exercises = ref<Exercise[]>([])
const expandedExercise = ref('')

onMounted(() => {
  const pages = getCurrentPages()
  const currentPage = pages[pages.length - 1] as { options?: { muscleId?: string } }
  const muscleId = currentPage.options?.muscleId || 'chest-major'
  
  muscle.value = getMuscleById(muscleId) || null
  exercises.value = getExercisesByMuscleId(muscleId)
})

function getGroupName(groupId: string): string {
  const group = muscleGroups.find(g => g.id === groupId)
  return group?.name || groupId
}

function getDifficultyText(difficulty: string): string {
  const map: Record<string, string> = {
    'beginner': '入门',
    'intermediate': '中级',
    'advanced': '高级'
  }
  return map[difficulty] || difficulty
}

function getSteps(instructions: string): string[] {
  return instructions.split('\n').map(s => s.trim()).filter(Boolean)
}

function toggleExercise(id: string) {
  expandedExercise.value = id
}

function goBack() {
  uni.navigateBack()
}
</script>

<style lang="scss" scoped>
.page-container {
  padding: 20rpx;
  min-height: 100vh;
}

.muscle-info-card {
  .muscle-header {
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    margin-bottom: 30rpx;
    padding-bottom: 20rpx;
    border-bottom: 2rpx solid #3a3a5c;
    
    .muscle-titles {
      .muscle-name {
        display: block;
        font-size: 40rpx;
        font-weight: 600;
        margin-bottom: 8rpx;
      }
      
      .name-en {
        font-size: 26rpx;
        color: rgba(255, 255, 255, 0.6);
        font-style: italic;
      }
    }
    
    .muscle-group {
      padding: 10rpx 20rpx;
      background: rgba(255, 107, 53, 0.2);
      color: #FF6B35;
      border-radius: 24rpx;
      font-size: 22rpx;
    }
  }
  
  .muscle-section {
    margin-bottom: 30rpx;
    
    .section-title {
      display: block;
      font-size: 30rpx;
      font-weight: 600;
      color: #FF6B35;
      margin-bottom: 12rpx;
    }
    
    .section-content {
      font-size: 28rpx;
      line-height: 1.6;
      color: rgba(255, 255, 255, 0.8);
    }
  }
  
  .muscle-details {
    display: flex;
    flex-direction: column;
    gap: 20rpx;
    margin-bottom: 30rpx;
    
    .detail-item {
      .detail-label {
        display: block;
        font-size: 28rpx;
        font-weight: 600;
        margin-bottom: 8rpx;
      }
      
      .detail-content {
        font-size: 26rpx;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
      }
    }
  }
  
  .exercises-section {
    .section-title {
      display: block;
      font-size: 30rpx;
      font-weight: 600;
      color: #FF6B35;
      margin-bottom: 20rpx;
    }
    
    .exercises-list {
      display: flex;
      flex-direction: column;
      gap: 20rpx;
    }
    
    .no-exercises {
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      padding: 40rpx;
      font-size: 28rpx;
    }
  }
}

.exercise-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 16rpx;
  padding: 28rpx;
  
  .exercise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 16rpx;
    
    .exercise-name {
      font-size: 30rpx;
      font-weight: 600;
    }
    
    .difficulty {
      padding: 10rpx 20rpx;
      border-radius: 24rpx;
      font-size: 24rpx;
      
      &.beginner {
        background: rgba(46, 125, 50, 0.3);
        color: #66BB6A;
      }
      
      &.intermediate {
        background: rgba(230, 81, 0, 0.3);
        color: #FFA726;
      }
      
      &.advanced {
        background: rgba(198, 40, 40, 0.3);
        color: #EF5350;
      }
    }
  }
  
  .exercise-description {
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    margin-bottom: 16rpx;
  }
  
  .exercise-info {
    font-size: 26rpx;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20rpx;
  }
  
  .exercise-instructions {
    .instructions-title {
      font-size: 26rpx;
      color: #FF6B35;
      font-weight: 500;
    }
    
    .instructions-content {
      margin-top: 20rpx;
      padding-top: 20rpx;
      border-top: 2rpx solid #3a3a5c;
      
      .step {
        display: flex;
        gap: 16rpx;
        margin-bottom: 16rpx;
        font-size: 26rpx;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
        
        .step-number {
          color: #FF6B35;
          font-weight: 600;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>