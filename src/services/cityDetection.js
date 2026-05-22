export const detectCity = async () => {
  try {
    const response = await fetch('https://ipapi.co/json/');
    const data = await response.json();

    const city = data.city?.toLowerCase() || '';

    if (city.includes('bilara')) {
      return 'Bilara';
    }

    if (city.includes('sojat')) {
      return 'Sojat City';
    }

    return 'Sojat City';
  } catch (error) {
    return 'Sojat City';
  }
};