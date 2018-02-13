var app = new Vue({
    el: '#app',
    data: {
      isActive: false,
      title: 'Vue JS Notepad',
      subtitle: 'Generated from Javascript',
      note: {
        title: '',
        text: ''
      },
      notes: [{
        title: 'Example Note',
					text: 'Here is a nice little example note :)',
        date: new Date(Date.now()).toLocaleString()
      }]
    },
    methods: {
      addNote() {
        let {
          text,
          title
        } = this.note
        
        if (this.note.text.length > 1 && this.note.title.length > 1) {
          this.notes.push({
            text,
            title,
            date: new Date(Date.now()).toLocaleString()
          })
    this.isActive = false;
    this.note.text = "";
    this.note.title = "";
        } else {
          this.isActive = true;
        }
      },
      removeNote(index) {
        this.notes.splice(index, 1)
      }
    }
  })