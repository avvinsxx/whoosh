export default function Intro() {
  return (
    <div style={{ backgroundColor: "#F8FAFF" }}>
      <div>
        <div>
          <h2>Send a parcel</h2>
          <button>1</button>
          <button>2</button>
          <button>3</button>
          <form action="">
            <div>
              <label htmlFor="pickup-location">Pickup location</label>
              <input type="text" placeholder="location" id="pickup-location" />
            </div>
            <div>
              <label htmlFor="drop-location">Drop location</label>
              <input type="text" placeholder="location" id="drop-location" />
            </div>
            <button>Order</button>
            <button>x Clear All</button>
          </form>
        </div>
        <div>
          <h2>Track a package</h2>
          <input type="text" placeholder="Enter code" />
        </div>
      </div>

      <div>
        <h1>Our service started work in New York</h1>
        <p>
          We make delivery exactly at the time you need - we can start to
          fulfill the order a few minutes after it arrives, or we can deliver on
          a specific day and hour.
        </p>
        <div>
          <a href="#">Read more </a>
        </div>
      </div>
    </div>
  );
}
