export default {
  name: 'image',
  initialize() {
    alert('alert boxes are annoying!');
	var image = document.getElementById('site-logo');
	image.src = "/plugins/discourse-theme-sample/images/discourse.png";
  }
};