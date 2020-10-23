import React from 'react'
import { getQuote, listQuotes } from '../graphql/queries'
import { createQuote, updateQuote, deleteQuote } from '../graphql/mutations'

import useCRUD from '../utlis/useCRUD'
import useNextId from '../utlis/useNextId'
import { useColorMode } from '../utlis/colorModeContext'

import Button from './button'
import CtaWrapper from './cta-wrapper'
import FormGroup from './form-group'
import SubTitle from './sub-title'
import Modal from './modal'
import AdminEdit from './admin-edit'
import Drag from './drag'
import DragZone from './drag-zone'
import DragItem from './drag-item'

const AdminQuote = () => {
  const { colorMode } = useColorMode()

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
      get: getQuote,
      list: listQuotes,
      create: createQuote,
      update: updateQuote,
      delete: deleteQuote,
    }
  )
  const { nextId } = useNextId(data?.data.listQuotes.items)

  const handleOrderChange = (id, index) => {
    const item = data.data.listQuotes.items.filter((x) => x.id === id)[0]
    const currentIndex = data.data.listQuotes.items.map((e) => e.id).indexOf(id)
    const rest = data.data.listQuotes.items.filter((x) => x.id !== id)
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
      <SubTitle title="Quote">
        <Button
          label="Add"
          options={{ color: colorMode === 'light' ? 'dark' : 'light' }}
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
      </SubTitle>
      <FormGroup>
        <Drag handleOrderChange={handleOrderChange}>
          {data &&
            data.data.listQuotes.items.map((item) => (
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
            saveLabel="Save Quote"
          >
            <label htmlFor="quote_quote">Quote</label>
            <input
              id="quote_quote"
              type="text"
              name="value"
              placeholder="About Page Quote"
              className="thqTextInput textinput"
              onChange={handleChange}
              data-id={state.fields.id}
              value={state.fields.value}
              autoComplete="off"
            />
          </AdminEdit>
        </Modal>
        <CtaWrapper>
          <Button
            label="Add Quote"
            options={{
              fullWidth: true,
              color: colorMode === 'light' ? 'dark' : 'light',
            }}
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

export default AdminQuote
