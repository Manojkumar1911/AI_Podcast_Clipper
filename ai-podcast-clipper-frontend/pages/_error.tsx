import type { NextPage } from 'next';
import Link from 'next/link';

interface ErrorProps {
  statusCode?: number;
}

const Error: NextPage<ErrorProps> = ({ statusCode = 404 }) => {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-50">
      <div className="text-center">
        <h1 className="text-6xl font-bold text-gray-900 mb-4">{statusCode}</h1>
        <h2 className="text-2xl font-semibold text-gray-700 mb-4">
          {statusCode === 404 ? 'Page Not Found' : 'An error occurred'}
        </h2>
        <p className="text-gray-600 mb-8">
          {statusCode === 404
            ? "Sorry, we couldn't find the page you're looking for."
            : 'Sorry, something went wrong.'}
        </p>
        <Link
          href="/"
          className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500"
        >
          Return Home
        </Link>
      </div>
    </div>
  );
};

Error.getInitialProps = ({ res, err }) => {
  const statusCode = res ? res.statusCode : err ? err.statusCode : 404;
  return { statusCode };
};

export default Error; 