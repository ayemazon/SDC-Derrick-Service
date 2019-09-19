import React from 'react';
import ReactDOM from 'react-dom';
import ProductView from './components/productview.jsx';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import SearchIcon from '@material-ui/icons/Search';
import InputBase from '@material-ui/core/InputBase';
import axios from 'axios';

import './styles.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      imagesData: []
    };
  }
  componentDidMount() {
    axios.get('/gallery')
      .then((images) => {
        this.setState({imagesData: images.data})
      })
    }
  render() {
    return (
      <>
        <AppBar
          style={{padding: '0 20px 0', backgroundColor: '#232f3e', height: '7%' }}
        >
          <Toolbar style={{ padding: '0px' }}>
            <IconButton
              edge="start"
              style={{ marginRight: '5px' }}
              color="inherit"
              aria-label="Open drawer"
            >
              <MenuIcon />
            </IconButton>
            <h2>Amazon</h2>
            <div
              style={{
                backgroundColor: 'white',
                marginLeft: '20%',
                padding: '5px',
                borderRadius: '5px',
                position: 'relative',
                width: '32%',
              }}
            >
              <div style={{ width: '70%' }}>
                <SearchIcon
                  style={{
                    color: 'black',
                    height: '86%',
                    position: 'absolute',
                    pointerEvents: 'none',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    width: '1.4em',
                  }}
                />
                {/* <form onSubmit={this.handleSubmit}> */}
                {/* <label> */}
                {/* Search */}
                {/* <input type="text" /> */}
                <InputBase
                  placeholder="Search…"
                  value={this.state.value}
                  onChange={this.handleChange}
                  inputProps={{ 'aria-label': 'Search' }}
                  style={{
                    color: 'black',
                    marginLeft: '5px',
                    display: 'inline-block',
                    width: '72%',
                    border: 'none',
                  }}
                />
              </div>
            </div>
            {/* </label> */}
            {/* </form> */}
          </Toolbar>
        </AppBar>
        
        
        <ProductView images={this.state.imagesData} />
      </>
    );
  }
}

ReactDOM.render(<App />, document.getElementById('photoapp'));
