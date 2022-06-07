import React from "react";

function CategoryFilter({ categories, changeFilter, activeFilter }) {
  //reworking functionality so that 'All' is selected by default and the category can be passed without having to manually change class of other buttons
  const categoryButtons = categories.map(cat => {
    return (<button
      className={(cat === activeFilter) ? 'selected' : null}
      key={cat}
      onClick={() => changeFilter(cat)}>
      {cat}
    </button>)
  })

  // //OBSOLETE function
  // function clickHandler(e) {
  //   //NOTE: adding the state change callback here did not work
  //   //ADDL NOTE: the callback i called used useState again instead of the setFilter method, leading to an error

  //   changeFilter(e.target.id)
  //   console.log('I was clicked!,', e.target.id)

  //   //getting details from the selected button and changing class
  //   e.target.className = 'selected'
  //   const selected = e.target.id
  //   const buttonList = e.target.parentNode.childNodes
  //   //using details to reset class of other btns
  //   for (const button of buttonList) {
  //     if (button.id !== selected) {
  //       button.className = ''
  //     }
  //   }
  // }
  return (
    <div className="categories">
      <h5>Category filters</h5>
      {categoryButtons}
    </div>
  );
}

export default CategoryFilter;
