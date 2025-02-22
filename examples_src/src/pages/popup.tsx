import * as React from 'react'
import { Button, Layout, Popup } from '../auto-ui'

class Demo extends React.PureComponent {
  state = { visible: false }

  render() {
    return (
      <Layout>
        <Layout.Body>
          <Button onClick={this.onBtnClick}>显示Popup</Button>
          <Popup visible={this.state.visible}>
            <h1>标题</h1>
            <p>内容</p>
            <br />
            <Button onClick={this.onBtnClick}>关闭</Button>
          </Popup>
        </Layout.Body>
      </Layout>
    )
  }

  private onBtnClick = () => {
    this.setState({ visible: !this.state.visible })
  }
}

export default Demo
