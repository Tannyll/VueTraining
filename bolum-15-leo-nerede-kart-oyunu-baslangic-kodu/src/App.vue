<template>
<component :is="activeComponent"></component>
</template>
<script>
import GameCard from "./components/GameCards.vue";
import Failure from "./components/Failure.vue";
import Celebrate from "./components/Celebrate.vue";

export default {
  components: {
    appGameCards: GameCard,
    appFailure: Failure,
    appCelebrate: Celebrate,
  },
  data() {
    return {
activeComponent:"app-game-cards"

    };
  },
};
</script>
<style></style>
