var setMainContent = function(title, body) {
	var content = document.getElementById('formData');
	if(content){
		content.innerHTML = body;
	}
	var overlayText = document.getElementById('overlayText');
	if(overlayText){
		overlayText.innerHTML = title;
	}
}



var routeBehaviors = {
	register: function() {
		var content = '<form role="form"><div class="form-group">'
					+'<input type="text" class="form-control" id="name" placeholder="Your name" />'
					+'</div>'
					+'<div class="form-group">'
                                        +'<input type="email" class="form-control" id="emailAddress" placeholder="Your email address">' 
                                        +'</div>'
                                        +' <div class="form-group">'
                                        +'<input type="password" class="form-control" id="password" placeholder="Your password">'
                                        +' </div>'
                                        +' <button type="submit" class="btn btn-primary">Sign up</button>'                                                         
                                        +'</form>'
                                        +'<p class="gray">Got an account already? <a href="/login">Log in</a>';
		setMainContent('Register', content);
	 },
	login: function() {
		var content =  '<form role="form"><div class="form-group">'
					+'<input type="email" class="form-control" id="emailAddress" placeholder="Your email address">'
					+'</div>'
					+' <div class="form-group">'
					+'<input type="password" class="form-control" id="password" placeholder="Your password">'
				        +' </div>'
					+' <button type="submit" class="btn btn-primary">Login</button>'
					+'</form>'
					+'<p class="gray">Don\'t have an account? <a href="signup">Sign up</a>';
		setMainContent("Login", content);
	 }
}

var routes = {
	'/register': routeBehaviors.register,
	'/login': routeBehaviors.login
}

var router = Router(routes);
router.configure({html5history: true});
router.init();
