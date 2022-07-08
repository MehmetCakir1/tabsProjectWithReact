import { FaAngleDoubleRight } from 'react-icons/fa'



const Experience = ({info}) => {
//   console.log(info);
const {title,dates,company,duties,id}=info;
  return (
    <div className='container col-lg-9'>
      <h3 className='py-1'>{title}</h3>
      <span className=' company p-1 fw-bold h5 rounded-3'>{company}</span>
      <p className='my-3 fw-bold'>{dates}</p>
      <article>
        {
            duties.map((duty)=>{
                return(
                    <div key={duty.id} className='list d-flex  my-2'>
                        <span className='pe-4 d-flex align-items-center text-danger'> <FaAngleDoubleRight/> </span>
                        <p className="my-auto ">{duty}</p>
                    </div>
                )
            })
        }
      </article>
    </div>
  )
}

export default Experience