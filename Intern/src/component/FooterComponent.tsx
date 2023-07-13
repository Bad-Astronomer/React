import './FooterComponent.css'

const Footer = () => {
    return (
      <footer className="App-footer">
          <ul>
            <li>
                <h2>Explore</h2>
                <a href="/">&gt; Go Pro</a><br></br>
                <a href="/">&gt; Explore Designs</a><br></br>
                <a href="/">&gt; Create Designs</a>
            </li>
            <li>
                <h2>Explore</h2>
                <a href="/">&gt; Go Pro</a><br></br>
                <a href="/">&gt; Explore Designs</a><br></br>
                <a href="/">&gt; Create Designs</a>
            </li>
            <li>
                <h2>Explore</h2>
                <a href="/">&gt; Go Pro</a><br></br>
                <a href="/">&gt; Explore Designs</a><br></br>
                <a href="/">&gt; Create Designs</a>
            </li>
          </ul>
          <div className="App-red-footer">
            <div className="red-rectangle">
                <p className="text1">&copy; 2018-2022 KJSCE, All Rights Reserved</p>
            </div>
            <div className="maroon-rectangle">
                <p className="text2"><a>https://kjsce.somaiya.edu/en</a></p>
            </div>
          </div>
      </footer>
    );
};

export default Footer;