import * as actions from './actions';
import {dispatch} from '../index'

  /**
   * Dispatch action to get collection data from parse server
   * @param {object} payload
   * @param {string} payload.objectId document id
   * @param {string} payload.schemaName db schemaName
   * @param {string} payload.targetName key to store response inside redux store
   * if targetName empty then we use documentId as targetName
   * @param {string} payload.include pointer to include
   * @param {string} payload.keys keys to include
   * @param {object} payload.logger pass to your Logger relevant info 
   * 
   */
  export const fetchData = (payload) => {
    dispatch(actions.fetchData(payload))
  }

  /**
   * Dispatch action to update local data inside document
   * @param {object} payload
   * @param {string} payload.targetName key to find document inside redux store.parse.documents
   * @param {string} payload.key key to update
   * @param {string} payload.value value to set
   * @param {object} payload.logger pass to your Logger relevant info 
   */
  export const updateField = (payload) => {
    dispatch(actions.updateField(payload))
  }

  /**
   * Dispatch action to delete document from collection
   * @param {object} payload
   * @param {string} payload.schemaName db schemaName
   * @param {string} payload.targetName key to store response inside redux store
   * @param {string} payload.objectId document id
   * @param {object} payload.logger pass to your Logger relevant info 
   */
  export const deleteDoc = (payload) => {
    dispatch(actions.deleteDoc(payload))
  }

  /**
   * Dispatch action to create a new document in collection
   * @param {object} payload
   * @param {string} payload.schemaName db schemaName
   * @param {string} payload.targetName key to store response inside redux store
   * @param {object} payload.data new document data
   * @param {object} payload.logger pass to your Logger relevant info 
   */
  export const postDoc = (payload) => {
    dispatch(actions.postDoc(payload))
  }

  /**
   * Dispatch action to create a new document in collection
   * @param {object} payload
   * @param {string} payload.schemaName db schemaName
   * @param {string} payload.targetName key to store response inside redux store
   * @param {string} payload.objectId document id
   * @param {object} payload.data data to update in the document
   * @param {object} payload.logger pass to your Logger relevant info 
   */
  export const putDoc = (payload) => {
    dispatch(actions.putDoc(payload))
  }
  
  /**
   * Dispatch action to clean document by targetName
   * @param {object} payload
   * @param {string} payload.targetName
   * 
   */
  export const cleanData = (payload) => {
    dispatch(actions.cleanData(payload))
  }
  /**
   * Dispatch action to clean all documents
   * 
   */
  export const cleanDocuments = () => {
    dispatch(actions.cleanDocuments())
  }