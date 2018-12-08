<TeXmacs|1.99.8>

<style|source>

<\body>
  <\active*>
    <\src-title>
      <src-style-file|blog|1.0>

      <src-purpose|Style for posts on GNU TeXmacs>
    </src-title>
  </active*>

  <use-package|generic>

  <\active*>
    <\src-comment>
      Style parameters.
    </src-comment>
  </active*>

  <assign|font|stix>

  <assign|font-base-size|11>

  <assign|math-font|math-stix>

  <\active*>
    <\src-comment>
      Macro definitions.
    </src-comment>
  </active*>

  \;

  <assign|quotation|<\macro|body>
    <\padded>
      <\indent-both|<value|quote-left-indentation>|<value|quote-right-indentation>>
        <surround|<yes-indent>||<em|<arg|body>>>
      </indent-both>
    </padded>
  </macro>>

  <assign|dfn|<macro|body|<strong|<with|font-shape|italic|<arg|body>>>>>

  <assign|doc-title|<macro|x|<\surround|<vspace*|0.5fn>|>
    <doc-title-block|<font-magnify|1.682|<with|math-font-series|bold|font-series|bold|<arg|x>>>>
  </surround>>>

  <assign|render-tag*|<macro|x|<arg|x>>>

  <assign|extra-tag*|<macro|x|, <render-tag*|<arg|x>>>>

  <assign|tags|<xmacro|args|<style-with|src-compact|none|<htab|5mm><with|font-series|bold|Tags:
  ><render-tag*|<arg|args|0>><map-args|extra-tag*|concat|args|1>>>>

  <assign|hugo|<\macro|shortcode|param>
    <verbatim-code|<\surround|{{\<less\> | \<gtr\>}}>
      <arg|shortcode> <arg|param>
    </surround>>
  </macro>>
</body>

<initial|<\collection>
</collection>>