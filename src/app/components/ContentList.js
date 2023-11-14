"use client";

import { FaFolder, FaFile, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

export default function ContentList({ content }) {
  return (
    <>
      <ul className="max-w-md divide-y divide-gray-200">
        {content.map((c) => (
          <li key={c.name} className="pt-3 pb-3 sm:pb-4">
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                {c.isDirectory ? (
                  <FaFolder color="#60a5fa" />
                ) : (
                  <FaFile color="#60a5fa" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {c.name}
                </p>
                <p class="text-sm text-gray-500 truncate">{c.path}</p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                {c.isDirectory ? <FaAngleRight color="#60a5fa" /> : null}
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}

ContentList.propTypes = {
  content: PropTypes.array,
};

ContentList.defaultProps = {
  content: [],
};
