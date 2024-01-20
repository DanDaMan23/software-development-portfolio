export default function Contact() {
  return (
    <div className='w-full'>
      <p className='text-center font-bold text-2xl my-3'>Contact</p>
      <iframe
        title='My Google Form'
        src='https://docs.google.com/forms/d/e/1FAIpQLSfqnm-fjHbNCcPiAgjzDMfgXKdC3i1uNqJQZm5T7AKYxeN1nQ/viewform?embedded=true'
        className='w-full h-[55rem] bg-light-gray rounded-md'
        style={{ border: "none" }}
      >
        Loading…
      </iframe>
    </div>
  )
}
