import { BiLocationPlus } from 'react-icons/bi';

import { AiOutlineDollar } from 'react-icons/ai';



const Job = ({job}) => {
 const {logo,job_title,company_name,remote_or_onsite,location,job_type,salary,} = job;

    return (
        <div className="card card-compact bg-base-100 shadow-xl">
  <figure><img src={logo} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{job_title}</h2>
    <p>{company_name}</p>
    <div className="p-2">
        <button className="px-5 py-2 p-2 mr-4 font-extrabold border rounded border-violet-500">{remote_or_onsite}</button>
        <button className="px-5 py-2 mr-4  font-extrabold border rounded border-violet-500">{job_type}</button>
    </div>
    <div className='mt-2 flex gap-2'>
        <h2 className='flex'><BiLocationPlus className='text-2xl mr-2'></BiLocationPlus>{location}</h2>
        <h2 className='flex'><AiOutlineDollar className='text-2xl mr-2'></AiOutlineDollar>{salary}</h2>
    </div>
    </div>

    <div className="card-actions">
      <button className="btn btn-primary">View Details</button>
    </div>
  </div>

    );
};

export default Job;