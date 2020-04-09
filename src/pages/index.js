import React from "react"
import Search from "../components/SearchContainer"

const IndexPage = () => (
  <div>
    <h1 style={{ marginTop: `3em`, textAlign: `center` }}>
      Список товарів
    </h1>
    <div>
      <Search />
    </div>
  </div>
)

export default IndexPage