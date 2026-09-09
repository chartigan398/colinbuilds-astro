/* Adapted from Nicky Case, The Evolution of Trust (CC0). Native keyboard controls; audio removed. */
function Button(config){

	var self = this;
	self.id = config.id;
	self.config = config;

	// Create DOM
	var button = document.createElement("button");
	button.type = "button";
	button.className = "object";
	button.classList.add("button");
	if(config.size) button.setAttribute("size", config.size);
	self.dom = button;

	// TOOLTIP?
	if(config.tooltip){
		self.dom.style.width = 190;
		self.dom.style.height = 55;
		self.dom.style.position = "absolute";
		self.dom.setAttribute("data-balloon-length", "large");
		self.dom.setAttribute("data-balloon", Words.get(config.tooltip));
		self.dom.setAttribute("data-balloon-pos", "left");
	}

	// BG
	var bg = document.createElement("span");
	bg.className = "background";
	var text = document.createElement("span");
	text.className = "text";
	var hitbox = document.createElement("span");
	hitbox.className = "hitbox";
	button.appendChild(bg);
	button.appendChild(text);
	button.appendChild(hitbox);

	// Customize DOM
	button.style.left = config.x+"px";
	button.style.top = config.y+"px";
	self.setText = function(text_id){
		var words = Words.get(text_id);
		if(config.uppercase) words = words.toUpperCase();
		self.setText2(words);
	};
	self.setText2 = function(words){
		text.innerHTML = words;
	};
	self.setText(config.text_id);

	// On hover...
	button.onmouseover = function(){
		if(self.active) button.setAttribute("hover","yes");
	};
	button.onmouseout = function(){
		if(self.active) button.removeAttribute("hover");
	};

	// On click...
	button.onclick = function(){

		if(self.active){

			// Actual Logic
			if(config.onclick) config.onclick();
			if(config.message) publish(config.message);

		}

	};

	// Activate/Deactivate
	self.active = true;
	self.activate = function(){
		self.active = true;
		button.removeAttribute("deactivated");
	};
	self.deactivate = function(){
		self.active = false;
		button.disabled = true;
		button.setAttribute("deactivated","yes");
		button.removeAttribute("hover");
	};
	if(config.active===undefined) config.active=true;
	if(!config.active) self.deactivate();

	// Listeners!
	if(self.id){
		listen(self, self.id+"/activate", self.activate);
		listen(self, self.id+"/deactivate", self.deactivate);
	}

	// Add & Remove
	self.add = function(){ _add(self); };
	self.remove = function(){
		unlisten(self);
		_remove(self);
	};

}