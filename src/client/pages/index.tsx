import type { User } from './user/interfaces'
import useSwr from 'swr'
import Link from 'next/link'

const fetcher = (url: string) => fetch(url).then((res) => res.json())

export default function Index() {
  const { data, error } = useSwr<User[]>('/api/users', fetcher)

  if (error) { 
    console.log('user api error===', error);
    return <div>Failed to load users</div>
  }
  if (!data) return <div>Loading...</div>

  return (
    <ul>
      {data.map((user) => (
        <li key={user.id}>
          <Link href="/user/[id]" as={`/user/${user.id}`}>
            {`User ${user.id}`}
          </Link>
        </li>
      ))}
    </ul>
  )
}