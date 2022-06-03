import React from "react";
//need to get filter term out of this with a callback to App
function CategoryFilter({ catList, changeFilter}) {
  function clickHandler(e) {
    //NOTE: adding the state change callback here did not work
    //ADDL NOTE: the callback i called used useState again instead of the setFilter method, leading to an error
    changeFilter(e.target.id)
    console.log('I was clicked!,', e.target.id)

    //getting details from the selected button and changing class
    e.target.className = 'selected'
    const selected = e.target.id
    const buttonList = e.target.parentNode.childNodes
    //using details to reset class of other btns
    for (const button of buttonList) {
      if (button.id !== selected) {
        button.className = ''
      }
    }
  }
  return (
    <div className="categories">
      <h5>Category filters</h5>
        {catList.map(cat => {
          return <button className="" key={cat} id={cat} onClick={clickHandler}>{cat}</button>
        })}
    </div>
  );
}

export default CategoryFilter;
