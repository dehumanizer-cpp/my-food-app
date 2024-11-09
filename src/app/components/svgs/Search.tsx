import * as React from "react"


interface MySearchIconProps {
    width: number;
    height: number;
}


const Search = ({width, height}: MySearchIconProps) => (
<div className="">
  <svg
      xmlns="http://www.w3.org/2000/svg"
      width={width}
      height={height}
      fill="none"
      viewBox="0 0 24 24"
    >
      <path
        stroke="#000"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1}
        d="M14.954 14.946 21 21m-4-11a7 7 0 1 1-14 0 7 7 0 0 1 14 0Z"
      />
    </svg>
</div>
)
export default Search
