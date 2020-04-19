import React from 'react'

export default {
  title: '2: Atoms',
}

export const AllHTMLElements = () => (
  <div>
    <h1>🎨 All the HTML elements</h1>
    <h2>Headings</h2>
    <Headings />
    <h2>Typographic elements</h2>
    <Typographic />
    <h2>Code</h2>
    <Code />
    <h2>Quotes</h2>
    <Quotes />
    <h2>Lists</h2>
    <Lists />
    <h2>Tables</h2>
    <Tables />
    <h2>Horizontal rules</h2>
    <Rules />
    <h2>Images</h2>
    <Images />
  </div>
)

export const Headings = () => (
  <div>
    <h1>h1 Heading</h1>
    <h2>h2 Heading</h2>
    <h3>h3 Heading</h3>
    <h4>h4 Heading</h4>
    <h5>h5 Heading</h5>
    <h6>h6 Heading</h6>
  </div>
)

export const Typographic = () => (
  <div>
    <p>
      sdfghjkl,mnbyuiol <br />
      1234567890 <br />
      © ® ™ ˚ § ¢ € $ £ ¥<br />
      + − • × = ≠ ≤ ≥ ÷ ± ∞ ‰ ½ ¼ ¾<br />ƒ œ æ ø þ ß ð
    </p>
    <p>ellipses… you know &hellip; </p>
    <p>en-dash: 18–25 November &ndash; </p>
    <p>
      em-dash: I just met you, and you — squirrel! &mdash; are my best friend.
    </p>
    <p>
      “Smartypants, double quotes” &ldquo; &rdquo; and ‘single quotes’ &lsquo;
      &rsquo;
    </p>
    <p>
      19<sup>th</sup> of September. <br />
      Congrats! You came 1<sup>st</sup>e = mc&sup2;
    </p>
    <p>
      H<sub>2</sub>O, C<sub>21</sub>H<sub>30</sub>O<sub>2</sub>
    </p>
    <p>
      <strong>This is strong text</strong>
      <br />
      <b>This is bold text</b>
      <br />
      <em>This is emphasised text</em>
      <br />
      <i>This is italic text</i>
      <br />
      <del>This is deleted text</del>
      <br />
      <s>This is struckthrough text</s>
      <br />
      <u>This is unarticulated annotated text</u>
    </p>
    <p>
      <a href="http://vanhelbergen.com">link text</a>
    </p>
    <p>
      <a href="http://vanhelbergen.com" title="title text!">
        link with title
      </a>
    </p>
    <p>
      Text with a footnote
      <sup className="footnote-ref">
        <a href="#fn1" id="fnref1">
          [1]
        </a>
      </sup>
      . A second
      <sup className="footnote-ref">
        <a href="#fn2" id="fnref2">
          [2]
        </a>
      </sup>{' '}
      footnote and a reference to the same
      <sup className="footnote-ref">
        <a href="#fn2" id="fnref2:1">
          [2:1]
        </a>
      </sup>{' '}
      footnote.
    </p>
    <p>
      This is <abbr title="Hyper Text Markup Language">HTML</abbr> abbreviation
      example.
    </p>
    <p className="font-sans">
      This is sans serif text. <br /> 1234 <br />
      1/2
    </p>
    <p className="font-mono">
      This is mono-space text. <br /> 1234 <br /> 1/2
    </p>
    <hr />
    <section>
      <ol>
        <li id="fn1">
          <p>
            Footnote <strong>can have markup</strong>
          </p>
          <p>
            and multiple paragraphs. <a href="#fnref1">↩︎</a>
          </p>
        </li>
        <li id="fn2">
          <p>
            Footnote text. <a href="#fnref2">↩︎</a> <a href="#fnref2:1">↩︎</a>
          </p>
        </li>
      </ol>
    </section>
  </div>
)

export const Lists = () => (
  <div>
    <ul>
      <li>A list with</li>
      <li>
        Unordered items
        <ul>
          <li>Sub list</li>
          <li>of unordered</li>
          <li>items</li>
        </ul>
      </li>
      <li>Very easy!</li>
    </ul>
    <ol>
      <li>This is</li>
      <li>
        an ordered
        <ol>
          <li>with</li>
          <li>sub-items!</li>
        </ol>
      </li>
      <li>List</li>
    </ol>
    <dl>
      <dt>A thing</dt>
      <dd>Its definition.</dd>
      <dt>Another thing</dt>
      <dd>And another definition.</dd>
    </dl>
  </div>
)

export const Code = () => (
  <div>
    <p>
      Inline <code>code</code> and keyboard <kbd>⌘</kbd>&nbsp;<kbd>K</kbd>
    </p>
    <p>Block code</p>
    <pre>
      <code className="language-js">
        {`var foo = function(bar) {
  // do something
}

console.log(foo(5))`}
      </code>
    </pre>
  </div>
)

export const Quotes = () => (
  <div>
    <p>
      Bob said, <q>pyjamas</q> but Chris said, <q>kimono</q>.
    </p>
    <blockquote>
      Words. <br />
      Blockquotes can also be nested…
      <blockquote>
        like…
        <blockquote>this.</blockquote>
      </blockquote>
    </blockquote>
  </div>
)

export const Tables = () => (
  <div>
    <table>
      <thead>
        <tr>
          <th>Option</th>
          <th>Description</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>data</td>
          <td>
            path to data files to supply the data that will be passed into
            templates.
          </td>
        </tr>
        <tr>
          <td>engine</td>
          <td>
            engine to be used for processing templates. <br />
            Handlebars is the default.
          </td>
        </tr>
        <tr>
          <td>ext</td>
          <td>extension to be used for dest files.</td>
        </tr>
      </tbody>
    </table>
  </div>
)

export const Rules = () => (
  <div>
    <p>some text with a rule underneath it.</p>
    <hr />
    <p>some text inbetween two rules.</p>
    <hr />
    <p>some text after a rule.</p>
  </div>
)

export const Images = () => (
  <div>
    <p>
      <img src="https://octodex.github.com/images/minion.png" alt="Minion" />
      <img
        src="https://octodex.github.com/images/stormtroopocat.jpg"
        alt="Stormtroopocat"
        title="The Stormtroopocat"
      />
    </p>
    <p>Like links, Images also have a footnote style syntax</p>
    <p>
      <img
        src="https://octodex.github.com/images/dojocat.jpg"
        alt="Alt text"
        title="The Dojocat"
      />
    </p>
  </div>
)
