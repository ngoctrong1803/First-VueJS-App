// create Vue App
// const app = Vue.createApp({
//   template: "<h1>template of the page</h1>",
// });
// ---------------------------------------
// Data and Template
// const app = Vue.createApp({
//   data() {
//     return {
//       title: "The final empire",
//       author: "Brason",
//       age: 45,
//     };
//   },
// });
//-----------------------------------------
// Click Event
const app = Vue.createApp({
  data() {
    // hold data is used in compoment
    return {
      url: "https:www.google.com",
      books: [
        {
          id: 1,
          title: "The final empire 1",
          author: "Brason 1",
          age: 45,
          isFav: true,
        },
        {
          id: 2,
          title: "The final empire 2",
          author: "Brason 2",
          age: 50,
          isFav: false,
        },
        {
          id: 3,
          title: "The final empire 3",
          author: "Brason 3",
          age: 55,
          isFav: true,
        },
        {
          id: 4,
          title: "The final empire 4",
          author: "Brason 4",
          age: 6,
          isFav: false,
        },
      ],
      dataStatus: {
        isShow: true,
      },
      position: {
        x: 0,
        y: 0,
      },
    };
  },
  methods: {
    // hold function are used in compoment
    changeTitle() {
      this.title = "title is change by changeTitle Function";
    },
    toggleData() {
      this.dataStatus.isShow = !this.dataStatus.isShow;
    },
    handleEvent(e) {
      console.log("event", e, " - ", e.type);
    },
    handleSetPosition(e) {
      (this.position.x = e.offsetX), (this.position.y = e.offsetY);
    },
    handleToggleFavBook(book) {
      console.log(1);
      book.isFav = !book.isFav;
      console.log(book);
    },
  },
  computed: {
    filterBook() {
      return this.books.filter((book) => {
        return book.isFav;
      });
    },
  },
});

app.mount("#app");
