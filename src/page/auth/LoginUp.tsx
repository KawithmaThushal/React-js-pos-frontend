import { useState } from "react";


function LoginUp(){

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (event:any) => {
        event.preventDefault();

        // Dummy validation logic (replace with actual logic)
        if (email !== "user@example.com" || password !== "password123") {
            setError("Invalid username or password");
            
            // Clear the error message after 3 seconds
            setTimeout(() => {
                setError('');
            }, 6000);
        } else {
            setError("");
            console.log("Login successful:", { email, password });
            // Proceed to next steps, like redirecting the user
        }
    };
    
    return(
        
        <section className="h-screen bg-gray-100 flex items-center justify-center">
            <div className="w-[500px]  px-6 py-8  bg-white shadow-2xl drop-shadow-lg  rounded-lg ">
                <h1 className="text-2xl font-bold font-serif  text-center text-gray-800 mb-6 ">Login</h1>

             
                <form onSubmit={handleSubmit}>
                    {/* User Name Input */}
                    <div className="mb-4">
                        <label htmlFor="Username" className="block text-gray-900  font-medium mb-2">
                            Username
                        </label>
                        <input
                            type="text"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your Username"
                            required
                        />
                    </div>

                    {/* Password Input */}
                    <div className="mb-4">
                        <label htmlFor="password" className="block text-gray-900 font-medium mb-2">
                            Password
                        </label>
                        <input
                            type="password"
                            className="w-full px-4 py-2 border border-gray-300 rounded-lg shadow-sm focus:outline-none focus:ring focus:ring-blue-300"
                            placeholder="Enter your password"
                            required
                        />
                    </div>

                    {error && (
                    <div className="mb-4 p-3 text-center text-red-700 ">
                        {error}
                    </div>
                )}


                    {/* Submit Button */}
                    <button
                        type="submit"
                        className="w-full py-2 bg-blue-600 font-serif text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring focus:ring-blue-300"
                    >
                        Login
                    </button>
                </form>
            </div>
        </section>
    )

}

export default LoginUp;