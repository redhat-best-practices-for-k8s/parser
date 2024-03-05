build:
	cd html && node build.js
backup-refs:
	mkdir -p backup 
	cat html/index.html | sed -Enr 's/<(link|script)(.*?)(href|src)(=")(https:\/\/.[^"]*?\.(js|css))"(.*)/wget -P backup \5/p'|bash
