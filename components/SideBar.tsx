import NewChat from './NewChat'

const SideBar = () => {
  return (
    <div className='p-2 flex flex-col h-screen '>
      <div className='flex-1 '>
        <div>
          <NewChat />

          {/* ModelSelection */}

          {/* Map through the ChatRows */}
        </div>
      </div>
    </div>
  )
}

export default SideBar
