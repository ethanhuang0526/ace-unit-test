var Vue = require('vue');

const app = new Vue({
  el: '#app',
  data: {
    content: {
      students: [
        {
          filename: 'example.php',
          text: ''
        },
      ],
      anwsers: [
        {
          filename: 'example.php',
          text: ''
        }
      ],
      tests: {
        filename: 'test.php',
        text: ''
      }
    }
  },
  components: {
    editor: require('vue2-ace-editor'),
  },
  methods:{
    addFile: function (default_extension) {
      var length = this.content.students.length;
      var new_filename = '';
      if (length == 0) {
        new_filename = 'example' + '.' + extension;
      } else {
        var new_filename = 'file' + parseInt(length + 1) + '.txt';
      }
      var data = {
        filename: new_filename,
        text: ''
      };
      this.content.students.push(data);
      this.content.anwsers.push(data);
    },
    deleteFile: function (index) {
      if (index != 0) {
        this.content.students.splice(index, 1);
        this.content.anwsers.splice(index, 1);
      } else {
        alert('預設檔案不能刪除喔!');
      }
    },
    changeFilename: function (index) {
      if (index != 0) {
        this.content.anwsers[index].filename = this.content.students[index].filename;
      }
    },
    sendResult: function () {
      alert('您輸入的資料 JSON 格式：' + JSON.stringify(this.content));
    },
    editorInit: function () {
      require('brace/mode/html');
      require('brace/mode/javascript');
      require('brace/mode/css');
      require('brace/theme/chrome');
    }
  }
})