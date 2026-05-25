<template>
  <view class="page-container">
    <view v-if="!userStore.isInfoComplete" class="card">
      <view class="user-form">
        <text class="form-title">填写您的信息</text>
        <text class="form-subtitle">我们将根据您的数据生成专属的肌肉模型</text>
        
        <view class="form-group">
          <text class="form-label">性别</text>
          <view class="gender-select">
            <view 
              class="gender-btn" 
              :class="{ active: formData.gender === 'male' }"
              @click="formData.gender = 'male'"
            >
              <text>👨 男</text>
            </view>
            <view 
              class="gender-btn" 
              :class="{ active: formData.gender === 'female' }"
              @click="formData.gender = 'female'"
            >
              <text>👩 女</text>
            </view>
          </view>
        </view>
        
        <view class="form-group">
          <text class="form-label">身高 (cm)</text>
          <input 
            type="number" 
            v-model="formData.height" 
            placeholder="例如：175"
            class="form-input"
          />
        </view>
        
        <view class="form-group">
          <text class="form-label">体重 (kg)</text>
          <input 
            type="number" 
            v-model="formData.weight" 
            placeholder="例如：70"
            class="form-input"
          />
        </view>
        
        <view class="form-group">
          <text class="form-label">年龄</text>
          <input 
            type="number" 
            v-model="formData.age" 
            placeholder="例如：25"
            class="form-input"
          />
        </view>
        
        <view class="btn" @click="handleSubmit">
          <text>开始探索</text>
        </view>
      </view>
    </view>
    
    <template v-else>
      <view class="card user-info-bar">
        <view class="user-data">
          <view class="data-item">
            <text class="data-value">{{ userStore.userInfo?.height }}cm</text>
            <text class="data-label">身高</text>
          </view>
          <view class="data-item">
            <text class="data-value">{{ userStore.userInfo?.weight }}kg</text>
            <text class="data-label">体重</text>
          </view>
          <view class="data-item">
            <text class="data-value">{{ userStore.userInfo?.age }}岁</text>
            <text class="data-label">年龄</text>
          </view>
        </view>
        <view class="edit-btn" @click="userStore.clearUserInfo">
          <text>重新填写</text>
        </view>
      </view>
      
      <view class="card model-section">
        <text class="section-title">🧍 人体肌肉模型</text>
        <text class="section-tip">点击肌肉了解详情</text>
        
        <view class="character-model">
          <view class="model-placeholder">
            <text class="placeholder-icon">🏋️</text>
            <text>3D肌肉模型展示区</text>
            <text class="tip">拖动旋转 • 点击肌肉查看详情</text>
          </view>
          
          <view class="muscle-hotspots">
            <view 
              v-for="muscle in sampleMuscles" 
              :key="muscle.id"
              class="hotspot"
              :style="muscle.position"
              @click="handleMuscleClick(muscle.id)"
            >
              <text>{{ muscle.name }}</text>
            </view>
          </view>
        </view>
      </view>
      
      <view class="card muscle-groups">
        <text class="section-title">📋 肌肉分组</text>
        <view class="group-grid">
          <view 
            v-for="group in muscleGroups" 
            :key="group.id" 
            class="group-item"
            @click="handleGroupClick(group.id)"
          >
            <text>{{ group.name }}</text>
          </view>
        </view>
      </view>
    </template>
    
    <view v-if="selectedMuscle" class="modal-overlay" @click="closeModal">
      <view class="modal-content" @click.stop>
        <view class="muscle-info-card">
          <view class="muscle-header">
            <view class="muscle-titles">
              <text class="muscle-name">{{ selectedMuscle.name }}</text>
              <text class="name-en">{{ selectedMuscle.nameEn }}</text>
            </view>
            <text class="muscle-group">{{ getGroupName(selectedMuscle.group) }}</text>
          </view>
          
          <view class="muscle-section">
            <text class="section-title">📝 简介</text>
            <text class="section-content">{{ selectedMuscle.description }}</text>
          </view>
          
          <view class="muscle-details">
            <view class="detail-item">
              <text class="detail-label">📍 位置</text>
              <text class="detail-content">{{ selectedMuscle.location }}</text>
            </view>
            <view class="detail-item">
              <text class="detail-label">💪 功能</text>
              <text class="detail-content">{{ selectedMuscle.function }}</text>
            </view>
          </view>
          
          <view class="exercises-section">
            <text class="section-title">🏋️ 推荐训练动作</text>
            <view v-if="currentExercises.length > 0" class="exercises-list">
              <view 
                v-for="exercise in currentExercises" 
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
        <view class="btn close-btn" @click="closeModal">
          <text>关闭</text>
        </view>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { reactive, ref, computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { muscleGroups, getMuscleById, getExercisesByMuscleId } from '@/data/muscles'
import type { Muscle } from '@/types'

const userStore = useUserStore()
const selectedMuscle = ref<Muscle | null>(null)
const expandedExercise = ref('')

const formData = reactive({
  gender: 'male' as 'male' | 'female',
  height: 0,
  weight: 0,
  age: 0
})

const sampleMuscles = [
  { id: 'chest-major', name: '胸', position: { top: '25%', left: '45%' } },
  { id: 'latissimus-dorsi', name: '背', position: { top: '30%', left: '30%' } },
  { id: 'biceps-brachii', name: '肱', position: { top: '30%', left: '18%' } },
  { id: 'deltoid-lateral', name: '肩', position: { top: '20%', left: '23%' } },
  { id: 'rectus-abdominis', name: '腹', position: { top: '35%', left: '45%' } },
  { id: 'quadriceps', name: '股', position: { top: '55%', left: '38%' } },
  { id: 'gluteus-maximus', name: '臀', position: { top: '50%', left: '55%' } },
  { id: 'calves', name: '小', position: { top: '70%', left: '48%' } }
]

const currentExercises = computed(() => {
  if (!selectedMuscle.value) return []
  return getExercisesByMuscleId(selectedMuscle.value.id)
})

function handleSubmit() {
  if (formData.height && formData.weight && formData.age) {
    userStore.setUserInfo({ ...formData })
  }
}

function handleMuscleClick(muscleId: string) {
  const muscle = getMuscleById(muscleId)
  if (muscle) {
    selectedMuscle.value = muscle
  }
}

function handleGroupClick(groupId: string) {
  uni.showToast({
    title: `选择了${groupId}分组`,
    icon: 'none'
  })
}

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

function closeModal() {
  selectedMuscle.value = null
  expandedExercise.value = ''
}
</script>

<style lang="scss" scoped>
.page-container {
  padding: 20rpx;
  min-height: 100vh;
}

.user-form {
  .form-title {
    display: block;
    font-size: 36rpx;
    font-weight: 600;
    text-align: center;
    margin-bottom: 10rpx;
    color: #fff;
  }
  
  .form-subtitle {
    display: block;
    font-size: 26rpx;
    text-align: center;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 40rpx;
  }
}

.user-info-bar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .user-data {
    display: flex;
    gap: 40rpx;
    
    .data-item {
      text-align: center;
      
      .data-value {
        display: block;
        font-size: 32rpx;
        font-weight: 600;
        color: #FF6B35;
      }
      
      .data-label {
        font-size: 22rpx;
        color: rgba(255, 255, 255, 0.6);
      }
    }
  }
  
  .edit-btn {
    padding: 16rpx 32rpx;
    border: 2rpx solid #3a3a5c;
    border-radius: 12rpx;
    font-size: 26rpx;
    
    &:active {
      border-color: #FF6B35;
      color: #FF6B35;
    }
  }
}

