import Modal from "react-modal";
import { Input } from "../atoms/Input";
import { PrimaryBtn } from "../atoms/PrimaryBtn";
import { format } from "date-fns";
import { ChangeEvent, useState } from "react";
import { NewSchedule } from "../../types/calendar";
import { Textarea } from "../atoms/Textarea";

type PropsType = {
  isOpen: boolean;
  closeModal: () => void;
};

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    width: "30%",
    height: "50vh",
    transform: "translate(-50%, -50%)",
  },
};

export const CreateScheduleModal = ({ isOpen, closeModal }: PropsType) => {
  const [newSchedule, setNewSchedule] = useState<NewSchedule>({
    title: "",
    date: format(new Date(), "yyyy-MM-dd"),
    description: "",
  });

  const changeNewSchedule = (
    event: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = event.target;
    setNewSchedule({ ...newSchedule, [name]: value });
  };
  return (
    <Modal isOpen={isOpen} style={customStyles} onRequestClose={closeModal}>
      <div>
        <h3 className="text-center text-3xl text-lime-800 font-bold pb-5">
          予定作成
        </h3>
        <form className="flex flex-col gap-8">
          <div className="w-[100%] flex items-center">
            <label htmlFor="title-form" className="w-[30%] text-lime-800">
              タイトル
            </label>
            <Input
              id="title-form"
              name="title"
              type="text"
              value={newSchedule.title}
              onChange={changeNewSchedule}
            />
          </div>
          <div className="w-[100%] flex items-center">
            <label htmlFor="date-form" className="w-[30%] text-lime-800">
              日付
            </label>
            <Input
              id="date-form"
              name="date"
              type="date"
              value={newSchedule.date}
              onChange={changeNewSchedule}
            />
          </div>
          <div className="w-[100%] flex items-center">
            <label className="w-[30%] text-lime-800">内容</label>
            <Textarea
              name="description"
              value={newSchedule.description}
              onChange={changeNewSchedule}
            />
          </div>
          <div className="flex justify-center">
            <PrimaryBtn size="lg" onClick={() => null}>
              作成
            </PrimaryBtn>
          </div>
        </form>
      </div>
    </Modal>
  );
};
