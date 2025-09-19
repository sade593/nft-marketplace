import { defineStore } from 'pinia';

export const useUserStore = defineStore('user', {
  state: () => ({
    username: '',
    email: '',
    isLoggedIn: false
  }),
  actions: {
    signUp(username, email) {
      this.username = username;
      this.email = email;
      this.isLoggedIn = true;
    }
  }
});