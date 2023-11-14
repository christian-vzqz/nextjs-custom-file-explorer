"use client";

import { FaLaptop, FaUsb, FaAngleRight } from "react-icons/fa";
import PropTypes from "prop-types";

export default function DriveList({ content = [], onSelect = () => {} }) {
  return (
    <>
      <ul className="max-w-md divide-y divide-gray-200">
        {content.map((c) => (
          <li
            key={c.path}
            className="pt-3 pb-3 sm:pb-4 cursor-pointer"
            onClick={() => onSelect(c)}
          >
            <div className="flex items-center space-x-4 rtl:space-x-reverse">
              <div className="flex-shrink-0">
                {c.isUSB ? (
                  <FaUsb color="#60a5fa" />
                ) : (
                  <FaLaptop color="#60a5fa" />
                )}
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium text-gray-900 truncate">
                  {c.path}
                </p>
                <p class="text-sm text-gray-500 truncate">
                  {c.isUSB ? "USB" : "Local drive"}
                </p>
              </div>
              <div className="inline-flex items-center text-base font-semibold text-gray-900">
                <FaAngleRight color="#60a5fa" />
              </div>
            </div>
          </li>
        ))}
      </ul>
    </>
  );
}
