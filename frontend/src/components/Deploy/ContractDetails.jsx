import React, { useState } from 'react';

function ContractDetails() {
  const [contractDetails, setContractDetails] = useState('');
  const [contractDescription, setContractDescription] = useState('');

  const handleContractDetailsChange = (event) => {
    setContractDetails(event.target.value);
  };

  const handleContractDescriptionChange = (event) => {
    setContractDescription(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Process form submission here
  };

  return (
    <div className='mt-[120px] flex justify-center item-center'>
      <div className='border border-red-100 w-2/3 '>
        <h1 className='mt-[25px] text-xl font-semibold'>Enter Contract Details</h1>

        <form onSubmit={handleSubmit} className='mt-[30px]'>
          <div className="mb-4">
            <label className="block text-xl font-semibold mb-2">Contract Name</label>
            <input
              type="text"
              value={contractDetails}
              onChange={handleContractDetailsChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-2/3"
              placeholder="Enter contract details"
            />
          </div>
          <div className="mb-4 mt-[35px]">
            <label className="block text-xl font-semibold mb-2">Contract Description</label>
            <textarea
              value={contractDescription}
              onChange={handleContractDescriptionChange}
              className="border border-gray-300 rounded-md px-3 py-2 w-2/3"
              placeholder="Enter contract description"
            />
          </div>

          <div className='flex justify-between mb-[25px]'>
          <button className='border border-2 px-[10px] text-lg font-medium ml-[15px]'><a href='/deploy'>Back</a></button>
          <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded-md font-semibold">Submit</button>
          <button className='border border-2 px-[10px] text-lg font-medium mr-[15px]'><a >Next</a></button>
          </div>
        
          </form>
      </div>
    </div>
  );
}

export default ContractDetails;
