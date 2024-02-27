
import { useState } from 'react'

const useDropdownToggle = () => {
  const [isActive, setIsActive] = useState(false)

  const toggleDropdown = () => {
    setIsActive(!isActive)
  }

  return { isActive, toggleDropdown }
}

export default useDropdownToggle