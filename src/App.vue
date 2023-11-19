<template>
  <nav class="navbar navbar-expand-lg bg-body-tertiary position-sticky fixed-top">
    <div class="container-fluid">
      <a class="navbar-brand" href="#">拉鍊損壞偵測</a>
      <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
        aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>
      <div class="collapse navbar-collapse" id="navbarNav">
        <ul class="navbar-nav">
          <li class="nav-item">
            <router-link to="/" class="nav-link">首頁</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/about" class="nav-link">關於</router-link>
          </li>
          <li class="nav-item">
            <router-link to="/zipperWatch" class="nav-link">數量監控</router-link>
          </li>
        </ul>
      </div>
    </div>
  </nav>

  <router-view/>

</template>

<style lang="scss">
@import "bootstrap";
</style>
