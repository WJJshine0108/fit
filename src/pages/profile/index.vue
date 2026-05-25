<template>
  <view class="page-container">
    <view class="card profile-header">
      <view class="avatar">
        <text class="avatar-icon">👤</text>
      </view>
      <view class="user-info">
        <text class="user-name">健身爱好者</text>
        <text class="user-title">坚持锻炼，成就更好的自己</text>
      </view>
    </view>
    
    <view class="card">
      <text class="section-title">📊 我的数据</text>
      <view v-if="userStore.userInfo" class="data-grid">
        <view class="data-card">
          <text class="data-value">{{ userStore.userInfo.height }}<text class="data-unit">cm</text></text>
          <text class="data-label">身高</text>
        </view>
        <view class="data-card">
          <text class="data-value">{{ userStore.userInfo.weight }}<text class="data-unit">kg</text></text>
          <text class="data-label">体重</text>
        </view>
        <view class="data-card">
          <text class="data-value">{{ userStore.userInfo.age }}<text class="data-unit">岁</text></text>
          <text class="data-label">年龄</text>
        </view>
        <view class="data-card">
          <text class="data-value">{{ bmi.toFixed(1) }}<text class="data-unit">BMI</text></text>
          <text class="data-label">身体质量指数</text>
        </view>
      </view>
      <view v-else class="empty-data">
        <text>暂无数据，请先填写个人信息</text>
        <view class="btn" @click="goToHome">
          <text>去填写</text>
        </view>
      </view>
    </view>
    
    <view class="card">
      <text class="section-title">🏋️ 肌肉知识</text>
      <view class="muscle-stats">
        <view class="stat-item">
          <text class="stat-value">{{ muscleCount }}</text>
          <text class="stat-label">肌肉总数</text>
        </view>
        <view class="stat-item">
          <text class="stat-value">{{ exerciseCount }}</text>
          <text class="stat-label">训练动作</text>
        </view>
        <view class="stat-item">
          <text class="stat-value">{{ groupCount }}</text>
          <text class="stat-label">肌肉分组</text>
        </view>
      </view>
    </view>
    
    <view class="card">
      <text class="section-title">📖 肌肉分组概览</text>
      <view class="group-list">
        <view 
          v-for="group in muscleGroups" 
          :key="group.id" 
          class="group-item"
          @click="showGroupDetail(group)"
        >
          <view class="group-info">
            <text class="group-name">{{ group.name }}</text>
            <text class="group-count">{{ getGroupMuscleCount(group.id) }} 块肌肉</text>
          </view>
          <text class="group-arrow">›</text>
        </view>
      </view>
    </view>
    
    <view class="card">
      <view class="menu-item" @click="showAbout">
        <text class="menu-icon">ℹ️</text>
        <text class="menu-text">关于我们</text>
        <text class="menu-arrow">›</text>
      </view>
      <view class="menu-item" @click="clearData">
        <text class="menu-icon">🗑️</text>
        <text class="menu-text">清除数据</text>
        <text class="menu-arrow">›</text>
      </view>
    </view>
  </view>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useUserStore } from '@/stores/userStore'
import { muscles, exercises, muscleGroups } from '@/data/muscles'

const userStore = useUserStore()

const bmi = computed(() => {
  if (!userStore.userInfo) return 0
  const heightInMeters = userStore.userInfo.height / 100
  return userStore.userInfo.weight / (heightInMeters * heightInMeters)
})

const muscleCount = computed(() => muscles.length)
const exerciseCount = computed(() => exercises.length)
const groupCount = computed(() => muscleGroups.length)

function getGroupMuscleCount(groupId: string): number {
  return muscles.filter(m => m.group === groupId).length
}

function goToHome() {
  uni.redirectTo({
    url: '/pages/home/index'
  })
}

function showGroupDetail(group: { id: string; name: string }) {
  uni.showToast({
    title: `查看${group.name}`,
    icon: 'none'
  })
}

