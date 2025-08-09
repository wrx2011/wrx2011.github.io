var posts=["2025/08/09/2025-8-9/","2025/08/07/第一个博客 /"];function toRandomPost(){
    pjax.loadUrl('/'+posts[Math.floor(Math.random() * posts.length)]);
  };