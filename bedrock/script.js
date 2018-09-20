window.addEventListener("load", function(){
	
	each("button.bedrock, .bedrock-btn", function(value){
		var outer = create("div", "bedrock-btn-outer");
		var inner = create("div", "bedrock-btn-inner");
		inner.innerHTML = value.innerHTML;
		value.innerHTML = "";
		outer.appendChild(inner);
		value.appendChild(outer);
	});
	
	each("input[type=checkbox].bedrock", function(value){
		var checkbox = create("div", "checkbox", "<div class='slider'></div>");
		checkbox.onclick = () => value.click();
		value.parentNode.insertBefore(checkbox, value.nextSibling);
	});
	
	each("input[type=radio].bedrock", function(value){
		var radio = create("div", "radio");
		radio.onclick = () => value.click();
		value.parentNode.insertBefore(radio, value.nextSibling);
	});
	
	each(".dropdown > .dropdown-toggle", function(value){
		var menu = document.getElementById(value.dataset.toggle);
		function close() {
			menu.style.display = "";
			window.removeEventListener("click", close);
		}
		value.onclick = () => {
			menu.style.display = "block";
			menu.style.zIndex = "999";
			menu.style.width = value.offsetWidth - 22 + "px";
			setTimeout(() => window.addEventListener("click", close), 1);
		};
	});
	
	each(".card", function(value){
		value.appendChild(create("div", "card-decoration card-top"));
		value.appendChild(create("div", "card-decoration card-left"));
		value.appendChild(create("div", "card-decoration card-bottom"));
		value.appendChild(create("div", "card-decoration card-right"));
		value.appendChild(create("div", "card-decoration card-top-left"));
		value.appendChild(create("div", "card-decoration card-bottom-left"));
		value.appendChild(create("div", "card-decoration card-bottom-right"));
		value.appendChild(create("div", "card-decoration card-top-right"));
	});
	
	each(".card > ul.tabs > li", function(value){
		value.appendChild(create("div", "card-decoration card-top"));
		value.appendChild(create("div", "card-decoration card-left"));
		value.appendChild(create("div", "card-decoration card-right"));
		value.appendChild(create("div", "card-decoration card-top-left"));
		value.appendChild(create("div", "card-decoration card-top-right"));
	});
	
});

function create(type, classes, html) {
	var ret = document.createElement(type);
	if(classes != undefined) ret.classList = classes;
	if(html != undefined) ret.innerHTML = html;
	return ret;
}

function each(selector, fun) {
	var s = document.querySelectorAll(selector);
	for(var i=0; i<s.length; i++) {
		fun(s[i]);
	}
}
