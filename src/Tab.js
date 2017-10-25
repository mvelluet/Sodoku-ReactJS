import React, { Component } from 'react';
import Sudoku from './sudoku_m';

const sdk = Sudoku[0];
let cursor = {
  color: '#61dafb',
};

const sdkRight = {
  borderRightColor: '#222',
};

const sdkBot = {
  borderBottomColor: '#222',
};

class Tab extends Component {
  state = {
    prec: null,
    actuel: null,
    sdk,
  };


  handleClick = (e) => {
    const nb = e.target.id;
    const { sdk } = this.state;
    if (e.target.tagName !== 'TD') return;
    if (sdk[nb][0][1] !== true) return;
    sdk[nb][0][0] += 1;
    if (sdk[nb][0][0] > 9) sdk[nb][0][0] = 1;
    const finish = this.solveur();
    if (finish) {
      cursor = {
        color: '#2cc36b',
      };
    }
    this.setState({ sdk });
  }

  solveur = () => {
    let i = 1;
    while (sdk[i][0][0] !== sdk[i][0][2]) {
      i += 1;
    }
    if (i === 1) {
      while (i <= 81) {
        if (sdk[i][0][0] === sdk[i][0][2]) {
          if (i === 81) {
            return true;
          }
        } else {
          cursor = {
            color: '#61dafb',
          };
          return false;
        }
        i += 1;
      }
    }
    return false;
  }

