<template>
  <div class="hamburger">
        <i @click="toggleModal" class="fas fa-bars fa-2x hamburger-icon"></i>
      </div>
      
      <div v-if="showModal" class="backdrop">
        <div class="modalLeft"> 
          <img class="avatar" src="images/avatar-joseph.png">
          <div>Joseph Kim</div>
          <div class="skills">
            <span>Skills:</span>
            <i class="fab fa-html5 fa-2x"></i>
            <i class="fab fa-css3-alt fa-2x"></i>
            <i class="fab fa-js fa-2x"></i>
            <i class="fab fa-vuejs fa-2x"></i>
          </div>
        </div>
        <div class="modalRight"> 
          <ul class="menuBtn">
            <li><a @click.self="closeModal" href="/index.html">Home</a></li>
            <li><a @click.self="closeModal" href="/work.html">My Work</a></li>
            <li><a @click.self="closeModal" href="/contact.html">Contact</a></li>
          </ul>
        </div>
        <i class="fas fa-times exit" @click.self="closeModal"></i>
      </div>
</template>

<script>
export default {

}
</script>

<style>

</style>