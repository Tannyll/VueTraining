<template>
  <div class="container">
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>VueJS ile gelen Directive Tanımları</h3>
        <p v-text="'Deneme yanilma metodu her zaman iyidir..'"></p>
        <p v-text="'deneme'"></p>
        <p v-html="'<strong>Bu da v-html</strong>'"></p>
        <p v-html="'<strong>strong</strong>'"></p>
      </div>
    </div>
    <div class="row">
      <div class="col-md-6 col-md-offset-3">
        <h3>Custom Directive</h3>
        <p v-color:background.delay="'yellow'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
          beatae culpa doloribus, ex facilis fugiat, fugit magni molestiae mollitia,
          nesciunt nihil perspiciatis quaerat quam quas ratione sequi unde ut!
        </p>
        <p v-color.delay.flash="'red'">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur
          beatae culpa doloribus, ex facilis fugiat, fugit magni molestiae mollitia,
          nesciunt nihil perspiciatis quaerat quam quas ratione sequi unde ut!
        </p>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  directives: {
    color: {
      //TODO:  Directive Hook Method
      bind(el, binding, vnode) {
        let delay = 0;
        if (binding.modifiers["delay"]) {
          delay = 2000;
        }

        if (binding.modifiers["flash"]) {
          let firstColor = binding.value;
          let secondColor = "#fbbd08";
          let currentColor = firstColor;

          setTimeout(() => {
            setInterval(() => {
              currentColor == secondColor
                ? (currentColor = firstColor)
                : (currentColor = secondColor);

              if (binding.arg == "background") {
                el.style.backgroundColor = currentColor;
              } else {
                el.style.color = currentColor;
              }
            }, delay);
          }, 1000);
        } else {
          setTimeout(() => {
            if (binding.arg == "background") {
              el.style.backgroundColor = binding.value;
            } else {
              el.style.color = binding.value;
            }
          }, delay);
        }
      },
    },
  },
};
</script>

<style></style>
