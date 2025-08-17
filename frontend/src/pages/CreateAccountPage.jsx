import React, { useState } from "react";
import { Lock, Mail } from "lucide-react";

const CreateAccountForm = ({ onSubmit }) => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [error, setError] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const validateEmail = (email) => {
    return /\S+@\S+\.\S+/.test(email);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validateEmail(formData.email)) {
      setError("Please enter a valid email address");
      return;
    }

    if (formData.password.length < 6) {
      setError("Password must be at least 6 characters");
      return;
    }

    if (formData.password !== formData.confirmPassword) {
      setError("Passwords do not match");
      return;
    }

    setError("");
    onSubmit(formData);
  };

  const isFormValid =
    formData.email &&
    formData.password &&
    formData.confirmPassword &&
    validateEmail(formData.email) &&
    formData.password === formData.confirmPassword;

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <button className="mb-6 text-gray-600 hover:text-gray-800 flex items-center gap-2 transition-colors">
          ← Back to selection
        </button>
        <div className="card bg-white shadow-lg rounded-xl p-8">
          <div className="text-center mb-8">
            <div className="w-16 h-16 bg-primary-100 rounded-full flex items-center justify-center mx-auto mb-4">
              <Lock className="w-8 h-8 text-primary-600" />
            </div>
            <h2 className="text-3xl font-bold text-gray-900">Create Account</h2>
            <p className="text-gray-600 mt-2">
              Sign up with your email and password
            </p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Email */}
            <div>
              <label
                htmlFor="email"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Email Address *
              </label>
              <div className="flex items-center input-field border rounded-lg px-3 py-2">
                <Mail className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter your email"
                  required
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label
                htmlFor="password"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Password *
              </label>
              <div className="flex items-center input-field border rounded-lg px-3 py-2">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Enter your password"
                  required
                />
              </div>
              <p className="text-sm text-gray-500 mt-1">
                Password must be at least 6 characters
              </p>
            </div>

            {/* Confirm Password */}
            <div>
              <label
                htmlFor="confirmPassword"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Confirm Password *
              </label>
              <div className="flex items-center input-field border rounded-lg px-3 py-2">
                <Lock className="w-5 h-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  className="flex-1 outline-none"
                  placeholder="Confirm your password"
                  required
                />
              </div>
            </div>

            {/* Error Message */}
            {error && <p className="text-red-500 text-sm text-center">{error}</p>}

            {/* Submit */}
            <button
              type="submit"
              disabled={!isFormValid}
              className={`w-full py-3 px-4 rounded-lg font-medium transition-colors duration-200 ${
                isFormValid
                  ? "bg-primary-600 hover:bg-primary-700 text-white"
                  : "bg-gray-300 text-gray-500 cursor-not-allowed"
              }`}
            >
              Create Account
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default CreateAccountForm;
