import { observable, action } from 'mobx'

class ChartData {
  @observable columnData = []
  @action
  updateColumnData(data) {
    this.columnData = data
  }
}

export default new ChartData()