function stopVideo() {
  const iframe = document.querySelector('.js-video iframe');
  
	if ( iframe ) {
		var iframeSrc = iframe.src;
		iframe.src = iframeSrc;
	}
}

export { stopVideo };