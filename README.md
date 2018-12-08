# Blog Posts on GNU TeXmacs

## Guide
### MacOS
```
brew install hugo
```


Clone this repository into your ~/.TeXmacs/progs/convert directory as markdown:

```
mkdir -p ~/.TeXmacs/progs/convert
cd ~/.TeXmacs/progs/convert
git clone https://bitbucket.org/mdbenito/tm2md.git markdown
```

Add the line `(use-modules (convert markdown init-markdown))` to your `my-init-texmacs.scm`.


## References
+ https://bitbucket.org/mdbenito/paperwhy
