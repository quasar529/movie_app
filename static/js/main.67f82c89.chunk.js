(this.webpackJsonpmovie_app=this.webpackJsonpmovie_app||[]).push([[0],{20:function(e,a,t){e.exports=t(47)},45:function(e,a,t){},46:function(e,a,t){},47:function(e,a,t){"use strict";t.r(a);var n=t(0),r=t.n(n),s=t(13),i=t.n(s),m=t(3),o=t.n(m),c=t(14),l=t(15),u=t(16),d=t(19),v=t(18),p=t(17),g=t.n(p),y=t(2),f=t.n(y);t(45);function _(e){e.id;var a=e.year,t=e.title,n=e.summary,s=e.poster,i=e.genres;return r.a.createElement("div",{className:"movie"},r.a.createElement("img",{src:s,alt:t,title:t}),r.a.createElement("div",{className:"movie_data"},r.a.createElement("h3",{className:"movie__title"},t),r.a.createElement("h5",{className:"movie__year"},a),r.a.createElement("ul",{className:"genres"},i?i.map((function(e,a){return r.a.createElement("li",{key:a,className:"movie__genres"},e)})):"undefined genres"),r.a.createElement("p",{className:"movie__summary"},n.slice(0,150),"...")))}_.protoTypes={id:f.a.number.isRequired,year:f.a.number.isRequired,title:f.a.string.isRequired,summary:f.a.string.isRequired,poster:f.a.string.isRequired,genres:f.a.arrayOf(f.a.string).isRequired};var E=_,h=(t(46),function(e){Object(d.a)(t,e);var a=Object(v.a)(t);function t(){var e;Object(l.a)(this,t);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=a.call.apply(a,[this].concat(r))).state={isLoading:!0,movies:[]},e.getMovies=Object(c.a)(o.a.mark((function a(){var t,n;return o.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,g.a.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");case 2:t=a.sent,n=t.data.data.movies,e.setState({movies:n,isLoading:!1});case 5:case"end":return a.stop()}}),a)}))),e}return Object(u.a)(t,[{key:"componentDidMount",value:function(){this.getMovies()}},{key:"render",value:function(){var e=this.state,a=e.isLoading,t=e.movies;return r.a.createElement("section",{className:"container"},a?r.a.createElement("div",{className:"loader"},r.a.createElement("span",{className:"loader__text"},"Loading...")):r.a.createElement("div",{className:"movies"},t.map((function(e){return r.a.createElement(E,{key:e.id,id:e.id,year:e.year,title:e.title,summary:e.summary,poster:e.medium_cover_image,genres:e.genres})}))))}}]),t}(r.a.Component));i.a.render(r.a.createElement(h,null),document.getElementById("root"))}},[[20,1,2]]]);
//# sourceMappingURL=main.67f82c89.chunk.js.map