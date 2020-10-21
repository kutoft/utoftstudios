import React from 'react'
import { getCategory, listCategorys } from '../graphql/queries'
import {
  createCategory,
  updateCategory,
  deleteCategory,
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

const AdminCategories = () => {
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
      name: '',
    },
    {
      get: getCategory,
      list: listCategorys,
      create: createCategory,
      update: updateCategory,
      delete: deleteCategory,
    }
  )
  const { nextId } = useNextId(data?.data.listCategorys.items)

  const handleOrderChange = (id, index) => {
    const item = data.data.listCategorys.items.filter((x) => x.id === id)[0]
    const currentIndex = data.data.listCategorys.items
      .map((e) => e.id)
      .indexOf(id)
    const rest = data.data.listCategorys.items.filter((x) => x.id !== id)
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
      <SubTitle title="Category">
        <Button
          label="Add"
          handleClick={() =>
            handleEdit(
              {
                id: nextId,
                name: '',
              },
              'create'
            )
          }
        />
      </SubTitle>
      <FormGroup>
        <Drag handleOrderChange={handleOrderChange}>
          {data &&
            data.data.listCategorys.items.map((item) => (
              <DragZone key={item.id}>
                <DragItem
                  draggable={true}
                  item={item}
                  heading={item.name}
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
            saveLabel="Save Category"
          >
            <label htmlFor="category_category">Category</label>
            <input
              id="category_category"
              type="text"
              name="name"
              placeholder="Category Name"
              className="thqTextInput textinput"
              onChange={handleChange}
              data-id={state.fields.id}
              value={state.fields.name}
              autoComplete="off"
            />
          </AdminEdit>
        </Modal>
        <CtaWrapper>
          <Button
            label="Add Category"
            options={{ fullWidth: true }}
            handleClick={() =>
              handleEdit(
                {
                  id: nextId,
                  name: '',
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

export default AdminCategories
