<template>
  <div class="user-form card">
    <h2>填写您的信息</h2>
    <p class="subtitle">我们将根据您的数据生成专属的肌肉模型</p>
    
    <form @submit.prevent="handleSubmit" class="form-content">
      <div class="form-group">
        <label>性别</label>
        <div class="gender-select">
          <button 
            type="button" 
            class="gender-btn" 
            :class="{ active: formData.gender === 'male' }"
            @click="formData.gender = 'male'"
          >
            👨 男
          </button>
          <button 
            type="button" 
            class="gender-btn" 
            :class="{ active: formData.gender === 'female' }"
            @click="formData.gender = 'female'"
          >
            👩 女
          </button>
        </div>
      </div>
      
      <div class="form-group">
        <label for="height">身高 (cm)</label>
        <input 
          type="number" 
          id="height" 
          v-model.number="formData.height" 
          placeholder="例如：175"
          min="100" 
          max="250"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="weight">体重 (kg)</label>
        <input 
          type="number" 
          id="weight" 
          v-model.number="formData.weight" 
          placeholder="例如：70"
          min="30" 
          max="300"
          required
        />
      </div>
      
      <div class="form-group">
        <label for="age">年龄</label>
        <input 
          type="number" 
          id="age" 
          v-model.number="formData.age" 
          placeholder="例如：25"
          min="1" 
          max="120"
          required
        />
      </div>
      
      <button type="submit" class="btn submit-btn">
        开始探索
      </button>
    </form>
  </div>
</template>

<script setup lang="ts">
import { reactive } from 'vue'

const emit = defineEmits(['submit'])

const formData = reactive({
  gender: 'male' as 'male' | 'female',
  height: 0,
  weight: 0,
  age: 0
})

function handleSubmit() {
  if (formData.height && formData.weight && formData.age) {
    emit('submit', { ...formData })
  }
}
</script>

<style scoped lang="scss">
.user-form {
  max-width: 500px;
  margin: 0 auto;
}

h2 {
  color: var(--secondary-color);
  margin-bottom: 10px;
  text-align: center;
}

.subtitle {
  color: #666;
  text-align: center;
  margin-bottom: 30px;
}

.form-content {
  display: flex;
  flex-direction: column;
  gap: 20px;
}

.form-group {
  label {
    display: block;
    margin-bottom: 8px;
    font-weight: 600;
    color: var(--text-color);
  }
  
  input {
    width: 100%;
    padding: 12px 16px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    font-size: 16px;
    transition: border-color 0.2s;
    
    &:focus {
      outline: none;
      border-color: var(--primary-color);
    }
  }
}

.gender-select {
  display: flex;
  gap: 12px;
  
  .gender-btn {
    flex: 1;
    padding: 16px;
    border: 2px solid #E0E0E0;
    border-radius: 8px;
    background: white;
    font-size: 16px;
    cursor: pointer;
    transition: all 0.2s;
    
    &:hover {
      border-color: var(--primary-color);
    }
    
    &.active {
      border-color: var(--primary-color);
      background: rgba(255, 107, 53, 0.1);
    }
  }
}

.submit-btn {
  margin-top: 20px;
}
</style>