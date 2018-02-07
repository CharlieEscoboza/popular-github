import fetch from 'axios';

export const state = () => ({
  languages: [
    {id: 0, label: 'java'},
    {id: 1, label: 'javascript'},
    {id: 2, label: 'css'},
    {id: 3, label: 'python'},
    {id: 4, label: 'ruby'}
  ], repos: [],
  loading: {
    isLoading: false
  }
});

export const mutations = {
  setRepos(state, repos) {
    state.repos.splice(0);
    state.repos.push(...repos.map(repo => ({image: repo.owner.avatar_url, name: repo.name, description: repo.description})));
  },
  setLoading(state, payload) {
    state.loading.isLoading = payload;
  }
}

export const actions = {
  async searchRepos({commit}, language) {
    commit('setLoading', true);
    const {data} = await fetch(`https://api.github.com/search/repositories?q={language:%20${language}}`);
    commit('setRepos', data.items);
    commit('setLoading', false);
  }
}
