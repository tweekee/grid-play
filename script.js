const form = document.forms[0]
const clearBtn = form.lastElementChild
const table = document.querySelector('table')

form.onsubmit = handleSubmit
table.onclick = handleClick
table.onmousemove = handleMouse

function handleMouse(e) {
  if (!e.shiftKey) return
  
  fill(e.target)
}

function handleClick(e) {
  if (e.target.localName != 'td') return

  if (e.target.style.background != e.target.style.color) {
    clear(e.target)
  } else {
    fill(e.target)
  }
}

function fill(td) {
  td.style.background = td.style.borderColor
}

function clear(td) {
  td.style.background = td.style.color
}

function handleSubmit(e) {
  if (e.submitter == clearBtn) {
    table.querySelectorAll('td').forEach(clear)
    return
  }

  const cellSize = form.size.value;
  const rowCount = form.rows.value;
  const columnCount = form.columns.value;
  const bgColor = form.bg.value
  const fgColor = form.fg.value
  
  makeGrid(cellSize, rowCount, columnCount, bgColor, fgColor)
}

function makeGrid(cellSize, rowCount, columnCount, bgColor, fgColor) {
  const html = `
    <tbody>
      ${`<tr>
        ${`<td style="width:${cellSize}px; height:${cellSize}px; background: ${bgColor}; border-color: ${fgColor}; color: ${bgColor}"></td>`.repeat(columnCount)}
      </tr>`.repeat(rowCount)}
    </tbody>
  `
  
  table.innerHTML = html
}