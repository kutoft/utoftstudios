/* eslint-disable */
// this is an auto generated file. This will be overwritten

export const onCreateCategory = /* GraphQL */ `
  subscription OnCreateCategory {
    onCreateCategory {
      id
      name
      things {
        items {
          id
          name
          src
          description
          categoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateCategory = /* GraphQL */ `
  subscription OnUpdateCategory {
    onUpdateCategory {
      id
      name
      things {
        items {
          id
          name
          src
          description
          categoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteCategory = /* GraphQL */ `
  subscription OnDeleteCategory {
    onDeleteCategory {
      id
      name
      things {
        items {
          id
          name
          src
          description
          categoryID
          createdAt
          updatedAt
        }
        nextToken
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateThing = /* GraphQL */ `
  subscription OnCreateThing {
    onCreateThing {
      id
      name
      src
      description
      categoryID
      category {
        id
        name
        things {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateThing = /* GraphQL */ `
  subscription OnUpdateThing {
    onUpdateThing {
      id
      name
      src
      description
      categoryID
      category {
        id
        name
        things {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteThing = /* GraphQL */ `
  subscription OnDeleteThing {
    onDeleteThing {
      id
      name
      src
      description
      categoryID
      category {
        id
        name
        things {
          nextToken
        }
        createdAt
        updatedAt
      }
      createdAt
      updatedAt
    }
  }
`;
export const onCreateQuote = /* GraphQL */ `
  subscription OnCreateQuote {
    onCreateQuote {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateQuote = /* GraphQL */ `
  subscription OnUpdateQuote {
    onUpdateQuote {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteQuote = /* GraphQL */ `
  subscription OnDeleteQuote {
    onDeleteQuote {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onCreateDescription = /* GraphQL */ `
  subscription OnCreateDescription {
    onCreateDescription {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onUpdateDescription = /* GraphQL */ `
  subscription OnUpdateDescription {
    onUpdateDescription {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
export const onDeleteDescription = /* GraphQL */ `
  subscription OnDeleteDescription {
    onDeleteDescription {
      id
      value
      createdAt
      updatedAt
    }
  }
`;
