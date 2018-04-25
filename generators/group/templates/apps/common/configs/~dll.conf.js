module.exports = [
    'vue',
    'jquery',
    'vue-router',
    'vuex',
    'vuex-persistedstate',

    // https://github.com/vuejs/vuex/issues/451
    // https://github.com/vuejs/vuex/issues/383
    'core-js/fn/promise',
    'normalizr',
    'localforage',
    <% if (platform === 'PC') { %>
    'iview',
    'iview/dist/styles/iview.css',<% } %>
    <% if (platform === 'mobile') { %>
    'mint-ui',
    'mint-ui/lib/style.css',<% } %>
    <% if (components.indexOf('echarts') !== -1) { %>'echarts',<% } %>
    <% if (components.indexOf('moment') !== -1) { %>'moment',<% } %>
    <% if (components.indexOf('url-parse') !== -1) { %>'url-parse',<% } %>
    <% if (components.indexOf('js-cookie') !== -1) { %>'js-cookie',<% } %>
    <% if (components.indexOf('normalize.css') !== -1) { %>'normalize.css',<% } %>
    'util'
];
