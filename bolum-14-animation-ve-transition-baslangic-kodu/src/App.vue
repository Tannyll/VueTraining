<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Animation and Transition</h3>
        <hr />
        <select class="form-control" v-model="activeEffect">
          <option value="fade">Fade</option>
          <option value="slide">Slide</option></select
        ><br />
        <button class="btn btn-primary" @click="show = !show">Show/Hide</button>

        <br /><br />
        <transition :name="activeEffect">
          <div class="alert alert-success" v-if="show">This is a alert box.</div>
        </transition>
        <hr />
        <transition name="slide" type="animation" appear>
          <div class="alert alert-warning" v-if="!show">This is a alert box.</div>
        </transition>
        <hr />
        <transition
          enter-class=""
          enter-active-class="animated animate__rubberBand"
          leave-class=""
          leave-active-class="animated animate__jello"
          appear
        >
          <div class="alert alert-info" v-if="!show">This is a alert box.</div>
        </transition>
        <hr />
        <transition name="fade" mode="out-in">
          <div class="alert alert-success" v-if="show" key="success">
            This is 2587 number a alert box.
          </div>
          <div class="alert alert-danger" v-else key="danger">
            This is 1425 number a alert box.
          </div>
        </transition>
        <hr />
        <button class="btn btn-primary" @click="showJS = !showJS">Show/Hide</button>
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
            This is a ShowJS alert box.
          </div>
        </transition>
        <hr />
        <h3>Dynamic components between are transitions</h3>
        <buttun class="btn btn-danger" @click="activeComponent = 'appHome'">Home</buttun>
        <buttun class="btn btn-primary" @click="activeComponent = 'appPost'">Post</buttun>
        <br /><br />

        <transition name="fade" mode="out-in">
          <component :is="activeComponent"></component>
        </transition>
        <hr />
        <button class="btn btn-danger" @click="addNewItem">Add new item</button>
        <br /><br />
        <ul class="list-group">
          <transition-group name="slide">
            <li :key="item"
              class="list-group-item"
              v-for="(item, index) in numberList"
              @click="removeItem(index)"
            >
              Number : {{ item }}
            </li>
          </transition-group>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
import Home from "./components/Home.vue";
import Post from "./components/Post.vue";
export default {
  data() {
    return {
      activeEffect: "fade",
      show: false,
      showJS: false,
      elementWidth: 100,
      activeComponent: "appPost",
      numberList: [1, 2, 3, 4, 5],
    };
  },
  components: {
    appPost: Post,
    appHome: Home,
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
        el.style.width = this.elementWidth + round * 10 + "px";
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
        el.style.width = this.elementWidth - round * 10 + "px";
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
    addNewItem() {
      const position = Math.floor(Math.random() * this.numberList.length);
      this.numberList.splice(position, 0, this.numberList.length + 1);
    },
    removeItem(index) {
      this.numberList.splice(index, 1);
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
.slide-leave {}

.slide-leave-active {
  animation: slide-out 1s ease-out forwards;
  transition: opacity 1s;
  opacity: 0;
  position: absolute;
}

.slide-move{
  transition: transform 1s;
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
