import { useState, useEffect } from "react";
import axiosInstance from "../../utils/axiosInstance";
import { FormCard } from "../../components/common/FormCard";
import { ProtectedComponent } from "../../components/ProtectedComponent";
import { Alert } from "flowbite-react";
import { HiInformationCircle } from "react-icons/hi";

export function UserManagement() {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [isEditModalOpen, setIsEditModalOpen] = useState(false);
  const [isAddModalOpen, setIsAddModalOpen] = useState(false);
  const [error, setError] = useState(null);

  function updateUsers() {
    axiosInstance
      .get("/v51/users")
      .then((res) => {
        setUsers(res.data);
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log(e);
      });
  }
  useEffect(updateUsers, []);

  const openEditUserModal = (user) => {
    setSelectedUser(user);
    setIsEditModalOpen(true);
  };

  const openAddUserModal = () => {
    setSelectedUser(null);
    setIsAddModalOpen(true);
  };

  const handleEditUser = (user) => {
    if (user.name === "" || user.email === "" || user.company === "") {
      setError("Please fill in all the fields");
      return;
    }
    axiosInstance
      .put(`/v51/users/${user.id}`, user)
      .then((res) => {
        setSelectedUser(null);
        setIsEditModalOpen(false);
        updateUsers();
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log(e);
      });
  };

  const handleAddUser = (user) => {
    if (user.name === "" || user.email === "" || user.company === "") {
      setError("Please fill in all the fields");
      return;
    }
    axiosInstance
      .post("/v51/users", user)
      .then((res) => {
        setIsAddModalOpen(false);
        updateUsers();
      })
      .catch((e) => {
        setError(e.response.data.message);
        console.log(e);
      });
  };

  const handleCloseModal = () => {
    setIsEditModalOpen(false);
    setIsAddModalOpen(false);
  };

  return (
    <ProtectedComponent role={"ADMIN"}>
      <section className="container mx-auto flex flex-col items-center justify-center overflow-x-auto lg:w-9/12 lg:py-0">
        <div className="-mx-4 flex flex-wrap">
          <div className="w-full px-4">
            <div className="mx-auto mb-[60px] max-w-[520px] text-center lg:mb-20">
              <span className="text-primary mb-2 block text-lg font-semibold dark:text-white"></span>
              <h2 className="text-dark mb-4 text-3xl font-bold dark:text-white sm:text-[40px]/[48px]">
                User Management
              </h2>
            </div>
          </div>
        </div>
        <FormCard>
          <table className=" w-full overflow-x-auto text-left text-sm text-gray-500 dark:text-gray-400 rtl:text-right">
            <thead className="bg-gray-50 text-xs uppercase text-gray-700 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" className="px-6 py-3">
                  Name
                </th>
                <th scope="col" className="px-6 py-3">
                  Email
                </th>
                <th scope="col" className="px-6 py-3">
                  Company
                </th>
                <th scope="col" className="px-6 py-3">
                  Role
                </th>
                <th scope="col" className="px-6 py-3">
                  Active
                </th>
                <th scope="col" className="px-6 py-3">
                  Last Login
                </th>
                <th scope="col" className="px-6 py-3"></th>
              </tr>
            </thead>
            <tbody>
              {users &&
                users.map((user) => (
                  <tr key={user.id}>
                    <th
                      scope="row"
                      className="whitespace-nowrap px-6 py-4 font-medium text-gray-900 dark:text-white"
                    >
                      {user.name}
                    </th>
                    <td className="px-6 py-4">{user.email}</td>
                    <td className="px-6 py-4">{user.company}</td>
                    <td className="px-6 py-4">{user.role}</td>
                    <td className="px-6 py-4">
                      <input
                        type="checkbox"
                        name="active"
                        checked={user.active ? "checked" : ""}
                        // onChange={handleChange}
                        className="form-checkbox h-5 w-5 text-blue-600 dark:border-gray-600 dark:bg-gray-700 "
                      />
                    </td>
                    <td className="px-6 py-4">
                      {new Date(user.lastLogin).toLocaleString()}
                    </td>
                    <td className="px-6 py-4">
                      <button
                        onClick={() => openEditUserModal(user)}
                        className="flex items-center rounded bg-blue-600 px-3 py-1.5 text-sm font-medium text-white hover:bg-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-300 focus:ring-opacity-75"
                      >
                        <svg
                          className="mr-1 h-4 w-4"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                          xmlns="http://www.w3.org/2000/svg"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth="2"
                            d="M11 17h2v2H7v-6h2v2h2v-2H5V7h6v2H9v2h2V9h2V5h2v6h-2v2h2v2h2v-2h2v6h-6v-2h-2v2z"
                          ></path>
                        </svg>
                        Edit
                      </button>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </FormCard>
        <button
          onClick={openAddUserModal}
          className="mt-4 rounded bg-blue-600 px-4 py-2 text-white"
        >
          Add New User
        </button>

        {isEditModalOpen && (
          <UserModal
            user={selectedUser}
            onClose={handleCloseModal}
            onSave={handleEditUser}
            error={error}
          />
        )}

        {isAddModalOpen && (
          <UserModal
            user={null}
            onClose={handleCloseModal}
            onSave={handleAddUser}
            error={error}
          />
        )}
      </section>
    </ProtectedComponent>
  );
}

function UserModal({ user, onClose, onSave, error }) {
  const [formData, setFormData] = useState(
    user || {
      name: "",
      email: "",
      company: "",
      role: "user",
      active: false,
      lastLogin: new Date().toISOString().substring(0, 16),
    },
  );

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: type === "checkbox" ? checked : value,
    }));
  };

  const handleSubmit = () => {
    onSave(formData);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
      <div className="w-full max-w-md rounded-lg bg-white p-6 shadow-lg dark:bg-gray-800">
        <h2 className="mb-4 text-xl font-bold text-gray-900 dark:text-white">
          {user ? "Edit User" : "Add New User"}
        </h2>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
            Name
          </label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
            Email
          </label>
          <input
            disabled={user}
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            class={`${
              error
                ? "border-red-500 focus:border-red-500 dark:border-red-500"
                : "focus:border-primary-500"
            } w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200`}
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
            Company
          </label>
          <input
            type="text"
            name="company"
            value={formData.company}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          />
        </div>
        <div className="mb-4">
          <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
            Role
          </label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full rounded border px-3 py-2 dark:border-gray-600 dark:bg-gray-700 dark:text-gray-200"
          >
            <option value="USER">USER</option>
            <option value="ADMIN">ADMIN</option>
          </select>
        </div>
        {user && (
          <div className="mb-4">
            <label className="mb-2 block text-sm font-bold text-gray-700 dark:text-gray-200">
              Active
            </label>
            <input
              type="checkbox"
              name="active"
              checked={formData.active}
              onChange={handleChange}
              className="form-checkbox h-5 w-5 text-blue-600 dark:border-gray-600 dark:bg-gray-700 "
            />
          </div>
        )}

        <div className="flex w-full justify-end">
          <div className="mr-auto">
            <p
              id="helper-text-explanation"
              class="mt-2	 text-center text-sm text-red-500"
            >
              {error}
            </p>
          </div>
          <button
            onClick={onClose}
            className="mr-2 rounded bg-gray-300 px-4 py-2 dark:bg-gray-600 dark:text-gray-200"
          >
            Cancel
          </button>
          <button
            onClick={handleSubmit}
            className="rounded bg-blue-600 px-4 py-2 text-white dark:bg-blue-500"
          >
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
