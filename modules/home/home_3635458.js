MVC.addView("home",function(){var e=$("#app"),d='<div class="inner module"><div class="banner"></div><div class="news"></div><div class="image"></div></div>';return e.html(d),e}).addCtrl("home",function(e,d,a){d.create("home"),$.get("data/home.json",function(d){d&&0===d.errno&&(e.add("home",d.data),a.fire("homeComplete"))})});