  render() {
    return (
      <table className="contour tableau" onClick={this.handleClick}>
        <tbody>
          <tr>
            <td id="1" style={sdk[1][0][1] ? cursor : null}>{sdk[1][0][0]}</td>
            <td id="2" style={sdk[2][0][1] ? cursor : null}>{sdk[2][0][0]}</td>
            <td id="3" style={sdk[3][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[3][0][0]}</td>
            <td id="4" style={sdk[4][0][1] ? cursor : null}>{sdk[4][0][0]}</td>
            <td id="5" style={sdk[5][0][1] ? cursor : null}>{sdk[5][0][0]}</td>
            <td id="6" style={sdk[6][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[6][0][0]}</td>
            <td id="7" style={sdk[7][0][1] ? cursor : null}>{sdk[7][0][0]}</td>
            <td id="8" style={sdk[8][0][1] ? cursor : null}>{sdk[8][0][0]}</td>
            <td id="9" style={sdk[9][0][1] ? cursor : null}>{sdk[9][0][0]}</td>
          </tr>
          <tr>
            <td id="10" style={sdk[10][0][1] ? cursor : null}>{sdk[10][0][0]}</td>
            <td id="11" style={sdk[11][0][1] ? cursor : null}>{sdk[11][0][0]}</td>
            <td id="12" style={sdk[12][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[12][0][0]}</td>
            <td id="13" style={sdk[13][0][1] ? cursor : null}>{sdk[13][0][0]}</td>
            <td id="14" style={sdk[14][0][1] ? cursor : null}>{sdk[14][0][0]}</td>
            <td id="15" style={sdk[15][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[15][0][0]}</td>
            <td id="16" style={sdk[16][0][1] ? cursor : null}>{sdk[16][0][0]}</td>
            <td id="17" style={sdk[17][0][1] ? cursor : null}>{sdk[17][0][0]}</td>
            <td id="18" style={sdk[18][0][1] ? cursor : null}>{sdk[18][0][0]}</td>
          </tr>
          <tr>
            <td id="19" style={sdk[19][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[19][0][0]}</td>
            <td id="20" style={sdk[20][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[20][0][0]}</td>
            <td id="21" style={sdk[21][0][1] ? Object.assign({}, sdkRight, sdkBot, cursor) : Object.assign({}, sdkRight, sdkBot)}>{sdk[21][0][0]}</td>
            <td id="22" style={sdk[22][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[22][0][0]}</td>
            <td id="23" style={sdk[23][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[23][0][0]}</td>
            <td id="24" style={sdk[24][0][1] ? Object.assign({}, sdkRight, sdkBot, cursor) : Object.assign({}, sdkRight, sdkBot)}>{sdk[24][0][0]}</td>
            <td id="25" style={sdk[25][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[25][0][0]}</td>
            <td id="26" style={sdk[26][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[26][0][0]}</td>
            <td id="27" style={sdk[27][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[27][0][0]}</td>
          </tr>
          <tr>
            <td id="28" style={sdk[28][0][1] ? cursor : null}>{sdk[28][0][0]}</td>
            <td id="29" style={sdk[29][0][1] ? cursor : null}>{sdk[29][0][0]}</td>
            <td id="30" style={sdk[30][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[30][0][0]}</td>
            <td id="31" style={sdk[31][0][1] ? cursor : null}>{sdk[31][0][0]}</td>
            <td id="32" style={sdk[32][0][1] ? cursor : null}>{sdk[32][0][0]}</td>
            <td id="33" style={sdk[33][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[33][0][0]}</td>
            <td id="34" style={sdk[34][0][1] ? cursor : null}>{sdk[34][0][0]}</td>
            <td id="35" style={sdk[35][0][1] ? cursor : null}>{sdk[35][0][0]}</td>
            <td id="36" style={sdk[36][0][1] ? cursor : null}>{sdk[36][0][0]}</td>
          </tr>
          <tr>
            <td id="37" style={sdk[37][0][1] ? cursor : null}>{sdk[37][0][0]}</td>
            <td id="38" style={sdk[38][0][1] ? cursor : null}>{sdk[38][0][0]}</td>
            <td id="39" style={sdk[39][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[39][0][0]}</td>
            <td id="40" style={sdk[40][0][1] ? cursor : null}>{sdk[40][0][0]}</td>
            <td id="41" style={sdk[41][0][1] ? cursor : null}>{sdk[41][0][0]}</td>
            <td id="42" style={sdk[42][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[42][0][0]}</td>
            <td id="43" style={sdk[43][0][1] ? cursor : null}>{sdk[43][0][0]}</td>
            <td id="44" style={sdk[44][0][1] ? cursor : null}>{sdk[44][0][0]}</td>
            <td id="45" style={sdk[45][0][1] ? cursor : null}>{sdk[45][0][0]}</td>
          </tr>
          <tr>
            <td id="46" style={sdk[46][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[46][0][0]}</td>
            <td id="47" style={sdk[47][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[47][0][0]}</td>
            <td id="48" style={sdk[48][0][1] ? Object.assign({}, sdkRight, sdkBot, cursor) : Object.assign({}, sdkRight, sdkBot)}>{sdk[48][0][0]}</td>
            <td id="49" style={sdk[49][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[49][0][0]}</td>
            <td id="50" style={sdk[50][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[50][0][0]}</td>
            <td id="51" style={sdk[51][0][1] ? Object.assign({}, sdkRight, sdkBot, cursor) : Object.assign({}, sdkRight, sdkBot)}>{sdk[51][0][0]}</td>
            <td id="52" style={sdk[52][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[52][0][0]}</td>
            <td id="53" style={sdk[53][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[53][0][0]}</td>
            <td id="54" style={sdk[54][0][1] ? Object.assign({}, sdkBot, cursor) : sdkBot}>{sdk[54][0][0]}</td>
          </tr>
          <tr>
            <td id="55" style={sdk[55][0][1] ? cursor : null}>{sdk[55][0][0]}</td>
            <td id="56" style={sdk[56][0][1] ? cursor : null}>{sdk[56][0][0]}</td>
            <td id="57" style={sdk[57][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[57][0][0]}</td>
            <td id="58" style={sdk[58][0][1] ? cursor : null}>{sdk[58][0][0]}</td>
            <td id="59" style={sdk[59][0][1] ? cursor : null}>{sdk[59][0][0]}</td>
            <td id="60" style={sdk[60][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[60][0][0]}</td>
            <td id="61" style={sdk[61][0][1] ? cursor : null}>{sdk[61][0][0]}</td>
            <td id="62" style={sdk[62][0][1] ? cursor : null}>{sdk[62][0][0]}</td>
            <td id="63" style={sdk[63][0][1] ? cursor : null}>{sdk[63][0][0]}</td>
          </tr>
          <tr>
            <td id="64" style={sdk[64][0][1] ? cursor : null}>{sdk[64][0][0]}</td>
            <td id="65" style={sdk[65][0][1] ? cursor : null}>{sdk[65][0][0]}</td>
            <td id="66" style={sdk[66][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[66][0][0]}</td>
            <td id="67" style={sdk[67][0][1] ? cursor : null}>{sdk[67][0][0]}</td>
            <td id="68" style={sdk[68][0][1] ? cursor : null}>{sdk[68][0][0]}</td>
            <td id="69" style={sdk[69][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[69][0][0]}</td>
            <td id="70" style={sdk[70][0][1] ? cursor : null}>{sdk[70][0][0]}</td>
            <td id="71" style={sdk[71][0][1] ? cursor : null}>{sdk[71][0][0]}</td>
            <td id="72" style={sdk[72][0][1] ? cursor : null}>{sdk[72][0][0]}</td>
          </tr>
          <tr>            
            <td id="73" style={sdk[73][0][1] ? cursor : null}>{sdk[73][0][0]}</td>
            <td id="74" style={sdk[74][0][1] ? cursor : null}>{sdk[74][0][0]}</td>
            <td id="75" style={sdk[75][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[75][0][0]}</td>
            <td id="76" style={sdk[76][0][1] ? cursor : null}>{sdk[76][0][0]}</td>
            <td id="77" style={sdk[77][0][1] ? cursor : null}>{sdk[77][0][0]}</td>
            <td id="78" style={sdk[78][0][1] ? Object.assign({}, sdkRight, cursor) : sdkRight}>{sdk[78][0][0]}</td>
            <td id="79" style={sdk[79][0][1] ? cursor : null}>{sdk[79][0][0]}</td>
            <td id="80" style={sdk[80][0][1] ? cursor : null}>{sdk[80][0][0]}</td>
            <td id="81" style={sdk[81][0][1] ? cursor : null}>{sdk[81][0][0]}</td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default Tab;