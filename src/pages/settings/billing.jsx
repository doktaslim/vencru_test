import { FiDownloadCloud } from 'react-icons/fi'
import BillingTable from './billing-table'

export default function Billing() {
  return (
      <div className='text-gray-600 space-y-4'>
          <div className='flex items-center justify-between w-full'>
              <h3 className='text-lg font-medium'>Billing History</h3>
              <button className='flex items-center justify-between space-x-2 bg-white border rounded-md outline-none p-3 py-2'>
                  <FiDownloadCloud />
                  <span className='text-sm font-medium'>
                    Download all
                  </span>
              </button>
          </div>

          <BillingTable />
    </div>
  )
}
