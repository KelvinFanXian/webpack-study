function Content() {
	var root = document.getElementById('root');
	var content = document.createElement('div');
	content.innerText = 'content';
	root.append(content);
}

// export default Content;
module.exports = Content;
