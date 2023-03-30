import { Modal } from '@material-ui/core';

const [open, setOpen] = useState(false);

function Modal() {
    <div>

<Button onClick={() => setOpen(true)}>Open Modal</Button>
<Modal open={open} onClose={() => setOpen(false)}>
  <div className={classes.paper}>
    <h2 id="simple-modal-title">Modal Title</h2>
    <p id="simple-modal-description">
      This is the modal content.
    </p>
  </div>
</Modal>
</div>

}