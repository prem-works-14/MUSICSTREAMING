import { MultiChatSocket, MultiChatWindow, useMultiChatLogic } from 'react-chat-engine-advanced'

const ChatsPage = (props) => {
  const chatProps = useMultiChatLogic(
    '55877546-6eec-4154-9b2d-b05fb1d3ab87',
    props.user.username, 
    props.user.secret
  );
  return (
    <div style={{ height:'100vh' }}>
      <MultiChatSocket {...chatProps} />
      <MultiChatWindow {...chatProps} style={{ height: '100%'}} />
    </div>
  )

}

export default ChatsPage