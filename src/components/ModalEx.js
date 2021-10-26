import React from 'react'
import { Button, Header, Image, Modal } from 'semantic-ui-react'

function ModalEx({item}) {
  const [open, setOpen] = React.useState(false)

  return (
    <Modal
      onClose={() => setOpen(false)}
      onOpen={() => setOpen(true)}
      open={open}
      trigger={<Button>View</Button>}
    >
      <Modal.Header>{item.Title}</Modal.Header>
      <Modal.Content image>
        <Image size='medium' src={item.Poster} wrapped />
        <Modal.Description>
          <Header>{item.Title}</Header>
          <h1>
            MovieID </h1>
          <p>{item.imdbID}</p>

          <h2>Type</h2>
          <p>{item.Type}</p>

          <h3>Year</h3>
          <p>{item.Year}</p>
        </Modal.Description>
      </Modal.Content>
      <Modal.Actions>
        <Button color='black' onClick={() => setOpen(false)}>
          Close
        </Button>
        <Button
          content="Like it?"
          labelPosition='right'
          icon='checkmark'
          onClick={() => setOpen(false)}
          positive
        />
      </Modal.Actions>
    </Modal>
  )
}

export default ModalEx