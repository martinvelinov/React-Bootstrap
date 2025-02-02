import React from 'react'
import { Form, FormGroup, Col,Label,Input, Button} from 'reactstrap';
import 'bootstrap/dist/css/bootstrap.min.css'
function Contact() {
  return (
    <Form>
  <FormGroup row>
    <Label
      for="exampleEmail"
      sm={2}
    >
      Email
    </Label>
    <Col sm={10}>
      <Input
        id="exampleEmail"
        name="email"
        placeholder="with a placeholder"
        type="email"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="examplePassword"
      sm={2}
    >
      Password
    </Label>
    <Col sm={10}>
      <Input
        id="examplePassword"
        name="password"
        placeholder="password placeholder"
        type="password"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelect"
      sm={2}
    >
      Select
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelect"
        name="select"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleSelectMulti"
      sm={2}
    >
      Select Multiple
    </Label>
    <Col sm={10}>
      <Input
        id="exampleSelectMulti"
        multiple
        name="selectMulti"
        type="select"
      >
        <option>
          1
        </option>
        <option>
          2
        </option>
        <option>
          3
        </option>
        <option>
          4
        </option>
        <option>
          5
        </option>
      </Input>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleText"
      sm={2}
    >
      Text Area
    </Label>
    <Col sm={10}>
      <Input
        id="exampleText"
        name="text"
        type="textarea"
      />
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="exampleFile"
      sm={2}
    >
      File
    </Label>
    <Col sm={10}>
      <Input
        id="exampleFile"
        name="file"
        type="file"
      />
      
    </Col>
  </FormGroup>
  <FormGroup
    row
    tag="fieldset"
  >
    <legend className="col-form-label col-sm-2">
      Radio Buttons
    </legend>
    <Col sm={10}>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option one is this and that—be sure to include why it's great
        </Label>
      </FormGroup>
      <FormGroup check>
        <Input
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option two can be something else and selecting it will deselect option one
        </Label>
      </FormGroup>
      <FormGroup
        check
        disabled
      >
        <Input
          disabled
          name="radio2"
          type="radio"
        />
        {' '}
        <Label check>
          Option three is disabled
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup row>
    <Label
      for="checkbox2"
      sm={2}
    >
      Checkbox
    </Label>
    <Col
      sm={{
        size: 10
      }}
    >
      <FormGroup check>
        <Input
          id="checkbox2"
          type="checkbox"
        />
        {' '}
        <Label check>
          Check me out
        </Label>
      </FormGroup>
    </Col>
  </FormGroup>
  <FormGroup
    check
    row
  >
    <Col
      sm={{
        offset: 2,
        size: 10
      }}
    >
      <Button>
        Submit
      </Button>
    </Col>
  </FormGroup>
</Form>
  )
}

export default Contact