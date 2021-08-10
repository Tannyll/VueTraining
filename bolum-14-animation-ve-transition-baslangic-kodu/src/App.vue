<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation ve Transition</h3>
        <hr />
        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option></select
        ><br />
        <button class="btn btn-primary" @click="show = !show">Göster/Gizle</button>

        <br /><br />
        <transition :name="activeEffect">
          <div class="alert alert-success" v-if="show">Bu alert kutusu</div>
        </transition>
        <hr />
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-if="!show">Bu alert kutusu</div>
        </transition>
        <hr />
        <transition
          enter-class=""
          enter-active-class="animated animate__rubberBand"
          leave-class=""
          leave-active-class="animated animate__jello"
          appear
        >
          <div class="alert alert-info" v-if="!show">Bu alert kutusu</div>
        </transition>
        <hr />
        <transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            Bu alert kutusu 33
          </div>
          <div class="alert alert-danger" v-else key="danger">Bu alert kutusu 33</div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="showJS = !showJS">Göster/Gizle</button>
        <br /><br />
        <transition
          :css="false"
          @before-enter="beforeEnter"
          @enter="enter"
          @after-enter="afterEnter"
          @after-enter-cancelled="afterEnterCancelled"
          @before-leave="beforeLeave"
          @leave="leave"
          @after-leave="afterLeave"
          @after-leave-cancelled="afterLeaveCancelled"
        >
          <div
            style="
              width: 300px;
              background-color: #fccf09;
              border: 1px solid #666;
              width: 100px;
              height: 100px;
            "
            v-if="showJS"
          >
            Bu alert kutusu showJS
          </div>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      activeEffect: "fade",
      show: false,
      showJS: false,
      elementWidth: 100,
    };
  },

  methods: {
    beforeEnter(el) {
      console.log("beforeEnter");
      this.elementWidth = 100;
      el.style.width = this.elementWidth + "px";
    },
    enter(el, done) {
      console.log("enter");
      let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth + round * 10) + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);

    },
    afterEnter(el) {
      console.log("afterEnter");
    },
    afterEnterCancelled(el) {
      console.log("afterEnterCancelled");
    },
    beforeLeave(el) {
      console.log("beforeLeave");
      this.elementWidth = 300;
      el.style.width = this.elementWidth + "px";
    },
    leave(el, done) {
      console.log("leave");
       let round = 1;
      const interval = setInterval(() => {
        el.style.width = (this.elementWidth - round * 10) + "px";
        round++;
        if (round > 20) {
          clearInterval(interval);
          done();
        }
      }, 50);
    },
    afterLeave(el) {
      console.log("afterLeave");
    },
    afterLeaveCancelled(el) {
      console.log("afterLeaveCancelled");
    },
  },
};
</script>

<style>
.fade-enter {
  opacity: 0;
}
.fade-enter-active {
  transition: opacity 1s;
}
.fade-leave {
  opacity: 1;
}
.fade-leave-active {
  transition: opacity 1s;
  opacity: 0;
}

.slide-enter {
  opacity: 0;
}
.slide-enter-active {
  animation: slide-in 1s ease-out forwards;
  transition: opacity 0.5s;
}
.slide-leave {
}
.slide-leave-active {
  transition: opacity 1s;
  animation: slide-out 1s ease-out forwards;

  opacity: 0;
}
@keyframes slide-in {
  from {
    transform: translateY(20px);
  }
  to {
    transform: translateY(0px);
  }
}
@keyframes slide-out {
  from {
    transform: translateY(0px);
  }
  to {
    transform: translateY(20px);
  }
}
</style>