.model-section {
  .section-title {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    margin-bottom: 8rpx;
    color: #fff;
  }
  
  .section-tip {
    display: block;
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20rpx;
  }
}

.character-model {
  position: relative;
  width: 100%;
  height: 500rpx;
  background: linear-gradient(180deg, #1A1A2E 0%, #16213E 100%);
  border-radius: 16rpx;
  overflow: hidden;
  
  .model-placeholder {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    height: 100%;
    
    .placeholder-icon {
      font-size: 120rpx;
      margin-bottom: 20rpx;
    }
    
    text {
      font-size: 28rpx;
      color: rgba(255, 255, 255, 0.7);
      
      &.tip {
        font-size: 22rpx;
        margin-top: 10rpx;
      }
    }
  }
}

.muscle-groups {
  .section-title {
    display: block;
    font-size: 30rpx;
    font-weight: 600;
    margin-bottom: 20rpx;
    color: #fff;
  }
  
  .group-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 20rpx;
    
    .group-item {
      padding: 24rpx;
      background: rgba(255, 255, 255, 0.05);
      border-radius: 12rpx;
      text-align: center;
      font-size: 26rpx;
      
      &:active {
        background: rgba(255, 107, 53, 0.3);
      }
    }
  }
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
        font-size: 36rpx;
        font-weight: 600;
        margin-bottom: 8rpx;
      }
      
      .name-en {
        font-size: 24rpx;
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
      font-size: 28rpx;
      font-weight: 600;
      color: #FF6B35;
      margin-bottom: 12rpx;
    }
    
    .section-content {
      font-size: 26rpx;
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
        font-size: 26rpx;
        font-weight: 600;
        margin-bottom: 8rpx;
      }
      
      .detail-content {
        font-size: 24rpx;
        color: rgba(255, 255, 255, 0.7);
        line-height: 1.5;
      }
    }
  }
  
  .exercises-section {
    .section-title {
      display: block;
      font-size: 28rpx;
      font-weight: 600;
      color: #FF6B35;
      margin-bottom: 16rpx;
    }
    
    .exercises-list {
      display: flex;
      flex-direction: column;
      gap: 20rpx;
    }
    
    .no-exercises {
      text-align: center;
      color: rgba(255, 255, 255, 0.5);
      padding: 30rpx;
      font-size: 26rpx;
    }
  }
}

.exercise-card {
  background: rgba(255, 255, 255, 0.05);
  border-radius: 12rpx;
  padding: 24rpx;
  
  .exercise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12rpx;
    
    .exercise-name {
      font-size: 28rpx;
      font-weight: 600;
    }
    
    .difficulty {
      padding: 8rpx 16rpx;
      border-radius: 20rpx;
      font-size: 22rpx;
      
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
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.7);
    line-height: 1.5;
    margin-bottom: 12rpx;
  }
  
  .exercise-info {
    font-size: 24rpx;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 16rpx;
  }
  
  .exercise-instructions {
    .instructions-title {
      font-size: 24rpx;
      color: #FF6B35;
      font-weight: 500;
    }
    
    .instructions-content {
      margin-top: 16rpx;
      padding-top: 16rpx;
      border-top: 2rpx solid #3a3a5c;
      
      .step {
        display: flex;
        gap: 12rpx;
        margin-bottom: 12rpx;
        font-size: 24rpx;
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

.close-btn {
  width: 100%;
  margin-top: 20rpx;
}
</style>