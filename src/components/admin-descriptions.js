import React from 'react'
import { getDescription, listDescriptions } from '../graphql/queries'
import {
  createDescription,
  updateDescription,
  deleteDescription,
} from '../graphql/mutations'

import useCRUD from '../utlis/useCRUD'
import useNextId from '../utlis/useNextId'

import Button from './button'
import CtaWrapper from './cta-wrapper'
import FormGroup from './form-group'
import SubTitle from './sub-title'
import Modal from './modal'
import AdminEdit from './admin-edit'
import Drag from './drag'
import DragZone from './drag-zone'
import DragItem from './drag-item'

const AdminDescriptions = () => {
  const {
    state,
    data,
    handleEdit,
    handleSave,
    handleDelete,
    handleChange,
    handleClose,
  } = useCRUD(
    {
      id: 0,
      value: 'Alway the next one',
    },
    {
      get: getDescription,
      list: listDescriptions,
      create: createDescription,
      update: updateDescription,
      delete: deleteDescription,
    }
  )
  const { nextId } = useNextId(data?.data.listDescriptions.items)

  const handleOrderChange = (id, index) => {
    const item = data.data.listDescriptions.items.filter((x) => x.id === id)[0]
    const currentIndex = data.data.listDescriptions.items
      .map((e) => e.id)
      .indexOf(id)
    const rest = data.data.listDescriptions.items.filter((x) => x.id !== id)
    console.log(item)
    console.log(rest)
    console.log(rest)
    // setData({
    //   data: {
    //     ...data.data,
    //     listThings: {
    //       ...data.data.listThings,
    //       items: rest.splice(index, 0, item),
    //     },
    //   },
    // })
  }

  return (
    <>
      <SubTitle title="Description"></SubTitle>
      <FormGroup>
        <Drag handleOrderChange={handleOrderChange}>
          {data &&
            data.data.listDescriptions.items.map((item) => (
              <DragZone key={item.id}>
                <DragItem
                  draggable={true}
                  item={item}
                  handleEdit={handleEdit}
                  handleDelete={handleDelete}
                />
              </DragZone>
            ))}
        </Drag>
        <Modal isOpen={state.isOpen}>
          <AdminEdit
            handleClose={handleClose}
            handleSave={handleSave}
            saveLabel="Save Description"
          >
            <label htmlFor="description_description">Description</label>
            <textarea
              id="description_description"
              name="value"
              placeholder="About Page Description"
              data-id={state.fields.id}
              value={state.fields.value}
              onChange={handleChange}
              className="thqTextArea textarea"
              autoComplete="off"
            ></textarea>
          </AdminEdit>
        </Modal>
        <CtaWrapper>
          <Button
            label="Add Description"
            options={{ fullWidth: true }}
            handleClick={() =>
              handleEdit(
                {
                  id: nextId,
                  value: '',
                },
                'create'
              )
            }
          />
        </CtaWrapper>
      </FormGroup>
    </>
  )
}

export default AdminDescriptions
