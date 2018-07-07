import fs from 'fs'
import { remote } from 'electron'
import saveFolderDialog from '../../helpers/save-folder-dialog'
import openFolderDialog from '../../helpers/open-folder.dialog'

// Default fiddle values to demostrate what each box in the UI is for. It is
// stored here so that we can reset it when we need to.
const defaultFiddle = {
  htmlCode: '<p>Hello World</p>',
  cssCode: 'p { color: blue; }',
  javascriptCode: `// Check the console \n console.log('This is a test!')`
}

export default {
  state: {
    fiddle: {
      htmlCode: '',
      cssCode: '',
      javascriptCode: '',
      fileDirectory: '',
      isSaved: false
    }
  },
  mutations: {
    SET_FIDDLE (state, newValue) {
      state.fiddle = newValue
    }
  },
  actions: {
    initFiddle ({ dispatch }) {
      // When starting up the app, initialize the editors
      // to have the default fiddle values.
      dispatch('resetFiddle')
    },
    updateFiddle ({ state, commit }, codeChanges) {
      const updatedFiddle = {
        ...state.fiddle,
        ...codeChanges
      }

      commit('SET_FIDDLE', updatedFiddle)
    },
    resetFiddle ({ commit }) {
      // Reset current fiddle to the default
      commit('SET_FIDDLE', defaultFiddle)
    },
    openFiddle ({ dispatch }) {
      // Provide the home directory as the base path for saving.
      const defaultPath = remote.app.getPath('home')

      // Only allow json as the file type to save as (this will be what
      // is readable when we attempt to open the file).
      const filters = [{ name: 'JSON', extensions: ['json'] }]

      // Utilize our helper function for opening the save folder dialog through
      // electron.
      openFolderDialog({
        title: 'Open Fiddle',
        buttonTitle: 'Open',
        defaultPath,
        filters,
        callback: filePaths => {
          // If the filePaths are undefined, the user did not select
          // any directories. Return to prevent any errors from occurring.
          if (filePaths === undefined) return

          const fileName = filePaths[0]
          // Read a file in from the file path selected by the user.
          fs.readFile(fileName, 'utf-8', (error, data) => {
            // If an error occurs, log it in the console and return
            // so that no other errors can occur.
            if (error) {
              console.error(error)
              return
            }

            // The data returned will be in string format but should be
            // json since we only allow json files to be selected so try
            // to parse the data as json.
            const parsedData = JSON.parse(data)

            // If the json that we return does not contain the attributes
            // that we consider a fiddle, return.
            if (
              !parsedData.htmlCode ||
              !parsedData.cssCode ||
              !parsedData.javascriptCode
            ) {
              return
            }

            // We have successfully loaded fiddle data from a file and it
            // appears to be in the correct format. Go ahead and update the
            // current fiddle with the data we loaded.
            dispatch('updateFiddle', parsedData)
          })
        }
      })
    },
    saveFiddle ({ state, dispatch }) {
      // If the file has not been saved before or if we do not have the files
      // directory that it was previously saved to for some reason
      // dispatch the 'saveNewFiddle' action.
      if (!state.fiddle.isSaved || !state.fiddle.fileDirectory) {
        dispatch('saveNewFiddle')
        return
      }

      // Save to the already existing file for the fiddle.
      fs.writeFile(
        state.fiddle.fileDirectory,
        JSON.stringify(state.fiddle, null, 2),
        error => {
          if (error) console.error(error)
        }
      )
    },
    saveNewFiddle ({ state, dispatch }) {
      // Provide the home directory as the base path for saving.
      const defaultPath = remote.app.getPath('home')

      // Only allow json as the file type to save as (this will be what
      // is readable when we attempt to open the file).
      const filters = [{ name: 'JSON', extensions: ['json'] }]

      // Utilize our helper function for opening the save folder dialog through
      // electron.
      saveFolderDialog({
        title: 'Save New Fiddle',
        buttonTitle: 'Save',
        defaultPath,
        filters,
        callback: fileName => {
          if (fileName === undefined) return

          // Update the fiddle so we know that it has already been saved
          // and how we can save to it next time.
          dispatch('updateFiddle', {
            fileDirectory: fileName,
            isSaved: true
          })

          // Save the fiddle data stored in state to the directory that the user
          // provided.
          fs.writeFile(
            fileName,
            JSON.stringify(state.fiddle, null, 2),
            error => {
              if (error) console.error(error)
            }
          )
        }
      })
    }
  }
}
