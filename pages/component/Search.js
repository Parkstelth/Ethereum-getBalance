import { useState } from 'react'

function Search({onSearch}) {
  const [textDestination, setTextDestination] = useState('')

  const handleChange = (e) => {
    setTextDestination(e.target.value) //검색된 도착지
  }

  const handleKeyPress = (e) => {
    if (e.type === 'keypress' && e.code === 'Enter') {
      handleSearchClick()
    }
  }

  const handleSearchClick = () => {
   

    onSearch({type:'account',address:textDestination})
  }



  return <fieldset>
    <legend>계정주소, 컨트랙트주소, 트랜잭션주소를 입력하고, 검색하세요</legend>
    <span>입력타입</span>
    <input id="input-departure" type="text" disabled value="계정주소"></input>
    <span>주소</span>
    <input id="input-destination" type="text" value={textDestination} onChange={handleChange} placeholder="계정주소,컨트랙트주소,트랜잭션주소 중 하나 입력" onKeyPress={handleKeyPress} />
    <button id="search-btn" onClick={handleSearchClick}>검색</button>
  </fieldset>
}

export default Search