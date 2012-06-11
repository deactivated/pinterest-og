# pinterest-og

## Summary

Ever wanted more control over the items discovered by
[Pinterest](http://www.pinterest.com) on your site? `pinterest-og` is
a nearly trivial jQuery plugin that will expose OpenGraph image tags
to the Pinterest bookmarklet.

## Usage

Using `pinterest-og` is as simple as including the appropriate
OpenGraph tags and including `pinterest.js`.

    <meta name="og:image" content="/for-pinterest-and-friends-1.png" />
    <meta name="og:image" content="/for-pinterest-and-friends-2.png" />
     
    <script type="text/javascript" src="jquery.min.js"></script>
    <script type="text/javascript" src="pinterest.js"></script>

## Mechanism

`pinterest-og` overrides `document.getElementsByTagName`, which is
used by the Pinterest bookmarklet to discover pinnable content. When
the bookmarklet looks for `embed` tags, `pinterest-og` will instead
return the content specified by the OpenGraph tags.
