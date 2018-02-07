<template>
  <div class="pa4 wrapper">
    <ul class="list pl0 measure center mv4">
      <li v-for="language in languages" :key="language.id" class="lh-copy pv3 b-0">
        <button type="button" name="button" @click="searchRepos(language.label)" class="f6 grow no-underline br-pill ba bw2 ph3 pv2 mb2 dib light-purple">
          {{language.label}}
        </button>
      </li>
    </ul>

    <span v-if="loading" class="spinner"></span>

    <article v-else v-for="repo in repos" :key="repo.name" class="mw5 center bg-white br3 pa3 pa4-ns mv3 ba b--black-10">
      <div class="tc">
        <img :src="repo.image" class="br-100 h4 w4 dib ba b--black-05 pa2" title="Photo of a kitty staring at you">
        <h1 class="f3 mb2">{{repo.name}}</h1>
        <h2 class="f5 fw4 gray mt0">{{repo.description}}</h2>
      </div>
    </article>
  </div>
</template>

<script>
  import {mapState, mapMutations, mapActions} from 'vuex';

  export default {
    computed: {
      ...mapState({
        languages: state => state.languages || [],
        repos: state => state.repos || [],
        loading: state => state.loading.isLoading || false
      })
    },
    methods: {
      ...mapActions([
        'searchRepos'
      ])
    }
  }
</script>
