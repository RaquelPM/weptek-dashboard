import { useApiEffect, useAuth } from '~/hooks'
import { removeAuth } from '~/repositories/auth'
import { updateLicensedData } from '~/services/licenseds'

const Loading = ({ setLoading }) => {
  const { setUser } = useAuth()

  useApiEffect(
    () => updateLicensedData({}),
    (response) => setUser(response.data),
    () => {
      removeAuth()

      setLoading(false)
    }
  )

  return null
}

export default Loading
