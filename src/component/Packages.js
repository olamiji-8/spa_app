import React from "react"
export default function packages(props){
  const viewPackages =props.packages.map((eachPackage) =><li> {eachPackage}</li>)
  return (
    <div>
        <div className="packages">
            <div className="packagesHeader">
                <h1>Our Packages</h1>
            </div>
            <ul>
              {viewPackages}
            </ul>
        </div>

    </div>
  )
}
