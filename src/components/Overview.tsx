import Code from "./Code";
import KeyText from "./KeyText";

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
          to get started or <KeyText>pip install spgci</KeyText>
        </p>
      </div>
      <div>
        <h2 className="text-lg font-bold">Notable Features</h2>
        <hr className="w-96 h-1 mt-2 mb-6 bg-gray-200 border-0 rounded" />
        <ul className="grid grid-rows-3 grid-cols-2 list-disc list-inside font-semibold text-sky-800">
          <li>Handles authentication</li>
          <li>
            Returns data in a pandas <Code>DataFrame</Code>
          </li>
          <li>Handles pagination</li>
          <li>
            Filter using native types - <Code>List</Code>
            {", "}
            <Code>pd.Series</Code>
          </li>
          <li>Supports proxy configuration</li>
          <li>
            Sets <Code>Date</Code> and <Code>DateTime</Code> datatype
          </li>
        </ul>
      </div>
    </div>
  );
}
