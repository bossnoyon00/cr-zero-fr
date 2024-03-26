import axios from 'axios'

// const apiUrl = process.env.REACT_APP_COUNTRY_CITY_DETAIL_URL
const countryDetail = axios.create({
  baseURL: '',
  // baseURL: apiUrl,
  headers: {
    'X-CSCAPI-KEY': 'ekZUZE5tQ0w5QUIyYVU4dEdOMmlFaFdZdGZrMnpkdFlFOHBsY09lVA==',
  },
})

export default countryDetail

export const countryDetailFn = async (setCountryList) => {
  try {
    const res = await axios.get('https://api.countrystatecity.in/v1/countries', {
      headers: {
        'X-CSCAPI-KEY': 'ekZUZE5tQ0w5QUIyYVU4dEdOMmlFaFdZdGZrMnpkdFlFOHBsY09lVA==',
      },
    })
    if (res) {
      setCountryList(res.data)
    }
  } catch (err) {
    console.log(err)
  }
}

export const getCountryImage = async (payload, setFn) => {
  try {
    const res = await axios.get(`https://api.countrystatecity.in/v1/countries/${payload}`, {
      headers: {
        'X-CSCAPI-KEY': 'ekZUZE5tQ0w5QUIyYVU4dEdOMmlFaFdZdGZrMnpkdFlFOHBsY09lVA==',
      },
    })
    if (res) {
      setFn(res.data)
    }
  } catch (err) {
    console.log(err)
  }
}
