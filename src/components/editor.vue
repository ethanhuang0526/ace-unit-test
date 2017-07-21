<template>
  <editor v-model="content" @init="editorInit();" lang="html" theme="chrome" width="500" height="100"></editor>
</template>

<script>
import editor from 'vue2-ace-editor'

export default {
  props: ['content'],
  components: {
    editor
  },
  methods:{
    editorInit:function () {
      require('brace/mode/html');
      require('brace/mode/javascript');
      require('brace/mode/less');
      require('brace/theme/chrome');
    }
  }
}
</script>