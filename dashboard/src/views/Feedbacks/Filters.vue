<template>
  
</template>

<script>
import { reactive } from 'vue';
import services from '../../services/index';
import useStore from '../../hooks/useStore';

const labels = {
  all: 'Todos',
  issue: 'Problemas',
  idea: 'Ideias',
  other: 'Outros'
}

const colors = {
  all: 'brand-info',
  issue: 'brand-danger',
  idea: 'brand-warning',
  other: 'brand-graydark'
}

function applyFilterStructure(summary) {
  return Object.keys(summary).reduce((acc, cur) => {
    const currentFilter = {
      label: labels[cur],
      color: colors[cur],
      amount: summary[cur],

    }

    if (cur === 'all') {
      currentFilter.active = true;
    } else {
      currentFilter.type = cur;
    }

    return [ ...acc, currentFilter ];
  }, []);
}

export default {
  async setup() {
    const store = useStore('Global');
    const state = reactive({
      hasError: false,
      filters: [
        { label: null, amount: null }
      ]
    })

    try {
      const { data } = await services.feedbacks.getSummary()

      state.filters = applyFilterStructure(data);
      
    } catch (error) {
      state.hasError = !!error;

      state.filters = applyFilterStructure({ all: 0, issue: 0, idea: 0, other: 0 });
    }

    function handleSelect({ type }) {
      
    }

    return {
      state,
      handleSelect
    }
  }
}
</script>