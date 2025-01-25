import { APP_NAME } from '@/lib/constants'

const Footer = () => {
  const currYear = new Date().getFullYear()
  return (
    <footer className='border-t'>
      <div className='p-5 flex-center'>
        {currYear} {APP_NAME}. All Rights Reserved
      </div>
    </footer>
  )
}
export default Footer
