'use client'

import useSWR from 'swr'
import Select from 'react-select'

const fetchModels = () =>
  fetch('/api/getEngines').then(res => {
    return res.json()
  })

function ModelSelection() {
  const { data: models, isLoading } = useSWR('models', fetchModels)
  const { data: model, mutate: setModel } = useSWR('model', {
    fallbackData: 'text-davinci-003'
  })

  return (
    <div>
      <Select
        id='selectbox'
        instanceId='selectbox'
        options={models?.modelOptions}
        defaultValue={model}
        placeholder={model}
        className='mt-2 text-black '
        isClearable
        isLoading={isLoading}
        menuPosition='fixed'
        onChange={e => setModel(e?.value)}
      />
    </div>
  )
}

export default ModelSelection
