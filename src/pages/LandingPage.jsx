import { MoviesGrid } from '../components/MoviesGrid'
import { Search } from '../components/Search'

import { useQuery } from '../hooks/useQuery'

import { useDebounce} from '../hooks/useDebounce'

export function LandingPage() {
  const query = useQuery();
  const search = query.get("search");

  const debounceSearch = useDebounce(search, 300)
  return (
    <div>
      <Search />
      <MoviesGrid key={debounceSearch} search={debounceSearch} />
    </div>
  )
}
