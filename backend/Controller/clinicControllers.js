let clinicData = [];

//get all clinic => /api/clinic
exports.getAllClinic = (req, res) => {
    const data = {
        message: "Sucessfull",
        result: clinicData,
        count: clinicData.length
    };
    res.status(200).json(data);
    console.log(data);
    console.log(req.body);
}

//create a clinic => /api/create-clinic
exports.createClinic = (req, res) => {
    const uniqueId = Math.random().toString(16).slice(4);
    const newClinic = {
        ...req.body,
        id: uniqueId
    };
    console.log(newClinic);

    clinicData.push(newClinic);
    console.log(clinicData);
    res.status(200).json({
        message: "Sucessfully created the Clinic",
        result: newClinic
    });
};

//create a clinic => /api/clinic/id
exports.updateClinic = (req, res) => {
    let clinicId = req.params.id;
    console.log(clinicId);
    let clinic = clinicData.find(item => item.id === clinicId)
    console.log(clinic);
    if (!clinic) {
        return res
            .status(404)
            .json({ message: "Clinic Not found" });

    }
    let updatedclinic = {
        ...clinic,
        ...req.body
    };

    clinicData = clinicData.map((el) => el.id === clinicId ? updatedclinic : el);

    return res.status(200).json({
        message: "Scucessfully updated the clinic",
        result: updatedclinic
    });
};


exports.deleteClinic = (req, res) => {
    let clinicId = req.params.id;
    let clinic = clinicData.find(item => item.id === clinicId);
    if (!clinic) {
        return res
            .status(404)
            .json({ message: "clinic not found" });
    }
    clinicData = clinicData.filter(item => item.id !== clinicId);
    return res
        .status(200)
        .json({ message: "SucessFully Deleted the clinic", result: clinic });
};