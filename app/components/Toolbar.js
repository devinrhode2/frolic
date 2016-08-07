import React, { Component } from 'react'
import styles from './Toolbar.css'

// from uikit
import ButtonGroup from './uikit/buttongroup/index.js'
import Button from './uikit/button/index.js'
import buttonGroupStyles from './uikit/buttongroup/buttongroup.css'

const editorThemes = [
    {id: 'ambiance', name: 'ambiance'},
    {id: 'chrome', name: 'chrome'},
    {id: 'dawn', name: 'dawn'},
    {id: 'github', name: 'github'},
    {id: 'merbivore', name: 'merbivore'},
    {id: 'cobalt', name: 'cobalt'},
    {id: 'terminal', name: 'terminal'},
    {id: 'twilight', name: 'twilight'},
]

const languages = [
    {id: 'elm', name: 'elm'},
    {id: 'purescript', name: 'purescript'},
]

import openFileIcon from 'url!../images/open-file-16x16.ico'
// import saveFileIcon from 'url!../images/save-icon.png'
import saveFileIcon from 'url!../images/document-save-16x16.ico'
import newFileIcon from 'url!../images/new-file-icon-16x16.ico'

class Toolbar extends Component {
    constructor(props) {
        super(props)

        this.toggleCodePanel = this.toggleCodePanel.bind(this)
        this.togglePlaygroundPanel = this.togglePlaygroundPanel.bind(this)
        this.toggleOutputPanel = this.toggleOutputPanel.bind(this)
    }

    toggleCodePanel() {
        if(this.props.onCodePanelVisibilityChange) {
            this.props.onCodePanelVisibilityChange(!this.props.showCodePanel)
        }
    }

    togglePlaygroundPanel() {
        if(this.props.onPlaygroundPanelVisibilityChange) {
            this.props.onPlaygroundPanelVisibilityChange(!this.props.showPlaygroundPanel)
        }
    }

    toggleOutputPanel() {
        if(this.props.onOutputPanelVisibilityChange) {
            this.props.onOutputPanelVisibilityChange(!this.props.showOutputPanel)
        }
    }

    render() {
        return (
            <div className={styles.toolbar}>
                <div className={styles['toolbar-left']}>
                    <select
                        value={this.props.editorTheme}
                        onChange={this.props.onEditorThemeChange}
                        >
                        {editorThemes.map((theme) => <option key={theme.id} value={theme.id}>{theme.name}</option>)}
                    </select>
                    <select
                        value={this.props.language}
                        onChange={this.props.onLanguageChange}
                        >
                        {languages.map((language) => <option key={language.id} value={language.id}>{language.name}</option>)}
                    </select>
                </div>
                <div className={styles['toolbar-right']}>
                    <ButtonGroup>
                        <Button
                            active={this.props.showCodePanel}
                            onClick={this.toggleCodePanel}
                            >
                            1
                        </Button>
                        <Button
                            active={this.props.showPlaygroundPanel}
                            onClick={this.togglePlaygroundPanel}
                            >
                            2
                        </Button>
                        <Button
                            active={this.props.showOutputPanel}
                            onClick={this.toggleOutputPanel}
                            >
                            3
                        </Button>
                    </ButtonGroup>
                    <label
                        style={{
                            paddingRight: 10
                        }}>
                        <input
                        type='checkbox'
                        value='Auto Compile'
                        checked={this.props.autoCompile}
                        onChange={this.props.onAutoCompileFlagChange}
                        />
                        Auto Compile
                    </label>
                    <img
                        alt='New File'
                        title='New File'
                        style={{marginRight: 10}}
                        src={newFileIcon}
                        onClick={this.props.onNewFileClick}
                        />
                    <img
                        alt='Save File'
                        title='Save File'
                        style={{marginRight: 10}}
                        src={saveFileIcon}
                        onClick={this.props.onSaveClick}
                        />
                    <img
                        alt='Open File'
                        title='Open File'
                        style={{marginRight: 10}}
                        src={openFileIcon}
                        onClick={this.props.onOpenClick}
                        />
                    <button
                        style={{
                            marginRight: 10
                        }}
                        onClick={this.props.onCompileClick}>
                        Compile
                    </button>
                </div>
            </div>
        )
    }
}

Toolbar.defaultProps = {
    language: 'purescript'
}

export default Toolbar
