<template>
  <div>
    
    <div class="mdl-grid">
      <div class="mdl-cell mdl-cell--3-col mdl-cell mdl-cell--1-col-tablet mdl-cell--hide-phone"></div>
      <div class="mdl-cell mdl-cell--6-col mdl-cell--4-col-phone">
        <div v-for="picture in this.pictures" class="image-card" @click="displayDetails(picture.id)">
          <div class="image-card__picture">
            <img :src="picture.url" />
          </div>
          <div class="image-card__comment mdl-card__actions">
            <span>{{ picture.comment }}</span>
          </div>
        </div>
      </div>
    </div>

<!--WELCOME CARD-->
  <div class="demo-card-wide mdl-card mdl-shadow--2dp">
  </div>
  <br />

<!--NEWS CARD-->
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">FAKE News</h2>
    </div>
    
    <div class="mdl-card__supporting-text">
      Latest Headlines
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Lockness sink boats in Lake Michigan
      </a>
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Vampires take over Sears Tower
      </a>
      <a class = "mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Frankenstien frightens Chicagoans
      </a>
    </div>
  </div>

<!--Don't Give Us Money-->
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">Don't Give Us Money!!!</h2>
    </div>
    <div class="mdl-card__supporting-text">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
      </a>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a href="https://www.gofundme.com/demonmash" class="button">  DONATION$ </a>

    </div>
  </div>
  <br />
  <!--WEATHER CARD-->
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">The Monster Mash</h2>
    </div>
    <div class="mdl-card__supporting-text">
       <a href= "https://www.youtube.com/watch?v=SOFCQ2bfmHw" class="button">  MONSTER MASH </a>
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <br />
      
    </div>
  </div>

  <!--CRIME CARD-->
  <div class="demo-card-square mdl-card mdl-shadow--2dp">
    <div class="mdl-card__title mdl-card--expand">
      <h2 class="mdl-card__title-text">News</h2>
    </div>
    
    <div class="mdl-card__supporting-text">
      Latest Headlines
    </div>
    <div class="mdl-card__actions mdl-card--border">
      <a class="mdl-button mdl-button--colored mdl-js-button mdl-js-ripple-effect">
        Links to news go here.
      </a>
    </div>
  </div>

    <router-link class="add-picture-button mdl-button mdl-js-button mdl-button--fab mdl-button--colored" to="/alert">
      <i class="material-icons">add</i>
    </router-link>
  </div>


</template>

...
<style scoped>

  .add-picture-button {
    position: fixed;
    right: 24px;
    bottom: 24px;
    z-index: 998;
  }
  .image-card {
    position: relative;
    margin-bottom: 8px;
  }
  .image-card__picture > img {
    width:100%;
  }
  .image-card__comment {
    position: absolute;
    bottom: 0;
    height: 52px;
    padding: 16px;
    text-align: right;
    background: rgba(0, 0, 0, 0.5);
  }
  .image-card__comment > span {
    color: #087;
    font-size: 14px;
    font-weight: bold;
  }
  .demo-card-square.mdl-card {
    margin: auto;
    display: inline-block;
    text-align: center;
    width: 320px;
    height: 320px;
    background: #fff;
  }
  .demo-card-wide.mdl-card {
    margin: auto;
    width: 645px;
    height: 176px;
    background: url(http://www.salafi-islam.com/wp-content/uploads/2016/12/halloween.jpg) center / cover;
  }
</style>
