import { shallowMount } from '@vue/test-utils';
import HeaderLogged from './index.vue';
import { routes } from '../../router/index';
import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

const mockStore = { currentUser: {} }
jest.mock('../../hooks/useStore.js', () => {
  return () => {
    return mockStore;
  }
});

describe('<HeaderLogged />', () => {
  it('should render header logged correctly', async () => {
    await router.isReady();
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    });

    expect(wrapper.html()).toMatchSnapshot();
  });

  it('should render 3 dots when there is no user logged', async () => {
    await router.isReady();
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    });

    const buttonLogout = wrapper.find('#logout-button');
    
    expect(buttonLogout.text()).toBe('...');
  });

  it('should render user when there is an user logged', async () => {
    await router.isReady();
    mockStore.currentUser.name = 'Amanda';
    
    const wrapper = shallowMount(HeaderLogged, {
      global: {
        plugins: [router]
      }
    });

    const buttonLogout = wrapper.find('#logout-button');
    
    expect(buttonLogout.text()).toBe('Amanda (sair)');
  });
});