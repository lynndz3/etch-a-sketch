const container = document.querySelector('.container');
        const cells = document.getElementsByClassName('cells');

        makeRows(16, 16);

        function makeRows(rows, columns) {
            container.style.setProperty('--grid-rows', rows);
            container.style.setProperty('--grid-cols', columns);
            for (let i = 0; i < (rows * columns); i++) {
                const cell = document.createElement("div");
                cell.className = 'cells';
                container.appendChild(cell);
            };
        };

        let color = document.querySelector('#colorpicker').value;
        document.querySelector('#colorpicker').addEventListener('change', (e) => {
            color = e.target.value;
            console.log(color);
            return color;
        });

        let rainbowOption = document.querySelector('#rainbow-mode');
        let colorpicker = document.querySelector('#colorpicker');
        let colorpickerContainer = document.querySelector('.color-picker-container');

       
        rainbowOption.addEventListener("click", function() {
            if (rainbowOption.checked == true) {
                colorpicker.disabled = true;
                colorpicker.classList.add('disabled');
                colorpickerContainer.classList.add('disabled');
            }
            else {
                colorpicker.disabled = false;
                colorpicker.classList.remove('disabled');
                colorpickerContainer.classList.remove('disabled');
            }
        });

        let mouseDown = false;

        container.addEventListener('mousedown', (event) => {
                mouseDown = true;
            });
        

        document.addEventListener('mouseover', (event) => {
                if (mouseDown) {
                    if (event.target.className === "cells") {
                        if (rainbowOption.checked == true) {
                            event.target.style.backgroundColor =  "#" + Math.floor(Math.random()*16777215).toString(16);
                        }
                        else {
                            event.target.style.backgroundColor = color;
                        }
                        console.log(event);
                    }
                }    
            });
        document.addEventListener('mouseup', () => {
            mouseDown = false;
        });
        
    let slider = document.getElementById("myRange");
    let dimensions = document.querySelector('#grid-size');
    dimensions.textContent = slider.value + " x " + slider.value; // Display the default slider value

    // Update the current slider value (each time you drag the slider handle)
    slider.oninput = function() {
        dimensions.textContent = this.value + " x " + this.value;
        clearContents();
        makeRows(this.value, this.value);
    }

    function clearContents() {
        let allCells = document.querySelectorAll('.cells');
        for (let cell of allCells) {
            cell.style.backgroundColor = "";
        }
    }