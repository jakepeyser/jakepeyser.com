import React from 'react'

export default ({ summary }) =>
  <div className="project__summary">
    <h2>Project Summary</h2>
    <table>
      <tbody>
      {Object.keys(summary).map(key => {
        const value = typeof summary[key] === 'string'
          ? summary[key].slice(0, 4) === 'http'
            ? `<a href=${summary[key]} target="_blank"}>${summary[key]}</a>`
            : summary[key]
          : summary[key].join(', ')
        return (
          <tr key={ key } className="project__summary-row">
            <td>{ key }:</td>
            <td dangerouslySetInnerHTML={{ __html: value }}></td>
          </tr>
        )
      })}
      </tbody>
    </table>
  </div>
