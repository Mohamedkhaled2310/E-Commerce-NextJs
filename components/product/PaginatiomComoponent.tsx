import Link from 'next/link';

const PaginationComponent = () => {
  const pagination = [1, 2, 3, 4, 5];

  return (
    <div className="flex justify-center space-x-2 mt-4">
      {pagination.map((page) => (
        <Link
          key={page}
          href={`?page=${page}`}
          className="border border-gray-300 rounded-lg px-4 py-2 text-blue-500 hover:bg-blue-100 hover:text-blue-700"
        >
          {page}
        </Link>
      ))}
    </div>
  );
};

export default PaginationComponent;
