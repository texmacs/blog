# Blog Posts on GNU TeXmacs

## Setup Guide

Install Hugo.

Clone this repository into your ~/.TeXmacs/progs/convert directory as markdown:

```
mkdir -p ~/.TeXmacs/progs/convert
cd ~/.TeXmacs/progs/convert
git clone https://bitbucket.org/mdbenito/tm2md.git markdown
```

Add the line `(use-modules (convert markdown init-markdown))` to your `my-init-texmacs.scm`.

## How to draft a post
1. Open `tmdocs/hello_texmacs.tm`
2. Modify it and save it as another file, e.g. `another.tm`
3. Convert `tmdocs/another.tm` to `content/post/another.md`
4. Modify the head part of `content/post/another.md`
5. Create a pull request for your changes


## Credits
+ Adapted from https://bitbucket.org/mdbenito/paperwhy
