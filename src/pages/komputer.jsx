import React from 'react'
import {Link,Outlet} from 'react-router-dom'

const Komputer = () => {
  return (
    <div>
        <Link to="/setting/komputer/lenovo">Lenovo</Link>
        <Link to="/setting/komputer/iphone">Iphone</Link>
        <Link to="/setting/komputer/samsung">Samsung</Link>
    </div>
  )
}

export default Komputer