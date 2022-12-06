import axios from 'axios';
import {useState} from 'react';
export default function Home() {
	const [page, setPage] = useState(1);
	const [response, setResponse] = useState(null);
	// Getter function for getting news from the API.
	const getNews = async () => {
		try {
			const res = await axios.get('api/news/', {
				params: {page}
			});
			const {data} = res;
			setResponse(data.data[0].screen_data.news);
		} catch (error) {
			console.error(error);
		}
	};
	return (
		<div className="flex flex-col relative bg-background font-raleway items-center min-h-screen">
			<h1 className="text-6xl text-primary font-bold mt-20">
				Crypto News <span className="text-active">App</span>
			</h1>
			<h2 className="text-active text-2xl mt-6">
				Next.js app which provides information latest news about Crypto
				using Cryptocurrency API
			</h2>
			<div className="mt-12 sm:mx-auto justify-center sm:w-full sm:flex">
				<div className="mt-4 sm:mt-0 sm:ml-3">
					<button
						className="block w-full rounded-md px-5 py-3 bg-active text-base font-bold text-background focus:outline-none focus:ring-2 focus:ring-primary sm:px-10"
						onClick={() => getNews()}
					>
						Get Latest News
					</button>
				</div>
			</div>
		</div>
	);
}