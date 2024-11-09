import User from '../model/userModel.js';

export const create = async (req, res) => {
    try {
        const { email } = req.body; // Extract the email from the request body

        // Check if the user already exists
        const userExist = await User.findOne({ email });
        if (userExist) {
            return res.status(400).json({ message: "User already exists." });
        }

        // If the user doesn't exist, create a new user
        const newUser = new User(req.body);
        const savedData = await newUser.save();

        //res.status(200).json({ savedData });
        res.status(200).json({message: 'User created successfully'})

    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
};


export const getAllUsers = async(req,res)=>{
    try {
        const userData = await User.find();
        if(!userData || userData.length === 0){
            return res.status(404).json({ message : "User data not found." });
        }
        return res.status(200).json({ userData });
        
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const getUserById = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({ message : "User not found." });
        }
        res.status(200).json({userExist});
        
    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const update = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({ message : "User not found." });
        }
        const updatedData = await User.findByIdAndUpdate(id, req.body,{
            new:true
        })
        
        //res.status(200).json({updatedData});
        res.status(200).json({message: 'User Updated successfully'})


    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}

export const deleteUser = async(req,res)=>{
    try {
        const id = req.params.id;
        const userExist = await User.findById(id);

        if(!userExist){
            return res.status(404).json({ message : "User not found." });
        }
        await User.findByIdAndDelete(id);
        res.status(200).json({ message : "User deleted succeessfully." });


    } catch (error) {
        res.status(500).json({ errorMessage: error.message });
    }
}