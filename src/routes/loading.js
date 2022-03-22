import { useApiEffect } from '~/hooks'
import { updateLicensedData } from '~/services/licenseds'

const Loading = ({ setLoading }) => {
  useApiEffect(
    () => updateLicensedData({}),
    (response) => {
      console.log(response)
    },
    () => setLoading(false)
  )

  return null
}
