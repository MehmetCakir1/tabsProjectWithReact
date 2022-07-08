import React from 'react'

const Nav = ({btnInfo,setValue,value}) => {
console.log(btnInfo);
  return (
    <div className='navDiv m-auto mb-4 m-lg-0 text-center col-lg-2 d-lg-flex flex-lg-column'>
        {
            btnInfo.map((btn,index)=>{
                console.log(index);
                return(
                        <button className={`border-0 px-2 m-2 fs-4 fw-bold text-primary ${index === value && 'activeBtn'}`} key={btn.id} onClick={()=>setValue(index)}>{btn.company}</button>
                                    )
            })
        }
    </div>
  )
}

export default Nav
