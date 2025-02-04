import { Transition } from "@headlessui/react";
import { useForm } from "@inertiajs/react";
import { Button, Card, Form } from "react-bootstrap";

export default function NdaUserForm({}) {
  const {
    data: userData,
    setData: setUserData,
    errors: userErrors,
    post: userPost,
    processing: userProcessing,
    reset: userReset,
    recentlySuccessful: userRecentlySuccessful,
  } = useForm({
    name: "",
    email: "",
    organization: "",
    user_meta_data: {
      address: "",
      state: "",
      country: "",
    },
    category: "",
    password: "",
    password_confirmation: "",
    user_role: "Guest",
  });

  const onUserSubmit = (e: any) => {
    e.preventDefault();
    userPost(route("nda.store"), {
      preserveScroll: true,
      onSuccess: () => {
        userReset();
      },
    });
  };

  return (
    <Card>
      <Card.Body>
        <p className="text-muted text-center">
          You can Create New Guest User to Grant Access
        </p>
        <form onSubmit={onUserSubmit}>
          {/* name input field */}
          <div>
            <Form.Label htmlFor="name">
              Full Name <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="name"
              name="name"
              placeholder="Enter Name"
              value={userData.name}
              autoFocus
              className={
                "form-control" + (userErrors.name ? " is-invalid" : "")
              }
              onChange={(e) => setUserData("name", e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
              {userErrors.name}
            </Form.Control.Feedback>
          </div>

          <div>
            <Form.Label htmlFor="email">
              Email <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="email"
              name="email"
              placeholder="Enter Email"
              value={userData.email}
              className={
                "form-control" + (userErrors.email ? " is-invalid" : "")
              }
              onChange={(e) => setUserData("email", e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
              {userErrors.email}
            </Form.Control.Feedback>
          </div>

          <div>
            <Form.Label htmlFor="organization">
              Organization <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="organization"
              name="organization"
              placeholder="Organization Name"
              value={userData.organization}
              className={
                "form-control" + (userErrors.organization ? " is-invalid" : "")
              }
              onChange={(e) => setUserData("organization", e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
              {userErrors.organization}
            </Form.Control.Feedback>
          </div>

          {/* Organization details in user_meta_data */}
          <div>
            <Form.Label htmlFor="address">
              Organization Address <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="address"
              name="address"
              placeholder="Organization Address"
              value={userData.user_meta_data.address}
              onChange={(e) =>
                setUserData("user_meta_data", {
                  ...userData.user_meta_data,
                  address: e.target.value,
                })
              }
              required
            />
          </div>

          <div>
            <Form.Label htmlFor="state">
              Organization State <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="state"
              name="state"
              placeholder="Organization State"
              value={userData.user_meta_data.state}
              onChange={(e) =>
                setUserData("user_meta_data", {
                  ...userData.user_meta_data,
                  state: e.target.value,
                })
              }
              required
            />
          </div>

          <div>
            <Form.Label htmlFor="country">
              Organization Country <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="text"
              id="country"
              name="country"
              placeholder="Organization Country"
              value={userData.user_meta_data.country}
              onChange={(e) =>
                setUserData("user_meta_data", {
                  ...userData.user_meta_data,
                  country: e.target.value,
                })
              }
              required
            />
          </div>

          {/* for password */}
          <div>
            <Form.Label htmlFor="inputpassword">
              Password <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              id="inputpassword"
              name="password"
              value={userData.password}
              placeholder="Enter Password"
              className={
                "form-control" + (userErrors.password ? " is-invalid" : "")
              }
              onChange={(e) => setUserData("password", e.target.value)}
              required
            />
            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
              {userErrors.password}
            </Form.Control.Feedback>
          </div>

          {/* for confirm password */}
          <div>
            <Form.Label htmlFor="inputpassword_confirmation">
              Password Confirmation <span className="text-danger ms-1">*</span>
            </Form.Label>
            <Form.Control
              type="password"
              id="inputpassword_confirmation"
              name="password_confirmation"
              value={userData.password_confirmation}
              placeholder="Password Confirmation"
              className={
                "form-control" +
                (userErrors.password_confirmation ? " is-invalid" : "")
              }
              onChange={(e) =>
                setUserData("password_confirmation", e.target.value)
              }
              required
            />
            <Form.Control.Feedback type="invalid" className="mt-2 d-block">
              {userErrors.password_confirmation}
            </Form.Control.Feedback>
          </div>

          <Transition
            show={userRecentlySuccessful}
            enter="transition ease-in-out"
            enterFrom="opacity-0"
            leave="transition ease-in-out"
            leaveTo="opacity-0"
          >
            <p className="text-sm text-gray-600">Saved.</p>
          </Transition>

          <Button type="submit" className="mt-2" disabled={userProcessing}>
            Submit
          </Button>
        </form>
      </Card.Body>
    </Card>
  );
}
