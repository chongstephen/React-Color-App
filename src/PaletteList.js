import React, { Component } from "react";
import MiniPalette from "./MiniPalette";
import { Link } from "react-router-dom";

class PaletteList extends Component {
  render() {
    const { palette } = this.props;
    return (
      <div>
        <MiniPalette />
        <h1>Palette List</h1>
        {palette.map((palette) => (
         <MiniPalette {...palette}/>
        ))}
      </div>
    );
  }
}

export default PaletteList;
