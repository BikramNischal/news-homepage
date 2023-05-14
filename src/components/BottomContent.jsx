import "../styles/BottomContentStyles.css";


export default function BottomContent() {
  return (
    <div className="bottom-content">
      <div className="news-container">
        <img
          className="trending-news-image"
          src="/assets/images/image-retro-pcs.jpg"
          alt="news image"
        />
        <div className="news-details">
          <h4 className="news-rank">01</h4>
          <h5 className="trending-header">Reviving Retro PCs</h5>
          <p className="trending-sub-header">
            What happens when old PCs are given modern upgrades?
          </p>
        </div>
      </div>
      <div className="news-container">
        <img
          className="trending-news-image"
          src="/assets/images/image-top-laptops.jpg"
          alt="laptop image"
        />
        <div className="news-details">
          <h4 className="news-rank">02</h4>
          <h5 className="trending-header">Top 10 Laptops of 2022</h5>
          <p className="trending-sub-header">
            Our best picks for various needs and budgets.
          </p>
        </div>
      </div>
      <div className="news-container">
        <img
          className="trending-news-image"
          src="/assets/images/image-gaming-growth.jpg"
          alt="console image"
        />
        <div className="news-details">
          <h4 className="news-rank">03</h4>
          <h5 className="trending-header">The Growth of Gaming</h5>
          <p className="trending-sub-header">
            How the pandemic has sparked fresh opportunities.
          </p>
        </div>
      </div>
    </div>
  );
}
