import ProviderCard from './ProviderCard';

const ProviderList = ({ providers }) => {
  if (!providers.length) {
    return (
      <div className="emptyState">
        No providers found
      </div>
    );
  }

  return (
    <div className="providerList">
      {providers.map((provider) => (
        <ProviderCard
          key={provider.id}
          provider={provider}
        />
      ))}
    </div>
  );
};

export default ProviderList;