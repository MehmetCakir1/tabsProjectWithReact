import { FaAngleDoubleRight } from 'react-icons/fa'



const Experience = ({info}) => {
//   console.log(info);
const {title,dates,company,duties,id}=info;
  return (
    <div className=' col-lg-9'>
      <div className='text-center text-sm-start'>
        <h3 className='py-1'>{title}</h3>
      <span className=' company p-1 fw-bold h5 rounded-3'>{company}</span>
      <p className='my-3 fw-bold'>{dates}</p>
      </div>
      <article >
        {
            duties.map((duty)=>{
                return(
                    <div key={duty.id} className='list d-flex  my-2'>
                        <span className='pe-1 pe-md-2 pe-lg-4 d-flex align-items-center text-danger'> <FaAngleDoubleRight/> </span>
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