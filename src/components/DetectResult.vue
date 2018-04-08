<template>
  <div>
    <div v-if="!this.$store.state.user.authorized">
      <div class="loginTab">
        <div class="tab" :style="getStyle(0)" @click="selectTab(0)">Face</div>
        <div class="tab" :style="getStyle(1)" @click="selectTab(1)">Landmark</div>
        <div class="tab" :style="getStyle(2)" @click="selectTab(2)">Label</div>
        <div class="tab" :style="getStyle(3)" @click="selectTab(3)">Web</div>
      </div>
      <div class="loginPanel" v-if="this.activeIndex === 0">
        <ul>
          <li v-for="item in face" :key="item.name">{{item.name + ': ' + item.value}}</li>
        </ul>
      </div>
      <div class="loginPanel" v-if="this.activeIndex === 1">
        <ul>
          <li v-for="(lm, index) in landmark" :key="index">{{lm.description}}</li>
        </ul>
      </div>
      <div class="loginPanel" v-if="this.activeIndex === 2">
        <ul>
          <li v-for="(lb, index) in label" :key="index">{{lb.description}}</li>
        </ul>
      </div>
      <div class="loginPanel" v-if="this.activeIndex === 3">
        <ul>
          <li v-for="(w, index) in web" :key="index">{{w.description}}</li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'DetectResult',
  props: {
    annotation:Object
  },
  data: function () {
    return {
      activeIndex: 0,
    }
  },
  computed: {
    face () {
      if (this.annotation && this.annotation.faceAnnotations && this.annotation.faceAnnotations.length > 0)
      {
        const obj = this.annotation.faceAnnotations[0];
        const arr = [];
        arr.push({name:'愉悦', value:obj.joyLikelihood})
        arr.push({name:'悲伤', value:obj.sorrowLikelihood})
        arr.push({name:'愤怒', value:obj.angerLikelihood})
        arr.push({name:'惊讶', value:obj.surpriseLikelihood})
        arr.push({name:'曝光不足', value:obj.underExposedLikelihood})
        arr.push({name:'模糊', value:obj.blurredLikelihood})
        return arr
      }
      else return []
    },
    landmark () {
      return this.annotation ? this.annotation.landmarkAnnotations : []
    },
    label () {
      return this.annotation ? this.annotation.labelAnnotations : []
    },
    web () {
      return this.annotation ? this.annotation.webDetection.webEntities : []
    }
  },
  methods: {
    getStyle(index) {
      return index === this.activeIndex ? {backgroundColor:'white', color:'#0080ff'} : {}
    },
    selectTab(index) {
      if (this.activeIndex === index) return;
      this.activeIndex = index;
    },
  }
}
</script>

<style>
@import url('../css/login.css');
</style>
