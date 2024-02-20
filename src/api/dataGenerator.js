export function formDataGenerator() {

    const departments = [
		"Physics",
		"Estates",
		"Geography",
		"History",
    ]

    const campuses = [
        'Castlereagh',
        'Central',
        // 'CM Campus',
        'East',
        'Millfield',
        'North',
        // 'South',
        // 'West'
    ]

    const data = {
        code: '',
        name: '',
        department: 'Physics',
        campus: 'Castlereagh',
        building: 'A Block',
        floor: 'A1',

        departmentOptions: departments,
        campusOptions: campuses,
        buildingOptions: getBuildingOptions(),
        floorOptions: getFloorOptions(),

        virtual: false,
        area: 25,
        carbon: 100,
        reserved: true,

        talk: 24,
        seminar: 3,
        laboratory: 16,
        practival: 1,
        workshop:5
    }

    return data
}

function getBuildingOptions() {
    return [
        {name: 'A Block', campus: 'Castlereagh'},
        {name: 'B Block', campus: 'Castlereagh'},
        {name: 'C Block', campus: 'Castlereagh'},
        {name: 'New Build 1', campus: 'Central'},
        {name: 'Test Build', campus: 'Central'},
        {name: 'Other 1', campus: 'East'},
        {name: 'Mill 1', campus: 'Millfield'},
        {name: 'Diff 1', campus: 'North'},
        {name: 'Diff 2', campus: 'North'},
        {name: 'Diff 3', campus: 'North'},
    ]
}

function getFloorOptions() {
    return [
        {name: 'A1', building: 'A Block'},
        {name: 'A2', building: 'A Block'},
        {name: 'A3', building: 'A Block'},
        {name: 'B1', building: 'B Block'},
        {name: 'C1', building: 'C Block'},
        {name: 'NB 1', building: 'New Build 1'},
        {name: 'TB 1', building: 'Test Build'},
        {name: 'O1', building: 'Other 1'},
        {name: 'ML 1', building: 'Mill 1'},
        {name: 'DF1', building: 'Diff 1'},
        {name: 'DF 2', building: 'Diff 2'},
        {name: 'DF 3', building: 'Diff 3'},
    ]
}