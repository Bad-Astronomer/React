import './css/FooterComponent.css';

const FooterComponent = () => {
    return (
      <footer className="App-footer">
          <ul>
            <li>
                <h3>Explore</h3>
                <a href="/">&gt; Go Pro</a><br></br>
                <a href="/">&gt; Explore Designs</a><br></br>
                <a href="/">&gt; Create Designs</a>
            </li>
            <li>
                <h3>Explore</h3>
                <a href="/">&gt; Go Pro</a><br></br>
                <a href="/">&gt; Explore Designs</a><br></br>
                <a href="/">&gt; Create Designs</a>
            </li>
            <li>
                <h3>Explore</h3>
                <a href="/">&gt; Go Pro</a><br></br>
                <a href="/">&gt; Explore Designs</a><br></br>
                <a href="/">&gt; Create Designs</a>
            </li>
          </ul>
          <div className="App-red-footer">
            <div className="red-rectangle">
                <p className="text">&copy; 2018-2022 KJSCE, All Rights Reserved</p>
            </div>
            <div className="maroon-rectangle">
                <p className="text"><a href='https://kjsce.somaiya.edu/en'>https://kjsce.somaiya.edu/en</a></p>
            </div>
          </div>
      </footer>
    );
};

export default FooterComponent;