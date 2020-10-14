<template>
  <div>
    
  </div>
</template>


<!-- testing -->

<script>
export default {
  name: 'app',
  components: {},
  data() {
    return {
      videos: [],
      reformattedSearchString: '',
      api: {
        baseUrl: 'https://www.googleapis.com/youtube/v3/search?',
        part: 'snippet',
        type: 'video',
        order: 'viewCount',
        maxResults: 12,
        q: '',
        key: 'AIzaSyDjM9QhOMm3nKRrzI8TDhcXDPaeqq4UtDA',
        prevPageToken: '',
        nextPageToken: ''
      }
    };
  },
  methods: {}
};
</script>
