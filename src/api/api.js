import axios from 'axios';

export const usersAPI = {
  async requestUsers(currentPage = 1, pageSize = 20) {
    return axios.get(
      `http://www.filltext.com/?rows=${currentPage - currentPage + pageSize}&id={number|1000}&firstName={firstName}&lastName={lastName}&email={email}&phone={phone|(xxx)xxx-xx-xx}&adress={addressObject}&description={lorem|32}`
    ).then(res => res)
  }
}


