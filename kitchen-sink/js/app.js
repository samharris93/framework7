var $ = Dom7;
var app = new Framework7({
  root: '#app',
  data: function data() {
    return {
      user: {
        firstName: 'Vladimir',
        lastName: 'Kharlampidi',
      },
    };
  },
  on: {
    // routerAjaxStart() {
    //   this.progressbar.show();
    // },
    // routerAjaxComplete() {
    //   this.progressbar.hide();
    // },
    routeChanged: function (to, from) {
      // console.log(to, from)
    },
    // pageBeforeRemove(page) {
    //   console.log('pageBeforeRemove', page.name);
    // },
    // pageBeforeInit(page) {
    //   console.log('pageBeforeInit', page.name);
    // },
    pageInit: function (page) {
      // console.log('pageInit', page);
    },
    // pageBeforeIn(page) {
    //   console.log('pageBeforeIn', page.name, page.direction);
    // },
    // pageAfterIn(page) {
    //   console.log('pageAfterIn', page.name, page.direction);
    // },
    // pageBeforeOut(page) {
    //   console.log('pageBeforeOut', page.name, page.direction);
    // },
    // pageAfterOut(page) {
    //   console.log('pageAfterOut', page.name, page.direction);
    // },
    // init() {
    //   console.log('app init');
    // },
  },

  router: {
    // allowDuplicateUrls: true,
    // pushState: true,
    // stackPages: true,

  },
  routes: [
    // Load page by URL
    {
      path: '/',
      url: 'index.html',
    },
    // Load page by URL
    {
      path: '/about/',
      url: './about.html',
    },
    {
      path: '/news/',
      url: './news.html',
    },
    {
      path: '/services/',
      url: './services.html',
    },
    {
      path: '/component/',
      componentUrl: './component.html',
    },
    {
      path: '/template/',
      templateUrl: './template.html',
      options: {
        context: {
          title: 'Template test',
        },
      },
    },

    // Toolbars
    {
      path: '/toolbar/',
      url: './toolbar.html',
    },
    {
      path: '/tabbar/',
      url: './tabbar.html',
    },
    {
      path: '/tabbar-labels/',
      url: './tabbar-labels.html',
    },
    {
      path: '/tabbar-scrollable/',
      url: './tabbar-scrollable.html',
    },

    // Components
    {
      path: '/progressbar/',
      componentUrl: './progressbar.html',
    },
    {
      path: '/tabs/',
      url: './tabs.html',
    },
    {
      path: '/tabs-routable/',
      url: './tabs-routable.html',
      tabs: [
        {
          path: '/',
          id: 'tab1',
          content: 'Tab 1 Content',
        },
        {
          path: '/tab2/',
          id: 'tab2',
          content: 'Tab 2 Content',
        },
        {
          path: '/tab3/',
          id: 'tab3',
          content: 'Tab 3 Content',
        },
      ],
    },
    {
      path: '/content-block/',
      url: './content-block.html',
    },
    {
      path: '/inputs/',
      url: './inputs.html',
    },
    {
      path: '/list/',
      url: './list.html',
    },
    {
      path: '/cards/',
      url: './cards.html',
    },
    {
      path: '/dialog/',
      componentUrl: './dialog.html',
    },
    {
      path: '/buttons/',
      url: './buttons.html',
    },
    {
      path: '/range/',
      url: './range.html',
    },
    {
      path: '/sortable/',
      url: './sortable.html',
    },
    {
      path: '/swipeout/',
      url: './swipeout.html',
    },
    {
      path: '/toggle/',
      url: './toggle.html',
    },
    {
      path: '/timeline/',
      url: './timeline.html',
    },
    {
      path: '/timeline-vertical/',
      url: './timeline-vertical.html',
    },
    {
      path: '/timeline-horizontal/',
      url: './timeline-horizontal.html',
    },
    {
      path: '/timeline-horizontal-calendar/',
      url: './timeline-horizontal-calendar.html',

    },
    {
      path: '/chips/',
      url: './chips.html',
    },


    // Dynamic + Content
    {
      path: '/blog/:user/:id/',
      url: 'blog.html',
    },
    // Inline Page
    {
      path: '/another-page/',
      name: 'another-page',
    },
    // Page Element
    {
      path: '/another-page/',
      el: document.querySelector('.page'),
    },
    // Template
    {
      path: '/page/',
      template: '<div class="page">{{hello}}</div>',
      context: { hello: 'Hello World!' },
    },
    // Component (For Vue/React)
    {
      path: '/page/',
      component: 'testComponent',
      // component: require('some-page.vue'),
    },
    // Nested Tabs
    {
      path: '/page-with-tabs/',
      tabs: [
        {
          path: '/',
          id: 'tab1',
          // available options: url, component, content, template, async
        },
      ],
    },
    // Async
    {
      path: '/async-page/',
      async(proceed, release) {
        setTimeout(() => {
          proceed({
            url: 'about.html',
          });
        }, 3000);
      },
    },
    // Popup
    {
      path: '/popup/',
      popup: {

      },
    },
  ],
});

var view = app.views.add('.view-main', {
  main: true,
  router: {
    // animateNavBackIcon: 'yes',
    // pushState: true,
  },
});