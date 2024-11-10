// imports my functions so that they can be declared from this branch instead of at the root
// Templates --> register js

export function participantTemplate(count) {
    return `
        <section class="participant${count}">
            <p>Participant ${count}</p>
            <div class="item">
                <label for="fname${count}">First Name<span>*</span></label>
                <input id="fname${count}" type="text" name="fname${count}" value="" required="">
            </div>
            <div class="item activities">
                <label for="activity${count}">Activity #<span>*</span></label>
                <input id="activity${count}" type="text" name="activity${count}">
            </div>
            <div class="item">
                <label for="fee${count}">Fee ($)<span>*</span></label>
                <input id="fee${count}" type="number" name="fee${count}">
            </div>
            <div class="item">
                <label for="date${count}">Desired Date <span>*</span></label>
                <input id="date${count}" type="date" name="date${count}">
            </div>
            <div class="item">
                <label for="grade${count}">Grade</label>
                <select id="grade${count}" name="grade${count}">
                    <option selected="" value="" disabled=""></option>
                    <option value="1">1st</option>
                    <option value="2">2nd</option>
                    <option value="3">3rd</option>
                    <option value="4">4th</option>
                </select>
            </div>
        </section>
    `;
}

export function successTemplate(info) {
    return `
        <p>Thank you ${info.adultName} for registering. You have registered ${info.participantCount} participants and owe $${info.totalFees} in Fees.</p>
    `;
}
