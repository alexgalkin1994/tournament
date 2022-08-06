<template>
  <n-card title="Settings" class="settings mt-8">
    <n-form
      ref="formRef"
      :model="settings"
      label-placement="left"
      require-mark-placement="right-hanging"
      label-width="auto"
      :style="{
        maxWidth: '640px',
      }"
    >
      <n-form-item
        class="flex items-stretch"
        label="Return Matches"
        path="returnMatches"
      >
        <n-switch
          v-model:value="settings.returnMatches"
          @update:value="toggleReturnMatches"
        />
      </n-form-item>
    </n-form>
  </n-card>
</template>

<script setup lang="ts">
import useMatchStore from '../store/match';
import { NSwitch, NCard, NForm, NFormItem, FormInst } from 'naive-ui';
import { ref } from 'vue';

const matchStore = useMatchStore();

const formRef = ref<FormInst | null>(null);

const settings = ref({
  returnMatches: false,
});

const toggleReturnMatches = () => {
  settings.value.returnMatches
    ? matchStore.generateReturnMatches()
    : matchStore.removeReturnMatches();
};
</script>

<style scoped>
.settings {
  display: flex;
  flex-direction: column;
}
</style>
