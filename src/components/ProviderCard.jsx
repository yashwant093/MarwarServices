import './ProviderCard.css';

function ProviderCard({ provider }) {
  return (
    <div className="provider-card">

      <div className="provider-top">

        <div className="provider-info">

          <div className="provider-avatar">
            {provider.name.charAt(0)}
          </div>

          <div className="provider-details">
            <h3>{provider.name}</h3>

            <p className="category">
              {provider.category}
            </p>
          </div>

        </div>

        <div className="rating">
          ⭐ {provider.rating}
        </div>

      </div>

      <div className="provider-location">
        📍 {provider.mohalla}, {provider.city}
      </div>

      {/* Number hidden */}

      <div className="button-group">

        <a
          href={`tel:${provider.phone}`}
          className="call-btn"
        >
          📞 Call Now
        </a>

        <a
          href={`https://wa.me/91${provider.phone}`}
          target="_blank"
          rel="noreferrer"
          className="whatsapp-btn"
        >
          💬 WhatsApp
        </a>

      </div>

    </div>
  );
}

export default ProviderCard;