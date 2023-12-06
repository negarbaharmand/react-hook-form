import { useForm } from "react-hook-form";

export const Form = ({ addSkill }) => {
  const {
    register,
    handleSubmit,
    setValue,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    if (data.skill.trim() === "") {
      return;
    }

    addSkill(data.skill);
    setValue("skill", "");
  };

  return (
    <form className="form-inline" onSubmit={handleSubmit(onSubmit)}>
      <div className="row align-items-center">
        <div className="col-auto">
          <input
            type="text"
            className={`form-control ${errors.skill ? "is-invalid" : ""}`}
            id="skill"
            placeholder="Skill title"
            {...register("skill", { required: "This field is required." })}
          />
          {errors.skill && (
            <div className="invalid-feedback">{errors.skill.message}</div>
          )}
        </div>

        <div className="col-auto">
          <button type="submit" className="btn btn-success ml-2">
            +
          </button>
        </div>
      </div>
    </form>
  );
};
