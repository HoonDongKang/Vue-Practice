<template>
  <div class="user-container">
      <div>
        <i class="fas fa-user"></i>
      </div>
        <div class="user-description">
          <slot name="username"></slot>
        </div>
        <div class="time">
          <slot name="time"></slot>
        </div>
        <slot name="karma"></slot>
  </div>
</template>

<script>
export default {
  props:{
    info: { type: Object }
  }
}
</script>

<style scoped>
.user-container{
  display:flex;
  align-content: center;
  padding: 0.5mm;
}
.fa-user{
  font-size: 2.5rem;
}
.user-description{
  padding-left: 8px;
}
.time{
  font-size: 0.7rem;
}

</style>