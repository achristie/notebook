export default function Overview() {
  return (
    <div className="space-y-4 ">
      <h1 className="text-3xl text-red-500 font-bold">
        S&P Global Commodity Insights Python SDK
      </h1>
      <div className="bg-indigo-100 px-4 py-3 w-96 rounded-md" role="alert">
        <p className="text-lg font-bold">Available on PyPi</p>
        <p>
          Click{" "}
          <a
            className="bg-red-200 px-1 py-0.5"
            target="_blank"
            href="https://pypi.org/project/spgci"
          >
            here
          </a>{" "}
          to get started or <span className="italic bg-red-200 px-1 py-0.5">pip install spgci</span>
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Notable Features</h2>
      <hr className="h-px my-2 bg-gray-200 border-0 dark:bg-gray-700"/>
        <ul className="space-y-1 text-gray-500 list-item">
          <li>Handles authentication</li>
          <li>Returns data as a DataFrame</li>
          <li>Handles pagination</li>
        </ul>
      </div>
    </div>
  );
}
