import React from 'react'
import { API, graphqlOperation, Storage } from 'aws-amplify'

import useAsync from './useAsync'
import useSafeDispatch from './useSafeDispatch'
import uploadFile from './uploadFile'

const defaultInitialState = {
  type: 'edit',
  fields: {},
  method: 'update',
  isOpen: false,
}

const defaultMethods = {
  get: () => {},
  list: () => {},
  create: () => {},
  update: () => {},
  delete: () => {},
}

function useCRUD(objectStructure = {}, initialMethods = defaultMethods) {
  const initialStateRef = React.useRef({
    ...defaultInitialState,
    fields: { ...objectStructure },
  })
  const methods = {
    ...defaultMethods,
    ...initialMethods,
  }
  const [state, setState] = React.useReducer(
    (state, action) => ({ ...state, ...action }),
    initialStateRef.current
  )

  const { data, reset, run } = useAsync(null)

  const safeSetState = useSafeDispatch(setState)

  const handleClose = () => {
    safeSetState({
      isOpen: false,
    })
  }

  const handleEdit = (item, method = 'update') => {
    const myFields = Object.keys(objectStructure).reduce(
      (a, key) => ({ ...a, [key]: item[key] }),
      {}
    )
    safeSetState({
      type: 'edit',
      method,
      fields: {
        ...myFields,
      },
      isOpen: true,
    })
  }

  const handleSave = () => {
    safeSetState({
      type: 'save',
      isOpen: false,
    })
  }

  const handleDelete = (item) => {
    safeSetState({
      type: 'delete',
      fields: {
        ...item,
      },
      isOpen: false,
    })
  }

  const handleChange = (e) => {
    safeSetState({
      type: 'edit',
      fields: {
        ...state.fields,
        id: e.target.getAttribute('data-id'),
        [e.target.name]: e.target.value,
      },
    })
  }

  const handleFileChange = (e) => {
    safeSetState({
      type: 'edit',
      fields: {
        ...state.fields,
        id: e.target.getAttribute('data-id'),
        src: e.target.files[0],
      },
    })
  }

  // LIST THINGS
  React.useEffect(() => {
    if (!data) run(API.graphql(graphqlOperation(methods.list)))
  }, [data])

  const asyncUploadFile = async (myState) => {
    try {
      const { image } = await uploadFile(myState.fields.src)
      if (image) {
        safeSetState({
          fields: {
            ...myState.fields,
            src: image,
          },
        })
      }
    } catch (err) {
      console.log('Upload Error')
      safeSetState({
        fields: {
          ...myState.fields,
          src: image,
        },
      })
    }
  }

  // CRUD EFFECTS
  React.useEffect(() => {
    let myState = { ...state }

    // SAVE THING
    if (myState.type === 'save') {
      // AN IMAGE NEEDS TO BE UPLOADED
      if (typeof myState.fields.src === 'object') {
        asyncUploadFile(myState)
        // Storage.put(myState.fields.src.name, myState.fields.src, {
        //   level: 'public',
        // })
        //   .then((result) => {
        //     Storage.get(result.key)
        //       .then((result) => {
        //         const imagePath = result.split('?')
        //         safeSetState({
        //           fields: {
        //             ...myState.fields,
        //             src: imagePath[0],
        //           },
        //         })
        //       })
        //       .catch((err) => console.log(err))
        //   })
        //   .catch((err) => console.log(err))
      }

      // CREATE
      if (
        myState.method === 'create' &&
        typeof myState.fields.src !== 'object'
      ) {
        API.graphql(
          graphqlOperation(methods.create, {
            input: myState.fields,
          })
        )
          .then((response) => {
            console.log(response)
            reset()
            safeSetState(initialState)
          })
          .catch((error) => {
            console.log(error)
          })
      }
      // UPDATE
      if (myState.method === 'update') {
        if (typeof myState.fields.src === 'object') {
          asyncUploadFile(myState)
        }
        API.graphql(
          graphqlOperation(methods.update, {
            input: myState.fields,
          })
        )
          .then((response) => {
            console.log(response)
            reset()
            safeSetState(initialState)
          })
          .catch((error) => {
            console.log(error)
          })
      }
    }

    // DELETE THING
    if (state.type === 'delete') {
      const key = state.fields.src.split('public/')
      Storage.remove(decodeURI(key[1])).catch((error) => {
        console.log(error)
      })

      API.graphql(
        graphqlOperation(methods.delete, {
          input: { id: state.fields.id },
        })
      )
        .then(() => {
          reset()
        })
        .catch((error) => {
          console.log(error)
        })
    }
  }, [state])

  return {
    state,
    data,
    handleEdit,
    handleSave,
    handleDelete,
    handleChange,
    handleFileChange,
    handleClose,
  }
}

export default useCRUD
