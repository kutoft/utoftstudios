import React from 'react'
import { API, graphqlOperation } from 'aws-amplify'
import { getThing, listThings, listCategorys } from '../graphql/queries'
import { createThing, updateThing, deleteThing } from '../graphql/mutations'

import useAsync from '../utlis/useAsync'
import useCRUD from '../utlis/useCRUD'
import useNextId from '../utlis/useNextId'
import { useColorMode } from '../utlis/colorModeContext'

import Button from './button'
import CtaWrapper from './cta-wrapper'
import FormGroup from './form-group'
import SubTitle from './sub-title'
import Modal from './modal'
import AdminEdit from './admin-edit'
import DragItem from './drag-item'

const AdminThings = () => {
  const { colorMode } = useColorMode()

  const {
    state,
    data,
    handleEdit,
    handleSave,
    handleDelete,
    handleChange,
    handleFileChange,
    handleClose,
  } = useCRUD(
    {
      id: 0,
      name: '',
      src: '',
      description: '',
      categoryID: '',
    },
    {
      get: getThing,
      list: listThings,
      create: createThing,
      update: updateThing,
      delete: deleteThing,
    }
  )
  const { nextId } = useNextId(data?.data.listThings.items)

  const { data: categories, run } = useAsync(null)

  // LIST CATEGORIES
  React.useEffect(() => {
    run(API.graphql(graphqlOperation(listCategorys)))
  }, [])

  return (
    <>
      <SubTitle title="Thing">
        <Button
          label="Add"
          options={{ color: colorMode === 'light' ? 'dark' : 'light' }}
          handleClick={() =>
            handleEdit(
              {
                id: nextId,
                name: '',
                src: '',
                description: '',
                categoryID: '',
              },
              'create'
            )
          }
        />
      </SubTitle>
      <FormGroup>
        {data &&
          data.data.listThings.items.map((item) => (
            <DragItem
              key={item.id}
              draggable={false}
              item={item}
              src={item.src}
              heading={item.name}
              handleEdit={handleEdit}
              handleDelete={handleDelete}
            />
          ))}
        <Modal isOpen={state.isOpen}>
          <AdminEdit
            handleClose={handleClose}
            handleSave={handleSave}
            saveLabel="Save Thing"
          >
            <label htmlFor="thing_name">Name</label>
            <input
              type="text"
              id="thing_name"
              name="name"
              placeholder="Thing Name"
              className="thqTextInput textinput"
              onChange={handleChange}
              data-id={state.fields.id}
              value={state.fields.name}
              autoComplete="off"
            />
            <label htmlFor="thing_categoryID">Category</label>
            <select
              id="thing_categoryID"
              name="categoryID"
              className="textinput"
              onChange={handleChange}
              data-id={state.fields.id}
              value={state.fields.categoryID}
              autoComplete="off"
            >
              <option value="" disabled>
                Select Category
              </option>
              {categories &&
                categories.data.listCategorys.items
                  .sort((a, b) => a.id - b.id)
                  .map((category) => (
                    <option key={category.id} value={category.id}>
                      {category.name}
                    </option>
                  ))}
            </select>
            <label htmlFor="thing_src">Image</label>
            <input
              type="file"
              id="thing_src"
              accept="image/png"
              data-id={state.fields.id}
              onChange={handleFileChange}
              autoComplete="off"
            />
            <label htmlFor="thing_description">Description</label>
            <textarea
              id="thing_description"
              placeholder="Thing Description"
              name="description"
              data-id={state.fields.id}
              value={state.fields.description}
              onChange={handleChange}
              className="thqTextArea textarea"
              autoComplete="off"
            ></textarea>
          </AdminEdit>
        </Modal>
        <CtaWrapper>
          <Button
            label="Add Thing"
            options={{
              fullWidth: true,
              color: colorMode === 'light' ? 'dark' : 'light',
            }}
            handleClick={() =>
              handleEdit(
                {
                  id: nextId,
                  name: '',
                  src: '',
                  description: '',
                  categoryID: '',
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

export default AdminThings
