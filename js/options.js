var init = function(){
	var _self = this;
	this.defaulturl = 'http://local.photorank.me/api/v1/';
	this.api_url = document.getElementById('api_url');
	this.api_key = document.getElementById('api_key');
	this.save_btn = document.getElementById('btnsave');
	this.resetbtn = document.getElementById('resetoptions');
	this.api_url.value = localStorage['api_url'];
	this.api_key.value = localStorage['api_key'];
	this.api_url.value = (this.api_url.value == 'undefined') ? _self.defaulturl : this.api_url.value;
	this.api_key.value = (this.api_key.value == 'undefined') ? '' : this.api_key.value;


	this.save = function(data){
		localStorage['api_url'] = (data.api_url == '') ? _self.defaulturl : data.api_url;
		localStorage['api_key'] = data.api_key;
	}
	this.save_btn.onclick = function(e){
		_self.save({api_url:_self.api_url.value, api_key:_self.api_key.value});
	}
	this.resetbtn.onclick = function(e){
		_self.api_url.value = _self.defaulturl;
		_self.save({api_url:_self.api_url.value, api_key:_self.api_key.value});
	}
	return {
		update : this.update
	}
}
var olapic = null;
window.onload = function(){ olapic = init(); };