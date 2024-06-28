import './index.css'

const LanguageFilterItem = props => {
  const {filterData, isActive, updateActiveId} = props
  const {language, id} = filterData
  const buttonClassName = isActive
    ? 'filter-button active-filter'
    : 'filter-button'

  const updateItem = () => {
    updateActiveId(id)
  }

  return (
    <li className="filter-item">
      <button type="button" className={buttonClassName} onClick={updateItem}>
        {language}
      </button>
    </li>
  )
}

export default LanguageFilterItem
