<template>
    <request-form :msg='sometext'></request-form>
</template>
<script>
import RequestForm from "@/components/RequestForm.vue";

export default {
  components: { RequestForm },
  data() {
    return {
      sometext: "hello from vue app"
    };
  }
};
</script>

