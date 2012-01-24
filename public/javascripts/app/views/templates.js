
Tower.View.cache = {
  'app/views/index': function() {
    var i, _results;
    i = 20;
    _results = [];
    while (i-- > 0) {
      _results.push(text("<blockquote>\n<p>Full Stack Web Framework for Node.js and the Browser.  Minified &amp; Gzipped: 15.7kb</p>\n</blockquote>\n<h2>Generator</h2>\n\n<div class=\"highlight\">\n<pre>tower new my-app\n</pre>\n</div>\n\n\n<h2>Structure</h2>\n\n<p>Here's how you might organize a blog:</p>\n\n<div class=\"highlight\">\n<pre>.\n|-- app\n|   |-- controllers\n|   |   |-- admin\n|   |   |   |-- postsController.coffee\n|   |   |   <span class=\"sb\">`</span>-- usersController.coffee\n|   |   |-- commentsController.coffee\n|   |   |-- postsController.coffee\n|   |   |-- sessionsController.coffee\n|   |   <span class=\"sb\">`</span>-- usersController.coffee\n|   |-- models\n|   |   |-- post.coffee\n|   |   <span class=\"sb\">`</span>-- user.coffee\n|   |-- views\n|   |   |-- admin\n|   |   |   <span class=\"sb\">`</span>-- posts\n|   |   |       |-- _form.coffee\n|   |   |       |-- edit.coffee\n|   |   |       |-- index.coffee\n|   |   |       |-- new.coffee\n|   |   |       |-- show.coffee\n|   |   |-- layouts\n|   |   |   <span class=\"sb\">`</span>-- application.coffee\n|   |   |-- shared\n|   |   <span class=\"sb\">`</span>-- posts\n|   |       |-- index.coffee\n|   |       <span class=\"sb\">`</span>-- show.coffee\n|   <span class=\"sb\">`</span>-- helpers\n|       |-- admin\n|       |   |-- postsHelper.coffee\n|       |   <span class=\"sb\">`</span>-- tagsHelper.coffee\n|       <span class=\"sb\">`</span>-- postsHelper.coffee\n<span class=\"sb\">`</span>-- config\n|    |-- application.coffee\n|    |-- locale\n|        <span class=\"sb\">`</span>-- en.coffee\n|    |-- routes.coffee\n<span class=\"sb\">`</span>-- spec\n|    |-- helper.coffee\n|    |-- models\n|    |   |-- postSpec.coffee\n|    |   |-- userSpec.coffee\n|    <span class=\"sb\">`</span>-- acceptance\n|        |-- login.coffee\n|        |-- signup.coffee\n|        <span class=\"sb\">`</span>-- posts.coffee\n</pre>\n</div>\n\n\n<h2>Application</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"c1\"># config/application.coffee</span>\n<span class=\"k\">class</span> <span class=\"nx\">App</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Application</span>\n  <span class=\"vi\">@config.encoding = </span><span class=\"s\">\"utf-8\"</span>\n  <span class=\"nx\">@config</span><span class=\"p\">.</span><span class=\"nx\">filterParameters</span> <span class=\"o\">+=</span> <span class=\"p\">[</span><span class=\"s\">\"password\"</span><span class=\"p\">,</span> <span class=\"s\">\"password_confirmation\"</span><span class=\"p\">]</span>\n  <span class=\"nx\">@config</span><span class=\"p\">.</span><span class=\"nx\">loadPaths</span> <span class=\"o\">+=</span> <span class=\"p\">[</span><span class=\"s\">\"./themes\"</span><span class=\"p\">]</span>\n\n<span class=\"nv\">global.App = module.exports = </span><span class=\"nx\">App</span>\n</pre>\n</div>\n\n\n<h2>Models</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"k\">class</span> <span class=\"nx\">App</span><span class=\"p\">.</span><span class=\"nx\">Post</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Model</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"title\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"body\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"tags\"</span><span class=\"p\">,</span> <span class=\"nv\">type: </span><span class=\"p\">[</span><span class=\"s\">\"String\"</span><span class=\"p\">],</span> <span class=\"nv\">default: </span><span class=\"p\">[]</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"slug\"</span>\n\n  <span class=\"nx\">@key</span> <span class=\"s\">\"slug\"</span>\n\n  <span class=\"nx\">@belongsTo</span> <span class=\"s\">\"author\"</span><span class=\"p\">,</span> <span class=\"nv\">type: </span><span class=\"s\">\"User\"</span>\n\n  <span class=\"nx\">@hasMany</span> <span class=\"s\">\"comments\"</span><span class=\"p\">,</span> <span class=\"nv\">as: </span><span class=\"s\">\"commentable\"</span>\n  <span class=\"nx\">@hasMany</span> <span class=\"s\">\"commenters\"</span><span class=\"p\">,</span> <span class=\"nv\">through: </span><span class=\"s\">\"comments\"</span><span class=\"p\">,</span> <span class=\"nv\">source: </span><span class=\"s\">\"author\"</span>\n\n  <span class=\"nx\">@before</span> <span class=\"s\">\"validate\"</span><span class=\"p\">,</span> <span class=\"s\">\"slugify\"</span>\n\n  <span class=\"nv\">slugify: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@slug = </span><span class=\"nx\">@title</span><span class=\"p\">.</span><span class=\"nx\">replace</span><span class=\"p\">(</span><span class=\"sr\">/^[a-z0-9]+/g</span><span class=\"p\">,</span> <span class=\"s\">\"-\"</span><span class=\"p\">).</span><span class=\"nx\">toLowerCase</span><span class=\"p\">()</span>\n\n<span class=\"k\">class</span> <span class=\"nx\">App</span><span class=\"p\">.</span><span class=\"nx\">Comment</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Model</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"message\"</span>\n\n  <span class=\"nx\">@belongsTo</span> <span class=\"s\">\"author\"</span><span class=\"p\">,</span> <span class=\"nv\">type: </span><span class=\"s\">\"User\"</span>\n  <span class=\"nx\">@belongsTo</span> <span class=\"s\">\"commentable\"</span><span class=\"p\">,</span> <span class=\"nv\">polymorphic: </span><span class=\"kc\">true</span>\n\n<span class=\"k\">class</span> <span class=\"nx\">App</span><span class=\"p\">.</span><span class=\"nx\">User</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Model</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"firstName\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"lastName\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"email\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"activatedAt\"</span><span class=\"p\">,</span> <span class=\"nv\">type: </span><span class=\"s\">\"Date\"</span><span class=\"p\">,</span> <span class=\"nv\">default: </span><span class=\"o\">-&gt;</span> <span class=\"k\">new</span> <span class=\"nb\">Date</span><span class=\"p\">()</span>\n\n  <span class=\"nx\">@hasOne</span> <span class=\"s\">\"address\"</span><span class=\"p\">,</span> <span class=\"nv\">embed: </span><span class=\"kc\">true</span>\n\n  <span class=\"nx\">@hasMany</span> <span class=\"s\">\"posts\"</span>\n  <span class=\"nx\">@hasmany</span> <span class=\"s\">\"comments\"</span><span class=\"p\">,</span> <span class=\"nv\">through: </span><span class=\"s\">\"posts\"</span>\n\n  <span class=\"nx\">@scope</span> <span class=\"s\">\"thisWeek\"</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span> <span class=\"nx\">@where</span><span class=\"p\">(</span><span class=\"nv\">createdAt: </span><span class=\"s\">\"&gt;=\"</span><span class=\"o\">:</span> <span class=\"o\">-&gt;</span> <span class=\"nx\">require</span><span class=\"p\">(</span><span class=\"s\">'moment'</span><span class=\"p\">)().</span><span class=\"nx\">subtract</span><span class=\"p\">(</span><span class=\"s\">'days'</span><span class=\"p\">,</span> <span class=\"mi\">7</span><span class=\"p\">))</span>\n\n  <span class=\"nx\">@validate</span> <span class=\"s\">\"firstName\"</span><span class=\"p\">,</span> <span class=\"nv\">presence: </span><span class=\"kc\">true</span>\n\n  <span class=\"nx\">@after</span> <span class=\"s\">\"create\"</span><span class=\"p\">,</span> <span class=\"s\">\"welcome\"</span>\n\n  <span class=\"nv\">welcome: </span><span class=\"o\">-&gt;</span>\n    <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Mailer</span><span class=\"p\">.</span><span class=\"nx\">welcome</span><span class=\"p\">(</span><span class=\"nx\">@</span><span class=\"p\">).</span><span class=\"nx\">deliver</span><span class=\"p\">()</span>\n\n<span class=\"k\">class</span> <span class=\"nx\">App</span><span class=\"p\">.</span><span class=\"nx\">Address</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Model</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"street\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"city\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"state\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"zip\"</span>\n  <span class=\"nx\">@field</span> <span class=\"s\">\"coordinates\"</span><span class=\"p\">,</span> <span class=\"nv\">type: </span><span class=\"s\">\"Geo\"</span>\n\n  <span class=\"nx\">@belongsTo</span> <span class=\"s\">\"user\"</span><span class=\"p\">,</span> <span class=\"nv\">embed: </span><span class=\"kc\">true</span>\n</pre>\n</div>\n\n\n<h3>Chainable Scopes, Queries, and Pagination</h3>\n\n<div class=\"highlight\">\n<pre><span class=\"nx\">User</span>\n  <span class=\"p\">.</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"nv\">createdAt: </span><span class=\"s\">\"&gt;=\"</span><span class=\"o\">:</span> <span class=\"nx\">_</span><span class=\"p\">(</span><span class=\"mi\">2</span><span class=\"p\">).</span><span class=\"nx\">days</span><span class=\"p\">().</span><span class=\"nx\">ago</span><span class=\"p\">(),</span> <span class=\"s\">\"&lt;=\"</span><span class=\"o\">:</span> <span class=\"k\">new</span> <span class=\"nb\">Date</span><span class=\"p\">())</span>\n  <span class=\"p\">.</span><span class=\"nx\">within</span><span class=\"p\">(</span><span class=\"nv\">radius: </span><span class=\"mi\">2</span><span class=\"p\">)</span>\n  <span class=\"p\">.</span><span class=\"nx\">desc</span><span class=\"p\">(</span><span class=\"s\">\"createdAt\"</span><span class=\"p\">)</span>\n  <span class=\"p\">.</span><span class=\"nx\">asc</span><span class=\"p\">(</span><span class=\"s\">\"firstName\"</span><span class=\"p\">)</span>\n  <span class=\"p\">.</span><span class=\"nx\">paginate</span><span class=\"p\">(</span><span class=\"nv\">page: </span><span class=\"mi\">5</span><span class=\"p\">)</span>\n  <span class=\"p\">.</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n</pre>\n</div>\n\n\n<h3>Associations</h3>\n\n<div class=\"highlight\">\n<pre><span class=\"nv\">user = </span><span class=\"nx\">User</span><span class=\"p\">.</span><span class=\"nx\">first</span><span class=\"p\">()</span>\n\n<span class=\"c1\"># hasMany \"posts\"</span>\n<span class=\"nv\">posts = </span><span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">posts</span><span class=\"p\">().</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"nv\">title: </span><span class=\"s\">\"First Post\"</span><span class=\"p\">).</span><span class=\"nx\">first</span><span class=\"p\">()</span>\n<span class=\"nv\">post  = </span><span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">posts</span><span class=\"p\">().</span><span class=\"nx\">build</span><span class=\"p\">(</span><span class=\"nv\">title: </span><span class=\"s\">\"A Post!\"</span><span class=\"p\">)</span>\n<span class=\"nv\">post  = </span><span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">posts</span><span class=\"p\">().</span><span class=\"nx\">create</span><span class=\"p\">(</span><span class=\"nv\">title: </span><span class=\"s\">\"A Saved Post!\"</span><span class=\"p\">)</span>\n<span class=\"nv\">posts = </span><span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">posts</span><span class=\"p\">().</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n\n<span class=\"c1\"># hasMany \"comments\", through: \"posts\"</span>\n<span class=\"nv\">comments  = </span><span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">comments</span><span class=\"p\">().</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"nv\">message: </span><span class=\"sr\">/(javascript)/</span><span class=\"p\">).</span><span class=\"nx\">limit</span><span class=\"p\">(</span><span class=\"mi\">10</span><span class=\"p\">).</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n\n<span class=\"c1\"># eager load associations</span>\n<span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">includes</span><span class=\"p\">(</span><span class=\"s\">\"author\"</span><span class=\"p\">).</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"nv\">author: firstName: </span><span class=\"s\">\"=~\"</span><span class=\"o\">:</span> <span class=\"s\">\"Baldwin\"</span><span class=\"p\">).</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n<span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">includes</span><span class=\"p\">(</span><span class=\"s\">\"author\"</span><span class=\"p\">).</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"s\">\"author.firstName\"</span><span class=\"o\">:</span> <span class=\"s\">\"=~\"</span><span class=\"o\">:</span> <span class=\"s\">\"Baldwin\"</span><span class=\"p\">).</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n<span class=\"nx\">User</span><span class=\"p\">.</span><span class=\"nx\">includes</span><span class=\"p\">(</span><span class=\"s\">\"posts\"</span><span class=\"p\">).</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"s\">\"posts.title\"</span><span class=\"o\">:</span> <span class=\"s\">\"Welcome\"</span><span class=\"p\">).</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n</pre>\n</div>\n\n\n<h3>Validations</h3>\n\n<div class=\"highlight\">\n<pre><span class=\"nv\">user = </span><span class=\"k\">new</span> <span class=\"nx\">User</span>\n<span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">save</span><span class=\"p\">()</span> <span class=\"c1\">#=&gt; false</span>\n<span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">errors</span> <span class=\"c1\">#=&gt; {\"email\": [\"Email must be present\"]}</span>\n<span class=\"nv\">user.email  = </span><span class=\"s\">\"me@gmail.com\"</span>\n<span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">save</span><span class=\"p\">()</span> <span class=\"c1\">#=&gt; true</span>\n<span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">errors</span> <span class=\"c1\">#=&gt; {}</span>\n</pre>\n</div>\n\n\n<h2>Routes</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"c1\"># config/routes.coffee</span>\n<span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Route</span><span class=\"p\">.</span><span class=\"nx\">draw</span> <span class=\"o\">-&gt;</span>\n  <span class=\"nx\">@match</span> <span class=\"s\">\"/login\"</span><span class=\"p\">,</span> <span class=\"s\">\"sessions</span><span class=\"err\">#</span><span class=\"s\">new\"</span><span class=\"p\">,</span> <span class=\"nv\">via: </span><span class=\"s\">\"get\"</span><span class=\"p\">,</span> <span class=\"nv\">as: </span><span class=\"s\">\"login\"</span>\n  <span class=\"nx\">@match</span> <span class=\"s\">\"/logout\"</span><span class=\"p\">,</span> <span class=\"s\">\"sessions</span><span class=\"err\">#</span><span class=\"s\">destroy\"</span><span class=\"p\">,</span> <span class=\"nv\">via: </span><span class=\"s\">\"get\"</span><span class=\"p\">,</span> <span class=\"nv\">as: </span><span class=\"s\">\"logout\"</span>\n\n  <span class=\"nx\">@resources</span> <span class=\"s\">\"posts\"</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n    <span class=\"nx\">@resources</span> <span class=\"s\">\"comments\"</span>\n\n  <span class=\"nx\">@namespace</span> <span class=\"s\">\"admin\"</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n    <span class=\"nx\">@resources</span> <span class=\"s\">\"users\"</span>\n    <span class=\"nx\">@resources</span> <span class=\"s\">\"posts\"</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n      <span class=\"nx\">@resources</span> <span class=\"s\">\"comments\"</span>\n\n  <span class=\"nx\">@constraints</span> <span class=\"nv\">subdomain: </span><span class=\"sr\">/^api$/</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n    <span class=\"nx\">@resources</span> <span class=\"s\">\"posts\"</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n      <span class=\"nx\">@resources</span> <span class=\"s\">\"comments\"</span>\n\n  <span class=\"nx\">@match</span> <span class=\"s\">\"(/*path)\"</span><span class=\"p\">,</span> <span class=\"nv\">to: </span><span class=\"s\">\"application</span><span class=\"err\">#</span><span class=\"s\">index\"</span><span class=\"p\">,</span> <span class=\"nv\">via: </span><span class=\"s\">\"get\"</span>\n</pre>\n</div>\n\n\n<p>Routes are really just models, <code>Tower.Route</code>.  You can add and remove and search them however you like:</p>\n\n<div class=\"highlight\">\n<pre><span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Route</span><span class=\"p\">.</span><span class=\"nx\">where</span><span class=\"p\">(</span><span class=\"nv\">pattern: </span><span class=\"s\">\"=~\"</span><span class=\"o\">:</span> <span class=\"s\">\"/posts\"</span><span class=\"p\">).</span><span class=\"nx\">first</span><span class=\"p\">()</span>\n</pre>\n</div>\n\n\n<h2>Views</h2>\n\n<h3>Forms</h3>\n\n<div class=\"highlight\">\n<pre><span class=\"c1\"># app/views/posts/new.coffee</span>\n<span class=\"nx\">formFor</span> <span class=\"nx\">@post</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n  <span class=\"nx\">fieldset</span> <span class=\"o\">-&gt;</span>\n    <span class=\"nx\">legend</span> <span class=\"s\">\"Basic Info\"</span>\n    <span class=\"nx\">field</span> <span class=\"s\">\"title\"</span>\n    <span class=\"nx\">field</span> <span class=\"s\">\"body\"</span><span class=\"p\">,</span> <span class=\"nv\">as: </span><span class=\"s\">\"text\"</span>\n  <span class=\"nx\">submit</span> <span class=\"s\">\"Save\"</span>\n</pre>\n</div>\n\n\n<h3>Tables</h3>\n\n<div class=\"highlight\">\n<pre><span class=\"c1\"># app/views/posts/index.coffee</span>\n<span class=\"nx\">tableFor</span> <span class=\"nx\">@posts</span><span class=\"p\">,</span> <span class=\"o\">-&gt;</span>\n  <span class=\"nx\">thead</span> <span class=\"o\">-&gt;</span>\n    <span class=\"nx\">tcell</span> <span class=\"s\">\"Title\"</span>\n    <span class=\"nx\">tcell</span> <span class=\"s\">\"Author\"</span>\n  <span class=\"nx\">tbody</span> <span class=\"o\">-&gt;</span>\n    <span class=\"k\">for</span> <span class=\"nx\">post</span> <span class=\"k\">in</span> <span class=\"nx\">@posts</span>\n      <span class=\"nx\">trow</span> \n        <span class=\"nx\">tcell</span> <span class=\"nx\">post</span><span class=\"p\">.</span><span class=\"nx\">title</span>\n        <span class=\"nx\">tcell</span> <span class=\"nx\">post</span><span class=\"p\">.</span><span class=\"nx\">author</span><span class=\"p\">.</span><span class=\"nx\">name</span>\n  <span class=\"nx\">tfoot</span> <span class=\"o\">-&gt;</span>\n    <span class=\"nx\">pagination</span> <span class=\"nx\">@posts</span>\n</pre>\n</div>\n\n\n<p>The default templating engine is <a href=\"http://coffeekup.org/\">CoffeeKup</a>, which is pure coffeescript.  It's much more powerful than Jade, and it's just as performant if not more so.  You can set Jade or any other templating engine as the default by setting <code>Tower.View.engine = \"jade\"</code> in <code>config/application</code>.  Tower uses <a href=\"http://github.com/viatropos/shift.js\">Shift.js</a>, which is a normalized interface to most of the Node.js templating languages.</p>\n\n<h2>Controllers</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"k\">class</span> <span class=\"nx\">PostsController</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Controller</span>\n  <span class=\"nv\">index: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@posts = </span><span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">all</span><span class=\"p\">()</span>\n\n  <span class=\"k\">new</span><span class=\"o\">:</span> <span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@post = </span><span class=\"k\">new</span> <span class=\"nx\">Post</span>\n\n  <span class=\"nv\">create: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@post = </span><span class=\"k\">new</span> <span class=\"nx\">Post</span><span class=\"p\">(</span><span class=\"nx\">@params</span><span class=\"p\">.</span><span class=\"nx\">post</span><span class=\"p\">)</span>\n\n    <span class=\"k\">super</span> <span class=\"nf\">(success, failure) -&gt;</span>\n      <span class=\"nx\">@success</span><span class=\"p\">.</span><span class=\"nx\">html</span> <span class=\"o\">-&gt;</span> <span class=\"nx\">@render</span> <span class=\"s\">\"posts/edit\"</span>\n      <span class=\"nx\">@success</span><span class=\"p\">.</span><span class=\"nx\">json</span> <span class=\"o\">-&gt;</span> <span class=\"nx\">@render</span> <span class=\"nv\">text: </span><span class=\"s\">\"success!\"</span>\n      <span class=\"nx\">@failure</span><span class=\"p\">.</span><span class=\"nx\">html</span> <span class=\"o\">-&gt;</span> <span class=\"nx\">@render</span> <span class=\"nv\">text: </span><span class=\"s\">\"Error\"</span><span class=\"p\">,</span> <span class=\"nv\">status: </span><span class=\"mi\">404</span>\n      <span class=\"nx\">@failure</span><span class=\"p\">.</span><span class=\"nx\">json</span> <span class=\"o\">-&gt;</span> <span class=\"nx\">@render</span> <span class=\"nv\">text: </span><span class=\"s\">\"Error\"</span><span class=\"p\">,</span> <span class=\"nv\">status: </span><span class=\"mi\">404</span>\n\n  <span class=\"nv\">show: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@post = </span><span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">find</span><span class=\"p\">(</span><span class=\"nx\">@params</span><span class=\"p\">.</span><span class=\"nx\">id</span><span class=\"p\">)</span>\n\n  <span class=\"nv\">edit: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@post = </span><span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">find</span><span class=\"p\">(</span><span class=\"nx\">@params</span><span class=\"p\">.</span><span class=\"nx\">id</span><span class=\"p\">)</span>\n\n  <span class=\"nv\">update: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@post = </span><span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">find</span><span class=\"p\">(</span><span class=\"nx\">@params</span><span class=\"p\">.</span><span class=\"nx\">id</span><span class=\"p\">)</span>\n\n  <span class=\"nv\">destroy: </span><span class=\"o\">-&gt;</span>\n    <span class=\"vi\">@post = </span><span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">find</span><span class=\"p\">(</span><span class=\"nx\">@params</span><span class=\"p\">.</span><span class=\"nx\">id</span><span class=\"p\">)</span>\n</pre>\n</div>\n\n\n<p>Actually, all that's built in!  So for the simple case you don't even need to write anything in your controllers (skinny controllers, fat models).</p>\n\n<h2>Mailers</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"k\">class</span> <span class=\"nx\">App</span><span class=\"p\">.</span><span class=\"nx\">Notification</span> <span class=\"k\">extends</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">Mailer</span>\n  <span class=\"c1\"># app/views/mailers/welcome.coffee template</span>\n  <span class=\"vi\">@welcome: </span><span class=\"nf\">(user) -&gt;</span>\n    <span class=\"nx\">@mail</span> <span class=\"nv\">to: </span><span class=\"nx\">user</span><span class=\"p\">.</span><span class=\"nx\">email</span><span class=\"p\">,</span> <span class=\"nv\">from: </span><span class=\"s\">\"me@gmail.com\"</span>\n</pre>\n</div>\n\n\n<h2>Internationalization</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"nv\">en:</span>\n  <span class=\"nv\">hello: </span><span class=\"s\">\"world\"</span>\n  <span class=\"nv\">forms:</span>\n    <span class=\"nv\">titles:</span>\n      <span class=\"nv\">signup: </span><span class=\"s\">\"Signup\"</span>\n  <span class=\"nv\">pages:</span>\n    <span class=\"nv\">titles:</span>\n      <span class=\"nv\">home: </span><span class=\"s\">\"Welcome to %{site}\"</span>\n  <span class=\"nv\">posts:</span>\n    <span class=\"nv\">comments:</span>\n      <span class=\"nv\">none: </span><span class=\"s\">\"No comments\"</span>\n      <span class=\"nv\">one: </span><span class=\"s\">\"1 comment\"</span>\n      <span class=\"nv\">other: </span><span class=\"s\">\"%{count} comments\"</span>\n  <span class=\"nv\">messages:</span>\n    <span class=\"nv\">past:</span>\n      <span class=\"nv\">none: </span><span class=\"s\">\"You never had any messages\"</span>\n      <span class=\"nv\">one: </span><span class=\"s\">\"You had 1 message\"</span>\n      <span class=\"nv\">other: </span><span class=\"s\">\"You had %{count} messages\"</span>\n    <span class=\"nv\">present:</span>\n      <span class=\"nv\">one: </span><span class=\"s\">\"You have 1 message\"</span>\n    <span class=\"nv\">future:</span>\n      <span class=\"nv\">one: </span><span class=\"s\">\"You might have 1 message\"</span>\n</pre>\n</div>\n\n\n<h2>Helpers</h2>\n\n<p>Since all of the controller/routing code is available on the client, you can go directly through that system just like you would the server.</p>\n\n<div class=\"highlight\">\n<pre><span class=\"c1\"># Just request the url, and let it do it's thing</span>\n<span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">get</span> <span class=\"s\">'/posts'</span>\n\n<span class=\"c1\"># Same thing, this time passing parameters</span>\n<span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">get</span> <span class=\"s\">'/posts'</span><span class=\"p\">,</span> <span class=\"nv\">createdAt: </span><span class=\"s\">\"2011-10-26..2011-10-31\"</span>\n\n<span class=\"c1\"># Dynamic</span>\n<span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">urlFor</span><span class=\"p\">(</span><span class=\"nx\">Post</span><span class=\"p\">.</span><span class=\"nx\">first</span><span class=\"p\">())</span> <span class=\"c1\">#=&gt; \"/posts/the-id\"</span>\n<span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">navigate</span> <span class=\"nx\">Tower</span><span class=\"p\">.</span><span class=\"nx\">urlFor</span><span class=\"p\">(</span><span class=\"nx\">post</span><span class=\"p\">)</span>\n</pre>\n</div>\n\n\n<p>Those methods pass through the router and client-side middleware so you have access to <code>request</code> and <code>response</code> objects like you would on the server.</p>\n\n<h2>Middleware</h2>\n\n<p>It's built on <a href=\"http://github.com/sencha/connect\">connect</a>, so you can use any of the middleware libs out there.</p>\n\n<h2>Assets</h2>\n\n<div class=\"highlight\">\n<pre><span class=\"c1\"># config/assets.coffee</span>\n<span class=\"nv\">Tower.assets =</span>\n  <span class=\"nv\">javascripts:</span>\n    <span class=\"nv\">vendor: </span><span class=\"p\">[</span>\n      <span class=\"s\">\"/vendor/javascripts/jquery.js\"</span>\n      <span class=\"s\">\"/vendor/javascripts/underscore.js\"</span>\n      <span class=\"s\">\"/vendor/javascripts/socket.io\"</span>\n      <span class=\"s\">\"/vendor/javascripts/tower.js\"</span>\n    <span class=\"p\">]</span>\n\n    <span class=\"nv\">lib: </span><span class=\"p\">[</span>\n      <span class=\"s\">\"/lib/grid.js\"</span>\n      <span class=\"s\">\"/lib/profiler.js\"</span>\n    <span class=\"p\">]</span>\n\n    <span class=\"nv\">application: </span><span class=\"p\">[</span>\n      <span class=\"s\">\"/app/models/post.js\"</span>\n      <span class=\"s\">\"/app/models/comment.js\"</span>\n    <span class=\"p\">]</span>\n\n  <span class=\"nv\">stylesheets:</span>\n    <span class=\"nv\">vendor: </span><span class=\"p\">[</span>\n      <span class=\"s\">\"/vendor/stylesheets/reset.css\"</span>\n    <span class=\"p\">]</span>\n    <span class=\"nv\">application: </span><span class=\"p\">[</span>\n      <span class=\"s\">\"/app/assets/stylesheets/application.css\"</span>\n      <span class=\"s\">\"/app/assets/stylesheets/theme.css\"</span>\n    <span class=\"p\">]</span>\n</pre>\n</div>\n\n\n<p>All assets are read from <code>/public</code>, which is the compiled output of everything in <code>/app</code>, <code>/lib</code>, <code>/vendor</code>, and wherever else you might put things.  The default is to use stylus for css in <code>/app/assets/stylesheets</code>.</p>\n\n<h3>Minify and Gzip</h3>\n\n<div class=\"highlight\">\n<pre>cake assets:compile\n</pre>\n</div>\n\n\n<h3>Push to S3</h3>\n\n<div class=\"highlight\">\n<pre>cake assets:publish\n</pre>\n</div>\n\n\n<h2>Test, Develop, Minify</h2>\n\n<div class=\"highlight\">\n<pre>cake spec\ncake coffee\ncake minify\n</pre>\n</div>\n\n\n<h2>License</h2>\n\n<p>(The MIT License)</p>\n\n<p>Copyright © 2012 <a href=\"http://twitter.com/viatropos\">Lance Pollard</a> &lt;<a href=\"mailto:lancejpollard@gmail.com\">lancejpollard@gmail.com</a>&gt;</p>\n\n<p>Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the 'Software'), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:</p>\n\n<p>The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.</p>\n\n<p>THE SOFTWARE IS PROVIDED 'AS IS', WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.</p>"));
    }
    return _results;
  },
  'app/views/layouts/application': function() {
    doctype(5);
    return html(function() {
      head(function() {
        return partial("shared/meta");
      });
      body({
        role: "application"
      }, function() {
        if (hasContentFor("templates")) yields("templates");
        nav({
          id: "navigation",
          role: "navigation"
        }, function() {
          return div({
            "class": "frame"
          }, function() {
            return partial("shared/navigation");
          });
        });
        header({
          id: "header",
          role: "banner"
        }, function() {
          return div({
            "class": "frame"
          }, function() {
            return partial("shared/header");
          });
        });
        section({
          id: "body",
          role: "main"
        }, function() {
          return div({
            "class": "frame"
          }, function() {
            yields("body");
            return aside({
              id: "sidebar",
              role: "complementary"
            }, function() {
              if (hasContentFor("sidebar")) return yields("sidebar");
            });
          });
        });
        return footer({
          id: "footer",
          role: "contentinfo"
        }, function() {
          return div({
            "class": "frame"
          }, function() {
            return partial("shared/footer");
          });
        });
      });
      if (hasContentFor("popups")) {
        aside({
          id: "popups"
        }, function() {
          return yields("popups");
        });
      }
      if (hasContentFor("bottom")) return yields("bottom");
    });
  },
  'app/views/posts/_form': function() {
    return formFor(this.post, function(f) {
      f.fieldset(function(fields) {
        fields.field("title", {
          as: "string"
        });
        return fields.field("body", {
          as: "string"
        });
      });
      return f.fieldset(function(fields) {
        return fields.submit("Submit");
      });
    });
  },
  'app/views/posts/_item': function() {
    return li({
      "class": "undefined"
    }, function() {
      header({
        "class": "header"
      }, function() {
        return h3(this.post.toLabel());
      });
      dl({
        "class": "content"
      }, function() {
        dt("Title:");
        dd(this.post.title);
        dt("Body:");
        return dd(this.post.body);
      });
      return footer({
        "class": "footer"
      }, function() {
        return menu(function() {
          menuItem("Edit", editPostPath(this.post));
          return menuItem("Back", postsPath);
        });
      });
    });
  },
  'app/views/posts/_list': function() {
    return ol({
      "class": "posts"
    }, function() {
      return partial("item", {
        collection: this.posts
      });
    });
  },
  'app/views/posts/_table': function() {
    return tableFor("users", function(t) {
      t.head(function() {
        return t.row(function() {
          t.cell("title", {
            sort: true
          });
          t.cell("body", {
            sort: true
          });
          t.cell();
          t.cell();
          return t.cell();
        });
      });
      t.body(function() {
        var post, _i, _len, _ref, _results;
        _ref = this.posts;
        _results = [];
        for (_i = 0, _len = _ref.length; _i < _len; _i++) {
          post = _ref[_i];
          _results.push(t.row(function() {
            t.cell(post.get("title"));
            t.cell(post.get("body"));
            t.cell(linkTo('Show', post));
            t.cell(linkTo('Edit', editPostPath(post)));
            return t.cell(linkTo('Destroy', post, {
              method: "delete"
            }));
          }));
        }
        return _results;
      });
      return linkTo('New Post', newPostPath());
    });
  },
  'app/views/posts/edit': function() {
    title("Editing Post");
    return partial("form");
  },
  'app/views/posts/index': function() {
    title("Listing posts");
    return partial("table");
  },
  'app/views/posts/new': function() {
    title("New Post");
    return partial("form");
  },
  'app/views/posts/show': function() {
    title("Post " + (this.post.toLabel()));
    return dl({
      "class": "content"
    }, function() {
      dt("Title:");
      dd(this.post.title);
      dt("Body:");
      return dd(this.post.body);
    });
  },
  'app/views/shared/_footer': function() {
    return cite({
      "class": "copyright"
    }, function() {
      return "&copy; " + (linkTo("Lance Pollard", "lancejpollard@gmail.com")) + ". 2011.";
    });
  },
  'app/views/shared/_header': function() {
    return h1({
      id: "title"
    }, function() {
      return t("title");
    });
  },
  'app/views/shared/_meta': function() {
    meta({
      charset: "utf-8"
    });
    title(t("title"));
    meta({
      name: "description",
      content: t("description")
    });
    meta({
      name: "keywords",
      content: t("keywords")
    });
    meta({
      name: "robots",
      content: t("robots")
    });
    meta({
      name: "author",
      content: t("author")
    });
    csrfMetaTag();
    appleViewportMetaTag({
      width: "device-width",
      max: 1,
      scalable: false
    });
    stylesheetTag("http://fonts.googleapis.com/css?family=Forum");
    stylesheets("lib", "vendor", "application");
    javascriptTag("https://ajax.googleapis.com/ajax/libs/jquery/1.7.1/jquery.min.js");
    javascripts("vendor", "lib", "application");
    if (Tower.env === "development") javascripts("development");
    return contentFor("bottom", function() {
      return javascripts("bottom");
    });
  },
  'app/views/shared/_navigation': function() {
    return ul;
  },
  'app/views/shared/_sidebar': function() {}
};