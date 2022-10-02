import React from 'react'

const Page = ({img, menu, header, title, subtitle, description, bg-img}) => {
  return (
    <>
    <img src={img} alt=""/>
    <div>{menu}</div>

    </>
  )
}

const CrewMenu= ({onClick}) => {
  return (
    <div>
        <ul>
            <li>
                <p onClick={onClick}>blah</p>
            </li>
        </ul>
    </div>
  )
}

import React from 'react'

export const CrewPage = () => {
  return (
    <Page props/>
  )
}

export const App = () => {

  return (
    <div>
        <Navbar/>
        {/* <Page img={img} menu={<CrewMenu onClick={handleMenuChange}/>} header="json data here"/> */}
    </div>
  )
}