function showAbout() {
  uni.showModal({
    title: '关于健身助手',
    content: '健身助手是一款帮助您了解人体肌肉结构和训练方法的小程序。通过3D模型展示全身肌肉，提供详细的肌肉介绍和专业训练指导。',
    showCancel: false
  })
}

function clearData() {
  uni.showModal({
    title: '确认清除',
    content: '确定要清除所有个人数据吗？',
    success: (res) => {
      if (res.confirm) {
        userStore.clearUserInfo()
        uni.showToast({
          title: '数据已清除',
          icon: 'success'
        })
      }
    }
  })
}
</script>

<style lang="scss" scoped>
.page-container {
  padding: 20rpx;
  min-height: 100vh;
}

.profile-header {
  display: flex;
  align-items: center;
  gap: 30rpx;
  
  .avatar {
    width: 120rpx;
    height: 120rpx;
    border-radius: 50%;
    background: linear-gradient(135deg, #FF6B35, #FF8C5A);
    display: flex;
    align-items: center;
    justify-content: center;
    
    .avatar-icon {
      font-size: 60rpx;
    }
  }
  
  .user-info {
    flex: 1;
    
    .user-name {
      display: block;
      font-size: 36rpx;
      font-weight: 600;
      margin-bottom: 8rpx;
    }
    
    .user-title {
      font-size: 24rpx;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

.section-title {
  display: block;
  font-size: 30rpx;
  font-weight: 600;
  margin-bottom: 20rpx;
  color: #fff;
}

.data-grid {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 20rpx;
  
  .data-card {
    background: rgba(255, 255, 255, 0.05);
    border-radius: 16rpx;
    padding: 24rpx;
    text-align: center;
    
    .data-value {
      display: block;
      font-size: 40rpx;
      font-weight: 600;
      color: #FF6B35;
      
      .data-unit {
        font-size: 24rpx;
        color: rgba(255, 107, 53, 0.7);
        margin-left: 4rpx;
      }
    }
    
    .data-label {
      font-size: 24rpx;
      color: rgba(255, 255, 255, 0.6);
      margin-top: 8rpx;
    }
  }
}

.empty-data {
  text-align: center;
  padding: 40rpx;
  
  text {
    display: block;
    font-size: 28rpx;
    color: rgba(255, 255, 255, 0.6);
    margin-bottom: 20rpx;
  }
}

.muscle-stats {
  display: flex;
  justify-content: space-around;
  
  .stat-item {
    text-align: center;
    
    .stat-value {
      display: block;
      font-size: 48rpx;
      font-weight: 600;
      color: #FF6B35;
    }
    
    .stat-label {
      font-size: 24rpx;
      color: rgba(255, 255, 255, 0.6);
    }
  }
}

.group-list {
  display: flex;
  flex-direction: column;
  
  .group-item {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 24rpx 0;
    border-bottom: 2rpx solid rgba(255, 255, 255, 0.1);
    
    &:last-child {
      border-bottom: none;
    }
    
    .group-info {
      .group-name {
        display: block;
        font-size: 28rpx;
        font-weight: 500;
        margin-bottom: 4rpx;
      }
      
      .group-count {
        font-size: 22rpx;
        color: rgba(255, 255, 255, 0.5);
      }
    }
    
    .group-arrow {
      font-size: 36rpx;
      color: rgba(255, 255, 255, 0.3);
    }
  }
}

.menu-item {
  display: flex;
  align-items: center;
  padding: 24rpx 0;
  border-bottom: 2rpx solid rgba(255, 255, 255, 0.1);
  
  &:last-child {
    border-bottom: none;
  }
  
  .menu-icon {
    font-size: 32rpx;
    margin-right: 20rpx;
  }
  
  .menu-text {
    flex: 1;
    font-size: 28rpx;
  }
  
  .menu-arrow {
    font-size: 36rpx;
    color: rgba(255, 255, 255, 0.3);
  }
}
</style>