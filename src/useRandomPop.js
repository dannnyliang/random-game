import { useCallback, useEffect, useState } from "react"

const getRandomNum = max => Math.floor(Math.random() * max)

const useRandomPop = list => {
  const [currentList, setCurrentList] = useState(list)
  const [index, setIndex] = useState(null)

  const isInit = index === null

  const pop = () => {
    if (!isInit) {
      setCurrentList(list => list.filter((item, idx) => idx !== index))
    }

    const newIndex = getRandomNum(currentList.length - 1)
    setIndex(newIndex)
  }

  const reset = useCallback(() => setCurrentList(list), [list])

  useEffect(() => {
    if (currentList.length < 1) {
      reset()
    }
  }, [currentList, reset])

  return { isInit, item: isInit ? null : currentList[index], currentList, pop, reset }
}

export default useRandomPop