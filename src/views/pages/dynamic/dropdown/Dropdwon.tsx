import React, { FunctionComponent, HtmlHTMLAttributes, useState } from 'react'
import { useSelector } from 'react-redux'

export const Dropdown: FunctionComponent<{
  itemList: string[]
  selectedItemIndex: number | null
  triggerCallBack?: Function
  width?: number
}> = ({
  itemList,
  selectedItemIndex = 0,
  triggerCallBack = function () {},
  width,
}) => {
  const firstLevelSelection = useSelector(
    (state: any) => state.data.firstLevelSelection
  )
  const [isDropdownOpen, setIsDropdownOpen] = useState<boolean>(false)
  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen)
  }
  const updateSelectedItem = (index: number | null) => {
    triggerCallBack(index)
    setIsDropdownOpen(false)
  }
  return (
    <div
      className='dropdown'
      style={width ? { width: `${width}px` } : undefined}
    >
      <div
        className='row justify-content-between align-items-center m-0 dropdown-main'
        onClick={toggleDropdown}
      >
        <div className='col col-auto p-0 c-white'>
          {selectedItemIndex !== null
            ? itemList[selectedItemIndex]
            : firstLevelSelection === 'experience'
            ? 'All Functions'
            : 'All Experiences'}
        </div>
        <div className='col col-auto p-0'>
          <svg
            width='16'
            height='16'
            viewBox='0 0 16 16'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <path
              fillRule='evenodd'
              clipRule='evenodd'
              d='M12.0501 6.00001L7.99998 10.0893L3.94943 6.00001L3.33325 6.62208L7.99992 11.3333L12.6666 6.62208L12.0501 6.00001Z'
              fill='white'
            />
          </svg>
        </div>
      </div>
      {isDropdownOpen ? (
        <div className='dropdown-list'>
          <div
            className={`py-1 my-1 dropdown-element px-2 ${
              selectedItemIndex === null ? 'active' : ''
            }`}
            onClick={() => updateSelectedItem(null)}
          >
            {firstLevelSelection === 'experience'
              ? 'All Functions'
              : 'All Experiences'}
          </div>
          {itemList.map((el: string, index: number) => (
            <div
              key={`${el}-${index}`}
              className={`py-1 my-1 dropdown-element px-2 ${
                index === selectedItemIndex ? 'active' : ''
              }`}
              onClick={() => updateSelectedItem(index)}
            >
              {el}
            </div>
          ))}
        </div>
      ) : (
        <div></div>
      )}
    </div>
  )
}
