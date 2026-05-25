<template>
  <div class="exercise-card">
    <div class="exercise-header">
      <h4>{{ exercise.name }}</h4>
      <span class="difficulty" :class="exercise.difficulty">
        {{ getDifficultyText(exercise.difficulty) }}
      </span>
    </div>
    
    <p class="exercise-description">{{ exercise.description }}</p>
    
    <div class="exercise-info">
      <div class="info-item">
        <span class="icon">🔢</span>
        <span>{{ exercise.sets }} 组 × {{ exercise.reps }} 次</span>
      </div>
    </div>
    
    <details class="exercise-instructions">
      <summary>查看动作步骤</summary>
      <div class="instructions-content">
        <p v-for="(step, index) in getSteps(exercise.instructions)" :key="index" class="step">
          <span class="step-number">{{ index + 1 }}.</span>
          {{ step }}
        </p>
      </div>
    </details>
  </div>
</template>

<script setup lang="ts">
import type { Exercise } from '@/types'

const props = defineProps<{
  exercise: Exercise
}>()

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
</script>

<style scoped lang="scss">
.exercise-card {
  background: #F9F9F9;
  border-radius: 8px;
  padding: 16px;
  
  .exercise-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 8px;
    
    h4 {
      margin: 0;
      color: var(--secondary-color);
      font-size: 16px;
    }
    
    .difficulty {
      padding: 4px 10px;
      border-radius: 12px;
      font-size: 12px;
      font-weight: 500;
      
      &.beginner {
        background: #E8F5E9;
        color: #2E7D32;
      }
      
      &.intermediate {
        background: #FFF3E0;
        color: #E65100;
      }
      
      &.advanced {
        background: #FFEBEE;
        color: #C62828;
      }
    }
  }
  
  .exercise-description {
    color: #666;
    font-size: 14px;
    margin-bottom: 12px;
    line-height: 1.5;
  }
  
  .exercise-info {
    .info-item {
      display: flex;
      align-items: center;
      gap: 6px;
      color: #555;
      font-size: 14px;
      
      .icon {
        font-size: 16px;
      }
    }
  }
  
  .exercise-instructions {
    margin-top: 12px;
    
    summary {
      cursor: pointer;
      color: var(--primary-color);
      font-size: 14px;
      font-weight: 500;
      
      &:hover {
        text-decoration: underline;
      }
    }
    
    .instructions-content {
      margin-top: 10px;
      padding-top: 10px;
      border-top: 1px solid #E0E0E0;
      
      .step {
        display: flex;
        gap: 8px;
        margin-bottom: 8px;
        color: #555;
        font-size: 13px;
        line-height: 1.5;
        
        .step-number {
          color: var(--primary-color);
          font-weight: bold;
          flex-shrink: 0;
        }
      }
    }
  }
}
</style>