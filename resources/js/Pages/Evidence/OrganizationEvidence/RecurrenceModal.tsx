import { useForm } from "@inertiajs/react";
import { Button, Modal, Row } from "react-bootstrap";
import Select from "react-select";

export default function RecurrenceModal({
  show,
  setShow,
  requirement,
  routeTo,
}: any) {
  const recurrences = [
    "Annually",
    "Bi-Annually",
    "Quarterly",
    "Monthly",
    "Never",
  ];
  const { data, setData, errors, post, processing, reset } = useForm({
    recurrence: "",
    _method: "PUT",
  });
  const onSubmit = (e: any) => {
    e.preventDefault();
    post(route(routeTo, requirement.id), {
      preserveScroll: true,
      onSuccess: () => {
        setShow(false);
        reset();
      },
    });
  };

  return (
    <Modal show={show} onHide={() => setShow(false)} centered>
      <Modal.Header closeButton>Updata Recurrence</Modal.Header>
      <Modal.Body>
        <form onSubmit={onSubmit}>
          <Row>
            <Select
              onChange={(e: any) => setData("recurrence", e.value)}
              options={recurrences.map((assign: any) => ({
                value: assign,
                label: assign,
              }))}
              className="text-primary"
              styles={{
                singleValue: (baseStyles, state) => ({
                  ...baseStyles,
                  color: "black",
                }),
              }}
              required
            />
            {/* <select
                className="form-select"
                data-choices
                data-choices-search-false
                id="assign-input"
                name={reqName}
                onChange={handleChange}
              >
                <option>Not Assigned</option>
                {assignees.map((assignee: any) => (
                  <option key={assignee.id} value={assignee.id}>
                    {assignee.name}
                  </option>
                ))}
              </select> */}
          </Row>
          <Row className="pt-3">
            <div>
              <Button
                type="submit"
                className="btn btn-primary w-25"
                disabled={processing}
              >
                Save
              </Button>
            </div>
          </Row>
        </form>
      </Modal.Body>
    </Modal>
  );
}
