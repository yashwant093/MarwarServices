import React, {
  useState,
  useEffect,
  useMemo
} from 'react';

import {
  mockProviders,
  mohallas,
  categories
} from './data/mockData';

import Header from './components/Header';
import FilterBar from './components/FilterBar';
import CategoryGrid from './components/CategoryGrid';
import ProviderCard from './components/ProviderCard';

import AboutSection from './components/AboutSection';
import ContactSection from './components/ContactSection';

import './App.css';

function App() {

  // =========================
  // STATES
  // =========================
  const [city, setCity] = useState('Sojat City');

  const [mohalla, setMohalla] =
    useState('All');

  const [category, setCategory] =
    useState('All');

  const [providers, setProviders] =
    useState([]);

  const [loading, setLoading] =
    useState(true);

  // =========================
  // CITY CHANGE
  // =========================
  const handleCityChange = (
    newCity
  ) => {

    setCity(newCity);

    setMohalla('All');

    setCategory('All');
  };

  // =========================
  // AUTO LOCATION DETECTION
  // =========================
  useEffect(() => {

    const detectLocation =
      async () => {

        try {

          const res = await fetch(
            'https://ipapi.co/json/'
          );

          const data =
            await res.json();

          const detected =
            (
              data?.city || ''
            ).toLowerCase();

          if (
            detected.includes(
              'bilara'
            )
          ) {

            setCity('Bilara');

          } else {

            setCity(
              'Sojat City'
            );
          }

        } catch (err) {

          console.log(
            'Location detection failed:',
            err
          );

          setCity(
            'Sojat City'
          );
        }
      };

    detectLocation();

  }, []);

  // =========================
  // FILTER PROVIDERS
  // =========================
  useEffect(() => {

    setLoading(true);

    let filtered =
      mockProviders.filter(
        (p) =>
          p.city
            ?.trim()
            .toLowerCase() ===
          city
            ?.trim()
            .toLowerCase()
      );

    // MOHALLA FILTER
    if (
      mohalla !== 'All'
    ) {

      filtered =
        filtered.filter(
          (p) =>
            p.mohalla
              ?.trim()
              .toLowerCase() ===
            mohalla
              ?.trim()
              .toLowerCase()
        );
    }

    // CATEGORY FILTER
    if (
      category !== 'All'
    ) {

      filtered =
        filtered.filter(
          (p) =>
            p.category
              ?.trim()
              .toLowerCase() ===
            category
              ?.trim()
              .toLowerCase()
        );
    }

    // SORT BY RATING
    filtered.sort(
      (a, b) =>
        b.rating - a.rating
    );

    setProviders(filtered);

    setLoading(false);

  }, [
    city,
    mohalla,
    category
  ]);

  // =========================
  // TOTAL PROVIDERS
  // =========================
  const totalProviders =
    useMemo(
      () =>
        providers.length,
      [providers]
    );

  // =========================
  // UI
  // =========================
  return (

    <div className="app-container">

      {/* HEADER */}
      <Header
        city={city}
        setCity={
          handleCityChange
        }
      />

      <main className="main-content">

        {/* HOME */}
        <section id="home">

          <div className="top-section">

            <h2 className="welcome-text">

              Find Trusted Experts in{' '}

              <span>
                {city}
              </span>

            </h2>

            <p className="provider-count">

              Trusted Local Experts
              Just One Tap Away

            </p>

          </div>

          {/* FILTER BAR */}
          <FilterBar
            city={city}
            mohalla={
              mohalla
            }
            setMohalla={
              setMohalla
            }
            mohallasList={
              mohallas[city]
            }
          />

          {/* CATEGORY GRID */}
          <CategoryGrid
            categories={
              categories
            }
            selectedCategory={
              category
            }
            setCategory={
              setCategory
            }
          />

          {/* PROVIDERS */}
          <div className="provider-list">

            {loading ? (

              <div className="loading-box">

                <div className="loader"></div>

                <p>
                  Finding trusted experts...
                </p>

              </div>

            ) : providers.length >
              0 ? (

              <div className="providers-grid">

                {providers.map(
                  (
                    provider
                  ) => (

                    <ProviderCard
                      key={
                        provider.id
                      }
                      provider={
                        provider
                      }
                    />

                  )
                )}

              </div>

            ) : (

              <div className="empty-state">

                <h3>
                  No Providers Found
                </h3>

                <p>
                  Try changing
                  filters
                </p>

                <button
                  className="reset-btn"
                  onClick={() => {

                    setMohalla(
                      'All'
                    );

                    setCategory(
                      'All'
                    );

                  }}
                >
                  Clear Filters
                </button>

              </div>

            )}

          </div>

        </section>

        {/* ABOUT */}
        <AboutSection />

        {/* CONTACT */}
        <ContactSection />

      </main>

    </div>
  );
}

export default App;