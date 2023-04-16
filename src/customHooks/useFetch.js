import React from 'react'
import axios from 'axios'

const URL = "https://newsapi.org/v2/everything?q=tesla&from=2023-03-13&sortBy=publishedAt&apiKey=cae1ef851896490e910a5b606c981af1"

const useFetch = () => {

	const [loading, setLoding] = React.useState(false);
	const [error, setError] = React.useState('')
	const [data, setData] = React.useState({})

	const fetchData = async () => {
		setLoding(true)
		try {
			await axios.get(URL).then((data) => {
				console.log(data);
			})
				.catch((error) => {
					console.log(error);
				});
		} catch (e) {
			console.log(e);
			setError('data is failed to fetch')
		} finally {
			setLoding(false)
		}

	}


	return { loading, error, data, fetchData }
}

export default useFetch