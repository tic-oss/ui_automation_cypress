import 'cypress-real-events/support';

describe('Drag and Drop', () => {
    beforeEach(() => {
        cy.visit("https://tic.comakeit.com");
        cy.wait(2000);
        cy.contains('p', 'CanvasToCode').click();
        cy.get('#projectName').type('TestProj_1234');
    });



    it('13 Should perform drag and drop using X,Y coordinates', () => {

        // Get the source and target elements
        cy.contains('UI+Gateway').trigger('mousedown', { button: 0, force: true })
        //cy.get('.source-element').trigger('mousedown', { button: 0, force: true })
        cy.contains('Design your application architecture here').trigger('mousemove', { clientX: 692, clientY: 95, force: true })
        cy.contains('Design your application architecture here').trigger('mouseup', { force: true })

        // Add assertions to check if the drag and drop was successful
        // For example:
        // cy.get('.target-element').should('contain', 'Dragged content')
    })

    it('12 performs drag and drop with coordinates', () => {
        // Assuming you have elements to drag and drop

        // Get the source and target elements
        const sourceElement = cy.contains('UI+Gateway');
        const targetElement = cy.contains('Design your application architecture here');

        sourceElement
            .drag('.react-flow__pane', {
                source: { x: 750, y: 100 },
                force: true,
            })
            .then(success => {
                assert.isTrue(success);
            });

    });
    it('11 should simulate drag and drop', () => {

        cy.contains('UI+Gateway').dragFromTo(691, 95); // Replace with appropriate selectors

    })

    it('10 should perform drag and drop using dragstart event', () => {

        // Identify source and target elements
        const sourceElement = cy.contains('UI+Gateway');
        const targetElement = cy.contains('Design your application architecture here');

        sourceElement
            .trigger('mousedown', { which: 1, force: true }) // Trigger mouse down event on source element
            .trigger('mousemove', { clientX: 780, clientY: 600, force: true }) // Move to desired coordinates
            .trigger('mouseup', { force: true });

    });

    it('09 should perform drag and drop using dragstart event', () => {

        // Identify source and target elements
        const sourceElement = cy.contains('UI+Gateway');
        const targetElement = cy.contains('Design your application architecture here');

        sourceElement.then($source => {
            targetElement.then($target => {
                // Trigger dragstart event on the source element
                const dragStartEvent = new MouseEvent('dragstart', {
                    bubbles: true,
                    cancelable: true,
                });
                $source[0].dispatchEvent(dragStartEvent);

                // Simulate drag and drop by triggering the necessary mouse events
                const dropEvent = new MouseEvent('drop', {
                    bubbles: true,
                    cancelable: true,
                });
                const dragOverEvent = new MouseEvent('dragover', {
                    bubbles: true,
                    cancelable: true,
                });

                $target[0].dispatchEvent(dragOverEvent);
                $target[0].dispatchEvent(dropEvent);

                // Optionally, perform assertions to verify the success of the drag-and-drop operation
                // For example, check if the target element has the expected content or state

                // Clean up or perform additional assertions if needed
            });
        });
    });

    it('08 should perform drag and drop using dragstart event', () => {
        // Identify source and target elements
        const sourceElement = cy.contains('UI+Gateway');
        const targetElement = cy.contains('Design your application architecture here');


        // Trigger dragstart event on the source element
        sourceElement.trigger('dragstart', { dataTransfer: {} });

        // Simulate dragover event on target element
        targetElement.trigger('dragover');

        // Simulate drop event on target element
        targetElement.trigger('drop');

    });

    it('07 should perform drag and drop using dragstart event', () => {
        // Identify source and target elements
        const sourceElement = cy.contains('UI+Gateway');
        const targetElement = cy.contains('Design your application architecture here');

        // const draggableRect = draggable[0].getBoundingClientRect();
        //const draggableCenterX = draggableRect.left + draggableRect.width / 2;
        //const draggableCenterY = draggableRect.top + draggableRect.height / 2;


        // Trigger dragstart event on source element
        sourceElement.trigger('dragstart', { dataTransfer: {} });

        // Simulate dragging by triggering events
        cy.document().trigger('mousemove', { clientX: 1, clientY: 1 }); // Adjust the coordinates as needed

        // Trigger drop event on target element
        targetElement.trigger('drop');

        // Optionally, you can perform assertions to verify the success of the drag-and-drop operation
        // For example, check if the target element has the expected content or state

        // Clean up or perform additional assertions if needed
    });



    it('06 drags a React node and drops it onto a React canvas', () => {

        cy.contains('Service').as('draggableNode');
        cy.contains('Design your application architecture here').as('canvas');


        // Use Cypress's .trigger() to simulate native drag-and-drop
        cy.get('@draggableNode')
            .trigger('mousedown', { which: 1 })
            .trigger('dragstart', { dataTransfer: new DataTransfer() });

        cy.get('@canvas')
            .trigger('dragenter')
            .trigger('dragover')
            .trigger('drop')
            .trigger('dragend');

        // Add assertions to check if the drop was successful
    });

    it('05 drags a React node and drops it onto a React canvas', () => {

        // Get the draggable node's position
        cy.contains('Service').then((draggableNode) => {
            const draggableRect = draggableNode[0].getBoundingClientRect();
            const startX = draggableRect.left + draggableRect.width / 2;
            const startY = draggableRect.top + draggableRect.height / 2;

            // Get the canvas position
            cy.get('.reactflow-wrapper').then((canvas) => {
                const canvasRect = canvas[0].getBoundingClientRect();
                const endX = canvasRect.left + 450; // Adjust as needed
                const endY = canvasRect.top + 5; // Adjust as needed

                // Trigger drag-and-drop simulation
                cy.contains('Service').trigger('mousedown', { which: 1, pageX: startX, pageY: startY });

                cy.get('.reactflow-wrapper').trigger('mousemove', { clientX: endX, clientY: endY });

                cy.get('.reactflow-wrapper').trigger('mouseup', { force: true });

                // Add assertions to check if the drop was successful
            });
        });
    });

    it('04 drags a React node and drops it onto a React canvas', () => {

        // Get the draggable node's position
        cy.contains('Service').invoke('offset').then((position) => {
            const startX = position.left + 10; // Adding an offset to avoid the edge
            const startY = position.top + 10; // Adding an offset to avoid the edge

            // Get the canvas position
            cy.contains('Design your application architecture here').invoke('offset').then((canvasPosition) => {
                const endX = canvasPosition.left; // Adjust as needed
                const endY = canvasPosition.top; // Adjust as needed

                // Trigger drag-and-drop simulation
                cy.contains('Service').trigger('mousedown', { which: 1, pageX: startX, pageY: startY });

                cy.contains('Design your application architecture here').trigger('mousemove', { clientX: endX, clientY: endY });

                cy.contains('Design your application architecture here').trigger('mouseup', { force: true });

                // Add assertions to check if the drop was successful
            });
        });
    });

    it('03 drags a React node and drops it onto a React canvas', () => {

        // Locate the draggable React node and the canvas using appropriate selectors
        cy.contains('Service').trigger('mousedown', { which: 1 });

        cy.contains('Design your application architecture here').trigger('mousemove', { clientX: 1000, clientY: 800 });

        cy.contains('Design your application architecture here').trigger('mouseup', { force: true });

        // Add assertions to check if the drop was successful
    });


    it('02 should drag element to target', () => {
        cy.contains('Service').then(draggable => {
            const draggableRect = draggable[0].getBoundingClientRect();
            const draggableCenterX = draggableRect.left + draggableRect.width / 2;
            const draggableCenterY = draggableRect.top + draggableRect.height / 2;

            // Start the drag
            cy.contains('Service').trigger('mousedown', { which: 1 });

            // Simulate cursor movement and complete the drop
            cy.then(() => {
                return new Promise(resolve => {
                    cy.document().trigger('mousemove', {
                        clientX: draggableCenterX,
                        clientY: draggableCenterY,
                    });

                    cy.document().trigger('mouseup', {
                        clientX: draggableCenterX,
                        clientY: draggableCenterY,
                        force: true,
                    });

                    resolve();
                });
            });
        });
    });
    it('01 should drag element to target', () => {
        // Get the draggable element
        cy.contains('Service').then(draggable => {
            const draggableRect = draggable[0].getBoundingClientRect();
            const draggableCenterX = draggableRect.left + draggableRect.width;
            const draggableCenterY = draggableRect.top + draggableRect.height;

            // Start the drag
            cy.contains('Service').trigger('mousedown', { which: 1 });

            // Simulate cursor movement
            cy.document().trigger('mousemove', {
                //clientX: draggableCenterX,
                // clientY: draggableCenterY,
                clientX: 600,
                clientY: 450,
            });

            // Complete the drop
            cy.document().trigger('mouseup', {
                clientX: draggableCenterX,
                clientY: draggableCenterY,
                force: true,
            });
        });
    });


});
