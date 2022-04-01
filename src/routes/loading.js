import { useApiEffect, useAuth } from '~/hooks'
import { updateLicensedData } from '~/services/licenseds'

const Loading = ({ setLoading }) => {
  const { setUser } = useAuth()

  useApiEffect(
    () => updateLicensedData({}),
    (response) => setUser(response.data),
    () => setLoading(false)
  )

  return null
}

export default Loading
