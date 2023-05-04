export default function Sidebar() {
  return (
    <aside className="new-news-container">
      <h2 className="new-news-main-header" >New</h2>
      <div className="new-news-list">
        <div className="new-news">
          <h4 className="new-news-header">Hydrogen VS Electric Cars</h4>
          <p className="new-news-sub-header">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
        </div>
        <div className="new-news">
          <h4 className="new-news-header">The Downsides of AI Artistry </h4>
          <p className="new-news-sub-header">
            What are the possible adverse effects of on-demand AI image
            generation?
          </p>
        </div>
        <div className="new-news">
          <h4 className="new-news-header"> Is VC Funding Drying Up?</h4>
          <p className="new-news-sub-header">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </aside>
  );
}
