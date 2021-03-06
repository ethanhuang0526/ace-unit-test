var Vue = require('vue');

const app = new Vue({
  el: '#app',
  data: {
    content: {
      user_files: [
        {
          filename: 'exercise.py',
          text: '',
          extension: 'python'
        },
      ],
      anwsers: [
        {
          filename: 'exercise.py',
          text: '',
          extension: 'python'
        }
      ],
      test_files: {
        filename: 'evaluate.py',
        text: '',
        extension: 'python'
      }
    }
  },
  components: {
    editor: require('vue2-ace-editor'),
  },
  methods:{
    addFile: function (default_extension) {
      var length = this.content.user_files.length;
      var new_filename = '';
      if (length == 0) {
        new_filename = 'example' + '.' + extension;
      } else {
        var new_filename = 'file' + parseInt(length + 1) + '.txt';
      }
      var data = function() {
        return {
          filename: new_filename,
          text: '',
          extension: 'text'
        }
      };
      this.content.user_files.push(data());
      this.content.anwsers.push(data());
    },
    deleteFile: function (index) {
      if (index != 0) {
        this.content.user_files.splice(index, 1);
        this.content.anwsers.splice(index, 1);
      } else {
        alert('預設檔案不能刪除喔!');
      }
    },
    changeFilename: function (index) {
      if (index != 0) {
        this.content.anwsers[index].filename = this.content.user_files[index].filename;
      }
    },
    sendResult: function () {
      alert('您輸入的資料 JSON 格式：' + JSON.stringify(this.content));
    },
    editorInit: function () {
      require('brace/mode/html');
      require('brace/mode/javascript');
      require('brace/mode/css');
      require('brace/mode/php');
      require('brace/mode/python');
      require('brace/mode/text');
      require('brace/theme/chrome');
    }
  }
})