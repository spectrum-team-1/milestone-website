const MILESTONE_CONTAINER = document.getElementById('milestone-output');

const milestoneHtml = {
	one: `
        <div id="milestone-container" class="milestone-container fade-in">
            <div>
                <iframe
                    class="embed"
                    src="https://www.youtube.com/embed/rbINuRxOAAQ">
                </iframe>
            </div>
            <div class="download-container">
                <span class="download-title">Download Deliverables:</span>
                <a
                    href="https://drive.google.com/uc?export=download&id=19UKQFrvncfl0qvkw_7bPapGw_ztRVRr9"
                    target="_blank"
                    class="download button"
                    >Milestone One</a
                >
            </div>
        </div>
    `,
	two: `
        <div id="milestone-container"  class="milestone-container fade-in">
            <div>
                <iframe
                    class="embed"
                    src="https://www.youtube.com/embed/oy8xyyArlug">
                </iframe>
            </div>
            <div class="download-container">
                <span class="download-title">Download Deliverables:</span>
                <a
                    href="https://drive.google.com/uc?export=download&id=19UKQFrvncfl0qvkw_7bPapGw_ztRVRr9"
                    target="_blank"
                    class="download button"
                    >Milestone Two</a
                >
            </div>
        </div>
    `,
	three: `
        <div id="milestone-container"  class="milestone-container fade-in">
            <div>
                <iframe
                    class="embed"
                    src="https://www.youtube.com/embed/rbINuRxOAAQ">
                </iframe>
            </div>
            <div class="download-container">
                <span class="download-title">Download Deliverables:</span>
                <a
                    href="https://drive.google.com/uc?export=download&id=19UKQFrvncfl0qvkw_7bPapGw_ztRVRr9"
                    target="_blank"
                    class="download button"
                    >Milestone Three</a
                >
            </div>
        </div> 
    `,
};

MILESTONE_CONTAINER.insertAdjacentHTML('beforebegin', milestoneHtml.two);

function updateMilestone(button, value) {
	removeOutput();
	clearSelectedButton();

	switch (value) {
		case 'one':
			MILESTONE_CONTAINER.insertAdjacentHTML('beforebegin', milestoneHtml.one);
			break;
		case 'two':
			MILESTONE_CONTAINER.insertAdjacentHTML('beforebegin', milestoneHtml.two);
			break;
		case 'three':
			MILESTONE_CONTAINER.insertAdjacentHTML(
				'beforebegin',
				milestoneHtml.three
			);
			break;
	}

	button.classList.add('selected');
}

function removeOutput() {
	const output = document.getElementById('milestone-container');
	output.remove();
}

function clearSelectedButton() {
	const element = document.querySelector('.selected');
	element.classList.remove('selected');
}
