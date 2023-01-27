include .env

# open vite dev server
.PHONY: dev
dev:
	npx vite

# build vite app with production setting
.PHONY: build
build:
	npx tsc && npx vite build

# preview build result locally
.PHONY: preview
preview:
	npx vite preview

# remove build folder and its content
.PHONY: clean
clean:
	rm -rf $(VITE_BUILD_OUTDIR)

# deploy build result to gitHub repo as branch "gh-pages"
.PHONY: deploy
deploy: build
	cd $(VITE_BUILD_OUTDIR) && \
	git init && \
	git remote -v | grep -w origin || git remote add origin git@github.com:tzynwang/vite-test.git && \
	git branch -m gh-pages && \
	git add -A && \
	git commit -m "[feat] deploy as gh-pages `date +'%Y-%m-%d %H:%M:%S'`" && \
	git push -u origin gh-pages -f

